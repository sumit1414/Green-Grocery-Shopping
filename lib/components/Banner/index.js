"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Banner;
var _react = _interopRequireDefault(require("react"));
require("./Banner.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// Banner

function Banner() {
  return /*#__PURE__*/_react.default.createElement("section", {
    className: "banner",
    id: "banner",
    style: {
      background: 'url("../image/banner-bg.webp") no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "content"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "fresh and", ' ', /*#__PURE__*/_react.default.createElement("span", null, "organic"), ' ', "products"), /*#__PURE__*/_react.default.createElement("p", null, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam vitae perspiciatis neque soluta."), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "btn"
  }, "shop now")));
}