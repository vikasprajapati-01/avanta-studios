import React, { useState, useEffect } from 'react'

import { LuSun } from "react-icons/lu";
import { BsFillMoonFill } from "react-icons/bs";

import './ThemeToggle.css';

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className='theme-switch'>
        <input type="checkbox" id='theme-toggle' checked={isDark} onChange={toggleTheme} />
        <label htmlFor="theme-toggle">
            <LuSun className='sun' size={24} />
            <BsFillMoonFill className='moon' size={24} />
      </label>
    </div>
  )
}

export default ThemeToggle