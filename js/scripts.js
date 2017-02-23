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
    var numerals = convertToNumerals(subNumbers);
    // console.log(numerals);
    var numeralsNineAdjusted = convertXsymbolsToHigherOrder(numerals,["","M", "C", "X"],9);
    // console.log(numeralsNineAdjusted);
    var numeralsFourAdjusted = convertXsymbolsToHigherOrder(numeralsNineAdjusted,["","D", "L","V"],4);
    // romanSymbolArray, numberOfCharactersToReplace
    console.log(numeralsFourAdjusted);

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
//
// var convertNineSymbolsToNextOrder = function(numeralArray){
//   // console.log("Got here");
//   var romanMagnitudeSymbols = ["M", "C", "X", "I"];
//   for (var i = 0; i<numeralArray.length; i++){
//     // console.log("i is " + i);
//     // console.log("numeralArray[i] is " + numeralArray[i]);
//     // console.log("numeralArray[i]'s type is " + typeof numeralArray[i]);
//     if (numeralArray[i].length===9){
//       // console.log("this condition was met");
//       numeralArray[i] = replaceAllbutFirstWith(numeralArray[i], romanMagnitudeSymbols[i-1]);
//     }
//   }
//   return numeralArray;
// }

convertXsymbolsToHigherOrder = function(numeralArray, romanSymbolArray, numberOfCharactersToReplace){
  // var adjustedArray=[];
  for(var i = 0; i<numeralArray.length; i++){
    // console.log("i is " + i);
    if(numeralArray[i].length===numberOfCharactersToReplace){
      // console.log("numeralArray[i].length is" + numeralArray[i].length);
      numeralArray[i] = replaceAllbutFirstWith(numeralArray[i], romanSymbolArray[i]);
    }
  }
  return numeralArray;
}

// var convertFourSymbolsToHalfMagnitude = function(nineAdjustedArray){
//   var romanHalfMagnitudeSymbols = ["","D", "L","V"];
//   for(var i = 0; i<nineAdjustedArray.length; i++){
//     if(nineAdjustedArray[i].length===4){
//       nineAdjustedArray[i] = replaceAllbutFirstWith(numeralArray[i], romanHalfMagnitudeSymbols[i-1]);
//     }
//   }
//   return halfMagnitudeAdjustedArray;
// }

// Front End
$(function(){
  $("#input").submit(function(){
    event.preventDefault();
    var input = parseInt($("#user-input").val());
    var finalRoman = convertToRoman(input);
    // console.log(input);

  });

});
