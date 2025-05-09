
// // Define the Student object constructor
// function Student(name, completionStatus, expertiseArea) {
//     this.name = name;
//     this.completionStatus = completionStatus;
//     this.expertiseArea = expertiseArea;
//   }
  
//   // Define the Course class
//   function Course(title, instructor, students) {
//     this.title = title;
//     this.instructor = instructor;
//     this.students = students || []; // Default to an empty array
//   }
  
//   // Prototype methods for the Course class
  
//   // 1. Return names of students who completed the course
//   Course.prototype.getCompletedStudents = function() {
//     return this.students.filter(student => student.completionStatus).map(student => student.name);
  
//   // 2. Count enrolled students by expertise area
//   Course.prototype.countStudentsByExpertise = function() {
//     const counts = {};
//     this.students.forEach(student => {
//       if (counts[student.expertiseArea]) {
//         counts[student.expertiseArea]++;
//       } else {
//         counts[student.expertiseArea] = 1;
//       }
//     });
//     return counts;
//   };
  
//   // 3. Output different messages based on the number of students
//   Course.prototype.instructorMessage = function() {
//     if (this.students.length > 5) {
//       return `Instructor ${this.instructor}, you have a large class with ${this.students.length} students.  Good job!`;
//     } else {
//       return `Instructor ${this.instructor}, you have a smaller class with ${this.students.length} students.  Engage them!`;
//     }
//   };
  
//   // --- Example Usage ---
  
//   // Create some Student objects
//   const student1 = new Student("Alice", true, "Web Development");
//   const student2 = new Student("Bob", false, "Data Science");
//   const student3 = new Student("Charlie", true, "Web Development");
//   const student4 = new Student("David", true, "AI");
//   const student5 = new Student("Eve", false, "Data Science");
//   const student6 = new Student("Frank", true, "AI");
//   const student7 = new Student("Grace", false, "AI");
  
//   // Create a Course object
//   const course1 = new Course("Web Development Basics", "John Doe", [student1, student2, student3, student4, student5, student6, student7]);
  
//   // Demonstrate the prototype methods
//   console.log("Completed Students:", course1.getCompletedStudents());
//   console.log("Student counts by expertise:", course1.countStudentsByExpertise());
//   console.log("Instructor Message:", course1.instructorMessage());
  
//   //Another example with fewer students
//   const course2 = new Course("Data Science 101", "Jane Smith", [student1, student2]);
//   console.log("Instructor Message:", course2.instructorMessage());

function FeatureToggle(featureName,userGroupAccess){
    this.featureName=featureName;
    this.userGroupAccess=userGroupAccess;
    this.isEnabled= false;
}

FeatureToggle.prototype.canAccess = function(userRole){
    return this.userGroupAccess.includes(userRole);
}

FeatureToggle.prototype.toggleFeature = function(flag){
    this.isEnabled =flag;
}

const featureA = new FeatureToggle("feature A",["admin","manager"]);
const featureB= new FeatureToggle("feature B",["editor"]);

const userRoleAdmin ="admin";
const userRoleEditor ="editor";
 
if (featureA.canAccess(userRoleAdmin)){
    console.log(`User ${userRoleAdmin} can access ${featureA.featureName}`);

} else {
    console.log(`user ${userRoleEditor} cannot access ${featureA.featureName}`);

}

if (featureA.canAccess(userRoleEditor)){
    console.log(`user ${userRoleEditor} can access ${featureA.featureName}`);

}else{
    console.log(`User ${userRoleEditor} cannot access ${featureA.featureName}`)
}
featureA.toggleFeature(true);
console.log(`${featureA.featureName} is now ${featureA.isEnabled ? 'enable':'disable'}`);

// // question two
function TimeLog(freelancerName, projectDetails, logs) {
    this.freelancerName = freelancerName;
    this.projectDetails = projectDetails;
    this.logs = logs;
  }
  
  TimeLog.prototype.calculateTotalEarnings = function(rate) {
    let totalHours = 0;
    for (const log of this.logs) {
      totalHours += log.hoursWorked;
    }
    return totalHours * rate;
  };
  
  TimeLog.prototype.filterLogsByDateRange = function(startDate, endDate) {
    return this.logs.filter(log => {
      const logDate = new Date(log.date);
      return logDate >= new Date(startDate) && logDate <= new Date(endDate);
    });
  };
  
  TimeLog.prototype.exceedsWeeklyHours = function() {
    let totalHoursThisWeek = 0;
    const currentDate = new Date();
    const startOfWeek = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - currentDate.getDay() + 1);
  
    for (const log of this.logs) {
        const logDate = new Date(log.date);
        if (logDate >= startOfWeek && logDate <= currentDate) {
            totalHoursThisWeek += log.hoursWorked;
        }
    }
    return totalHoursThisWeek > 40;
  };
  
  
  const logs = [
    { date: "2025-04-21", hoursWorked: 8 },
    { date: "2025-04-22", hoursWorked: 10 },
    { date: "2025-04-23", hoursWorked: 6 },
    { date: "2025-04-24", hoursWorked: 10 },
    { date: "2025-04-25", hoursWorked: 12 },
    { date: "2025-04-26", hoursWorked: 3 },
    { date: "2025-04-27", hoursWorked: 5 },

  ];
const log = new TimeLog("Qefar Kelvins", "web devops", logs);
  
console.log("Total earnings (rate $50/hr):", log.calculateTotalEarnings(50));

const filteredLogs = log.filterLogsByDateRange("2025-04-21", "2025-04-26");
console.log("Filtered logs between April 21 and April 26:", filteredLogs);

if (log.exceedsWeeklyHours()) {
  console.log("Total hours this week exceed 40.");
} else {
  console.log("Total hours this week do not exceed 40.");
}

