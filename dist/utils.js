"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomHexColorCode = exports.randomIntegerInRange = void 0;
const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
exports.randomIntegerInRange = randomIntegerInRange;
const randomHexColorCode = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    const colorCode = "#" + n.slice(0, 6);
    if (colorCode.startsWith("#00")) {
        return (0, exports.randomHexColorCode)();
    }
    return colorCode;
};
exports.randomHexColorCode = randomHexColorCode;
