const header = document.querySelector("header");
const headerContainer = document.createElement("div");
headerContainer.className = "header-container";
const headerLeft = document.createElement("div");
headerLeft.className = "header-left";
const headerLogo = document.createElement("img");
headerLogo.src =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png";

headerLeft.appendChild(headerLogo);
const headerRight = document.createElement("div");
headerRight.className = "header-right";
const headerButton = document.createElement("Home");
headerButton.textContent = "Home";
headerButton.addEventListener("click", function handleClick(event) {
  window.location = "/";
});
headerRight.appendChild(headerButton);
headerContainer.appendChild(headerLeft);
headerContainer.appendChild(headerRight);
header.appendChild(headerContainer);
