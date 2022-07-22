let myForm = document.querySelector(".my-form");
let firstName = document.getElementById("firstname");
let lastName = document.getElementById("lastname");
let age = document.getElementById("age");

const getGender = () => {
  const gender = document.querySelectorAll('input[name="gender"]');
  let selectedGender;
  for (i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      selectedGender = gender[i];
    }
  }
  return selectedGender;
};

const getState = () => document.getElementById("states");

const getCourses = () => {
  let allCourses = document.getElementsByClassName("courses");
  let checkedCourses = [];
  for (var i = 0; i < allCourses.length; i++) {
    if (allCourses[i].checked) {
      checkedCourses.push(allCourses[i].value);
    }
  }
  return checkedCourses;
};

const onSubmit = (e) => {
  e.preventDefault();
  if (
    firstName.value === "" ||
    lastName.value == "" ||
    !age.value ||
    getGender() == undefined ||
    getState() == undefined ||
    getCourses().length == 0
  ) {
    document.getElementById("data").innerHTML =
      "<p>Please enter all fields</p>";
  } else {
    document.getElementById("data").innerHTML = `
    <p>Name: ${firstName.value} ${lastName.value}</p><p>Age: ${
      age.value
    }</p><p>Gender: ${getGender().value}</p><p>State: ${
      getState().value
    }</p><p>Courses: ${getCourses().join(",")}</p>
    `;
  }
};

myForm.addEventListener("submit", onSubmit);
