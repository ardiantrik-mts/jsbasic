module.exports.Employee = class Employee {
  name;
  email;
  password;

  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  details() {
    return { name: this.name, email: this.email, password: this.password };
  }

  getUserPosts(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then(result => {
        return result.json();
      })
      .catch(err => {
        throw(err);
      });
  }
};
