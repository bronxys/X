# mrnima-temporary-uploader
#### All uploaded files are automatically deleted after 60 minutes.

### install
```
npm i mrnima-temporary-uploader
```
### Require
```
const mrnimaTemporaryUploader = require("mrnima-temporary-uploader");
```
### Example for upload using file path.
```
// use file buffer for upload files.
const fs = require("fs");

async function UPLOAD_TEST() {
    var buffer = fs.readFileSync("./img.png");
    const result = await mrnimaTemporaryUploader.upload(buffer);
    console.log(result)
}
UPLOAD_TEST()

```
### Example for upload using file link.
```
async function UPLOAD_TEST_URL() {
    var response = await axios({
        method: "get",
        url: "https://tmpfiles.org/dl/13992108/mrnima-temporary-uploader.jpg", // file direct link
        responseType: "arraybuffer"
    })
    const buffer = response.data;
    const result = await mrnimaTemporaryUploader.upload(buffer);
    console.log(result)
}
UPLOAD_TEST_URL()
```
### Upload result.
```
{
  "creator": "MR NIMA",
  "status": true,
  "result": "https://tmpfiles.org/dl/13992667/mrnima-temporary-uploader.jpg"
}
```
</br>

## Author: [MR NIMA](https://github.com/DarkMakerofc/)
## Credits: [TEMPORARY FILE HOSTING](https://tmpfiles.org/api)
