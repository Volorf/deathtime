var hours = 0;
var minutes = 0;
var seconds = 0;
var deathes = 0;

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

window.setInterval(someFunc, 10);

// Define world population
// https://en.wikipedia.org/wiki/World_population
var worldEarth = 7300000000

// Death of child (under-five) per year
// http://apps.who.int/gho/data/view.main.CM1300N?lang=en
var childDeath = (2820 + 1939 + 985) * 1000

// Adult mortality (15-60) per year
// http://apps.who.int/gho/data/view.main.1350?lang=en
var adultDeath = (152 + 121 + 182) * (worldEarth / 1000)

// All
var allDeath = childDeath + adultDeath

// Death per second
var deathSecond = allDeath / 365 / 24 / 60 / 60

console.log (deathSecond)

function someFunc() {
  seconds += 0.01;
  var roundSeconds = Math.round(seconds);
  setValue("seconds", roundSeconds);
  deathes += deathSecond / 100;
  var roundDeathes = Math.round(deathes)
  setValue("counter", roundDeathes)
};
