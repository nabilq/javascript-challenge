// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");


// Getting reference to button
var button = d3.select(".btn-default");

//Get reference to form input
var inputField = d3.select("#form");


// Create event handlers 
button.on("click", runEnter);
inputField.on("submit",runEnter);
//inputField.on("clear", refresh)

// YOUR CODE HERE!
// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    var inputElement2 = d3.select("#city");
    var inputElement3 = d3.select("#state");
    var inputElement4 = d3.select("#country");
    var inputElement5 = d3.select("#shape");

     // Get the value property of the input element
  var inputValue = inputElement.property("value");
  var inputValue2 = inputElement2.property("value");
  var inputValue3 = inputElement3.property("value");
  var inputValue4 = inputElement4.property("value");
  var inputValue5 = inputElement5.property("value");


  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(ufo => ufo.datetime === inputValue || ufo.city === inputValue2 || ufo.state === inputValue3 || ufo.country === inputValue4 || ufo.shape === inputValue5);

  console.log(filteredData);

// clear table to create new filtered data table
var table = d3.selectAll("tbody");
table.html("");





  filteredData.forEach(function(ufo) {
    console.log(ufo);
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
 //     // in the UFO report object
      var cell = row.append("td");
      cell.text(value);


});
});

}

// Console.log the UFO data from data.js
//console.log(data);

// // Step 1: Loop Through `data` and console.log each UFO report object
data.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
 //     // in the UFO report object
      var cell = row.append("td");
      cell.text(value);
    });
  });
 
  
// function clearData(){
//     data.forEach(function(ufoReport) {
//     console.log(ufoReport);
//     var row = tbody.append("tr");
//     Object.entries(ufoReport).forEach(function([key, value]) {
//       console.log(key, value);
//       // Append a cell to the row for each value
//  //     // in the UFO report object
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });



//}
 

