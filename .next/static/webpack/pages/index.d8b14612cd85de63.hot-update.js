"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/projects.jsx":
/*!****************************!*\
  !*** ./pages/projects.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Projects; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_functionStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/functionStore */ \"./store/functionStore.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Projects(props) {\n    var _this = this;\n    _s();\n    var projects = (0,_store_functionStore__WEBPACK_IMPORTED_MODULE_2__[\"default\"])().projects;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), proj = ref[0], setProj = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), isHover = ref1[0], setIsHover = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setProj(projects);\n    }, [\n        projects\n    ]);\n    if ((projects === null || projects === void 0 ? void 0 : projects.length) === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full h-[4rem] flex items-center justify-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"loader h-10 w-10 border-orange-400 border-b-transparent\"\n            }, void 0, false, {\n                fileName: \"/Users/zerka/Desktop/projects/pages/projects.jsx\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/zerka/Desktop/projects/pages/projects.jsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ref: props.pro,\n            className: \"w-full flex flex-col gap-2 md:px-4 \",\n            id: \"projects\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"sticky top-0 text-2xl text-white z-20 font-semibold \",\n                    children: \"Projects\"\n                }, void 0, false, {\n                    fileName: \"/Users/zerka/Desktop/projects/pages/projects.jsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this),\n                proj.map(function(x) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onMouseOver: function() {\n                            return setIsHover(x === null || x === void 0 ? void 0 : x._id);\n                        },\n                        onMouseOut: function() {\n                            return setIsHover(\"\");\n                        },\n                        className: \"\".concat(isHover !== \"\" && isHover !== (x === null || x === void 0 ? void 0 : x._id) ? \"bg opacity-50 scale-90\" : \"bg-[#202022] bg-opacity-100 \", \" p-2 ease-in-out duration-300 cursor-default select-none\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"font-semibold\",\n                                    children: x === null || x === void 0 ? void 0 : x.projectFramework\n                                }, void 0, false, {\n                                    fileName: \"/Users/zerka/Desktop/projects/pages/projects.jsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/zerka/Desktop/projects/pages/projects.jsx\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"h-[3rem] flex items-center gap-2 \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiOutlineArrowRight, {\n                                        className: \"text-orange-400\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zerka/Desktop/projects/pages/projects.jsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-2xl\",\n                                        children: x === null || x === void 0 ? void 0 : x.projectName\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zerka/Desktop/projects/pages/projects.jsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/zerka/Desktop/projects/pages/projects.jsx\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center gap-2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"\",\n                                    children: x === null || x === void 0 ? void 0 : x.projectDescription\n                                }, void 0, false, {\n                                    fileName: \"/Users/zerka/Desktop/projects/pages/projects.jsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/zerka/Desktop/projects/pages/projects.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full flex justify-between px-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: x === null || x === void 0 ? void 0 : x.projectCode,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"flex items-center gap-2 py-2 opacity-50 hover:opacity-100 ease-in-out duration-300\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__.BsCodeSlash, {}, void 0, false, {\n                                                    fileName: \"/Users/zerka/Desktop/projects/pages/projects.jsx\",\n                                                    lineNumber: 57,\n                                                    columnNumber: 19\n                                                }, _this),\n                                                \"Code\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/zerka/Desktop/projects/pages/projects.jsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 17\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zerka/Desktop/projects/pages/projects.jsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: x === null || x === void 0 ? void 0 : x.projectLive,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"flex items-center gap-2 py-2 opacity-50 hover:opacity-100 ease-in-out duration-300\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_6__.BiLinkExternal, {}, void 0, false, {\n                                                    fileName: \"/Users/zerka/Desktop/projects/pages/projects.jsx\",\n                                                    lineNumber: 63,\n                                                    columnNumber: 19\n                                                }, _this),\n                                                \"Live\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/zerka/Desktop/projects/pages/projects.jsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 17\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zerka/Desktop/projects/pages/projects.jsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/zerka/Desktop/projects/pages/projects.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, x._id, true, {\n                        fileName: \"/Users/zerka/Desktop/projects/pages/projects.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, _this);\n                })\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/zerka/Desktop/projects/pages/projects.jsx\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, this);\n    }\n};\n_s(Projects, \"TCwfZQXq4H2mXAv+ZdJKXnP104o=\");\n_c = Projects;\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0cy5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBbUQ7QUFDQTtBQUNOO0FBQ1E7QUFDTDtBQUNuQjtBQUVkLFNBQVNRLFFBQVEsQ0FBQ0MsS0FBSyxFQUFFOzs7SUFDdEMsSUFBTSxRQUFVLEdBQUtOLGdFQUFhLEVBQUUsQ0FBNUJPLFFBQVE7SUFDaEIsSUFBd0JULEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBN0JVLElBQUksR0FBYVYsR0FBWSxHQUF6QixFQUFFVyxPQUFPLEdBQUlYLEdBQVksR0FBaEI7SUFDcEIsSUFBOEJBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBbkNZLE9BQU8sR0FBZ0JaLElBQVksR0FBNUIsRUFBRWEsVUFBVSxHQUFJYixJQUFZLEdBQWhCO0lBRTFCQyxnREFBUyxDQUFDLFdBQU07UUFDZFUsT0FBTyxDQUFDRixRQUFRLENBQUMsQ0FBQztLQUNuQixFQUFFO1FBQUNBLFFBQVE7S0FBQyxDQUFDLENBQUM7SUFFZixJQUFJQSxDQUFBQSxRQUFRLGFBQVJBLFFBQVEsV0FBUSxHQUFoQkEsS0FBQUEsQ0FBZ0IsR0FBaEJBLFFBQVEsQ0FBRUssTUFBTSxNQUFLLENBQUMsRUFBRTtRQUMxQixxQkFDRSw4REFBQ0MsS0FBRztZQUFDQyxTQUFTLEVBQUMsa0RBQWtEO3NCQUMvRCw0RUFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLHlEQUF5RDs7Ozs7b0JBQU87Ozs7O2dCQUMzRSxDQUNOO0tBQ0gsTUFBTTtRQUNMLHFCQUNFLDhEQUFDRCxLQUFHO1lBQ0ZFLEdBQUcsRUFBRVQsS0FBSyxDQUFDVSxHQUFHO1lBQ2RGLFNBQVMsRUFBQyxxQ0FBcUM7WUFDL0NHLEVBQUUsRUFBQyxVQUFVOzs4QkFFYiw4REFBQ0osS0FBRztvQkFBQ0MsU0FBUyxFQUFHLHNEQUFvRDs4QkFBRyxVQUV4RTs7Ozs7d0JBQU07Z0JBQ0xOLElBQUksQ0FBQ1UsR0FBRyxDQUFDLFNBQUNDLENBQUM7a0NBQ1YscUVBQUNOLEtBQUc7d0JBQ0ZPLFdBQVcsRUFBRTs0QkFBTVQsT0FBQUEsVUFBVSxDQUFDUSxDQUFDLGFBQURBLENBQUMsV0FBSyxHQUFOQSxLQUFBQSxDQUFNLEdBQU5BLENBQUMsQ0FBRUUsR0FBRyxDQUFDO3lCQUFBO3dCQUNyQ0MsVUFBVSxFQUFFO21DQUFNWCxVQUFVLENBQUMsRUFBRSxDQUFDO3lCQUFBO3dCQUNoQ0csU0FBUyxFQUFFLEVBQUMsQ0FJWCxNQUF3RCxDQUh2REosT0FBTyxLQUFLLEVBQUUsSUFBSUEsT0FBTyxLQUFLUyxDQUFBQSxDQUFDLGFBQURBLENBQUMsV0FBSyxHQUFOQSxLQUFBQSxDQUFNLEdBQU5BLENBQUMsQ0FBRUUsR0FBRyxJQUNoQyx3QkFBd0IsR0FDeEIsOEJBQThCLEVBQ25DLDBEQUF3RCxDQUFDOzswQ0FHMUQsOERBQUNSLEtBQUc7Z0NBQUNDLFNBQVMsRUFBQyxFQUFFOzBDQUNmLDRFQUFDUyxJQUFFO29DQUFDVCxTQUFTLEVBQUMsZUFBZTs4Q0FBRUssQ0FBQyxhQUFEQSxDQUFDLFdBQWtCLEdBQW5CQSxLQUFBQSxDQUFtQixHQUFuQkEsQ0FBQyxDQUFFSyxnQkFBZ0I7Ozs7O3lDQUFNOzs7OztxQ0FDcEQ7MENBQ04sOERBQUNYLEtBQUc7Z0NBQUNDLFNBQVMsRUFBQyxtQ0FBbUM7O2tEQUNoRCw4REFBQ1osK0RBQW1CO3dDQUFDWSxTQUFTLEVBQUMsaUJBQWlCOzs7Ozs2Q0FBRztrREFDbkQsOERBQUNTLElBQUU7d0NBQUNULFNBQVMsRUFBQyxVQUFVO2tEQUFFSyxDQUFDLGFBQURBLENBQUMsV0FBYSxHQUFkQSxLQUFBQSxDQUFjLEdBQWRBLENBQUMsQ0FBRU0sV0FBVzs7Ozs7NkNBQU07Ozs7OztxQ0FDMUM7MENBQ04sOERBQUNaLEtBQUc7Z0NBQUNDLFNBQVMsRUFBQyx5QkFBeUI7MENBQ3RDLDRFQUFDWSxHQUFDO29DQUFDWixTQUFTLEVBQUMsRUFBRTs4Q0FBRUssQ0FBQyxhQUFEQSxDQUFDLFdBQW9CLEdBQXJCQSxLQUFBQSxDQUFxQixHQUFyQkEsQ0FBQyxDQUFFUSxrQkFBa0I7Ozs7O3lDQUFLOzs7OztxQ0FDdkM7MENBQ04sOERBQUNkLEtBQUc7Z0NBQUNDLFNBQVMsRUFBQyxrQ0FBa0M7O2tEQUMvQyw4REFBQ2MsR0FBQzt3Q0FBQ0MsSUFBSSxFQUFFVixDQUFDLGFBQURBLENBQUMsV0FBYSxHQUFkQSxLQUFBQSxDQUFjLEdBQWRBLENBQUMsQ0FBRVcsV0FBVztrREFDckIsNEVBQUNDLFFBQU07NENBQUNqQixTQUFTLEVBQUMsb0ZBQW9GOzs4REFDcEcsOERBQUNiLHVEQUFXOzs7O3lEQUFHO2dEQUFBLE1BRWpCOzs7Ozs7aURBQVM7Ozs7OzZDQUNQO2tEQUNKLDhEQUFDMkIsR0FBQzt3Q0FBQ0MsSUFBSSxFQUFFVixDQUFDLGFBQURBLENBQUMsV0FBYSxHQUFkQSxLQUFBQSxDQUFjLEdBQWRBLENBQUMsQ0FBRWEsV0FBVztrREFDckIsNEVBQUNELFFBQU07NENBQUNqQixTQUFTLEVBQUMsb0ZBQW9GOzs4REFDcEcsOERBQUNYLDBEQUFjOzs7O3lEQUFHO2dEQUFBLE1BRXBCOzs7Ozs7aURBQVM7Ozs7OzZDQUNQOzs7Ozs7cUNBQ0E7O3VCQXpCRGdCLENBQUMsQ0FBQ0UsR0FBRzs7Ozs2QkEwQk47aUJBQ1AsQ0FBQzs7Ozs7O2dCQUNFLENBQ047S0FDSDtDQUNGO0dBakV1QmhCLFFBQVE7QUFBUkEsS0FBQUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9qZWN0cy5qc3g/MjRhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGZ1bmN0aW9uU3RvcmUgZnJvbSBcIi4uL3N0b3JlL2Z1bmN0aW9uU3RvcmVcIjtcbmltcG9ydCB7IEJzQ29kZVNsYXNoIH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XG5pbXBvcnQgeyBBaU91dGxpbmVBcnJvd1JpZ2h0IH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XG5pbXBvcnQgeyBCaUxpbmtFeHRlcm5hbCB9IGZyb20gXCJyZWFjdC1pY29ucy9iaVwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0cyhwcm9wcykge1xuICBjb25zdCB7IHByb2plY3RzIH0gPSBmdW5jdGlvblN0b3JlKCk7XG4gIGNvbnN0IFtwcm9qLCBzZXRQcm9qXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2lzSG92ZXIsIHNldElzSG92ZXJdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRQcm9qKHByb2plY3RzKTtcbiAgfSwgW3Byb2plY3RzXSk7XG5cbiAgaWYgKHByb2plY3RzPy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1bNHJlbV0gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXIgaC0xMCB3LTEwIGJvcmRlci1vcmFuZ2UtNDAwIGJvcmRlci1iLXRyYW5zcGFyZW50XCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIHJlZj17cHJvcHMucHJvfVxuICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBmbGV4LWNvbCBnYXAtMiBtZDpweC00IFwiXG4gICAgICAgIGlkPVwicHJvamVjdHNcIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHN0aWNreSB0b3AtMCB0ZXh0LTJ4bCB0ZXh0LXdoaXRlIHotMjAgZm9udC1zZW1pYm9sZCBgfT5cbiAgICAgICAgICBQcm9qZWN0c1xuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3Byb2oubWFwKCh4KSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgb25Nb3VzZU92ZXI9eygpID0+IHNldElzSG92ZXIoeD8uX2lkKX1cbiAgICAgICAgICAgIG9uTW91c2VPdXQ9eygpID0+IHNldElzSG92ZXIoXCJcIil9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgICAgICBpc0hvdmVyICE9PSBcIlwiICYmIGlzSG92ZXIgIT09IHg/Ll9pZFxuICAgICAgICAgICAgICAgID8gXCJiZyBvcGFjaXR5LTUwIHNjYWxlLTkwXCJcbiAgICAgICAgICAgICAgICA6IFwiYmctWyMyMDIwMjJdIGJnLW9wYWNpdHktMTAwIFwiXG4gICAgICAgICAgICB9IHAtMiBlYXNlLWluLW91dCBkdXJhdGlvbi0zMDAgY3Vyc29yLWRlZmF1bHQgc2VsZWN0LW5vbmVgfVxuICAgICAgICAgICAga2V5PXt4Ll9pZH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPnt4Py5wcm9qZWN0RnJhbWV3b3JrfTwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1bM3JlbV0gZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgXCI+XG4gICAgICAgICAgICAgIDxBaU91dGxpbmVBcnJvd1JpZ2h0IGNsYXNzTmFtZT1cInRleHQtb3JhbmdlLTQwMFwiIC8+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiPnt4Py5wcm9qZWN0TmFtZX08L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPnt4Py5wcm9qZWN0RGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGp1c3RpZnktYmV0d2VlbiBweC00XCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9e3g/LnByb2plY3RDb2RlfT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHB5LTIgb3BhY2l0eS01MCBob3ZlcjpvcGFjaXR5LTEwMCBlYXNlLWluLW91dCBkdXJhdGlvbi0zMDBcIj5cbiAgICAgICAgICAgICAgICAgIDxCc0NvZGVTbGFzaCAvPlxuICAgICAgICAgICAgICAgICAgQ29kZVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxhIGhyZWY9e3g/LnByb2plY3RMaXZlfT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHB5LTIgb3BhY2l0eS01MCBob3ZlcjpvcGFjaXR5LTEwMCBlYXNlLWluLW91dCBkdXJhdGlvbi0zMDBcIj5cbiAgICAgICAgICAgICAgICAgIDxCaUxpbmtFeHRlcm5hbCAvPlxuICAgICAgICAgICAgICAgICAgTGl2ZVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImZ1bmN0aW9uU3RvcmUiLCJCc0NvZGVTbGFzaCIsIkFpT3V0bGluZUFycm93UmlnaHQiLCJCaUxpbmtFeHRlcm5hbCIsIkhlYWQiLCJQcm9qZWN0cyIsInByb3BzIiwicHJvamVjdHMiLCJwcm9qIiwic2V0UHJvaiIsImlzSG92ZXIiLCJzZXRJc0hvdmVyIiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwicmVmIiwicHJvIiwiaWQiLCJtYXAiLCJ4Iiwib25Nb3VzZU92ZXIiLCJfaWQiLCJvbk1vdXNlT3V0IiwiaDEiLCJwcm9qZWN0RnJhbWV3b3JrIiwicHJvamVjdE5hbWUiLCJwIiwicHJvamVjdERlc2NyaXB0aW9uIiwiYSIsImhyZWYiLCJwcm9qZWN0Q29kZSIsImJ1dHRvbiIsInByb2plY3RMaXZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/projects.jsx\n"));

/***/ })

});