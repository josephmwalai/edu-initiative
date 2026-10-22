
import React from "react";
import { useState } from "react";
import { motion } from "motion/react";

const ServiceCard = ({ service, index }) => {

    const [positon, setPosition] = useState({ x: 0, y: 0 });
    const [visible, setVisible] = useState(false);

    const divRef = React.useRef(null);

    const handleMouseMove = (e) => {
        if (!divRef.current) return;

        const bounds = divRef.current.getBoundingClientRect();

        setPosition({
            x: e.clientX - bounds.left,
            y: e.clientY - bounds.top
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: "easeOut"
            }}
            viewport={{ once: true, amount: 0.1 }}
            whileHover={{
                y: -4,
                transition: { duration: 0.25 }
            }}
            className='group relative z-0 h-full w-full overflow-hidden rounded-xl border border-gray-200 transition-colors duration-300 hover:border-indigo-300 dark:border-gray-700 dark:hover:border-indigo-400 shadow-2xl shadow-gray-200 dark:shadow-white/10'
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            ref={divRef}
            onMouseMove={handleMouseMove}
        >

            {/* Mouse-follow gradient hover effect */}
            <div
                className={`pointer-events-none absolute z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 blur-2xl transition-opacity duration-500 mix-blend-multiply dark:mix-blend-screen ${
                    visible ? 'opacity-20' : 'opacity-0'
                }`}
                style={{
                    top: positon.y - 150,
                    left: positon.x - 150
                }}
            />

            {/* Card content */}
            <div className="relative z-20 flex h-full items-start gap-5 rounded-[10px] bg-white p-5 transition-colors duration-300 dark:bg-gray-900 sm:gap-6 sm:p-7">

                {/* Icon */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gray-100 sm:h-20 sm:w-20">
                    <img
                        src={service.icon}
                        alt=""
                        className="m-2 h-12 w-12 rounded-full bg-white object-contain sm:h-14 sm:w-14"
                    />
                </div>

                {/* Title and full descriptions */}
                <div className="min-w-0 flex-1">

                    <h3 className="text-lg font-medium text-gray-700 dark:text-white sm:text-xl">
                        {service.title}
                    </h3>

                    <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base">
                        {service.description.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>

                </div>
            </div>
        </motion.div>
    );
};

export default ServiceCard;
