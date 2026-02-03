import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import MathBackground from './MathBackground'

const Hero = () => {
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)
    const descRef = useRef(null)
    const ctaRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline()
        tl.fromTo(titleRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" })
            .fromTo(subtitleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.6")
            .fromTo(descRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.6")
            .fromTo(ctaRef.current, { opacity: 0, y: 20, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "back.out(1.7)" }, "-=0.6")
    }, [])

    return (
        <div className="relative flex flex-col items-center justify-center min-h-[85vh] w-[96%] mx-auto mt-20 md:mt-24 lg:mt-24 rounded-3xl overflow-hidden border border-[var(--nav-border)] bg-[var(--bg-surface)]/50 px-6 py-12 md:py-16 lg:py-0 backdrop-blur-sm transition-all duration-300">
            <MathBackground />

            {/* Headline */}
            <h1 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-custom font-bold text-[var(--text-primary)] mb-6 leading-tight z-10 max-w-5xl text-center">
                The <span className="text-accent">Smart Way</span> to Build <br className="hidden md:block" /> and Protect Your <span className="text-accent">Online Reputation</span>
            </h1>

            {/* Sub-headline */}
            <p ref={subtitleRef} className="text-lg md:text-2xl text-[var(--text-primary)] opacity-80 font-medium mb-6 max-w-3xl z-10 text-center">
                One platform to collect feedback, generate reviews, <br className="hidden md:block" /> and manage your business ratings.
            </p>

            {/* Description */}
            <p ref={descRef} className="text-base md:text-lg text-[var(--text-primary)] opacity-60 mb-10 max-w-2xl font-light tracking-wide z-10 text-center px-4 md:px-0">
                Customers scan one QR code, share feedback, and choose where it goes.
                Our AI helps turn their thoughts into clear, authentic reviews for Google, Facebook, and more.
            </p>

            {/* CTA Button */}
            <div ref={ctaRef} className="z-10">
                <button className="bg-accent text-white px-8 py-3.5 rounded-full font-bold text-lg font-custom hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                    Start Free Today
                </button>
            </div>
        </div>
    )
}

export default Hero
