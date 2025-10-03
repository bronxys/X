const axios = require('axios');

async function simiteach(ask, ans, language) {
    try {
        const response = await axios.post(
        'https://simi.anbuinfosec.live/api/teach',
        {
            'ask': ask,
            'ans': ans,
            'lc': language
        },
        {
            headers: {
            'sec-ch-ua-platform': '"Android"',
            'Referer': 'https://simi.anbuinfosec.live/teach',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Mobile Safari/537.36',
            'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
            'Content-Type': 'application/json',
            'sec-ch-ua-mobile': '?1'
            }
        }
        );
        return response.data;
    } catch (error) {
        return { success: false, message: 'An error occurred.', author: 'https://facebook.com/anbuinfosec' };
    }
}

module.exports = simiteach;
