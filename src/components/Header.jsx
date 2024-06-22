import React from "react";

function Header() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className="flex justify-center fixed left-[5%] sm:left-[10%] md:left-[35%] px-5">
            <div className="bg-slate-800 mt-2 text-white flex w-[400px] py-2 rounded-3xl">
                <div className="mx-4 hover:bg-slate-500 hover:px-2 hover:rounded-3xl">
                    <button onClick={() => scrollToSection("home")}>Home</button>
                </div>
                <div className="mx-4 hover:bg-slate-500 hover:px-2 hover:rounded-3xl">
                    <button onClick={() => scrollToSection("about")}>About</button>
                </div>
                <div className="mx-4 hover:bg-slate-500 hover:px-2 hover:rounded-3xl">
                    <button onClick={() => scrollToSection("skills")}>Skills</button>
                </div>
                <div className="mx-4 hover:bg-slate-500 hover:px-2 hover:rounded-3xl">
                    <button onClick={() => scrollToSection("projects")}>Projects</button>
                </div>
                <div className="mx-4 hover:bg-slate-500 hover:px-2 hover:rounded-3xl">
                    <button onClick={() => scrollToSection("contacts")}>Contact</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
