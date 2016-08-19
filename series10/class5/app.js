var createName = function(first, last) {
	return first + " " + last;
}

var askName = function (){
	var fullName;

	while (fullName !== "Bob Jones"){
		var first = prompt("What's your first name?");
		var last = prompt("What's your last name?");
		var fullName = createName(first, last);
		alert("Your name is " + fullName + "!");
	}
	
}

// var  = function("asker"){
// 	var asker = {
// 		asker.onClick = askName();
// 	}
// 	return asker;

var asker = document.getElementById("asker");
asker.onClick = askName();


//askName();