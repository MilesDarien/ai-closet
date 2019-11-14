let menu = ["Choose for me", "Let me choose", "Store", "Outfits"];

function testTest() {
  let menuArray = menu.slice();
  menuArray.push(menuArray[0]);
  menuArray.shift(menuArray[0]);
  menu = menuArray;
  console.log(menu);
}

function run() {
  testTest();
}

console.log(run());
