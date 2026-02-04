import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { BarChart3, PieChart, Users, QrCode, ArrowUpRight, CheckCircle2 } from 'lucide-react'

const DashboardPreview = () => {
    const containerRef = useRef(null)
    const leftContentRef = useRef(null)
    const rightContentRef = useRef(null)

    // Refs for floating elements
    const float1 = useRef(null)
    const float2 = useRef(null)
    const float3 = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

                        // Right Content Animation (Text)
                        tl.fromTo(rightContentRef.current.children,
                            { y: 30, opacity: 0 },
                            { y: 0, opacity: 1, stagger: 0.1, duration: 0.8 }
                        )

                        // Left Content Animation (Visuals)
                        tl.fromTo(leftContentRef.current,
                            { x: -30, opacity: 0 },
                            { x: 0, opacity: 1, duration: 0.8 },
                            "-=0.6"
                        )

                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.2 }
        )

        if (containerRef.current) observer.observe(containerRef.current)

        // Floating Animations
        gsap.to(float1.current, { y: -15, duration: 3.5, repeat: -1, yoyo: true, ease: "sine.inOut" })
        gsap.to(float2.current, { y: -12, duration: 4.5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 0.5 })
        gsap.to(float3.current, { y: -18, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1 })

        return () => observer.disconnect()
    }, [])

    return (
        <section ref={containerRef} className="py-24 px-6 md:px-16 overflow-hidden bg-[var(--bg-primary)] border-t border-[var(--nav-border)]">
            <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-24">

                {/* Left Side: Visuals */}
                <div ref={leftContentRef} className="flex-1 w-full relative min-h-[500px] flex items-center justify-center">

                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-500/5 blur-[80px] rounded-full pointer-events-none" />

                    {/* Main Visual - Dashboard Card */}
                    <div className="relative z-10 w-full max-w-md bg-[var(--bg-surface)] rounded-3xl border border-[var(--nav-border)] shadow-2xl p-6 md:p-8 flex flex-col gap-6">
                        {/* Header Mockup */}
                        <div className="flex justify-between items-center pb-4 border-b border-[var(--nav-border)]/50">
                            <div className="h-4 w-32 bg-[var(--text-primary)]/10 rounded"></div>
                            <div className="flex gap-2">
                                <div className="h-8 w-8 rounded-full bg-[var(--text-primary)]/5"></div>
                                <div className="h-8 w-8 rounded-full bg-[var(--text-primary)]/5"></div>
                            </div>
                        </div>

                        {/* Chart Area Mockup */}
                        <div className="flex items-end justify-between h-40 gap-2 px-2">
                            {[35, 55, 45, 70, 60, 85, 95].map((h, i) => (
                                <div key={i} style={{ height: `${h}%` }} className={`w-full rounded-t-sm opacity-80 ${i % 2 === 0 ? 'bg-indigo-500' : 'bg-purple-500'}`}></div>
                            ))}
                        </div>

                        {/* Stats Row Mockup */}
                        <div className="grid grid-cols-3 gap-4">
                            <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                                <div className="text-blue-500 mb-1"><BarChart3 size={18} /></div>
                                <div className="h-2 w-12 bg-blue-500/20 rounded mb-1"></div>
                                <div className="h-4 w-8 bg-blue-500/20 rounded"></div>
                            </div>
                            <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20">
                                <div className="text-orange-500 mb-1"><PieChart size={18} /></div>
                                <div className="h-2 w-12 bg-orange-500/20 rounded mb-1"></div>
                                <div className="h-4 w-8 bg-orange-500/20 rounded"></div>
                            </div>
                            <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/20">
                                <div className="text-green-500 mb-1"><Users size={18} /></div>
                                <div className="h-2 w-12 bg-green-500/20 rounded mb-1"></div>
                                <div className="h-4 w-8 bg-green-500/20 rounded"></div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Element 1 - QR Codes */}
                    <div ref={float1} className="absolute -top-6 -right-4 md:-right-10 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-[var(--nav-border)] z-20 flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-500">
                            <QrCode size={24} />
                        </div>
                        <div>
                            <div className="font-bold text-sm">Active QRs</div>
                            <div className="text-xs text-emerald-500 font-medium flex items-center gap-1">
                                4 Active Locations <CheckCircle2 size={10} />
                            </div>
                        </div>
                    </div>

                    {/* Floating Element 2 - Growth */}
                    <div ref={float2} className="absolute bottom-20 -left-6 md:-left-12 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-[var(--nav-border)] z-20">
                        <div className="flex items-center gap-4 mb-2">
                            <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-500">
                                <ArrowUpRight size={20} />
                            </div>
                            <div>
                                <div className="text-xs opacity-60 uppercase tracking-wider">Growth</div>
                                <div className="font-bold text-lg">+24%</div>
                            </div>
                        </div>
                        <div className="h-1.5 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div className="h-full w-[70%] bg-amber-500 rounded-full"></div>
                        </div>
                    </div>

                    {/* Floating Element 3 - Decorative Icon */}
                    <div ref={float3} className="absolute -bottom-10 right-10 text-pink-500/20 rotate-[15deg]">
                        <PieChart size={80} />
                    </div>

                </div>

                {/* Right Side: Content */}
                <div ref={rightContentRef} className="flex-1 text-center lg:text-left space-y-8">
                    <div className="inline-block px-4 py-2 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 font-medium text-sm border border-purple-500/20">
                        Centralized Control
                    </div>

                    <h2 className="text-4xl md:text-5xl font-custom font-bold text-[var(--text-primary)] leading-tight">
                        Everything you need to manage reviews in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">one dashboard</span>
                    </h2>

                    <div className="space-y-6 text-lg text-[var(--text-primary)]/70 font-light leading-relaxed">
                        <p>
                            Track customer satisfaction in real-time, monitor review generation, and understand what makes your customers happy. Our intuitive dashboard gives you actionable insights without overwhelming complexity.
                        </p>
                        <p>
                            Manage multiple QR codes, connect all your review platforms, and view detailed analytics—all from one centralized hub designed for busy business owners who value their time.
                        </p>
                    </div>


                </div>

            </div>
        </section>
    )
}

export default DashboardPreview
