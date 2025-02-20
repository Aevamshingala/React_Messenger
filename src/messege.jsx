import { useState } from "react";
import "./App.css";

function App({
  title = "hello",
  message = "hi👋, I am from React Messenger",
  style = "",
}) {
  const [close, setClose] = useState(false);
  const handleClose = () => {
    setClose(true);
    const time = setTimeout(() => {
      document.querySelector(".hide").style.display = "none";
      clearTimeout(time);
    }, 2000);
  };

  return (
    <>
      <div className={`frame ${style} ${close ? "hide" : ""}`}>
        <div className="header">
          <div>{title && <h1 className="title">{title}</h1>}</div>
          <div className="exit">
            <button className="exitbutton" onClick={handleClose}>
              <span className="cancel"></span>
            </button>
          </div>
        </div>
        <div>
          <p className="message">{message}</p>
        </div>
      </div>
    </>
  );
}

export default App;
