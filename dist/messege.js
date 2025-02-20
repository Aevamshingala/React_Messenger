import { useState } from "react";
import "./App.css";
function Messenger({
  title = "hello",
  message = "hi👋, I am from React Messenger",
  style = ""
}) {
  const [close, setClose] = useState(false);
  const handleClose = () => {
    setClose(true);
    const time = setTimeout(() => {
      document.querySelector(".hide").style.display = "none";
      clearTimeout(time);
    }, 2000);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: `frame ${style} ${close ? "hide" : ""}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "header"
  }, /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("h1", {
    className: "title"
  }, title)), /*#__PURE__*/React.createElement("div", {
    className: "exit"
  }, /*#__PURE__*/React.createElement("button", {
    className: "exitbutton",
    onClick: handleClose
  }, /*#__PURE__*/React.createElement("span", {
    className: "cancel"
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "message"
  }, message))));
}
export default Messenger;