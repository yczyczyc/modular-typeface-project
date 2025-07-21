let sketches = [];
let mySound;

function preload() {
  soundFormats('mp3'); // optional if using multiple formats
  mySound = loadSound('chimes.mp3');
}

const wordLayout = {
    "twelve": "word-twelve",
    "three": "word-three",
    "six": "word-six",
    "nine": "word-nine"
};

function setupClockWords() {
    for (const [word, containerId] of Object.entries(wordLayout)) {
        const container = document.getElementById(containerId);

        for (let i = 0; i < word.length; i++) {
            const letter = word[i].toUpperCase(); // Match A–Z keys in letterCompositions

            // Create a container for each letter
            let letterContainer = document.createElement('div');
            letterContainer.className = 'letter-container';
            container.appendChild(letterContainer);

            // Create a canvas container inside each letter container
            let canvasContainer = document.createElement('div');
            canvasContainer.className = 'canvas-container';
            letterContainer.appendChild(canvasContainer);

            // Get the shape composition for this letter
            const composition = letterCompositions[letter] || [];

            // Create p5 sketch
            let sketch = new p5((p) => {
                let shapesData = {};
                let canvas;

                p.setup = () => {
                    const width = canvasContainer.offsetWidth || 60;
                    const height = canvasContainer.offsetHeight || 60;

                    canvas = p.createCanvas(width, height);
                    canvas.parent(canvasContainer);
                    p.noFill();
                    p.angleMode(p.DEGREES);

                    // Setup shapes
                    composition.forEach(({ shape }) => {
                        if (shapes[shape]) {
                            shapesData[shape] = shapes[shape].setup(p);
                        }
                    });
                };

                p.draw = () => {
                    p.background(255);
                    const w = p.width;
                    const h = p.height;

                    composition.forEach(({ shape, offset }) => {
                        if (shapes[shape]) {
                            const proportionalOffset = {
                                x: offset.x * w / 240,
                                y: offset.y * h / 300
                            };
                            shapes[shape].draw(p, shapesData[shape], proportionalOffset);
                        }
                    });
                };

                p.windowResized = () => {
                    const rect = canvasContainer.getBoundingClientRect();
                    const size = Math.min(rect.width, rect.height);
                    p.resizeCanvas(rect.width, size);
                };
            });

            sketches.push(sketch);
        }
    }
}

window.addEventListener("DOMContentLoaded", setupClockWords);
