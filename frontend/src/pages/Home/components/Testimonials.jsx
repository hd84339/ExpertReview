import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { Star, Quote } from 'lucide-react'

const testimonials = [
    {
        name: "Michael Chen",
        role: "Manager",
        company: "Urban Fitness Studio",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
        quote: "Rate Me More helped us go from 12 reviews to over 200 in just 3 months. Our Google rating jumped from 3.8 to 4.7 stars!"
    },
    {
        name: "Sarah Martinez",
        role: "Owner",
        company: "Bella's Italian Kitchen",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
        quote: "The AI-generated reviews sound so natural. Our customers love how easy it is, and we love not spending hours on review management."
    },
    {
        name: "Jennifer Thompson",
        role: "Director",
        company: "Bright Smile Dental",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
        quote: "We were skeptical about AI reviews, but they're incredibly authentic. Best investment we've made for our online presence."
    }
]

const Testimonials = () => {
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
        <section ref={sectionRef} className="py-24 px-6 md:px-16 bg-[var(--bg-surface)]/20 border-t border-[var(--nav-border)]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-6 border border-accent/20">
                        Success Stories
                    </div>
                    <h2 className="text-4xl md:text-5xl font-custom font-bold text-[var(--text-primary)] mb-6">
                        Trusted by 500+ worldwide customers
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            ref={addToRefs}
                            className="bg-[var(--bg-primary)] p-8 rounded-3xl border border-[var(--nav-border)] shadow-lg hover:shadow-xl transition-all duration-300 relative group"
                        >
                            <Quote size={40} className="absolute top-6 right-6 text-accent/10 group-hover:text-accent/20 transition-colors" />

                            <div className="flex text-yellow-500 mb-6 gap-0.5">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={18} fill="currentColor" />)}
                            </div>

                            <p className="text-lg text-[var(--text-primary)]/80 leading-relaxed mb-8 italic">
                                "{item.quote}"
                            </p>

                            <div className="flex items-center gap-4 border-t border-[var(--nav-border)] pt-6">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-[var(--bg-surface)] shadow-sm"
                                />
                                <div>
                                    <h4 className="font-bold text-[var(--text-primary)]">{item.name}</h4>
                                    <p className="text-sm text-[var(--text-primary)]/60">{item.role}, {item.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
