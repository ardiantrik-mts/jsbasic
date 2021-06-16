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
    function fetchUsers(item) {
      var para = document.createElement("li");
      para.addEventListener("click", function() {
        document.getElementById("postGrid").innerHTML = '';
        document.getElementById("commentGrid").innerHTML = '';
        employee.getUserPosts(item['id'])
        .then(result => {
          result.forEach(fetchPosts);
        });
        // console.log("cek");
      });
        para.innerHTML = `<h6>`+item['name']+`</h6>`;
        para.classList.add("list-group-item");
        document.getElementById("userGrid").appendChild(para);
    }

    function fetchPosts(item) {
      var cardDiv = document.createElement("li");
      cardDiv.classList.add("list-group-item");
      cardDiv.addEventListener("click", function() {
        document.getElementById("commentGrid").innerHTML = '';
        employee.getPostComments(item['id'])
        .then(result => {
          result.forEach(fetchComments);
        });
        // console.log("cek");
      });
      cardDiv.innerHTML = `<div class="card-body"><h5 class="card-title">`+item['title']+`</h5><p class="card-text">`+item['body']+`</p></div>`;
      document.getElementById("postGrid").appendChild(cardDiv);
    }

    function fetchComments(item) {
      var para = document.createElement("div");
        para.innerHTML = `<div class="card-body"><h5 class="card-title">`+item['name']+`</h5><h6 class="card-subtitle mb-2 text-muted">`+ item['email'] +`</h6><p class="card-text">`+item['body']+`</p></div>`;
        document.getElementById("commentGrid").appendChild(para);
    }
    const employee = new Employee();
    // employee.getUserPosts(1)
    employee.getUsers()
      .then(result => {
        result.forEach(fetchUsers);
      });

      // employee.getUserPosts(1)
      // .then(result => {
      //   result.forEach(fetchPosts);
        
      //   // console.log(result)
      // });

      // employee.getPostComments(1)
      // .then(result => {
      //   result.forEach(fetchComments);
        
      //   // console.log(result)
      // });
    
  }
};
