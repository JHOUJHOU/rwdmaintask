"use strict";

console.log('Hello!');
$(document).ready(function () {
  console.log('HesSchool Hello!');
});
var constraints = {
  name: {
    presence: {
      message: "是必填欄位"
    }
  },
  phone: {
    presence: {
      message: "是必填欄位"
    }
  },
  email: {
    presence: {
      message: "是必填欄位"
    },
    email: {
      email: true,
      message: "格式錯誤"
    }
  },
  feedback: {
    presence: {
      message: ""
    }
  }
};
var form = document.querySelector("form#myForm");
var inputs = document.querySelectorAll("input[type=text]");
inputs.forEach(function (item) {
  item.addEventListener("change", function () {
    e.preventDefault();
    item.nextElementSibling.textContent = "";
    var errors = validate(form, constraints);
    console.log(errors); //呈現在畫面上

    if (errors) {
      Object.keys(errors).forEach(function (keys) {
        console.log(keys);
        document.querySelector(".".concat(keys)).textContent = errors[keys];
      });
    }
  });
});
//# sourceMappingURL=all.js.map
