import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactHeader from "./components/ContactHeader";
import Navigation from "./components/navigation";

function App() {
  return (
    <>
     <Navigation/>
     <ContactHeader/>
     <ContactForm/>
    </>
  );
}

export default App;
