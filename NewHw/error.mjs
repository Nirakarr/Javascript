try {
  console.log("On a way to print error");
  let createerr = new Error("Hello i am an error");
  throw createerr;
} catch (error) {
  console.log(error.message);
} finally {
  console.log("I am finally");
}
