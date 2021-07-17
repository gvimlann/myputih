module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		8: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + "." + {"9":"87fa6b26658d4d8f25aa"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "AuoD":
/***/ (function(module, exports) {

module.exports = require("react-leaflet");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "FctI":
/***/ (function(module, exports) {

module.exports = require("next-auth/client");

/***/ }),

/***/ "M1sZ":
/***/ (function(module, exports) {

module.exports = require("@heroicons/react/outline");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ pages_Home; });
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@heroicons/react/outline"
var outline_ = __webpack_require__("M1sZ");

// EXTERNAL MODULE: external "next-auth/client"
var client_ = __webpack_require__("FctI");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./components/Header.js



function Header({
  signedIn,
  googleSignOut,
  username
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: 'sticky top-0 z-50 mb-2 bg-gray-200 flex items-center justify-between p-2 lg:px-5 shadow-md',
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
      className: 'text-2xl',
      children: "MyPutih App"
    }), signedIn && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "flex items-center",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("h1", {
        className: "text-md mr-5",
        children: ["Hey, ", username]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        onClick: googleSignOut,
        className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
        type: "button",
        children: "Sign Out"
      })]
    })]
  });
}

/* harmony default export */ var components_Header = (Header);
// CONCATENATED MODULE: ./components/Navbar.js



function Navbar({
  signedIn,
  googleSignIn,
  toggleModal,
  toggleErrorModal,
  sendDataToParent,
  locationSwitchedOn
}) {
  const isActive = true;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: `${isActive ? 'show ' : 'hidden '}block fixed inset-x-0 bottom-0 z-50 shadow`,
    children: [signedIn && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: 'flex space-x-4 justify-between',
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        onClick: () => {
          // console.log('location switch on: ', locationSwitchedOn);
          if (locationSwitchedOn) {
            sendDataToParent(true);
            toggleModal();
          } else {
            toggleErrorModal();
          }
        },
        href: "#",
        className: 'flex-1 block rounded-full bg-red-600 hover:bg-red-400 justify-center text-center p-5 mb-1',
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          className: 'block text-white text-lg',
          children: "Need Help"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        onClick: () => {
          // console.log('location switch on: ', locationSwitchedOn);
          if (locationSwitchedOn) {
            sendDataToParent(false);
            toggleModal();
          } else {
            toggleErrorModal();
          }
        },
        href: "#",
        className: 'flex-1 block rounded-full bg-green-600 hover:bg-green-400 justify-center text-center p-5 mb-1',
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          className: 'block text-white text-lg',
          children: "Give Help"
        })
      })]
    }), !signedIn && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: 'flex space-x-4 justify-between',
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        onClick: () => googleSignIn(),
        href: "#",
        className: 'flex-1 block rounded-full bg-red-500 hover:bg-red-300 justify-center text-center p-5 mb-1',
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          className: 'block text-white text-lg',
          children: "Sign In With Google"
        })
      })
    })]
  });
}

/* harmony default export */ var components_Navbar = (Navbar);
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// CONCATENATED MODULE: ./components/Map/index.js

const Map = dynamic_default()(() => __webpack_require__.e(/* import() */ 9).then(__webpack_require__.bind(null, "j1/2")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("j1/2")],
    modules: ['./Map']
  }
});
/* harmony default export */ var components_Map = (Map);
// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__("vRNQ");
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);

// EXTERNAL MODULE: external "react-number-format"
var external_react_number_format_ = __webpack_require__("uM63");
var external_react_number_format_default = /*#__PURE__*/__webpack_require__.n(external_react_number_format_);

// CONCATENATED MODULE: ./pages/index.js




function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const DEFAULT_CENTER = [3.315834, 101.559201];

async function getData() {
  external_axios_default.a.get(`http://localhost:8080/api/hello`).then(function (response) {// console.log(response.data);
  }).catch(function (error) {// console.log(error);
  });
  return 0;
}

