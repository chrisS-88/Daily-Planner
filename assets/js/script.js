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
  console.log(currentHour);

  // loop through blocks
  $(".time-block").each(function (index, element) {
    var hourBlock = parseInt($(element).attr("id").split("hr")[1]);
    console.log(hourBlock);

    // switch classes based on past, present and future
    if (hourBlock < currentHour) {
      $(element).removeClass("present");
      $(element).removeClass("future");
      $(element).addClass("past");
    } else if (hourBlock == currentHour) {
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

// Persist events between refreshes of a page for each block
function persistEvents() {
  $("#hr9").children(".description").val(localStorage.getItem("hr9"));
  $("#hr10").children(".description").val(localStorage.getItem("hr10"));
  $("#hr11").children(".description").val(localStorage.getItem("hr11"));
  $("#hr12").children(".description").val(localStorage.getItem("hr12"));
  $("#hr13").children(".description").val(localStorage.getItem("hr13"));
  $("#hr14").children(".description").val(localStorage.getItem("hr14"));
  $("#hr15").children(".description").val(localStorage.getItem("hr15"));
  $("#hr16").children(".description").val(localStorage.getItem("hr16"));
  $("#hr17").children(".description").val(localStorage.getItem("hr17"));
}

// call functions
persistEvents();
colourCodeTimeBlock();
