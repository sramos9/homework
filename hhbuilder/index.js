//Validate data entry (age is required and > 0, relationship is required)



const validateEntry = ()=> {

  var target = document.querySelector("builder");
  var div = document.createElement("div");
  div.innerHTML = 'some text goes here demo';

  var n, text;

   n = document.getElementsByTagName("age").value;
   if (n == ""){
    text = "Error age must be submitted";
    return false;
    } else if (isNaN(n) || n <= 0) {
      text = "Input not Valid, please enter your age.";
      return false;
    } else {
        text = "Input OK";
    };
    target.parentNode.insertBefore(div, target.nextSibling).innerHTML = text;

  //document.getElementById("target").innerHTML = text;
  //div.innerHTML = text;

};

validateEntry();

//Add people to a growing household list

//Remove a previously added person from the list

//Display the household list in the HTML as it is modified

//Serialize the household as JSON upon form submission as a fake trip to the server
