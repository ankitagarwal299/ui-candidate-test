/********************************
Unit Test Example
********************************/
module( "Example Unit Test" );
test( "Example Test", 2, function() {
    // Verify the method exists
    equal( typeof divide, 'function', 'Must contain a divide function' ); 

    // Make sure the result from the divide function is valid
    ok( divide( 4, 2 ), 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
});
/********************************
Please create your tests below...
********************************/
module( "String Reverse Unit Test" );
test( "String Reverse Test", 2, function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'Must contain a string reverse function' ); 

// Make sure the result from the reverseString function is valid
ok( reverseString( "Hello World!" ), "!dlroW olleH", 'Expected !dlroW olleH as the result, the result was: ' + reverseString( "Hello World!" ) );
});

//==================================================================================================================
module( "Array returns min value Unit Test" );
test( "Returns Min Value from Array Test", 2, function() {
    // Verify the method exists
    equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' ); 

// Make sure the result from the findMinValue function is valid
ok( findMinValue( [1,2,3,4,5] ), 1, 'Expected 1 as the result, the result was: ' + findMinValue([1,2,3,4,5] ) );
});

//==================================================================================================================
module( "returns the distinct values only Unit Test" );
test( "Returns the distinct values Test", 2, function() {
    // Verify the method exists
    equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' ); 

// Make sure the result from the findMinValue function is valid
ok( findDistinctValues([1,2,3,4,1,"Hi","Hi"]), "1,2,3,4,Hi", 'Expected "1,2,3,4,Hi" as the result, the result was: ' + findDistinctValues([1,2,3,4,1,"Hi","Hi"]) );
});

//==================================================================================================================
module( "Write a function that logs the numbers from 1 to 100 to the console Unit Test" );

test( "Print values 1-100 based on condition Test", 1, function() {
   	 // Verify the method exists
	equal( typeof doFizzBuzz, 'function', 'Must contain a doFizzBuzz function' ); 
});

//==================================================================================================================
module( "Write a function that remove the values contained in fruitsToRemove from the array fruits Unit Test" );

test( "Remove the values contained in fruitsToRemove from the array fruits", 2, function() {
// Verify the method exists
equal( typeof removeFruits, 'function', 'Must contain a removeFruits function' ); 

// Make sure the result from the fruitsToRemove function is valid
ok( removeFruits( ['apple','mango','qwerty1','qwerty2','qwerty3','qwerty4'], ['mango','qwerty1','qwerty2','qwerty3','qwerty4']), 
"apple", 'Expected "apple" as the result, the result was: ' + removeFruits(['apple','mango','qwerty1','qwerty2','qwerty3','qwerty4'], ['mango','qwerty1','qwerty2','qwerty3','qwerty4']) );
});

//==================================================================================================================
module( "push either a simple value or an array of values onto a specified array Unit Test" );
test( "Return all the pushed values of an array ", 3, function() {
    // Verify the method exists
    equal( typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function' ); 

// Make sure the result from the findMinValue function is valid
ok( pushOntoArray([0],1), [0,1], 'Expected [0,1] as the result, the result was: ' + pushOntoArray([0],1) );
ok( pushOntoArray([0],[1,2,3,4,5]), [0,1,2,3,4,5], 'Expected "[0,1,2,3,4,5]" as the result, the result was: ' + pushOntoArray([0],[1,2,3,4,5] ));
});

//==================================================================================================================
module( "split this string using comma as your delimiter Unit Test" );
test( "split this string using comma as your delimiter Test", 3, function() {
    // Verify the method exists
    equal( typeof splitListStrUsingComma, 'function', 'Must contain a splitListStrUsingComma function' ); 

// Make sure the result from the findMinValue function is valid
ok( splitListStrUsingComma(""), [], 'Expected [] as the result, the result was: ' + splitListStrUsingComma("") );
ok( splitListStrUsingComma("ExactTarget Candidate Unit Test Runner"), "ExactTarget Candidate Unit Test Runner", 'Expected "Runner,Test,Unit,Candidate,ExactTarget" as the result, the result was: ' + splitListStrUsingComma("ExactTarget Candidate Unit Test Runner") );
});
//==================================================================================================================
module( "function that will take any number of arguments and return their sum Unit Test" );
test( "Return sum of variable arguments ", 3, function() {
    // Verify the method exists
    equal( typeof sum, 'function', 'Must contain a sum function' ); 

// Make sure the result from the findMinValue function is valid
ok( sum(0,1,100), 101, 'Expected 101 as the result, the result was: ' + sum(0,1,100) );
ok( sum(1,2,3,4,5), 15, 'Expected 15 as the result, the result was: ' + sum(1,2,3,4,5));
});

//==================================================================================================================
module( "check string consists only whitespaces- Test" );
test( "Returns if consists white spaces ", 3, function() {
    // Verify the method exists
    equal( typeof isOnlyWhitespace, 'function', 'Must contain isOnlyWhitespace function' );
   equal(  isOnlyWhitespace("   a"), false, 'Must return false for string which does not only contain white spaces ' );  
   equal(  isOnlyWhitespace("   "), true, 'Must return true for string with only white spaces' );  


});

//==================================================================================================================
module( "Closure Example Test" );
test( "Closure Test ", 3, function() {
    // Verify the method exists
    equal( typeof closureExample, 'function', 'Must contain a closureExample function' );
    equal( typeof closureExample(), 'function', 'closureExample function must returns a function' );

// Make sure the result from the findMinValue function is valid
ok( closureExample(), "inner(firstName, lastName)", 'Expected inner(firstName, lastName) as the result, the result was: ' + closureExample() );
});

//==================================================================================================================
module( "Json Test" );
test( "Json Test ", 4, function() {
    // Verify the method exists
    equal( typeof json, 'function', 'Must contain a json function' );
    equal( typeof json(), 'object', 'json function must returns a Object' );

// Make sure the result from the findMinValue function is valid
ok( json()[0].firstname, "Ankit", 'Expected "Ankit" as the result, the result was: ' + json()[0].firstname );
ok( json()[0].phone.home, 6265103710, 'Expected 6265103710 as the result, the result was: ' + json()[0].phone.home );
});


//==================================================================================================================
module( " create a SELECT element (with multiple items) and a button Test" );
test( "SELECT element test ", 1, function() {
    // Verify the method exists
    equal( typeof $(document).ready(), 'object', 'Must contain a $(document).ready() object' );
    
});



//==================================================================================================================
module( "Write 5 different jQuery selectors to retrieve the sample anchor in the markup below Test" );
test( "Anchor element selector test ", 1, function() {
    // Verify the method exists
    equal( typeof $(document).ready(), 'object', 'Must contain a $(document).ready() object' );
  

    
});

//==================================================================================================================
module( "add the list items to the unordered list with an id of Test" );
test( "create a list dynamically ", 1, function() {
    // Verify the method exists
    equal( typeof $(document).ready(), 'object', 'Must contain a $(document).ready() object' );
});
//==================================================================================================================
module( "javascript to add a list of checkboxes and 2 links Test" );
test( "select all checkboxes by clicking a link ", 1, function() {
    // Verify the method exists
    equal( typeof $(document).ready(), 'object', 'Must contain a $(document).ready() object' );
});




























