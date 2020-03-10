class Text {
  constructor(root, xPos, yPos) {
    this.score = 0;
    let div = document.createElement("div");
    div.style.position = "absolute";
    div.style.left = xPos;
    div.style.top = yPos;
    div.style.color = "black";
    div.style.font = "bold 30px Impact";
    div.style.zIndex = 2000;
    root.appendChild(div);
    this.domElement = div;
  }
  update(txt) {
    this.domElement.innerText = txt;
  }
}
