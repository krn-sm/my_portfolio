import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles";
import { LightTheme } from "./components/Themes";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LoadingCover from "./components/LoadingCover";
import { useEffect, useState } from "react";

// Components
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import ResumePage from "./components/ResumePage";
import ProjectsPage from "./components/ProjectsPage";
import MySkillsPage from "./components/MySkillsPage";
import ContactPage from "./components/ContactPage";

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // match animation duration

    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={LightTheme}>
        <AnimatePresence mode="wait">
          {isLoading && <LoadingCover key={`loading-${location.pathname}`} />}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {!isLoading && (
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/resume" element={<ResumePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/skills" element={<MySkillsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          )}
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
