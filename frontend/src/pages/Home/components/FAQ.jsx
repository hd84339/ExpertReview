import { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import { Plus, Minus } from 'lucide-react'

const faqs = [
    {
        question: "How does the AI generated review response work?",
        answer: "Our AI analyzes the sentiment and context of each review to generate a personalized, professional response. You can approve, edit, or regenerate responses before they are posted, ensuring you maintain full control over your brand voice."
    },
    {
        question: "Is ExpertReview compliant with platform policies?",
        answer: "Yes, absolutely. We strictly adhere to the terms of service for Google, Yelp, Facebook, and other major review platforms. We do not gate reviews (preventing negative reviews from being posted), but we do help you resolve internal feedback privately before it goes public."
    },
    {
        question: "Can I manage multiple locations?",
        answer: "Yes! ExpertReview is built for scale. You can manage reviews for a single store or hundreds of locations from one centralized dashboard, with granular access controls for your team members."
    },
    {
        question: "Do I need technical skills to install this?",
        answer: "Not at all. setting up ExpertReview takes less than 5 minutes. We provide simple QR codes and verification links that you can start using immediately. No coding required."
    }
]

const FAQItem = ({ item, isOpen, onClick, index }) => {
    const contentRef = useRef(null)

    useEffect(() => {
        if (isOpen) {
            gsap.to(contentRef.current, { height: 'auto', opacity: 1, duration: 0.4, ease: "power2.out" })
        } else {
            gsap.to(contentRef.current, { height: 0, opacity: 0, duration: 0.3, ease: "power2.in" })
        }
    }, [isOpen])

    return (
        <div className="border-b border-[var(--nav-border)]">
            <button
                onClick={onClick}
                className="w-full py-6 flex items-center justify-between text-left group"
            >
                <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-accent' : 'text-[var(--text-primary)]'} group-hover:text-accent`}>
                    {item.question}
                </span>
                <div className={`p-2 rounded-full transition-colors ${isOpen ? 'bg-accent/10 text-accent' : 'bg-[var(--bg-surface)] text-[var(--text-primary)]/60 group-hover:bg-accent/10 group-hover:text-accent'}`}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                </div>
            </button>
            <div
                ref={contentRef}
                className="h-0 opacity-0 overflow-hidden"
            >
                <p className="pb-6 text-[var(--text-primary)]/70 leading-relaxed font-light">
                    {item.answer}
                </p>
            </div>
        </div>
    )
}

const FAQ = () => {
    const containerRef = useRef(null)
    const [openIndex, setOpenIndex] = useState(0)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        gsap.fromTo(containerRef.current,
                            { y: 30, opacity: 0 },
                            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
                        )
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.2 }
        )

        if (containerRef.current) observer.observe(containerRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section ref={containerRef} className="py-24 px-6 md:px-16 bg-[var(--bg-surface)]/20 border-t border-[var(--nav-border)]">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 rounded-full bg-purple-500/10 text-purple-500 font-medium text-sm mb-6 border border-purple-500/20">
                        Common Questions
                    </div>
                    <h2 className="text-4xl md:text-5xl font-custom font-bold text-[var(--text-primary)]">
                        Frequently asked questions
                    </h2>
                </div>

                <div className="space-y-2">
                    {faqs.map((item, index) => (
                        <FAQItem
                            key={index}
                            item={item}
                            index={index}
                            isOpen={index === openIndex}
                            onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQ
