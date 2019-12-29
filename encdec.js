function onEncode(a) {
  const revString = reverse(a);
  const newS = [];
  for (let i = 0; i < revString.length; ++i) {
    let val = revString.charCodeAt(i);
    let k = 3;
    if ((val >= 65 && val <= 90) || (val >= 97 && val <= 122)) {
      if (val < 97) {
        val = val + 32;
      }
      if (val + k <= 122) {
        newS.push(String.fromCharCode(val + k));
      } else {
        k = k - (122 - val);
        k = k % 26;
        newS.push(String.fromCharCode(96 + k));
      }
    } else {
      newS.push(String.fromCharCode(val));
    }
  }

  document.getElementById("sp-encoded").innerText = newS.join("");
  // alert(document.getElementById("sp-encoded").value);
}
function onDecode(a) {
  // alert(a);
  const str = [];
  for (let i = 0; i < a.length; i++) {
    let val = a.charCodeAt(i);
    let k = 3;
    if ((val >= 65 && val <= 90) || (val >= 97 && val <= 122)) {
      if (val < 97) {
        val = val + 32;
      }
      if (val - k >= 97) {
        str.push(String.fromCharCode(val - k));
      } else {
        k = k - (val - 97);
        str.push(String.fromCharCode(123 - k));
      }
    } else {
      str.push(String.fromCharCode(val));
    }
  }
  const newS = str.join("");
  document.getElementById("sp-decoded").innerText = reverse(newS);
}
function decode(b) {
  // alert(a);
  document.getElementById("inp-encoded").value = b;
  onDecode(b);
  //   document.getElementById("sp-decoded").innerText = a;
}
function reverse(str) {
  const revString = [];
  const length = str.length - 1;
  for (let i = length; i >= 0; i--) {
    revString.push(str[i]);
  }
  return revString.join("");
}
