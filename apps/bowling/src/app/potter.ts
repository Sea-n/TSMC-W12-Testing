export class BookCount {
  0 = 0;
  1 = 0;
  2 = 0;
  3 = 0;
  4 = 0;
}

export class Potter {
  price(books: number[]) {
    const cnt = new BookCount;
    for (const i of books) {
      ++cnt[i as keyof BookCount];
    }

    let sum = 0;
    for (;;) {
      let types = 0;
      for (let i=0; i<=4; i++) {
        if (cnt[i as keyof BookCount] --> 0) {
          types++;
        }
      }
      if (!types) break;

      switch (types) {
        case 1: sum += 8 * 1 * 1.0; break;
        case 2: sum += 8 * 2 * 0.95; break;
        case 3: sum += 8 * 3 * 0.9; break;
        case 4: sum += 8 * 4 * 0.8; break;
        case 5: sum += 8 * 5 * 0.75; break;
      }
    }
    return sum;
  }
}
