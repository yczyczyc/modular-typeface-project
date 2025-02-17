
// Define global shapes
const shapes = {
    trapezoid: {
        setup: (p) => {
            let maskRays = [];
            let numMaskRays = 12;
            let specialRayIndex = 0;

            // let maskMaxWidth = 3;
            // let maskBaseWidth = 0.7;
            let hoverThreshold = 50; // You can adjust this value
            let maskLagSpeed = 0.1; // Adjust the speed of width transition


            let trapezoidVertices = [
                { x: -90, y: -44 }, // Top-left
                { x: -35, y: -155 }, // Top-right
                { x: -35, y: 0 }, // Bottom-right
                { x: -90, y: 45 }, // Bottom-left


                // {0,44}
                // {44,0}
                // {0,66}
                // {44,66}


            ];

            for (let i = 0; i < numMaskRays; i++) {
                let t = i / numMaskRays;
                let topX = p.lerp(trapezoidVertices[0].x, trapezoidVertices[1].x, t);
                let topY = p.lerp(trapezoidVertices[0].y, trapezoidVertices[1].y, t);
                let bottomX = p.lerp(trapezoidVertices[3].x, trapezoidVertices[2].x, t);
                let bottomY = p.lerp(trapezoidVertices[3].y, trapezoidVertices[2].y, t);

                maskRays.push({
                    startX: topX,
                    startY: topY,
                    endX: bottomX,
                    endY: bottomY,
                    currentWidth: 0.7,
                    targetWidth: 0.7,
                });
            }

            
            return { maskRays, specialRayIndex };
        },
        
        draw: (p, maskRaysData, offset, flip=false) => {
            p.push();
            p.translate(offset.x, offset.y);

            // Apply flipping if flip is true
            if (flip) {
            p.scale(1, -1); // Flip vertically around the center y-axis
        }
            

            if (Math.floor(p.second() / 5) !== maskRaysData.lastSecond) {
                maskRaysData.lastSecond = Math.floor(p.second() / 5);
                updateSpecialRayIndex(maskRaysData);
            }
        
            for (let i = 0; i < maskRaysData.maskRays.length; i++) {
                let ray = maskRaysData.maskRays[i];

                // Check if mouse is near this ray and grow it on hover
                let rayCenterX = p.lerp(ray.startX, ray.endX, 0.5) + offset.x;
                let rayCenterY = p.lerp(ray.startY, ray.endY, 0.5) + offset.y;
        
                // Adjust the hover detection to account for ray length and mouse distance
                let mouseDist = p.dist(p.mouseX, p.mouseY, rayCenterX, rayCenterY);
        
                if (mouseDist < 100) {  // Expand on hover
                    ray.targetWidth = 1;
                } else {
                    ray.targetWidth = 0.3;  // Reset to base width
                }

                if (i === maskRaysData.specialRayIndex) {
                    ray.targetWidth = 2.1; // 3 times larger than the base width (0.7 * 3)
                }
        
                // Smoothly transition ray width
                ray.currentWidth = p.lerp(ray.currentWidth, ray.targetWidth, 0.1); // Adjust the lerp factor for smoother transition
        
                // Draw the ray as a line with variable width
                p.stroke(90, 255, 233); // Green stroke color
                p.strokeWeight(ray.currentWidth);
                p.line(ray.startX, ray.startY, ray.endX, ray.endY);


            }
            //  CIRCLE
                p.fill(0); // black fill
                p.noStroke();
                p.circle(offset.x-200, offset.y-185, 20); // Draw the circle centered at the current offset position

            p.pop();
        }
        
        
    },

    trapezoid1: {
        setup: (p) => {
            let maskRays = [];
            let numMaskRays = 12;
            let specialRayIndex = 0;

            // let maskMaxWidth = 3;
            // let maskBaseWidth = 0.7;
            let hoverThreshold = 50; // You can adjust this value
            let maskLagSpeed = 0.1; // Adjust the speed of width transition


            let trapezoid1Vertices = [
                { x: -60, y: 8 }, // Top-left
                { x: 32, y:8 }, // Top-right
                { x: -24, y: 30 }, // Bottom-right
                { x: -60, y: 70 }, // Bottom-left


                // {0,44}
                // {44,0}
                // {0,66}
                // {44,66}


            ];

            for (let i = 0; i < numMaskRays; i++) {
                let t = i / numMaskRays;
                let topX = p.lerp(trapezoid1Vertices[0].x, trapezoid1Vertices[1].x, t);
                let topY = p.lerp(trapezoid1Vertices[0].y, trapezoid1Vertices[1].y, t);
                let bottomX = p.lerp(trapezoid1Vertices[3].x, trapezoid1Vertices[2].x, t);
                let bottomY = p.lerp(trapezoid1Vertices[3].y, trapezoid1Vertices[2].y, t);

                maskRays.push({
                    startX: topX,
                    startY: topY,
                    endX: bottomX,
                    endY: bottomY,
                    currentWidth: 0.7,
                    targetWidth: 0.7,
                });
            }

            
            return { maskRays, specialRayIndex };
        },
        
        draw: (p, maskRaysData, offset, flip=false) => {
            p.push();
            p.translate(offset.x, offset.y);

            // Apply flipping if flip is true
            if (flip) {
            p.scale(1, -1); // Flip vertically around the center y-axis
        }
            

            if (Math.floor(p.second() / 5) !== maskRaysData.lastSecond) {
                maskRaysData.lastSecond = Math.floor(p.second() / 5);
                updateSpecialRayIndex(maskRaysData);
            }
        
            for (let i = 0; i < maskRaysData.maskRays.length; i++) {
                let ray = maskRaysData.maskRays[i];

                // Check if mouse is near this ray and grow it on hover
                let rayCenterX = p.lerp(ray.startX, ray.endX, 0.5) + offset.x;
                let rayCenterY = p.lerp(ray.startY, ray.endY, 0.5) + offset.y;
        
                // Adjust the hover detection to account for ray length and mouse distance
                let mouseDist = p.dist(p.mouseX, p.mouseY, rayCenterX, rayCenterY);
        
                if (mouseDist < 100) {  // Expand on hover
                    ray.targetWidth = 1;
                } else {
                    ray.targetWidth = 0.3;  // Reset to base width
                }

                if (i === maskRaysData.specialRayIndex) {
                    ray.targetWidth = 2.1; // 3 times larger than the base width (0.7 * 3)
                }
        
                // Smoothly transition ray width
                ray.currentWidth = p.lerp(ray.currentWidth, ray.targetWidth, 0.1); // Adjust the lerp factor for smoother transition
        
                // Draw the ray as a line with variable width
                p.stroke(90, 255, 233); // Green stroke color
                p.strokeWeight(ray.currentWidth);
                p.line(ray.startX, ray.startY, ray.endX, ray.endY);
            }

                        //  CIRCLE
                        // p.fill(0); // black fill
                        // p.noStroke();
                        // p.circle(-30, 25, 20); // Draw the circle centered at the current offset position
        

            p.pop();
        }
        
        
    },

    trapezoid2: {
        setup: (p) => {
            let maskRays = [];
            let numMaskRays = 12;
            let specialRayIndex = 0;

            // let maskMaxWidth = 3;
            // let maskBaseWidth = 0.7;
            let hoverThreshold = 50; // You can adjust this value
            let maskLagSpeed = 0.1; // Adjust the speed of width transition


            let trapezoidVertices = [
                { x: -50, y: 35 }, // Top-left
                { x: -25, y: 10 }, // Top-right
                { x: -25, y: 110 }, // Bottom-right
                { x: -50, y: 135 }, // Bottom-left


                // {0,44}
                // {44,0}
                // {0,66}
                // {44,66}


            ];

            for (let i = 0; i < numMaskRays; i++) {
                let t = i / numMaskRays;
                let topX = p.lerp(trapezoidVertices[0].x, trapezoidVertices[1].x, t);
                let topY = p.lerp(trapezoidVertices[0].y, trapezoidVertices[1].y, t);
                let bottomX = p.lerp(trapezoidVertices[3].x, trapezoidVertices[2].x, t);
                let bottomY = p.lerp(trapezoidVertices[3].y, trapezoidVertices[2].y, t);

                maskRays.push({
                    startX: topX,
                    startY: topY,
                    endX: bottomX,
                    endY: bottomY,
                    currentWidth: 0.7,
                    targetWidth: 0.7,
                });
            }

            
            return { maskRays, specialRayIndex };
        },
        
        draw: (p, maskRaysData, offset, flip=false) => {
            p.push();
            p.translate(offset.x, offset.y);

            // Apply flipping if flip is true
            if (flip) {
            p.scale(1, -1); // Flip vertically around the center y-axis
        }
            

            if (Math.floor(p.second() / 5) !== maskRaysData.lastSecond) {
                maskRaysData.lastSecond = Math.floor(p.second() / 5);
                updateSpecialRayIndex(maskRaysData);
            }
        
            for (let i = 0; i < maskRaysData.maskRays.length; i++) {
                let ray = maskRaysData.maskRays[i];

                // Check if mouse is near this ray and grow it on hover
                let rayCenterX = p.lerp(ray.startX, ray.endX, 0.5) + offset.x;
                let rayCenterY = p.lerp(ray.startY, ray.endY, 0.5) + offset.y;
        
                // Adjust the hover detection to account for ray length and mouse distance
                let mouseDist = p.dist(p.mouseX, p.mouseY, rayCenterX, rayCenterY);
        
                if (mouseDist < 100) {  // Expand on hover
                    ray.targetWidth = 1;
                } else {
                    ray.targetWidth = 0.3;  // Reset to base width
                }

                if (i === maskRaysData.specialRayIndex) {
                    ray.targetWidth = 2.1; // 3 times larger than the base width (0.7 * 3)
                }
        
                // Smoothly transition ray width
                ray.currentWidth = p.lerp(ray.currentWidth, ray.targetWidth, 0.1); // Adjust the lerp factor for smoother transition
        
                // Draw the ray as a line with variable width
                p.stroke(90, 255, 233); // Green stroke color
                p.strokeWeight(ray.currentWidth);
                p.line(ray.startX, ray.startY, ray.endX, ray.endY);


            }
            //  CIRCLE
                p.fill(0); // black fill
                p.noStroke();
                p.circle(offset.x-240, offset.y-185, 20); // Draw the circle centered at the current offset position

            p.pop();
        }
        
        
    },

    trapezoid3: {
        setup: (p) => {
            let maskRays = [];
            let numMaskRays = 12;
            let specialRayIndex = 0;

            // let maskMaxWidth = 3;
            // let maskBaseWidth = 0.7;
            let hoverThreshold = 50; // You can adjust this value
            let maskLagSpeed = 0.1; // Adjust the speed of width transition


            let trapezoidVertices = [
                { x: -80, y: 15 }, // Top-left
                { x: -25, y: 25 }, // Top-right
                { x: -25, y: 110 }, // Bottom-right
                { x: -0, y: 130 }, // Bottom-left


                // {0,44}
                // {44,0}
                // {0,66}
                // {44,66}


            ];

            for (let i = 0; i < numMaskRays; i++) {
                let t = i / numMaskRays;
                let topX = p.lerp(trapezoidVertices[0].x, trapezoidVertices[1].x, t);
                let topY = p.lerp(trapezoidVertices[0].y, trapezoidVertices[1].y, t);
                let bottomX = p.lerp(trapezoidVertices[3].x, trapezoidVertices[2].x, t);
                let bottomY = p.lerp(trapezoidVertices[3].y, trapezoidVertices[2].y, t);

                maskRays.push({
                    startX: topX,
                    startY: topY,
                    endX: bottomX,
                    endY: bottomY,
                    currentWidth: 0.7,
                    targetWidth: 0.7,
                });
            }

            
            return { maskRays, specialRayIndex };
        },
        
        draw: (p, maskRaysData, offset, flip=false) => {
            p.push();
            p.translate(offset.x, offset.y);

            // Apply flipping if flip is true
            if (flip) {
            p.scale(1, -1); // Flip vertically around the center y-axis
        }
            

            if (Math.floor(p.second() / 5) !== maskRaysData.lastSecond) {
                maskRaysData.lastSecond = Math.floor(p.second() / 5);
                updateSpecialRayIndex(maskRaysData);
            }
        
            for (let i = 0; i < maskRaysData.maskRays.length; i++) {
                let ray = maskRaysData.maskRays[i];

                // Check if mouse is near this ray and grow it on hover
                let rayCenterX = p.lerp(ray.startX, ray.endX, 0.5) + offset.x;
                let rayCenterY = p.lerp(ray.startY, ray.endY, 0.5) + offset.y;
        
                // Adjust the hover detection to account for ray length and mouse distance
                let mouseDist = p.dist(p.mouseX, p.mouseY, rayCenterX, rayCenterY);
        
                if (mouseDist < 100) {  // Expand on hover
                    ray.targetWidth = 1;
                } else {
                    ray.targetWidth = 0.3;  // Reset to base width
                }

                if (i === maskRaysData.specialRayIndex) {
                    ray.targetWidth = 2.1; // 3 times larger than the base width (0.7 * 3)
                }
        
                // Smoothly transition ray width
                ray.currentWidth = p.lerp(ray.currentWidth, ray.targetWidth, 0.1); // Adjust the lerp factor for smoother transition
        
                // Draw the ray as a line with variable width
                p.stroke(90, 255, 233); // Green stroke color
                p.strokeWeight(ray.currentWidth);
                p.line(ray.startX, ray.startY, ray.endX, ray.endY);


            }
            //  CIRCLE
                p.fill(0); // black fill
                p.noStroke();
                p.circle(offset.x-240, offset.y-185, 20); // Draw the circle centered at the current offset position

            p.pop();
        }
        
        
    },

    trapezoid4: {
        setup: (p) => {
            let maskRays = [];
            let numMaskRays = 12;
            let specialRayIndex = 0;

            // let maskMaxWidth = 3;
            // let maskBaseWidth = 0.7;
            let hoverThreshold = 50; // You can adjust this value
            let maskLagSpeed = 0.1; // Adjust the speed of width transition


            let trapezoidVertices = [
                { x: 90, y: 15 }, // Top-left
                { x: 55, y: 5 }, // Top-right
                { x: -15, y: 120 }, // Bottom-right
                { x: -10, y: 135 }, // Bottom-left


                // {0,44}
                // {44,0}
                // {0,66}
                // {44,66}


            ];

            for (let i = 0; i < numMaskRays; i++) {
                let t = i / numMaskRays;
                let topX = p.lerp(trapezoidVertices[0].x, trapezoidVertices[1].x, t);
                let topY = p.lerp(trapezoidVertices[0].y, trapezoidVertices[1].y, t);
                let bottomX = p.lerp(trapezoidVertices[3].x, trapezoidVertices[2].x, t);
                let bottomY = p.lerp(trapezoidVertices[3].y, trapezoidVertices[2].y, t);

                maskRays.push({
                    startX: topX,
                    startY: topY,
                    endX: bottomX,
                    endY: bottomY,
                    currentWidth: 0.7,
                    targetWidth: 0.7,
                });
            }

            
            return { maskRays, specialRayIndex };
        },
        
        draw: (p, maskRaysData, offset, flip=false) => {
            p.push();
            p.translate(offset.x, offset.y);

            // Apply flipping if flip is true
            if (flip) {
            p.scale(1, -1); // Flip vertically around the center y-axis
        }
            

            if (Math.floor(p.second() / 5) !== maskRaysData.lastSecond) {
                maskRaysData.lastSecond = Math.floor(p.second() / 5);
                updateSpecialRayIndex(maskRaysData);
            }
        
            for (let i = 0; i < maskRaysData.maskRays.length; i++) {
                let ray = maskRaysData.maskRays[i];

                // Check if mouse is near this ray and grow it on hover
                let rayCenterX = p.lerp(ray.startX, ray.endX, 0.5) + offset.x;
                let rayCenterY = p.lerp(ray.startY, ray.endY, 0.5) + offset.y;
        
                // Adjust the hover detection to account for ray length and mouse distance
                let mouseDist = p.dist(p.mouseX, p.mouseY, rayCenterX, rayCenterY);
        
                if (mouseDist < 100) {  // Expand on hover
                    ray.targetWidth = 1;
                } else {
                    ray.targetWidth = 0.3;  // Reset to base width
                }

                if (i === maskRaysData.specialRayIndex) {
                    ray.targetWidth = 2.1; // 3 times larger than the base width (0.7 * 3)
                }
        
                // Smoothly transition ray width
                ray.currentWidth = p.lerp(ray.currentWidth, ray.targetWidth, 0.1); // Adjust the lerp factor for smoother transition
        
                // Draw the ray as a line with variable width
                p.stroke(90, 255, 233); // Green stroke color
                p.strokeWeight(ray.currentWidth);
                p.line(ray.startX, ray.startY, ray.endX, ray.endY);


            }
            //  CIRCLE
                p.fill(0); // black fill
                p.noStroke();
                p.circle(offset.x-240, offset.y-185, 20); // Draw the circle centered at the current offset position

            p.pop();
        }
        
        
    },

    trapezoidSmall: {
        setup: (p) => {
            let maskRays = [];
            let numMaskRays = 12;
            let specialRayIndex = 0;

            // let maskMaxWidth = 3;
            // let maskBaseWidth = 0.7;
            let hoverThreshold = 50; // You can adjust this value
            let maskLagSpeed = 0.1; // Adjust the speed of width transition


            let trapezoidSmallVertices = [
                { x: 24, y: 35}, // Top-left
                { x: 18, y: 35}, // Top-right
                { x: 30, y: 102 }, // Bottom-right
                { x: 8, y: 102 }, // Bottom-left


                // {0,44}
                // {44,0}
                // {0,66}
                // {44,66}


            ];

            for (let i = 0; i < numMaskRays; i++) {
                let t = i / numMaskRays;
                let topX = p.lerp(trapezoidSmallVertices[0].x, trapezoidSmallVertices[1].x, t);
                let topY = p.lerp(trapezoidSmallVertices[0].y, trapezoidSmallVertices[1].y, t);
                let bottomX = p.lerp(trapezoidSmallVertices[3].x, trapezoidSmallVertices[2].x, t);
                let bottomY = p.lerp(trapezoidSmallVertices[3].y, trapezoidSmallVertices[2].y, t);

                maskRays.push({
                    startX: topX,
                    startY: topY,
                    endX: bottomX,
                    endY: bottomY,
                    currentWidth: 0.7,
                    targetWidth: 0.7,
                });
            }

            
            return { maskRays, specialRayIndex };
        },
        
        draw: (p, maskRaysData, offset, flip=false) => {
            p.push();
            p.translate(offset.x, offset.y);

            // Apply flipping if flip is true
            if (flip) {
            p.scale(1, -1); // Flip vertically around the center y-axis
        }
            

            if (Math.floor(p.second() / 5) !== maskRaysData.lastSecond) {
                maskRaysData.lastSecond = Math.floor(p.second() / 5);
                updateSpecialRayIndex(maskRaysData);
            }
        
            for (let i = 0; i < maskRaysData.maskRays.length; i++) {
                let ray = maskRaysData.maskRays[i];

                // Check if mouse is near this ray and grow it on hover
                let rayCenterX = p.lerp(ray.startX, ray.endX, 0.5) + offset.x;
                let rayCenterY = p.lerp(ray.startY, ray.endY, 0.5) + offset.y;
        
                // Adjust the hover detection to account for ray length and mouse distance
                let mouseDist = p.dist(p.mouseX, p.mouseY, rayCenterX, rayCenterY);
        
                if (mouseDist < 100) {  // Expand on hover
                    ray.targetWidth = 1;
                } else {
                    ray.targetWidth = 0.3;  // Reset to base width
                }

                if (i === maskRaysData.specialRayIndex) {
                    ray.targetWidth = 2.1; // 3 times larger than the base width (0.7 * 3)
                }
        
                // Smoothly transition ray width
                ray.currentWidth = p.lerp(ray.currentWidth, ray.targetWidth, 0.1); // Adjust the lerp factor for smoother transition
        
                // Draw the ray as a line with variable width
                p.stroke(90, 255, 233); // Green stroke color
                p.strokeWeight(ray.currentWidth);
                p.line(ray.startX, ray.startY, ray.endX, ray.endY);


            }

            p.pop();
        }
        
        
    },

    trapezoidSmall1: {
        setup: (p) => {
            let maskRays = [];
            let numMaskRays = 12;
            let specialRayIndex = 0;

            // let maskMaxWidth = 3;
            // let maskBaseWidth = 0.7;
            let hoverThreshold = 50; // You can adjust this value
            let maskLagSpeed = 0.1; // Adjust the speed of width transition


            let trapezoidSmall1Vertices = [
                { x: -60, y: 48 }, // Top-left
                { x: 50, y: 8 }, // Top-right
                { x: 20, y: 40 }, // Bottom-right
                { x: 20, y: 50 }, // Bottom-left

            ];

            for (let i = 0; i < numMaskRays; i++) {
                let t = i / numMaskRays;
                let topX = p.lerp(trapezoidSmall1Vertices[0].x, trapezoidSmall1Vertices[1].x, t);
                let topY = p.lerp(trapezoidSmall1Vertices[0].y, trapezoidSmall1Vertices[1].y, t);
                let bottomX = p.lerp(trapezoidSmall1Vertices[3].x, trapezoidSmall1Vertices[2].x, t);
                let bottomY = p.lerp(trapezoidSmall1Vertices[3].y, trapezoidSmall1Vertices[2].y, t);

                maskRays.push({
                    startX: topX,
                    startY: topY,
                    endX: bottomX,
                    endY: bottomY,
                    currentWidth: 0.7,
                    targetWidth: 0.7,
                });
            }

            
            return { maskRays, specialRayIndex };
        },
        
        draw: (p, maskRaysData, offset, flip=false) => {
            p.push();
            p.translate(offset.x, offset.y);

            // Apply flipping if flip is true
            if (flip) {
            p.scale(1, -1); // Flip vertically around the center y-axis
        }
            

            if (Math.floor(p.second() / 5) !== maskRaysData.lastSecond) {
                maskRaysData.lastSecond = Math.floor(p.second() / 5);
                updateSpecialRayIndex(maskRaysData);
            }
        
            for (let i = 0; i < maskRaysData.maskRays.length; i++) {
                let ray = maskRaysData.maskRays[i];

                // Check if mouse is near this ray and grow it on hover
                let rayCenterX = p.lerp(ray.startX, ray.endX, 0.5) + offset.x;
                let rayCenterY = p.lerp(ray.startY, ray.endY, 0.5) + offset.y;
        
                // Adjust the hover detection to account for ray length and mouse distance
                let mouseDist = p.dist(p.mouseX, p.mouseY, rayCenterX, rayCenterY);
        
                if (mouseDist < 100) {  // Expand on hover
                    ray.targetWidth = 1;
                } else {
                    ray.targetWidth = 0.3;  // Reset to base width
                }

                if (i === maskRaysData.specialRayIndex) {
                    ray.targetWidth = 2.1; // 3 times larger than the base width (0.7 * 3)
                }
        
                // Smoothly transition ray width
                ray.currentWidth = p.lerp(ray.currentWidth, ray.targetWidth, 0.1); // Adjust the lerp factor for smoother transition
        
                // Draw the ray as a line with variable width
                p.stroke(90, 255, 233); // Green stroke color
                p.strokeWeight(ray.currentWidth);
                p.line(ray.startX, ray.startY, ray.endX, ray.endY);


            }

            p.pop();
        }
        
        
    },


    twigs: {
        setup: (p) => {
            let maskRays = [];
            let numMaskRays = 12;
            let specialRayIndex = 0;

            // let maskMaxWidth = 3;
            // let maskBaseWidth = 0.7;
            let hoverThreshold = 50; // You can adjust this value
            let maskLagSpeed = 0.1; // Adjust the speed of width transition


            let twigsVertices = [
                { x: -90, y: -44 }, // Top-left
                { x: -34, y: -100 }, // Top-right
                { x: -78, y: -22 }, // Bottom-left
                { x: -85, y: 100 }, // Bottom-right

                
                // {0,44}
                // {44,0}
                // {0,66}
                // {44,66}


            ];

            for (let i = 0; i < numMaskRays; i++) {
                let t = i / numMaskRays;
                let topX = p.lerp(twigsVertices[0].x, twigsVertices[1].x, t);
                let topY = p.lerp(twigsVertices[0].y, twigsVertices[1].y, t);
                let bottomX = p.lerp(twigsVertices[3].x, twigsVertices[2].x, t);
                let bottomY = p.lerp(twigsVertices[3].y, twigsVertices[2].y, t);

                maskRays.push({
                    startX: topX,
                    startY: topY,
                    endX: bottomX,
                    endY: bottomY,
                    currentWidth: 0.7,
                    targetWidth: 0.7,
                });
            }

            
            return { maskRays, specialRayIndex };
        },
        
        draw: (p, maskRaysData, offset,flip=false) => {
            p.push();
            p.translate(offset.x, offset.y);

            // Apply flipping if flip is true
            if (flip) {
                p.scale(1, -1); // Flip vertically around the center y-axis
            }

            if (Math.floor(p.second() / 5) !== maskRaysData.lastSecond) {
                maskRaysData.lastSecond = Math.floor(p.second() / 5);
                updateSpecialRayIndex(maskRaysData);
            }
        
            for (let i = 0; i < maskRaysData.maskRays.length; i++) {
                let ray = maskRaysData.maskRays[i];

                // Check if mouse is near this ray and grow it on hover
                let rayCenterX = p.lerp(ray.startX, ray.endX, 0.5) + offset.x;
                let rayCenterY = p.lerp(ray.startY, ray.endY, 0.5) + offset.y;
        
                // Adjust the hover detection to account for ray length and mouse distance
                let mouseDist = p.dist(p.mouseX, p.mouseY, rayCenterX, rayCenterY);
        
                if (mouseDist < 100) {  // Expand on hover
                    ray.targetWidth = 2;
                } else {
                    ray.targetWidth = 0.7;  // Reset to base width
                }

                if (i === maskRaysData.specialRayIndex) {
                    ray.targetWidth = 2.1; // 3 times larger than the base width (0.7 * 3)
                }
        
                // Smoothly transition ray width
                ray.currentWidth = p.lerp(ray.currentWidth, ray.targetWidth, 0.1); // Adjust the lerp factor for smoother transition
        
                // Draw the ray as a line with variable width
                p.stroke(90, 255, 233); // Green stroke color
                p.strokeWeight(ray.currentWidth);
                p.line(ray.startX, ray.startY, ray.endX, ray.endY);
            }
        
            p.pop();
        }
        
        
    },
    
    twigs2: {
        setup: (p) => {
            let maskRays = [];
            let numMaskRays = 12;
            let specialRayIndex = 0;

            // let maskMaxWidth = 3;
            // let maskBaseWidth = 0.7;
            let hoverThreshold = 50; // You can adjust this value
            let maskLagSpeed = 0.1; // Adjust the speed of width transition


            let twigs2Vertices = [
                { x: -90, y: -44 }, // Top-left
                { x: -34, y: -100 }, // Top-right
                { x: -70, y: 70 }, // Bottom-right
                { x: -60, y: 110 }, // Bottom-left


                
                // {0,44}
                // {44,0}
                // {0,66}
                // {44,66}


            ];

            for (let i = 0; i < numMaskRays; i++) {
                let t = i / numMaskRays;
                let topX = p.lerp(twigs2Vertices[0].x, twigs2Vertices[1].x, t);
                let topY = p.lerp(twigs2Vertices[0].y, twigs2Vertices[1].y, t);
                let bottomX = p.lerp(twigs2Vertices[3].x, twigs2Vertices[2].x, t);
                let bottomY = p.lerp(twigs2Vertices[3].y, twigs2Vertices[2].y, t);

                maskRays.push({
                    startX: topX,
                    startY: topY,
                    endX: bottomX,
                    endY: bottomY,
                    currentWidth: 0.7,
                    targetWidth: 0.7,
                });
            }

            
            return { maskRays, specialRayIndex };
        },
        
        draw: (p, maskRaysData, offset,flip=false) => {
            p.push();
            p.translate(offset.x, offset.y);

            // Apply flipping if flip is true
            if (flip) {
                p.scale(1, -1); // Flip vertically around the center y-axis
            }

            if (Math.floor(p.second() / 5) !== maskRaysData.lastSecond) {
                maskRaysData.lastSecond = Math.floor(p.second() / 5);
                updateSpecialRayIndex(maskRaysData);
            }
        
            for (let i = 0; i < maskRaysData.maskRays.length; i++) {
                let ray = maskRaysData.maskRays[i];

                // Check if mouse is near this ray and grow it on hover
                let rayCenterX = p.lerp(ray.startX, ray.endX, 0.5) + offset.x;
                let rayCenterY = p.lerp(ray.startY, ray.endY, 0.5) + offset.y;
        
                // Adjust the hover detection to account for ray length and mouse distance
                let mouseDist = p.dist(p.mouseX, p.mouseY, rayCenterX, rayCenterY);
        
                if (mouseDist < 100) {  // Expand on hover
                    ray.targetWidth = 2;
                } else {
                    ray.targetWidth = 0.7;  // Reset to base width
                }

                if (i === maskRaysData.specialRayIndex) {
                    ray.targetWidth = 2.1; // 3 times larger than the base width (0.7 * 3)
                }
        
                // Smoothly transition ray width
                ray.currentWidth = p.lerp(ray.currentWidth, ray.targetWidth, 0.1); // Adjust the lerp factor for smoother transition
        
                // Draw the ray as a line with variable width
                p.stroke(90, 255, 233); // Green stroke color
                p.strokeWeight(ray.currentWidth);
                p.line(ray.startX, ray.startY, ray.endX, ray.endY);
            }
        
            p.pop();
        }
        
        
    },

    

    ring: {
        setup: (p) => {
            let rays = [];
            let numRays = 60;

            // Define the ray widths
            const rayBaseWidth = 1;    // Default width for rays
            const rayMinWidth = 0.5;   // Minimum width for rays (when triggered)
            const rayMaxWidth = 3;     // Maximum width for rays (when triggered)

            for (let i = 0; i < numRays; i++) {
                rays.push({
                    angle: p.map(i, 0, numRays, 0, 360),
                    length: 5,
                    targetLength: 5,
                    currentLength: 5,
                    currentWidth: rayBaseWidth,
                    targetWidth: rayBaseWidth,
                    isHourMark: i % 5 === 0, // Mark every 5th ray as an hour mark
                });
            }
            return rays;
        },
        
        draw: (p, rays, offset) => {
            p.push();
            p.translate(offset.x, offset.y);
            let now = p.millis() / 1000;
            let second = p.second();
            let rotationAngle = p.map(second, 0, 60, 0, 360);

            p.rotate(rotationAngle); // Rotate the ring at the rate of a second hand

            // Call triggerRingRayWidthChange every 5 seconds (when second is divisible by 5)
            if (second % 5 === 0) {
                triggerRingRayWidthChange(p, rays);
            }

            for (let i = 0; i < rays.length; i++) {
                let ray = rays[i];

                // Calculate hover interaction
                let mouseDist = p.dist(
                    p.cos(ray.angle) * (45 + ray.currentLength), // Use dynamic end position
                    p.sin(ray.angle) * (45 + ray.currentLength),
                    p.mouseX - p.width / 2,
                    p.mouseY - p.height / 2
                );
                
                // Adjust target length based on hover
                if (mouseDist < 50) {
                    ray.targetLength = 5 * 5; // Grow on hover
                } else {
                    ray.targetLength = 5; // Reset to base length
                }

                // Smooth transition for ray length and width
                ray.currentLength = p.lerp(ray.currentLength, ray.targetLength, 0.09);
                ray.currentWidth = p.lerp(ray.currentWidth, ray.targetWidth, 0.09);

                // Calculate positions for the start and end of the ray
                let x1 = p.cos(ray.angle) * 45; // Start outside the circle
                let y1 = p.sin(ray.angle) * 45;
                let x2 = p.cos(ray.angle) * (45 + ray.currentLength); // End further out
                let y2 = p.sin(ray.angle) * (45 + ray.currentLength);

                // Draw the ray
                p.stroke(90, 255, 233);
                p.strokeWeight(ray.currentWidth);
                p.line(x1, y1, x2, y2);

                // Draw larger white balls for hour marks
                if (ray.isHourMark) {
                    p.push();
                    p.translate(x2, y2);
                    p.noStroke();
                    p.fill(255); // White color for hour marks
                    p.ellipse(0, 0, 4, 4); // Slightly larger sphere (ellipse in 2D)
                    p.pop();
                }
            }

            p.pop();
        },
    },

    halfRing: {
        setup: (p) => {
            let rays = [];
            let numRays = 30; // Half the number of rays for a semi-circle
    
            const rayBaseWidth = 1;
            const rayMinWidth = 0.5;
            const rayMaxWidth = 3;
    
            for (let i = 0; i < numRays; i++) {
                rays.push({
                    angle: p.map(i, 0, numRays, 0, 180), // Only half the angle (semi-circle)
                    length: 5,
                    targetLength: 5,
                    currentLength: 5,
                    currentWidth: rayBaseWidth,
                    targetWidth: rayBaseWidth,
                    isHourMark: i % 5 === 0, // Hour mark condition (every 5th ray)
                });
            }
            return rays;
        },
    
        draw: (p, rays, offset,rotation=0) => {
            p.push();
            p.translate(offset.x, offset.y);
            p.rotate(rotation); // Rotation is now in degrees, no need to convert

    
            let now = p.millis() / 1000;
            let second = p.second();
    
            if (second % 5 === 0) {
                triggerRingRayWidthChange(p, rays); // Trigger ray width change every 5 seconds
            }
    
            for (let i = 0; i < rays.length; i++) {
                let ray = rays[i];
    
                // Adjust the angle for the ellipse movement
                let angleOffset = p.map(second + i, 0, 60, 0, 180); // Adjust angle based on current second and ray index
    
                // Calculate the position of the ray endpoint (x2, y2)
                let x1 = p.cos(ray.angle) * 45;
                let y1 = p.sin(ray.angle) * 45;
                let x2 = p.cos(ray.angle) * (45 + ray.currentLength);
                let y2 = p.sin(ray.angle) * (45 + ray.currentLength);
    
                // Calculate the position of the white ellipse attached to the ray's endpoint
                let ellipseX = p.cos(angleOffset) * (45 + ray.currentLength);
                let ellipseY = p.sin(angleOffset) * (45 + ray.currentLength);
    
                // Check mouse hover distance to scale ray length
                let mouseDist = p.dist(
                    x2, y2, p.mouseX - p.width / 2, p.mouseY - p.height / 2
                );
    
                if (mouseDist < 50) {
                    ray.targetLength = 5 * 5;
                } else {
                    ray.targetLength = 5;
                }
    
                ray.currentLength = p.lerp(ray.currentLength, ray.targetLength, 0.09);
                ray.currentWidth = p.lerp(ray.currentWidth, ray.targetWidth, 0.09);
    
                p.stroke(90, 255, 233);
                p.strokeWeight(ray.currentWidth);
                p.line(x1, y1, x2, y2);
    
                // Check if this is an hour mark and draw the white ellipse at the endpoint of the ray
                if (ray.isHourMark) {
                    p.push();
                    p.translate(x2, y2); // Move to the endpoint of the ray
                    p.noStroke();
                    p.fill(255);
                    p.ellipse(ellipseX - x2, ellipseY - y2, 4, 4); // Attach the ellipse to the ray's endpoint
                    p.pop();
                }
            }
    
            p.pop();
        },
    },

    halfRing3: {
        setup: (p) => {
            let rays = [];
            let numRays = 30; // Half the number of rays for a semi-circle
    
            const rayBaseWidth = 1;
            const rayMinWidth = 0.5;
            const rayMaxWidth = 3;
    
            for (let i = 0; i < numRays; i++) {
                rays.push({
                    angle: p.map(i, 0, numRays, -15 , 135), // Only half the angle (semi-circle)
                    length: 5,
                    targetLength: 5,
                    currentLength: 5,
                    currentWidth: rayBaseWidth,
                    targetWidth: rayBaseWidth,
                    isHourMark: i % 5 === 0, // Hour mark condition (every 5th ray)
                });
            }
            return rays;
        },
    
        draw: (p, rays, offset,rotation=0) => {
            p.push();
            p.translate(offset.x, offset.y);
            p.rotate(rotation); // Rotation is now in degrees, no need to convert

    
            let now = p.millis() / 1000;
            let second = p.second();
    
            if (second % 5 === 0) {
                triggerRingRayWidthChange(p, rays); // Trigger ray width change every 5 seconds
            }
    
            for (let i = 0; i < rays.length; i++) {
                let ray = rays[i];
    
                // Adjust the angle for the ellipse movement
                let angleOffset = p.map(second + i, 0, 90, 0, 135); // Adjust angle based on current second and ray index
    
                // Calculate the position of the ray endpoint (x2, y2)
                let x1 = p.cos(ray.angle) * 45;
                let y1 = p.sin(ray.angle) * 45;
                let x2 = p.cos(ray.angle) * (45 + ray.currentLength);
                let y2 = p.sin(ray.angle) * (45 + ray.currentLength);
    
                // Calculate the position of the white ellipse attached to the ray's endpoint
                let ellipseX = p.cos(angleOffset) * (45 + ray.currentLength);
                let ellipseY = p.sin(angleOffset) * (45 + ray.currentLength);
    
                // Check mouse hover distance to scale ray length
                let mouseDist = p.dist(
                    x2, y2, p.mouseX - p.width / 2, p.mouseY - p.height / 2
                );
    
                if (mouseDist < 50) {
                    ray.targetLength = 5 * 5;
                } else {
                    ray.targetLength = 5;
                }
    
                ray.currentLength = p.lerp(ray.currentLength, ray.targetLength, 0.09);
                ray.currentWidth = p.lerp(ray.currentWidth, ray.targetWidth, 0.09);
    
                p.stroke(90, 255, 233);
                p.strokeWeight(ray.currentWidth);
                p.line(x1, y1, x2, y2);
    
                // Check if this is an hour mark and draw the white ellipse at the endpoint of the ray
                if (ray.isHourMark) {
                    p.push();
                    p.translate(x2, y2); // Move to the endpoint of the ray
                    p.noStroke();
                    p.fill(255);
                    p.ellipse(ellipseX - x2, ellipseY - y2, 4, 4); // Attach the ellipse to the ray's endpoint
                    p.pop();
                }
            }
    
            p.pop();
        },
    },

        halfRing6: {
        setup: (p) => {
            let rays = [];
            let numRays = 30; // Half the number of rays for a semi-circle
    
            const rayBaseWidth = 1;
            const rayMinWidth = 0.5;
            const rayMaxWidth = 3;
    
            for (let i = 0; i < numRays; i++) {
                rays.push({
                    angle: p.map(i, 0, numRays, 40, 180), // Only half the angle (semi-circle)
                    length: 5,
                    targetLength: 5,
                    currentLength: 5,
                    currentWidth: rayBaseWidth,
                    targetWidth: rayBaseWidth,
                    isHourMark: i % 5 === 0, // Hour mark condition (every 5th ray)
                });
            }
            return rays;
        },
    
        draw: (p, rays, offset,rotation=0) => {
            p.push();
            p.translate(offset.x, offset.y);
            p.rotate(rotation); // Rotation is now in degrees, no need to convert

    
            let now = p.millis() / 1000;
            let second = p.second();
    
            if (second % 5 === 0) {
                triggerRingRayWidthChange(p, rays); // Trigger ray width change every 5 seconds
            }
    
            for (let i = 0; i < rays.length; i++) {
                let ray = rays[i];
    
                // Adjust the angle for the ellipse movement
                let angleOffset = p.map(second + i, 0, 60, 0, 180); // Adjust angle based on current second and ray index
    
                // Calculate the position of the ray endpoint (x2, y2)
                let x1 = p.cos(ray.angle) * 45;
                let y1 = p.sin(ray.angle) * 45;
                let x2 = p.cos(ray.angle) * (45 + ray.currentLength);
                let y2 = p.sin(ray.angle) * (45 + ray.currentLength);
    
                // Calculate the position of the white ellipse attached to the ray's endpoint
                let ellipseX = p.cos(angleOffset) * (45 + ray.currentLength);
                let ellipseY = p.sin(angleOffset) * (45 + ray.currentLength);
    
                // Check mouse hover distance to scale ray length
                let mouseDist = p.dist(
                    x2, y2, p.mouseX - p.width / 2, p.mouseY - p.height / 2
                );
    
                if (mouseDist < 50) {
                    ray.targetLength = 5 * 5;
                } else {
                    ray.targetLength = 5;
                }
    
                ray.currentLength = p.lerp(ray.currentLength, ray.targetLength, 0.09);
                ray.currentWidth = p.lerp(ray.currentWidth, ray.targetWidth, 0.09);
    
                p.stroke(90, 255, 233);
                p.strokeWeight(ray.currentWidth);
                p.line(x1, y1, x2, y2);
    
                // Check if this is an hour mark and draw the white ellipse at the endpoint of the ray
                if (ray.isHourMark) {
                    p.push();
                    p.translate(x2, y2); // Move to the endpoint of the ray
                    p.noStroke();
                    p.fill(255);
                    p.ellipse(ellipseX - x2, ellipseY - y2, 4, 4); // Attach the ellipse to the ray's endpoint
                    p.pop();
                }
            }
    
            p.pop();
        },
    },

    halfRing9: {
        setup: (p) => {
            let rays = [];
            let numRays = 30; // Half the number of rays for a semi-circle
    
            const rayBaseWidth = 1;
            const rayMinWidth = 0.5;
            const rayMaxWidth = 3;
    
            for (let i = 0; i < numRays; i++) {
                rays.push({
                    angle: p.map(i, 0, numRays, 90, 235), // Only half the angle (semi-circle)
                    length: 5,
                    targetLength: 5,
                    currentLength: 5,
                    currentWidth: rayBaseWidth,
                    targetWidth: rayBaseWidth,
                    isHourMark: i % 5 === 0, // Hour mark condition (every 5th ray)
                });
            }
            return rays;
        },
    
        draw: (p, rays, offset,rotation=0) => {
            p.push();
            p.translate(offset.x, offset.y);
            p.rotate(rotation); // Rotation is now in degrees, no need to convert

    
            let now = p.millis() / 1000;
            let second = p.second();
    
            if (second % 5 === 0) {
                triggerRingRayWidthChange(p, rays); // Trigger ray width change every 5 seconds
            }
    
            for (let i = 0; i < rays.length; i++) {
                let ray = rays[i];
    
                // Adjust the angle for the ellipse movement
                let angleOffset = p.map(second + i, 0, 60, 90, 180); // Adjust angle based on current second and ray index
    
                // Calculate the position of the ray endpoint (x2, y2)
                let x1 = p.cos(ray.angle) * 45;
                let y1 = p.sin(ray.angle) * 45;
                let x2 = p.cos(ray.angle) * (45 + ray.currentLength);
                let y2 = p.sin(ray.angle) * (45 + ray.currentLength);
    
                // Calculate the position of the white ellipse attached to the ray's endpoint
                let ellipseX = p.cos(angleOffset) * (45 + ray.currentLength);
                let ellipseY = p.sin(angleOffset) * (45 + ray.currentLength);
    
                // Check mouse hover distance to scale ray length
                let mouseDist = p.dist(
                    x2, y2, p.mouseX - p.width / 2, p.mouseY - p.height / 2
                );
    
                if (mouseDist < 50) {
                    ray.targetLength = 5 * 5;
                } else {
                    ray.targetLength = 5;
                }
    
                ray.currentLength = p.lerp(ray.currentLength, ray.targetLength, 0.09);
                ray.currentWidth = p.lerp(ray.currentWidth, ray.targetWidth, 0.09);
    
                p.stroke(90, 255, 233);
                p.strokeWeight(ray.currentWidth);
                p.line(x1, y1, x2, y2);
    
                // Check if this is an hour mark and draw the white ellipse at the endpoint of the ray
                if (ray.isHourMark) {
                    p.push();
                    p.translate(x2, y2); // Move to the endpoint of the ray
                    p.noStroke();
                    p.fill(255);
                    p.ellipse(ellipseX - x2, ellipseY - y2, 4, 4); // Attach the ellipse to the ray's endpoint
                    p.pop();
                }
            }
    
            p.pop();
        },
    },
    
    halfRing10: {
        setup: (p) => {
            let rays = [];
            let numRays = 30; // Half the number of rays for a semi-circle
    
            const rayBaseWidth = 1;
            const rayMinWidth = 0.5;
            const rayMaxWidth = 3;
    
            for (let i = 0; i < numRays; i++) {
                rays.push({
                    angle: p.map(i, 0, numRays, 180 , 320), // Only half the angle (semi-circle)
                    length: 5,
                    targetLength: 5,
                    currentLength: 5,
                    currentWidth: rayBaseWidth,
                    targetWidth: rayBaseWidth,
                    isHourMark: i % 5 === 0, // Hour mark condition (every 5th ray)
                });
            }
            return rays;
        },
    
        draw: (p, rays, offset,rotation=0) => {
            p.push();
            p.translate(offset.x, offset.y);
            p.rotate(rotation); // Rotation is now in degrees, no need to convert

    
            let now = p.millis() / 1000;
            let second = p.second();
    
            if (second % 5 === 0) {
                triggerRingRayWidthChange(p, rays); // Trigger ray width change every 5 seconds
            }
    
            for (let i = 0; i < rays.length; i++) {
                let ray = rays[i];
    
                // Adjust the angle for the ellipse movement
                let angleOffset = p.map(second + i, 0, 60, 180, 270);
                // Adjust angle based on current second and ray index
    
                // Calculate the position of the ray endpoint (x2, y2)
                let x1 = p.cos(ray.angle) * 45;
                let y1 = p.sin(ray.angle) * 45;
                let x2 = p.cos(ray.angle) * (45 + ray.currentLength);
                let y2 = p.sin(ray.angle) * (45 + ray.currentLength);
    
                // Calculate the position of the white ellipse attached to the ray's endpoint
                let ellipseX = p.cos(angleOffset) * (45 + ray.currentLength);
                let ellipseY = p.sin(angleOffset) * (45 + ray.currentLength);
    
                // Check mouse hover distance to scale ray length
                let mouseDist = p.dist(
                    x2, y2, p.mouseX - p.width / 2, p.mouseY - p.height / 2
                );
    
                if (mouseDist < 50) {
                    ray.targetLength = 5 * 5;
                } else {
                    ray.targetLength = 5;
                }
    
                ray.currentLength = p.lerp(ray.currentLength, ray.targetLength, 0.09);
                ray.currentWidth = p.lerp(ray.currentWidth, ray.targetWidth, 0.09);
    
                p.stroke(90, 255, 233);
                p.strokeWeight(ray.currentWidth);
                p.line(x1, y1, x2, y2);
    
                // Check if this is an hour mark and draw the white ellipse at the endpoint of the ray
                if (ray.isHourMark) {
                    p.push();
                    p.translate(x2, y2); // Move to the endpoint of the ray
                    p.noStroke();
                    p.fill(255);
                    p.ellipse(ellipseX - x2, ellipseY - y2, 4, 4); // Attach the ellipse to the ray's endpoint
                    p.pop();
                }
            }
    
            p.pop();
        },
    },

    halfRing12: {
        setup: (p) => {
            let rays = [];
            let numRays = 30; // Half the number of rays for a semi-circle
    
            const rayBaseWidth = 1;
            const rayMinWidth = 0.5;
            const rayMaxWidth = 3;
    
            for (let i = 0; i < numRays; i++) {
                rays.push({
                    angle: p.map(i, 0, numRays, 180 , 360), // Only half the angle (semi-circle)
                    length: 5,
                    targetLength: 5,
                    currentLength: 5,
                    currentWidth: rayBaseWidth,
                    targetWidth: rayBaseWidth,
                    isHourMark: i % 5 === 0, // Hour mark condition (every 5th ray)
                });
            }
            return rays;
        },
    
        draw: (p, rays, offset,rotation=0) => {
            p.push();
            p.translate(offset.x, offset.y);
            p.rotate(rotation); // Rotation is now in degrees, no need to convert

    
            let now = p.millis() / 1000;
            let second = p.second();
    
            if (second % 5 === 0) {
                triggerRingRayWidthChange(p, rays); // Trigger ray width change every 5 seconds
            }
    
            for (let i = 0; i < rays.length; i++) {
                let ray = rays[i];
    
                // Adjust the angle for the ellipse movement
                let angleOffset = p.map(second + i, 0, 90, 180, 360); // Adjust angle based on current second and ray index
    
                // Calculate the position of the ray endpoint (x2, y2)
                let x1 = p.cos(ray.angle) * 45;
                let y1 = p.sin(ray.angle) * 45;
                let x2 = p.cos(ray.angle) * (45 + ray.currentLength);
                let y2 = p.sin(ray.angle) * (45 + ray.currentLength);
    
                // Calculate the position of the white ellipse attached to the ray's endpoint
                let ellipseX = p.cos(angleOffset) * (45 + ray.currentLength);
                let ellipseY = p.sin(angleOffset) * (45 + ray.currentLength);
    
                // Check mouse hover distance to scale ray length
                let mouseDist = p.dist(
                    x2, y2, p.mouseX - p.width / 2, p.mouseY - p.height / 2
                );
    
                if (mouseDist < 50) {
                    ray.targetLength = 5 * 5;
                } else {
                    ray.targetLength = 5;
                }
    
                ray.currentLength = p.lerp(ray.currentLength, ray.targetLength, 0.09);
                ray.currentWidth = p.lerp(ray.currentWidth, ray.targetWidth, 0.09);
    
                p.stroke(90, 255, 233);
                p.strokeWeight(ray.currentWidth);
                p.line(x1, y1, x2, y2);
    
                // Check if this is an hour mark and draw the white ellipse at the endpoint of the ray
                if (ray.isHourMark) {
                    p.push();
                    p.translate(x2, y2); // Move to the endpoint of the ray
                    p.noStroke();
                    p.fill(255);
                    p.ellipse(ellipseX - x2, ellipseY - y2, 4, 4); // Attach the ellipse to the ray's endpoint
                    p.pop();
                }
            }
    
            p.pop();
        },
    },


    smallHalfRing: {
        setup: (p) => {
            let rays = [];
            let numRays = 30; // Half the number of rays for a semi-circle

            const rayBaseWidth = 1;
            const rayMinWidth = 0.5;
            const rayMaxWidth = 3;

            for (let i = 0; i < numRays; i++) {
                rays.push({
                    angle: p.map(i, 0, numRays, 0, 180), // Only half the angle (semi-circle)
                    length: 5,
                    targetLength: 5,
                    currentLength: 5,
                    currentWidth: rayBaseWidth,
                    targetWidth: rayBaseWidth,
                    isHourMark: i % 5 === 0,
                });
            }
            return rays;
        },

        draw: (p, rays, offset,rotation=0) => {
            p.push();
            p.translate(offset.x, offset.y);
            let now = p.millis() / 1000;
            let second = p.second();
            let rotationAngle = p.map(second, 0, 60, 0, 180); // Adjust rotation to fit the half-ring

            p.rotate(rotationAngle);

            if (second % 5 === 0) {
                triggerRingRayWidthChange(p, rays);
            }

            for (let i = 0; i < rays.length; i++) {
                let ray = rays[i];

                let mouseDist = p.dist(
                    p.cos(ray.angle) * (45 + ray.currentLength),
                    p.sin(ray.angle) * (45 + ray.currentLength),
                    p.mouseX - p.width / 2,
                    p.mouseY - p.height / 2
                );

                if (mouseDist < 50) {
                    ray.targetLength = 5 * 5;
                } else {
                    ray.targetLength = 5;
                }

                ray.currentLength = p.lerp(ray.currentLength, ray.targetLength, 0.09);
                ray.currentWidth = p.lerp(ray.currentWidth, ray.targetWidth, 0.09);

                let x1 = p.cos(ray.angle) * 45;
                let y1 = p.sin(ray.angle) * 45;
                let x2 = p.cos(ray.angle) * (25 + ray.currentLength);
                let y2 = p.sin(ray.angle) * (25 + ray.currentLength);

                p.stroke(90, 255, 233);
                p.strokeWeight(ray.currentWidth);
                p.line(x1, y1, x2, y2);

                if (ray.isHourMark) {
                    p.push();
                    p.translate(x2, y2);
                    p.noStroke();
                    p.fill(255);
                    p.ellipse(0, 0, 4, );
                    p.pop();
                }
            }

            p.pop();
        },
    },


};

