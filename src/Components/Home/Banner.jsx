import { Container } from "../Container/Container";
import { motion } from "framer-motion";
import "./Home.css";

function Banner() {

  const animation = {
    hidden: {
      y: 60,
      opacity: 0,
    },
    visible: custom => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.3,
        duration: 0.5, 
        ease: 'easeInOut'  
      }
    })
  }
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5, once: true }}
      className="banner">
      <Container>
        <div className="banners">
          <motion.div variants={animation} custom={3} className="banner-text">
            <div className="banner-texts">
              <h1 >Macaronshop</h1>
            </div>
            <div className="lines">
              <div className="line"></div>
              <p>since 2013</p>
              <div className="line"></div>
            </div>
          </motion.div>
          <div className="banner-flex">
            <motion.h1 variants={animation} custom={1}>Настоящая любовь</motion.h1>
            <motion.p variants={animation} custom={2}>Пирожные макарон и другие десерты из натуральных ингредиентов, приготовленные с любовью</motion.p>
          </div>
        </div>
      </Container>
    </motion.div>
  );
}

export default Banner;

