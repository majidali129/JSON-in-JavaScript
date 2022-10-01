// const usersText = `{
//     "users":[
//       {
//         "firstName":"Asabeneh",
//         "lastName":"Yetayeh",
//         "age":250,
//         "email":"asab@asb.com"
//       },
//       {
//         "firstName":"Alex",
//         "lastName":"James",
//         "age":25,
//         "email":"alex@alex.com"
//       },
//       {
//       "firstName":"Lidiya",
//       "lastName":"Tekle",
//       "age":28,
//       "email":"lidiya@lidiya.com"
//       }
//     ]
//     }`
    
//     const usersObj = JSON.parse(usersText)
//     console.log(usersObj);

 
// const users = {
//     Alex: {
//       email: 'alex@alex.com',
//       skills: ['HTML', 'CSS', 'JavaScript'],
//       age: 20,
//       isLoggedIn: false,
//       points: 30
//     },
//     Asab: {
//       email: 'asab@asab.com',
//       skills: [
//         'HTML',
//         'CSS',
//         'JavaScript',
//         'Redux',
//         'MongoDB',
//         'Express',
//         'React',
//         'Node'
//       ],
//       age: 25,
//       isLoggedIn: false,
//       points: 50
//     },
//     Brook: {
//       email: 'daniel@daniel.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//       age: 30,
//       isLoggedIn: true,
//       points: 50
//     },
//     Daniel: {
//       email: 'daniel@alex.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     John: {
//       email: 'john@john.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//       age: 20,
//       isLoggedIn: true,
//       points: 50
//     },
//     Thomas: {
//       email: 'thomas@thomas.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     Paul: {
//       email: 'paul@paul.com',
//       skills: [
//         'HTML',
//         'CSS',
//         'JavaScript',
//         'MongoDB',
//         'Express',
//         'React',
//         'Node'
//       ],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     }
//   }
  
//   const txt = JSON.stringify(users, undefined, 5)
//   console.log(txt) // text means JSON- because json is a string form of an object.

// ######################################

// Using a Filter Array with JSON.stringify

// const user = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     country: 'Finland',
//     city: 'Helsinki',
//     email: 'alex@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
//     age: 250,
//     isLoggedIn: false,
//     points: 30
//   }
//   const txt = JSON.stringify(user,['firstName', 'lastName', 'country', 'city', 'age'],4)
//   console.log(txt)

// #################################################### Exercises #####################################
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`
// Q)   Change skills array to JSON using JSON.stringify()
// let jsonSkills = JSON.stringify(skills,"skills")
// console.log(jsonSkills)
// let simpleSkills = JSON.parse(jsonSkills)
// console.log(simpleSkills)

// Q)   Stringify the age variable
// let jsonAge = JSON.stringify(age,"age");
// console.log(jsonAge)

// Q)   Stringify the isMarried variable
// let jsonVariable = JSON.stringify(isMarried,"isMarried")
// console.log(jsonVariable)

// Q)   Stringify the student object
// let jsonStudent = JSON.stringify(student,"student");
// console.log(jsonStudent);

// Q)   Stringify the students object with only firstName, lastName and skills properties
// let selectedJson = JSON.stringify(student,['firstName','lastName','skills'],4);
// console.log(selectedJson)

// Q)   Parse the txt JSON to object.
// let objectText = JSON.parse(txt);
// console.log(objectText)

// Q)   Find the user who has many skills from the variable stored in txt.









