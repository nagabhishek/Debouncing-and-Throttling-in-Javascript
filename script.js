function getData() {
  console.log('Getting data...');
}

function debounce(callback, interval) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => callback.apply(this, args), interval);
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
const better = debounce(getData, 500);
const betterUsingThrottle = throttle(getData, 500);
