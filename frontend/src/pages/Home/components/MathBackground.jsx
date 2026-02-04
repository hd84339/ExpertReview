import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const MathBackground = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        let width = window.innerWidth
        let height = window.innerHeight

        const resize = () => {
            width = window.innerWidth
            height = window.innerHeight
            canvas.width = width
            canvas.height = height
        }

        window.addEventListener('resize', resize)
        resize()

        let time = 0

        const render = () => {
            ctx.clearRect(0, 0, width, height)

            // Modern, subtle wave animation
            ctx.lineWidth = 1.5
            time += 0.005

            // Draw multiple waves
            for (let i = 0; i < 5; i++) {
                ctx.beginPath()
                ctx.strokeStyle = `rgba(14, 165, 233, ${0.1 + (i * 0.05)})` // Reduced opacity for subtlety

                for (let x = 0; x < width; x++) {
                    // Complex sine wave formula for organic movement
                    const y = height / 2 +
                        Math.sin(x * 0.003 + time + i) * 50 +
                        Math.sin(x * 0.007 + time * 0.5) * 30 * (i + 1) * 0.2

                    if (x === 0) ctx.moveTo(x, y)
                    else ctx.lineTo(x, y)
                }
                ctx.stroke()
            }
        }

        gsap.ticker.add(render)

        return () => {
            window.removeEventListener('resize', resize)
            gsap.ticker.remove(render)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none bg-[var(--bg-surface)] opacity-50"
        />
    )
}

export default MathBackground
