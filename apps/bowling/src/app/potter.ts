export class Count {
  0 = 0;
  1 = 0;
  2 = 0;
  3 = 0;
  4 = 0;
  5 = 0;
}

export class Potter {
  price(books: number[]) {
    const copies = new Count;  // each title -> how many copies
    for (const i of books) {
      ++copies[i as keyof Count];
    }

    let sum = 0;
    const titles = new Count;  // how many different titles -> repeat how many times
    for (;;) {
      let cnt = 0;
      for (let i=0; i<=4; i++) {
        if (copies[i as keyof Count] --> 0) {
          ++cnt;
        }
      }
      ++titles[cnt as keyof Count];
      if (!cnt) break;
    }

    for (let cnt=1; cnt<=5; cnt++) {
      while (titles[cnt as keyof Count] --> 0) {
        switch (cnt) {
          case 1: sum += 8 * 1 * 1.0; break;
          case 2: sum += 8 * 2 * 0.95; break;
          case 3: sum += 8 * 3 * 0.9; break;
          case 4: sum += 8 * 4 * 0.8; break;
          case 5: sum += 8 * 5 * 0.75; break;
        }
      }
    }
    return sum;
  }
}
