# Backend
Backend start 10/3/25


Here are your recovered notes for `notes.md`:  

---

## Node.js

- **Node.js** is a JavaScript runtime environment that allows JavaScript to run outside the browser. It is built on the **V8 JavaScript engine** and provides an event-driven, non-blocking I/O model.

### JavaScript Characteristics:

- **JavaScript is both synchronous and asynchronous.**
- **JavaScript is single-threaded.**
- **JavaScript is a dynamically typed, concurrent programming language.**

---

## What is synchronous programming?

Synchronous programming executes tasks sequentially—one task must finish before moving to the next.

### Example:

```js
console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

console.log(3);
```

**Output:**
```
1
3
2
```
_Even though `setTimeout` has `0` delay, it is asynchronous and executes later._

---

## What is asynchronous programming?

Asynchronous programming allows tasks to run independently without blocking the execution of other tasks.

### Example:

```js
console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

console.log(3);
```

**Output:**
```
1
3
2
```
_The execution of `setTimeout` is deferred, making the code non-blocking._

---

## What is concurrent programming?

**Concurrent programming** allows multiple tasks to make progress **at the same time** but not necessarily simultaneously. JavaScript uses **event-driven concurrency**.

### Example:

```js
console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

console.log(3);
```

_JavaScript’s event loop enables concurrency by handling I/O operations asynchronously while executing other tasks._

---

## What is parallel programming?

**Parallel programming** executes multiple tasks **simultaneously** using multiple CPU cores.

- **JavaScript (Node.js) is NOT truly parallel** but uses an event loop to handle multiple tasks efficiently.
- **Parallelism occurs in worker threads or child processes, not in the main thread.**

---

## What is the Event Loop?

The **event loop** is the mechanism that allows JavaScript to handle asynchronous operations non-blockingly.

### How it Works:

1. Executes **synchronous** code first (call stack).
2. Handles **asynchronous tasks** (callbacks, promises, timers).
3. Moves completed async tasks from the **callback queue** to the **call stack** when it's empty.

### Example:

```js
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");
```

**Output:**
```
A
C
B
```
_Even though `setTimeout` has `0` delay, it runs after synchronous code due to the event loop._

---

## What is a callback function?

A **callback function** is a function passed as an argument to another function and executed later.

### Example:

```js
function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Vaibhav", sayGoodbye);
```

**Output:**
```
Hello, Vaibhav
Goodbye!
```

---

## What is dynamic typing?

In **dynamic typing**, the type of a variable can change at runtime.

### Example:

```js
let a = 10; // a is a number
a = "hello"; // a is now a string

console.log(a); // Output: "hello"
```

_JavaScript determines variable types dynamically at runtime._

---

## File System

| Operation        | Asynchronous Method | Synchronous Method    | Use Case                         |   
| ---------------- | ------------------- | --------------------- | -------------------------------- |   
| Read a file      | `fs.readFile()`     | `fs.readFileSync()`   | Read file content                |   
| Write a file     | `fs.writeFile()`    | `fs.writeFileSync()`  | Create or overwrite file content |   
| Append data      | `fs.appendFile()`   | `fs.appendFileSync()` | Add data to the end of a file    |   
| Delete a file    | `fs.unlink()`       | `fs.unlinkSync()`     | Remove a file                    |   
| Rename a file    | `fs.rename()`       | `fs.renameSync()`     | Change the name of a file        |   
| Create directory | `fs.mkdir()`        | `fs.mkdirSync()`      | Create a new directory           |   
| Remove directory | `fs.rmdir()`        | `fs.rmdirSync()`      | Delete an empty directory        |   
| List files       | `fs.readdir()`      | `fs.readdirSync()`    | List contents of a directory     |   

---


## HTTP
1.  http - hypertext transfer protocol
2. https - secure hypertext transfer protocol

- get - read data
- post - create data
- put - update data
- delete - delete data
- patch - update specific data


- response.write() - write data to the response
- response.end() - end the response and send it to the client

<!-- express -->

## Params and query difference

In URLs, both **query parameters** and **path parameters** (or **route parameters**) are used to send data to the server, but they are used differently.

1. **Query Parameters**:
   - They are part of the URL that comes after the `?` symbol.
   - They are used to pass data in key-value pairs.
   - Query parameters are commonly used for filtering, sorting, or pagination.
   - They are visible in the URL.
   - Multiple query parameters are separated by `&`.

   **Example**:
   ```
   https://example.com/products?category=electronics&sort=price
   ```
   In this example:
   - `category=electronics` is a query parameter.
   - `sort=price` is another query parameter.

2. **Path Parameters**:
   - They are part of the URL path and are used to identify a specific resource.
   - Path parameters are often used for defining RESTful routes, where the URL structure is more about accessing a resource.
   - They are embedded within the URL, and the server interprets them as a part of the URL structure.
   - They are not visible as query parameters.

   **Example**:
   ```
   https://example.com/products/12345
   ```
   In this example, `12345` is a path parameter representing a specific product ID.

### Summary:
- **Query Parameters**: Use `?` and `&` to pass data (e.g., `?category=electronics&sort=price`).
- **Path Parameters**: Embedded in the URL path (e.g., `/products/12345`).

Both serve different purposes but are important for structuring URLs and handling dynamic data on the server.
---

## Middleware

- Middleware is a function that is executed between the request and the response.
