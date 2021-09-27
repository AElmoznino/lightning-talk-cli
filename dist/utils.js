"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomIntegerInRange = void 0;
const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
exports.randomIntegerInRange = randomIntegerInRange;