class pages_Home extends external_react_default.a.Component {
  constructor(props) {
    var _props$session;

    super(props);

    _defineProperty(this, "sendOptionToParent", data => {
      this.setState({
        needHelp: data
      });
    });

    _defineProperty(this, "toggleModal", () => {
      // const body = document.querySelector('body');
      const modal = document.querySelector('.modal');
      modal.classList.toggle('opacity-0');
      modal.classList.toggle('pointer-events-none'); // body.classList.toggle('modal-active');

      this.setState({
        username: this.session.user.name,
        contactNumber: 0,
        food: false,
        groceries: false,
        money: false,
        medical: false,
        others: false,
        othersDetail: ''
      });
    });

    _defineProperty(this, "toggleErrorModal", () => {
      // const body = document.querySelector('body');
      const errorModal = document.querySelector('.error-modal');
      errorModal.classList.toggle('opacity-0');
      errorModal.classList.toggle('pointer-events-none'); // body.classList.toggle('modal-active');
    });

    _defineProperty(this, "handleSubmit", e => {
      e.preventDefault();
      this.toggleModal();
      console.log('info: ', this.state);
    });

    this.session = props.session;
    this.state = {
      username: (_props$session = props.session) === null || _props$session === void 0 ? void 0 : _props$session.user.name,
      contactNumber: 0,
      food: false,
      groceries: false,
      money: false,
      medical: false,
      others: false,
      othersDetail: '',
      needHelp: false,
      userLocation: [0, 0],
      locationSwitchedOn: false
    };
    this.toggleModal.bind(this);
    this.sendOptionToParent.bind(this);
    this.toggleErrorModal.bind(this);
    this.handleSubmit.bind(this);
  } // const [session, loading] = useSession();


