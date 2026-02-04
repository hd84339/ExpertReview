import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { Star, ShieldCheck, MessageSquare, Quote, Send } from 'lucide-react'
import MathBackground from './MathBackground'

const Hero = () => {
    const containerRef = useRef(null)
    const leftContentRef = useRef(null)
    const rightContentRef = useRef(null)

    // Refs for individual elements to animate
    const badgeRef = useRef(null)
    const reviewCardRef = useRef(null)
    const statsCardRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

        // Initial Fade In
        tl.fromTo(containerRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 })

        // Left Content Animation
        const leftElements = leftContentRef.current.children
        tl.fromTo(leftElements,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.1, duration: 0.8 }
        )

        // Right Content Animation (Float in)
        tl.fromTo(rightContentRef.current,
            { x: 30, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8 },
            "-=0.6"
        )

        // Floating Animations for Cards
        gsap.to(badgeRef.current, {
            y: -10,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        })

        gsap.to(reviewCardRef.current, {
            y: -15,
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 0.5
        })

        gsap.to(statsCardRef.current, {
            y: -12,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 1
        })

    }, [])

    return (
        <div ref={containerRef} className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-[var(--bg-primary)] pt-20 pb-10 px-4 md:px-8">
            <MathBackground />

            {/* Main Container */}
            <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 z-10">

                {/* Left Side: Text Content */}
                <div ref={leftContentRef} className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start space-y-8">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                        </span>
                        <span className="text-sm font-medium text-accent tracking-wide uppercase">#1 Reputation Management</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-custom font-bold leading-[1.1] text-[var(--text-primary)]">
                        Turn <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Feedback</span> <br />
                        Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">Growth</span>
                    </h1>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-[var(--text-primary)]/70 max-w-2xl font-light leading-relaxed">
                        Collect reviews, boost your online presence, and build trust with a single automated platform.
                        Join thousands of businesses growing with ExpertReview.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <button className="group relative px-8 py-4 bg-accent text-white rounded-xl overflow-hidden shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-all duration-300">
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine" />
                            <span className="relative font-bold text-lg flex items-center gap-2">
                                Start Free Trial <Send size={18} />
                            </span>
                        </button>

                        <button className="px-8 py-4 rounded-xl border border-[var(--nav-border)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--bg-surface)]/80 font-medium text-lg transition-all duration-300 flex items-center gap-2 group">
                            <span className="group-hover:translate-x-1 transition-transform">How it Works</span>
                        </button>
                    </div>

                    {/* Social Proof */}
                    <div className="flex items-center gap-4 pt-4 opacity-80">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-[var(--bg-primary)] bg-gray-200 overflow-hidden">
                                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col">
                            <div className="flex text-yellow-500">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                            </div>
                            <span className="text-sm font-medium">Trusted by 500+ Businesses</span>
                        </div>
                    </div>
                </div>

                {/* Right Side: Visuals */}
                <div ref={rightContentRef} className="flex-1 w-full max-w-lg lg:max-w-none relative min-h-[500px] flex items-center justify-center">

                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/5 blur-[100px] rounded-full pointer-events-none" />

                    {/* Main Visual - Review Card */}
                    <div ref={reviewCardRef} className="absolute top-10 left-10 md:left-20 z-20 w-72 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">JD</div>
                            <div>
                                <h4 className="font-bold text-white/600 text-sm">John Doe</h4>
                                <div className="flex text-yellow-400 gap-0.5">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                                </div>
                            </div>
                            <Quote className="ml-auto text-white/20" size={24} />
                        </div>
                        <p className="text-white/800 text-sm leading-relaxed">
                            "This platform completely transformed how we handle customer feedback. Our Google rating went from 4.2 to 4.9 in just weeks!"
                        </p>
                    </div>

                    {/* Floating Badge - Success */}
                    <div ref={badgeRef} className="absolute bottom-20 right-10 z-30 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-[var(--nav-border)] flex items-center gap-3 animate-float-delayed">
                        <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                            <ShieldCheck size={24} />
                        </div>
                        <div>
                            <div className="font-bold text-white/80">Verified</div>
                            <div className="text-xs text-white/80">Business Profile</div>
                        </div>
                    </div>

                    {/* Floating Stats Card */}
                    <div ref={statsCardRef} className="absolute top-1/2 right-0 md:-right-4 transform -translate-y-1/2 z-10 bg-black/80 backdrop-blur-md p-5 rounded-2xl border border-white/10 shadow-2xl w-64">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-gray-400 text-xs uppercase tracking-wider">Review Growth</span>
                            <span className="text-green-400 text-xs font-bold">+128%</span>
                        </div>
                        <div className="h-24 flex items-end justify-between gap-2 px-1">
                            {[40, 65, 45, 80, 55, 90, 100].map((h, i) => (
                                <div key={i} style={{ height: `${h}%` }} className="w-full bg-accent/80 rounded-t-sm hover:bg-accent transition-colors"></div>
                            ))}
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-10 text-accent/20 animate-pulse">
                        <MessageSquare size={64} />
                    </div>
                    <div className="absolute bottom-10 left-0 text-purple-500/20 animate-pulse duration-700">
                        <Star size={48} />
                    </div>

                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
                <div className="w-1 h-16 rounded-full bg-gradient-to-b from-transparent via-[var(--text-primary)] to-transparent"></div>
            </div>
        </div>
    )
}

export default Hero
