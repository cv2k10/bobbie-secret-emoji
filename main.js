var letterMap = {
  A: "🙈",
  B: "🤓",
  C: "🐒",
  D: "⛵",
  E: "🙉",
  F: "😎",
  G: "🌲",
  H: "🌟",
  I: "🐎",
  J: "⚽",
  K: "👑",
  L: "🐕",
  M: "🙃",
  N: "🍓",
  O: "😍",
  P: "🎂",
  Q: "🏵",
  R: "🐇",
  S: "🍬",
  T: "🏰",
  U: "🙊",
  V: "😵",
  W: "🐩",
  X: "🌻",
  Y: "🍭",
  Z: "🐦"
};

function myFunction() {
  var inputText = document.getElementById("data").value;
  var word = inputText.toUpperCase();
  var encrypted = "";
  for (var i = 0; i < word.length; i++) {
    encrypted += letterMap[word[i]] || word[i];
  }
  function clearInput(element) {
    element.value = "";
  }
  document.getElementById("a").innerHTML = encrypted;
}

var letterMap1 = {
  "🙈": "A",
  "🤓": "B",
  "🐒": "C",
  "⛵": "D",
  "🙉": "E",
  "😎": "F",
  "🌲": "G",
  "🌟": "H",
  "🐎": "I",
  "⚽": "J",
  "👑": "K",
  "🐕": "L",
  "🙃": "M",
  "🍓": "N",
  "😍": "O",
  "🎂": "P",
  "🏵": "Q",
  "🐇": "R",
  "🍬": "S",
  "🏰": "T",
  "🙊": "U",
  "😵": "V",
  "🐩": "W",
  "🌻": "X",
  "🍭": "Y",
  "🐦": "Z"
};

function myFunction1() {
  var inputText = document.getElementById("data1").value;

  //*************************
  // magic happens here

  //********************
  inputText = [...inputText];
  var decrypted = "";
  for (var i = 0; i < inputText.length; i++) {
    decrypted += letterMap1[inputText[i]] || inputText[i];
  }
  function clearInput(element) {
    element.value = "";
  }
  document.getElementById("b").textContent = decrypted;
}

var letterMap2 = {
  A: "😀",
  B: "🍍",
  C: "🍟",
  D: "🍭",
  E: "🚗",
  F: "🎭",
  G: "🎲",
  H: "🏆",
  I: "⌚",
  J: "⚽",
  K: "👑",
  L: "📺",
  M: "💰",
  N: "💖",
  O: "😃",
  P: "🐁",
  Q: "🏵",
  R: "🐇",
  S: "🍬",
  T: "🏰",
  U: "🐎",
  V: "🐪",
  W: "🍄",
  X: "🌹",
  Y: "😘",
  Z: "😇"
};

function myFunction2() {
  var inputText = document.getElementById("data").value;
  var word = inputText.toUpperCase();
  var encrypted = "";
  for (var i = 0; i < word.length; i++) {
    encrypted += letterMap2[word[i]] || word[i];
  }
  function clearInput(element) {
    element.value = "";
  }
  document.getElementById("a").innerHTML = encrypted;
}

var letterMap3 = {
  "😀": "A",
  "🍍": "B",
  "🍟": "C",
  "🍭": "D",
  "🚗": "E",
  "🎭": "F",
  "🎲": "G",
  "🏆": "H",
  "⌚": "I",
  "⚽": "J",
  "👑": "K",
  "📺": "L",
  "💰": "M",
  "💖": "N",
  "😃": "O",
  "🐁": "P",
  "🏵": "Q",
  "🐇": "R",
  "🍬": "S",
  "🏰": "T",
  "🐎": "U",
  "🐪": "V",
  "🍄": "W",
  "🌹": "X",
  "😘": "Y",
  "😇": "Z"
};

function myFunction3() {
  var inputText = document.getElementById("data1").value;

  //*************************
  // magic happens here

  //********************
  inputText = [...inputText];
  var decrypted = "";
  for (var i = 0; i < inputText.length; i++) {
    decrypted += letterMap3[inputText[i]] || inputText[i];
  }
  function clearInput(element) {
    element.value = "";
  }
  document.getElementById("b").textContent = decrypted;
}

var letterMap4 = {
  A: "🍟",
  B: "🌹",
  C: "🍄",
  D: "🐙",
  E: "🍍",
  F: "😘",
  G: "🎲",
  H: "🏆",
  I: "⌚",
  J: "⚽",
  K: "👑",
  L: "📺",
  M: "💰",
  N: "💖",
  O: "🐦",
  P: "🐁",
  Q: "🏵",
  R: "🐇",
  S: "🍬",
  T: "🏰",
  U: "🐎",
  V: "🐪",
  W: "🤓",
  X: "🚗",
  Y: "🍭",
  Z: "😎"
};

function myFunction4() {
  var inputText = document.getElementById("data").value;
  var word = inputText.toUpperCase();
  var encrypted = "";
  for (var i = 0; i < word.length; i++) {
    encrypted += letterMap4[word[i]] || word[i];
  }
  function clearInput(element) {
    element.value = "";
  }
  document.getElementById("a").innerHTML = encrypted;
}

var letterMap5 = {
  "🍟": "A",
  "🌹": "B",
  "🍄": "C",
  "🐙": "D",
  "🍍": "E",
  "😘": "F",
  "🎲": "G",
  "🏆": "H",
  "⌚": "I",
  "⚽": "J",
  "👑": "K",
  "📺": "L",
  "💰": "M",
  "💖": "N",
  "🐦": "O",
  "🐁": "P",
  "🏵": "Q",
  "🐇": "R",
  "🍬": "S",
  "🏰": "T",
  "🐎": "U",
  "🐪": "V",
  "🤓": "W",
  "🚗": "X",
  "🍭": "Y",
  "😎": "Z"
};

function myFunction5() {
  var inputText = document.getElementById("data1").value;

  //*************************
  // magic happens here

  //********************
  inputText = [...inputText];
  var decrypted = "";
  for (var i = 0; i < inputText.length; i++) {
    decrypted += letterMap5[inputText[i]] || inputText[i];
  }
  function clearInput(element) {
    element.value = "";
  }
  document.getElementById("b").textContent = decrypted;
}
