import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import { AnimatePresence } from "framer-motion";
import GlobalStyle from "./globalStyles";
import styled from "styled-components";

const Section = styled.section`
  overflow-x: hidden;
  duration: 0.1,
`;

function App() {
  let location = useLocation();
  return (
    <Section>
      <GlobalStyle />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/fun-art" exact element={<Home />} />
          <Route path="/fun-art/about" exact element={<About />} />
          <Route path="/fun-art/services" exact element={<Services />} />
        </Routes>
      </AnimatePresence>
    </Section>
  );
}

export default App;
