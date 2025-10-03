const fs = require("fs");
const axios = require("axios");

const mrnimaTemporaryUploader = require("./index");

async function UPLOAD_TEST() {
    var buffer = fs.readFileSync("./img.png");
    const result = await mrnimaTemporaryUploader.upload(buffer);
    console.log(result)
}
//UPLOAD_TEST()


async function UPLOAD_TEST_URL() {
    var response = await axios({
        method: "get",
        url: "https://tmpfiles.org/dl/13992108/mrnima-temporary-uploader.jpg",
        responseType: "arraybuffer"
    })
    const buffer = response.data;
    const result = await mrnimaTemporaryUploader.upload(buffer);
    console.log(result)
}
UPLOAD_TEST_URL()
