import React, { useEffect, useState } from "react";
import "./Skills.scss";
import { skills } from "../../data/Constants";
import { motion } from "framer-motion";



// Animation for skill list items
const sliderVariants = {
  initial: { y: 0 },
  animate: {
    y: "-50%",
    transition: { duration: 1, repeat: Infinity, repeatType: "mirror" },
  },
};

// Circular motion for SkillsContainer
const CircularMotion = () => {
  const radius = 10; // Adjust the size of circular movement
  const duration = 10; // Time taken for one full revolution
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => (prev + 2) % 360); // Increase angle smoothly
    }, (duration * 1000) / 180); // Smooth updates

    return () => clearInterval(interval);
  }, []);

  const x = radius * Math.cos((angle * Math.PI) / 180);
  const y = radius * Math.sin((angle * Math.PI) / 180);

  return { x, y };
};

const Skills = () => {
  const { x, y } = CircularMotion();

  return (
    <div id="Container">
      <div className="Wrapper">
        <div className="Title">Skills</div>
        <div className="desc">
          Here are few of my skills on which I have been working on
        </div>
        
        {/* Circular Motion applied to SkillsContainer */}
        <motion.div
          className="SkillsContainer"
          animate={{ x, y }}
          transition={{ duration: 0.05, ease: "linear" }}
        >
          {skills.map((item, index) => (
            <div key={index} className="Skill">
              <h2 className="SkillTitle">{item.title}</h2>
              <div className="SkillList">
                {item.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    className="SkillItem"
                    variants={sliderVariants}
                    initial="initial"
                    animate="animate"
                  >
                    <img className="SkillImage" src={skill.image} alt={skill.name} />
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
