import { Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="bg-[var(--bg-primary)] border-t border-[var(--nav-border)] pt-20 pb-10 px-6 md:px-16">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold">
                                E
                            </div>
                            <span className="text-xl font-bold font-custom tracking-tight">ExpertReview</span>
                        </div>
                        <p className="text-[var(--text-primary)]/60 leading-relaxed text-sm">
                            Empowering businesses to build trust and grow through authentic customer reviews.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-[var(--bg-surface)] border border-[var(--nav-border)] flex items-center justify-center text-[var(--text-primary)]/60 hover:text-accent hover:border-accent/30 transition-all">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-[var(--bg-surface)] border border-[var(--nav-border)] flex items-center justify-center text-[var(--text-primary)]/60 hover:text-accent hover:border-accent/30 transition-all">
                                <Instagram size={18} />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[var(--bg-surface)] border border-[var(--nav-border)] flex items-center justify-center text-[var(--text-primary)]/60 hover:text-accent hover:border-accent/30 transition-all">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className="font-bold text-[var(--text-primary)] mb-6">Product</h4>
                        <ul className="space-y-4 text-sm text-[var(--text-primary)]/60">
                            <li><a href="#" className="hover:text-accent transition-colors">Features</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Integrations</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Case Studies</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">API</a></li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="font-bold text-[var(--text-primary)] mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-[var(--text-primary)]/60">
                            <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Partners</a></li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="font-bold text-[var(--text-primary)] mb-6">Legal</h4>
                        <ul className="space-y-4 text-sm text-[var(--text-primary)]/60">
                            <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Cookie Policy</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Security</a></li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-[var(--nav-border)] flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-[var(--text-primary)]/40">
                        © 2026 ExpertReview. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-[var(--text-primary)]/40">
                        <span>Made with</span>
                        <Heart size={14} className="text-red-500 fill-red-500" />
                        <span>by</span>
                        <a href="https://www.linkedin.com/in/harsh-dubey-498498256/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors font-medium">Harsh Dubey</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
