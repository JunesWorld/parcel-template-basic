# Parcel-template-basic

## Favicon 생성 사이트

[Google] https://www.icoconverter.com/
- 32pixels
- 32bits

## 개념

Web에서 확인하는 HTML파일은 dist안에 있는 파일이다.</br>
이것을 만드는 것이 parcel-bundler다.

## parcel plugin static files copy

Static이라는 폴더를 이 package가 dist 파일로 복붙해주는 역할</br>
(favicon.ico 적용시켜주기 위해 사용) 

Terminal
- `npm i -D parcel-plugin-static-files-co`

package.json
``` 
"staticFiles": {
  "staticPath": "static"
 }
 ```
