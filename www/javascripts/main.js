// Main.js
"use strict";
$(function(){

  var $todoTextEl = $("[data-js='todo__textInput']");
  var $todoEnterEl = $("[data-js='todo__enter']");
  var $listEl = $("[data-js='list']");
  var $listTextEl = $("[data-js='list__text']");
  var $listItemEl = $("[data-js='list__item']");
  var $circle = $("[data-js='circle']");
  var $alertHidden = $("[data-js='alert__hidden']")

  //Listens for the backspace (delete on macs) and deletes all
  //selected list items.
  $(document).keyup(function(e){
    if(e.keyCode === 8){
      $("li.list__item--selected").remove();
    };
  });

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
    var listItemTemplate = `
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
      $listEl.append(listItemTemplate);
    }else{
      // Changes placeholder text to infor user that they need to
      // enter more than one character.
      $todoTextEl.attr("placeholder", "oops..please enter more than one character :)");
    };
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

  //Stores the number of list items
    //Tried using .size() but there is an error thath says
    // .size() is not a function. Is it because the li dont have
    // anything in them besides paragraphs? Have seemingly tried
    // every permutaion of "$(xselector).length" etc. As it is now,
    // I just get "0 items left" every time 😤
  var n = $listItemEl.children().length;

  $("[data-js='footer']").html(`
    <label class="footer__counter"
       data-js="footer__counter">
       ${n} items left
    </label>
  `);

});
