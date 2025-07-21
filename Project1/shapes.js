//push shape 
//new functions 
    //define a pivot center for each ring / trapezoid as a way to define location in frame; 
    //the entire thing should be scalable; 
    //figure out how to add a gradient map 

//public input variables that can be adjusted on the website 
    //time manipulations ?pause? speed up? 
    

const shapes = {

    trapezoid1: {
        setup: (p) => {
            let maskRays = [];
            let numMaskRays = 12;
            let specialRayIndex = 0;

            let hoverThreshold = 50; 
            let maskLagSpeed = 0.1; 

            const baseSize = Math.min(p.width, p.height); // preferred reference size
            const scaleFactor = baseSize / 300; // 300 was original reference height

            let trapezoid1Vertices = [
                { x: 0 * scaleFactor, y: 0 * scaleFactor },
                { x: 42 * scaleFactor, y: 0 * scaleFactor },
                { x: -32 * scaleFactor, y: 30 * scaleFactor },
                { x: -80 * scaleFactor, y: 70 * scaleFactor }
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
                    ray.targetWidth = 1.2;
                } else {
                    ray.targetWidth = 0.7;  // Reset to base width
                }

                if (i === maskRaysData.specialRayIndex) {
                    ray.targetWidth = 2.1; // 3 times larger than the base width (0.7 * 3)
                }
        
                // Smoothly transition ray width
                ray.currentWidth = p.lerp(ray.currentWidth, ray.targetWidth, 0.1); // Adjust the lerp factor for smoother transition
        
                // Draw the ray as a line with variable width
                p.stroke(120, 160, 0); // Green stroke color
                p.strokeWeight(ray.currentWidth);
                p.line(ray.startX, ray.startY, ray.endX, ray.endY);
            }
        

            p.pop();
        }
        
        
    },

    trapezoid2: {
        setup: (p) => {
            let maskRays = [];
            let numMaskRays = 12;
            let specialRayIndex = 0;

            let hoverThreshold = 50; 
            let maskLagSpeed = 0.1; 

            // In your setup/draw code:
            const baseSize = Math.min(p.width, p.height); // Or your preferred reference size
            const scaleFactor = baseSize / 300; // 300 was original reference height

            let trapezoid2Vertices = [
                { x: 50 * scaleFactor, y: 80 * scaleFactor },
                { x: 0 * scaleFactor, y: 70 * scaleFactor },
                { x: -90 * scaleFactor, y: 70 * scaleFactor },
                { x: -60 * scaleFactor, y: 1 * scaleFactor },
            ];
            

            for (let i = 0; i < numMaskRays; i++) {
                let t = i / numMaskRays;
                let topX = p.lerp(trapezoid2Vertices[0].x, trapezoid2Vertices[1].x, t);
                let topY = p.lerp(trapezoid2Vertices[0].y, trapezoid2Vertices[1].y, t);
                let bottomX = p.lerp(trapezoid2Vertices[3].x, trapezoid2Vertices[2].x, t);
                let bottomY = p.lerp(trapezoid2Vertices[3].y, trapezoid2Vertices[2].y, t);

                maskRays.push({
                    startX: topX,
                    startY: topY,
                    endX: bottomX,
                    endY: bottomY,
                    currentWidth: 0.7,
                    targetWidth: 0.7,
                    wasHovered: false,
                });
            }

            
            return { maskRays, specialRayIndex };
        },
        
        draw: (p, maskRaysData, offset, flip=false) => {
            p.push();
            p.translate(offset.x, offset.y);

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
                    ray.targetWidth = 1.2;
                } else {
                    ray.targetWidth = 0.7;  // Reset to base width
                }

                if (i === maskRaysData.specialRayIndex) {
                    ray.targetWidth = 2.1; // 3 times larger than the base width (0.7 * 3)
                }
        
                // Smoothly transition ray width
                ray.currentWidth = p.lerp(ray.currentWidth, ray.targetWidth, 0.1); // Adjust the lerp factor for smoother transition
        
                // Draw the ray as a line with variable width
                p.stroke(120, 160, 0); // Green stroke color
                p.strokeWeight(ray.currentWidth);
                p.line(ray.startX, ray.startY, ray.endX, ray.endY);
            }
        

            p.pop();
        }
        
    },

    trapezoid3: {
        setup: (p) => {
            let maskRays = [];
            let numMaskRays = 12;
            let specialRayIndex = 0;

            let hoverThreshold = 50; //
            let maskLagSpeed = 0.1; // Adjust the speed of width transition

            const baseSize = Math.min(p.width, p.height); // preferred reference size
            const scaleFactor = baseSize / 300; // 300 was original reference height

            let trapezoidVertices = [
                { x: -80 * scaleFactor, y: 15 * scaleFactor }, // Top-left
                { x: -25 * scaleFactor, y: 25 * scaleFactor }, // Top-right
                { x: -25 * scaleFactor, y: 110 * scaleFactor}, // Bottom-right
                { x: -0 * scaleFactor, y: 130 * scaleFactor }, // Bottom-left
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
                    ray.targetWidth = 1.2;
                } else {
                    ray.targetWidth = 0.7;  // Reset to base width
                }

                if (i === maskRaysData.specialRayIndex) {
                    ray.targetWidth = 2.1; // 3 times larger than the base width (0.7 * 3)
                }

                // Smoothly transition ray width
                ray.currentWidth = p.lerp(ray.currentWidth, ray.targetWidth, 0.24); // Adjust the lerp factor for smoother transition
        
                // Draw the ray as a line with variable width
                p.stroke(120, 160, 0); // Green stroke color
                p.strokeWeight(ray.currentWidth);
                p.line(ray.startX, ray.startY, ray.endX, ray.endY);
            }

            //  CIRCLE
            p.fill(225, 25, 45); 
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

            let hoverThreshold = 50; // You can adjust this value
            let maskLagSpeed = 0.1; // Adjust the speed of width transition

            const baseSize = Math.min(p.width, p.height); // preferred reference size
            const scaleFactor = baseSize / 300; // 300 was original reference height

            let trapezoidVertices = [
                { x: 80  * scaleFactor, y: 15  * scaleFactor }, // Top-left
                { x: 55  * scaleFactor, y: 15  * scaleFactor}, // Top-right
                { x: -15 * scaleFactor, y: 120 * scaleFactor }, // Bottom-right
                { x: -10 * scaleFactor, y: 135 * scaleFactor }, // Bottom-left
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
                    ray.targetWidth = 1.2;
                } else {
                    ray.targetWidth = 0.7;  // Reset to base width
                }

                if (i === maskRaysData.specialRayIndex) {
                    ray.targetWidth = 2.1; // 3 times larger than the base width (0.7 * 3)
                }
        
                // Smoothly transition ray width
                ray.currentWidth = p.lerp(ray.currentWidth, ray.targetWidth, 0.1); // Adjust the lerp factor for smoother transition
        
                // Draw the ray as a line with variable width
                p.stroke(220,160,150); // Green stroke color
                p.strokeWeight(ray.currentWidth);
                p.line(ray.startX, ray.startY, ray.endX, ray.endY);
            }
            //  CIRCLE
                p.fill(225, 25, 45); 
                p.noStroke();
                p.circle(offset.x-240, offset.y-185, 20); // Draw the circle centered at the current offset position

            p.pop();
        }
    },

    trapezoidSmall1: {
        setup: (p) => {
            let maskRays = [];
            let numMaskRays = 12;
            let specialRayIndex = 0;


            let hoverThreshold = 50; // You can adjust this value
            let maskLagSpeed = 0.1; // Adjust the speed of width transition

            const baseSize = Math.min(p.width, p.height); // preferred reference size
            const scaleFactor = baseSize / 300; // 300 was original reference height

            let trapezoidSmall1Vertices = [
                { x: -60 * scaleFactor, y: 48 * scaleFactor}, // Top-left
                { x: 50 * scaleFactor, y: 8 * scaleFactor }, // Top-right
                { x: 20 * scaleFactor, y: 40 * scaleFactor }, // Bottom-right
                { x: 20 * scaleFactor, y: 50 * scaleFactor }, // Bottom-left
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
                    ray.targetWidth = 1.2;
                } else {
                    ray.targetWidth = 0.7;  // Reset to base width
                }

                if (i === maskRaysData.specialRayIndex) {
                    ray.targetWidth = 2.1; // 3 times larger than the base width (0.7 * 3)
                }
        
                // Smoothly transition ray width
                ray.currentWidth = p.lerp(ray.currentWidth, ray.targetWidth, 0.1); // Adjust the lerp factor for smoother transition
        
                // Draw the ray as a line with variable width
                p.stroke(120, 160, 0); // Green stroke color
                p.strokeWeight(ray.currentWidth);
                p.line(ray.startX, ray.startY, ray.endX, ray.endY);


            }

            p.pop();
        }  
    },


        // Enhanced factory function with customizable radii
        createRingVariant: (startAngle, endAngle, innerRadiusRatio = 0.16, outerRadiusRatio = 0.9, numRays = 30, isFullCircle = false) => {
            return {
                setup: (p) => {
                    let rays = [];
                    const rayBaseWidth = 3;
                    const rayMinWidth = 1.2;
                    const rayMaxWidth = 6;
    
                    for (let i = 0; i < numRays; i++) {
                        rays.push({
                            angle: p.map(i, 0, numRays, startAngle, endAngle),
                            length: 5,
                            targetLength: 9,
                            currentLength: 5,
                            currentWidth: rayBaseWidth,
                            targetWidth: 3* rayBaseWidth,
                            isHourMark: i % 3 === 0,
                            // Store the ratios for this variant
                            innerRatio: innerRadiusRatio,
                            outerRatio: outerRadiusRatio
                        });
                    }
                    return rays;
                },
                
                draw: (p, rays, offset, rotation = 0) => {
                    p.push();
                    p.translate(offset.x, offset.y);
                    
                    // Calculate scale factor based on canvas size
                    const baseSize = Math.min(p.width, p.height);
                    
                    // Only rotate for full circle (like the original ring)
                    if (isFullCircle) {
                        let second = p.second();
                        let rotationAngle = p.map(second, 0, 60, 0, 360);
                        p.rotate(rotationAngle);
                        
                        if (second % 3 === 0) {
                            triggerRingRayWidthChange(p, rays);
                        }
                    } else {
                        p.rotate(rotation);
                        let second = p.second();
                        if (second % 3 === 0) {
                            triggerRingRayWidthChange(p, rays);
                        }
                    }
    
                    for (let i = 0; i < rays.length; i++) {
                        let ray = rays[i];
                        
                        // Calculate positions using the variant-specific ratios
                        let innerRadius = baseSize * ray.innerRatio;
                        let outerRadius = baseSize * ray.outerRatio;
                        
                        let x1 = p.cos(ray.angle) * innerRadius;
                        let y1 = p.sin(ray.angle) * innerRadius;
                        let x2 = p.cos(ray.angle) * (outerRadius + ray.currentLength);
                        let y2 = p.sin(ray.angle) * (outerRadius + ray.currentLength);
    
                        // Hover interaction (scaled to canvas size)
                        let mouseDist = p.dist(
                            x2, y2, 
                            p.mouseX - p.width / 2, 
                            p.mouseY - p.height / 2
                        );
                        
                        ray.targetLength = mouseDist < (baseSize * 0.1) ? 25 : 5;
                        ray.currentLength = p.lerp(ray.currentLength, ray.targetLength, 0.24);
                        ray.currentWidth = p.lerp(ray.currentWidth, ray.targetWidth, 0.24);
    
                        // Draw the ray
                        p.stroke(120, 160, 0); // Green stroke color
                        p.strokeWeight(ray.currentWidth * (baseSize / 500)); // Scale stroke weight
                        p.line(x1, y1, x2, y2);
                        
                        // Draw hour marks
                        if (ray.isHourMark) {
                            p.push();
                            p.translate(x2, y2);
                            p.noStroke();
                            p.fill(225, 25, 45); 
                            p.ellipse(0, 0, 6 * (baseSize / 300), 6 * (baseSize / 300));
                            p.pop();
                        }
                    }
                    p.pop();
                }
            };
        },
        // Initialize variants with custom start/end points and radii
    };
    
    // Initialize with custom inner and outer radius ratios for each variant
    shapes.ring = shapes.createRingVariant(0, 360, 0.10, 0.2,36,true); // c,r,
    shapes.ringSmall = shapes.createRingVariant(0, 360, 0.03, 0.05, 60, true); // Full circle, tighter radius
    
    shapes.halfRing6 = shapes.createRingVariant(40, 180, 0.10, 0.2); 
    shapes.halfRing9 = shapes.createRingVariant(90, 235, 0.12, 0.2); //
    shapes.halfRing10 = shapes.createRingVariant(180, 330, 0.10, 0.2,); // 

    shapes.ring1to8 = shapes.createRingVariant(-82, 150, 0.16, 0.18,60); 
    shapes.ring3to8 = shapes.createRingVariant(0, 150, 0.12, 0.2); 
    shapes.ring4to11 = shapes.createRingVariant(30,240, 0.14, 0.20,36); // 

    shapes.ring11to1 = shapes.createRingVariant(-98, -82, 0.01, 0.4,12); 
    shapes.ringLarge11to1 = shapes.createRingVariant(-94, -86, 0.01, 0.8,12); 
    shapes.ring5to7 = shapes.createRingVariant(82, 98, 0.01, 0.4,12); 
    shapes.ringLarge5to7 = shapes.createRingVariant(86, 94, 0.01,0.7,12); 