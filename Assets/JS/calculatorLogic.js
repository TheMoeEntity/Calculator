//shortcut to shorten getElementById Syntax

	function getID(x) {
		return document.getElementById(x);
	}

	//get all buttons with class b

	 var allBtns = document.querySelectorAll(".b");
	 var first = 0;
	 var second = 0;
	 var sqrtVal = 0;
	 var hasOp = false;
	 var clickSound = new Audio('Assets/Others/iphonebuttonClick.mp3');
	 var deletemp3 = new Audio('Assets/Others/iphonedeleteclick.mp3');

	 //get all operations with class gold
	 var opr = document.querySelectorAll(".gold");


	 //logic to display all buttons with class b
	 for (let btn of allBtns) {

	  btn.onclick = function() {

		const audioContext = window.AudioContext || window.webkitAudioContext;
		const audioCtx = new AudioContext()
		clickSound.play();

		if (this.value == "0") {
			if (getID("demo").textContent == "0") {
				return
			}
		}

		if (getID("demo").textContent.length == 9) {
			return
		}
		getID("demo").innerHTML += this.value;



	 	//play sound
			

		}

	}

//logic to handle math operations user click
	for (let mathOpr of opr) {

		mathOpr.onclick = function() {


		const audioContext = window.AudioContext || window.webkitAudioContext;
		const audioCtx = new AudioContext()
		clickSound.play();


			if (getID("demo").innerHTML == "") {

				if (this.value == "√" ) {
						hasOp = true;
				} else {
					getID("demo2").innerHTML = this.value;
				}
			}

			getID("demo2").innerHTML = this.value;

			if (document.getElementById("demo").innerHTML != "") {

				document.getElementById("demo2").innerHTML = this.value;
				window.hasOp = true;
				window.first = Number(document.getElementById("demo").innerHTML);
				document.getElementById("demo").innerHTML = "";

		  }


	}


}


//Handle Math Calculations
	class MathOperation {

		constructor (first,second) {
			this.first = first;
			this.second = second;
		}


		calculate(operation) {

			let finalAnswer = 0
			switch (operation) {
				case "+":
				finalAnswer = this.first+this.second
				break;
				case "-":
				finalAnswer = this.first-this.second
				break
				case "*":
				finalAnswer = this.first*this.second
				break;
				case "/":
				finalAnswer = this.first/this.second
				break;
				case "√":
				finalAnswer = calculateSqrt()
				break;
				case "%":
				finalAnswer = this.first%this.second
				break;
			}

			//check for decimal
			let result = (finalAnswer - Math.floor(finalAnswer)) !== 0
			finalAnswer = result ? Math.round(finalAnswer*100000)/100000 : finalAnswer

			return finalAnswer
		}


	}

//Actual Math Calculations logic

	document.getElementById("equals").onclick = function() {

		if (window.hasOp == true) {

			window.second = document.getElementById("demo").innerHTML;
			var mathOpr = new MathOperation(Number(window.first),Number(window.second));


			switch(document.getElementById("demo2").innerHTML) {

			case "+":
			getID("demo").innerHTML = mathOpr.calculate("+");
			break;

			case "-":
			getID("demo").innerHTML = mathOpr.calculate("-");
			break;

			case "*":
			getID("demo").innerHTML = mathOpr.calculate("*");
			break;

			case "/":
			getID("demo").innerHTML = window.second == 0 ? "Math Error" : mathOpr.calculate("/");
			break;

			case "%":
			getID("demo").innerHTML = mathOpr.calculate("%");
			break;

			case "√":
			getID("demo").innerHTML = mathOpr.calculate("√");
			break;

		}
	}



hasOp = false;
document.getElementById('demo2').textContent = "";

}

//Square root Logic
	function calculateSqrt() {

		let result = 0;
		result = (window.first == "0") ? Math.sqrt(Number(window.second)) : Math.sqrt(Number(window.first));
		return result;

	}

	getID("cancel").onclick = function() {
		document.getElementById("demo2").innerHTML = "";
		document.getElementById("demo").innerHTML = "";

	}

	document.getElementById("delete").onclick = function del() {

			const audioContext = window.AudioContext || window.webkitAudioContext;
			const audioCtx = new AudioContext()
			deletemp3.play();
			document.getElementById("demo").innerHTML =
			document.getElementById("demo").innerHTML.slice(0,document.getElementById("demo").textContent.length-1);

	}

	document.getElementById("dott").onclick = function dotClicked() {

		let checkForDot = document.getElementById('demo').innerHTML;
		let dot = ".";

		if (checkForDot.indexOf(dot) == -1) {
			document.getElementById("demo").innerHTML += checkForDot=="" ? "0.":dot;
		} else {
			return;
		}


	}


	document.getElementById("plusminus").onclick = function() {
		let currtext = document.getElementById("demo").innerHTML;
		let minus = "-";
		let currNum = 0


		if (currtext.indexOf(minus) == -1) {
			var slicedText = minus + currtext.slice(0);
			document.getElementById("demo").innerHTML = slicedText;
		} else {
			document.getElementById("demo").innerHTML = currtext.substring(1);
		}
	}

	document.getElementById("ce").onclick = function() {

		if (document.getElementById("demo").innerHTML !== "" && document.getElementById("demo2").innerHTML !== "") {
			document.getElementById("demo").innerHTML = "";
		} else if (document.getElementById("demo").innerHTML == "" && document.getElementById("demo2").innerHTML !== "") {
			document.getElementById("demo2").innerHTML = "";
			window.hasOp = false;
			document.getElementById("demo").innerHTML = window.first;
		} else if(document.getElementById("demo").innerHTML == window.first) {
			document.getElementById("demo").innerHTML = "";
			window.first = 0;
		} else if (document.getElementById("demo").innerHTML !== "") {
			document.getElementById("demo").innerHTML = "";
		}
	}


	//Display Time

	var myVar = setInterval(myTimer, 1000);

	function myTimer() {

  	var d = new Date();
  	var t = d.toLocaleTimeString();

  	function formatAMPM(date) {
  		var hours = date.getHours();
  		var minutes = date.getMinutes();
  		var ampm = hours >= 12 ? 'pm' : 'am';
  		hours = hours % 12;
  		hours = hours ? hours : 12; // the hour '0' should be '12'
  		minutes = minutes < 10 ? '0'+minutes : minutes;
  		var strTime = hours + ':' + minutes + ' ' + ampm;
  		return strTime;
	}

	document.getElementById("time").innerHTML = formatAMPM(new Date);

	}
