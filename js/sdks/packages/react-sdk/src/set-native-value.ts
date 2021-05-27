// Used by SecureForm to write tokens to hidden inputs
// This madness is necessary to set a value on a react element in a way that will trigger the onChange listener.  As of
// 2021, setting the value by ref will not trigger onChange listeners.

// TODO: make this work with typescript and eslint
/* eslint-disable */
export default function setNativeValue(element: HTMLInputElement, value: string) {
  // @ts-ignore
  const valueSetter = Object.getOwnPropertyDescriptor(element, 'value').set;
  const prototype = Object.getPrototypeOf(element);
  // @ts-ignore
  const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value').set;

  if (valueSetter && valueSetter !== prototypeValueSetter) {
    // @ts-ignore
    prototypeValueSetter.call(element, value);
  } else {
    // @ts-ignore
    valueSetter.call(element, value);
  }
}