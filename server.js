
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log("Microservices rock! \n");
    const out = process.env.TEST_OUTPUT;
    console.log(out);
    await sleep(5000);
  }
}

main();
