/**
 * 작성하는 모든 JS 파일은 ES5 형태로 browser에서 동작
 * package.json
 * - browserslist 작성
 */
module.exports = {
  presets: ['@babel/preset-env'],
  Plugins: [
    ['babel/plugin-transform-runtime']
  ]
}