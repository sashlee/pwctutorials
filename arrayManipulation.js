//Array of Numbers
const studentScores = [80, 90, 70, 60, 50];

//Array of Strings
const studentNames = [
  "Oluwakemi",
  "James",
  "Okiroro",
  "Timilehin",
  "Oluwafemi",
];

//Array of Objects
const studentActivities = [
  {
    id: 1,
    description: "Having the induction session",
    isDone: true,
  },
  {
    id: 2,
    description: "Starting the JavaSript, HTML,CSS and React class",
    isDone: false,
  },
  {
    id: 3,
    description: "Starting the C# .Net Classes",
    isDone: false,
  },
];

const customerAccountInfo = [
  {
    id: 1,
    accountNumber: "123456789",
    fullName: "Oluwakemi Ogunjobi",
    address: "26 Obafemi Awolowo road",
    canDebit: true,
  },
  {
    id: 2,
    accountNumber: "553456789",
    fullName: "Oluwakemi Samuel",
    address: "26 Obafemi Awolowo road",
    canDebit: false,
  },
  {
    id: 5,
    accountNumber: "123456744",
    fullName: "Abraham Ogunjobi",
    address: "30 Hamat Awolowo road",
    canDebit: true,
  },
];

//converting the array of objects to json format
const studentActivitiesJSON = JSON.stringify(studentActivities);
//Access the array elements
// console.log(studentScores[3]);
// console.log(studentNames[2]);
// console.log(studentActivities[0].isDone);
// console.log(studentActivitiesJSON);

//Higher order array function
// map();

const studentActivitiesDescription = studentActivities.map(
  (activity) => activity.description
);

const studentActivitiesId = studentActivities.map((activity) => activity.id);

// console.log(studentActivitiesDescription);
// console.log(studentActivitiesId);

const customerAccountInfoId = customerAccountInfo.map(function (information) {
  return information.id;
});
const customerAccountInfoFullname = customerAccountInfo.map(function (
  information
) {
  return information.fullName;
});
const customerAccountInfoAccountnumber = customerAccountInfo.map(function (
  information
) {
  return information.accountNumber;
});
const customerAccountInfoAddress = customerAccountInfo.map(function (
  information
) {
  return information.address;
});

const studentScoresMultiple = studentScores.map(function (scores) {
  return scores * 2;
});
const customerAccountInfoCandebit = customerAccountInfo.map(function (
  information
) {
  return information.canDebit;
});

// console.log(customerAccountInfoId);
// console.log(customerAccountInfoFullname);
// console.log(customerAccountInfoAccountnumber);
// console.log(customerAccountInfoAddress);
// console.log(customerAccountInfoCandebit);
// console.log(studentScoresMultiple);

//filters
const studentsActivitiesDone = studentActivities.filter(
  (activity) => activity.isDone
);

const studentsActivitiesNotDone = studentActivities.filter(
  (activity) => !activity.isDone
);

const studentsActivitiesId = studentActivities.filter(
  (activity) => activity.id === 3
);

console.log(studentsActivitiesDone);
