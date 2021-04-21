//imports useful elements and assigns to variables
	var canvas = document.getElementById("pixelCanvas");
	var color = document.getElementById("colorPicker");
	var sizePicker = document.getElementById("sizePicker");
	var height = document.getElementById("inputHeight");
	var width = document.getElementById("inputWidth");

// When size is submitted by the user, call makeGrid() function
       sizePicker.addEventListener("submit", function(evt) {
	    evt.preventDefault();
	    while (canvas.hasChildNodes()) {
	        canvas.removeChild(canvas.lastChild);
	    }
	    makeGrid(height.value, width.value);
	});

//function to create grid and assign event listeners to all cells on creation
	function makeGrid(height, width) {
	    for (let y = 0; y < height; y++) {
	        let row = canvas.insertRow(y);
	        for (let x = 0; x < width; x++) {
	            let cell = row.insertCell(x);
	            cell.addEventListener("mousedown", function(evt) {
	                cell.style.backgroundColor = color.value;
	            cell.addEventListener("contextmenu", function(evt) {
	                evt.preventDefault();
	                cell.style.backgroundColor = "white";
	            } )
	            } )
	        }
	    }
	}
