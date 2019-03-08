//author: Jessica Heyle Student ID: R00131139 Email: Jessica.heyle@mycit.ie

//this function checks the colour chosen and changes the image depending on this option
function colourChange() 
	{
	var colour = document.getElementById("Colours").value;
	document.getElementById("wrapper").style.background = colour; //change here to manipulate the css;
	}

//this function allows the form to submit only if the total box is not empty. It alerts the user to choose an option if empty
function orderSubmit() {
	if(document.getElementById('total').value != "") {
		document.getElementById("orderForm").submit();
	}
	else {
		alert("Choose at least one product to order"); 	
	}
}

function textVisible()
{
//set eyes to HIDDEN if the "Yes" checkbox is unticked
if (!document.getElementById("yesText").checked)
{
document.getElementById("wrapperText").style.display = "none";
}
else
{
document.getElementById("wrapperText").style.display = "block";
}
}

function imageVisible()
{
//set eyes to HIDDEN if the "Yes" checkbox is unticked
if (!document.getElementById("yesImage").checked)
{
document.getElementById("imageDisplay").style.display = "none";
}
else
{
document.getElementById("imageDisplay").style.display = "block";
}
}

function showEmail()
{
//set eyes to HIDDEN if the "Yes" checkbox is unticked
if (!document.getElementById("yesOwnImage").checked)
{
document.getElementById("facebookImage").style.display = "none";
}
else
{
document.getElementById("facebookImage").style.display = "block";
}
}