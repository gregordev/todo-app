/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar todos = getSavedNotes();\n\nvar filters = {\n    searchText: '',\n    hideCompleted: false\n};\n\nvar renderTodos = function renderTodos(todos, filters) {\n    var filteredTodos = todos.filter(function (todo) {\n        var searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());\n        var hideCompletedMatch = !filters.hideCompleted || !todo.completed;\n\n        return searchTextMatch && hideCompletedMatch;\n    });\n\n    var incompleteTodos = filteredTodos.filter(function (todo) {\n        return !todo.completed;\n    });\n\n    document.querySelector('#todos').innerHTML = '';\n\n    var summary = document.createElement('h2');\n    summary.textContent = 'You have ' + incompleteTodos.length + ' todos left';\n    document.querySelector('#todos').appendChild(summary);\n\n    filteredTodos.forEach(function (todo) {\n        var p = document.createElement('p');\n        p.textContent = todo.text;\n        document.querySelector('#todos').appendChild(p);\n    });\n};\n\nrenderTodos(todos, filters);\n\ndocument.querySelector('#search-text').addEventListener('input', function (e) {\n    filters.searchText = e.target.value;\n    renderTodos(todos, filters);\n});\n\ndocument.querySelector('#new-todo').addEventListener('submit', function (e) {\n    e.preventDefault();\n    todos.push({\n        text: e.target.elements.text.value,\n        completed: false\n    });\n    localStorage.setItem('todos', JSON.stringify(todos));\n    console.log(JSON.parse(localStorage.getItem('todos', JSON.stringify(todos))));\n    renderTodos(todos, filters);\n    e.target.elements.text.value = '';\n});\n\ndocument.querySelector('#hide-completed').addEventListener('change', function (e) {\n    filters.hideCompleted = e.target.checked;\n    renderTodos(todos, filters);\n});\n\nexports.todos = todos;\n\n// 1. Create a checkbox and setup event listener -> \"Hide completed\"\n// 2. Create new hideCompleted filter (default false)\n// 3. Update hideCompleted an rerender list on checkbox change\n// 4. Setup renderTodos to remove completed items//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvYXBwLmpzP2JkOWMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdG9kb3MgPSBnZXRTYXZlZE5vdGVzKCk7XHJcblxyXG5jb25zdCBmaWx0ZXJzID0ge1xyXG4gICAgc2VhcmNoVGV4dDogJycsXHJcbiAgICBoaWRlQ29tcGxldGVkOiBmYWxzZVxyXG59O1xyXG5cclxuY29uc3QgcmVuZGVyVG9kb3MgPSBmdW5jdGlvbiAodG9kb3MsIGZpbHRlcnMpIHtcclxuICAgIGNvbnN0IGZpbHRlcmVkVG9kb3MgPSB0b2Rvcy5maWx0ZXIoZnVuY3Rpb24gKHRvZG8pIHtcclxuICAgICAgICBjb25zdCBzZWFyY2hUZXh0TWF0Y2ggPSB0b2RvLnRleHQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhmaWx0ZXJzLnNlYXJjaFRleHQudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgY29uc3QgaGlkZUNvbXBsZXRlZE1hdGNoID0gIWZpbHRlcnMuaGlkZUNvbXBsZXRlZCB8fCAhdG9kby5jb21wbGV0ZWQ7XHJcblxyXG4gICAgICAgIHJldHVybiBzZWFyY2hUZXh0TWF0Y2ggJiYgaGlkZUNvbXBsZXRlZE1hdGNoXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBpbmNvbXBsZXRlVG9kb3MgPSBmaWx0ZXJlZFRvZG9zLmZpbHRlcihmdW5jdGlvbiAodG9kbykge1xyXG4gICAgICAgIHJldHVybiAhdG9kby5jb21wbGV0ZWRcclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvcycpLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgIGNvbnN0IHN1bW1hcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgc3VtbWFyeS50ZXh0Q29udGVudCA9IGBZb3UgaGF2ZSAke2luY29tcGxldGVUb2Rvcy5sZW5ndGh9IHRvZG9zIGxlZnRgO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG9zJykuYXBwZW5kQ2hpbGQoc3VtbWFyeSk7XHJcblxyXG4gICAgZmlsdGVyZWRUb2Rvcy5mb3JFYWNoKGZ1bmN0aW9uICh0b2RvKSB7XHJcbiAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBwLnRleHRDb250ZW50ID0gdG9kby50ZXh0O1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvcycpLmFwcGVuZENoaWxkKHApXHJcbiAgICB9KVxyXG59O1xyXG5cclxucmVuZGVyVG9kb3ModG9kb3MsIGZpbHRlcnMpO1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC10ZXh0JykuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZmlsdGVycy5zZWFyY2hUZXh0ID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICByZW5kZXJUb2Rvcyh0b2RvcywgZmlsdGVycylcclxufSk7XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXRvZG8nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdG9kb3MucHVzaCh7XHJcbiAgICAgICAgdGV4dDogZS50YXJnZXQuZWxlbWVudHMudGV4dC52YWx1ZSxcclxuICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlXHJcbiAgICB9KTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSk7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSkpKTtcclxuICAgIHJlbmRlclRvZG9zKHRvZG9zLCBmaWx0ZXJzKTtcclxuICAgIGUudGFyZ2V0LmVsZW1lbnRzLnRleHQudmFsdWUgPSAnJztcclxufSk7XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGlkZS1jb21wbGV0ZWQnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZmlsdGVycy5oaWRlQ29tcGxldGVkID0gZS50YXJnZXQuY2hlY2tlZDtcclxuICAgIHJlbmRlclRvZG9zKHRvZG9zLCBmaWx0ZXJzKVxyXG59KTtcclxuXHJcbmV4cG9ydCB7dG9kb3N9O1xyXG5cclxuLy8gMS4gQ3JlYXRlIGEgY2hlY2tib3ggYW5kIHNldHVwIGV2ZW50IGxpc3RlbmVyIC0+IFwiSGlkZSBjb21wbGV0ZWRcIlxyXG4vLyAyLiBDcmVhdGUgbmV3IGhpZGVDb21wbGV0ZWQgZmlsdGVyIChkZWZhdWx0IGZhbHNlKVxyXG4vLyAzLiBVcGRhdGUgaGlkZUNvbXBsZXRlZCBhbiByZXJlbmRlciBsaXN0IG9uIGNoZWNrYm94IGNoYW5nZVxyXG4vLyA0LiBTZXR1cCByZW5kZXJUb2RvcyB0byByZW1vdmUgY29tcGxldGVkIGl0ZW1zXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9hcHAuanMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);