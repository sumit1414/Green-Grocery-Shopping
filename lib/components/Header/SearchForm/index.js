"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SearchForm;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
require("./SearchForm.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// Search Form

function SearchForm(props) {
  const {
    active
  } = props;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("form", {
    action: "",
    className: `search-form ${active ? 'active' : ''}`
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "search-box"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "search",
    placeholder: "search here...",
    id: "search-box"
  }), /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    className: "search-icon",
    icon: _freeSolidSvgIcons.faSearch
  }))));
}
SearchForm.propTypes = {
  active: _propTypes.default.bool
}.isRequired;