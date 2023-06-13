/** 
 * [ESM] : brower에서 동작
 * - postcssrc 파일은 bundler를 통해 변환하는 용도로 사용 browser에서 동작하는 것이 아니라 NodeJS 환경에서 동작(NodeJS는 COMMONJS 사용)
 * - import / export 기능
 * - Node.js에서는 지원하지 X -> CommonJS
 * - import = require()
 * - export = module.exports
 */

// import autoprefixer from 'autoprefixer'
// autoprefixer라는 package를 autoprefixer라는 변수에 담는다
// const autoprefixer = require('autoprefixer')

// export {
//   plugins: [
//     autoprefixer
//   ]
// }
// 객체 데이터 내보내기
// plugins라는 속성 부분에 배열로 넣어주기
// module.exports = {
//   plugins: [
//     autoprefixer
//   ]
// }

// 간소화 하기
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}