//Printing out all the data on the web
// data.js
var tableData = data;
var tbody = d3.select('tbody');

// Event handler for the filter
// Getting a reference to the button the page with the id property set to 'filter table'
var button = d3.select("#filter-btn");

button.on("click", function(){
    // reference to the input element on the page with id property set to 'datetime'
    var inputField = d3.select("#datetime");

    // var value = inputField.property("value")

    var filteredData = data.filter(UFO => UFO.datetime === inputField.property("value"));

    // Loop through object
    filteredData.forEach(function(input){
        var row = tbody.append('tr');

        Object.entries(input).forEach(function([key,value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });
});



