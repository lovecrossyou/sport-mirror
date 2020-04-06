import {useRef, useEffect} from 'react';

export function useInterval(callback, delay = 1000) {
  const saveCallback = useRef();
  useEffect(() => {
    saveCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      saveCallback.current();
    }
    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}
