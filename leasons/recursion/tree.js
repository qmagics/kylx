const canvas = document.querySelector('#canvas');
// const canvas = document.createElement('canvas');
canvas.height = 900;
canvas.width = 900;
canvas.style.background = '#f7f7f7';
canvas.style.borderRadius = '6px';
const ctx = canvas.getContext('2d');

function sleep(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
}

function getColor(level) {
    const R = getRandom(0, 255);
    const G = getRandom(0, 255);
    const B = getRandom(0, 255);
    return `rgba(${R},${G},${B},1)`;
}

function getRandom(min, max) {
    return min + Math.floor(Math.random() * (max + 1 - min));
}

/**
 * 下载图片
 */
function downloadImage() {
    canvas.toBlob(blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.download = '树';
        a.href = url;
        a.click();
    });
}

async function drawTree(pos, angle, width, height, level = 1) {
    if (level > 10) return;

    const [x, y] = pos;

    ctx.beginPath();
    ctx.translate(x, y);
    ctx.rotate(angle * Math.PI / 180);

    ctx.moveTo(-width / 2, 0);
    ctx.lineTo(-width / 2, -height);
    ctx.lineTo(width / 2, -height);
    ctx.lineTo(width / 2, 0);
    ctx.fillStyle = getColor(level);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fill();
    ctx.closePath();

    const nextX = x + height * Math.sin(angle * Math.PI / 180);
    const nextY = y - height * Math.cos(angle * Math.PI / 180);

    requestAnimationFrame(() => {
        drawTree([nextX, nextY], angle + getRandom(10, 20), width * 0.76, height * 0.96, level + 1);
    })

    requestAnimationFrame(() => {
        drawTree([nextX, nextY], angle - getRandom(10, 20), width * 0.76, height * 0.96, level + 1);
    })
}


/**
 * 获取绘制迭代器
 */
function* getDrawIt(pos, angle, width, height, level = 1) {
    if (level > 10) return;

    const [x, y] = pos;

    ctx.beginPath();
    ctx.translate(x, y);
    ctx.rotate(angle * Math.PI / 180);

    ctx.moveTo(-width / 2, 0);
    ctx.lineTo(-width / 2, -height);
    ctx.lineTo(width / 2, -height);
    ctx.lineTo(width / 2, 0);
    ctx.fillStyle = getColor(level);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fill();
    ctx.closePath();

    const nextX = x + height * Math.sin(angle * Math.PI / 180);
    const nextY = y - height * Math.cos(angle * Math.PI / 180);

    let it1 = getDrawIt([nextX, nextY], angle + getRandom(10, 20), width * 0.76, height * 0.96, level + 1);

    let it2 = getDrawIt([nextX, nextY], angle - getRandom(10, 20), width * 0.76, height * 0.96, level + 1);

    itQueue.push(it1, it2);
}

const itQueue = [];
let currentIt = null;
const it = getDrawIt([canvas.width / 2, canvas.height - 10], 0, 18, 60);
itQueue.push(it);

/**
 * 绘制一步
 */
function drawStep() {
    if (!currentIt && !itQueue.length) return;

    if (!currentIt) currentIt = itQueue.shift();

    const { done } = currentIt.next();

    if (done) currentIt = null;
}


// 一次性绘制树
// drawTree([canvas.width / 2, canvas.height - 10], 0, 18, 60);