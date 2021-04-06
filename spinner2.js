let i =100;
  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, i);
  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, i+200);
  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, i+400);
  setTimeout(() => {
    process.stdout.write('\r\\   \n');
  }, i+600);
