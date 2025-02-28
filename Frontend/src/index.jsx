/* eslint-disable react/prop-types */
import { createContext, useState, useRef, useEffect } from "react";

export const ThemeContext = createContext();
export const DifficultyContext = createContext();


export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const themeReturn = () => {
    return (
      {
        theme, setTheme,
      }
    );
  }

  return (
    <ThemeContext.Provider value={themeReturn()}>
      {children}
    </ThemeContext.Provider>
  );
}

export const DifficultyProvider = ({ children }) => {
  const easyRef = useRef();
  const mediumRef = useRef();
  const hardRef = useRef();

  const easyValueRef = useRef();
  const mediumValueRef = useRef();
  const hardValueRef = useRef();

  
  useEffect(() => {
    const updateWidth = () => {
      if(!easyRef.current || !easyValueRef.current) return;
      const [easy, totalEasy] = easyValueRef.current.innerText.split('/');
      easyRef.current.style.width = `${easy/totalEasy*100}%`;
      
      if(!mediumRef.current || !mediumValueRef.current) return;
      const [medium, totalMedium] = mediumValueRef.current.innerText.split('/');
      mediumRef.current.style.width = `${medium/totalMedium*100}%`;
      
      if(!hardRef.current || !hardValueRef.current) return;
      const [hard, totalHard] = hardValueRef.current.innerText.split('/');
      hardRef.current.style.width = `${hard/totalHard*100}%`;

    };

    updateWidth();

    const observer = new MutationObserver(updateWidth);
    // observer.observe(easyValueRef.current, { childList: true, characterData: true });

    return () => observer.disconnect(); // Cleanup observer when component unmounts
  }, [])

  const difficultyReturn = () => {
    return {
      easyRef, easyValueRef,
      mediumRef, mediumValueRef, 
      hardRef, hardValueRef,
    }
  }

  return (
    <DifficultyContext.Provider value={difficultyReturn()}>
      {children}
    </DifficultyContext.Provider>
  )
}