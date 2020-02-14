// Write your solution in this file!
<<<<<<< HEAD
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign(driver, {[key]: value});
}

function deleteFromDriverByKey(driver, key) {
  const newDriver = {...driver};
  delete newDriver[key];

  return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];

  return driver;
}
=======
driver = {};
>>>>>>> 7d963b22673483eb613c6dfa3fc3635c12f3f4bb
