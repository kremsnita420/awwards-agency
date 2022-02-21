import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { gsap } from "gsap";
import "./styles/App.scss";
import Header from "./components/Header";


import CaseStudies from "./pages/CaseStudies";
import Approach from "./pages/Aproach";
import Services from "./pages/Services";
import About from "./pages/About";
import Home from "./pages/Home";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/case-studies", name: "Case Studies", Component: CaseStudies },
  { path: "/approach", name: "Aproach", Component: Approach },
  { path: "/services", name: "Services", Component: Services },
  { path: "/about-us", name: "About Us", Component: About }
];

function App() {
  useEffect(() => {
    // calculate space for mobile browser's bars on top and bottom
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    //prevent flashing on page reload
    gsap.to('body', { duration: 0, css: { visibility: 'visible' } })
  })

  return (
    <>
      <Header />
      <div className='App'>
        {routes.map(({ path, Component }) => (
          <Routes key={path} >
            <Route exact path={path} element={<Component />} />
          </Routes>
        ))}
      </div>
    </>
  );
}

export default App;
