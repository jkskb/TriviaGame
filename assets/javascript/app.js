var question = [{
    ask: "In a Moscow mule, what spirit is mixed with ginger beer?",
    right: "Vodka",
    ans: ["Gin", "Vodka", "Rye", "Whiskey"],
    name: "moscowMule",
    divClass: ".moscowMule"
},
{
    ask: "In the 13th century European children were baptized with what?",
    ans: ["Wine", "Champagne", "Vodka", "Beer"],
    right: "Beer",
    name: "baptized",
    divClass: ".baptized"
},
{
    ask: "The alien ET drank what brand of beer?",
    ans: ["Budweiser", "Coors", "Sapporo", "Heineken"],
    right: "Coors",
    name: "et",
    divClass: ".et"
},
{
    ask: "What was unusual about Co-op Winter Warmer ale's answer?",
    ans: ["It was made from a leaf", "It was embossed velvet", "It was written in invisible ink", "It was in braille"],
    right: "It was in braille",
    name: "coopAle",
    divClass: ".coopAle"
},
{
    ask: "Where would you buy a Steinlager beer?",
    ans: ["New Zealand", "Canada", "Japan", "Austria"],
    right: "New Zealand",
    name: "steinlager",
    divClass: ".steinlager"
},
{
    ask: "What gives root beer its flavor?",
    ans: ["Sasparilla", "Anise", "Celery Seed", "Cinnamon"],
    right: "Sasparilla",
    name: "rootBeer",
    divClass: ".rootBeer"
},
{
    ask: "What country produces Bulls Blood wine?",
    ans: ["Ireland", "South Africa", "Hungary", "Chile"],
    right: "Hungary",
    name: "bullsBlood",
    divClass: ".bullsBlood"
},
{
    ask: "An Enologist studies what?",
    ans: ["Wine", "Binge Drinking", "Barley", "Vodka"],
    right: "Wine",
    name: "enologist",
    divClass: ".enologist"
},
{
    ask: "There are how many gallons in a what Puncheon wine barrel?",
    ans: ["24", "83", "56", "92"],
    right: "83",
    name: "puncheon",
    divClass: ".puncheon"
},
{
    ask: "What is used to flavor Kriek Belgian beer?",
    ans: ["Cheese", "Oranges", "Cherries", "Beef Jerky"],
    right: "Cherries",
    name: "kriek",
    divClass: ".kriek"
}]

var answers = ["1", "2", "3", "4"];

var start = $("#startButton").on('click', function() {
    $(this).parent().hide();
    $('.answerScreen').show();
    countdown(6);
    showQuestions();
});

var showQuestions = function() {
    $(".question :not('#submitButton')").empty();

    for (var x = 0; x < 10; x++) {
        $('.question').prepend('<div class="' + question[x].name + '"></div>');
        $(question[x].divClass).append('<div class ="ques-title">' + question[x].ask + '</div>');
   
    for (var i = 0; i <= 3; i++) {
        $(question[x].divClass).append('<input type="radio"  name="' + question[x].name + '" value="' + question[x].ans[i] + '"/><answer for="' + answers[i] + '">' + question[x].ans[i] + '</answer>');
    }

    $('.question').prepend('<hr />');
    }
}

var countdown = function(seconds) {

    var timer = setInterval(function() {
        seconds = seconds - 1;
        $("#timer").html(seconds);

        if (seconds <= 0) {
            $('.answerScreen').fadeOut(500);
            var rightAnswers = 0;
            var wrongAnswers = 0;
            var noAnswer = 0;

            for (var i = 0; i < 10; i++) {
                if ($('input:radio[name="' + question[i].name + '"]:checked').val() === question[i].right) {
                    rightAnswers++;
                } else {
                    wrongAnswers++;
                };
            }
                $('#yesNoTimeLeft').append(rightAnswers);
                $('#noNoTimeLeft').append(wrongAnswers);
                $('#screen4').fadeIn(1000).show();

                clearInterval(timer);
                return;
        }

    }, 1000);

    $('#submitButton').on('click', function() {
    clearInterval(timer);
    })
};

var gradeQuiz = $('#submitButton').on('click', function() {
    var rightAnswers = 0;
    var wrongAnswers = 0;
    var noAnswer = 0;
    
    for (var i = 0; i < 10; i++) {

        if ($('input:radio[name="' + question[i].name + '"]:checked').val() === question[i].right) {
            rightAnswers++;
            } else {
                wrongAnswers++;
                };
    };
    countdown();
    $('.answerScreen').fadeOut(500);
    $('#screen3').show();
    $('#yes').append(rightAnswers);
    $('#no').append(wrongAnswers);

});
