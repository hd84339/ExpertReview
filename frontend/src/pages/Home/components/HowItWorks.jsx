import { useRef, useEffect } from 'react'
import gsap from 'gsap'

const steps = [
    {
        title: "Customer scans your QR code",
        desc: "One smart QR code connects customers to all your review platforms.",
        image: "/qr.png",
        color: "from-blue-400 to-cyan-500"
    },
    {
        title: "Select platform & answer questions",
        desc: "Customers share brief feedback through a simple, guided questionnaire.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=300&q=80",
        color: "from-purple-400 to-pink-500"
    },
    {
        title: "AI turns feedback into a review",
        desc: "ExpertReview’s AI instantly transforms responses into professional reviews.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=300&q=80",
        color: "from-amber-400 to-orange-500"
    },
    {
        title: "Customer decides how to share",
        desc: "Every customer chooses whether to publish publicly or send privately.",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=300&q=80",
        color: "from-emerald-400 to-green-500"
    }
]

const HowItWorks = () => {
    const sectionRef = useRef(null)
    const cardsRef = useRef([])

    const addToRefs = (el) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current.push(el)
        }
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        gsap.fromTo(cardsRef.current,
                            { y: 50, opacity: 0 },
                            { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" }
                        )
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.2 }
        )

        if (sectionRef.current) observer.observe(sectionRef.current)

        return () => observer.disconnect()
    }, [])

    return (
        <section ref={sectionRef} className="py-24 px-6 md:px-16 overflow-hidden bg-[var(--bg-primary)] border-t border-[var(--nav-border)]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-6 border border-accent/20">
                        Process
                    </div>
                    <h2 className="text-4xl md:text-5xl font-custom font-bold text-[var(--text-primary)] mb-6">
                        How ExpertReview Works
                    </h2>
                    <p className="text-lg text-[var(--text-primary)]/60 max-w-2xl mx-auto font-light">
                        From scan to review in under 30 seconds — no apps, no sign-ups.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-24 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--nav-border)] to-transparent -z-10"></div>

                    {steps.map((step, index) => (
                        <div key={index} ref={addToRefs} className="flex flex-col items-center text-center group">

                            {/* Visual/Image Area */}
                            <div className="relative w-48 h-48 mb-8 flex items-center justify-center">
                                {/* Blob Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-10 blur-2xl rounded-full group-hover:opacity-20 transition-opacity duration-500`}></div>

                                {/* Image Container */}
                                <div className="relative w-32 h-32 bg-[var(--bg-surface)] rounded-2xl border border-[var(--nav-border)] shadow-xl overflow-hidden transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
                                    <img
                                        src={step.image}
                                        alt={step.title}
                                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold font-custom text-[var(--text-primary)] mb-3 px-4">
                                {step.title}
                            </h3>
                            <p className="text-sm text-[var(--text-primary)]/70 leading-relaxed max-w-xs px-2">
                                {step.desc}
                            </p>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HowItWorks
