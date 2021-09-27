"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const utils_1 = require("./utils");
const data_1 = require("./data");
const sentence = () => {
    const keyword = data_1.keywords[(0, utils_1.randomIntegerInRange)(0, data_1.keywords.length - 1)];
    const sentence = data_1.sentences[(0, utils_1.randomIntegerInRange)(0, data_1.sentences.length - 1)];
    return sentence.replace(data_1.replaceWord, keyword);
};
const App = () => (react_1.default.createElement(ink_1.Text, null,
    "You should talk about: ",
    react_1.default.createElement(ink_1.Text, { color: "green" }, sentence())));
module.exports = App;
exports.default = App;
