class Student {

    constructor(forename, surname, email, DateOfBirth){
        this.forename = forename;
        this.surname = surname;
        this.email = email;
        this.DateOfBirth = DateOfBirth;
    }

}

// Declaring Students Info 
let student1 = new Student ("Grace", "Buys", "Grace123@gmail.com", "04-08-1992");
let student2 = new Student ("Chang", "Woods", "Woods123@gmail.com", "11-05-2000");
let student3 = new Student ("Oupa", "Bantoe", "Oupa69@gmail.com", "08-11-1989");  
let student4 = new Student ("Veronica", "Maxwell", "Maxwell015@gmail.com", "06-12-1994");    
let student5 = new Student ("Doug", "Mask", "MaskD777@gmail.com", "16-10-2001"); 



// Updating Student1 Info
$(".name-grace").text(student1.forename);
$(".name-buys").text(student1.surname);
$(".name-grace123").text(student1.email);
$(".name-04-08-1992").text(student1.DateOfBirth);


// Updating Student2 Info
$(".name-chang").text(student2.forename);
$(".name-woods").text(student2.surname);
$(".name-woods123").text(student2.email);
$(".name-11-05-2000").text(student2.DateOfBirth);


// Updating Student3 Info
$(".name-oupa").text(student3.forename);
$(".name-bantoe").text(student3.surname);
$(".name-oupa69").text(student3.email);
$(".name-08-11-1989").text(student3.DateOfBirth);


// Updating Student4 Info
$(".name-veronica").text(student4.forename);
$(".name-maxwell").text(student4.surname);
$(".name-maxwell015").text(student4.email);
$(".name-06-12-1994").text(student4.DateOfBirth);


// Updating Student5 Info
$(".name-doug").text(student5.forename);
$(".name-mask").text(student5.surname);
$(".name-maskd777").text(student5.email);
$(".name-16-10-2001").text(student5.DateOfBirth);




class Lecturer {

    constructor(forename, surname, email, DateOfBirth){
        this.forename = forename;
        this.surname = surname;
        this.email = email;
        this.DateOfBirth = DateOfBirth;
    }

}

// Declaring Lecturer Info 

let lecturer1 = new Lecturer ("Maggie", "Walker", "Lecwalker@gmail.com", "02-04-1981"); 
let lecturer2 = new Lecturer ("Micheal", "Fox", "Fox187@gmail.com", "21-07-1978"); 


// Updating Lecturer1 Info
$(".name-maggie").text(lecturer1.forename);
$(".name-walker").text(lecturer1.surname);
$(".name-lecwalker").text(lecturer1.email);
$(".name-02-04-1981").text(lecturer1.DateOfBirth);

// Updating Lecturer2 Info
$(".name-micheal").text(lecturer2.forename);
$(".name-fox").text(lecturer2.surname);
$(".name-fox187").text(lecturer2.email);
$(".name-21-07-1978").text(lecturer2.DateOfBirth);





class Degree {

    constructor(name, duration, courses, lecturer){
        this.name = name;
        this.duration = duration;
        this.courses = courses;
        this.lecturer = lecturer;
    }

}

// Declaring Degree Info 

let Degree1 = new Degree ("Bachelor of Computer and Information Sciences in Application Development", "3 Years", "Troubleshooting and Testing", "Maggie Walker"); 
let Degree2 = new Degree ("Bachelor of Computer and Information Sciences in Networking Engineering", "3 Years", "Integrated network solutions and Security", "Micheal Fox"); 


// Updating Degree1 Info
$(".name-bachelor").text(Degree1.name);
$(".name-3Yr").text(Degree1.duration);
$(".name-courses").text(Degree1.courses);
$(".name-mw").text(Degree1.lecturer);

// Updating Degree2 Info
$(".name-bachelor1").text(Degree2.name);
$(".name-3Yr1").text(Degree2.duration);
$(".name-courses1").text(Degree2.courses);
$(".name-mf").text(Degree2.lecturer);






class Course {

    constructor(name, duration, courses, degree){
        this.name = name;
        this.duration = duration;
        this.courses = courses;
        this.degree = degree;
    }

}

// Declaring Course Info 

let Course1 = new Course ("Database design", "4 Months", "Troubleshooting and Testing", "Bachelor of Computer and Information Sciences in Application Development"); 
let Course2 = new Course ("Framework", "4 Months", "Integrated network solutions and Security", "Bachelor of Computer and Information Sciences in Networking Engineering"); 


// Updating Course1 Info
$(".name-db").text(Course1.name);
$(".name-4m").text(Course1.duration);
$(".name-courses0").text(Course1.courses);
$(".name-bach1").text(Course1.degree);

// Updating Course2 Info
$(".name-fr").text(Course2.name);
$(".name-4ms").text(Course2.duration);
$(".name-courses3").text(Course2.courses);
$(".name-bach2").text(Course2.degree);