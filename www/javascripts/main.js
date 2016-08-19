// Main.js

"use strict";

$(function(){

  var $todoTextEl = $("[data-js='todo__textInput']");
  var $todoEnterEl = $("[data-js='todo__enter']");
  var $listEl = $("[data-js='list']");
  var $list__itemEl = $("[data-js='list__item']");

  $(document).keyup(function(e){
    if(keyCode == 46){
      e.removeClass("list__item--selected");
    };
  });

  $todoEnterEl.on("click", function(e){
    e.preventDefault();
    var $enteredItem = $todoTextEl.val();
    submitTodo($enteredItem);
    $todoTextEl.val("");
  });

  function submitTodo(submitString){
    var template = `
      <li class="list__item"
         data-js="list__item">
         ${submitString}
      </li>
    `;
    if($todoTextEl.val().length >= 2){
      $listEl.append(template);
    };
  };

  $listEl.on("click", "[data-js='list__item']", function(e){
    var $selectedItem = $(e.currentTarget);
    $selectedItem.toggleClass("list__item--selected");
  });


});
