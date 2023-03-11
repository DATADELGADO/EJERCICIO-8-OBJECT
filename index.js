//****************** */ EJERCICIOS NIVEL 1 ************************


// ********* #1 ********

// let dog = {};


// ********* #2 ********

// console.log(dog);


// ********* #3 ********

// let dog = {
//     name,
//     legs,
//     color,
//     age,
//     bark: "woof woof"
// };



// ********* #4 ********

// let dog = {
//     name,
//     legs,
//     color,
//     age,
//     bark: "woof woof"
// };

// console.log(dog.name);
// console.log(dog.legs);
// console.log(dog.age);
// console.log(dog.bark);


// ********* #5 ********

// dog.breed = "si";
// dog.getDogInfo = "";




//****************** */ EJERCICIOS NIVEL 2 ************************

// const users = {
//     Alex: {
//         email: 'alex@alex.com',
//         skills: ['HTML', 'CSS', 'JavaScript'],
//         age: 20,
//         isLoggedIn: false,
//         points: 30
//     },
//     Alfred: {
//         email: 'alfred@alfred.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//         age: 25,
//         isLoggedIn: false,
//         points: 50
//     },
//     Brook: {
//         email: 'daniel@daniel.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//         age: 30,
//         isLoggedIn: true,
//         points: 50
//     },
//     Daniel: {
//         email: 'daniel@alex.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//         age: 20,
//         isLoggedIn: false,
//         points: 40
//     },
//     John: {
//         email: 'john@john.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//         age: 20,
//         isLoggedIn: true,
//         points: 50
//     },
//     Thomas: {
//         email: 'thomas@thomas.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//         age: 20,
//         isLoggedIn: false,
//         points: 40
//     },
//     Paul: {
//         email: 'paul@paul.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//         age: 20,
//         isLoggedIn: false,
//         points: 40
//     }
// }


// ********* #1 ********


// let keys = Object.keys(users);
// let mayor = 0;
// let key = "";
// for (let i = 0; i < keys.length; i++) {
//     if (users[keys[i]].skills.length > mayor) {
//         mayor = users[keys[i]].skills.length;
//         key = keys[i];
//     }
// }
// console.log(mayor);
// console.log(key);



// ********* #2 ********


// let keys = Object.keys(users);
// let cont = 0;

// for (let i = 0; i < keys.length; i++) {
//     if (users[keys[i]].points > 50) {
//         cont++;
//     }
// }
// console.log(cont);


// ********* #3 ********

// let keys = Object.keys(users);
// let persons = [];
// let mern = ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'];
// for (let i = 0; i < keys.length; i++) {
//     let skills = users[keys[i]].skills;
//     if (skills.includes(mern[0]) && skills.includes(mern[1]) && skills.includes(mern[2]) && skills.includes(mern[3]) && skills.includes(mern[4]) && skills.includes(mern[5]) && skills.includes(mern[6])) {
//         persons.push(keys[i]);
//     }
// }
// console.log(persons);


// ********* #4 ********

// const copyUsers = Object.assign({}, users);
// copyUsers.Steven = {};
// console.log(copyUsers);


// ********* #5 ********

// let keys = Object.keys(users);
// console.log(keys);



// ********* #6 ********


// let keys = Object.keys(users);
// for (let i = 0; i < keys.length; i++) {
//     console.log(Object.values(users[keys[i]]));
// }



// ********* #7 ********


// const countries = {
//     nombre: "Venenzuela",
//     capital: "caracas",
//     poblacion: 250000,
//     idiomas: "español"
// };

// let keys = Object.keys(countries);
// for (let i = 0; i < keys.length; i++) {
//     console.log(countries[keys[i]]);
// }




//****************** */ EJERCICIOS NIVEL 3 ************************

// const users = [
//     {
//         _id: "ab12ex",
//         username: "Alex",
//         email: "alex@alex.com",
//         password: "123123",
//         createdAt: "08/01/2020 9:00 AM",
//         isLoggedIn: false,
//     },
//     {
//         _id: "fg12cy",
//         username: "Alfred",
//         email: "alfred@alfred.com",
//         password: "123456",
//         createdAt: "08/01/2020 9:30 AM",
//         isLoggedIn: true,
//     },
//     {
//         _id: "zwf8md",
//         username: "Brook",
//         email: "brook@brook.com",
//         password: "123111",
//         createdAt: "08/01/2020 9:45 AM",
//         isLoggedIn: true,
//     },
//     {
//         _id: "eefamr",
//         username: "Martha",
//         email: "martha@martha.com",
//         password: "123222",
//         createdAt: "08/01/2020 9:50 AM",
//         isLoggedIn: false,
//     },
//     {
//         _id: "ghderc",
//         username: "Thomas",
//         email: "thomas@thomas.com",
//         password: "123333",
//         createdAt: "08/01/2020 10:00 AM",
//         isLoggedIn: false,
//     },
// ];

