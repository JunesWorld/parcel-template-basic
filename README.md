# Parcel-template-basic

## Favicon 생성 사이트

[Google] https://www.icoconverter.com/
- 32pixels
- 32bits

## 개념

Web에서 확인하는 HTML파일은 dist안에 있는 파일이다.</br>
이것을 만드는 것이 parcel-bundler다.

## parcel plugin static files copy

Static이라는 폴더를 이 package가 dist 파일로 자동으로 복붙해주는 역할</br>
(favicon.ico 적용시켜주기 위해 사용) 

Terminal
- `npm install -D parcel-plugin-static-files-copy`

package.json : parcel-bundler가 복사해서 dist 파일로 복사해줄 정적 폴더 경로 명시
``` 
"staticFiles": {
  "staticPath": "static"
 }
 ```

## Vender Prefix(공급 업체 접두사)

구형 Browser에서 최신 CSS가 동작하도록 일종의 보험을 들어두는 것</br>
Styles를 보면 중앙선이 그어져 있는 것을 볼 수 있다.
```
display: webkit-box;
display: ms-flexbox;
```
이것은 Vendor사에서 자신의 Browser에서 동작할 수 있도록 만들어 놓은 것이다.</br>
표준 기술이 아니기 때문에 webkit, ms와 같은 접두사를 붙여 사용한다.</br>
구형 Browser에서 동작할 때 사용 <-> 신형 Browser에서는 표준 기술 사용</br>
공급 업체 접두사를 외워서 사용할 수 없기 때문에 자동으로 붙여주는 package 사용</br>
- ```npm i -D postcss autoprefixer --legacy-peer-deps ```
  - ```--legacy-peer-deps ``` : 종속성 충돌 해결
package.json
- browserslist 옵션은 현재 NPM 프로젝트에서 지원할 브라우저의 범위를 명시하는 용도이다. 그 명시를 Autoprefixer Package가 활용하게 된다.
- browerslist를 통해 점유율이 1%인 모든 Browser와 최신 2개의 Version까지는 모두 지원하겠다.
```
"browserslist": [
  "> 1%",
  "last 2 versions"
]
```

## .postcssrc.js에서 rc
rc = Runtime Configuration = 구성 파일</br>
[ESM] : brower에서 동작
- postcssrc 파일은 bundler를 통해 변환하는 용도로 사용 browser에서 동작하는 것이 아니라 NodeJS 환경에서 동작(NodeJS는 COMMONJS 사용)
- import / export 기능
- Node.js에서는 지원하지 X -> CommonJS
- import = require()
- export = module.exports

## Postcss / Autoprefixer Version 충돌 해결하기

Autoprefixer Version 9로 변경

Terminal
```bash
npm i -D autoprefixer@9
```

## 공급 업체 접두사가 잘 적용되었는지 확인 방법

scss파일에 ```display: flex;``` 적용
