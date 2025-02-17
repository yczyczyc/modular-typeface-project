const letterCompositions = {

    1: [
        { shape: 'halfRing6', offset: { x: 120, y: 160 } },
        { shape: 'halfRing10', offset: { x: 120, y: 160 } },
    ],

    2:[
        { shape: 'trapezoidSmall', offset: { x: 140, y: 100 } },
        { shape: 'trapezoidSmall', offset: { x: 55, y: 100} },
        { shape: 'halfRing3', offset: { x: 112, y: 220 } },
        { shape: 'halfRing6', offset: { x: 120, y: 170 } },

    ],

    3: [
        { shape: 'halfRing6', offset: { x: 120, y: 160 } },
        { shape: 'halfRing10', offset: { x: 120, y: 160 } },
    ],


    4:[
        { shape: 'trapezoid2', offset: { x: 156, y: 17 } },
        { shape: 'trapezoidSmall1', offset: { x: 134, y: 165 } },
        { shape: 'halfRing9', offset: { x: 155, y: 165 } },

    ],


    5: [
        { shape: 'trapezoidSmall1', offset: { x: 104, y: 80 } },
        { shape: 'trapezoid2', offset: { x: 150, y: 90 } },
    
        ],

    6: [
        { shape: 'halfRing6', offset: { x: 120, y: 160 } },
        { shape: 'halfRing10', offset: { x: 120, y: 160 } },
    ],


    A: [
        { shape: 'trapezoidSmall', offset: { x: 140, y: 110 } },
        { shape: 'ring', offset: { x: 110, y: 160 } },
    ],
    B: [
        // { shape: 'trapezoid1', offset: { x: 140, y: 120 },flip:false},
        { shape: 'twigs', offset: { x: 140, y: 110 } },
        // { shape: 'trapezoid', offset: { x: 140, y: 170 }},
        { shape: 'ring', offset: { x: 110, y: 160 } },
        // { shape: 'trapezoidSmall', offset: { x: 35, y: 120 } },

        
    ],
 
    C: [
        { shape: 'halfRing6', offset: { x: 120, y: 160 } },
        { shape: 'halfRing10', offset: { x: 120, y: 160 } },
    ],

    D:[
        { shape: 'twigs2', offset: { x: 220, y: 110 }, flip:true},
        { shape: 'ring', offset: { x: 110, y: 160 } },
    ],

    E: [
        { shape: 'trapezoid1', offset: { x: 140, y: 110 },flip:false},
        { shape: 'halfRing6', offset: { x: 130, y: 160 } },
    ],

    F: [
        { shape: 'trapezoid1', offset: { x: 143, y: 50 },flip:false},
        // { shape: 'smallHalfRing', offset: { x: 130, y: 130 },rotation:120},
        { shape: 'trapezoid2', offset: { x: 135, y: 88 } },
        // { shape: 'trapezoidSmall1', offset: { x: 90, y: 70 } },


    ],

    G:[
        // { shape: 'twigs2', offset: { x: 240, y: 200 }, flip:true},
        { shape: 'trapezoidSmall', offset: { x: 140, y: 110 } },
        { shape: 'ring', offset: { x: 110, y: 160 } },
        { shape: 'halfRing3', offset: { x: 106, y: 204 } },

    ],

    H: [
        { shape: 'twigs', offset: { x: 140, y: 110 }, flip:true},
        { shape: 'halfRing12', offset: { x: 110, y: 150 } },
        { shape: 'trapezoidSmall', offset: { x: 136, y: 112 } },

    ],

    I: [
    { shape: 'trapezoidSmall1', offset: { x: 104, y: 80 } },
    { shape: 'trapezoid2', offset: { x: 150, y: 90 } },

    ],

    J:[
        { shape: 'trapezoidSmall1', offset: { x: 104, y: 80 } },
        { shape: 'trapezoid2', offset: { x: 156, y: 112 } },
        { shape: 'halfRing3', offset: { x: 78, y: 210 } },

    ],

    K: [
        { shape: 'twigs', offset: { x: 150, y: 125 }, flip:true},
        { shape: 'trapezoid1', offset: { x: 120, y: 125 },flip:false},
        { shape: 'halfRing6', offset: { x: 120, y: 170 } },

    ],

    L:[
        { shape: 'trapezoid2', offset: { x: 156, y: 17 } },
        { shape: 'trapezoidSmall1', offset: { x: 134, y: 165 } },
        { shape: 'halfRing9', offset: { x: 155, y: 165 } },

    ],

    M: [
        { shape: 'trapezoid2', offset: { x: 100, y: 92 } },
        { shape: 'trapezoidSmall', offset: { x: 100, y: 110 } },
        { shape: 'trapezoidSmall', offset: { x: 150, y: 110 } },
        { shape: 'trapezoid1', offset: { x: 120, y: 120 },flip:false},
        { shape: 'trapezoid1', offset: { x: 175, y: 120 },flip:false},
    ],

    N: [
        { shape: 'halfRing12', offset: { x: 130, y: 160 } },
        { shape: 'trapezoidSmall', offset: { x: 156, y: 112 } },
        { shape: 'trapezoid2', offset: { x: 120, y: 92 } },

    ],

    O:[
        { shape: 'ring', offset: { x: 110, y: 160 } },
    ],

    P:[
        { shape: 'ring', offset: { x: 120, y: 160 } },
        { shape: 'twigs2', offset: { x: 150, y: 190 }, flip:true},

    ],


    Q:[
        { shape: 'twigs', offset: { x: 240, y: 190 } },
        { shape: 'ring', offset: { x: 120, y: 160 } },
    ],

    R: [
        { shape: 'halfRing10', offset: { x: 150, y: 160 } },
        { shape: 'trapezoid2', offset: { x: 150, y: 92 } },

    ],

    S: [
        { shape: 'halfRing10', offset: { x: 120, y: 150 } },
        { shape: 'trapezoidSmall1', offset: { x: 130, y: 107 } },
        { shape: 'halfRing3', offset: { x: 112, y: 160 } },


    ],

    T: [
        { shape: 'trapezoid1', offset: { x: 133, y: 110 },flip:false},
        { shape: 'halfRing6', offset: { x: 125, y: 160 } },
        { shape: 'trapezoid2', offset: { x: 124, y: 52 } },

    ],

    U: [
        { shape: 'trapezoidSmall', offset: { x: 45, y: 75 } },
        { shape: 'halfRing6', offset: { x: 110, y: 160 } },
        { shape: 'trapezoid2', offset: { x: 200, y: 85 } },

    ],


    V: [
        // { shape: 'trapezoidSmall', offset: { x: 45, y: 75 } },
        // { shape: 'halfRing6', offset: { x: 110, y: 160 } },
        { shape: 'trapezoid3', offset: { x: 130, y: 85 } },
        { shape: 'trapezoid4', offset: { x: 130, y: 85 } },

    ],

    W: [
        { shape: 'trapezoid3', offset: { x: 100, y: 85 } },
        { shape: 'trapezoidSmall', offset: { x: 100, y: 110 } },
        { shape: 'trapezoidSmall', offset: { x: 150, y: 110 } },
        { shape: 'halfRing6', offset: { x: 130, y: 170 } },

    ],

    X:[
        // { shape: 'halfRing3', offset: { x: 96, y: 175 } },
        // { shape: 'halfRing9', offset: { x: 175, y: 170 } },
        { shape: 'trapezoid3', offset: { x: 170, y: 95 } },
        { shape: 'trapezoid4', offset: { x: 110, y: 100 } },


    ],

    Y:[
        { shape: 'trapezoidSmall', offset: { x: 140, y: 100 } },
        { shape: 'trapezoidSmall', offset: { x: 55, y: 100} },
        { shape: 'halfRing3', offset: { x: 112, y: 220 } },
        { shape: 'halfRing6', offset: { x: 120, y: 170 } },

    ],

    Z: [
        
        { shape: 'trapezoidSmall1', offset: { x: 154, y: 160 } },
        { shape: 'trapezoid4', offset: { x: 100, y: 85 } },
        { shape: 'trapezoid1', offset: { x: 145, y: 90 },flip:false},



    ],
    


    // Add more compositions for other letters...
};
