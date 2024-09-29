"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = UserForm;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./UserForm.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// User Form

function UserForm(props) {
  const {
    active
  } = props;
  return /*#__PURE__*/_react.default.createElement("form", {
    className: `user-form ${active ? 'active' : ''}`
  }, /*#__PURE__*/_react.default.createElement("h3", null, "login now"), /*#__PURE__*/_react.default.createElement("div", {
    className: "box"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "email",
    placeholder: "your email"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "box"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "password",
    placeholder: "your password"
  })), /*#__PURE__*/_react.default.createElement("p", null, "forgot your password", ' ', /*#__PURE__*/_react.default.createElement("a", {
    href: "/"
  }, "click here")), /*#__PURE__*/_react.default.createElement("p", null, "don't have an account", ' ', /*#__PURE__*/_react.default.createElement("a", {
    href: "/"
  }, "create now")), /*#__PURE__*/_react.default.createElement("button", {
    type: "submit",
    className: "btn"
  }, "login now"));
}
UserForm.propTypes = {
  active: _propTypes.default.bool
}.isRequired;