function getData() {
  console.log('Getting data...');
}

function debounce(func, wait) {
  let timeout;
  return (...arg) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, arg), wait);
  };
}

function throttle(callback, interval) {
  let enableCall = false;
  return (...args) => {
    if (!enableCall) {
      enableCall = true;
      callback.apply(this, args);
      setTimeout(() => (enableCall = false), interval);
    }
  };
}

function better() {
  debounce(getData, 500);
}
