//Business Logic(Back-End)
function converter(number){
  if (number !== number || 0 !== number % 1 || number >= 4000) {
    return "That's not a valid input. Please enter a whole number, less than 4,000."
  };
  var numeralString = "";
  for(var i = 1; number >= i * 1000; i++) {
    numeralString = numeralString + "M";
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
