## Node JS

- Node JS is a JavaScript runtime environment

- JS is synchronous as well as async
- JS is single threaded
- JS Dynamic Typed concurrent programming language

## what is sync?

Synchronous programming is a type of programming in which a task is completed before moving to the next task.

ex: -

    console.log(1);

    setTimeout(() => {
        console.log(2);
    }, 0);

    console.log(3);

## what is async?

Asynchronous programming is a type of programming in which a task is completed after some time.

ex: -
    console.log(1);

    setTimeout(() => {
        console.log(2);
    }, 0);
    console.log(3);


## what is concurrent programming?

Concurrent programming is a type of programming in which multiple tasks are completed at the same time.

ex: -   

    console.log(1);

    setTimeout(() => {
        console.log(2);
    }, 0);
    console.log(3);


## what is parallel programming?

Parallel programming is a type of programming in which multiple tasks are completed at the same time.

## what is event loop?

Event loop is a type of programming in which multiple tasks are completed at the same time.

## what is callback function?

Any function that is as an argument to other function is called callback function

ex.: -

    setTimeout(() => {
        console.log("C");
    }, 0);

## what is dynamic typing?

Dynamic typing is a type of programming in which the type of a variable can be changed at runtime.

ex.:

    let a = 10;

    a = "hello";
