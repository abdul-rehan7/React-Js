import "./App.css";
import Header from "./components/Header";
import Todos from "./components/Todos";
import Footer from "./components/Footer";
import Todo from "./components/Todo";

function App() {
  return (
    <>
      <Header title="Todo Lists" />
      <Todos />
      <Todo />
      <Footer />
    </>
  );
}

export default App;
