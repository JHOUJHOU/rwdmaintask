console.log('Hello!');

$(document).ready(() => {
  console.log('HesSchool Hello!');
});

const constraints = {
  name: {
    presence: {
      message: "是必填欄位"
    },
  },
  phone:{
    presence: {
      message: "是必填欄位"
    },
  },
  email:{
    presence: {
      message: "是必填欄位"
    },
    email: {
      email : true,
      message: "格式錯誤"
    }
  },
  feedback:{
    presence: {
      message: ""
    },
  },
};
const form = document.querySelector("form#myForm");
const inputs = document.querySelectorAll("input[type=text]");

inputs.forEach((item) => {

  item.addEventListener("change", function() {
    e.preventDefault();
    item.nextElementSibling.textContent = "";
    let errors = validate(form, constraints);
console.log(errors)
    //呈現在畫面上
    if(errors){
      Object.keys(errors).forEach(function(keys) {
        console.log(keys); 
        document.querySelector(`.${keys}`).textContent = errors[keys]
      })
    }
  });
});
