#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const meow_1 = __importDefault(require("meow"));
const ui_1 = __importDefault(require("./ui"));
const cli = (0, meow_1.default)(`
	Usage
	  $ lightning-talk-cli

	Options
		--numberOfTalks  Number of talks to generate

	Examples
	  $ lightning-talk-cli --numberOfTalks=3
	  Your 1st talk will list here
	  Your 2nd talk will list here
	  Your 3rd talk will list here
`, {
    flags: {
        numberOfTalks: {
            type: 'number'
        }
    }
});
(0, ink_1.render)(react_1.default.createElement(ui_1.default, { numberOfTalks: cli.flags.numberOfTalks }));
