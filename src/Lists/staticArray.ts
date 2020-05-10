const getStaticArray = <T>(len: number): T[] => {
  const a: T[] = [];
  a[len - 1] = null;
  Object.seal(a);
  return a;
};

export { getStaticArray };
