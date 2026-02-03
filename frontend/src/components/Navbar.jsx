import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const navRef = useRef(null)
    const linksRef = useRef([])
    const [isOpen, setIsOpen] = useState(false)
    const mobileMenuRef = useRef(null)

    // Helper to add refs to the array
    const addToRefs = (el) => {
        if (el && !linksRef.current.includes(el)) {
            linksRef.current.push(el);
        }
    };

    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(navRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
        );

        // Stagger animation for links
        if (linksRef.current.length > 0) {
            tl.fromTo(linksRef.current,
                { y: -20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.7)" },
                "-=0.4"
            );
        }
    }, [])

    useEffect(() => {
        if (isOpen) {
            gsap.to(mobileMenuRef.current, { x: 0, duration: 0.5, ease: "power3.out" })
            document.body.style.overflow = 'hidden'
        } else {
            gsap.to(mobileMenuRef.current, { x: '100%', duration: 0.5, ease: "power3.in" })
            document.body.style.overflow = 'auto'
        }
    }, [isOpen])

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <nav ref={navRef} className="fixed top-0 w-full z-50 bg-[var(--nav-bg)] backdrop-blur-md border-b border-[var(--nav-border)] px-6 md:px-12 lg:px-32 py-4 flex justify-between items-center transition-colors duration-300">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group z-50">
                <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-[var(--bg-primary)] shadow-[0_0_15px_rgba(34,211,238,0.5)] group-hover:shadow-[0_0_25px_rgba(34,211,238,0.8)] transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm4.467 4.937a.75.75 0 0 0-1.14-.093l-3.75 4.25a.75.75 0 0 0 1.14.909l3.19-3.615 1.583 1.582a.75.75 0 1 0 1.06-1.06l-2.083-2.083Z" clipRule="evenodd" />
                    </svg>
                </div>
                <span className="text-2xl font-bold tracking-tight text-[var(--text-primary)] transition-colors duration-300" style={{ fontFamily: "'Syne', sans-serif" }}>
                    Expert<span className="text-accent">Review</span>
                </span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-6 lg:space-x-8">
                {['Home', 'Contact', 'Blog'].map((item) => (
                    <Link
                        key={item}
                        to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                        ref={addToRefs}
                        className="text-base font-medium font-custom text-[var(--text-primary)] opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300"
                    >
                        {item}
                    </Link>
                ))}
            </div>

            <div className="hidden md:flex items-center gap-6">
                {/* CTA Button */}
                <button className="bg-[var(--text-primary)] text-[var(--bg-primary)] px-6 py-2.5 rounded-full font-bold text-base hover:bg-accent hover:text-black transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]" style={{ fontFamily: "'Syne', sans-serif" }}>
                    Get Started
                </button>
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden z-50 text-[var(--text-primary)] cursor-pointer" onClick={toggleMenu}>
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                )}
            </div>

            {/* Mobile Menu Overlay */}
            <div
                ref={mobileMenuRef}
                className="fixed inset-0 bg-[var(--bg-surface)]/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center translate-x-full md:hidden"
            >
                <div className="flex flex-col items-center gap-8">
                    {['Home', 'Contact', 'Blog'].map((item) => (
                        <Link
                            key={item}
                            to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                            onClick={() => setIsOpen(false)}
                            className="text-3xl font-medium font-custom text-[var(--text-primary)] hover:text-accent transition-colors duration-300"
                        >
                            {item}
                        </Link>
                    ))}
                    <button className="mt-8 bg-accent text-[var(--bg-primary)] px-8 py-3 rounded-full font-bold text-xl hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.4)]" style={{ fontFamily: "'Syne', sans-serif" }}>
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
