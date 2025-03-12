function returnFirstTwoDrivers(array) {
    return array.slice(0, 2);
  }

  function returnLastTwoDrivers(array) {
    return array.slice(-2);
  }
  
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  
  function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
  

  function fareDoubler(fare) {
    return fare * 2;
  }
  

  function fareTripler(fare) {
    return fare * 3;
  }
  
  function selectDifferentDrivers(arrayOfDrivers, func) {
    return func(arrayOfDrivers);
  }
  
