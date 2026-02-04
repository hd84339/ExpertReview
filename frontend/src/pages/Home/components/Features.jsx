import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { QrCode, Sparkles, ShieldCheck } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const featuresData = [
    {
        title: "One QR Code for Every Review Platform",
        desc: "Replace multiple review links with one smart QR code. Customers scan once and choose Google, Facebook, Yelp and more - all from a single place.",
        id: "qr",
        icon: QrCode
    },
    {
        title: "Our AI Turns Feedback Into Reviews",
        desc: "Customers answer a few quick questions. Our AI helps turn their feedback into clear, high-quality reviews written for each platform’s style.",
        id: "ai",
        icon: Sparkles
    },
    {
        title: "Protect Your Rating With Ratememore",
        desc: "After feedback, every customer decides whether to share publicly or send private feedback to your team. Same choice for everyone, regardless of rating.",
        id: "protect",
        icon: ShieldCheck
    }
]

const Features = () => {
    const cardRefs = useRef([])

    const addToRefs = (el) => {
        if (el && !cardRefs.current.includes(el)) {
            cardRefs.current.push(el)
        }
    }

    useEffect(() => {
        const cards = cardRefs.current

        cards.forEach((card, index) => {
            gsap.fromTo(card,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    },
                    delay: index * 0.1
                }
            )
        })
    }, [])

    return (
        <section className="py-24 px-6 md:px-16 lg:px-32 max-w-[1400px] mx-auto">
            {/* Section Header */}
            <div className="mb-20 text-center">
                <h2 className="text-3xl md:text-5xl font-custom font-bold text-[var(--text-primary)] leading-tight max-w-4xl mx-auto">
                    How businesses collect more reviews, <br className="hidden md:block" /> without risking their rating
                </h2>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {featuresData.map((feature, index) => (
                    <div
                        key={index}
                        ref={addToRefs}
                        className="group relative p-8 rounded-2xl border border-[var(--nav-border)] bg-[var(--bg-surface)]/30 transition-all duration-300 hover:shadow-lg backdrop-blur-sm overflow-hidden"
                    >
                        {/* Animated Bottom Border */}
                        <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-accent transition-all duration-300 group-hover:w-full"></div>
                        {/* Animated Left Border */}
                        <div className="absolute bottom-0 left-0 w-[3px] h-0 bg-accent transition-all duration-300 group-hover:h-full"></div>

                        {/* Icon */}
                        <div className="mb-6 w-14 h-14 flex items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-[var(--bg-primary)] transition-all duration-300">
                            <feature.icon strokeWidth={1.5} size={32} />
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold font-custom text-[var(--text-primary)] mb-4 leading-snug">
                            {feature.title}
                        </h3>

                        <p className="text-base text-[var(--text-primary)] opacity-70 leading-relaxed font-light">
                            {feature.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Features
