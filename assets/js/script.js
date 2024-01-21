const currentDayEl = $("#currentDay");

// Display current day
var dayOfWeek = dayjs().format("dddd");
var month = dayjs().format("MMMM");
var dayOfMonth = dayjs().format("DD");

currentDayEl.append(`${dayOfWeek}, ${dayOfMonth}th ${month}`).css("color", "#06aed5");

// Color-code each timeblock based on past, present, and future
function colourCodeTimeBlock() {
  // get current hour
  var currentHour = dayjs().format("H");

  // loop through blocks
  $(".time-block").each(function (index, element) {
    var hourBlock = parseInt($(element).attr("id").split("hr")[1]);

    // switch classes based on past, present and future
    if (hourBlock < currentHour) {
      $(element).removeClass("present");
      $(element).removeClass("future");
      $(element).addClass("past");
    } else if (hourBlock === currentHour) {
      $(element).removeClass("past");
      $(element).removeClass("future");
      $(element).addClass("present");
    } else {
      $(element).removeClass("past");
      $(element).removeClass("past");
      $(element).addClass("future");
    }
  });
}

// Allow a user to enter an event when they click a timeblock
// Save the event in local storage when the save button is clicked in that timeblock.
$(".saveBtn").on("click", function (event) {
  // grab the input from description field for local storage
  var input = $(this).siblings(".description").val();

  // grab the time related to description field for local storage
  var hour = $(this).parent().attr("id");

  // set both to local storage
  localStorage.setItem(hour, input);
});

// Persist events between refreshes of a page
