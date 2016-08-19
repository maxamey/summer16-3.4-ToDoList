// Main.js

"use strict";

$(function(){

  var $todoTextEl = $("[data-js='todo__textInput']");

  var $todoEnterEl = $("[data-js='todo__enter']");

  var $listEl = $("[data-js='list']");

  var $list__itemEl = $("[data-js='list__item']")



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

    $list__itemEl.on("click", function(){
      
    });



  };
});
