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

    var allValues = Object.values(localStorage);
    if(allValues.indexOf(curTextValue) === -1 && curTextValue.length > 0){
      localStorage.setItem(curKeyValue, curTextValue);
    } else if (curTextValue.length === 0) {
      alert('Entry can\'t be blank');
    } else {
      alert('Similar entry found');
    }


    renderDisplay(localStorage);
  });


  // listen for click event (del)
  $('.clearCacheBtn').on('click', function(){
    // clear local storage
    localStorage.clear();
    $('.showText').empty();
    todoCounter = 0;
  });

  /// ***** renderDisplay(jsonObject); **********
  function renderDisplay(localStorage){
    $('.showText').append('<div id=accordion> </div>');

    for(var key in localStorage){
      if(localStorage.hasOwnProperty(key)){
        var header = $('<h3></h3>');
        var counter = key.charAt(key.length-1);
        ++counter; // since we start at 0
        var todoContent = $(`<div id=content${counter}></div>`);
        var removeOption = $('<div class=remove> remove </div>');

        header.html(`${counter}`);
        todoContent.html(`<p> ${localStorage[key]} </p>`)
        $('#accordion').append(header,todoContent);
        console.log(`#content${counter}`)
        $(`#content${counter}`).append(removeOption);
      }
    }

    $('#accordion').accordion({
      collapsible: true
    });
  }


  $(function() {
    $('.addTextBtn').button({icon:'ui-icon-plus'});
    $('.clearCacheBtn').button({icon:'ui-icon-close'});
  });

  // Remove accordion
  $(document).on('click', '.remove', function(e){
     var lsLocation = $(this).parent()[0].id;
    console.log(typeof lsLocation);
    var deletedLocation =  Number(lsLocation.charAt(lsLocation.length - 1));
    var deletedKey = 'theKey' + (--deletedLocation);
    console.log(deletedKey);
    localStorage.removeItem(deletedKey);
    $(this).parent('div').prev('h3').andSelf().remove();
    console.log('storageAfter', localStorage);
  });


});