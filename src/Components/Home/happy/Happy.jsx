import { Container } from "../../Container/Container"
import { motion } from "framer-motion";
import Ponchik0 from "../../../assets/bekjan/svg/ponchik0.svg";
import Ponchik1 from "../../../assets/bekjan/svg/ponchik1.svg";
import Ponchik2 from "../../../assets/bekjan/svg/ponchik2.svg";
import Ponchik3 from "../../../assets/bekjan/svg/ponchik3.svg";
import Ponchik4 from "../../../assets/bekjan/svg/ponchik4.svg";
import Ponchik5 from "../../../assets/bekjan/svg/ponchik.svg";
import PonchikHat from "../../../assets/bekjan/svg/ponchikHat.svg"

import './Happy.css';

const HolidaysTimeline = () => {
    const holidays = [
        { icon: <img src={Ponchik0} alt="icon" />, date: 'Скоро', name: ' День рождения близкого человека' },
        { icon: <img src={Ponchik5} alt="icon" />, date: '9 марта ', name: 'День Сурка' },
        { icon: <img src={Ponchik1} alt="icon" />, date: '1 января', name: 'Новый Год 2021' },
        { icon: <img src={Ponchik2} alt="icon" />, date: '14 февраля', name: 'День Святого Валентина' },
        { icon: <img src={Ponchik3} alt="icon" />, date: '23 февраля', name: 'День Защитника Отечества' },
        { icon: <img src={Ponchik4} alt="icon" />, date: '8 марта', name: 'Международный Женский День' },
    ];

    const animation = {
        hidden: {
            y: 60,
            opacity: 0,
        },
        visible: custom => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: custom * 0.1,
                duration: 0.6,
                ease: 'easeInOut'
            }
        })
    };
    return (
        <Container>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.1, once: true }}
                className="timeline-container">
                <motion.h2 variants={animation} custom={1}>Ближайшие праздники</motion.h2>
                <div className="new2"></div>
                <div className="timeline">
                    <img className="hat" src={PonchikHat} alt="img" />
                    {holidays.map((holiday, index) => (
                        <motion.div variants={animation} custom={index} key={index} className="timeline-item">
                            <div className="icon-container">{holiday.icon}</div>
                            <div className="text-container" >
                                <p className="date" >{holiday.date} </p>
                                <p className="name" >{holiday.name}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </Container>
    );
};

export default HolidaysTimeline;
