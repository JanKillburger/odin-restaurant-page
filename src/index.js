import { Home } from "./components/home/home.js";
import { Menu } from "./components/menu/menu.js";
import { About } from "./components/about/about.js";

let content;
let tabBtns;

window.addEventListener("load", init);

function displayTab(tabName) {
    content.innerHTML = "";
    if (tabName === "home") {
        content.appendChild(Home());
    } else if (tabName === "menu") {
        content.appendChild(Menu());
    } else if (tabName === "about") {
        content.appendChild(About());
    }
}

function init() {
    content = document.getElementById("content");
    displayTab("home");

    tabBtns = document.querySelectorAll(".tab-btn");
    [...tabBtns].forEach(btn => btn.addEventListener("click", (ev) => handleTabSelection(ev)));
}

function handleTabSelection(ev) {
    const tab = ev.target.textContent.toLowerCase();
    displayTab(tab);
}

