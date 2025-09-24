import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../assets/notenow_logo.svg";

const Footer = () => {
  return (
    <footer className="min-w-full mx-auto mt-12">
      {/* Divider with logo */}
      <div className="relative w-full flex items-center justify-center">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        <div className="absolute px-3">
          <img
            src={Logo}
            alt="NoteNow logo"
            className="w-6 h-6 sm:w-7 sm:h-7"
          />
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-5 pt-3 sm:pt-4 pb-1 sm:pb-2">
        <a
          href="https://github.com/aruntutter"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-white text-base transition-transform transform hover:scale-110"
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/ByteOops"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-white text-base transition-transform transform hover:scale-110"
        >
          <FaXTwitter />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm text-center text-gray-500 pb-2 sm:pb-4">
        &copy; {new Date().getFullYear()}{" "}
        <span className="font-semibold">NoteNow</span>. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
