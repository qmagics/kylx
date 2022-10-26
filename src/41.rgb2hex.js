/**
 * rgb格式颜色转为16进制(hex)表示法
 * [255, 255, 255] => '#ffffff'
 */
function rgb2hex(rgb) {
    const [r, g, b] = rgb;

    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;

    // return `#${r.toString(16) + g.toString(16) + b.toString(16)}`;
}

console.log(rgb2hex([255, 255, 120]));
console.log(rgb2hex([0, 0, 0]));