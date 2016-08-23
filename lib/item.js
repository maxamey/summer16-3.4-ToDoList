var $ = require('jquery');

var item = this;
var $todoEnterEl = $("[data-js='todo__enter']");
var $todoTextEl = $("[data-js='todo__textInput']");
var $listEl = $("[data-js='list']");


item.init = function(){
  // Listens for the enter button to be pressed (or the submit
  // button to be clicked)
  $todoEnterEl.on("click", function(e){
    e.preventDefault();
    var $enteredItem = $todoTextEl.val();
    item.submitTodo($enteredItem);
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
};


// Setting up a function to inject html into the index document
// Added a paragraph for the text so that when the user clicks
// on the circle to complete the task, they don't also click to
// delete.

item.submitTodo = function(submitString){
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
