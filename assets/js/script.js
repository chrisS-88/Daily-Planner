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
    var hourBlock = $(element).attr("id").split("hr"[1]);
    // console.log(hourBlock[1]);
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
colourCodeTimeBlock();
// $(".time-block").each(function (index, element) {
//   var blockTime = dayjs($(element).data("time"), "hA");
//   console.log(blockTime);

//   // Compare current time with the block time
//   if (blockTime.isBefore(dayjs(currentHour))) {
//     // Past
//     $(element).addClass("past");
//   } else if (blockTime.isSame(dayjs(currentHour))) {
//     // Present
//     $(element).addClass("present");
//   } else {
//     // Future
//     $(element).addClass("future");
//   }
// });

// Allow a user to enter an event when they click a timeblock
// Save the event in local storage when the save button is clicked in that timeblock.
// Persist events between refreshes of a page
