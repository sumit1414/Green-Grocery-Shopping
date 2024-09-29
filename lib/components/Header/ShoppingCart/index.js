"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ShoppingCart;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
require("./ShoppingCart.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// Sopping Cart

function ShoppingCart(props) {
  const {
    active
  } = props;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: `shopping-cart ${active ? 'active' : ''}`
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "box"
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    className: "trash-icon",
    icon: _freeSolidSvgIcons.faTrash
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: "image/cart-img-1.png",
    alt: "Product"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "content"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "watermelon"), /*#__PURE__*/_react.default.createElement("span", {
    className: "price"
  }, "$4.99"), /*#__PURE__*/_react.default.createElement("span", {
    className: "quantity"
  }, "qty: 1"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "box"
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    className: "trash-icon",
    icon: _freeSolidSvgIcons.faTrash
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: "image/cart-img-2.png",
    alt: "Product"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "content"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "onion"), /*#__PURE__*/_react.default.createElement("span", {
    className: "price"
  }, "$4.99"), /*#__PURE__*/_react.default.createElement("span", {
    className: "quantity"
  }, "qty: 1"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "box"
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    className: "trash-icon",
    icon: _freeSolidSvgIcons.faTrash
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: "image/cart-img-3.png",
    alt: "Product"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "content"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "chicken"), /*#__PURE__*/_react.default.createElement("span", {
    className: "price"
  }, "$4.99"), /*#__PURE__*/_react.default.createElement("span", {
    className: "quantity"
  }, "qty: 1"))));
}
ShoppingCart.propTypes = {
  activeShoppingCart: _propTypes.default.bool
}.isRequired;