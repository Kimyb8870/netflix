import React from "react";
import { JumbotronContainer } from "../src/containers/jumbotron";
import { FooterContainer } from "../src/containers/footer";
import { FaqsContainer } from "../src/containers/faqs";

export default function App() {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
