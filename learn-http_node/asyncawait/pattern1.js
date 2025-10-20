function myWork(work) {
  return new Promise((resolve, reject) => {
    if (work === 'done') {
      resolve('roll game!');
    } else {
      reject(new Error('no game!'));
    }
  });
}

myWork('done').then(
  function (value) {
    console.log(value);
  },
  function (err) {
    console.log(err);
  }
); // X

myWork('done')
  .then(function (value) {
    console.log(value);
  })
  .catch(function (err) {
    console.error(err);
  }); // O
