import React, { useEffect, useState } from "react";

function Header() {
    //new update 
    const [activeSection, setActiveSection] = useState('');

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleScroll = () => {
        const sections = ['home', 'about', 'skills', 'projects', 'contacts'];
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        sections.forEach(section => {
            const element = document.getElementById(section);
            if (element) {
                const offsetTop = element.offsetTop;
                const offsetHeight = element.offsetHeight;

                if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                    setActiveSection(section);
                }
            }
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const getButtonClass = (section) => {
        return `mx-4 ${activeSection === section ? 'bg-slate-600 px-4 rounded-3xl' : 'hover:bg-slate-500 hover:px-2 hover:rounded-3xl'}`;
    };

    return (
        <header className="flex justify-center items-center fixed inset-x-0 top-0 px-5 z-50 bg-slate-800">
            <div className="bg-slate-800 mt-2 text-white flex w-full max-w-lg py-2 rounded-3xl justify-center">
                <div className={getButtonClass("home")}>
                    <button onClick={() => scrollToSection("home")}>Home</button>
                </div>
                <div className={getButtonClass("about")}>
                    <button onClick={() => scrollToSection("about")}>About</button>
                </div>
                <div className={getButtonClass("skills")}>
                    <button onClick={() => scrollToSection("skills")}>Skills</button>
                </div>
                <div className={getButtonClass("projects")}>
                    <button onClick={() => scrollToSection("projects")}>Projects</button>
                </div>
                <div className={getButtonClass("contacts")}>
                    <button onClick={() => scrollToSection("contacts")}>Contact</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
