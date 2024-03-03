import "./App.css";
import Badge from "./components/Badge.jsx";
import Banner from "./components/Banner/index.jsx";
import Card from "./components/Card/index.jsx";
import Testimonial from "./components/Testimonial/index.jsx";
import Tooltip from "./components/Tooltip/Tooltip.jsx";
import Toggler from "./components/Toggler/Toggler.jsx";
import { useDarkmode } from "./hooks/useDarkmode.jsx";
import { createContext } from "react";

const DarkmodeContext = createContext();
export { DarkmodeContext };

function App() {
  const [darkMode, toggleDarkmode] = useDarkmode("dark");

  return (
    <DarkmodeContext.Provider
      value={{ darkMode: darkMode, toggleDarkmode: toggleDarkmode }}
    >
      <main className={darkMode}>
        <h1>Component Library</h1>

        {/* Toggler Component  */}
        <section className="section--toggler">
          <Toggler></Toggler>
        </section>

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
            <Banner.Title>
              There is a problem with your application
            </Banner.Title>
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

        {/* Card Component  */}
        <section className="section--card">
          <Card>
            <Card.Title>Easy Deployment</Card.Title>
            <Card.Text>
              Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
              magna sit morbi lobortis.
            </Card.Text>
          </Card>

          <Card>
            <Card.Title>Easy Deployment</Card.Title>
            <Card.Text>
              Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
              magna sit morbi lobortis.
            </Card.Text>
          </Card>
        </section>

        {/* Testimonial Component  */}
        <section className="section--testimonial">
          <Testimonial
            image="./Image.png"
            alt="headshot of a smiling person giving the testimonial"
          >
            <Testimonial.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna
              nulla vitae laoreet augue. Amet feugiat est integer dolor auctor
              adipiscing nunc urna, sit.
            </Testimonial.Text>
            <Testimonial.Name>May Andersons</Testimonial.Name>
            <Testimonial.Job>Workcation, CTO</Testimonial.Job>
          </Testimonial>
        </section>

        {/* Tooltip Component  */}
        <section className="section--tooltip">
          <Tooltip
            title="Archive notes"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
            color="black"
          ></Tooltip>
          <Tooltip
            title="Archive notes"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
            color="darkblue"
          ></Tooltip>
          <Tooltip
            title="Archive notes"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
            color="darkpurple"
          ></Tooltip>
          <Tooltip
            title="Archive notes"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
            color="darkgreen"
          ></Tooltip>
        </section>
      </main>
    </DarkmodeContext.Provider>
  );
}

export default App;
