import { useState } from "react";
import "./App.css";
function App() {
  const [weight, setweight] = useState();
  const [height, setheight] = useState();
  const [bmi, setbmi] = useState(0);
  const [message, setmessage] = useState("");

  let calBmi = () => {
    event?.preventDefault();
    if (height == 0 || weight == 0) {
      alert("Please Enter Your Credentials");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setbmi(bmi.toFixed(1));
      console.log(bmi);

      if (bmi < 18.5) {
        setmessage("You are Underweight");
      } else if (bmi >= 18.5 && bmi < 25) {
        setmessage("You are Healthy");
      } else {
        setmessage("You are Overweight");
      }
    }
  };

  return (
    <>
      <body className="  flex justify-center p-[2rem]">
        <div className=" shadow rounded-lg py-3 px-10 text-base md:text-2xl">
          <h1 className="text-center text-[#535353] py-3 font-semibold text-xl">
            BMI CALCULATOR
          </h1>
          <form className=" space-y-5" action="" onSubmit={calBmi}>
            <div className="md:space-x-5 space-y-2">
              <label htmlFor="">Weight (Kgs):</label>
              <input
                className="px-3 py-2 rounded-md border-[1px] border-black"
                type="text"
                placeholder="Enter Your Weight"
                value={weight}
                onChange={(e) => setweight(e.target.value)}
              />
            </div>
            <div className="md:space-x-5 space-y-2">
              <label htmlFor="">Height (inch):</label>
              <input
                className="px-3 py-2 rounded-md border-[1px] border-black"
                type="text"
                placeholder="Enter Your Height"
                value={height}
                onChange={(e) => setheight(e.target.value)}
              />
            </div>
            <div className="space-y-3 flex flex-col justify-center items-center">
              <button
                className="bg-[#c977ff7f] rounded-lg md:w-[20vw] w-[50vw]  px-6 py-2 border-none text-white border-black"
                type="submit"
              >
                Submit
              </button>
              <button
              onClick={() => window.location.reload()}
                className="bg-transparent rounded-lg md:w-[20vw] w-[50vw]  px-6 py-2 border-[1px] border-black"
                type="submit"
              
              >
                Reload
              </button>
            </div>

            <div>
              <h3>Your BMI is : {bmi}</h3>
              <center>
                {" "}
                <p className="md:my-5" >{message}</p>
              </center>
            </div>
          </form>
        </div>
      </body>
    </>
  );
}

export default App;
