import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { MessageSquare, ShieldCheck, Share2, ThumbsUp, Activity } from 'lucide-react'

const SmartFeedback = () => {
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

                        // Left Content Animation
                        tl.fromTo(leftContentRef.current.children,
                            { y: 30, opacity: 0 },
                            { y: 0, opacity: 1, stagger: 0.1, duration: 0.8 }
                        )

                        // Right Content Animation
                        tl.fromTo(rightContentRef.current,
                            { x: 30, opacity: 0 },
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
        gsap.to(float1.current, { y: -15, duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut" })
        gsap.to(float2.current, { y: -20, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1 })
        gsap.to(float3.current, { y: -10, duration: 5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 0.5 })

        return () => observer.disconnect()
    }, [])

    return (
        <section ref={containerRef} className="py-24 px-6 md:px-16 overflow-hidden bg-[var(--bg-surface)]/30 border-t border-[var(--nav-border)]">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">

                {/* Left Side: Content */}
                <div ref={leftContentRef} className="flex-1 text-center lg:text-left space-y-8">
                    <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm border border-accent/20">
                        Smart Collection
                    </div>

                    <h2 className="text-4xl md:text-5xl font-custom font-bold text-[var(--text-primary)] leading-tight">
                        Smart feedback collection that works for <span className="text-accent">every customer</span>
                    </h2>

                    <div className="space-y-6 text-lg text-[var(--text-primary)]/70 font-light leading-relaxed">
                        <p>
                            Every customer follows the same seamless journey: rate their experience, add optional feedback, then choose how to share it. Those who want to post publicly get redirected to Google, Yelp, or their preferred platform with their feedback ready to paste. Those who prefer privacy send feedback directly to your dashboard.
                        </p>
                        <p>
                            Our optional AI assistant helps customers express their thoughts clearly—always transparent, always editable, and fully controlled by them. No filtering. No gating. Just authentic feedback that builds real reputation while giving you actionable insights to improve.
                        </p>
                    </div>
                </div>

                {/* Right Side: Visuals */}
                <div ref={rightContentRef} className="flex-1 w-full relative min-h-[500px] flex items-center justify-center">

                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/5 blur-[80px] rounded-full pointer-events-none" />

                    {/* Main Central Visual - Dashboard Abstract */}
                    <div className="relative z-10 w-80 h-96 bg-[var(--bg-primary)] rounded-3xl border border-[var(--nav-border)] shadow-2xl p-6 flex flex-col gap-4 overflow-hidden">
                        {/* Header */}
                        <div className="flex items-center gap-3 border-b border-[var(--nav-border)] pb-4">
                            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                                <Activity size={20} />
                            </div>
                            <div>
                                <div className="h-2 w-24 bg-[var(--text-primary)]/10 rounded mb-1"></div>
                                <div className="h-2 w-16 bg-[var(--text-primary)]/10 rounded"></div>
                            </div>
                        </div>

                        {/* Content Placeholder */}
                        <div className="flex-1 bg-[var(--bg-surface)] rounded-xl border border-[var(--nav-border)]/50 p-4 space-y-3">
                            <div className="flex items-center gap-2 mb-2">
                                {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-4 h-4 rounded-full bg-yellow-400"></div>)}
                            </div>
                            <div className="h-2 w-full bg-[var(--text-primary)]/5 rounded"></div>
                            <div className="h-2 w-3/4 bg-[var(--text-primary)]/5 rounded"></div>
                            <div className="h-2 w-5/6 bg-[var(--text-primary)]/5 rounded"></div>
                        </div>

                        {/* Button Placeholder */}
                        <div className="h-10 w-full bg-accent/10 rounded-xl flex items-center justify-center text-accent text-sm font-medium">
                            Share Request
                        </div>
                    </div>

                    {/* Floating Element 1 - Message */}
                    <div ref={float1} className="absolute top-20 left-0 md:-left-10 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-[var(--nav-border)] flex items-center gap-3 z-20">
                        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                            <MessageSquare size={20} />
                        </div>
                        <div className="bg-gray-100 dark:bg-white/5 px-3 py-1.5 rounded-full text-xs">
                            Typing feedback...
                        </div>
                    </div>

                    {/* Floating Element 2 - Shield */}
                    <div ref={float2} className="absolute bottom-24 right-0 md:-right-6 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-[var(--nav-border)] flex items-center gap-3 z-20">
                        <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600">
                            <ShieldCheck size={20} />
                        </div>
                        <div>
                            <div className="font-bold text-xs">Privacy Choice</div>
                            <div className="text-[10px] opacity-60">Verified</div>
                        </div>
                    </div>

                    {/* Floating Element 3 - Share */}
                    <div ref={float3} className="absolute top-40 -right-4 md:-right-12 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-lg border border-[var(--nav-border)] z-10">
                        <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600">
                            <Share2 size={16} />
                        </div>
                    </div>

                    {/* Floating Element 4 - Thumbs Up (Static/Background) */}
                    <div className="absolute bottom-10 -left-4 text-accent/20 rotate-12">
                        <ThumbsUp size={64} />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default SmartFeedback
