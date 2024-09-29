"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Reviews;
var _react = _interopRequireDefault(require("react"));
var _react2 = require("swiper/react");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _swiper = _interopRequireWildcard(require("swiper"));
require("./Reviews.css");
require("swiper/swiper.min.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// Reviews

function Reviews() {
  _swiper.default.use([_swiper.Autoplay]);
  return /*#__PURE__*/_react.default.createElement("section", {
    className: "reviews",
    id: "reviews"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "heading"
  }, "customer's", ' ', /*#__PURE__*/_react.default.createElement("span", null, "review")), /*#__PURE__*/_react.default.createElement("div", {
    className: "reviews-slider"
  }, /*#__PURE__*/_react.default.createElement(_react2.Swiper, {
    loop: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false
    },
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 20,
    pagination: {
      clickable: true
    },
    style: {
      padding: '1rem'
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
  }, /*#__PURE__*/_react.default.createElement(_react2.SwiperSlide, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "box"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "image/pic-1.png",
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("p", null, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis maxime inventore illo nemo cupiditate quam eligendi nihil sunt ullam, laudantium, earum in nam provident quaerat exercitationem?"), /*#__PURE__*/_react.default.createElement("h3", null, "john deo"), /*#__PURE__*/_react.default.createElement("div", {
    className: "stars"
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faStar
  }), /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faStar
  }), /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faStar
  }), /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faStar
  }), /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faStarHalfAlt
  })))), /*#__PURE__*/_react.default.createElement(_react2.SwiperSlide, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "box"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "image/pic-2.png",
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("p", null, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis maxime inventore illo nemo cupiditate quam eligendi nihil sunt ullam, laudantium, earum in nam provident quaerat exercitationem?"), /*#__PURE__*/_react.default.createElement("h3", null, "john deo"), /*#__PURE__*/_react.default.createElement("div", {
    className: "stars"
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faStar
  }), /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faStar
  }), /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faStar
  }), /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faStar
  }), /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faStarHalfAlt
  })))), /*#__PURE__*/_react.default.createElement(_react2.SwiperSlide, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "box"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "image/pic-3.png",
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("p", null, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis maxime inventore illo nemo cupiditate quam eligendi nihil sunt ullam, laudantium, earum in nam provident quaerat exercitationem?"), /*#__PURE__*/_react.default.createElement("h3", null, "john deo"), /*#__PURE__*/_react.default.createElement("div", {
    className: "stars"
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faStar
  }), /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faStar
  }), /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faStar
  }), /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faStar
  }), /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faStarHalfAlt
  })))), /*#__PURE__*/_react.default.createElement(_react2.SwiperSlide, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "box"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "image/pic-4.png",
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("p", null, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis maxime inventore illo nemo cupiditate quam eligendi nihil sunt ullam, laudantium, earum in nam provident quaerat exercitationem?"), /*#__PURE__*/_react.default.createElement("h3", null, "john deo"), /*#__PURE__*/_react.default.createElement("div", {
    className: "stars"
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faStar
  }), /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faStar
  }), /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faStar
  }), /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faStar
  }), /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faStarHalfAlt
  })))))));
}