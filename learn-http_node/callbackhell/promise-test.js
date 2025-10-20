// Promise 객체는 자바스크립트에서 비동기 실행을 동기화하는 구문으로 사용
// 약속 = (이행, 거절, 대기) : 3가지 상태를 가질 수 있는 객체
// 이 코드는 미래의 어느 시점에 실행, 3가지 상태를 가짐

const DB = [];

function saveDB(user) {
  const oldDBSize = DB.length;
  DB.push(user);
  console.log(`save ${user.name} to DB`);
  return new Promise((resolve, reject) => {
    if (DB.length > oldDBSize) {
      resolve(user);
    } else {
      reject(new Error('saveDB fail!'));
    }
  });
}

function sendEmail(user) {
  console.log(`email to ${user.email}`);
  return new Promise((resolve) => {
    resolve(user);
  });
}

function getResult(user) {
  return new Promise((resolve, reject) => {
    resolve(`success register ${user.name}`);
  });
}

function registerByPromise(user) {
  const result = saveDB(user).then(sendEmail).then(getResult);
  console.log(result);
  return result;
}

const myUser = { email: 'shinsegae@test.com', name: '신세계' };

const result = registerByPromise(myUser);
result.then(console.log);
