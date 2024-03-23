const h1 = document.getElementsByTagName("h1");
const text = h1[0].innerHTML;
let cur = "";

function add(element, index){
    if (index === text.length) return;
    if (index === 0) cur = "";
    cur += text[index];
    console.log(cur);
    element.innerHTML = cur;
    setTimeout(() => add(element, index + 1), 100);
}

add(h1[0], 0);