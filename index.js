window.addEventListener("load", function () {
  const endpointUser = "https://tony-json-server.herokuapp.com/api/users";
  const endpointTodo = "https://tony-json-server.herokuapp.com/api/todos";
  const tbodyUser = document.querySelector(".tbody-users");
  const tbodyTodo = document.querySelector(".tbody-todos");

  const fetchUsers = fetch(endpointUser)
    .then((res) => res.json())
    .then((res) => res.data);
  const fetchTodos = fetch(endpointTodo)
    .then((res) => res.json())
    .then((res) => res.data);
  Promise.all([fetchUsers, fetchTodos]).then((data) => {
    const [users, todos] = data;
    showDataUsers(users);
    showDataTodos(todos);
  });

  function showDataUsers(data) {
    if (Array.isArray(data) && data.length > 0) {
      data.forEach((item) => renderDataUsers(item));
    }
  }
  function showDataTodos(data) {
    if (Array.isArray(data) && data.length > 0) {
      data.forEach((item) => renderDataTodos(item));
    }
  }
  function renderDataUsers(item) {
    const template = `<tr>
        <td data-th="id">${item.id}</td>
        <td data-th="first-name">${item.firstName}</td>
        <td data-th="last-name">${item.lastName}</td>
        <td data-th="role">${item.role}</td>
        <td data-th="email">${item.email}</td>
    </tr>`;
    tbodyUser.insertAdjacentHTML("beforeend", template);
  }
  function renderDataTodos(item) {
    const template = `<tr>
        <td data-th="title">${item.title}</td>
        <td data-th="author">${item.author}</td>
        <td data-th="severity">${item.severity}</td>
        <td data-th="status">${item.status}</td>
    </tr>`;
    tbodyTodo.insertAdjacentHTML("beforeend", template);
  }
});
