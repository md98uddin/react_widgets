import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
  { title: "What is react?", content: "React is a frontend js library." },
  { title: "why use react?", content: "It's a popular js library for ui." },
  { title: "How to use react?", content: "You create components with it." },
];

const App = () => {
  return (
    <div>
      <br />
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
};

export default App;
