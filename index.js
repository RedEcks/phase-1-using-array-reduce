const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalBatteriesInitial = 0;
const totalBatteries = batteryBatches.reduce(
    (begin,end)=>begin+end,totalBatteriesInitial);

    console.log(totalBatteries);