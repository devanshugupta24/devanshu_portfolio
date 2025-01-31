import { useRef } from "react"
import "./portfolio.scss"
import {motion,useScroll,useSpring, useTransform} from "framer-motion"

const items=[
    {
        id:1,
        title:"MediSync",
        img:"/MediSync.png",
        desc:"Medisync is a docrtor appointment booking app"
    },
    {
        id:2,
        title:"Old-portfolio",
        img:"/old_portfolio.png",
        desc:"my old portfolio website very good"
    },
    {
        id:3,
        title:"WeatherApp",
        img:"/weather.png",
        desc:"a js project for determining a weather of any city"
    },
    
]


const Single=({item})=>{
    const ref=useRef();

    const {scrollYProgress}= useScroll({
        target:ref,
        //offset:["start start", "end end"]
      });

    const y=useTransform(scrollYProgress,[0,1],[-300,300]);
    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer"  ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{y}} >
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section> 
    )
}


const Project = () => {

  const ref=useRef()

  const {scrollYProgress}= useScroll({
    target:ref,
    offset:["end end","start start"],
  });

  const scaleX=useSpring (scrollYProgress,{
    stiffness:100,
    damping:20,
  });

  return (
    <div className="portfolio">
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
        {items.map((item)=>(
            <Single item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Project