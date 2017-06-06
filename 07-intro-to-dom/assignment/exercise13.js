/*
Build a table

We built plaintext tables in Chapter 6. HTML makes laying out tables quite a bit easier. An HTML table is built with the following tag structure:

<table>
  <tr>
    <th>name</th>
    <th>height</th>
    <th>country</th>
  </tr>
  <tr>
    <td>Kilimanjaro</td>
    <td>5895</td>
    <td>Tanzania</td>
  </tr>
</table>

For each row, the <table> tag contains a <tr> tag. Inside of these <tr> tags, we can put cell elements: either heading cells (<th>) or regular cells (<td>).

The same source data that was used in Chapter 6 is again available in the MOUNTAINS variable in the sandbox. It can also be downloaded from the website.

Write a function buildTable that, given an array of objects that all have the same set of properties, builds up a DOM structure representing a table. The table should have a header row with the property names wrapped in <th> elements and should have one subsequent row per object in the array, with its property values in <td> elements.

The Object.keys function, which returns an array containing the property names that an object has, will probably be helpful here.

Once you have the basics working, right-align cells containing numbers by setting their style.textAlign property to "right".

*/

/*
HINTS:

Use document.createElement to create new element nodes, document.createTextNode to create text nodes, and the appendChild method to put nodes into other nodes.

You should loop over the key names once to fill in the top row and then again for each object in the array to construct the data rows.

Don’t forget to return the enclosing <table> element at the end of the function.



*/

var mountainChart = functon (th1, th2, th3, tc1, tc2, tc3) {
  th1: 'Name',
  th2: 'Height',
  th3: 'Country',
  tc1: 'Kilimanjaro',
  tc2: '5895',
  tc3: 'Tanzania'
}

//create primary table tag

function createTable () {
  let newTable = document.createElement('table');
  return newTable
}

//create number of rows

function createRow (number) {
  let newRow = document.createElement('tr');
  for (let i = 0; i <= number; i++){
    newRow;
    }
    return
  }

//headers + cells have even amount of cells so combine them

function createHeader (number) {

  let newHeader = document.createElement('th');
  let newHeaderText = newHeader.createTextNode;

  let newCell = document.createElement('td');
  let newCellText = newCell.createTextNode;

  for (let i = 0; i <= number; i++){

    newHeader;
    newHeaderText;
    newCell;
    newCellText;

    }
    return
  }

function createTableSchema(rowNum, columnNum) {
  createTable();
  createRow(rowNum);
  createHeader(columnNum);
  }




// //my first atttempt
// function buildTable(array) {
//   let array = Object.keys[array]
//   this.tableRow = "tr",
//   this.tableHeader = "th",
//   this.tableCell = "td",
// }


//
// <table>
//   <tr>
//     <th>name</th>
//     <th>height</th>
//     <th>country</th>
//   </tr>
//   <tr>
//     <td>Kilimanjaro</td>
//     <td>5895</td>
//     <td>Tanzania</td>
//   </tr>
// </table>

//from W3

function replaceImages() {
   var images = document.body.getElementsByTagName("img");
   for (var i = images.length - 1; i >= 0; i--) {
     var image = images[i];
     if (image.alt) {
       var text = document.createTextNode(image.alt);
       image.parentNode.replaceChild(text, image);
     }
   }
 }

function buildTable() {
    var createTable = document.createElement("TABLE");
    createTable.setAttribute("id", "myTable");
    document.body.appendChild(createTable);

    var createRow = document.createElement("TR");
    createRow.setAttribute("id", "myTr");

    for (var stats in mountainChart) {
      let identifyHeader = document.querySelectorAll("myTr")
      identifyHeader.appendChild(createRow);
    }

    var createHeaders = document.createElement("TH");
    createHeaders.setAttribute("id", "myTh");
    createHeaders. //set text?
    document.getElementById("myTr").appendChild(createHeaders);


    var z = document.createElement("TD");

    var t = document.createTextNode("cell");
    z.appendChild(t);
    document.getElementById("myTr").appendChild(z);
}
