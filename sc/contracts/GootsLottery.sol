// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

/*
*     #####                                #                                              
*    #     #  ####   ####  #####  ####     #        ####  ##### ##### ###### #####  #   # 
*    #       #    # #    #   #   #         #       #    #   #     #   #      #    #  # #  
*    #  #### #    # #    #   #    ####     #       #    #   #     #   #####  #    #   #   
*    #     # #    # #    #   #        #    #       #    #   #     #   #      #####    #   
*    #     # #    # #    #   #   #    #    #       #    #   #     #   #      #   #    #   
*     #####   ####   ####    #    ####     #######  ####    #     #   ###### #    #   #                                                                                        
*/

contract GootsLottery is ERC721Enumerable, Ownable {
    using Counters for Counters.Counter;

    // token counter
    Counters.Counter private _tokenIds;

    // NFT Name
    string public constant TOKEN_NAME = "The Golden Goot";
    // NFT Symbol
    string public constant TOKEN_SYMBOL = "Goot";

    // total NFTs minted in public sale
    uint256 public totalMintNumberPublicSale;

    // total NFTs airdropped
    uint256 public totalMintNumberAirDrop;

    // public sale price
    uint256 public publicSalePrice;

    /**
     *  Public Sale requries this variable to be TRUE
     */
    bool public publicSaleStatus;

    // NFT toke `baseURI`
    string public baseURI;

    // mapping nft number to flag of sold
    mapping(uint256 => bool) private _nftSoldList;

    /**
     *  Emitted when `_tokenBaseURI` updated
     */
    event BaseURI(string bseURI);

    /**
     *  Emitted when `publicSaleStatus` updated
     */
    event PublicSaleStatus(bool status);

    /**
     *  Emitted when `publicSalePrice` updated
     */
    event PublicSalePrice(uint256 price);

    /**
     *  Emitted when token sold in public sale
     */
    event PublicSale(address indexed client, uint256 amount, uint256 price);

    /**
     *  Emitted when Airdrop
     */
    event Airdrop(address indexed client, uint256[] tokensIds);

    /**
     *  Emitted when Withdraw
     */
    event Withdraw(address indexed owner, address indexed to, uint256 amount);

    // https://goots-34a71ba6d699.herokuapp.com/nft/
    constructor(string memory BASEURI) ERC721(TOKEN_NAME, TOKEN_SYMBOL) {
        baseURI = BASEURI;
        publicSalePrice = 10_000_000_000_000_000; // 0.01
    }

    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }

    /**
     *  set `baseURI`
     */
    function setBaseURI(string calldata uri) external onlyOwner {
        baseURI = uri;
        emit BaseURI(uri);
    }

    /**
     *  set `publicSalePrice`
     */
    function setPublicSalePrice(uint256 price) external onlyOwner {
        require(price > 0, "GootsLottery: Public sale amount can't be zero.");
        if (publicSalePrice != price) {
            publicSalePrice = price;
        }
        emit PublicSalePrice(price);
    }

    /**
     *  set `publicSaleStatus`
     */
    function setPublicSaleStatus(bool status) external onlyOwner {
        if (publicSaleStatus != status) {
            publicSaleStatus = status;
        }
        emit PublicSaleStatus(status);
    }

    function publicSaleMint(uint256 amount) internal {
        require(publicSaleStatus == true, "GootsLottery: Public sale is not live.");
        require(
            publicSalePrice * amount == msg.value,
            "GootsLottery: Your public sale payment amount does not match required presale minting amount."
        );
        for (uint256 i = 0; i < amount; i++) {
            while (_nftSoldList[_tokenIds.current()] == true) {
                _tokenIds.increment();
            }
            _nftSoldList[_tokenIds.current()] = true;
            _safeMint(msg.sender, _tokenIds.current());
            _tokenIds.increment();
        }
        totalMintNumberPublicSale += amount;
        emit PublicSale(msg.sender, amount, msg.value);
    }

    /**
     *  @param amount is amount for minting
     *  access by admin
     */
    function clientMint(uint256 amount) external payable {
        require(amount > 0, "GootsLottery: Mint amount can't be zero");

        publicSaleMint(amount);
    }

    /**
     *  @param client airdrop address
     *  @param tokenIdArray token number address for airdrop
     * access by admin
     */
    function adminAirdrop(address client, uint256[] calldata tokenIdArray)
        external
        onlyOwner
    {   
        require(client != address(0), "GootsLottery: You can't airdrop to the zero address");
        for (uint256 i = 0; i < tokenIdArray.length; i++) {
            require(
                _nftSoldList[tokenIdArray[i]] == false,
                "GootsLottery: You can't airdrop token already minted."
            );
        }
        for (uint256 i = 0; i < tokenIdArray.length; i++) {
            _nftSoldList[tokenIdArray[i]] = true;
            _safeMint(client, tokenIdArray[i]);
        }
        totalMintNumberAirDrop += tokenIdArray.length;
        emit Airdrop(client, tokenIdArray);
    }

    /**
     * get total mint number
     */
    function getTotalMintNumber() public view returns (uint256) {
        return
            totalMintNumberAirDrop +
            totalMintNumberPublicSale;
    }

    /**
     * @param to is wallet address that receives accumulated funds
     * access admin
     */
    function withdrawAdmin(address payable to)
        external
        onlyOwner
    {
        require(to != address(0), "GootsLottery: Can't withdraw to the zero address.");
        require(
            0 < address(this).balance,
            "GootsLottery: No balance on contract to withdraw."
        );
        to.transfer(address(this).balance);
        emit Withdraw(owner(), to, address(this).balance);
    }
}
