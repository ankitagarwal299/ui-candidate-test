     // Example unit test function
     function divide( a, b ) {
        // To see the test pass, uncomment the following line
        return a / b;
     }

     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) {
         // FILL THIS IN
         return str.split('').reverse().join('');

     }

     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {
         // FILL THIS IN
	return Math.min.apply(this,values);
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
         // FILL THIS IN
	    var obj = {};
	    var element;
	    var arr=[];
  

	  for (var prop=0; prop < values.length ;prop++){
	    element = values[prop];
	    
	    if (!obj[element]){
	      arr.push(element);
	      obj[element]= true;
	    }
	  }
  
	  return arr.join();
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
         // FILL THIS IN
		 for (var i=1 ; i <=100 ;i++){
		    
		    if (i%3 == 0 && i%5 ==0){
		      console.log("FizzBuzz");    
		    }
		    else if (i%3 == 0){
			console.log("Fizz");        
		    }else if(i%5 == 0) {
			console.log("Buzz");          
		    }else{
			console.log(i);          
		    }
		  }  
     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
         // FILL THIS IN
	 var obj = {};
	 var element,temp;
	 var arr =[];
  
	  for (var prop in fruitsToRemove){
	    element = fruitsToRemove[prop];
	    obj[element] = element;
	  }
          //console.log(obj);
  
  
	  for (var i=0 ; i<  fruits.length;i++){
	    temp = fruits[i];
	    if (!obj[temp]){
	      //fruits.splice(i,1);  
	      arr.push(temp);
	     }
	  }
    
	  return arr.join();
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
         // FILL THIS IN
	 if (Array.isArray(toPush)){
	    for (var i in toPush){
	      array.push(toPush[i]);    
	    }
	  }else{    
	    array.push(toPush);
	  }
	return array;
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
         // FILL THIS IN
	var arr=[];
	 if(sourceStr.length !== 0){
	   return sourceStr.split(' ').reverse().join();
	  }else{
	     return arr;
	  }
       }
     

     // Write a function that will take any number of arguments and return their sum
     function sum() {
         // FILL THIS IN
	 var sum=0;    
	 var arr =Array.prototype.slice.call(arguments);
  
	  for (var i=0; i< arr.length; i++){
	    sum += arr[i];
	  }
	return sum;
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
         // FILL THIS IN
		
		return sourceStr.trim().length == 0;

     }

     // write an example of a javascript closure
     function closureExample (){
  	    var intro="My Name is:";
	
	    function inner(firstName, lastName){
	        return intro+ " "+ firstName +" "+ lastName;
	  }    

	  return inner;
       }

     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)

function json (){
  
		  var people = [
			  {
			    "firstname": "Ankit",
			    "lastname": "Agarwal",
			    "city": "LosAngeles",
			    "state": "California",
			    "zip": "91801",
			    "phone": 
				    {
				     "home": 6265103710,
				     "work": 6265103710,
				     "home": 6265103710
				    }
			    } ,{
			    "firstname": "Ankit",
			    "lastname": "Agarwal",
			    "city": "LosAngeles",
			    "state": "California",
			    "zip": "91801",
			    "phone": 
				    {
				     "home": 987654321,
				     "work": 1234567890,
				     "home": 9876123453
				    }
			    },{
			    "firstname": "Ankit",
			    "lastname": "Agarwal",
			    "city": "LosAngeles",
			    "state": "California",
			    "zip": "91801",
			    "phone": 
				    {
				     "home": 987654321,
				     "work": 1234567890,
				     "home": 9876123453
				    }
			    }];
		  

		  return  people; 
		}



     // Create a javascript object (DataTable) with the following:
     // A private columns property (string array)
     // A private rows property (string array)
     // A public method addRows that adds an item to the rows array
     // A public method addColumns that adds an item to the columns array
     // A public method getData that returns the a json object representation of the DataTable
     // Note: the row object should be a hash of the column name and row item value
     // Example:
     // .addColumns('column1', 'column2', 'column3');
     // .addRow('value1A', 'value1B', 'value1C');
     // .addRow('value2A', 'value2B', 'value2C');




     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.
	
	$(document).ready(function(){
	var array = ["item1","item2","item3","item4"];
	
			$select =  $("<select id= 'Select'></select>");
			for (var i = 0; i < array.length; i++) {
				$option =$("<option value ="+ i+">"+ array[i] +"</option>");
				$select.append($option);
			}
	
		      $('#div1').append($select);
		      $button1 = "<button type='button' id='bu'>Try it</button>"
		      $('#div1').append($button1);
		      
		       $('#bu').click(function(event){
			       console.log( $( "#Select" ).val());
			       console.log( $( "#Select option:selected" ).text());
			});
	});



     // Write 5 different jQuery selectors to retrieve the sample anchor in the markup below.


$(document).ready(function(){
// console.log($("div a.link").html());//select 'a' element which has class =.link, inside div
  console.log("Selector '$('div #fizz > a').text() results: " + $("div #fizz > a").text());//child selector inside div with id "fizz"
  console.log("Selector $('a:first').html()  results: "+ $("a:first").html());//select first 'a' element in the DOM
  console.log("Selector $( 'div #fizz' ).find( 'a' ).html() results: " + $( "div #fizz" ).find( "a" ).html());//find the 'a' element in the div specific to identifier fizz
  console.log("Selector $('div #fizz [href]').text() results: " + $("div #fizz [href]").text());//select element inside div with id fizz which has 'a' element
  console.log("Selector $('div #fizz a[target!='_blank']').text() results: " + $("div #fizz a[target!='_blank']").text());//select 'a' element whose target is not equal to blank
});




     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".

	$(document).ready(function() {  
         var list = ['one', 'two', 'three','four','five'];  
	  $ul = $('#list1');  
	  for (var i = 0; i < list.length; i++) {
	    $ul.append("<li>"+ list[i] + "</li> ");
	  }
	});




     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
	
   $(document).ready(function(){
  
  	$div = $('div #foobar');
	
	  $ul.append("<li><input type='checkbox' class='group' name='c1' id='c1' value='1' /></li>");
	  $ul.append("<li><input type='checkbox' class='group' name='c2' id='c2' value='2' /></li>");
	  $ul.append("<li><input type='checkbox' class='group' name='c2' id='c2' value='3' /></li>");
	  $ul.append("<li><input type='checkbox' class='group' name='c2' id='c2' value='4' /></li>");
	  $ul.append("<li><input type='checkbox' class='group' name='c2' id='c2' value='5' /></li>");
	  $ul.append("<li><input type='checkbox' class='group' name='c2' id='c2' value='6' /></li>");
	  $ul.append("<li><input type='checkbox' class='group' name='c2' id='c2' value='7' /></li>");
	  $ul.append("<li><a id='select' href='#'>selectall </a></li>");
	  $ul.append("<li><a id='deselect' href='#'>deselectall </a></li>");

	 $div.append($ul);

	  $("#select").click(function() {
		   $(':checkbox').prop('checked', true);
	  });

	  $('#deselect').click(function() {
	    if ($("input[type='checkbox']").prop("checked")) {
	      $(':checkbox').prop('checked', false);
	    }
	  });
	});

