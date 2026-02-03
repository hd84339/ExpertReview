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

        // Grid parameters
        const gridSize = 50
        let offset = 0

        const render = () => {
            ctx.clearRect(0, 0, width, height)

            // Draw Grid
            ctx.lineWidth = 1
            ctx.strokeStyle = 'rgba(14, 165, 233, 0.2)' // Light blue for white background
            offset = (offset + 0.5) % gridSize

            ctx.beginPath()
            // Draw Vertical Lines
            for (let x = offset; x < width; x += gridSize) {
                ctx.moveTo(x, 0)
                ctx.lineTo(x, height)
            }
            // Draw Horizontal Lines
            for (let y = offset; y < height; y += gridSize) {
                ctx.moveTo(0, y)
                ctx.lineTo(width, y)
            }
            ctx.stroke()
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
            className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none bg-white opacity-60"
            
        />
    )
}

export default MathBackground
