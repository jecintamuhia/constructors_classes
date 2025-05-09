


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

Employee.prototype.calculateTotalEarnings=function(){
    const metricsValues = Object.values(this.performanceMetrics);
    if (metricsValues.length ===0){
        return 0;
    }
    const sum = metricsValues.reduce((acc, val)=> acc + val,0);
    return sum / metricsValues.length;
}

Employee.prototype.classifyPerformanceLevel = function(){
    const averageScore = this.calculateAverageScore();
    if (averageScore >= 8){
        return "Excellent";
    }else if (averageScore >= 6){
        return"Good";
    }else if (averageScore >= 4){
        return "Needs Improvement";
    }else{
        return "Poor";
    }
}
Employee.prototype.addFeedback = function(newFeedback) {
    this.feedback.push(newFeedback);
  };

  Employee.prototype.addFeedbackBasedOnPerformance = function() {
    const performanceLevel = this.classifyPerformanceLevel();
    const averageScore = this.calculateAverageScore();

    switch (performanceLevel) {
      case "Excellent":
        this.addFeedback(`Great job, ${this.name}! Keep up the excellent work!`);
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

const employee1 = new Employee(101, "Alice", { communication: 9, efficiency: 8, reliability: 7 }, ["Good communication skills"]);


// const averageScore = employee1.calculateAverageScore();
// console.log(`Average score for ${employee1.name}: ${averageScore}`);


const performanceLevel = employee1.classifyPerformanceLevel();
console.log(`Performance level for ${employee1.name}: ${performanceLevel}`);


employee1.addFeedback("Excellent work on the project!");
console.log(employee1.feedback);

employee1.addFeedbackBasedOnPerformance();
console.log(employee1.feedback);


const employee2 = new Employee(102, "Bob", { communication: 3, efficiency: 4, reliability: 5 }, []);


employee2.addFeedbackBasedOnPerformance();
console.log(employee2.feedback);


const metricKey = "efficiency";
console.log(employee2.performanceMetrics[metricKey]);