// Main.js

"use strict";

var $ = require('jquery');
var item = require('./item.js');
var completed = require('./completed.js');


$(function(){
  var $listEl = $("[data-js='list']");
  var $listTextEl = $("[data-js='list__text']");
  var $listItemEl = $("[data-js='list__item']");
  var $circle = $("[data-js='circle']");
  var $alertHidden = $("[data-js='alert__hidden']");



  //auto focuses the text input because clicking is annoying
  // $todoTextEl.focus();
  completed.init();
  item.init();

  //Listens for the backspace (delete on macs) and deletes all
  //selected list items.
  $(document).keyup(function(e){
    if(e.keyCode === 8){
      $("li.list__item--selected").remove();
    };
    var $n = $listEl.children().length;
    if($n == 1){
      $("[data-js='footer']").html(`
        <label class="footer__counter"
           data-js="footer__counter">
           ${$n} item
        </label>
      `);
    }else{
      $("[data-js='footer']").html(`
        <label class="footer__counter"
           data-js="footer__counter">
           ${$n} items
        </label>
      `);
    };
  });

  // Toggles the list items to be selected or deselected
  $listEl.on("click", "[data-js='list__text']", function(e){
    var $selectedItem = $(e.currentTarget);
    $selectedItem.parent().toggleClass("list__item--selected");

    // if($listEl.hasClass("list__item--selected") == true){
    //   $("body").append(`
    //     <h4 class="deleteMessage__hidden"
    //         data-js="deleteMessage">
    //       press backspace (delete) to remove selected
    //     </h4>
    //   `);
    // };

  });



});
