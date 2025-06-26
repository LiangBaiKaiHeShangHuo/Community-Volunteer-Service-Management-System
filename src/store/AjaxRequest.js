function qingqiu(reqInfos, huidiao, istrue) {
  const xhr = new XMLHttpRequest();
  xhr.open(reqInfos.pattern, reqInfos.url, istrue);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 400) {
      huidiao({ responseText: xhr.responseText });
    } else if (xhr.status >= 400 && xhr.status <= 500) {
      huidiao(console.log("用户名和密码不匹配"));
    } else {
      console.error("网路错误", xhr.statusText);
    }
  };
  xhr.onerror = function () {
    console.error("用户名和密码不匹配");
  };
  xhr.send(reqInfos.shuju);
}
export default qingqiu;

// function qingqiu(shuju, huidiao, istrue) {
//   var xhr = new XMLHttpRequest();
//   xhr.open("post", "http://8.148.31.153:3030/login", istrue);
//   xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//   xhr.setRequestHeader("Accept", "application/json");
//   xhr.onload = function () {
//     if (xhr.status >= 200 && xhr.status < 400) {
//       huidiao({ responseText: xhr.responseText });
//     } else if (xhr.status >= 400 && xhr.status <= 500) {
//       huidiao(console.log("用户名和密码不匹配"));
//     } else {
//       console.error("网路错误", xhr.statusText);
//     }
//   };
//   xhr.onerror = function () {
//     console.error("用户名和密码不匹配");
//   };
//   xhr.send(shuju);
// }

// export default qingqiu;

// reqInfs{
//  pattern:Boolean,
//  :String,
//  shuju:
// }
