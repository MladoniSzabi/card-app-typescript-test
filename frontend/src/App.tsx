import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import AllEntries from "./routes/AllEntries";
import EditEntry from "./routes/EditEntry";
import NewEntry from "./routes/NewEntry";
import { EntryProvider } from "./utilities/globalContext";

export default function App() {
  let isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (localStorage.getItem("isDarkMode") === "true") {
    isDarkMode = true;
  } else if (localStorage.getItem("isDarkMode") === "false") {
    isDarkMode = false;
  }

  if (isDarkMode) {
    document.querySelector("body")!.classList.add("dark");
  }

  return (
    <section className="dark:bg-slate-700 min-h-screen">
      <Router>
        <EntryProvider>
          <NavBar></NavBar>
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
