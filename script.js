$(document).ready(function() {
var currentHour = moment().format("HH");

//  current day month and year
var now = moment().format("dddd, MMMM Do, YYYY");

    // saves input text to local storage

    $("[id^='hour']").each(function(_, el) {
        var description = localStorage.getItem($(el).attr('id')) || '';
        $(el).find(".description").text(description)
    })
   updateHour() 

    //  changes the color of the background based on the hour 
    function updateHour() {
        $(".time-block").each(function(_, el) {
            var scheduledHour = $(el).attr("id").split('-')[1]
            if (+scheduledHour < +currentHour) {
                $(el).removeClass("future")
                $(el).removeClass("present")
                $(el).addClass("past")
            }
            else if (+scheduledHour === +currentHour) {
                $(el).removeClass("past")
                $(el).removeClass("future")
                $(el).addClass("present")
            }
            else {
                $(el).removeClass("past")
                $(el).removeClass("present")
                $(el).addClass("future")
            };
        })
    };
    
    
    // displays current day month and year to the p tag
    $("#currentDay").append("<p class= 'body'>" + now + "</p>");
    
    // event listener for save icon 
    $(".saveBtn").click(function() {
        
        var hour1 = $(this).parent().find(".description")
        .val()
        .trim()
        localStorage.setItem($(this).parent().attr('id'), hour1)
    })
    
    
})
    