import React, { useState } from "react";
import {Home} from "./Home/Home";
import {About} from "./About/About";
import {Contact} from "./Contact/Contact";

export const App = () => {
  const [activeComponent, setActiveComponent] = useState("Home");

  const components = {
    Home: <Home />,
    About: <About />,
    Contact: <Contact />,
  };

  return (
      <div style={{ textAlign: "center" }}>
        <div style={{ marginBottom: "20px" }}>
          {["Home", "About", "Contact"].map((name) => (
            <button
              key={name}
              onClick={() => setActiveComponent(name)}
              style={{
                margin: "5px",
                padding: "10px 20px",
                cursor: "pointer",
                border: "1px solid #ccc",
                borderRadius: "5px",
                background: activeComponent === name ? "#007bff" : "#f8f9fa",
                color: activeComponent === name ? "#fff" : "#000",
              }}
            >
              {name}
            </button>
          ))}
        </div>
        <div style={{ fontSize: "20px" }}>{components[activeComponent]}</div>
      </div>

  );
};
