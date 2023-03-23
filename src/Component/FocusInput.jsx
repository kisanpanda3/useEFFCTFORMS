import { useRef } from "react";

function FocusInput() {
  const ref = useRef(null);
  const handleClick = () => {
    console.log(ref);
    ref.current.focus();
  };
  return (
    <div>
      <h3>FOCUS INPUT</h3>
      <input ref={ref} autoFocus placeholder="type something" />
      <div>
        <button onClick={handleClick}>FOCUS</button>
      </div>
    </div>
  );
}
export default FocusInput;
