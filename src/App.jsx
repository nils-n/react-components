import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Badge from "./components/Badge.jsx";
import Banner from "./components/Banner/index.jsx";

function App() {
  return (
    <>
      <h1>Component Library</h1>

      {/* Badge Component  */}
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

      {/* Banner Component  */}
      <section className="section--banner">
        <Banner status="success">
          <Banner.Title>Congratulations!</Banner.Title>
          <Banner.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, rerum sequi dolorum id nesciunt ducimus praesentium
            quos debitis at quasi?
          </Banner.Text>
        </Banner>
        <Banner status="warning">
          <Banner.Title>Attention</Banner.Title>
          <Banner.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, rerum sequi dolorum id nesciunt ducimus praesentium
            quos debitis at quasi?
          </Banner.Text>
        </Banner>
        <Banner status="danger">
          <Banner.Title>There is a problem with your application</Banner.Title>
          <Banner.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, rerum sequi dolorum id nesciunt ducimus praesentium
            quos debitis at quasi?
          </Banner.Text>
        </Banner>
        <Banner status="neutral">
          <Banner.Title>Update available</Banner.Title>
          <Banner.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, rerum sequi dolorum id nesciunt ducimus praesentium
            quos debitis at quasi?
          </Banner.Text>
        </Banner>
      </section>
    </>
  );
}

export default App;
