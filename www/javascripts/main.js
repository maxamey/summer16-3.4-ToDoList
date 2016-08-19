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

  // Listens for the enter button to be pressed (or the submit
  // button to be clicked)
  $todoEnterEl.on("click", function(e){
    e.preventDefault();
    var $enteredItem = $todoTextEl.val();
    submitTodo($enteredItem);
    $todoTextEl.val("");
  });

  // Setting up a function to inject html into the index document
  // Added a paragraph for the text so that when the user clicks
  // on the circle to complete the task, they don't also click to
  // delete.
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
    // Ensures the user enters at least 2 characters before they
    // publish their todo item to their list.
    if($todoTextEl.val().length >= 2){
      $listEl.append(template);
    }else{};
  };

  // Toggles the list items to be selected or deselected
  $listEl.on("click", "[data-js='list__text']", function(e){
    var $selectedItem = $(e.currentTarget);
    $selectedItem.parent().toggleClass("list__item--selected");
  });

  // Toggles the circle (and by way of css the list text) to a
  // taks-comleted mode with a green circle and strikethrough text.
  $listEl.on("click", "[data-js='circle']", function(e){
    var $circleSelected = $(e.currentTarget);
    $circleSelected.parent().toggleClass("list__item--completed");
  });


});
