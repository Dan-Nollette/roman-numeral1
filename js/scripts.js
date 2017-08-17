//Business Logic(Back-End)
function converter(number){
  if (number !== number || 0 !== number % 1 || number >= 4000) {
    return "That's not a valid input. Please enter a whole number, less than 4,000."
  };
  var numeralString = "";
  for(var i = 1; number >= i * 1000; i++) {
    numeralString = numeralString + "M";
  }
  if(number % 1000 >= 900){
    numeralString = numeralString + "CM";
  }else if(number % 1000 >= 400 && number % 1000 < 500){
    numeralString = numeralString + "CD";
  }else{
    if(number % 1000 >= 500){
    numeralString = numeralString + "D";
    }
    for(var i = 1; number % 500 >= i * 100; i++){
      numeralString = numeralString + "C";
    }
  }

  if(number % 100 >= 90){
    numeralString = numeralString + "XC";
  }else if(number % 100 >= 40 && number % 100 < 50){
    numeralString = numeralString + "XL";
  }else{
    if(number % 100 >= 50){
    numeralString = numeralString + "L";
    }
    for(var i = 1; number % 50 >= i * 10; i++){
      numeralString = numeralString + "X";
    }
  }

  if(number % 10 >= 9){
    numeralString = numeralString + "IX";
  }else if(number % 10 >= 4 && number % 10 < 5){
    numeralString = numeralString + "IV";
  }else{
    if(number % 10 >= 5){
    numeralString = numeralString + "V";
    }
    for(var i = 1; number % 5 >= i * 1; i++){
      numeralString = numeralString + "I";
    }
  }

  return numeralString;
};














//User Interface (UI or Front-End)

$(document).ready(function(){
  $("#roman-numeral-form").submit(function(event){
    var number = parseFloat($("input#num-input").val());
    alert(number);
    var output = converter(number);
    $("#output").text(output);
    event.preventDefault();
  });
});
