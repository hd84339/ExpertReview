import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import SmartFeedback from './components/SmartFeedback'
import DashboardPreview from './components/DashboardPreview'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import ReadyToGrow from './components/ReadyToGrow'
import Footer from '../../components/Footer'

const Home = () => {
    return (
        <div>
            <Hero />
            <Features />
            <HowItWorks />
            <SmartFeedback />
            <DashboardPreview />
            <Testimonials />
            <FAQ />
            <ReadyToGrow />
            <Footer />
        </div>
    )
}

export default Home
