import React, { useEffect } from "react";
import gsap from "gsap";
import Banner from "./components/Banner";
import Cases from "./components/Cases";
import Header from "./components/Header";
import IntroOverlay from "./components/IntroOverlay";
import "./styles/App.scss";

function App() {

  useEffect(() => {
    // calculate space for mobile browser's bars on top and bottom
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    //prevent flashing on page reload
    gsap.to('body', { duration: 0, css: { visibility: 'visible' } })

    //timeline
    const tl = gsap.timeline();

    tl.from('.line span', {
      y: 100,
      duration: 1.8,
      ease: 'power4.out',
      delay: 1,
      skewY: 7,
      stagger: {
        amount: 0.3
      }
    }).to('.overlay-top', {
      duration: 1.6,
      height: 0,
      ease: 'expo.inOut',
      stagger: 0.4
    }).to('.overlay-bottom', {
      duration: 1.6,
      width: 0,
      ease: 'expo.inOut',
      delay: -0.8,
      stagger: {
        amount: 0.4,
      }
    }).to('.intro-overlay', {
      duration: 0,
      css: { display: 'none' }
    }).from('.case-image img', {
      duration: 1.6,
      scale: 1.4,
      ease: 'expo.inOut',
      stagger: {
        amount: 0.4,
      }
    })

  })

  return (
    <div className='App'>
      <IntroOverlay />
      <Header />
      <Banner />
      <Cases />
    </div>
  );
}

export default App;
