"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;
var _react = _interopRequireWildcard(require("react"));
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _SearchForm = _interopRequireDefault(require("./SearchForm"));
var _ShoppingCart = _interopRequireDefault(require("./ShoppingCart"));
var _UserForm = _interopRequireDefault(require("./UserForm"));
require("./Header.css");
var _Navbar = _interopRequireDefault(require("./Navbar"));
var _greengrocerylogo = _interopRequireDefault(require("./img/greengrocerylogo.png"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function Header() {
  const [activeMenu, setActiveMenu] = (0, _react.useState)(false);
  const [activeSearch, setActiveSearch] = (0, _react.useState)(false);
  const [activeShoppingCart, setActiveShoppingCart] = (0, _react.useState)(false);
  const [activeUserForm, setActiveUserForm] = (0, _react.useState)(false);
  window.onscroll = () => {
    setActiveUserForm(false);
    setActiveShoppingCart(false);
    setActiveSearch(false);
    setActiveMenu(false);
  };
  const handleMenuButton = () => {
    setActiveMenu(!activeMenu);
    setActiveSearch(false);
    setActiveShoppingCart(false);
    setActiveUserForm(false);
  };
  const handleSearchButton = () => {
    setActiveSearch(!activeSearch);
    setActiveShoppingCart(false);
    setActiveUserForm(false);
    setActiveMenu(false);
  };
  const handleShoppingCartButton = () => {
    setActiveShoppingCart(!activeShoppingCart);
    setActiveSearch(false);
    setActiveUserForm(false);
    setActiveMenu(false);
  };
  const handleUserFormButton = () => {
    setActiveUserForm(!activeUserForm);
    setActiveSearch(false);
    setActiveShoppingCart(false);
    setActiveMenu(false);
  };
  return /*#__PURE__*/_react.default.createElement("header", {
    className: "header"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "/",
    className: "logo flex_center"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _greengrocerylogo.default,
    className: "logo_css"
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: "fsize16px"
  }, " Green Grocery")), /*#__PURE__*/_react.default.createElement(_Navbar.default, {
    active: activeMenu
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "icons"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    id: "menu-btn",
    onClick: handleMenuButton
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    className: "fa-icon",
    icon: _freeSolidSvgIcons.faBars
  })), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    id: "search-btn",
    onClick: handleSearchButton
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    className: "fa-icon",
    icon: _freeSolidSvgIcons.faSearch
  })), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    id: "cart-btn",
    onClick: handleShoppingCartButton
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    className: "fa-icon",
    icon: _freeSolidSvgIcons.faShoppingCart
  })), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    id: "user-btn",
    onClick: handleUserFormButton
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    className: "fa-icon",
    icon: _freeSolidSvgIcons.faUser
  }))), /*#__PURE__*/_react.default.createElement(_SearchForm.default, {
    active: activeSearch
  }), /*#__PURE__*/_react.default.createElement(_ShoppingCart.default, {
    active: activeShoppingCart
  }), /*#__PURE__*/_react.default.createElement(_UserForm.default, {
    active: activeUserForm
  }));
}