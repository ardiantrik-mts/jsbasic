const { Employee } = require("./employee/employee");
const { Message } = require('./message');

module.exports = {
  run: (elementId) => {
    let employeeName = document.getElementById(elementId);
    const employee = new Employee('AH', 'AH@email.com', 'password');
    employeeName.innerHTML = `Name ${employee.name} and Email ${employee.email}.`;
    // employee.getEmployeeTodo(1)
    //   .then(result => {
    //     if (result) {
    //       employeeName.innerHTML = `Name ${result.userId} and Email ${result.id}.`;
    //     }
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    // status.innerHTML = 'End';
  },
  displayPosts: () => {
    const employee = new Employee();
    employee.getUserPosts(1)
      .then(result => {
        console.log(result)
      });
    
  }
};
