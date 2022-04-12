// Code your solution in this file!
const drivers = ["A", "B", "C", "D"];

const returnFirstTwoDrivers = function(drivers) {
    return [...drivers.slice(0, 2)]
};

const returnLastTwoDrivers = function(drivers) {
    return [...drivers.slice(2)]
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fareMultiplier) {
    return function(fare){
        return fareMultiplier * fare;
    };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
}