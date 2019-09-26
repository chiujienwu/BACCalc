$(document).ready(init);

function init() {
    $("button").click(calculate)
}

function calculate() {

    /*
    The calculations are as follows:
    1.  Determine the total liquid ounces of alcohol consumed
            1 beer = 0.54 liquid ounces of alcohol
            1 glass of wine = 0.6 liquid ounces of alcohol
            1 shot = 0.6 liquid ounces of alcohol
         If someone drank 2 beers, their total liquid ounces is 2 * 0.54
         If someone drank 1 beer and 1 glass of wine, their total liquid ounces is 0.54 + 0.6

    2.  Multiply the result of step 1 by 7.5, which is the average alcohol absorption rate

    3.  Divide the result of step 2 by the person's weight (in pounds) to determine their BAC

    4.  From the result of step 3, subtract 0.015 for each hour since their first drink
            For example, if the person's first drink was 3 hours ago, subtract (3 * 0.015)

    5.  Round the result of step 4 to three decimal places
            For example, 0.080%

    To test your application, a 150 pound person who drinks 2 beers would have a BAC of 0.039% after one hour.
    */

    //code goes here

    //declare variables
    var beerQty = $("#numBeers").val();
    var beerOz = beerQty * 0.54;
    var wineQty = $("#numWine").val();
    var wineOz = wineQty * 0.60;
    var shotQty = $("#numShots").val();
    var shotOz = shotQty * 0.60;
    var ozAlcohol = beerOz + wineOz + shotOz;               //results of step 1
    var alcoholAbsorb = ozAlcohol * 7.50;                   //results of step 2
    var weight = $("#weight").val();
    var initBAC = alcoholAbsorb / weight;                   //results of step 3
    var hoursSinceFirst = $("#hoursDrink").val();
    var finalBAC = (initBAC - (hoursSinceFirst * 0.015)).toFixed(3);

    $("p").text(finalBAC + " %");

    return false;
}