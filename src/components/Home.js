import React from "react";
import { Container, Section, Layout } from "./ComponentsHome"
import MainComp from "./MainComp" 
import LeftComp from "./LeftComp" 
import RightComp from "./RightComp";

function Home() {
  return (
    <Container>
      <Section>
        <h5>
          <a target="_blank" href="https://github.com/Rishaw-Developer">Rishaw's Linked In? - &nbsp;</a>
        </h5>
        <p>
        Rishaw is a developer. He has created this amazing build with React Js.
        </p>

        
      </Section>
      <Layout>
        <LeftComp />
        <MainComp />
        <RightComp />
      </Layout>
    </Container>
  );
}

export default Home;
