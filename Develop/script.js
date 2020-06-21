var currentHour = moment().format("HH");
var now = moment().format("dddd, MMMM Do, YYYY");

$(document).ready(function() {
    $("#currentDay").text(moment().format("dddd, MMM Do"))
})

var updateHour = function () {
    $(".time.block").each(function() {
        var scheduledHour = $(this).att("id").split('-')[1]
        console.log(scheduleHour)
        if (scheduledHour < currentHour) {
            $(this).removeClass("future")
            $(this).addClass("past")
        }
        else if (scheduledHour === currentHour) {
            $(this).removeClass("past")
            $(this).addClass("present")
        }
        else {
            $(this).removeClass("past")
            $(this).removeClass("present")
            $(this).addClass("future")
        };
    })
};

$("#currentDay").append("<p class= 'body'>" + now + "</p>");

$(".saveBtn").click(function() {
    var hour1 = $(".description")
    .val()
    .trim()
    localStorage.setItem("description", hour1)
})

var time = $(this)
    .parent()
