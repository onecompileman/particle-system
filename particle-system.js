class ParticleSystem {

    constructor(pos, life, size, opacity, force, count, generationSpeed) {
        this.pos = pos;
        this.life = life;
        this.origLife = life;
        this.size = size;
        this.opacity = opacity;
        this.force = force;
        this.count = count;
        this.generationSpeed = generationSpeed;
        this.particles = [];
        this.generateParticles();
    }

    generateParticles() {
        this.particles = [
            ...Array(this.count).fill(1).map(n => new Particle(
                this.pos.copy(),
                createVector(random(-1, 1), random(-1, 1)),
                color(random(180, 255), random(100, 255), random(100, 255)),
                this.life,
                random(['rect', 'ellipse']),
                this.size,
                this.opacity,
                this.force
            )),
            ...this.particles
        ]
    }

    update() {
        this.particles = this.particles.filter(p => !p.isDead());
        if (frameCount % this.generationSpeed === 0) {
            this.generateParticles();
        }
    }

    render() {
        this.particles.forEach(p => {
            p.update();
            p.render();
        });
    }
}