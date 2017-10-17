#### Installation
```js
npm install regex-util2 -S
```
#### Usage
Regex util for convert slash to back-slash or back-slash to slash. Examples:
```js
const regexUtil = require('regex-util2');
const rawStr = "a\\b\\c";
const rawStr2 = "a/b/c/d";
console.log(regexUtil.back2slash(rawStr));
//=>"a/b/c"
console.log(regexUtil.slash2back(rawStr2));
//=>"a\b\c"
```
#### License

##### MIT
