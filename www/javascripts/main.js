// Main.js
"use strict";
$(function(){

  var $todoTextEl = $("[data-js='todo__textInput']");
  var $todoEnterEl = $("[data-js='todo__enter']");
  var $listEl = $("[data-js='list']");
  var $listTextEl = $("[data-js='list__text']");
  var $listItemEl = $("[data-js='list__item']");
  var $circle = $("[data-js='circle']");
  var $alertHidden = $("[data-js='alert__hidden']");



  //auto focuses the text input because clicking is annoying
  $todoTextEl.focus();

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

  // Listens for the enter button to be pressed (or the submit
  // button to be clicked)
  $todoEnterEl.on("click", function(e){
    e.preventDefault();
    var $enteredItem = $todoTextEl.val();
    submitTodo($enteredItem);
    $todoTextEl.val("");


    //Stores the number of list items complete and incomplete
    var $n = $listEl.children().length;
    // Adds html for the item counter; displays x item for 1 item
    // and x items for more than that or if all are deleted
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
    };

    if($todoTextEl.val().length == 1){
      // Changes placeholder text to infor user that they need to
      // enter more than one character.
      $todoTextEl.attr("placeholder", "oops..please enter more than one character :)" );
    }else{
      // Chenges back to default message...originally tried this if/else as
      // part of the previous if statement, but the placeholder
      // stayed as the oops message. Dont know why this worked,
      // but it did!
      $todoTextEl.attr("placeholder", "type todo item here..." );
    };
  };

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

  // Toggles the circle (and by way of css the list text) to a
  // taks-comleted mode with a green circle and strikethrough text.
  $listEl.on("click", "[data-js='circle']", function(e){
    var $circleSelected = $(e.currentTarget);
    $circleSelected.parent().toggleClass("list__item--completed");
  });

});
