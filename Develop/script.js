// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
  // Ross: below code is to display the current date in the header of the page.
  var dateToday = dayjs().format('dddd, MMMM D YYYY');
  $('#currentDay').text(dateToday);

  // Ross: Added an event listener for click events on the save button saved to local storage
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
  })

  // Ross: Added code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. 
  function timeTracker() {
      var currentTime = dayjs('HH');

      $('.time-block').each(function() {
        var hourDay = parseInt($(this).attr('id').split('hour')[1]);

      if (hourDay < currentTime) {
        $(this).removeClass('present');
        $(this).removeClass('future');
        $(this).addClass('past');
      }

      else if (hourDay === currentTime) {
        $(this).removeClass('future');
        $(this).removeClass('past');
        $(this).addClass('present');
      }

      else {
        $(this).removeClass('present');
        $(this).removeClass('past');
        $(this).addClass('future');
      }
      })
  } 

  timeTracker();

  // Ross: Added code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. 
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));
