$(document).ready(function() {
var currentHour = moment().format("HH");
var now = moment().format("dddd, MMMM Do, YYYY");

    $("[id^='hour']").each(function(_, el) {
        var description = localStorage.getItem($(el).attr('id')) || '';
        console.log(description) 
        $(el).find(".description").text(description)
    })
   updateHour() 
    $("#currentDay").text(moment().format("dddd, MMM Do"))
    
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
    
    $("#currentDay").append("<p class= 'body'>" + now + "</p>");
    
    $(".saveBtn").click(function() {
        
        var hour1 = $(this).parent().find(".description")
        .val()
        .trim()
        localStorage.setItem($(this).parent().attr('id'), hour1)
    })
    
    
})
    