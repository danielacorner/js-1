// FOR YOUR INFORMATION
// "var" is old/outdated and now we use "let" or "const"
// "const" will never be mutated
// "let" will be mutated

const barChartData = [
  {
    height: 500,
    color: "blue"
  },
  {
    height: 300,
    color: "red"
  },
  {
    height: 300,
    color: "red"
  },
  {
    height: 200,
    color: "hsl(20,50%,50%)"
  },
  {
    height: 300,
    color: "red"
  }
];
// TODO BONUS: use fetch() function // https://javascript.info/fetch
// follow instructions on this website
// http://jsonplaceholder.typicode.com/
// to fetch data from jsonplaceholder.typicode.com
// then use the length of the text to make a bar with height

// for (let index=0; index<barChartData.length; index++){
// const myItem = barChartData[index]
// }

// https://shortcut.school/vs-code#extensions

// for each bar in our array of bars

fetch("https://jsonplaceholder.typicode.com/todos/")
  .then(response => response.json())
  .then(function(json) {
    console.log(json);
    // TODO: do all your javascript inside of here
  });

barChartData.forEach(attachBarToScreen);

function attachBarToScreen(item) {
  // grab an element on the page
  const barChart = document.querySelector(".barChart");
  console.dir(barChart);

  // put the bar onto the screen, inside the barChart div
  const myBarHTML = `<div style="height: ${item.height}px; background: ${item.color}; width: 10px;">hi</div>`;

  barChart.innerHTML = barChart.innerHTML + myBarHTML;
}
