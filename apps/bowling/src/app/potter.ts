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

    /* The combination of 4+4 is cheaper than 3+5. */
    const comb = Math.min(titles[3], titles[5]);
    titles[3] -= comb;
    titles[4] += comb * 2;
    titles[5] -= comb;

    sum += 1 * 1.00 * titles[1];
    sum += 2 * 0.95 * titles[2];
    sum += 3 * 0.90 * titles[3];
    sum += 4 * 0.80 * titles[4];
    sum += 5 * 0.75 * titles[5];

    return sum * 8;
  }
}
