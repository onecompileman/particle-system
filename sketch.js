let particleSystems = [];

p5.disableFriendlyErrors = true;

function setup() {
    createCanvas(innerWidth, innerHeight);
}

function draw() {
    background(0);
    renderParticleSystem();
}

function mousePressed() {
    particleSystems.push(
        new ParticleSystem(
            createVector(mouseX, mouseY),
            80,
            createVector(10, 10),
            255,
            createVector(0, -0.05),
            10,
            10
        )
    );
}

function renderParticleSystem() {
    particleSystems.forEach(pS => {
        pS.update();
        pS.render();
    });
}