const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Hello Promise");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Promise Resolved");
});

// API CALL
const URL = "https://jsonplaceholder.typicode.com/users";

const getUser = async function () {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
getUser();

// API  CALL WITH ERROR HANDLING
// Arrow Function

const POST_URL = "https://jsonplaceholder.typicode.com/posts";

const getPost = async () => {
  try {
    const response = await fetch(POST_URL);
    if (!response.ok) {
      throw new Error(`${response.error}`);
    }
    const post = await response.json();
    console.log(post);
  } catch (error) {
    console.log(`ERROR: ${error.message}`);
  }
};

getPost();

// API CALL FOR TODOS

const TODO_URL = "https://jsonplaceholder.typicode.com/todos";

const getTodo = async () => {
  try {
    const response = await fetch(TODO_URL);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const todo = await response.json();

    console.log(todo);
    console.log(todo.length);
  } catch (error) {
    console.log(`${error}`);
  }
};
getTodo();
