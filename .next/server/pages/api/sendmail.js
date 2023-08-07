"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/sendmail";
exports.ids = ["pages/api/sendmail"];
exports.modules = {

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "(api)/./src/pages/api/sendmail.ts":
/*!***********************************!*\
  !*** ./src/pages/api/sendmail.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nasync function handler(req, res) {\n    const { MAILER_USER, MAILER_PASS } = process.env;\n    const { message, to } = req.body;\n    try {\n        const transporter = await nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({\n            host: \"smtp.gmail.com\",\n            port: 587,\n            secure: false,\n            auth: {\n                user: MAILER_USER,\n                pass: MAILER_PASS\n            }\n        });\n        await transporter.sendMail({\n            from: `BTC current price notification`,\n            to,\n            subject: message\n        });\n        res.status(200).json({\n            name: \"sfsdf Doe\"\n        });\n    } catch (error) {\n        res.status(400).json({\n            name: \"sfsdf Doe\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3NlbmRtYWlsLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDZFQUE2RTtBQUV6QztBQUtyQixlQUFlQyxRQUM1QkMsR0FBbUIsRUFDbkJDLEdBQTBCO0lBRTFCLE1BQU0sRUFBRUMsV0FBVyxFQUFFQyxXQUFXLEVBQUUsR0FBR0MsUUFBUUMsR0FBRztJQUNoRCxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsRUFBRSxFQUFFLEdBQUdQLElBQUlRLElBQUk7SUFDaEMsSUFBSTtRQUNGLE1BQU1DLGNBQWMsTUFBTVgsaUVBQTBCLENBQUM7WUFDbkRhLE1BQU07WUFDTkMsTUFBTTtZQUNOQyxRQUFRO1lBQ1JDLE1BQU07Z0JBQ0pDLE1BQU1iO2dCQUNOYyxNQUFNYjtZQUNSO1FBQ0Y7UUFDQSxNQUFNTSxZQUFZUSxRQUFRLENBQUM7WUFDekJDLE1BQU0sQ0FBQyw4QkFBOEIsQ0FBQztZQUN0Q1g7WUFDQVksU0FBU2I7UUFDWDtRQUVBTCxJQUFJbUIsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxNQUFNO1FBQVk7SUFDM0MsRUFBRSxPQUFPQyxPQUFPO1FBQ2R0QixJQUFJbUIsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxNQUFNO1FBQVk7SUFDM0M7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3NyYy9wYWdlcy9hcGkvc2VuZG1haWwudHM/NzYzMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBub2RlbWFpbGVyIGZyb20gXCJub2RlbWFpbGVyXCI7XG50eXBlIERhdGEgPSB7XG4gIG5hbWU6IHN0cmluZztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPERhdGE+XG4pIHtcbiAgY29uc3QgeyBNQUlMRVJfVVNFUiwgTUFJTEVSX1BBU1MgfSA9IHByb2Nlc3MuZW52O1xuICBjb25zdCB7IG1lc3NhZ2UsIHRvIH0gPSByZXEuYm9keTtcbiAgdHJ5IHtcbiAgICBjb25zdCB0cmFuc3BvcnRlciA9IGF3YWl0IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHtcbiAgICAgIGhvc3Q6IFwic210cC5nbWFpbC5jb21cIixcbiAgICAgIHBvcnQ6IDU4NyxcbiAgICAgIHNlY3VyZTogZmFsc2UsIC8vIHRydWUgZm9yIDQ2NSwgZmFsc2UgZm9yIG90aGVyIHBvcnRzXG4gICAgICBhdXRoOiB7XG4gICAgICAgIHVzZXI6IE1BSUxFUl9VU0VSLFxuICAgICAgICBwYXNzOiBNQUlMRVJfUEFTUyxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgYXdhaXQgdHJhbnNwb3J0ZXIuc2VuZE1haWwoe1xuICAgICAgZnJvbTogYEJUQyBjdXJyZW50IHByaWNlIG5vdGlmaWNhdGlvbmAsXG4gICAgICB0bywgLy8gdXNlICwoQ29tbWEpIGZvciBtdWx0aXBsZSByZWNpcGllbnRzXG4gICAgICBzdWJqZWN0OiBtZXNzYWdlLFxuICAgIH0pO1xuXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBuYW1lOiBcInNmc2RmIERvZVwiIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbmFtZTogXCJzZnNkZiBEb2VcIiB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIm5vZGVtYWlsZXIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiTUFJTEVSX1VTRVIiLCJNQUlMRVJfUEFTUyIsInByb2Nlc3MiLCJlbnYiLCJtZXNzYWdlIiwidG8iLCJib2R5IiwidHJhbnNwb3J0ZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJob3N0IiwicG9ydCIsInNlY3VyZSIsImF1dGgiLCJ1c2VyIiwicGFzcyIsInNlbmRNYWlsIiwiZnJvbSIsInN1YmplY3QiLCJzdGF0dXMiLCJqc29uIiwibmFtZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/sendmail.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/sendmail.ts"));
module.exports = __webpack_exports__;

})();