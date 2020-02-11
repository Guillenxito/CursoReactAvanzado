import React, { Fragment, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export function useLocalStorage(key, initialValue) {
  const [storedValue, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch (e) {
      return initialValue;
    }
  });

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      setValue(value);
    } catch (error) {
      createPortal.error(error);
    }
  };
  return [storedValue, setLocalStorage];
}
