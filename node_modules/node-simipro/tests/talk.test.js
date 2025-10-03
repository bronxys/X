// simitalk.test.js
const axios = require('axios');
const simitalk = require('../src/talk');

jest.mock('axios');

describe('simitalk function', () => {
  test('returns a valid response for a valid request', async () => {
    const mockResponse = {
      data: {
        status: true,
        message: 'Hello!',
        author: 'Test Author'
      }
    };

    axios.get.mockResolvedValue(mockResponse);

    const apikey = '4v3pm1KkchRGTTxAI';
    const ask = 'How are you?';
    const language = 'en';

    const response = await simitalk(apikey, ask, language);

    expect(response).toEqual(mockResponse.data);
  });

  test('handles errors gracefully', async () => {
    const errorMessage = 'An error occurred.';
    const mockErrorResponse = {
      status: 500,
      data: {
        message: errorMessage
      }
    };

    axios.get.mockRejectedValue({ response: mockErrorResponse });

    const apikey = '4v3pm1KkchRGTTxAILoE';
    const ask = 'How are you?';
    const language = 'en';

    const response = await simitalk(apikey, ask, language);

    expect(response).toEqual({
      status: false,
      message: errorMessage,
      author: 'https://facebook.com/anbuinfosec'
    });
  });
});
