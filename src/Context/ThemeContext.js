import { createContext, useState } from "react";

const ThemeContext = createContext();

const initialState = "theme-Sun";

const ThemeProvaider = ({ children }) => {
  const [theme, setTheme] = useState(initialState);

  guardar_localstorage();

  function guardar_localstorage() {
    let persona = {
      nombre: "ricardo   ",
      edad: "31",
    };
    let nombre = "pedro";
    localStorage.setItem("nombre", nombre);
  }

  const haldleTheme = (e) => {
    if (e.target.value === "theme-Sun") {
      setTheme("light");
    } else {
      setTheme("theme-Moon");
    }
  };

  const data = { theme, haldleTheme };
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};
export { ThemeProvaider };
export default ThemeContext;
