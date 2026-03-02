import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: -100,
    y: -100
  });
  
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      if (!isVisible) setIsVisible(true);
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [isVisible]);

  const variants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      opacity: isVisible ? 1 : 0,
      transition: {
        type: "spring",
        mass: 0.1,
        stiffness: 800,
        damping: 50,
      }
    }
  };

  const glowVariants = {
    default: {
      x: mousePosition.x - 64,
      y: mousePosition.y - 64,
      opacity: isVisible ? 1 : 0,
      transition: {
        type: "spring",
        mass: 0.6,
        stiffness: 150,
        damping: 30
      }
    }
  };

  return (
    <>
      <motion.div
        className="cursor-dot"
        variants={variants}
        animate="default"
      />
      <motion.div
        className="cursor-glow"
        variants={glowVariants}
        animate="default"
      />
    </>
  );
};

export default CustomCursor;
