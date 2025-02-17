// let sketches = [];

// function setup() {
//     const container = document.getElementById('sketches-container');
//     const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Letters A to Z

//     for (let i = 0; i < letters.length; i++) {
//         const letter = letters[i];

//         // Create a letter container for each sketch
//         let letterContainer = document.createElement('div');
//         letterContainer.className = 'letter-container';
//         container.appendChild(letterContainer);

//         // Create a canvas container inside the letter container
//         let canvasContainer = document.createElement('div');
//         canvasContainer.className = 'canvas-container';
//         letterContainer.appendChild(canvasContainer);

//         // Get the composition for the current letter
//         const composition = letterCompositions[letter] || [];

//         // Initialize the p5.js sketch
//         let sketch = new p5((p) => {
//             let shapesData = {};

//             p.setup = () => {
//                 let canvas = p.createCanvas(240, 300); // Default 2D canvas
//                 canvas.parent(canvasContainer);
//                 p.noFill();
//                 p.angleMode(p.DEGREES);

//                 // Initialize shapes for the current letter
//                 composition.forEach(({ shape }) => {
//                     if (shapes[shape]) {
//                         shapesData[shape] = shapes[shape].setup(p);
//                     }
//                 });
//             };

//             p.draw = () => {
//                 p.background(0);

//                 // Draw each shape in the letter's composition
//                 composition.forEach(({ shape, offset }) => {
//                     if (shapes[shape]) {
//                         shapes[shape].draw(p, shapesData[shape], offset); // Pass rotation angle
//                     }
//                 });
//             };
//         });
//         sketches.push(sketch);
//     }
// }



let secondMarkers = [];
let sketches = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);

    // Initialize the sketches and add them to the sketches container
    const container = document.getElementById('sketches-container');
    const letters = "12345600000ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Letters A to Z

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
                p.background(0);

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

function draw() {
    background(0);

    // Only draw clock and second markers if the dropdown is expanded
    if (document.getElementById("dropdown").classList.contains("expanded")) {
        drawClock();
        drawSecondMarkers();
    }
}

// Toggle dropdown expand/collapse
function toggleDropdown() {
    const dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("expanded");

    // If collapsed, stop the drawing loop
    if (!dropdown.classList.contains("expanded")) {
        noLoop(); // Pause drawing
    } else {
        loop(); // Resume drawing
    }
}

function drawClock() {
    let cx = width / 2;
    let cy = height / 2;
    let rectWidth = width * 0.98;
    let rectHeight = height * 0.618;
    let thickMarkInterval = 5;
    let mainMarks = [0, 90, 180, 270];

    // Draw clock rectangle
    stroke(90, 255, 233);
    noFill();
    rectMode(CENTER);
    rect(cx, cy, rectWidth, rectHeight);

    // Draw hour markers
    for (let i = 0; i < 12; i++) {
        let angle = map(i, 0, 12, -90, 270);
        let isMainMark = mainMarks.includes(angle % 360);

        if (!isMainMark) {
            let x1 = cx + cos(angle) * (rectWidth / 2);
            let y1 = cy + sin(angle) * (rectHeight / 2);
            let x2 = cx + cos(angle) * (rectWidth / 2 - (isMainMark ? 20 : 10));
            let y2 = cy + sin(angle) * (rectHeight / 2 - (isMainMark ? 20 : 10));
            strokeWeight(isMainMark ? 6 : 3);
            line(x1, y1, x2, y2);
        }
    }

    // Get current time
    let h = hour() % 12;
    let m = minute();
    let s = second();

    // Draw minute hand
    let minAngle = map(m, 0, 60, -90, 270);
    let mx = cx + cos(minAngle) * (rectWidth / 2 - 50);
    let my = cy + sin(minAngle) * (rectHeight / 2 - 50);
    strokeWeight(1.2);
    stroke(255);
    line(cx, cy, mx, my);

    // Draw moving circle on hour marks
    let hourAngle = map(h + m / 60, 0, 12, -90, 270);
    let hourCircleX = cx + cos(hourAngle) * (rectWidth / 2 - 10);
    let hourCircleY = cy + sin(hourAngle) * (rectHeight / 2 - 10);
    ellipse(hourCircleX, hourCircleY, 30, 30);
}

function drawSecondMarkers() {
    let cx = width / 2;
    let cy = height / 2;
    let rectWidth = width * 0.98;
    let rectHeight = height * 0.618;
    let s = second(); // Get current second

    // Draw 60 tiny white ellipses, one for each second
    for (let i = 0; i < 60; i++) {
        let angle = map(i, 0, 60, -90, 270); // Calculate angle for each second
        let x = cx + cos(angle) * (rectWidth / 2 - 10);
        let y = cy + sin(angle) * (rectHeight / 2 - 10);

        // Draw all ellipses normally
        fill(255, 100);  // Light transparency to make them barely visible
        ellipse(x, y, 5, 5);

        // If the second matches, enlarge the ellipse
        if (i === s) {
            fill(255);  // Full opacity for the active second
            ellipse(x, y, 10, 10);  // Enlarge ellipse to 2x size
        }
    }
}
