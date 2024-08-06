const response = new Promise((resolve, reject) => {
  let age = 20;
  if (age >= 18) {
    resolve("Adult");
  } else {
    reject("Minor");
  }
});

response
  .then((age) => {
    console.log("Resolved your age is: " + age);
  })
  .catch(() => {
    console.log("Rejected " + err);
  })
  .finally(() => {
    console.log("Finally block executed");
  });
