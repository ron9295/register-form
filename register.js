var inputElements = document.getElementsByClassName("in");
var h1 = document.getElementById("titleH1");

function collect1() {
  let data = {};
  for (let i = 0; i < inputElements.length; i++) {
  data[inputElements[i].id] = inputElements[i].value;
  }
  console.log(data);
  if (validate()) {
    cancel_decoration();
  }
  else {
    decoration_wrong();
  }
  return data;
}
function validate() {
  let pass = document.getElementById("passward").value;
  let validate_pass = document.getElementById("validatePassward").value;
  if (pass === validate_pass)
  return true;
  return false;
}
function decoration_wrong(){
  document.getElementById("to_hide").style.visibility = "hidden";
  document.getElementById("to_appear").style.visibility = "visible";
  document.getElementById("label_pass").style.color ="red";
  document.getElementById("label_val_pass").style.color ="red";
  document.getElementById("to_appear").style.color ="red";
  return;
}
function cancel_decoration(){
  document.getElementById("to_hide").style.visibility = "visible";
  document.getElementById("to_appear").style.visibility = "hidden";
  document.getElementById("label_pass").style.color ="rgb(138, 173, 180)";
  document.getElementById("label_val_pass").style.color ="rgb(138, 173, 180)";
  document.getElementById("to_appear").style.color ="rgb(138, 173, 180)";
}
function showAndHide() {
  let pass = document.getElementById("passward");
  let val_pass = document.getElementById("validatePassward");
  let button = document.getElementById("button_to_show_pass");
  if(pass.type === "password"){
    pass.type = "text";
    val_pass.type = "text";
    button.innerHTML = "hide passwards";
  }
  else {
    pass.type = "password";
    val_pass.type = "password";
    button.innerHTML = "show passwards";
  }
  return;
}
