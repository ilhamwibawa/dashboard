import { useState } from "react";

// Define a generic type for the value stored in localStorage
type LocalStorageValue<T> = T | null;

const useLocalStorage = <T,>(
  key: string,
  initialValue: T
): [LocalStorageValue<T>, (value: T) => void, () => void] => {
  // Get the stored value from localStorage or use the initial value
  const storedValue =
    typeof window !== "undefined" ? localStorage.getItem(key) : null;
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;

  // State to hold the current value
  const [value, setValue] = useState<LocalStorageValue<T>>(initial);

  // Set the value to localStorage when it changes
  const setStoredValue = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  // Remove the value from localStorage
  const removeStoredValue = () => {
    setValue(initialValue);
    localStorage.removeItem(key);
  };

  return [value, setStoredValue, removeStoredValue];
};

export default useLocalStorage;
