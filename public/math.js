const math = {};

math.lerp = (a, b, t) => {
    return a + (b - a) * t;
}

math.invLerp = (a, b, v) => {
    return (v -a) / (b - a);
}

math.remap = (oldA, oldB, newA, newB, v) => {
    return math.lerp(newA, newB, math.invLerp(oldA, oldB, v));
}

math.formatNumber = (num, numDec=0) => {
    return num.toFixed(numDec);
}