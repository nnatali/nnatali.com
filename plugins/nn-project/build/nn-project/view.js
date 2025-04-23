/******/ (() => { // webpackBootstrap
/*!********************************!*\
  !*** ./src/nn-project/view.js ***!
  \********************************/
document.querySelectorAll('.nn-project').forEach(project => {
  project.addEventListener('mouseenter', e => {
    e.currentTarget.querySelectorAll('video')[0].play();
  });
  project.addEventListener('mouseleave', e => {
    e.currentTarget.querySelectorAll('video')[0].pause();
  });
});
/******/ })()
;
//# sourceMappingURL=view.js.map