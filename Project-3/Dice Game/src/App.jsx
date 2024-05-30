import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import GamePlay from "./GamePlay";
function App() {
  const [gameStart, setgameStart] = useState(false);

  const toggleGame = () => {
    setgameStart((prev) => !prev);
  };

  return (
    <>
      {gameStart? <GamePlay /> :<Home toggle={toggleGame} /> }
    </>
  );
}

export default App;
