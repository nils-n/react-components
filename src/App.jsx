import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Badge from "./components/Badge.jsx";

function App() {
  return (
    <>
      <h1>Component Library</h1>
      <section className="section--badges">
        <Badge color="red">Badge</Badge>
        <Badge color="yellow">Badge</Badge>
        <Badge color="green">Badge</Badge>
        <Badge color="blue">Badge</Badge>
        <Badge color="indigo">Badge</Badge>
        <Badge color="purple">Badge</Badge>
        <Badge color="pink">Badge</Badge>
      </section>
      <section className="section--badges">
        <Badge color="red" shape="pill">
          Badge
        </Badge>
        <Badge color="yellow" shape="pill">
          Badge
        </Badge>
        <Badge color="green" shape="pill">
          Badge
        </Badge>
        <Badge color="blue" shape="pill">
          Badge
        </Badge>
        <Badge color="indigo" shape="pill">
          Badge
        </Badge>
        <Badge color="purple" shape="pill">
          Badge
        </Badge>
        <Badge color="pink" shape="pill">
          Badge
        </Badge>
      </section>
    </>
  );
}

export default App;
