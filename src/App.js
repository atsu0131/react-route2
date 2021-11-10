import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

// import { useState, useCallback } from "react";
// import { ChildArea } from "./ChildArea";
import { Router } from "./Router/Router";
import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { Page1DetailA } from "./Page1DetailA";
import { Page1DetailB } from "./Page1DetailB";
import "./styles.css";

export default function App() {
  // const [text, setText] = useState("");
  // const [open, setOpen] = useState(false);

  // const onChangeText = (e) => setText(e.target.value);

  // const onClickOpen = () => setOpen(!open);

  // const onClickClose = useCallback(() => setOpen(false), []);

  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">page1</Link>
        <br />
        <Link to="/page2">page2</Link>
      </div>
      <Router />
    </BrowserRouter>
  );
}
