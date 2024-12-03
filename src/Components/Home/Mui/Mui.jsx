import React, { useState, useEffect } from "react";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { motion } from "framer-motion";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import "./Mui.css";

function Mui() {
  const [isVisible, setIsVisible] = useState(true);
  const [delVisible, setDelVisible] = useState(false);

  const actions = [
    {
      icon: (
        <ClearOutlinedIcon
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: "#eee",
            color: "gray",
            padding: "7px",
            boxSizing: "border-box",
          }}
          onClick={() => setIsVisible(true)}
        />
      ),
    },
    {
      icon: (
        <img
          style={{ width: "40px", height: "40px", borderRadius: "50%" }}
          src="https://static.vecteezy.com/system/resources/previews/016/716/468/original/whatsapp-icon-free-png.png"
        />
      ),
    },
    {
      icon: (
        <img
          style={{ width: "40px", height: "40px", borderRadius: "50%" }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRku8_NMJHPR56xur3VJWN1MA1FbFE9p3wj_g&s"
        />
      ),
    },
    {
      icon: (
        <img
          style={{ width: "43px", height: "43px", borderRadius: "50%" }}
          src="https://i.pinimg.com/736x/87/b1/2a/87b12a1e8a11f6c1264a237c5f08c195.jpg"
        />
      ),
    },
  ];
  const animate = {
    hidden: {
      y: 30,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.1 },
    }),
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1, once: true }}
      className="box-animate"
      animate={isVisible ? "hidden" : "visible"}
      transition={{ duration: 0.5 }}
    >
      {delVisible && (
        <motion.div
          initial="hidden"
          animate={delVisible ? "visible" : "hidden"}
          variants={animate}
          transition={{ duration: 1 }}
          custom={1}
          className="animate-mui"
        >
          {!isVisible && (
            <div className="icons-animate">
              {actions.map((action, index) => (
                <motion.div
                  initial="hidden"
                  animate={isVisible ? "hidden" : "visible"}
                  variants={animate}
                  transition={{ duration: 0.5 }}
                  custom={index}
                  key={index}
                >
                  {action.icon}
                </motion.div>
              ))}
            </div>
          )}
          <div
            onClick={() => setIsVisible(!isVisible)}
            className="macaron-animate"
          >
            {isVisible ? (
              <div className="mui-quiestion">
                <motion.button
                  onClick={() => setDelVisible(!delVisible)}
                  initial="hidden"
                  animate={delVisible ? "visible" : "hidden"}
                  variants={animate}
                  transition={{ duration: 0.5 }}
                  custom={1}
                  style={{
                    position: "absolute",
                    top: "0px",
                    right: "0px",
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                  }}
                >
                  <HighlightOffIcon />
                </motion.button>
                <div className="mui-texts">
                  <h3>Есть вопросы?</h3>
                  <p>Напишите, поможем</p>
                </div>
                <img
                  src="https://macaronshop.ru/wp-content/themes/macaronshop/assets/img/smile-chat.svg"
                  alt="img"
                />
              </div>
            ) : (
              <img
                src="https://macaronshop.ru/wp-content/themes/macaronshop/assets/img/smile-chat-look-up.svg"
                alt="img"
              />
            )}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
export default Mui;