// number three

function Order(customer, items, status){
    this.customer = customer;
    this.items = items;
    this.status = status;
}

Order.prototype.totalCosts = function(){
    return  this.items.reduce((total, item) => total + item.quantity * item.unitPrice,0)
    

}
Order.prototype.updateOrderStatus = function(){
    switch (this.status){
        case 'paid':return 'High Priority'
        case 'pending':return 'Normal priority';
        case 'unpaid':return 'low priority';
        default : return 'Review priority';
    }
};

const  firstOrders = new Order({name:"Katya Jess",email:"katyajes@gmail.com"},
    [
        {productName:"nico Camera",quantity:3, unitPrice:2500},
        {productName:"laptops",quantity:5,unitPrice:150000},
        {productName:"earpods",quantity:6,unitPrice:5000}
    ], 'paid'
);
console.log(firstOrders)
console.log(firstOrders.totalCosts())
console.log(firstOrders.updateOrderStatus())

// number four

class Employee{
    constructor(id,name, performanceMetrics,feedback,){
        this.id = id;
        this.performanceMetrics = performanceMetrics;
        this.feedback = feedback || [];
        this.name = name
    }
}

Employee.prototype.calculateAverageScore = function() {
    const metricsValues = Object.values(this.performanceMetrics);
    if (metricsValues.length === 0) {
      return 0; 
    }
    const sum = metricsValues.reduce((acc, val) => acc + val, 0);
    return sum / metricsValues.length;
  };

  Employee.prototype.classifyPerformanceLevel = function() {
    const averageScore = this.calculateAverageScore();
    if (averageScore >= 8) {
      return "Excellent";
    } else if (averageScore >= 6) {
      return "Good";
    } else if (averageScore >= 4) {
      return "Needs Improvement";
    } else {
      return "Poor";
    }
  };
  Employee.prototype.addFeedback = function(newFeedback) {
    this.feedback.push(newFeedback);
  };

  Employee.prototype.addFeedbackBasedOnPerformance = function() {
    const performanceLevel = this.classifyPerformanceLevel();
    const averageScore = this.calculateAverageScore();

    switch (performanceLevel) {
      case "Excellent":
        this.addFeedback(`Great job, ${this.name}! Keep it up  work!`);
        break;
      case "Good":
        this.addFeedback(`Good job, ${this.name}! Continue with this level of performance.`);
        break;
      case "Needs Improvement":
        this.addFeedback(
          `${this.name}, your performance needs improvement. Focus on areas like ${
            Object.keys(this.performanceMetrics)[
              Object.values(this.performanceMetrics).indexOf(
                Math.min(...Object.values(this.performanceMetrics))
              )
            ]
          }.`
        );
        break;
      case "Poor":
        this.addFeedback(
          `${this.name}, your performance is poor. Focus on areas like ${
            Object.keys(this.performanceMetrics)[
              Object.values(this.performanceMetrics).indexOf(
                Math.min(...Object.values(this.performanceMetrics))
              )
            ]
          }.`
        );
        break;
    }
  };

const employee1 = new Employee(101, "Jessy", { communication: 9, efficiency: 8, reliability: 7 }, ["Good communication skills"]);


const averageScore = employee1.calculateAverageScore();
console.log(`Average score for ${employee1.name}: ${averageScore}`);


const performanceLevel = employee1.classifyPerformanceLevel();
console.log(`Performance level for ${employee1.name}: ${performanceLevel}`);


employee1.addFeedback("Excellent work on the project!");
console.log(employee1.feedback);

employee1.addFeedbackBasedOnPerformance();
console.log(employee1.feedback);


const employee2 = new Employee(102, "Qefar", { communication: 5, efficiency: 4, reliability: 4 }, []);


employee2.addFeedbackBasedOnPerformance();
console.log(employee2.feedback);


const metricKey = "efficiency";
console.log(employee2.performanceMetrics[metricKey]);

// number five
function Student(name,completionStatus,expertiseArea){
    this.name=name;
    this.completionStatus=completionStatus;
    this.expertiseArea =expertiseArea;
}
class Course {
    constructor(instructor, title,students){
        this.instructor=instructor;
        this.title = title;
        this.students =students
    }
}
Course.prototype.getCompletedStudents=function(){
return this.students.filter(student =>student.completionStatus).map(student => student.name);

}
Course.prototype.countStudentsByExpertise = function (){
    const counts= {};
    this.students.forEach(student => {
        if (counts[student.expertiseArea]){
            counts[student.expertiseArea]++;

        }else{
            counts[Student.expertiseArea] =1;

        }
    });
    return counts;
};

Course.prototype.instructorMessage = function(){
    if (this.students.length >5){
        return `instructor ${this.instructor}, you have  a large class with ${this.students.length} students.`;

}else{
    return `instructor ${this.instructor} you have a small class  with ${this.students.length} students`;
}
};

const studentOne = new Student("Imma",true,"cybersecurity");
const studentTwo = new Student("Becky",false,"webdevelopment");

const studentThree= new Student("Jennifer",true,"web development");
const StudentFour= new Student("David",true, "Ai");
const studentFive= new Student("Kelvin",true,"web development")

const course1 = new Course("Web Development", "jeol Jonnez",[studentOne,studentTwo,studentThree,StudentFour,studentFive]);

console.log("Completed Students:",course1.getCompletedStudents());
console.log("Student counts by expertise:",course1.countStudentsByExpertise());
console.log("instructor Message: ",course1.instructorMessage())


const course2 = new Course("Data science 101","Jecinta Katya",[studentTwo,studentThree,StudentFour,studentFive]);

console.log("instructor Message:",course2.instructorMessage())