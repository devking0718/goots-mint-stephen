import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { Layout } from './components/layout';
import { emojiCursor } from "cursor-effects";
new emojiCursor({ emoji: ["🥀","🌺", "🌻", "💗", "💖", "💘", "💝"],length: 3,
colors: ["red", "blue"],
size: 4, });

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path='/' element={<HomePage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
