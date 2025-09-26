import "./greetingCard.css"

import React, {useEffect, useRef} from "react"
import {motion, useInView, useAnimation} from "framer-motion"
function Greeting(){
    const ref = useRef(null)
    const isInview = useInView(ref, {once:false})

    const ctl = useAnimation()

    useEffect(()=> {
        if(isInview){
            ctl.start("visible")
        }
        }, [isInview, ctl])

        const variants = {
            hidden: { x: -100, opacity: 0 },
            visible: { x: 0, opacity: 1 },
          };

    return (
    <motion.div 
    ref={ref}
    variants={variants}
    initial="hidden"
    animate= {ctl}
    transition ={{duration : 0.8, delay: 0.5}}
    className="greetingContainer">
        <img className="imageGreeting" src ="assets/portrait.webp" alt="portrait of me leaning against a wall."/>
      <div style={{marginLeft:"10px"}}>
      <div >
        Hello there!
        </div>  
        <div className="bottomTextGreeting text-justify hyphenate md:leading-12">
            Or as we say in Northern Germany: Moin!
                I am Michel, a Full Stack Developer with a passion for creating innovative applications and deploying them in cloud-native environments. I hold a Bachelor's degree in Computer Science and have several years of experience developing with Java, Python, Kotlin, JavaScript, and TypeScript.</div>
        </div>  
    </motion.div>)
}

export default Greeting