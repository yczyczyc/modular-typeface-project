
let secondMarkers = [];
let sketches = [];
let redDots = [];
let lastDotTime = 0;


function drawRedDots(p) {
const currentSecond = p.second();

if (currentSecond !== drawRedDots.lastSecond) {
    redDots.push({
    x: p.mouseX,
    y: p.mouseY,
    radius: 4,
    alpha: 255,
    });
    drawRedDots.lastSecond = currentSecond;
}

// Update and draw
for (let i = redDots.length - 1; i >= 0; i--) {
    const d = redDots[i];
    d.radius += .5;
    d.alpha -= 2;
    p.noStroke();
    p.fill(225, 0, 0, d.alpha);
    p.ellipse(d.x, d.y, d.radius);

    if (d.alpha <= 0) redDots.splice(i, 1);
}
}
drawRedDots.lastSecond = -1;

let overlaySketch = new p5((p) => {
    p.setup = () => {
        let cnv = p.createCanvas(window.innerWidth, window.innerHeight);
        cnv.position(0, 0);
        cnv.style('pointer-events', 'none');
        p.angleMode(p.DEGREES);
    };

    p.draw = () => {
        p.clear();
        drawRedDots(p); // reuse your working function
    };

    p.windowResized = () => {
        p.resizeCanvas(window.innerWidth, window.innerHeight);
    };
});


function setup() {
    // createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);

    // Initialize the sketches and add them to the sketches container
    const container = document.getElementById('sketches-container');
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Letters A to Z

    for (let i = 0; i < letters.length; i++) {
        const letter = letters[i];

        // Create a letter container for each sketch
        let letterContainer = document.createElement('div');
        letterContainer.className = 'letter-container';
        container.appendChild(letterContainer);

        // Create a canvas container inside the letter container
        let canvasContainer = document.createElement('div');
        canvasContainer.className = 'canvas-container';
        letterContainer.appendChild(canvasContainer);

        // Get the composition for the current letter
        const composition = letterCompositions[letter] || [];

        // Initialize the p5.js sketch
        let sketch = new p5((p) => {
            let shapesData = {};

            p.setup = () => {
                let canvas = p.createCanvas(240, 300); // Default 2D canvas
                canvas.parent(canvasContainer);
                p.noFill();
                p.angleMode(p.DEGREES);

                // Initialize shapes for the current letter
                composition.forEach(({ shape }) => {
                    if (shapes[shape]) {
                        shapesData[shape] = shapes[shape].setup(p);
                    }
                });
            };

            p.draw = () => {
                p.background(255);

                // Draw each shape in the letter's composition
                composition.forEach(({ shape, offset }) => {
                    if (shapes[shape]) {
                        shapes[shape].draw(p, shapesData[shape], offset); // Pass rotation angle
                    }
                });
            };
        });
        sketches.push(sketch);
    }

    // Initially hide the clock until the dropdown is expanded
    noLoop(); // Prevent continuous drawing
}

