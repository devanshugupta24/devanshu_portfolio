import { useRef } from "react"
import "./portfolio.scss"
import {motion,useScroll,useSpring, useTransform} from "framer-motion"

const items=[
    {
        id:1,
        title:"MediSync",
        img:"/MediSync.png",
        demo:"https://medisync-frontend.onrender.com/",
        github:"https://github.com/devanshugupta24/MediSync",
        desc:"MediSync is an innovative platform connecting patients with trusted doctors. It simplifies appointment booking, offers personalized health management tools, and ensures secure access to healthcare. With features like digital records, and reminders, MediSync makes healthcare convenient and efficient to your needs."
    },
    {
        id:4,
        title:"New-portfolio",
        img:"/new_portfolio.png",
        demo:"https://devanshu-24.onrender.com",
        github:"https://github.com/devanshugupta24/new_devanshu_portfolio",
        desc:"I created a personal portfolio website using React.js, showcasing my expertise in web development. The site features a dynamic homepage, an organized skills section, an interactive projects showcase, and a contact form to get in touch with me. It's designed to be fully responsive, providing a seamless experience across all devices."
    },
    {
        id:3,
        title:"WeatherApp",
        img:"/weather.png",
        demo:"https://weatherappclimate.netlify.app/",
        github:"https://github.com/devanshugupta24/weatherapp",
        desc:"Weather App that allows users to search for the weather of different cities. The app fetches real-time data using an API, providing users with the current weather conditions of their selected city. The app dynamically changes its image based on the temperature of the searched city, offering a visual representation of the weather."
    },
    {
        id:2,
        title:"Old-portfolio",
        img:"/old_portfolio.png",
        demo:"https://devanshugupta24.netlify.app/",
        github:"https://github.com/devanshugupta24/old_devanshu-portfolio",
        desc:"A personal portfolio website using React.js to showcase my web development skills. It features responsive design, sections for skills, projects, and a contact form. The website highlights my ability to create user-friendly, interactive interfaces, and demonstrates my proficiency in modern front-end technologies."
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
                        <button><a href={item.demo} target="_blank">See Demo</a></button>
                        <button><a href={item.github} target="_blank">Github</a></button>
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