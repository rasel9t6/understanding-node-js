// This is the custom implementation of the EventEmitter object.
// The code was grabbed from https://www.freecodecamp.org/news/how-to-code-your-own-event-emitter-in-node-js-a-step-by-step-guide-e13b7e7908e1/

// Make sure to export the class to be able to use it in the app.js file
export default class EventEmitter {
  constructor() {
    this.listeners = {}; // Master object for event listeners
  }

  addListener(eventName, fn) {
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = [];
    }
    this.listeners[eventName].push(fn);
    return this;
  }

  on(eventName, fn) {
    return this.addListener(eventName, fn);
  }

  once(eventName, fn) {
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = [];
    }

    const onceWrapper = (...args) => {
      fn(...args);
      this.off(eventName, onceWrapper);
    };

    this.listeners[eventName].push(onceWrapper);
    return this;
  }

  off(eventName, fn) {
    return this.removeListener(eventName, fn);
  }

  removeListener(eventName, fn) {
    const lis = this.listeners[eventName];
    if (!lis) return this;

    for (let i = lis.length - 1; i >= 0; i--) {
      if (lis[i] === fn || lis[i].listener === fn) {
        lis.splice(i, 1);
        break;
      }
    }

    if (lis.length === 0) {
      delete this.listeners[eventName]; // Clean up empty event names
    }

    return this;
  }

  emit(eventName, ...args) {
    const fns = this.listeners[eventName];
    if (!fns) return false;

    fns.slice().forEach((fn) => {
      fn(...args);
    });

    return true;
  }

  listenerCount(eventName) {
    return this.listeners[eventName]?.length || 0;
  }

  rawListeners(eventName) {
    return this.listeners[eventName] || [];
  }
}
