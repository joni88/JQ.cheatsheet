$("body")
// to  select  an  element  we   use  $("element") rule  in  JQuery.

$(document).ready
// this  snippet  doesn't  run  the  code  until all  the  DOM ( document object model) 
// elemnet's  are  loaded. 

function() {
	alert("sorry  for  the  late  assignment");
}  //  this  is  a  function  that  gives  the  alert  with  the  message  in  the  quotes
// functions  can  be  stored  in  var

var old_function = function() { alert("Busy!"); }

// callback Declare a regular or anonymous function that takes another
// function as an argument, does something, then runs that other function
function wraper (old_function) {
	console.log(2%2); old_function();}

// If  we  want  to  execute  a  function  we  should  use
$(document).ready(
	function(){
		console.log(4%2);
	}); // this  way  the  console  is  going  to print 0

