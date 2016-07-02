$(document).ready(function(){

  var count = 0;
  var hours = 0;
  var minutes = 0;
  var seconds = 0;
  var deathes = 0;
  var birthes = 0;

  $(".buttonSwitcher").css({"background": "#ffffff"});

  function setValue(id, value) {
    document.getElementById(id).innerHTML = value
    if (id == "seconds") {
      if (value <= 1) {
        document.getElementById(id).innerHTML = value + " second "
        } else {
          document.getElementById(id).innerHTML = value + " seconds "
      };
      if (value == 60) {
        seconds = 0
        minutes += 1
        if (minutes <=1) {
            document.getElementById("minutes").innerHTML = minutes + " minute "
          } else {
            document.getElementById("minutes").innerHTML = minutes + " minutes "
        };
      };
    };
  };

  setValue("seconds", seconds);
  setValue("counter", deathes);

  window.setInterval(timerFunc, 10);
  window.setInterval(deathAndBirthFunc, 10);

  // Define world population
  // https://en.wikipedia.org/wiki/World_population
  var worldEarth = 7300000000


  // Here is actual birth and death data http://apps.who.int/gho/data/view.main.CBDR2020?lang=en


  // All
  var allDeath = (worldEarth / 1000) * 7.8
  var allBirth = (worldEarth / 1000) * 23.4

  // Death per second
  var deathSecond = allDeath / 365 / 24 / 60 / 60
  var birthSecond = allBirth / 365 / 24 / 60 / 60

  console.log (deathSecond)

  function timerFunc() {
    seconds += 0.01;
    var roundSeconds = Math.round(seconds);
    setValue("seconds", roundSeconds);
  };

  function deathAndBirthFunc() {
    deathes += deathSecond / 100;
    var roundDeathes = Math.round(deathes);
    birthes += birthSecond / 100;
    var roundBirthes = Math.round(birthes);
    if(count % 2 == 0) {
      setValue("counter", roundDeathes)
      } else {
      setValue("counter", roundBirthes)
    };
  };

  $(".buttonSwitcher").on ("click", function () {
    $("#counter").addClass("counterToNothing");
    if (count % 2 == 0) {
      $(".circle").removeClass("circleBlack");
      $(".circle").addClass("circleWhite");
      $("body").addClass("bgIsWhite");
      $(".container").addClass("textIsBlack");

      window.setTimeout(function(){
        $("#labelTwo").text("people were born");
        $("#counter").removeClass("counterToNothing");
      }, 500);

      $(".buttonSwitcher").css({"background": "#121314"});
    } else {
      $(".circle").removeClass("circleWhite");
      $(".circle").addClass("circleBlack");
      window.setTimeout(function(){
        $("body").removeClass("bgIsWhite");
        $(".container").removeClass("textIsBlack");
        $("#labelTwo").text("people died");
        $("#counter").removeClass("counterToNothing");
      }, 500);

      // $(".container").removeClass("textIsBlack");
      $(".buttonSwitcher").css({"background": "#ffffff"});
    };
    count++;
  });

});
