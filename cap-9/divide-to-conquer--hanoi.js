const hanoi = (disks, from, to, extra) => {
  if (disks === 1) {
    console.log(`Move o disco 1 da haste ${from} para ${to}`);
  } else {
    hanoi(disks - 1, from, extra, to);
    console.log(`Move o disco ${disks} da haste ${from} para ${to}`);
    hanoi(disks - 1, extra, to, extra);
  }
};

hanoi(2, "A", "B", "C");
