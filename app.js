/*
listen for click event (edit)
update text in local storage (with key)
update display with new text value


 */

$(document).ready(function(){
  console.log("before\n", window.localStorage);
  var todoCounter = 0;

  // add event listener
  $(".addTextBtn").on("click", function(){
    $(".showText").empty();
    todoCounter = localStorage.length;
    var curTextValue = $('#theKey').val(); // reading from <input>
    var curKeyValue = "theKey" + todoCounter;
    todoCounter++;
    localStorage.setItem(curKeyValue, curTextValue);

    console.log(localStorage);
    for(var key in localStorage){
      var todoItem = '';
      todoItem = `<input type="checkbox" name="${key}" value="${localStorage[key]}"> ${localStorage[key]}<br>`;
      console.log('todoitem', todoItem);
      $("#todoList").append(todoItem);
    }
  });

  // remove item from app

  // listen for click event (del)
  $(".clearCacheBtn").on("click", function(){
    // clear local storage
    localStorage.clear();
    $(".showText").empty();
    todoCounter = 0;
  });

  // Icon for button
  $(function() {
    $(".addTextBtn").button({icon:"ui-icon-plus"});
    $(".clearCacheBtn").button({icon:"ui-icon-close"});
  });

});