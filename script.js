function switchStyle(styleName) {
    const container = document.getElementById("card-container");
  
    container.classList.remove("style1", "style2", "style3");
    container.classList.add(styleName);
  }
  