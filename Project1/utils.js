function triggerRingRayWidthChange(p, rays) {
    for (let i = 0; i < rays.length; i++) {
        rays[i].targetWidth = p.random(0.7, 5);
    }
    setTimeout(() => {
        for (let i = 0; i < rays.length; i++) {
            rays[i].targetWidth = 2.1;
        }
    }, 1000);
}

function updateSpecialRayIndex(maskRaysData) {
    maskRaysData.specialRayIndex = (maskRaysData.specialRayIndex + 1) % maskRaysData.maskRays.length;
}

