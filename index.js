// Code your solution in this file!
function logDriverNames(drivers){
  for(const driver of drivers){
    console.log(driver.name);
  }
}

function logDriversByHometown(drivers, location){
  selectedDrivers = drivers.filter(driver => driver.hometown === location);
  logDriverNames(selectedDrivers);
}

function driversByRevenue(drivers){
  return drivers.slice().sort((a,b) => a.revenue - b.revenue);
}
