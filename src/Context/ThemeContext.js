import { createContext, useState } from "react";

const ThemeContext = createContext();

const initialState = localStorage.getItem("theme");

const ThemeProvaider = ({ children }) => {
  const [theme, setTheme] = useState(initialState);

  const haldleTheme = (e) => {
    if (localStorage.getItem("theme")) {
      setTheme("theme");
    }

    if (e.target.value === "theme-Sun") {
      setTheme("theme-Sun");
      localStorage.setItem("theme", e.target.value);
      let elejido = localStorage.getItem("theme");
      console.log(elejido);
    } else {
      setTheme("theme-Moon");
      localStorage.setItem("theme", e.target.value);
      let elejido = localStorage.getItem("theme");

      console.log(elejido);
    }
  };

  const data = { theme, haldleTheme };
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};
export { ThemeProvaider };
export default ThemeContext;
