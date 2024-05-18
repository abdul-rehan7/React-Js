import "./App.css";
import Header from "./components/Header";
import Todos from "./components/Todos";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header title="My Todo List" />
      <Todos />
      <Footer />
    </>
  );
}

export default App;
