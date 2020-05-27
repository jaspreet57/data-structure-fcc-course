class TowerOfHanoi<T> {
  size: number;

  stackA: T[];

  stackB: T[];

  stackC: T[];

  constructor(size: number, stackA: T[], stackB: T[], stackC: T[]) {
    this.size = size;
    this.stackA = stackA;
    this.stackB = stackB;
    this.stackC = stackC;
  }

  solve(): void {
    // move all elements from A to C using B
    this.solution(this.size, this.stackA, this.stackC, this.stackB);
  }

  private solution(size: number, A: T[], C: T[], B: T[]) {
    if (size > 0) {
      this.solution(size - 1, A, B, C);
      const temp = A.pop();
      C.push(temp);
      this.solution(size - 1, B, C, A);
    }
  }
}

export { TowerOfHanoi };
