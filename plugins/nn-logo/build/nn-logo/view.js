/******/ (() => { // webpackBootstrap
/*!*****************************!*\
  !*** ./src/nn-logo/view.js ***!
  \*****************************/
/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/* eslint-disable no-console
console.log( 'Hello World! (from create-block-nn-logo block)' );
eslint-enable no-console */

// based in Tim Holman CodePen
// https://codepen.io/tholman/pen/kNWZaW
(function () {
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];
  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
  }
  if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback, element) {
    var currTime = new Date().getTime();
    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
    var id = window.setTimeout(function () {
      callback(currTime + timeToCall);
    }, timeToCall);
    lastTime = currTime + timeToCall;
    return id;
  };
  if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
    clearTimeout(id);
  };
})();
var Nodes = {
  density: 3,
  reactionSensitivity: 1,
  points: [],
  lines: [[], []],
  mouse: {
    x: -1000,
    y: -1000,
    down: false
  },
  animation: null,
  canvas: null,
  context: null,
  init: function () {
    this.canvas = document.createElement('canvas');
    document.getElementById('nnLogo').appendChild(this.canvas);
    this.context = this.canvas.getContext('2d');
    this.context.lineJoin = 'bevel';
    this.canvas.width = window.innerWidth;
    this.canvas.height = 500;
    this.canvas.style.background = '#0282CC';
    this.canvas.addEventListener('mousemove', this.mouseMove, false);
    this.canvas.addEventListener('mousedown', this.mouseDown, false);
    this.canvas.addEventListener('mouseup', this.mouseUp, false);
    this.canvas.addEventListener('mouseout', this.mouseOut, false);
    window.onresize = function () {
      Nodes.canvas.width = window.innerWidth;
      Nodes.canvas.height = 500;
      Nodes.onWindowResize();
    };
    this.preparePoints();
    this.draw();
  },
  preparePoints: function () {
    this.points = [];
    this.lines = [[], [], [], [], []];
    for (var i = -10; i < this.canvas.width + 10; i += this.density) {
      var line1 = {
        y: 176,
        originalY: 176
      };
      var line2 = {
        y: 263,
        originalY: 263
      };
      var line3 = {
        y: 285,
        originalY: 285
      };
      var line4 = {
        y: 305,
        originalY: 305
      };
      var line5 = {
        y: 323,
        originalY: 323
      };
      line1['x'] = i;
      line1['originalX'] = i;
      line2['x'] = i;
      line2['originalX'] = i;
      line3['x'] = i;
      line3['originalX'] = i;
      line4['x'] = i;
      line4['originalX'] = i;
      line5['x'] = i;
      line5['originalX'] = i;
      this.points.push(line1);
      this.points.push(line2);
      this.points.push(line3);
      this.points.push(line4);
      this.points.push(line5);
      this.lines[0].push(line1);
      this.lines[1].push(line2);
      this.lines[2].push(line3);
      this.lines[3].push(line4);
      this.lines[4].push(line5);
    }
  },
  updatePoints: function () {
    var i, currentPoint, theta, distance;
    for (i = 0; i < this.points.length; i++) {
      currentPoint = this.points[i];
      theta = Math.atan2(currentPoint.y - this.mouse.y, currentPoint.x - this.mouse.x);
      if (this.mouse.down) {
        distance = this.reactionSensitivity * 300 / Math.sqrt((this.mouse.x - currentPoint.x) * (this.mouse.x - currentPoint.x) + (this.mouse.y - currentPoint.y) * (this.mouse.y - currentPoint.y));
      } else {
        distance = this.reactionSensitivity * 150 / Math.sqrt((this.mouse.x - currentPoint.x) * (this.mouse.x - currentPoint.x) + (this.mouse.y - currentPoint.y) * (this.mouse.y - currentPoint.y));
      }
      currentPoint.x += Math.cos(theta) * distance + (currentPoint.originalX - currentPoint.x) * 0.07;
      currentPoint.y += Math.sin(theta) * distance + (currentPoint.originalY - currentPoint.y) * 0.07;
    }
  },
  drawPoints: function () {
    for (var i = 0; i < this.lines.length; i++) {
      var line = this.lines[i];
      this.context.beginPath();
      this.context.lineJoin = 'round';
      this.context.moveTo(line[0].x, line[0].y);
      this.context.strokeStyle = '#FFF';
      this.context.lineWidth = 1;
      for (var j = 1; j < line.length - 2; j++) {
        var point = line[j];
        var xc = (point.x + line[j + 1].x) / 2;
        var yc = (point.y + line[j + 1].y) / 2;
        this.context.quadraticCurveTo(point.x, point.y, xc, yc);
      }
      this.context.stroke();
      this.context.closePath();
    }
  },
  draw: function () {
    this.animation = requestAnimationFrame(function () {
      Nodes.draw();
    });
    this.clear();
    this.updatePoints();
    this.drawPoints();
  },
  clear: function () {
    this.canvas.width = this.canvas.width;
  },
  mouseDown: function (event) {
    Nodes.mouse.down = true;
  },
  mouseUp: function (event) {
    Nodes.mouse.down = false;
  },
  mouseMove: function (event) {
    Nodes.mouse.x = event.pageX;
    Nodes.mouse.y = event.pageY;
  },
  mouseOut: function (event) {
    Nodes.mouse.x = -1000;
    Nodes.mouse.y = -1000;
    Nodes.mouse.down = false;
  },
  onWindowResize: function () {
    cancelAnimationFrame(this.animation);
    this.preparePoints();
    this.draw();
  }
};
Nodes.init();
/******/ })()
;
//# sourceMappingURL=view.js.map