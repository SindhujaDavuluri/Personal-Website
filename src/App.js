import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Showcase from "./components/Showcase";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  const invertTheme = (theme) => {
    return {
      main: theme.secondary,
      secondary: theme.main,
      highlights: theme.highlights,
    };
  };
  const theme = {
    main: "#606C38",
    secondary: "#DDA15E",
    highlights: "#FEFAEA",
  };
  return (
    <div className="App">
      <Hero theme={theme} />
      <About theme={invertTheme(theme)} />
      <Work theme={theme} />
      <Showcase theme={invertTheme(theme)} />
      <Contact theme={theme} />
    </div>
  );
}

export default App;
