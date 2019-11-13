let menuArray = ["Choose for me", "Let me choose", "Store", "Outfits"];

function mouseDown() {
  let menuCopy = menuArray.slice();
  menuCopy.push(menuCopy[0]);
  menuCopy.shift(menuCopy[0]);
  return menuArray;
}

console.log(mouseDown());
