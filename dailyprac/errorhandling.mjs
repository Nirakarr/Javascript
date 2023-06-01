try {
  let virus = new Error("This is an error");
  throw virus;
} catch (error) {
  console.log(error.message);
} finally {
  console.log("i am finally");
}
