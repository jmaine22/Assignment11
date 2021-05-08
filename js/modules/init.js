async function getData() {
    try {
        let response = await fetch('../data/employees.json');
        let employees = await response.json();
        return employees;
    } catch (error) {
        console.log(error.message);
    }
}