// 1초 대기하고 메시지를 출력하는 함수
function waitOneSecond(msg) {
  return new Promise((resolve, _) => {
    setTimeout(resolve(`${msg}`), 1000);
  });
}

async function countOneToTen() {
  for (let i of [...Array(10).keys()]) {
    // 1초 대기 후에 result에 결과값을 저장
    let result = await waitOneSecond(`${i + 1}초 대기중...`);
    console.log(result);
  } // 0 ~ 9 loop
  console.log('complete');
}

countOneToTen();
