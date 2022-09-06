"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloWorld = void 0;
const material_1 = require("@mui/material");
const react_1 = __importDefault(require("react"));
const HelloWorld = () => {
    return (<material_1.Typography>Hello World</material_1.Typography>);
};
exports.HelloWorld = HelloWorld;
exports.default = exports.HelloWorld;
