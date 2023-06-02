import React, { FC, useCallback, useState } from "react";

const isPrime = (number: number): boolean => {
  for (let i = 2, s = Math.sqrt(number); i <= s; i++) {
    if (number % i === 0) return false;
  }
  return number > 1;
};

/**
 * TASK 1: Rewrite the handlePrime function with the usage of useCallback hook.
 *
 */

export const UseCallback: FC = () => {
  const [count, setCount] = useState(0);
  const [prime, setPrime] = useState(false);

  const handleAdd = () => {
    const current = count + 1;
    setPrime(isPrime(current));
    setCount(current);
  };

  // const handlePrime = useMemo(() => {
  //   return () => {
  //     prime && console.log(`${count} is prime`);
  //   };
  // }, [prime]);

  const handlePrime = useCallback(() => {
    prime && console.log(`${count} is prime`);
  }, [prime]);

  return (
    <>
      <code>Count: {count}</code>
      <br />
      <code>Is prime: {JSON.stringify(prime)}</code>
      <br />
      <button className="btn btn-primary" type="button" onClick={handleAdd}>
        +1
      </button>
      <button className="btn btn-primary" type="button" onClick={handlePrime}>
        Check Prime
      </button>
    </>
  );
};
