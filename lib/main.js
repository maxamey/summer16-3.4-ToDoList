// Main.js

"use strict";

var $ = require('jquery');
var item = require('./item.js');
var completed = require('./completed.js');
var select = require('./selector.js');
var clearSelected = require('./clearSelected.js');


$(function(){
  //auto focuses the text input because clicking is annoying
  // $todoTextEl.focus();
  completed.init();
  item.init();
  select.init();
  clearSelected.init();
});
