"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Header = _interopRequireDefault(require("./components/Header"));
var _Banner = _interopRequireDefault(require("./components/Banner"));
var _Features = _interopRequireDefault(require("./components/Features"));
var _Products = _interopRequireDefault(require("./components/Products"));
var _Categories = _interopRequireDefault(require("./components/Categories"));
var _Reviews = _interopRequireDefault(require("./components/Reviews"));
var _Blogs = _interopRequireDefault(require("./components/Blogs"));
var _Footer = _interopRequireDefault(require("./components/Footer"));
require("./App.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function App() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "app mt-set"
  }, /*#__PURE__*/_react.default.createElement(_Header.default, null), /*#__PURE__*/_react.default.createElement(_Banner.default, null), /*#__PURE__*/_react.default.createElement(_Features.default, null), /*#__PURE__*/_react.default.createElement(_Products.default, null), /*#__PURE__*/_react.default.createElement(_Categories.default, null), /*#__PURE__*/_react.default.createElement(_Reviews.default, null), /*#__PURE__*/_react.default.createElement(_Blogs.default, null), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
}
var _default = exports.default = App;