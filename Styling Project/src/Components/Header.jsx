import { useState } from "react";
import "./HeaderStyle.css";

function Header() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        
        <div className={`header ${darkMode ? "bg-white text-black" : "bg-black text-white"} h-18 w-full flex justify-around items-center transition-all duration-300`}>

            <div className={`logo text-2xl ${darkMode ? "text-black" : "text-white"}`}>
                <i className="bi bi-mortarboard"></i>
            </div>

            {/* Navigation Links */}
            <div className={`linksDiv flex gap-6 ${darkMode ? "text-black" : "text-white"}`}>
                <a href="/">Home</a>
                <a href="/">Products</a>
                <a href="/">Features</a>
                <a href="/">About</a>
            </div>

            <div
                className={`LightChanger cursor-pointer text-2xl ${darkMode ? "text-black" : "text-white"}`}
                onClick={() => setDarkMode(!darkMode)}
            >
                {darkMode ? (
                    <i className="bi bi-brightness-high-fill"></i> // Sun icon (Light mode)
                ) : (
                    <i className="bi bi-moon-fill"></i> // Moon icon (Dark mode)
                )}
            </div>
        </div>

    );
}

export default Header;
