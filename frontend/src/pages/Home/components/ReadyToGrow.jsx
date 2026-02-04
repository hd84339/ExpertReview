import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ArrowRight, Star } from 'lucide-react'

// Platform Icons (Using text/colors since we don't have SVGs handy, but styling them like logos)
const platforms = [
    { name: "Google", color: "bg-white text-blue-600 border-gray-200", icon: "G" },
    { name: "Facebook", color: "bg-[#1877F2] text-white border-transparent", icon: "f" },
    { name: "Yelp", color: "bg-[#FF1A1A] text-white border-transparent", icon: "Y" },
    { name: "TripAdvisor", color: "bg-[#00AF87] text-white border-transparent", icon: "TA" },
    { name: "Instagram", color: "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white border-transparent", icon: "IG" }
]

const ReadyToGrow = () => {
    const containerRef = useRef(null)
    const titleRef = useRef(null)
    const iconsRef = useRef([])

    const addToRefs = (el) => {
        if (el && !iconsRef.current.includes(el)) {
            iconsRef.current.push(el)
        }
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

                        // Title Animation
                        tl.fromTo(titleRef.current.children,
                            { y: 30, opacity: 0 },
                            { y: 0, opacity: 1, stagger: 0.1, duration: 0.8 }
                        )

                        // Icons Pop In
                        tl.fromTo(iconsRef.current,
                            { scale: 0, opacity: 0 },
                            { scale: 1, opacity: 1, stagger: 0.1, duration: 0.6, ease: "back.out(1.7)" },
                            "-=0.4"
                        )

                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.2 }
        )

        if (containerRef.current) observer.observe(containerRef.current)

        // Floating Animation for Icons
        iconsRef.current.forEach((icon, i) => {
            gsap.to(icon, {
                y: -10,
                duration: 2 + (i * 0.5),
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: i * 0.2
            })
        })

        return () => observer.disconnect()
    }, [])

    return (
        <section ref={containerRef} className="py-24 px-6 md:px-16 overflow-hidden bg-[var(--bg-primary)] border-t border-[var(--nav-border)] relative">

            {/* Background Gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-accent/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto text-center relative z-10">

                <div ref={titleRef} className="mb-12 space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm mx-auto">
                        <Star size={14} className="text-accent" fill="currentColor" />
                        <span className="text-sm font-medium text-accent tracking-wide uppercase">Start Growing Today</span>
                    </div>

                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-custom font-bold text-[var(--text-primary)] leading-tight">
                        Ready to Skyrocket Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Online Reputation?</span>
                    </h2>

                    <p className="text-xl text-[var(--text-primary)]/70 max-w-2xl mx-auto font-light">
                        Join the platform that connects you to the reviews that matter. Simple, automated, and powerful.
                    </p>
                </div>

                {/* Platform Icons Orbit */}
                <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
                    {platforms.map((platform, index) => (
                        <div
                            key={index}
                            ref={addToRefs}
                            className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg border ${platform.color} bg-clip-border transform transition-transform hover:scale-110 cursor-default`}
                            title={platform.name}
                        >
                            <span className="font-bold text-xl">{platform.icon}</span>
                        </div>
                    ))}
                    
                </div>

               
            </div>
        </section>
    )
}

export default ReadyToGrow
