"use strict";
(self["webpackChunkhannahvanderhaeghen"] = self["webpackChunkhannahvanderhaeghen"] || []).push([["grephic-log-component"],{

/***/ "./src/scripts/components/grephic-log/index.js":
/*!*****************************************************!*\
  !*** ./src/scripts/components/grephic-log/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GrephicLog)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var GrephicLog = /*#__PURE__*/function () {
  function GrephicLog() {
    _classCallCheck(this, GrephicLog);
    this.init();
  }
  _createClass(GrephicLog, [{
    key: "init",
    value: function init() {
      this.log();
    }
  }, {
    key: "log",
    value: function log() {
      // console.clear();
      console.log('\nspiced up by grephic.be\nhttps://pgm-emmavanderhaeghen.github.io/grephic\n ');
    }
  }]);
  return GrephicLog;
}();


/***/ })

}]);