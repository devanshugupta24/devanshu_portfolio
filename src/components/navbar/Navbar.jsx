import "./navbar.scss"
import Sidebar from "../sidebar/sidebar"
import {motion} from "framer-motion"
const Navbar = () => {
  return (
    <div className="navbar">
        {/* Sidebar */}
        <Sidebar/>
        <div className="wrapper">
            <motion.span 
            initial={{opacity:0,scale:0.5}} 
            animate={{opacity:1,scale:1}} 
            transition={{duration:0.5}}>
            Devanshu
            </motion.span>
            <div className="social">
                <a target="_blank" href="https://www.instagram.com/devanshu_2402/?next=%2F&hl=en"><img src="/instagram.png" alt="" /></a>
                <a target="_blank" href="https://www.linkedin.com/in/devanshu-gupta24/"><img src="/linkedin.png" alt="" /></a>
                <a target="_blank" href="https://github.com/devanshugupta24"><img src="/github.png" alt="" /></a>
                <a target="_blank" href="https://leetcode.com/u/devanshu__gupta_/"><img src="/leetcode.png" alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar