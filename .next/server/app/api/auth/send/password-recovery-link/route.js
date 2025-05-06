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
exports.id = "app/api/auth/send/password-recovery-link/route";
exports.ids = ["app/api/auth/send/password-recovery-link/route"];
exports.modules = {

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Fsend%2Fpassword-recovery-link%2Froute&page=%2Fapi%2Fauth%2Fsend%2Fpassword-recovery-link%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fsend%2Fpassword-recovery-link%2Froute.ts&appDir=%2Fhome%2Fkanha%2FDocuments%2FCONTENT%2FLearning%2FPROJECTS%2FAuthentication%20with%20Nextjs%20and%20Supabase%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fkanha%2FDocuments%2FCONTENT%2FLearning%2FPROJECTS%2FAuthentication%20with%20Nextjs%20and%20Supabase&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Fsend%2Fpassword-recovery-link%2Froute&page=%2Fapi%2Fauth%2Fsend%2Fpassword-recovery-link%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fsend%2Fpassword-recovery-link%2Froute.ts&appDir=%2Fhome%2Fkanha%2FDocuments%2FCONTENT%2FLearning%2FPROJECTS%2FAuthentication%20with%20Nextjs%20and%20Supabase%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fkanha%2FDocuments%2FCONTENT%2FLearning%2FPROJECTS%2FAuthentication%20with%20Nextjs%20and%20Supabase&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_kanha_Documents_CONTENT_Learning_PROJECTS_Authentication_with_Nextjs_and_Supabase_src_app_api_auth_send_password_recovery_link_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/send/password-recovery-link/route.ts */ \"(rsc)/./src/app/api/auth/send/password-recovery-link/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/send/password-recovery-link/route\",\n        pathname: \"/api/auth/send/password-recovery-link\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/send/password-recovery-link/route\"\n    },\n    resolvedPagePath: \"/home/kanha/Documents/CONTENT/Learning/PROJECTS/Authentication with Nextjs and Supabase/src/app/api/auth/send/password-recovery-link/route.ts\",\n    nextConfigOutput,\n    userland: _home_kanha_Documents_CONTENT_Learning_PROJECTS_Authentication_with_Nextjs_and_Supabase_src_app_api_auth_send_password_recovery_link_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGc2VuZCUyRnBhc3N3b3JkLXJlY292ZXJ5LWxpbmslMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkZzZW5kJTJGcGFzc3dvcmQtcmVjb3ZlcnktbGluayUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkZzZW5kJTJGcGFzc3dvcmQtcmVjb3ZlcnktbGluayUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGa2FuaGElMkZEb2N1bWVudHMlMkZDT05URU5UJTJGTGVhcm5pbmclMkZQUk9KRUNUUyUyRkF1dGhlbnRpY2F0aW9uJTIwd2l0aCUyME5leHRqcyUyMGFuZCUyMFN1cGFiYXNlJTJGc3JjJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZob21lJTJGa2FuaGElMkZEb2N1bWVudHMlMkZDT05URU5UJTJGTGVhcm5pbmclMkZQUk9KRUNUUyUyRkF1dGhlbnRpY2F0aW9uJTIwd2l0aCUyME5leHRqcyUyMGFuZCUyMFN1cGFiYXNlJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUM2RjtBQUMxSztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL2hvbWUva2FuaGEvRG9jdW1lbnRzL0NPTlRFTlQvTGVhcm5pbmcvUFJPSkVDVFMvQXV0aGVudGljYXRpb24gd2l0aCBOZXh0anMgYW5kIFN1cGFiYXNlL3NyYy9hcHAvYXBpL2F1dGgvc2VuZC9wYXNzd29yZC1yZWNvdmVyeS1saW5rL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL3NlbmQvcGFzc3dvcmQtcmVjb3ZlcnktbGluay9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvc2VuZC9wYXNzd29yZC1yZWNvdmVyeS1saW5rXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL3NlbmQvcGFzc3dvcmQtcmVjb3ZlcnktbGluay9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9ob21lL2thbmhhL0RvY3VtZW50cy9DT05URU5UL0xlYXJuaW5nL1BST0pFQ1RTL0F1dGhlbnRpY2F0aW9uIHdpdGggTmV4dGpzIGFuZCBTdXBhYmFzZS9zcmMvYXBwL2FwaS9hdXRoL3NlbmQvcGFzc3dvcmQtcmVjb3ZlcnktbGluay9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Fsend%2Fpassword-recovery-link%2Froute&page=%2Fapi%2Fauth%2Fsend%2Fpassword-recovery-link%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fsend%2Fpassword-recovery-link%2Froute.ts&appDir=%2Fhome%2Fkanha%2FDocuments%2FCONTENT%2FLearning%2FPROJECTS%2FAuthentication%20with%20Nextjs%20and%20Supabase%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fkanha%2FDocuments%2FCONTENT%2FLearning%2FPROJECTS%2FAuthentication%20with%20Nextjs%20and%20Supabase&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/auth/send/password-recovery-link/route.ts":
/*!***************************************************************!*\
  !*** ./src/app/api/auth/send/password-recovery-link/route.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _utils_supabase_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/supabase/server */ \"(rsc)/./src/utils/supabase/server.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\nasync function POST(request) {\n    const { email } = await request.json();\n    const supabase = (0,_utils_supabase_server__WEBPACK_IMPORTED_MODULE_0__.createServerSupabaseClient)();\n    const { error } = await supabase.auth.resetPasswordForEmail(email);\n    if (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            error: error.message\n        }, {\n            status: 400\n        });\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n        message: \"Password-Reset link sent!\"\n    }, {\n        status: 200\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL3NlbmQvcGFzc3dvcmQtcmVjb3ZlcnktbGluay9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUU7QUFDMUI7QUFFcEMsZUFBZUUsS0FBS0MsT0FBZ0I7SUFDekMsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBRyxNQUFNRCxRQUFRRSxJQUFJO0lBRXBDLE1BQU1DLFdBQVdOLGtGQUEwQkE7SUFFM0MsTUFBTSxFQUFFTyxLQUFLLEVBQUUsR0FBRyxNQUFNRCxTQUFTRSxJQUFJLENBQUNDLHFCQUFxQixDQUFDTDtJQUU1RCxJQUFJRyxPQUFPO1FBQ1QsT0FBT04scURBQVlBLENBQUNJLElBQUksQ0FDdEI7WUFDRUUsT0FBT0EsTUFBTUcsT0FBTztRQUN0QixHQUNBO1lBQ0VDLFFBQVE7UUFDVjtJQUVKO0lBRUEsT0FBT1YscURBQVlBLENBQUNJLElBQUksQ0FDdEI7UUFDRUssU0FBUztJQUNYLEdBQ0E7UUFDRUMsUUFBUTtJQUNWO0FBRUoiLCJzb3VyY2VzIjpbIi9ob21lL2thbmhhL0RvY3VtZW50cy9DT05URU5UL0xlYXJuaW5nL1BST0pFQ1RTL0F1dGhlbnRpY2F0aW9uIHdpdGggTmV4dGpzIGFuZCBTdXBhYmFzZS9zcmMvYXBwL2FwaS9hdXRoL3NlbmQvcGFzc3dvcmQtcmVjb3ZlcnktbGluay9yb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZXJ2ZXJTdXBhYmFzZUNsaWVudCB9IGZyb20gXCJAL3V0aWxzL3N1cGFiYXNlL3NlcnZlclwiO1xuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgY29uc3QgeyBlbWFpbCB9ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG5cbiAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVTZXJ2ZXJTdXBhYmFzZUNsaWVudCgpO1xuXG4gIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGgucmVzZXRQYXNzd29yZEZvckVtYWlsKGVtYWlsKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7XG4gICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdHVzOiA0MDAsXG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICB7XG4gICAgICBtZXNzYWdlOiBcIlBhc3N3b3JkLVJlc2V0IGxpbmsgc2VudCFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHN0YXR1czogMjAwLFxuICAgIH1cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVTZXJ2ZXJTdXBhYmFzZUNsaWVudCIsIk5leHRSZXNwb25zZSIsIlBPU1QiLCJyZXF1ZXN0IiwiZW1haWwiLCJqc29uIiwic3VwYWJhc2UiLCJlcnJvciIsImF1dGgiLCJyZXNldFBhc3N3b3JkRm9yRW1haWwiLCJtZXNzYWdlIiwic3RhdHVzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/send/password-recovery-link/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/utils/supabase/server.ts":
/*!**************************************!*\
  !*** ./src/utils/supabase/server.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createServerSupabaseClient: () => (/* binding */ createServerSupabaseClient)\n/* harmony export */ });\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n/* harmony import */ var _supabase_ssr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @supabase/ssr */ \"(rsc)/./node_modules/@supabase/ssr/dist/module/index.js\");\n// lib/supabase/server.ts\n\n\n// Validate required env variables at runtime (especially useful in development)\nconst supabaseUrl = \"https://bynqmoiqnfibxglitcii.supabase.co\";\nconst supabaseAnonKey = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5bnFtb2lxbmZpYnhnbGl0Y2lpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYzNTYzMDIsImV4cCI6MjA2MTkzMjMwMn0.nTBljbOoV-0GuvJWRwGbyyJYAL9OrQ9a9BFjpTHU78o\";\nif (!supabaseUrl || !supabaseAnonKey) {\n    throw new Error(\"Missing Supabase environment variables\");\n}\nfunction createServerSupabaseClient() {\n    return (0,_supabase_ssr__WEBPACK_IMPORTED_MODULE_1__.createServerClient)(supabaseUrl, supabaseAnonKey, {\n        cookies: {\n            async getAll () {\n                const allCookies = await (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.cookies)();\n                return allCookies.getAll().map((cookie)=>({\n                        name: cookie.name,\n                        value: cookie.value\n                    }));\n            },\n            setAll: async (cookiesToSet)=>{\n                const cookieStore = await (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.cookies)();\n                for (const { name, value, options } of cookiesToSet){\n                    cookieStore.set(name, value, options);\n                }\n            }\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvdXRpbHMvc3VwYWJhc2Uvc2VydmVyLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHlCQUF5QjtBQUNjO0FBQ1k7QUFFbkQsZ0ZBQWdGO0FBQ2hGLE1BQU1FLGNBQWNDLDBDQUFvQztBQUN4RCxNQUFNRyxrQkFBa0JILGtOQUF5QztBQUVqRSxJQUFJLENBQUNELGVBQWUsQ0FBQ0ksaUJBQWlCO0lBQ3BDLE1BQU0sSUFBSUUsTUFBTTtBQUNsQjtBQUVPLFNBQVNDO0lBQ2QsT0FBT1IsaUVBQWtCQSxDQUFDQyxhQUFhSSxpQkFBaUI7UUFDdEROLFNBQVM7WUFDUCxNQUFNVTtnQkFDSixNQUFNQyxhQUFhLE1BQU1YLHFEQUFPQTtnQkFDaEMsT0FBT1csV0FBV0QsTUFBTSxHQUFHRSxHQUFHLENBQUMsQ0FBQ0MsU0FBWTt3QkFDMUNDLE1BQU1ELE9BQU9DLElBQUk7d0JBQ2pCQyxPQUFPRixPQUFPRSxLQUFLO29CQUNyQjtZQUNGO1lBQ0FDLFFBQVEsT0FBT0M7Z0JBQ2IsTUFBTUMsY0FBYyxNQUFNbEIscURBQU9BO2dCQUNqQyxLQUFLLE1BQU0sRUFBRWMsSUFBSSxFQUFFQyxLQUFLLEVBQUVJLE9BQU8sRUFBRSxJQUFJRixhQUFjO29CQUNuREMsWUFBWUUsR0FBRyxDQUFDTixNQUFNQyxPQUFPSTtnQkFDL0I7WUFDRjtRQUNGO0lBQ0Y7QUFDRiIsInNvdXJjZXMiOlsiL2hvbWUva2FuaGEvRG9jdW1lbnRzL0NPTlRFTlQvTGVhcm5pbmcvUFJPSkVDVFMvQXV0aGVudGljYXRpb24gd2l0aCBOZXh0anMgYW5kIFN1cGFiYXNlL3NyYy91dGlscy9zdXBhYmFzZS9zZXJ2ZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbGliL3N1cGFiYXNlL3NlcnZlci50c1xuaW1wb3J0IHsgY29va2llcyB9IGZyb20gXCJuZXh0L2hlYWRlcnNcIjtcbmltcG9ydCB7IGNyZWF0ZVNlcnZlckNsaWVudCB9IGZyb20gXCJAc3VwYWJhc2Uvc3NyXCI7XG5cbi8vIFZhbGlkYXRlIHJlcXVpcmVkIGVudiB2YXJpYWJsZXMgYXQgcnVudGltZSAoZXNwZWNpYWxseSB1c2VmdWwgaW4gZGV2ZWxvcG1lbnQpXG5jb25zdCBzdXBhYmFzZVVybCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCE7XG5jb25zdCBzdXBhYmFzZUFub25LZXkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9BTk9OX0tFWSE7XG5cbmlmICghc3VwYWJhc2VVcmwgfHwgIXN1cGFiYXNlQW5vbktleSkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIFN1cGFiYXNlIGVudmlyb25tZW50IHZhcmlhYmxlc1wiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNlcnZlclN1cGFiYXNlQ2xpZW50KCkge1xuICByZXR1cm4gY3JlYXRlU2VydmVyQ2xpZW50KHN1cGFiYXNlVXJsLCBzdXBhYmFzZUFub25LZXksIHtcbiAgICBjb29raWVzOiB7XG4gICAgICBhc3luYyBnZXRBbGwoKSB7XG4gICAgICAgIGNvbnN0IGFsbENvb2tpZXMgPSBhd2FpdCBjb29raWVzKCk7XG4gICAgICAgIHJldHVybiBhbGxDb29raWVzLmdldEFsbCgpLm1hcCgoY29va2llKSA9PiAoe1xuICAgICAgICAgIG5hbWU6IGNvb2tpZS5uYW1lLFxuICAgICAgICAgIHZhbHVlOiBjb29raWUudmFsdWUsXG4gICAgICAgIH0pKTtcbiAgICAgIH0sXG4gICAgICBzZXRBbGw6IGFzeW5jIChjb29raWVzVG9TZXQpID0+IHtcbiAgICAgICAgY29uc3QgY29va2llU3RvcmUgPSBhd2FpdCBjb29raWVzKCk7XG4gICAgICAgIGZvciAoY29uc3QgeyBuYW1lLCB2YWx1ZSwgb3B0aW9ucyB9IG9mIGNvb2tpZXNUb1NldCkge1xuICAgICAgICAgIGNvb2tpZVN0b3JlLnNldChuYW1lLCB2YWx1ZSwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiY29va2llcyIsImNyZWF0ZVNlcnZlckNsaWVudCIsInN1cGFiYXNlVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCIsInN1cGFiYXNlQW5vbktleSIsIk5FWFRfUFVCTElDX1NVUEFCQVNFX0FOT05fS0VZIiwiRXJyb3IiLCJjcmVhdGVTZXJ2ZXJTdXBhYmFzZUNsaWVudCIsImdldEFsbCIsImFsbENvb2tpZXMiLCJtYXAiLCJjb29raWUiLCJuYW1lIiwidmFsdWUiLCJzZXRBbGwiLCJjb29raWVzVG9TZXQiLCJjb29raWVTdG9yZSIsIm9wdGlvbnMiLCJzZXQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/utils/supabase/server.ts\n");

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@supabase","vendor-chunks/tr46","vendor-chunks/whatwg-url","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Fsend%2Fpassword-recovery-link%2Froute&page=%2Fapi%2Fauth%2Fsend%2Fpassword-recovery-link%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fsend%2Fpassword-recovery-link%2Froute.ts&appDir=%2Fhome%2Fkanha%2FDocuments%2FCONTENT%2FLearning%2FPROJECTS%2FAuthentication%20with%20Nextjs%20and%20Supabase%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fkanha%2FDocuments%2FCONTENT%2FLearning%2FPROJECTS%2FAuthentication%20with%20Nextjs%20and%20Supabase&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();