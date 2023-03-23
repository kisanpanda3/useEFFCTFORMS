import "./styles.css";
import Timer from "./Component/Timer";
import { useState } from "react";
import FocusInput from "./Component/FocusInput";
import Forms from "./Component/Forms";
export default function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      {/* <FocusInput /> */}
      {/* {show && <Timer />}
      <button onClick={()=>setShow(!show)}>TOGGLE</button> */}
      <Forms />
    </div>
  );
}
