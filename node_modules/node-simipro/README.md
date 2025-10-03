# node-simipro
<p align="center">
  <img alt="@node-simipro" style="width: 150px;" src="/assets/logo.png">
</p>
<div align="center">
  <h3>node-simipro</h3>
  <p>Unofficial <a href="https://simi.anbuinfosec.live">SimSimi</a> API <a href="https://nodejs.org">NodeJS</a><br>It's Free!</p>
</div>
<div align="center">
  <a href="https://www.npmjs.com/package/node-simipro">NPM</a> | <a href="https://github.com/anbuinfosec/node-simipro">Repository</a> | <a href="https://facebook.com/anbuinfosec">Report Bug</a> | <a href="https://github.com/anbuinfosec/node-simipro/issues">Issues</a>
</div>

## Installation 📑
* Install Modules
  ```sh
  npm i node-simipro
  ```
 
 ## How to Use 🔭
 * With Asynchronous
   * ESModule
    ```js
    import simi from 'node-simipro';
  
    async function talk() {
      const res = await simi.simitalk ("bro what hepen?", "bn");
      console.log (res)
    }

    async function teach() {
      const res = await simi.simiteach ("bro what hepen?", "ntg hepen bruh!", "bn");
      console.log (res)
    }

    talk ()
    teach ()
    ```
   * CommonJS
    ```js
    const simi = require('node-simipro');
   
    async function talk() {
      const res = await simi.simitalk ("bro what hepen?", "bn");
      console.log (res)
    }

    async function teach() {
      const res = await simi.simiteach ("bro what hepen?", "ntg hepen bruh!", "bn");
      console.log (res)
    }

    talk ()
    teach ()
    ```
  
 * Without Asynchronous
   * ESModule
    ```js
    import simitalk from 'node-simipro';

    function talk() {
      simi.simitalk ("bro what hepen?", "bn").then((response) => {
        console.log(response);
      });
    }

    function teach() {
      simi.simiteach ("bro what hepen?", "ntg hepen bruh!", "bn").then((response) => {
        console.log(response);
      });
    }

    talk ()
    teach ()
    ```
   * CommonJS
    ```js
    const simitalk = require('node-simipro');

    function talk() {
      simi.simitalk ("bro what hepen?", "bn").then((response) => {
        console.log(response);
      });
    }

    function teach() {
      simi.simiteach ("bro what hepen?", "ntg hepen bruh!", "bn").then((response) => {
        console.log(response);
      });
    }

    talk ()
    teach ()
    ```
    
## Response 📨
* Example Response simitalk
  ```json
  {
    "success":true,
    "message":"bye",
    "isUnknownResponse":false
  }
  ```
* Example response simiteach
  ```json
  {
      "success": true,
      "message": "You taught the answer to \"hi\".\nNumber of answers: 99+"
  }
  ```

## Built With 🛠
* [Axios](https://axios-http.com/docs/intro)

## Error or Bug 🐞
* [Facebook](https://facebook.com/anbuinfosec)
* [YouTube](https://www.youtube.com/akxvau)
* [Instagram](https://www.instagram.com/anbuinfosec)
* [Issues](https://github.com/anbuinfosec/node-simipro/issues)

## License 📜
* [License](https://github.com/anbuinfosec/node-simipro/blob/main/LICENSE)
