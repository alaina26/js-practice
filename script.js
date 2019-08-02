// let students = [
//     {
//         name: "Amna",
//         gender: "f",
//         dob: new Date("02-04-1990"),
//         address: {
//             ilaqa: "Gulistan-e-Johar",
//             city: "Karachi",
//             country: "Pakistan",
//             postalCode: 47114
//         },
//         phoneNo: "0331-2324243",
//         admissionTestScore: 56,
//         hasInternet: true,
//         hasComputer: false,
//         hasJob: true,
//         hasSchoolBefore: false
//     },
//     {
//         name: "Hadia",
//         gender: "f",
//         dob: new Date("05-15-1984"),
//         address: {
//             ilaqa: "Lyari",
//             city: "Karachi",
//             country: "Pakistan",
//             postalCode: 75660
//         },
//         phoneNo: "0345-3452953",
//         admissionTestScore: 48,
//         hasInternet: false,
//         hasComputer: false,
//         hasJob: false,
//         hasSchoolBefore: true
//     },
//     {
//         name: "Ahmed",
//         gender: "m",
//         dob: new Date("06-27-2002"),
//         address: {
//             ilaqa: "University Road",
//             city: "Quetta",
//             country: "Pakistan",
//             postalCode: 82215
//         },
//         phoneNo: "0333-0124325",
//         admissionTestScore: 33,
//         hasInternet: true,
//         hasComputer: false,
//         hasJob: false,
//         hasSchoolBefore: false
//     },
//     {
//         name: "Fariha",
//         gender: "f",
//         dob: new Date("09-13-1998"),
//         address: {
//             ilaqa: "University Road",
//             city: "Karachi",
//             country: "Pakistan",
//             postalCode: 82215
//         },
//         phoneNo: "0331-9432532",
//         admissionTestScore: 33,
//         hasInternet: true,
//         hasComputer: false,
//         hasJob: false,
//         hasSchoolBefore: false
//     },
//     {
//         name: "Abdullah",
//         gender: "m",
//         dob: new Date("02-14-1882"),
//         address: {
//             ilaqa: "Model Colony",
//             city: "Karachi",
//             country: "Pakistan",
//             postalCode: 33112
//         },
//         phoneNo: "0344-9922521",
//         admissionTestScore: 53,
//         hasInternet: false,
//         hasComputer: false,
//         hasJob: false,
//         hasSchoolBefore: true
//     },
//     {
//         name: "Alia",
//         gender: "f",
//         dob: new Date("01-24-2000"),
//         address: {
//             ilaqa: "Jinnah Malir",
//             city: "Quetta",
//             country: "Pakistan",
//             postalCode: 45212
//         },
//         phoneNo: "0300-7712661",
//         admissionTestScore: 50,
//         hasInternet: false,
//         hasComputer: true,
//         hasJob: true,
//         hasSchoolBefore: false
//     },
//     {
//         name: "Abida",
//         gender: "f",
//         dob: new Date("08-30-1872"),
//         address: {
//             ilaqa: "Bazar Colony",
//             city: "Lahore",
//             country: "Pakistan",
//             postalCode: 32212
//         },
//         phoneNo: "0345-9912121",
//         admissionTestScore: 23,
//         hasInternet: true,
//         hasComputer: false,
//         hasJob: true,
//         hasSchoolBefore: true
//     },
//     {
//         name: "Burhan",
//         gender: "m",
//         dob: new Date("03-17-1992"),
//         address: {
//             ilaqa: "Shah-Faisal",
//             city: "Karachi",
//             country: "Pakistan",
//             postalCode: 32388
//         },
//         phoneNo: "0336-9256455",
//         admissionTestScore: 48,
//         hasInternet: true,
//         hasComputer: true,
//         hasJob: true,
//         hasSchoolBefore: true
//     },
//     {
//         name: "Saqib",
//         gender: "m",
//         dob: new Date("08-09-1994"),
//         address: {
//             ilaqa: "Liberty",
//             city: "Lahore",
//             country: "Pakistan",
//             postalCode: 455679
//         },
//         phoneNo: "0311-2323669",
//         admissionTestScore: 31,
//         hasInternet: false,
//         hasComputer: true,
//         hasJob: true,
//         hasSchoolBefore: true
//     },
//     {
//         name: "Noreen",
//         gender: "f",
//         dob: new Date("04-14-1998"),
//         address: {
//             ilaqa: "Tench Bhata",
//             city: "Rawalpindi",
//             country: "Pakistan",
//             postalCode: 45783
//         },
//         phoneNo: "0300-6591248",
//         admissionTestScore: 58,
//         hasInternet: true,
//         hasComputer: false,
//         hasJob: true,
//         hasSchoolBefore: true
//     },
//     {
//         name: "Tahir",
//         gender: "m",
//         dob: new Date("01-01-2004"),
//         address: {
//             ilaqa: "Korangi",
//             city: "Karchi",
//             country: "Pakistan",
//             postalCode: 56782
//         },
//         phoneNo: "0316-2578989",
//         admissionTestScore: 23,
//         hasInternet: false,
//         hasComputer: false,
//         hasJob: false,
//         hasSchoolBefore: false
//     },
//     {
//         name: "Faria",
//         gender: "f",
//         dob: new Date("03-11-2002"),
//         address: {
//             ilaqa: "Moinabad",
//             city: "karachi",
//             country: "Pakistan",
//             postalCode: 35812
//         },
//         phoneNo: "0345-9912121",
//         admissionTestScore: 33,
//         hasInternet: false,
//         hasComputer: true,
//         hasJob: true,
//         hasSchoolBefore: false
//     },
//     {
//         name: "Kashif",
//         gender: "m",
//         dob: new Date("06-29-2001"),
//         address: {
//             ilaqa: "C area",
//             city: "Rawalpindi",
//             country: "Pakistan",
//             postalCode: 55664
//         },
//         phoneNo: "0325-9547721",
//         admissionTestScore: 38,
//         hasInternet: true,
//         hasComputer: false,
//         hasJob: true,
//         hasSchoolBefore: true
//     }
// ];

