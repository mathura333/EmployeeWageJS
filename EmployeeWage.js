// const IS_PART_TIME = 1;
// const IS_FULL_TIME = 2;
// const PART_TIME_HOURS = 4;
// const FULL_TIME_HOURS = 8;
// const WAGE_PER_HOUR = 20;
// const WORKING_DAYS = 20;
// const MAX_WORK_HOURS = 160;

let EmployeeWage = {
    IS_PARTTIME: 1,
    IS_FULLTIME: 2,
    PART_TIME_HOURS: 4,
    FULL_TIME_HOURS: 8,
    WAGE_PER_HOUR: 20,
    MAX_WORK_HRS: 160,
    MAX_WORK_DAYS: 20,
    empDailyWageArray: new Array(),
};

function GetWorkHours(empCheck) {
    let workHours = 0;
    switch (empCheck) {
        case EmployeeWage.IS_PARTTIME:
            workHours = EmployeeWage.PART_TIME_HOURS;
            break;
        case EmployeeWage.IS_FULLTIME:
            workHours = EmployeeWage.FULL_TIME_HOURS;
            break;
        default:
            workHours = 0;
            break;
    }
    return workHours;
}

function CalEmpWage(hrs) {
    return hrs * EmployeeWage.WAGE_PER_HOUR;
}

let totalWorkHours = 0;
let totalWorkDays = 0;
for (; totalWorkDays < EmployeeWage.MAX_WORK_DAYS && totalWorkHours <= EmployeeWage.MAX_WORK_HRS; totalWorkDays++) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let workHours = GetWorkHours(empCheck);
    totalWorkHours += workHours;
    if (totalWorkHours > EmployeeWage.MAX_WORK_HRS) {
        workHours -= totalWorkHours - EmployeeWage.MAX_WORK_HRS;
        totalWorkHours = EmployeeWage.MAX_WORK_HRS;
    }
    EmployeeWage.empDailyWageArray.push(CalEmpWage(workHours));
}

let empWage = CalEmpWage(totalWorkHours)
let totalWage =0;
EmployeeWage.empDailyWageArray.forEach((dailyWage)=>{totalWage += dailyWage});
console.log("EmpWage array : " + EmployeeWage.empDailyWageArray.toString());
console.log('Total Working days : ' + totalWorkDays)
console.log('Total Employee wage : ' + totalWage);
console.log("Total Work hours : " + totalWorkHours);