import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="flex justify-center gap-5">
      <NavLink
        className="dark:text-gray-800 dark:bg-slate-400 m-3 p-4 text-xl bg-blue-400 hover:bg-blue-500 rounded-md font-medium text-white"
        to={"/"}
      >
        All Entries
      </NavLink>
      <NavLink
        className="dark:text-gray-800 dark:bg-slate-400 m-3 p-4 text-xl bg-blue-400 hover:bg-blue-500 rounded-md font-medium text-white"
        to={"/create"}
      >
        New Entry
      </NavLink>
    </nav>
  );
}
