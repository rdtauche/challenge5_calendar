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
      var currentTime = dayjs().format('HH');

      $('.time-block').each(function() {
        var hourDay = parseInt($(this).attr('id').split('hour')[1]);

      if (hourDay < currentTime) {
        $(this).removeClass('present');
        $(this).removeClass('future');
        $(this).addClass('past');
      }
// corrected this to have 2 equal signs instead of 3
      else if (hourDay == currentTime) {
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
  
  // Ross: Added code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. 
  $('#hour9 .description').val(localStorage.getItem('hour9'));
  $('#hour10 .description').val(localStorage.getItem('hour10'));
  $('#hour11 .description').val(localStorage.getItem('hour11'));
  $('#hour12 .description').val(localStorage.getItem('hour12'));
  $('#hour13 .description').val(localStorage.getItem('hour13'));
  $('#hour14 .description').val(localStorage.getItem('hour14'));
  $('#hour15 .description').val(localStorage.getItem('hour15'));
  $('#hour16 .description').val(localStorage.getItem('hour16'));
  $('#hour17 .description').val(localStorage.getItem('hour17'));
  
  timeTracker();
  
  console.log(typeof "hourDay");
  console.log(typeof "currentTime");