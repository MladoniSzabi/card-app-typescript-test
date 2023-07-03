import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import SliderInput from "./components/SliderInput";
import AllEntries from "./routes/AllEntries";
import EditEntry from "./routes/EditEntry";
import NewEntry from "./routes/NewEntry";
import { EntryProvider } from "./utilities/globalContext";

export default function App() {
  let initialIsDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (localStorage.getItem("isDarkMode") === "true") {
    initialIsDarkMode = true;
  } else if (localStorage.getItem("isDarkMode") === "false") {
    initialIsDarkMode = false;
  }

  const [isDarkMode, setIsDarkMode] = useState(initialIsDarkMode);

  if (initialIsDarkMode) {
    document.querySelector("body")!.classList.add("dark");
  }

  function selectTheme(didSelectDarkMode: boolean) {
    if (didSelectDarkMode) {
      localStorage.setItem("isDarkMode", "true");
      document.querySelector("body")!.classList.add("dark");
    } else {
      localStorage.setItem("isDarkMode", "false");
      document.querySelector("body")!.classList.remove("dark");
    }
    setIsDarkMode(didSelectDarkMode);
  }

  return (
    <section className="dark:bg-slate-700 min-h-screen">
      <Router>
        <EntryProvider>
          <div className="flex justify-center items-center gap-5">
            <NavBar></NavBar>
            <SliderInput
              inputs={["Light", "Dark"]}
              checked={initialIsDarkMode}
              name="dark-mode-switch"
              onChange={selectTheme}
            />
          </div>
          <Routes>
            <Route path="/" element={<AllEntries />}></Route>
            <Route path="create" element={<NewEntry />}></Route>
            <Route path="edit/:id" element={<EditEntry />}></Route>
          </Routes>
        </EntryProvider>
      </Router>
    </section>
  );
}
