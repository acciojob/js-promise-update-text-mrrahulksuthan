//your JS code here. If required.
function updateOutput() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const message = "Hello, world!";
      resolve(message);
    }, 1000);
  }).then((message) => {
    const outputElement = document.getElementById("output");
    outputElement.textContent = message;
  });
}