// const products = [
//     {
//         _id: "eedfcf",
//         name: "mobile phone",
//         description: "Huawei Honor",
//         price: 200,
//         ratings: [
//             { userId: "fg12cy", rate: 5 },
//             { userId: "zwf8md", rate: 4.5 },
//         ],
//         likes: [],
//     },
//     {
//         _id: "aegfal",
//         name: "Laptop",
//         description: "MacPro: System Darwin",
//         price: 2500,
//         ratings: [],
//         likes: ["fg12cy"],
//     },
//     {
//         _id: "hedfcg",
//         name: "TV",
//         description: "Smart TV:Procaster",
//         price: 400,
//         ratings: [{ userId: "fg12cy", rate: 5 }],
//         likes: ["fg12cy"],
//     },
// ];


// ********* #1 ********

// const personAccount = {
//     firstName: "Steven",
//     lastName:"Delgado",
//     incomes:"",
//     expenses:"",
//     getTotalIncome: function(params) {

//     }, getTotalExpense: function (params) {

//     }, getAccountInfo: function (params) {

//     }, getAddIncome: function (params) {

//     }, getAddExpense: function (params) {

//     }, getAccountBalance: function (params) {

//     }
// };


// ********* #2 ********


// const signUp = (usuario) => {
//     let keys = Object.keys(users[0]);
//     let bandera = false;
//     for (let i = 0; i < users.length; i++) {
//         if (users[i].username === usuario) {
//             bandera = true;
//         }
//     }
//     if (bandera) {
//         console.log(`${usuario} ya existe una cuenta con tu nombre`);
//     } else {
//         let u = {};
//         for (let j = 0; j < keys.length; j++) {
//             if (keys[j] == "username") {
//                 u[keys[j]] = usuario;
//             } else {
//                 u[keys[j]] = "";
//             }
//         }
//         users.push(u)
//         console.log("añadido con exito");
//     }
// }
// signUp("Steven");
// console.log(users);

// const signIn = (usuario) => {
//     for (let i = 0; i < users.length; i++) {
//         if (users[i].username == usuario) {
//             console.log(`${usuario} has iniciado sesion`);
//         } else {
//             console.log(`${usuario} no estas registrado`);
//             break;
//         }
//     }
// }

// signIn("Alfred")

// ********* #3 ********


// const rateProduct = (producto, usuario, calificacion) => {
//     for (let i = 0; i < products.length; i++) {
//         if (producto == products[i].name) {
//             let newRate = {
//                 userId: usuario,
//                 rate: calificacion
//             };
//             products[i].ratings.push(newRate);
//         }

//     }
// }

// rateProduct("TV", "STEVEN", 4.3);
// console.log(products);


// const averageRating = (producto) => {
//     let valoracion = 0;
//     for (let i = 0; i < products.length; i++) {
//         if (producto == products[i].name) {
//             if (products[i].ratings.length > 0) {
//                 let suma = 0;
//                 for (let j = 0; j < products[i].ratings.length; j++) {
//                     suma += products[i].ratings[j].rate;
//                 }
//                 console.log(`promedio de valoraciones ${suma / products[i].ratings.length}`);
//             } else {
//                 console.log("este producto no tiene valoraciones");
//             }
//         }
//     }
// }

// averageRating("mobile phone");


// ********* #4 ********

// const likeProduct = (producto, usuario, likeOrNot) => {
//     for (let i = 0; i < products.length; i++) {
//         if (products[i].name == producto) {
//             let likes = products[i].likes;
//             if (likes.includes(usuario)) {
//                 if (likeOrNot) {
//                     console.log("ya le haz dado like");
//                 } else {
//                     likes.splice(likes.indexOf(usuario), likes.indexOf(usuario) + 1);
//                     console.log("Haz borrado tu like");
//                 }
//             } else {
//                 if (likeOrNot) {
//                     likes.push(usuario);
//                     console.log("has añadido tu like con exito");
//                 } else {
//                     console.log("Ya has eliminado el like");
//                 }
//             }
//         }
//     }

// }

// likeProduct("TV", "steven", true);
// likeProduct("TV", "steven", false);

// console.log(products);