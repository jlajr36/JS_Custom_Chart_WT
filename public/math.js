const math = {};

math.lerp = (a, b, t) => {
    return a + (b - a) * t;
}

math.formatNumber = (num, numDec=0) => {
    return num.toFixed(numDec);
}