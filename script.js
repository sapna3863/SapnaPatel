
function dragElement(element) {
  var initialX = 0, initialY = 0, currentX = 0, currentY = 0;

  var header = document.getElementById(element.id + "header");
  if (header) {
    header.onmousedown = startDragging;
  } else {
    element.onmousedown = startDragging;
  }

  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    initialX = e.clientX;
    initialY = e.clientY;
    document.onmouseup = stopDragging;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

dragElement(document.getElementById("welcome"));

var welcomeScreen = document.querySelector("#welcome");
var welcomeScreenClose = document.querySelector("#welcomeclose");
var welcomeScreenOpen = document.querySelector("#welcomeopen");

function closeWindow(element) {
  element.style.display = "none";
}
function openWindow(element) {
  element.style.display = "flex";
}

welcomeScreenClose.addEventListener("click", function() {
  closeWindow(welcomeScreen);
});
welcomeScreenOpen.addEventListener("click", function() {
  openWindow(welcomeScreen);
});
function closeWindow(element) {
  element.classList.add("hide");
}
function openWindow(element) {
  element.classList.remove("hide");
}

var selectedIcon = undefined
function selectIcon(element) {
  element.classList.add("selected");
  selectedIcon = element
} 
function handleIconTap(element) {
  if (element.classList.contains("selected")) {
    deselectIcon(element);
    openWindow(window);
  } else {
  selectIcon(element);
}
}

dragElement(document.getElementById("gridWindow"));

const gridWindow = document.getElementById("gridWindow");
const gridWindowClose = document.getElementById("gridWindowClose");
const gridIcon = document.getElementById("gridIcon");

gridIcon.addEventListener("click", function() {
  gridWindow.classList.remove("hide");
});
gridWindowClose.addEventListener("click", function() { 
  gridWindow.classList.add("hide");
});
