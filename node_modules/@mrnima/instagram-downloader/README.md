<h2 align="center"> INSTAGRAM DOWNLOADER API </h2></br>
<div id="logo" align= "center">       
</div>

<p align = "center"> An unofficial instagram downloader scraper for download videos and images using instagram link.</p>
</br>

## install

```bash
 npm install @mrnima/instagram-downloader
```
or
```bash
 yarn add @mrnima/instagram-downloader
```



## Require

```javascript
const { instagramDownload } = require("@mrnima/instagram-downloader");
```

## Example 
*Download tiktok video link.*
```javascript
async function TEST(){
    const result = await instagramDownload("https://www.instagram.com/p/C2Uo9r9BLnF/?igsh=MWhwZjQ3ZjR5bXdqbw==");
    console.log(result)
}
TEST()
```

## Results 
```json
{
    "creator": "MR NIMA",
    "status": true,
    "result": [
      {
        "type": "image",
        "link": "https://tmpfiles.org/dl/14422568/mrnima-temporary-uploader.jpg"
      }
    ]
  }
  
```
</a>

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

## Feedback

If you have any feedback, please reach out to us at queenelisa.bot@gmail.com


## Authors

- [@darkmakerofc](https://www.github.com/darkmakerofc)
- [@mrnima](https://www.github.com/mr-nima-x)
