//your JS code here. If required.

const h1 = document.querySelector('#sizeInfo h1');

let height = window.innerHeight;
let width = window.innerWidth;

h1.innerHTML = `Width: ${width} and Height: ${height}`;

window.addEventListener("resize", () => {
    let height = window.innerHeight;
    let width = window.innerWidth;
    h1.innerHTML = `Width: ${width} and Height: ${height}`;
    
})
