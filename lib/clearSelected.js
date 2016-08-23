var $ = require('jquery');
var clearSelected = this;
var $listEl = $("[data-js='list']");


clearSelected.init = function(){
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
};
