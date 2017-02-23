// Back End
var isNumber = function(input){
  return !isNaN(input);
}
var isSmallEnough = function(input){
  return input<4000;
}
var convertToRoman = function (input){
  if(isNumber(input) && isSmallEnough(input)){
    var subNumbers = convertsSubNumbers(input);
    console.log(subNumbers);
    var numerals = convertToNumerals(subNumbers);
    console.log(numerals);
    var numeralsNineAdjusted = convertSymbolsToHigherOrderEqual(numerals,["","M", "C", "X"],9);
    console.log(numeralsNineAdjusted);
    var numeralsFourAdjusted = convertSymbolsToHigherOrderEqual(numeralsNineAdjusted,["","D", "L","V"],4);
    console.log(numeralsFourAdjusted);
    var numeralsMoreThanThreeAdjusted = convertSymbolsToHigherOrderGreater(numeralsFourAdjusted,["","D", "L","V"],3);
    console.log(numeralsMoreThanThreeAdjusted);
    // console.log(numeralsMoreThanThreeAdjusted);
    return numeralsFourAdjusted.join("");
  } else{
    alert("Input not valid. Please enter a number less than 4,000");
  }
}
var convertsSubNumbers = function (input){
  var subNumbers = [];
  var thousands = Math.trunc(input/1000);
  subNumbers.push(thousands);
  var hundreds = Math.trunc((input%1000)/100);
  subNumbers.push(hundreds);
  var tens = Math.trunc((input%100)/10);
  subNumbers.push(tens);
  var ones = Math.trunc(input%10);
  subNumbers.push(ones);
  return subNumbers;
}
var convertToNumerals = function (subNumbersArray){
  var romanMagnitudeSymbols = ["M", "C", "X", "I"];
  var outPutArray = []
  for (var i = 0; i<subNumbersArray.length; i++){
    var text = romanMagnitudeSymbols[i].repeat(subNumbersArray[i]);
    outPutArray.push(text);
  }
  return outPutArray;
}
var replaceAllbutFirstWith = function(str, symbolInHigherOrderOfMag){
  return str[0]+symbolInHigherOrderOfMag;
}
var replaceFirstFiveWith = function(str, symbolInHigherOrderOfMag){
  return symbolInHigherOrderOfMag + str[0].repeat(str.length-5);
}
convertSymbolsToHigherOrderEqual = function(numeralArray, romanSymbolArray, numberOfCharactersToReplace){
  for(var i = 0; i<numeralArray.length; i++){
    if(numeralArray[i].length===numberOfCharactersToReplace){
      numeralArray[i] = replaceAllbutFirstWith(numeralArray[i], romanSymbolArray[i]);
    }
  }
  return numeralArray;
}
convertSymbolsToHigherOrderGreater = function(numeralArray, romanSymbolArray, numberOfCharactersToReplace){
  for(var i = 0; i<numeralArray.length; i++){
    if(numeralArray[i].length>numberOfCharactersToReplace){
      numeralArray[i] = replaceFirstFiveWith(numeralArray[i], romanSymbolArray[i]);
    }
  }
  return numeralArray;
}
// Front End
$(function(){
  $("#input").submit(function(){
    event.preventDefault();
    var input = parseInt($("#user-input").val());
    var finalRoman = convertToRoman(input);
    $(".answer").text(finalRoman);
    $(".answer").show();
  });
});
