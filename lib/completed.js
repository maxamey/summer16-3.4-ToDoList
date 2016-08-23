var $ = require('jquery');
var $listEl = $("[data-js='list']");

var completed = this;

completed.init = function(){
  // Toggles the circle (and by way of css the list text) to a
  // task-completed mode with a green circle and strikethrough text.
  $listEl.on("click", "[data-js='circle']", function(e){
    var $circleSelected = $(e.currentTarget);
    $circleSelected.parent().toggleClass("list__item--completed");
  });
};
