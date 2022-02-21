import React, { useEffect } from "react";
import Banner from "./components/Banner";
import Cases from "./components/Cases";
import Header from "./components/Header";
import "./styles/App.scss";

function App() {

  // calculate space for mobile browser's bars on top and bottom
  useEffect(() => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)

  })

  return (
    <div className='App'>
      <Header />
      <Banner />
      <Cases />
    </div>
  );
}

export default App;
