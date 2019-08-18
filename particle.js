class Particle {

    constructor(pos, vel, col, life, shape, size, opacity, force) {
        this.pos = pos;
        this.vel = vel;
        this.col = col;
        this.life = life;
        this.origLife = life;
        this.shape = shape;
        this.size = size;
        this.opacity = opacity;
        this.force = force;
    }

    render() {
        push();
        translate(this.pos.x, this.pos.y);
        stroke(this.col, this.opacity);
        noFill();

        const lifePercentage = this.life / this.origLife;

        if (this.shape === 'rect') {
            rect(0, 0, this.size.x * lifePercentage, this.size.y * lifePercentage);
        } else {
            ellipse(0, 0, this.size.x * lifePercentage, this.size.y * lifePercentage);
        }

        pop();
    }

    update() {
        this.vel.add(this.force);
        this.pos.add(this.vel);
        this.vel.limit(3);
        this.life--;
        this.opacity = map(this.life, 0, this.origLife, 0, 255);
    }

    isDead() {
        return this.life <= 0;
    }

}