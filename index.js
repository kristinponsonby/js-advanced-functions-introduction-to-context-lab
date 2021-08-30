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
        hour: parseInt(timeCardArray[1], 10),
        date: timeCardArray[0]
    }
         employee.timeInEvents.push(timeInEvent)
         return employee
    
}


function createTimeOutEvent(employee, timeCard) {
    const timeCardArray = timeCard.split(" ")

    const timeOutEvent = {
        type: "TimeOut",
        hour: parseInt(timeCardArray[1], 10),
        date: timeCardArray[0]
    }
    employee.timeOutEvents.push(timeOutEvent)
    return employee
}


let hoursWorkedOnDate = function(employee, soughtDate){
    let inEvent = employee.timeInEvents.find(function(e){
        return e.date === soughtDate
    })

    let outEvent = employee.timeOutEvents.find(function(e){
        return e.date === soughtDate
    })

    return (outEvent.hour - inEvent.hour) / 100
}

let wagesEarnedOnDate = function(employee, dateSought){
    let rawWage = hoursWorkedOnDate(employee, dateSought)
        * employee.payPerHour
    return parseFloat(rawWage.toString())
}


let allWagesFor = function(employee){
    let eligibleDates = employee.timeInEvents.map(function(e){
        return e.date
    })

    let payable = eligibleDates.reduce(function(memo, d){
        return memo + wagesEarnedOnDate(employee, d)
    }, 0)

    return payable
}

let findEmployeeByFirstName = function(srcArray, firstName) {
    return srcArray.find(function(rec){
      return rec.firstName === firstName
    })
  }

let calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor(rec)
    }, 0)
}