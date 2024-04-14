const title = document.getElementById("title");
console.dir(title);

title.innerText = "Got you!";



const title2 = document.getElementsByTagName("h1");

const title4 = document.querySelector("div.hello:first-child h1");
title.style.color = "white";
title.style.backgroundColor = "pink";


function handleTitleClick() {
    title.style.color = "black";
    title.innerText = "title was clicked.";
}

function handleMouseEnter() {
    title.innerText = "mouse is here";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
// 이벤트의 경우 dir 명령어를 통해 on으로 시작하는 카테고리를 보면 접목시킬 수 있는 대상들을 볼 수 있다


function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

window.addEventListener("resize", handleWindowResize);