//   for(let i=0; i < students.length; i++){
//       console.log("Name:" + students[i].name);
//       console.log("Gender:" + students[i].gender);
//       console.log("City:" + students[i].address.city);
//       console.log("Score:" + students[i].admissionTestScore + "marks");
//       console.log("");
//   }

// for(let i = 0; i < students.length; i++){
// if(students[i].gender === "f"){
//     console.log(students[i].name);
// }

// }

// for(let i = 0; i < students.length; i++){
//     if(students[i].gender === "m"){
//         console.log(students[i].name);
//     }

//     }

// for (let i = 0; i < students.length; i++) {
// if(students[i].admissionTestScore >= 50){
//     console.log(students[i].name);
// }
// }

// for(let i = 0; i < students.length; i++){
//     if(students[i].hasInternet === true && students[i].address.city === "Karachi"){
//         console.log(students[i].name);
//     }
// }
// for(let i = 0; i < students.length; i++){
//     console.log(students[i].name + "'s" + " " + "address:" + students[i].address.ilaqa +" " + "in" + " " + students[i].address.city + "," + students[i].address.country );
// }


// for( let i = 0; i < students.length; i++){
//     if(students[i].phoneNo.charAt(2) == "3" && students[i].phoneNo.charAt(3) <= "7"){
//         console.log(students[i].name);
//         console.log(students[i].phoneNo);
//     }
// }


// JS PRACTICE PW3:


// for(i = 0; i < 10 ; i++){
//     console.log(i+1);
// }


// for (i = 0; i < 10; i++) {
//     console.log(`2 * ${(i + 1)} = ${i * 2 + 2}`);
// }


// for (i = 0; i < 10; i++) {
//     console.log(`3 * ${(i + 1)} = ${i * 3 + 3}`);
// };

// console.log(" ");




// for (i = 0; i < 10; i++) {
//     console.log(`4 * ${(i + 1)} = ${i * 4 + 4}`);
// };

// console.log(" ");



// for (i = 0; i < 10; i++) {
//     console.log(`5 * ${(i + 1)} = ${i * 5 + 5}`);
// };

// console.log(" ");



// for (i = 0; i < 10; i++) {
//     console.log(`6 * ${(i + 1)} = ${i * 6 + 6}`);
// };

// console.log(" ");

// for (i = 0; i < 10; i++) {
//     console.log(`7 * ${(i + 1)} = ${i * 7 + 7}`);
// }

// console.log(" ");

// for (i = 0; i < 10; i++) {
//     console.log(`8 * ${(i + 1)} = ${i * 8 + 8}`);
// };

// console.log(" ");

// for (i = 0; i < 10; i++) {
//     console.log(`9 * ${(i + 1)} = ${i * 9 + 9}`);
// };

// console.log(" ");



// let students = [
//     {
//         name: "Amna",
//         hobbies: ["eating", "cooking"]
//     },
//     {
//         name: "Daniyal",
//         hobbies: ["arts", "shopping"]
//     },
//     {
//         name: "Fahad",
//         hobbies: ["coding", "cooking"]
//     },
//     {
//         name: "Hajra",
//         hobbies: ["sleep", "reading"]
//     }
// ];

// for(i=0; i<students.length;i++){
//     console.log("Hobbies of " + students[i].name);
//         console.log("1:" + students[i].hobbies);
// }

// question 7:

for(i = 0; i < 10 ; i++){
    console.log("*******" + i+1);
}














































