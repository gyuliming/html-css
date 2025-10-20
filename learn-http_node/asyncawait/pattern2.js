function myWork(work) {
  return new Promise((resolve, reject) => {
    resolve(work.toUpperCase);
  });
}

function playGame(work) {
  return new Promise((resolve, reject) => {
    if (work === 'done') {
      resolve('Go Play Game');
    } else {
      reject(new Error("Don't"));
    }
  });
}

myWork('done').then(function (result) {
  playGame(result).then(function (val) {
    console.log(val);
  });
});

myWork('done').then(playGame).then(console.log);
