import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-4 z-50 w-full flex flex-row justify-around items-center px-2 py-2 mx-auto h-11 sm:top-4 sm:px-4 sm:py-2 sm:h-12 backdrop-blur-md shadow-md rounded-full border border-gray-200">
      <NavLink
        to="/"
        className={({ isActive }) => `
          relative px-6 py-2 sm:px-10 sm:py-2 
          rounded-full overflow-hidden 
          transition-colors duration-300 ease-in-out 
          text-sm sm:text-base
          ${isActive ? "text-black" : "text-gray-600"}
        `}
      >
        {({ isActive }) => (
          <>
            <span className="relative z-10">Home</span>
            <span
              className={`absolute inset-0 bg-gray-200/50 transition-transform duration-500 ease-in-out 
              ${isActive ? "scale-x-100" : "scale-x-0"} 
              origin-right`}
            ></span>
          </>
        )}
      </NavLink>

      <NavLink
        to="/pastes"
        className={({ isActive }) => `
          relative px-6 py-2 sm:px-10 sm:py-2 
          rounded-full overflow-hidden 
          transition-colors duration-300 ease-in-out 
          text-sm sm:text-base
          ${isActive ? "text-black" : "text-gray-600"}
        `}
      >
        {({ isActive }) => (
          <>
            <span className="relative z-10">Notes</span>
            <span
              className={`absolute inset-0 bg-gray-200/50 transition-transform duration-500 ease-in-out 
              ${isActive ? "scale-x-100" : "scale-x-0"} 
              origin-left`}
            ></span>
          </>
        )}
      </NavLink>
    </nav>
  );
};

export default Navbar;
