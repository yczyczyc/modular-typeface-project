let clockSketch = (p) => {

    let redDots = [];
    let lastDotTime = 0;
    

    function drawRedDots(p) {
    const currentSecond = p.second();

    if (currentSecond !== drawRedDots.lastSecond) {
        redDots.push({
        x: p.mouseX,
        y: p.mouseY,
        radius: 12,
        alpha: 255,
        });
        drawRedDots.lastSecond = currentSecond;
    }

    // Update and draw
    for (let i = redDots.length - 1; i >= 0; i--) {
        const d = redDots[i];
        d.radius += 1.2;
        d.alpha -= 3;
        p.noStroke();
        p.fill(225, 0, 0, d.alpha);
        p.ellipse(d.x, d.y, d.radius);

        if (d.alpha <= 0) redDots.splice(i, 1);
    }
    }
    drawRedDots.lastSecond = -1;


    class ClockNumeral {
        constructor(value, angle) {
            this.value = value;
            this.angle = angle;
            this.size = 36;
            this.position = p.createVector();
            this.targetSize = 24;
            this.currentSize = 24;
        }

        update(cx, cy, radius) {
            this.position.x = cx + p.cos(this.angle) * radius;
            this.position.y = cy + p.sin(this.angle) * radius;
        }

        draw() {
            p.push();
            p.translate(this.position.x, this.position.y);
            p.textSize(this.currentSize);
            p.textAlign(p.CENTER, p.CENTER);
            p.noStroke();
            p.text(this.value, 0, 0);
            p.pop();
        }
    }

    let clock = {
        numerals: [],
        face: { width: 0, height: 0, padding: 10 },
        colors: {
            face: [225, 25, 45],
            hands: [225, 25, 45],
            seconds: [255, 100],
            activeSecond: [225, 25, 45]
        }
    };

    p.setup = function () {
        let cnv = p.createCanvas(p.windowWidth, p.windowHeight);
        cnv.position(0, 0);
        cnv.style('pointer-events', 'none'); // makes the canvas click-through
        p.angleMode(p.DEGREES);
        p.textFont('Arial');

        const numeralValues = ['12', '1', '2', '3', '4', '5',
            '6', '7', '8', '9', '10', '11'];
        numeralValues.forEach((val, i) => {
            const angle = p.map(i, 0, 12, -90, 270);
            clock.numerals.push(new ClockNumeral(val, angle));
        });
    };

    p.draw = function () {
        p.clear(); // transparent background
        const minDimension = p.min(p.width, p.height);
        clock.face.width = minDimension * 0.9;
        clock.face.height = clock.face.width * 0.618;

        const centerX = p.width / 2;
        const centerY = p.height / 2;
        // const numeralRadius = (clock.face.width / 2) * 0.85;

        clock.numerals.forEach(n => {
            n.update(centerX, centerY);//deleted numeral update; 
            n.draw();
        });

        drawClockFace(centerX, centerY);
        drawClockHands(centerX, centerY);
        drawSecondMarkers(centerX, centerY);
        drawRedDots(p);
    };

    function drawClockFace(cx, cy) {
        p.stroke(...clock.colors.face);
        p.noFill();
        p.strokeWeight(0);
        p.rectMode(p.CENTER);
        p.rect(cx, cy, clock.face.width, clock.face.height);
        for (let i = 0; i < 12; i++) {
            const angle = p.map(i, 0, 12, -90, 270);
            const outerX = cx + p.cos(angle) * (clock.face.width / 3);
            const outerY = cy + p.sin(angle) * (clock.face.height / 2);
            const innerX = cx + p.cos(angle) * (clock.face.width / 9);
            const innerY = cy + p.sin(angle) * (clock.face.height / 6);
            p.strokeWeight([0, 3, 6, 9].includes(i) ? 2 : 1);
            p.line(outerX, outerY, innerX, innerY);
        }
    }

    function drawClockHands(cx, cy) {
        const h = p.hour() % 12;
        const m = p.minute();
        const s = p.second();
        const hourAngle = p.map(h + m / 60, 0, 12, -90, 270);
        const minuteAngle = p.map(m, 0, 60, -90, 270);
        const secondAngle = p.map(s, 0, 60, -90, 270);
        drawHand(cx, cy, hourAngle, clock.face.width * 0.3, 16);
        drawHand(cx, cy, minuteAngle, clock.face.width * 0.5, 6);
        drawHand(cx, cy, secondAngle, clock.face.width * 1.4, 2);
    }

    function drawHand(cx, cy, angle, length, weight) {
        p.push();
        p.stroke(...clock.colors.hands);
        p.strokeWeight(weight);
        p.translate(cx, cy);
        p.rotate(angle);
        p.line(0, 0, length, 0);
        p.pop();
    }

    function drawSecondMarkers(cx, cy) {
        const s = p.second();
        const markerRadius = clock.face.width / 2;
        for (let i = 0; i < 60; i++) {
            const angle = p.map(i, 0, 60, -90, 270);
            const x = cx + p.cos(angle) * markerRadius;
            const y = cy + p.sin(angle) * markerRadius;
            if (i === s) {
                p.fill(...clock.colors.activeSecond);
                p.ellipse(x, y, clock.face.width / 20, clock.face.width / 20);
            } else {
                p.fill(...clock.colors.seconds);
                p.ellipse(x, y, clock.face.width / 100, clock.face.width / 100);
            }
        }
    }

    p.windowResized = () => {
        const rect = canvasContainer.getBoundingClientRect();
        p.resizeCanvas(rect.width, rect.height);
    };
    
};

document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('overlay-container');
    overlay.style.display = 'block'; // Ensure it's visible

    // Create the clock immediately
    new p5(clockSketch, 'overlay-container');
});
