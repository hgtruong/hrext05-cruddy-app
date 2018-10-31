/*
listen for click event (edit)
update text in local storage (with key)
update display with new text value


 */

$(document).ready(function(){
  console.log('before\n', window.localStorage);
  var todoCounter = 0;

  renderDisplay(localStorage);
  // add event listener
  $('.addTextBtn').on('click', function(){
    $('.showText').empty();
    todoCounter = localStorage.length;
    var curTextValue = $('#theKey').val(); // reading from <input>
    var curKeyValue = 'theKey' + todoCounter;
    todoCounter++;
    localStorage.setItem(curKeyValue, curTextValue);
    renderDisplay(localStorage);

/**/
  });

  // remove item from app

  // listen for click event (del)
  $('.clearCacheBtn').on('click', function(){
    // clear local storage
    localStorage.clear();
    $('.showText').empty();
    todoCounter = 0;
  });

  /// ***** renderDisplay(jsonObject); **********
  function renderDisplay(localStorage){
    console.log(localStorage);
    $('.showText').append('<div id=accordion> </div>');
    for(var key in localStorage){
      if(localStorage.hasOwnProperty(key)){
        var header = $('<h3></h3>');
        var counter = key.charAt(key.length-1);
        var todoContent = $('<div></div>');
        header.html(`${++counter}`);
        todoContent.html(`<p> ${localStorage[key]} </p>`)
        $('#accordion').append(header,todoContent);
      }
    }
    $('#accordion').accordion({
      collapsible: true
    });
  }


  $(function() {
    $('.addTextBtn').button({icon:'ui-icon-plus'});
    $('.clearCacheBtn').button({icon:'ui-icon-close'});
    // $('#accordion').accordion({
    //   // collapsible: true;
    // });
  });

});