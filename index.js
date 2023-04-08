const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = sumBattery()
function sumBattery() {
  return batteryBatches.reduce(function (acc, ele) {
    return acc + ele
  }, 0)
}

