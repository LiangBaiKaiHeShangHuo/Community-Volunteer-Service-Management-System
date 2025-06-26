function yanzengma(youxiangshuju, istrue) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", `http://8.148.31.153:3030/verificationCodes?${youxiangshuju}`, istrue);
  // xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log("Response:", xhr.responseText);
    } else {
      console.error("Error:", xhr.statusText);
    }
  };
  xhr.onerror = function () {
    console.error("Request failed");
  };
  xhr.send();
}
export default yanzengma;
