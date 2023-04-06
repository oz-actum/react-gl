export const compose = (...fns: any[]) =>
  fns.reduceRight(
    (prevFn, nextFn) =>
      (...args: any) =>
        nextFn(prevFn(...args)),
    (value: any) => value
  );
