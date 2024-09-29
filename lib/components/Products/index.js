"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Products;
var _react = _interopRequireDefault(require("react"));
require("./Products.css");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _react2 = require("swiper/react");
var _swiper = _interopRequireWildcard(require("swiper"));
require("swiper/swiper.min.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// Products

function Products() {
  _swiper.default.use([_swiper.Autoplay]);
  return /*#__PURE__*/_react.default.createElement("section", {
    className: "products",
    id: "products"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "heading"
  }, "our", ' ', /*#__PURE__*/_react.default.createElement("span", null, "products")), /*#__PURE__*/_react.default.createElement("div", {
    className: "products-slider slider"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "wrapper swiper-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_react2.Swiper, {
    loop: true,
    spaceBetween: 20,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false
    },
    slidesPerView: 1,
    pagination: {
      clickable: true
    },
    centeredSlides: true,
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
    },
    style: {
      padding: '1rem'
    }
  }, /*#__PURE__*/_react.default.createElement(_react2.SwiperSlide, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "box"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "image/product-1.png",
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("h3", null, "fresh orange"), /*#__PURE__*/_react.default.createElement("div", {
    className: "price"
  }, "$4.99/ -- 10.99/-"), /*#__PURE__*/_react.default.createElement("div", {
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
  })), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "btn"
  }, "add to cart"))), /*#__PURE__*/_react.default.createElement(_react2.SwiperSlide, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "box"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "image/product-2.png",
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("h3", null, "fresh onion"), /*#__PURE__*/_react.default.createElement("div", {
    className: "price"
  }, "$4.99/ -- 10.99/-"), /*#__PURE__*/_react.default.createElement("div", {
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
  })), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "btn"
  }, "add to cart"))), /*#__PURE__*/_react.default.createElement(_react2.SwiperSlide, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "box"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "image/product-3.png",
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("h3", null, "fresh meat"), /*#__PURE__*/_react.default.createElement("div", {
    className: "price"
  }, "$4.99/ -- 10.99/-"), /*#__PURE__*/_react.default.createElement("div", {
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
  })), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "btn"
  }, "add to cart"))), /*#__PURE__*/_react.default.createElement(_react2.SwiperSlide, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "box"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "image/product-4.png",
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("h3", null, "fresh cabage"), /*#__PURE__*/_react.default.createElement("div", {
    className: "price"
  }, "$4.99/ -- 10.99/-"), /*#__PURE__*/_react.default.createElement("div", {
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
  })), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "btn"
  }, "add to cart")))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "products-slider"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "wrapper swiper-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_react2.Swiper, {
    loop: true,
    spaceBetween: 20,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false
    },
    slidesPerView: 1,
    pagination: {
      clickable: true
    },
    centeredSlides: true,
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
    },
    style: {
      padding: '1rem'
    }
  }, /*#__PURE__*/_react.default.createElement(_react2.SwiperSlide, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "box"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "image/product-5.png",
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("h3", null, "fresh potato"), /*#__PURE__*/_react.default.createElement("div", {
    className: "price"
  }, "$4.99/ -- 10.99/-"), /*#__PURE__*/_react.default.createElement("div", {
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
  })), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "btn"
  }, "add to cart"))), /*#__PURE__*/_react.default.createElement(_react2.SwiperSlide, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "box"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "image/product-6.png",
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("h3", null, "fresh avocado"), /*#__PURE__*/_react.default.createElement("div", {
    className: "price"
  }, "$4.99/ -- 10.99/-"), /*#__PURE__*/_react.default.createElement("div", {
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
  })), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "btn"
  }, "add to cart"))), /*#__PURE__*/_react.default.createElement(_react2.SwiperSlide, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "box"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "image/product-7.png",
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("h3", null, "fresh carrot"), /*#__PURE__*/_react.default.createElement("div", {
    className: "price"
  }, "$4.99/ -- 10.99/-"), /*#__PURE__*/_react.default.createElement("div", {
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
  })), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "btn"
  }, "add to cart"))), /*#__PURE__*/_react.default.createElement(_react2.SwiperSlide, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "box"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "image/product-8.png",
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("h3", null, "green lemon"), /*#__PURE__*/_react.default.createElement("div", {
    className: "price"
  }, "$4.99/ -- 10.99/-"), /*#__PURE__*/_react.default.createElement("div", {
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
  })), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "btn"
  }, "add to cart")))))));
}