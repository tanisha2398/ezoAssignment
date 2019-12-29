function find(str) {
  if (/^[a-z]/.test(str)) {
    document.getElementById("sp-prev").innerText = prev(str);
    document.getElementById("sp-next").innerText = nextS(str);
  } else {
    alert("Check Input");
  }
}
function prev(str) {
  let flag = 0;
  const strprev = [];

  for (let i = str.length - 1; i > 0; i--) {
    if (str[i] === "a" && flag === 0) {
      strprev.push("z");
    } else if (str[i] !== "a" && flag === 0) {
      flag = 1;
      strprev.push(String.fromCharCode(str.charCodeAt(i) - 1));
    } else {
      strprev.push(String.fromCharCode(str.charCodeAt(i)));
    }
  }
  if (flag === 1) {
    strprev.push(String.fromCharCode(str.charCodeAt(0)));
  } else {
    if (str[0] !== "a") {
      strprev.push(String.fromCharCode(str.charCodeAt(0) - 1));
    } else {
      strprev.push(" ");
    }
  }
  return reverse(strprev.join(""));
}

function nextS(str) {
  let flag = 0;
  const strnext = [];

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === "z" && flag === 0) {
      strnext.push("a");
    } else if (str[i] !== "z" && flag === 0) {
      flag = 1;
      strnext.push(String.fromCharCode(str.charCodeAt(i) + 1));
    } else {
      strnext.push(String.fromCharCode(str.charCodeAt(i)));
    }
  }
  if (flag === 0) {
    strnext.push("a");
  }
  return reverse(strnext.join(""));
}

function reverse(str) {
  const revString = [];
  const length = str.length - 1;
  for (let i = length; i >= 0; i--) {
    revString.push(str[i]);
  }
  return revString.join("");
}
