var $ = require('jquery');
var remove = this;

var $listEl = $("[data-js='list']");

select.init = function(){
  // Toggles the list items to be selected or deselected
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
};
