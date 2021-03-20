/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkultimate_tic_tac_toe"] = self["webpackChunkultimate_tic_tac_toe"] || []).push([["src_Game_js"],{

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ \"./src/App.css\");\n/* harmony import */ var _Header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.js */ \"./src/Header.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\nfunction GameView(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"w-screen h-screen\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Header_js__WEBPACK_IMPORTED_MODULE_2__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"flex flex-col text-center h-full w-full\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"flex-grow\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"flex flex-row text-center w-full\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"flex-grow\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"w-90 h-90\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Game, {\n    socket: props.socket,\n    user: props.user\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"flex-grow\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"flex-grow\"\n  })));\n}\n\nvar Game = /*#__PURE__*/function (_React$Component) {\n  _inherits(Game, _React$Component);\n\n  var _super = _createSuper(Game);\n\n  function Game(props) {\n    var _this;\n\n    _classCallCheck(this, Game);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      board: [['X', 'X', 'X', '', '', '', '', '', ''], ['X', 'X', 'X', '', '', '', '', '', ''], ['X', 'X', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '']],\n      boardStatus: ['X', 'X', '', '', '', '', '', '', ''],\n      active: 10,\n      currentTurn: 'X',\n      msg: 'It\\'s X\\'s Turn'\n    };\n    _this.doneHandler = _this.doneHandler.bind(_assertThisInitialized(_this));\n\n    _this.props.socket.on('update', function (raw) {\n      var state = JSON.parse(raw);\n      this.setState(state);\n    }.bind(_assertThisInitialized(_this)));\n\n    return _this;\n  }\n\n  _createClass(Game, [{\n    key: \"isFull\",\n    value: function isFull() {\n      return !(this.state.boardStatus.filter(function (item) {\n        return item === 'f';\n      }).length === 9);\n    }\n  }, {\n    key: \"hasWon\",\n    value: function hasWon() {\n      if (this.state.boardStatus[0] === this.state.boardStatus[1] && this.state.boardStatus[0] === this.state.boardStatus[2]) {\n        return this.state.boardStatus[0];\n      } else if (this.state.boardStatus[3] === this.state.boardStatus[4] && this.state.boardStatus[3] === this.state.boardStatus[5]) {\n        return this.state.boardStatus[3];\n      } else if (this.state.boardStatus[6] === this.state.boardStatus[7] && this.state.boardStatus[6] === this.state.boardStatus[8]) {\n        return this.state.boardStatus[6];\n      } else if (this.state.boardStatus[0] === this.state.boardStatus[3] && this.state.boardStatus[0] === this.state.boardStatus[6]) {\n        return this.state.boardStatus[0];\n      } else if (this.state.boardStatus[1] === this.state.boardStatus[4] && this.state.boardStatus[1] === this.state.boardStatus[7]) {\n        return this.state.boardStatus[1];\n      } else if (this.state.boardStatus[2] === this.state.boardStatus[5] && this.state.boardStatus[2] === this.state.boardStatus[8]) {\n        return this.state.boardStatus[2];\n      } else if (this.state.boardStatus[0] === this.state.boardStatus[4] && this.state.boardStatus[0] === this.state.boardStatus[8]) {\n        return this.state.boardStatus[0];\n      } else if (this.state.boardStatus[2] === this.state.boardStatus[4] && this.state.boardStatus[2] === this.state.boardStatus[6]) {\n        return this.state.boardStatus[2];\n      } else {\n        return 'f';\n      }\n    }\n  }, {\n    key: \"doneHandler\",\n    value: function doneHandler(board, index, winner, open, boardData) {\n      console.log(board, index, winner, open, boardData);\n      var state = this.state;\n      state.board[board] = boardData;\n\n      if (open === false && winner !== '') {\n        state.boardStatus[board] = winner;\n      } else if (open === false) {\n        state.boardStatus[board] = 'f';\n      }\n\n      if (state.currentTurn === 'X') {\n        state.currentTurn = 'O';\n      } else {\n        state.currentTurn = 'X';\n      }\n\n      state.msg = \"It's \".concat(state.currentTurn, \"'s Turn\");\n      state.active = index;\n\n      if (state.boardStatus[index] !== '') {\n        state.active = 10;\n      }\n\n      if (this.hasWon(state) !== '' && this.hasWon(state) !== 'f') {\n        state.active = 9;\n        state.msg = \"The winner is \".concat(this.hasWon(state));\n      } else if (this.isFull(state)) {\n        state.active = 9;\n        state.msg = 'Tie Game';\n      }\n\n      this.setState(state);\n      this.props.socket.emit('update', JSON.stringify(this.state));\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var board = [];\n      this.state.board.forEach(function (element, index) {\n        board.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Board, {\n          key: index,\n          index: index,\n          active: (_this2.state.active === index || _this2.state.active === 10) && _this2.state.currentTurn === _this2.props.user,\n          currentTurn: _this2.state.currentTurn,\n          doneHandler: _this2.doneHandler,\n          board: element\n        }));\n      });\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"w-full h-full border-2 border-gray-800 flex flex-row flex-wrap\"\n      }, board, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", {\n        className: \"text-2xl text-center font-bold w-full my-2\"\n      }, this.state.msg));\n    }\n  }]);\n\n  return Game;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\nvar Board = /*#__PURE__*/function (_React$Component2) {\n  _inherits(Board, _React$Component2);\n\n  var _super2 = _createSuper(Board);\n\n  function Board(props) {\n    var _this3;\n\n    _classCallCheck(this, Board);\n\n    _this3 = _super2.call(this, props);\n    _this3.state = {\n      board: props.board\n    };\n    _this3.state.open = !_this3.isFull() && _this3.hasWon() === '';\n    _this3.handleClick = _this3.handleClick.bind(_assertThisInitialized(_this3));\n    return _this3;\n  }\n\n  _createClass(Board, [{\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate(prevProps) {\n      if (this.props.board !== prevProps.board) {\n        this.setState({\n          board: this.props.board\n        });\n      }\n    }\n  }, {\n    key: \"isFull\",\n    value: function isFull() {\n      return this.state.board.filter(function (item) {\n        return item === '';\n      }).length === 0;\n    }\n  }, {\n    key: \"hasWon\",\n    value: function hasWon() {\n      if (this.state.board[0] !== '' && this.state.board[0] === this.state.board[1] && this.state.board[0] === this.state.board[2]) {\n        return this.state.board[0];\n      } else if (this.state.board[3] !== '' && this.state.board[3] === this.state.board[4] && this.state.board[3] === this.state.board[5]) {\n        return this.state.board[3];\n      } else if (this.state.board[6] !== '' && this.state.board[6] === this.state.board[7] && this.state.board[6] === this.state.board[8]) {\n        return this.state.board[6];\n      } else if (this.state.board[0] !== '' && this.state.board[0] === this.state.board[3] && this.state.board[0] === this.state.board[6]) {\n        return this.state.board[0];\n      } else if (this.state.board[1] !== '' && this.state.board[1] === this.state.board[4] && this.state.board[1] === this.state.board[7]) {\n        return this.state.board[1];\n      } else if (this.state.board[2] !== '' && this.state.board[2] === this.state.board[5] && this.state.board[2] === this.state.board[8]) {\n        return this.state.board[2];\n      } else if (this.state.board[0] !== '' && this.state.board[0] === this.state.board[4] && this.state.board[0] === this.state.board[8]) {\n        return this.state.board[0];\n      } else if (this.state.board[2] !== '' && this.state.board[2] === this.state.board[4] && this.state.board[2] === this.state.board[6]) {\n        return this.state.board[2];\n      } else {\n        return '';\n      }\n    }\n  }, {\n    key: \"handleClick\",\n    value: function handleClick(e) {\n      if (this.props.active && this.state.open && this.state.board[e] === '') {\n        var state = this.state;\n        state.board[e] = this.props.currentTurn;\n        state.open = !this.isFull() && this.hasWon() === '';\n        this.setState(state);\n        this.props.doneHandler(this.props.index, e, this.hasWon(), state.open, state.board);\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this4 = this;\n\n      var board = [];\n      this.state.board.forEach(function (element, index) {\n        board.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Square, {\n          index: index,\n          key: index,\n          onClick: _this4.handleClick,\n          value: element\n        }));\n      });\n      var cover;\n\n      if (this.hasWon() !== '') {\n        cover = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n          className: \"w-full h-full absolute top-0 left-0 flex flex-col\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n          className: \"flex-grow\"\n        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n          className: \"text-center cursor-default text-8xl leading-none align-middle opacity-70\"\n        }, this.hasWon()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n          className: \"flex-grow\"\n        }));\n      }\n\n      var classes = \"w-1/3 h-1/3 border-2 border-gray-800 flex-board relative transition-all duration-200 highlight-default\";\n\n      if (this.isFull() || this.hasWon() !== '') {\n        classes = classes + \" bg-gray-300\";\n      }\n\n      if (this.props.active === true && this.state.open) {\n        classes = classes + \" highlight\";\n      }\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: classes\n      }, board, cover);\n    }\n  }]);\n\n  return Board;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\nfunction Square(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"w-1/3 h-1/3 border border-gray-400 flex flex-col float-left\",\n    onClick: function onClick(e) {\n      props.onClick(props.index);\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"flex-grow\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n    className: \"text-center cursor-default leading-none align-middle text-3xl\"\n  }, props.value), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"flex-grow\"\n  }));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameView);\n\n//# sourceURL=webpack://ultimate-tic-tac-toe/./src/Game.js?");

/***/ })

}]);