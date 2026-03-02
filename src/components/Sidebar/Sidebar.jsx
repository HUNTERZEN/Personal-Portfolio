import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const links = ['About Me', 'Skills', 'Projects', 'Experience', 'Contact'];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        className="sidebar-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleSidebar}
                    />
                    <motion.div
                        className="sidebar glass"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    >
                        <button className="close-btn" onClick={toggleSidebar}>
                            <X size={36} />
                        </button>
                        <div className="sidebar-content">
                            <ul>
                                {links.map((link, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ x: 50, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        exit={{ x: 50, opacity: 0 }}
                                        transition={{ delay: 0.1 + index * 0.05 }}
                                    >
                                        <a href={`#${link.toLowerCase().replace(' ', '-')}`} onClick={toggleSidebar}>
                                            {link}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default Sidebar;
