function triggerRingRayWidthChange(p, rays) {
    for (let i = 0; i < rays.length; i++) {
        rays[i].targetWidth = p.random(0.5, 5);
    }
    setTimeout(() => {
        for (let i = 0; i < rays.length; i++) {
            rays[i].targetWidth = 1;
        }
    }, 1000);
}

function updateSpecialRayIndex(maskRaysData) {
    maskRaysData.specialRayIndex = (maskRaysData.specialRayIndex + 1) % maskRaysData.maskRays.length;
}

