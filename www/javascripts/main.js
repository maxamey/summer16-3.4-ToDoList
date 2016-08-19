// Main.js

"use strict";

$(function(){

  var $todoTextEl = $("[data-js='todo__textInput']");
  var $todoEnterEl = $("[data-js='todo__enter']");
  var $listEl = $("[data-js='list']");
  var $listTextEl = $("[data-js='list__text']");
  var $list__itemEl = $("[data-js='list__item']");
  var $circle = $("[data-js='circle']");

  // $(document).keyup(function(e){
  //   if(keyCode == 46){
  //     e.removeClass("list__item--selected");
  //   };
  // });

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
       <div class="circle"
            data-js="circle">
       </div>
       <p class="list__text"
          data-js="list__text">
        ${submitString}
       </p>
    </li>
    `;
    if($todoTextEl.val().length >= 2){
      $listEl.append(template);
    };
  };

  $listEl.on("click", "[data-js='list__text']", function(e){
    var $selectedItem = $(e.currentTarget);
    $selectedItem.parent().toggleClass("list__item--selected");
  });

  $listEl.on("click", "[data-js='circle']", function(e){
    var $circleSelected = $(e.currentTarget);
    $circleSelected.toggleClass("circle__selected");
  });


});
