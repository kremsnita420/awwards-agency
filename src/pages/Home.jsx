import React, { useEffect,useState } from 'react'
import gsap from "gsap";

//components
import Banner from '../components/Banner'
import Cases from '../components/Cases'
import IntroOverlay from '../components/IntroOverlay'



//timeline
const tl = gsap.timeline();

const homeAnimation = (completeAnimation) => {
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
        },
        onComplete: completeAnimation,
      })
}

const Home = () => {
    const [animationComplete, setAnimationCoomplete] = useState(false)

    const completeAnimation = () =>{
        setAnimationCoomplete(true)
    }

    useEffect(() => {
        // on load animation
        homeAnimation(completeAnimation)
    
      }, [])
      
  return (
    <>
    {animationComplete === false ? <IntroOverlay /> : ''}
      <Banner />
      <Cases />
    </>
  )
}

export default Home