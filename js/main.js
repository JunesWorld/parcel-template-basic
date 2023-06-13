console.log('Hello Parcel!')

/**
 * async 키워드를 통해 test라는 비동기 함수를 만들었고, await이라는 무엇인가 기다리는 내용
 * - 하지만 오류
 * - npm i -D @babel/plugin-transform-runtime
 */
async function test() {
  const promise = Promise.resolve(123)
  console.log(await promise)
}
test()