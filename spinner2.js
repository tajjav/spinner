let i = 0;
let array = ["|", "/", "-", "\\"];
let interval;
const spinner2 = function () {
  interval = setInterval(() => {
    process.stdout.write(`\r${array[i]}    `);
    i = (i + 1) % array.length;
  }, 200);
  setTimeout(() => {
    clearInterval(interval);
    console.log();
  }, 2300);
}
spinner2();
