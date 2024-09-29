"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Navbar;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./Navbar.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// Navbar

function Navbar(props) {
  const {
    active
  } = props;
  return /*#__PURE__*/_react.default.createElement("nav", {
    className: `navbar ${active ? 'active' : ''}`
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#home"
  }, "home"), /*#__PURE__*/_react.default.createElement("a", {
    href: "#features"
  }, "features"), /*#__PURE__*/_react.default.createElement("a", {
    href: "#products"
  }, "products"), /*#__PURE__*/_react.default.createElement("a", {
    href: "#categories"
  }, "categories"), /*#__PURE__*/_react.default.createElement("a", {
    href: "#reviews"
  }, "review"), /*#__PURE__*/_react.default.createElement("a", {
    href: "#blogs"
  }, "blogs"));
}
Navbar.propTypes = {
  active: _propTypes.default.bool
}.isRequired;