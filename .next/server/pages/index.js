module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		10: 0
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
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + "." + {"11":"fcd56c9ef16350bb93ac"}[chunkId] + ".js");
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "A04j":
/***/ (function(module, exports) {

module.exports = require("react-leaflet-markercluster");

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
    className: 'sticky top-0 z-10 bg-gray-200 flex items-center justify-between p-2 lg:px-5 shadow-md',
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
        className: 'flex-1 block rounded-full bg-red-600 hover:bg-red-400 justify-center text-center p-5 mb-2',
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
        className: 'flex-1 block rounded-full bg-green-600 hover:bg-green-400 justify-center text-center p-5 mb-2',
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

const Map = dynamic_default()(() => __webpack_require__.e(/* import() */ 11).then(__webpack_require__.bind(null, "j1/2")), {
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











const DEFAULT_CENTER = [4.175975, 102.120976];

async function createOrUpdateData(user, state) {
  external_axios_default.a.post(`/api/info/createorupdate`, {
    name: user.name,
    email: user.email,
    contactNumber: state.contactNumber,
    food: state.food,
    groceries: state.groceries,
    money: state.money,
    medical: state.medical,
    others: state.others,
    needHelp: state.needHelp,
    location: state.userLocation,
    othersNeed: state.othersNeed
  }).then(res => {// console.log(res);
    // getAllInfo();
  });
} // async function getAllInfo() {
// 	axios.get(`/api/info/get`).then((res) => {
// 		return res.data;
// 	});
// }


class pages_Home extends external_react_default.a.Component {
  constructor(props) {
    var _props$session;

    super(props);

    _defineProperty(this, "sendOptionToParent", data => {
      this.setState({
        needHelp: data
      });
    });

    _defineProperty(this, "checkUserIfExistsAndGetData", async user => {
      external_axios_default.a.post(`/api/info/get`, {
        email: user.email,
        name: user.name
      }).then(res => {
        console.log(res.data);
        this.setState({
          allPointsInfo: res.data
        });
      });
    });

    _defineProperty(this, "toggleModal", () => {
      // const body = document.querySelector('body');
      const modal = document.querySelector('.modal');
      modal.classList.toggle('opacity-0');
      modal.classList.toggle('pointer-events-none'); // body.classList.toggle('modal-active');

      this.setState({
        username: this.session.user.name,
        contactNumber: '',
        food: false,
        groceries: false,
        money: false,
        medical: false,
        others: false,
        othersNeed: ''
      });
    });

    _defineProperty(this, "toggleInfoModal", props => {
      // console.log(typeof props === 'number');
      const errorModal = document.querySelector('.info-modal');
      errorModal.classList.toggle('opacity-0');
      errorModal.classList.toggle('pointer-events-none');
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
      createOrUpdateData(this.session.user, this.state);
      this.setState({
        allPointsInfo: this.state.allPointsInfo.concat({
          contactNumber: this.state.contactNumber,
          food: this.state.food,
          groceries: this.state.groceries,
          money: this.state.money,
          medical: this.state.medical,
          others: this.state.others,
          needHelp: this.state.needHelp,
          latitude: this.state.userLocation[0],
          longitude: this.state.userLocation[1],
          othersNeed: this.state.othersNeed
        })
      });
      console.log('info: ', this.state);
    });

    this.session = props.session;
    this.state = {
      username: (_props$session = props.session) === null || _props$session === void 0 ? void 0 : _props$session.user.name,
      contactNumber: '',
      food: false,
      groceries: false,
      money: false,
      medical: false,
      others: false,
      othersNeed: '',
      needHelp: false,
      userLocation: DEFAULT_CENTER,
      locationSwitchedOn: false,
      mapZoom: 8,
      allPointsInfo: []
    };
    this.toggleModal.bind(this);
    this.toggleInfoModal.bind(this);
    this.sendOptionToParent.bind(this);
    this.toggleErrorModal.bind(this);
    this.handleSubmit.bind(this); // this.getAllInfo.bind(this);

    this.checkUserIfExistsAndGetData.bind(this);
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
      this.setState({
        mapZoom: 15
      });
    }, error => {
      this.setState({
        error: "We can't get your location!"
      });
      this.setState({
        locationSwitchedOn: false
      });
      console.log('Location is off');
    }); // user is logged in

    if (((_this$session = this.session) === null || _this$session === void 0 ? void 0 : _this$session.user) !== undefined) {
      let user = this.session.user;
      this.checkUserIfExistsAndGetData(user); // this.getAllInfo();
      // this.setState({ allPointsInfo: getAllInfo() });
      // console.log('all info');
      // console.log(this.state.allPointsInfo);
    }
  }

  render() {
    var _this$session2;

    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(head_default.a, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
          children: "MyPutih"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("main", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Header, {
          signedIn: this.session,
          username: (_this$session2 = this.session) === null || _this$session2 === void 0 ? void 0 : _this$session2.user.name,
          googleSignOut: client_["signOut"]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Navbar, {
          signedIn: this.session,
          googleSignIn: client_["signIn"],
          toggleModal: this.toggleModal,
          toggleErrorModal: this.toggleErrorModal,
          sendDataToParent: this.sendOptionToParent,
          locationSwitchedOn: this.state.locationSwitchedOn
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          className: "block fixed z-20 shadow mt-2 mr-2 p-5 bg-gray-500 hover:bg-gray-400 text-white font-bold rounded-full right-0",
          children: "NGO"
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
                          othersNeed: e.target.value
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
                          othersNeed: e.target.value
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
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "info-modal z-50 opacity-0 pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            onClick: this.toggleInfoModal,
            className: "modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "modal-container bg-white md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto w-full max-w-xs",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "flex justify-between items-center p-2 ml-2 mr-2",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                className: "text-2xl font-bold",
                children: "Person Information"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                onClick: this.toggleInfoModal,
                className: "modal-close cursor-pointer z-50",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(outline_["XIcon"], {
                  className: "w-5 h-5"
                })
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
              className: "bg-white shadow-md rounded px-8 pt-6 pb-8",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "mb-4",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
                  className: "block text-gray-700 text-sm font-bold mb-2",
                  htmlFor: "name",
                  children: "Name"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
                  className: "block text-gray-500 text-medium font-medium mb-2",
                  htmlFor: "name",
                  children: "Username"
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "mb-4",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
                  className: "block text-gray-700 text-sm font-bold mb-2",
                  htmlFor: "contactNumber",
                  children: "Contact Number"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
                  className: "block text-gray-500 text-medium font-medium mb-2",
                  htmlFor: "name",
                  children: "Contact Number"
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "mb-4",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
                  className: "block text-gray-700 text-sm font-bold mb-2",
                  htmlFor: "contactNumber",
                  children: "Items Needed"
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "mt-2",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
                      className: "inline-flex items-center",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                        type: "checkbox",
                        className: "form-checkbox h-6 w-6 border-2 border-gray-300",
                        checked: true,
                        disabled: true
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                        className: "ml-2 text-gray-500 text-medium font-medium mb-2",
                        children: "Food"
                      })]
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
                      className: "inline-flex items-center",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                        type: "checkbox",
                        className: "form-checkbox h-6 w-6 border-2 border-gray-300",
                        disabled: true
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                        className: "ml-2 text-gray-500 text-medium font-medium mb-2",
                        children: "Groceries"
                      })]
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
                      className: "inline-flex items-center",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                        type: "checkbox",
                        className: "form-checkbox h-6 w-6 border-2 border-gray-300",
                        disabled: true
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                        className: "ml-2 text-gray-500 text-medium font-medium mb-2",
                        children: "Money"
                      })]
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
                      className: "inline-flex items-center",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                        type: "checkbox",
                        className: "form-checkbox h-6 w-6 border-2 border-gray-300",
                        disabled: true
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                        className: "ml-2 text-gray-500 text-medium font-medium mb-2",
                        children: "Medical"
                      })]
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
                      className: "inline-flex items-center",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                        type: "checkbox",
                        className: "form-checkbox h-6 w-6 border-2 border-gray-300",
                        disabled: true
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                        className: "ml-2 text-gray-500 text-medium font-medium mb-2",
                        children: "Others"
                      })]
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    className: "block",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                      type: "text",
                      className: `${this.state.others ? 'show' : 'hidden'} form-input mt-1 block w-full border-2`,
                      placeholder: "Please state your other needs",
                      disabled: true
                    })
                  })]
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "mb-4",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
                  className: "block text-gray-700 text-sm font-bold mb-2",
                  htmlFor: "contactNumber",
                  children: "Open Google Maps"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  target: "_blank",
                  href: `https://www.google.com/maps/place/${this.state.userLocation[0]},${this.state.userLocation[1]}`,
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                    src: __webpack_require__("w9oB")
                  })
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "flex items-center justify-between",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
                  onClick: this.toggleInfoModal,
                  className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
                  children: "Close"
                })
              })]
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Map, {
          className: Home_module_default.a.homeMap,
          center: this.state.userLocation,
          maxZoom: 18,
          zoom: this.state.mapZoom,
          children: ({
            TileLayer,
            Marker,
            Popup
          }, icon, icon2, userIcon) => {
            var _this$state$allPoints;

            return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(TileLayer, {
                url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                attribution: "\xA9 <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Marker, {
                position: this.state.userLocation,
                icon: userIcon,
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Popup, {
                  children: "Your Location"
                })
              }), (_this$state$allPoints = this.state.allPointsInfo) === null || _this$state$allPoints === void 0 ? void 0 : _this$state$allPoints.map((marker, key) => {
                if (marker.needHelp) {
                  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Marker, {
                    position: [marker.latitude, marker.longitude],
                    icon: icon2,
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Popup, {
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
                        onClick: () => this.toggleInfoModal(key),
                        className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
                        children: "Open"
                      })
                    })
                  }, `marker-${key}`);
                } else {
                  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Marker, {
                    position: [marker.latitude, marker.longitude],
                    icon: icon,
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Popup, {
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
                        onClick: () => this.toggleInfoModal(key),
                        className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
                        children: "Open"
                      })
                    })
                  }, `marker-${key}`);
                }
              })]
            });
          }
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

/***/ "w9oB":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

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