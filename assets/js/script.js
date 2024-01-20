const currentDayEl = $("#currentDay");

// Display current day
var dayOfWeek = dayjs().format("dddd");
var month = dayjs().format("MMMM");
var dayOfMonth = dayjs().format("DD");

currentDayEl.append(`${dayOfWeek}, ${dayOfMonth}th ${month}`).css("color", "#06aed5");

// Color-code each timeblock based on past, present, and future
var currentHour = dayjs().format("hA");

$(".time-block").each(function (index, element) {
  var blockTime = dayjs($(element).data("time"), "hA");

  // Compare current time with the block time
  if (blockTime.isBefore(dayjs(currentHour))) {
    // Past
    $(element).addClass("past");
  } else if (blockTime.isSame(dayjs(currentHour))) {
    // Present
    $(element).addClass("present");
  } else {
    // Future
    $(element).addClass("future");
  }
});

// Allow a user to enter an event when they click a timeblock
// Save the event in local storage when the save button is clicked in that timeblock.
// Persist events between refreshes of a page
