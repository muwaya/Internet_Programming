window.onload = makeAjaxRequest; // this is a callback for makeAjaxRequest - i.e. no brackets ().

/*
This is a global variable holding the request. It is global because it needs to be accessed 
by the two function that we have in this file.
*/
let xhr = false; 

function makeAjaxRequest() {
	
	// this code checks if the the browser supports XMLHttpRequests.
	if (window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	} else {
		if (window.ActiveXObject) {
			xhr = newActiveXObject("Microsoft.XMLHTTP");
		}
	}

	// if the request has been created successfully then configure it.
	if (xhr) { // it is successful when if(xhr) is equal to 'true'.
		xhr.open("GET", "counties.json", true);
		xhr.send(); 
		xhr.onreadystatechange = showContents; // the event listener onreadystatechange takes a callback which in this case is the function showContents.
	} else {
		// informting the user that the request creation was not successful.
		document.getElementById("updatemessage").innerHTML = "Could not perform stated Request";
	}	
}

function showContents() {
	if (xhRequest.readyState == 4) {
	    if (xhRequest.status == 200) {


		    let data = JSON.parse(xhr.responseText); // the variable 'data' holds the data received from the server.
			let txt = ""; // this variable holds the processed data.

			// the for loop builds the rows of the HTML table for displaying the data received to the user.
			for (let i=0; i < data.counties.length; i++) {
			  txt += "<tr><td>" + data.counties[i].name + "</td></tr>";
			}

			// we are injecting the processed data into the HTML DOM - the HTML code/markup.
			document.getElementById("countylist").innerHTML = txt;


		} else {
			document.getElementById("updatemessage").innerHTML = "An error occurred: " + xhr.status;
		}
	}
}


           
	




