<script setup>
    const props = defineProps(['hoverTarget'])

    const mouseEffect = ref()

    class Particle {
        constructor(x, y, slow) {
            this.x = x
            this.y = y
            this.time = 30
            this.direction = Math.random() * 6.28318
            this.size = Math.random() * 20 + 10
            this.slow = slow
        }

        update(canvas, frameTime) {
            this.time -= frameTime * 0.05
            let size = Math.max(0, this.size * this.time / 30 * Math.min(5 - this.time / 6, 1.5)) / 3
            let movedX = Math.sin(this.direction) * (30 / this.slow - this.time / this.slow)
            let movedY = Math.cos(this.direction) * (30 / this.slow - this.time / this.slow)
            canvas.fillRect(this.x - size / 2 + movedX, this.y - size / 2 + movedY, size, size)
        }
    }

    class MouseEffect {
        mouseX = 0
        mouseY = 0
        pmouseX = 0
        pmouseY = 0
        hover = 0
        onHoverTarget = false
        touchDevice = matchMedia('not (pointer: fine)').matches
        particles = []
        particleColddown = 0
        lastTime = 0
        updated = false

        constructor(hoverTarget) {
            this.canvas = mouseEffect.value
            document.body.append(this.canvas)
            this.c = this.canvas.getContext('2d')
            this.canvas.width = this.canvas.clientWidth * devicePixelRatio
            this.canvas.height = this.canvas.clientHeight * devicePixelRatio
            this.c.scale(devicePixelRatio, devicePixelRatio)
            this.c.lineWidth = 3

            addEventListener('resize', () => {
                if(this.canvas.width == this.canvas.clientWidth * devicePixelRatio && this.canvas.height == this.canvas.clientHeight * devicePixelRatio) return
                this.canvas.width = this.canvas.clientWidth * devicePixelRatio
                this.canvas.height = this.canvas.clientHeight * devicePixelRatio
                this.c.scale(devicePixelRatio, devicePixelRatio)
                this.c.lineWidth = 3
                this.touchDevice = matchMedia('not (pointer: fine)').matches
            })
            for(let event of ['mousemove', 'touchmove']) addEventListener(event, e => {
                this.mouseX = (event.startsWith('touch'))? e.touches[0].clientX : e.clientX
                this.mouseY = (event.startsWith('touch'))? e.touches[0].clientY : e.clientY
                this.onHoverTarget = e.target.matches(hoverTarget) && !event.startsWith('touch') && !this.touchDevice
                this.updated = false
            })
            addEventListener('mousedown', e => {
                if(e.button == 0) for(let i = 0; i < 5; i++) this.particles.push(new Particle(this.mouseX, this.mouseY, 1))
                this.updated = false
            })
            addEventListener('touchstart', e => {
                this.mouseX = e.touches[0].clientX
                this.mouseY = e.touches[0].clientY
            })
            document.addEventListener('mouseleave', () => this.onHoverTarget = false )
            window.addEventListener('scroll', () => this.onHoverTarget = false )

            requestAnimationFrame(this.update.bind(this))
        }

        update(time) {
            requestAnimationFrame(this.update.bind(this))
            
            this.c.fillStyle = `rgb(255, 255, 255)`
            this.c.strokeStyle = `rgb(255, 255, 255)`
            if((this.mouseX != this.pmouseX || this.mouseY != this.pmouseY) && this.hover < 0.2) this.particleColddown += time - this.lastTime
            while(this.particleColddown > 50) {
                this.particleColddown -= 50
                this.particles.push(new Particle(this.mouseX, this.mouseY, 2))
            }
            if(this.particles.length > 0 || this.hover > 0.01) {
                this.c.clearRect(0, 0, this.canvas.width, this.canvas.height)
                this.hover = Math.min(Math.max(this.hover + (((this.onHoverTarget)? 1 : 0 - this.hover)) * (time - this.lastTime) * 0.01, 0), 1)
            } else this.updated = true
            if(this.hover > 0.01)  {
                let size = this.hover * 24
                this.c.strokeRect(this.mouseX - size / 2, this.mouseY - size / 2, size, size)
            }
            for(let p of this.particles) { p.update(this.c, time - this.lastTime) }
            this.particles = this.particles.filter(item => item.time > -1)
            this.pmouseX = this.mouseX
            this.pmouseY = this.mouseY
            this.lastTime = time
        }
    }

    onMounted(() => new MouseEffect(props.hoverTarget))
</script>

<template>
    <canvas id="mouse-effect" ref="mouseEffect"></canvas>
</template>

<style>
    #mouse-effect {
        position: fixed;
        top: 0px;
        width: 100lvw;
        height: 100lvh;
        mix-blend-mode: difference;
        pointer-events: none;
        z-index: 2;
    }

    body, a {
        cursor: none;
    }
</style>