import React from "react";
import Typed from "typed.js";

function MyComponent() {

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Hello, Buddy!"],
      typeSpeed: 30,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return ( 
    <div className="App gradient-text font-semibold ">
      <span  ref={el} />
    </div>
  );
}

export default MyComponent;