  componentDidMount() {
    var _this$session;

    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        userLocation: [position.coords.latitude, position.coords.longitude]
      });
      this.setState({
        locationSwitchedOn: true
      });
      console.log('Location is on');
    }, error => {
      this.setState({
        error: "We can't get your location!"
      });
      this.setState({
        locationSwitchedOn: false
      });
      console.log('Location is off');
    }); // user is logged in

    if (((_this$session = this.session) === null || _this$session === void 0 ? void 0 : _this$session.user) === undefined) {
      var _this$session2;

      let user = (_this$session2 = this.session) === null || _this$session2 === void 0 ? void 0 : _this$session2.user; // axios
      // 	.get(`http://localhost:8080/api/hello`)
      // 	.then(function (response) {
      // 		alert();
      // 	})
      // 	.catch(function (error) {
      // 		console.log(error);
      // 	});

      getData();
    }
  }

  render() {
    var _this$session3;

    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(head_default.a, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
          children: "MyPutih"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("main", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Header, {
          signedIn: this.session,
          username: (_this$session3 = this.session) === null || _this$session3 === void 0 ? void 0 : _this$session3.user.name,
          googleSignOut: client_["signOut"]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Navbar, {
          signedIn: this.session,
          googleSignIn: client_["signIn"],
          toggleModal: this.toggleModal,
          toggleErrorModal: this.toggleErrorModal,
          sendDataToParent: this.sendOptionToParent,
          locationSwitchedOn: this.state.locationSwitchedOn
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "error-modal z-50 opacity-0 pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            onClick: this.toggleErrorModal,
            className: "modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "modal-container bg-white md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto w-full max-w-xs p-5",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "flex justify-between items-center p-2 ml-2 mr-2",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                className: "text-2xl font-bold",
                children: "Location Not Found"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                onClick: this.toggleErrorModal,
                className: "modal-close cursor-pointer z-50",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(outline_["XIcon"], {
                  className: "w-5 h-5"
                })
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
              children: "Please switch on your location to access these features"
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "modal z-50 opacity-0 pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            onClick: this.toggleModal,
            className: "modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "modal-container bg-white md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto w-full max-w-xs",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "flex justify-between items-center p-2 ml-2 mr-2",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                className: "text-2xl font-bold",
                children: this.state.needHelp ? 'Need Help' : 'Give Help'
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                onClick: this.toggleModal,
                className: "modal-close cursor-pointer z-50",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(outline_["XIcon"], {
                  className: "w-5 h-5"
                })
              })]
            }), this.state.needHelp && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
              onSubmit: this.handleSubmit,
              className: "bg-white shadow-md rounded px-8 pt-6 pb-8",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "mb-4",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
                  className: "block text-gray-700 text-sm font-bold mb-2",
                  htmlFor: "name",
                  children: "Name"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                  className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                  id: "name",
                  type: "text",
                  value: this.state.username,
                  placeholder: "Your Name",
                  onChange: e => {
                    console.log('name: ', e.target.value);
                    this.setState({
                      username: e.target.value
                    });
                  }
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "mb-4",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
                  className: "block text-gray-700 text-sm font-bold mb-2",
                  htmlFor: "contactNumber",
                  children: "Contact Number"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                  className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                  id: "contactNumber",
                  type: "number",
                  value: this.state.contactNumber,
                  placeholder: "Your Contact Number",
                  onChange: e => this.setState({
                    contactNumber: e.target.value
                  })
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "mb-4",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
                  className: "block text-gray-700 text-sm font-bold mb-2",
                  htmlFor: "contactNumber",
                  children: "What Do You Need"
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "mt-2",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
                      className: "inline-flex items-center",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                        type: "checkbox",
                        className: "form-checkbox h-6 w-6 border-2 border-gray-300",
                        onChange: e => {
                          this.setState({
                            food: e.target.checked
                          });
                        }
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                        className: "ml-2",
                        children: "Food"
                      })]
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
                      className: "inline-flex items-center",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                        type: "checkbox",
                        className: "form-checkbox h-6 w-6 border-2 border-gray-300",
                        onChange: e => {
                          this.setState({
                            groceries: e.target.checked
                          });
                        }
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                        className: "ml-2",
                        children: "Groceries"
                      })]
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
                      className: "inline-flex items-center",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                        type: "checkbox",
                        className: "form-checkbox h-6 w-6 border-2 border-gray-300",
                        onChange: e => {
                          this.setState({
                            money: e.target.checked
                          });
                        }
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                        className: "ml-2",
                        children: "Money"
                      })]
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
                      className: "inline-flex items-center",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                        type: "checkbox",
                        className: "form-checkbox h-6 w-6 border-2 border-gray-300",
                        onChange: e => {
                          this.setState({
                            medical: e.target.checked
                          });
                        }
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                        className: "ml-2",
                        children: "Medical"
                      })]
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
                      className: "inline-flex items-center",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                        type: "checkbox",
                        className: "form-checkbox h-6 w-6 border-2 border-gray-300",
                        onChange: e => {
                          this.setState({
                            others: e.target.checked
                          });
                        }
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                        className: "ml-2",
                        children: "Others"
                      })]
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                      type: "text",
                      className: `${this.state.others ? 'show' : 'hidden'} form-input mt-1 block w-full border-2`,
                      placeholder: "Please state your other needs",
                      onChange: e => {
                        this.setState({
                          othersDetail: e.target.value
                        });
                      }
                    })
                  })]
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "mb-4",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
                  className: "block text-gray-700 text-sm font-bold mb-2",
                  htmlFor: "coordinates",
                  children: "Your Coordinates"
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
                  className: "block text-gray-500 text-sm font-medium mb-2",
                  htmlFor: "coordinates",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_number_format_default.a, {
                    value: this.state.userLocation[0],
                    displayType: 'text',
                    decimalScale: 5
                  }), ` , `, /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_number_format_default.a, {
                    value: this.state.userLocation[1],
                    displayType: 'text',
                    decimalScale: 5
                  })]
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "flex items-center justify-between",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
                  className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
                  type: "submit",
                  children: "Submit"
                })
              })]
            }), !this.state.needHelp && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
              onSubmit: this.handleSubmit,
              className: "bg-white shadow-md rounded px-8 pt-6 pb-8",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "mb-4",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
                  className: "block text-gray-700 text-sm font-bold mb-2",
                  htmlFor: "name",
                  children: "Name"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                  className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                  id: "name",
                  type: "text",
                  value: this.state.username,
                  placeholder: "Your Name",
                  onChange: e => {
                    this.setState({
                      username: e.target.value
                    });
                  }
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "mb-4",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
                  className: "block text-gray-700 text-sm font-bold mb-2",
                  htmlFor: "contactNumber",
                  children: "Contact Number"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                  className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                  id: "contactNumber",
                  type: "number",
                  value: this.state.contactNumber,
                  placeholder: "Your Contact Number",
                  onChange: e => this.setState({
                    contactNumber: e.target.value
                  })
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "mb-4",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
                  className: "block text-gray-700 text-sm font-bold mb-2",
                  htmlFor: "contactNumber",
                  children: "What Do You Offer"
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "mt-2",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
                      className: "inline-flex items-center",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                        type: "checkbox",
                        className: "form-checkbox h-6 w-6 border-2 border-gray-300",
                        onChange: e => {
                          this.setState({
                            food: e.target.checked
                          });
                        }
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                        className: "ml-2",
                        children: "Food"
                      })]
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
                      className: "inline-flex items-center",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                        type: "checkbox",
                        className: "form-checkbox h-6 w-6 border-2 border-gray-300",
                        onChange: e => {
                          this.setState({
                            groceries: e.target.checked
                          });
                        }
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                        className: "ml-2",
                        children: "Groceries"
                      })]
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
                      className: "inline-flex items-center",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                        type: "checkbox",
                        className: "form-checkbox h-6 w-6 border-2 border-gray-300",
                        onChange: e => {
                          this.setState({
                            money: e.target.checked
                          });
                        }
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                        className: "ml-2",
                        children: "Money"
                      })]
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
                      className: "inline-flex items-center",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                        type: "checkbox",
                        className: "form-checkbox h-6 w-6 border-2 border-gray-300",
                        onChange: e => {
                          this.setState({
                            medical: e.target.checked
                          });
                        }
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                        className: "ml-2",
                        children: "Medical"
                      })]
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
                      className: "inline-flex items-center",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                        type: "checkbox",
                        className: "form-checkbox h-6 w-6 border-2 border-gray-300",
                        onChange: e => {
                          this.setState({
                            others: e.target.checked
                          });
                        }
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                        className: "ml-2",
                        children: "Others"
                      })]
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                      type: "text",
                      className: `${this.state.others ? 'show' : 'hidden'} form-input mt-1 block w-full border-2`,
                      placeholder: "Please state other things you are helping with",
                      onChange: e => {
                        this.setState({
                          othersDetail: e.target.value
                        });
                      }
                    })
                  })]
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "mb-4",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
                  className: "block text-gray-700 text-sm font-bold mb-2",
                  htmlFor: "coordinates",
                  children: "Your Coordinates"
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
                  className: "block text-gray-500 text-sm font-medium mb-2",
                  htmlFor: "coordinates",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_number_format_default.a, {
                    value: this.state.userLocation[0],
                    displayType: 'text',
                    decimalScale: 5
                  }), ` , `, /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_number_format_default.a, {
                    value: this.state.userLocation[1],
                    displayType: 'text',
                    decimalScale: 5
                  })]
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "flex items-center justify-between",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
                  className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
                  type: "submit",
                  children: "Submit"
                })
              })]
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Map, {
          className: Home_module_default.a.homeMap,
          center: this.state.userLocation,
          zoom: 15,
          children: ({
            TileLayer,
            Marker,
            Popup
          }) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(TileLayer, {
              url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
              attribution: "\xA9 <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Marker, {
              position: this.state.userLocation,
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Popup, {
                children: ["A pretty CSS3 popup. ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), " Easily customizable.", /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  target: "_blank",
                  href: "https://www.google.com",
                  children: "Google"
                })]
              })
            })]
          })
        })]
      })]
    });
  }

}
const getServerSideProps = async context => {
  const session = await Object(client_["getSession"])(context);
  return {
    props: {
      session
    }
  };
};

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "hgx0":
/***/ (function(module, exports) {

module.exports = require("leaflet");

/***/ }),

/***/ "uM63":
/***/ (function(module, exports) {

module.exports = require("react-number-format");

/***/ }),

/***/ "vRNQ":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Home_container__1EcsU",
	"main": "Home_main__1x8gC",
	"footer": "Home_footer__1WdhD",
	"title": "Home_title__3DjR7",
	"description": "Home_description__17Z4F",
	"code": "Home_code__axx2Y",
	"grid": "Home_grid__2Ei2F",
	"card": "Home_card__2SdtB",
	"logo": "Home_logo__1YbrH",
	"homeMap": "Home_homeMap__36czY"
};


/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });