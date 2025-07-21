const letterCompositions = {

    A: [
        { shape: 'ring', offset: { x: 110, y: 160 } },
        { shape: 'ring11to1', offset: { x: 160, y: 212 } }, 

    ],
    B: [
        { shape: 'ringLarge11to1', offset: { x: 80, y: 214 } },
        { shape: 'ring', offset: { x: 120, y: 160 } },
    ],
 
    C: [
        { shape: 'halfRing6', offset: { x: 120, y: 160 } },
        { shape: 'halfRing10', offset: { x: 120, y: 160 } },
    ],

    D:[
        // { shape: 'twigs2', offset: { x: 220, y: 110 }, flip:true},
        { shape: 'ringLarge11to1', offset: { x: 150, y: 214 } },
        { shape: 'ring', offset: { x: 110, y: 160 } },
        // { shape: 'ringMid', offset: { x: 110, y: 164 } },
    ],

    E: [
        { shape: 'trapezoid1', offset: { x: 140, y: 110 }},
        { shape: 'halfRing6', offset: { x: 130, y: 160 } },
    ],

    F: [
        { shape: 'trapezoid1', offset: { x: 143, y: 50 },flip:false},
        { shape: 'ring5to7', offset: { x: 90, y: 110 } },
    ],

    G:[
        { shape: 'ring', offset: { x: 120, y: 140 } },
        { shape: 'ringSmall', offset: { x: 160, y: 100 } },
        { shape: 'ring1to8', offset: { x: 120, y: 200 } },
    ],

    H: [
        { shape: 'ring5to7', offset: { x: 80, y: 110 } },
        { shape: 'ring11to1', offset: { x: 80, y: 140 } },
        { shape: 'trapezoid1', offset: { x: 140, y: 100 },},
        { shape: 'ring5to7', offset: { x: 160, y: 110 } },
    ],

    I: [
        { shape: 'ringSmall', offset: { x: 120, y: 90 } },
        { shape: 'ring5to7', offset: { x: 120, y: 110 } },
    ],

    J:[
        { shape: 'ringSmall', offset: { x: 120, y: 90 } },
        { shape: 'ring11to1', offset: { x: 120, y: 210 } },  
        { shape: 'ring1to8', offset: { x: 100, y: 200 } },
    ],

    K: [
        { shape: 'ring5to7', offset: { x: 80, y: 110 } },
        { shape: 'ring11to1', offset: { x: 80, y: 140 } }, 
        { shape: 'trapezoid1', offset: { x: 140, y: 110 }},
        { shape: 'trapezoid2', offset: { x: 140, y: 150 } },
    ],

    L:[
        { shape: 'ring11to1', offset: { x: 130, y: 140 } },
        { shape: 'trapezoid2', offset: { x: 130, y: 155 } },
        { shape: 'halfRing9', offset: { x: 155, y: 165 } },
    ],

    M: [
        { shape: 'ring11to1', offset: { x: 60, y: 210 } },
        { shape: 'ring5to7', offset: { x: 120, y: 110 } },
        { shape: 'ring5to7', offset: { x: 175, y: 110 } },
        { shape: 'trapezoid1', offset: { x: 120, y: 110 }},
        { shape: 'trapezoid1', offset: { x: 175, y: 110 },},
    ],

    N: [
        { shape: 'trapezoid1', offset: { x: 136, y: 100 }},
        { shape: 'ring5to7', offset: { x: 80, y: 110 } },
        { shape: 'ring11to1', offset: { x: 80, y: 210 } },
        { shape: 'ring5to7', offset: { x: 160, y: 110 } },
    ],

    O:[
        { shape: 'ring', offset: { x: 120, y: 160 } },
    ],

    P:[
        { shape: 'ring', offset: { x: 120, y: 160 } },
        { shape: 'ringLarge5to7', offset: { x: 80, y: 100 } },
    ],

    Q:[
        { shape: 'ring', offset: { x: 120, y: 160 } },
        { shape: 'ringLarge5to7', offset: { x: 160, y: 100 } },
    ],

    R: [
        { shape: 'halfRing10', offset: { x: 150, y: 150 } },
        { shape: 'ring5to7', offset: { x: 110, y: 110 } },
    ],

    S: [
        { shape: 'halfRing10', offset: { x: 126, y: 150 } },
        { shape: 'trapezoid2', offset: { x: 140, y:110 } },
        { shape: 'ring3to8', offset: { x: 122, y: 160 } },
    ],

    T: [
        { shape: 'trapezoid1', offset: { x: 143, y: 110 }},
        { shape: 'halfRing6', offset: { x: 135, y: 160 } },
        { shape: 'ring11to1', offset: { x: 90, y: 170 } },

    ],

    U: [
        { shape: 'ring11to1', offset: { x: 165, y: 220 } },
        { shape: 'ring4to11', offset: { x: 120, y: 160 } },
    ],

    V: [
        { shape: 'trapezoid3', offset: { x: 120, y: 110 } },
        { shape: 'trapezoid4', offset: { x: 120, y: 110 } },
    ],

    W: [
        { shape: 'ring11to1', offset: { x: 55, y: 210 } },
        { shape: 'ring5to7', offset: { x: 120, y: 110 } },
        { shape: 'ring11to1', offset: { x: 190, y: 210 } },
        { shape: 'trapezoid1', offset: { x: 110, y: 150 }},
        { shape: 'trapezoid1', offset: { x: 175, y: 150 } },
    ],

    X:[
        { shape: 'halfRing10', offset: { x: 106, y: 160 } },
        { shape: 'ring1to8', offset: { x: 100, y: 160 } },  
        { shape: 'ringSmall', offset: { x: 160, y: 130 } },
        { shape: 'ringSmall', offset: { x: 160, y: 190 } },
    ],

    Y:[
        // { shape: 'ring11to1', offset: { x: 155, y: 210 } },
        { shape: 'ring4to11', offset: { x: 120, y: 140 } },
        { shape: 'trapezoid4', offset: { x: 135, y: 90 } },
        { shape: 'trapezoid4', offset: { x: 100, y: 140 } },
        // { shape: 'ring3to8', offset: { x: 110, y: 190 } },
    ],

    Z: [
        { shape: 'trapezoidSmall1', offset: { x: 150, y: 150 } },
        { shape: 'trapezoid4', offset: { x: 100, y: 85 } },
        { shape: 'trapezoid1', offset: { x: 145, y: 90 } },
    ],
    
};
