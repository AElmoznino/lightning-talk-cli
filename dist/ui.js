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
const App = ({ numberOfTalks = 1 }) => {
    const generatedSentences = [...Array(numberOfTalks)].map(() => sentence());
    if (numberOfTalks === 1) {
        return (react_1.default.createElement(ink_1.Text, null,
            "You should talk about: ",
            react_1.default.createElement(ink_1.Text, { color: "green" }, sentence())));
    }
    return (react_1.default.createElement(ink_1.Text, null,
        "Here is a list of suggested topics to talk about: ",
        react_1.default.createElement(ink_1.Newline, null),
        generatedSentences.map((s, i) => (react_1.default.createElement(ink_1.Text, { color: (0, utils_1.randomHexColorCode)(), key: i },
            s,
            react_1.default.createElement(ink_1.Newline, null))))));
};
module.exports = App;
exports.default = App;
