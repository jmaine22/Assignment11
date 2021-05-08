// CREATE AN ARRAY OF EMPLOYEES
// let arrEmployees = [
//     [34123413, "Zak Ruvalcaba", 3424, "zak@vectacorp.com", "Executive"],
//     [23424665, "Sally Smith", 2344, "sally@vectacorp.com", "Administrative"],
//     [12341244, "Mark Martin", 5352, "mark@vectacorp.com", "Sales"],
//     [14545423, "Robin Banks", 7867, "robin@vectacorp.com", "Marketing"],
//     [13413453, "Sue Wedge", 1235, "sue@vectacorp.com", "QA"]
// ];

// const constructObject = arr => {
//     return arr.reduce((acc, val) => {
//         const [key, value] = val;
//         acc[key] = value;
//         return acc;
//     }, {});
// };
// function arrayToJSONObject (arrEmployees){
//     let keys = arrEmployees[0];

//     let newArr = arrEmployees.slice(1, arrEmployees.length);

//     let formatted = [],
//     data = newArr,
//     cols = keys,
//     l = cols.length;
//     for (let i=0; i<data.length; i++) {
//             let d = data[i],
//                     o = {};
//             for (var j=0; j<l; j++) 
//                 o[cols[j]] = d[j];
//             formatted.push(o);
//     }
//     return formatted;
//     console.log(keys);
// }
// let jSon = arrayToJSONObject(arrEmployees);
// console.log(jSon);
// let jsonData = JSON.stringify(jSon);
// jsonData = JSON.parse(jsonData);
// console.log(jsonData);
// function saveFileToJSON(jSon) {
    
//     //let  jsonFile = '/data/employees.json';
//     let file = new File('employees.json', "write");
//     file.open();
//     file.close();

// }
// saveFileToJSON(jSon);
// GET DOM ELEMENTS
let empTable    = document.querySelector('#employees');
let empCount    = document.querySelector('#empCount');

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid(arrEmployees);

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        // CONFIRM THE DELETE
        if (confirm('Are you sure you want to delete this employee?')) {
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            let rowIndex = e.target.parentNode.parentNode.rowIndex;
            // REMOVE EMPLOYEE FROM ARRAY
            empTable.deleteRow(rowIndex);
        }
    }
});

// BUILD THE EMPLOYEES GRID
function buildGrid(arrEmployees) {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    empTable.lastElementChild.remove();
    // REBUILD THE TBODY FROM SCRATCH
    let tbody = document.createElement('tbody');
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    for (let employee of arrEmployees) {
        tbody.innerHTML += 
        `
        <tr>
            <td>${employee[0]}</td>
            <td>${employee[1]}</td>
            <td>${employee[2]}</td>
            <td><a href="mailto:${employee[3]}">${employee[3]}</a></td>
            <td>${employee[4]}</td>
            <td><button class="btn btn-sm btn-danger delete">X</button></td>
        </tr>
        `
    }
    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(tbody);
    // UPDATE EMPLOYEE COUNT
    empCount.value = `(${arrEmployees.length})`;
};