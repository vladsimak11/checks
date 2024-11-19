import React, { useState } from "react";
import {Mismatched} from "./Mismatched/Mismatched";
import {About} from "./About/About";
import {Contact} from "./Contact/Contact";

import { Container, Buttons, Button, Block } from './App.styled';

export const App = () => {
  const [activeComponent, setActiveComponent] = useState("Mismatched");

  const components = {
    Mismatched: <Mismatched />,
    About: <About />,
    Contact: <Contact />,
  };

  return (
      <Container>
        <Buttons>
          {["Mismatched", "About", "Contact"].map((name) => (
            <Button
              key={name}
              onClick={() => setActiveComponent(name)}
              active={activeComponent === name}
            >
              {name}
            </Button>
          ))}
        </Buttons>
        <Block>{components[activeComponent]}</Block>
      </Container>

  );
};
