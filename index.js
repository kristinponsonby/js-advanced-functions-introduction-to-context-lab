function createEmployeeRecord(employee) {

    const employeeCard = {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employeeCard
}

function createEmployeeRecords(employees) {
     return employees.map( function(employee) {
           return createEmployeeRecord(employee)
        })
        
    }
function createTimeInEvent(employee, timeCard) {
    const timeCardArray = timeCard.split(" ")

    const timeInEvent = {
        type: "TimeIn",
        hour: timeCardArray[1],
        date: timeCardArray[0]
    }
        const updatedEmployee = employee.timeInEvents.push(timeInEvent)
        return updatedEmployee

}


function createTimeOutEvent(employee, time) {
    const timeOutEvent = {
        type: "TimeOut",
        hour: employee[1],
        date: employee[0]
    }
}


function hoursWorkedOnDate() {

}

function wagesEarnedOnDate() {

}

function allWagesFor() {

}

function findEmployeeByFirstName() {

}
  
function calculatePayroll(){

}