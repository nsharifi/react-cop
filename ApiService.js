export const getTodos = () =>
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .catch(error => {
      console.log("failed to get todos: ", error);
      return [];
    });

export const postTodo = title =>
  fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    body: JSON.stringify({
      title,
      id: 1,
      userId: 100,
      completed: false
    })
  })
    .then(response => response.json())
    .catch(error => {
      console.log("errror: ", error);
      return null;
    });
