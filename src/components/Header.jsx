import { useState, useEffect } from "react";
import { MdEnergySavingsLeaf } from "react-icons/md";


function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const homeSection = document.querySelector("#home");
            const homeHeight = homeSection?.offsetHeight || 0;
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > homeHeight - 1);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`h-auto w-full fixed z-20 transition-colors duration-300 ${isScrolled ? "bg-white bg-opacity-90" : "bg-transparent"}`}>
            <nav className="mx-auto py-4 px-5 flex justify-between items-center">
                <div className="text-4xl font-bold text-dark-green"><MdEnergySavingsLeaf/></div>
                <button
                    className={`sm:hidden text-2xl transition-transform duration-300 ${isScrolled ? "text-black" : "text-white"}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    &#9776;
                </button>
                <ul className="hidden sm:flex gap-5 justify-center">
                    <li>
                        <a
                            href="#home"
                            className={`font-extralight sm:text-base lg:text-lg text-xs ease-in-out duration-300 ${
                                isScrolled ? "text-black hover:text-dark-green" : "text-white hover:text-dark-green"
                            }`}
                        >
                            HOME
                        </a>
                    </li>
                    <li>
                        <a
                            href="#problema"
                            className={`font-extralight sm:text-base lg:text-lg text-xs ease-in-out duration-300 ${
                                isScrolled ? "text-black hover:text-dark-green" : "text-white hover:text-dark-green"
                            }`}
                        >
                            PROBLEMA
                        </a>
                    </li>
                    <li>
                        <a
                            href="#energia-limpa"
                            className={`font-extralight sm:text-base lg:text-lg text-xs ease-in-out duration-300 ${
                                isScrolled ? "text-black hover:text-dark-green" : "text-white hover:text-dark-green"
                            }`}
                        >
                            ENERGIA LIMPA
                        </a>
                    </li>
                    <li>
                        <a
                            href="#tecnologia"
                            className={`font-extralight sm:text-base lg:text-lg text-xs ease-in-out duration-300 ${
                                isScrolled ? "text-black hover:text-dark-green" : "text-white hover:text-dark-green"
                            }`}
                        >
                            TECNOLOGIA
                        </a>
                    </li>
                    <li>
                        <a
                            href="#acoes"
                            className={`font-extralight sm:text-base lg:text-lg text-xs ease-in-out duration-300 ${
                                isScrolled ? "text-black hover:text-dark-green" : "text-white hover:text-dark-green"
                            }`}
                        >
                            AÇÃO
                        </a>
                    </li>
                </ul>
                {menuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white sm:hidden flex flex-col gap-4 p-5 shadow-lg">
                        <a href="#home" onClick={() => setMenuOpen(false)} className="text-black text-lg font-light hover:text-dark-green">
                            HOME
                        </a>
                        <a href="#problema" onClick={() => setMenuOpen(false)} className="text-black text-lg font-light hover:text-dark-green">
                            PROBLEMA
                        </a>
                        <a href="#energia-limpa" onClick={() => setMenuOpen(false)} className="text-black text-lg font-light hover:text-dark-green">
                            ENERGIA LIMPA
                        </a>
                        <a href="#tecnologia" onClick={() => setMenuOpen(false)} className="text-black text-lg font-light hover:text-dark-green">
                            TECNOLOGIA
                        </a>
                        <a href="#acoes" onClick={() => setMenuOpen(false)} className="text-black text-lg font-light hover:text-dark-green">
                            AÇÃO
                        </a>
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Header;
