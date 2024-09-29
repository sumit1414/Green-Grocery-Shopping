"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Footer;
var _react = _interopRequireDefault(require("react"));
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _freeBrandsSvgIcons = require("@fortawesome/free-brands-svg-icons");
require("./Footer.css");
var _greengrocerylogo = _interopRequireDefault(require("../Header/img/greengrocerylogo.png"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Footer() {
  return /*#__PURE__*/_react.default.createElement("footer", {
    className: "footer",
    id: "footer"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "box-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "box"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "/",
    className: "logo flex_center"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _greengrocerylogo.default,
    className: "logo_css2"
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: "fsize16px colortext"
  }, " Green Grocery")), /*#__PURE__*/_react.default.createElement("p", null, "Lorem ipsum may be used as a placeholder before the final copy is available."), /*#__PURE__*/_react.default.createElement("div", {
    className: "share"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "/"
  }, /*#__PURE__*/_react.default.createElement("i", null, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    className: "fa-icon",
    icon: _freeBrandsSvgIcons.faFacebookF
  }))), /*#__PURE__*/_react.default.createElement("a", {
    href: "/"
  }, /*#__PURE__*/_react.default.createElement("i", null, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    className: "fa-icon",
    icon: _freeBrandsSvgIcons.faTwitter
  }))), /*#__PURE__*/_react.default.createElement("a", {
    href: "/"
  }, /*#__PURE__*/_react.default.createElement("i", null, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    className: "fa-icon",
    icon: _freeBrandsSvgIcons.faInstagram
  }))), /*#__PURE__*/_react.default.createElement("a", {
    href: "/"
  }, /*#__PURE__*/_react.default.createElement("i", null, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    className: "fa-icon",
    icon: _freeBrandsSvgIcons.faLinkedin
  }))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "box"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "contact info"), /*#__PURE__*/_react.default.createElement("a", {
    href: "/",
    className: "links"
  }, /*#__PURE__*/_react.default.createElement("i", null, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faPhone
  })), "+91 9833452345"), /*#__PURE__*/_react.default.createElement("a", {
    href: "/",
    className: "links"
  }, /*#__PURE__*/_react.default.createElement("i", null, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faPhone
  })), "+91 3452341235"), /*#__PURE__*/_react.default.createElement("a", {
    href: "/",
    className: "links",
    id: "emailLink"
  }, /*#__PURE__*/_react.default.createElement("i", null, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faEnvelope
  })), "sakshijaiswal@gmail.com"), /*#__PURE__*/_react.default.createElement("a", {
    href: "/",
    className: "links"
  }, /*#__PURE__*/_react.default.createElement("i", null, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faMapMarkerAlt
  })), "Kandivali, Mumbai")), /*#__PURE__*/_react.default.createElement("div", {
    className: "box"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "quick info"), /*#__PURE__*/_react.default.createElement("a", {
    href: "#home",
    className: "links"
  }, /*#__PURE__*/_react.default.createElement("i", null, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faArrowRight
  })), "home"), /*#__PURE__*/_react.default.createElement("a", {
    href: "#features",
    className: "links"
  }, /*#__PURE__*/_react.default.createElement("i", null, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faArrowRight
  })), "features"), /*#__PURE__*/_react.default.createElement("a", {
    href: "#products",
    className: "links"
  }, /*#__PURE__*/_react.default.createElement("i", null, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faArrowRight
  })), "products"), /*#__PURE__*/_react.default.createElement("a", {
    href: "#categories",
    className: "links"
  }, /*#__PURE__*/_react.default.createElement("i", null, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faArrowRight
  })), "categories"), /*#__PURE__*/_react.default.createElement("a", {
    href: "#reviews",
    className: "links"
  }, /*#__PURE__*/_react.default.createElement("i", null, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faArrowRight
  })), "reviews"), /*#__PURE__*/_react.default.createElement("a", {
    href: "#blogs",
    className: "links"
  }, /*#__PURE__*/_react.default.createElement("i", null, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faArrowRight
  })), "blogs")), /*#__PURE__*/_react.default.createElement("div", {
    className: "box"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "newsletter"), /*#__PURE__*/_react.default.createElement("p", null, "Subscribe For Latest Updates"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    placeholder: "your email"
  }), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "btn"
  }, "subscribe"), /*#__PURE__*/_react.default.createElement("img", {
    src: "image/payment.png",
    alt: ""
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "credits"
  }, /*#__PURE__*/_react.default.createElement("p", null, "Created By ", /*#__PURE__*/_react.default.createElement("span", null, "Mis. Sakshi Jaiswal "), " | All Rights Reserved")));
}