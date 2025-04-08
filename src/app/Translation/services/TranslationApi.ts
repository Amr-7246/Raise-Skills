// ? We go to create a API function and then . . . 
import axios from 'axios';

export const translateText = async (text: string, fromLang : string, toLang : string ) => {
    try {
        const response = await axios.post('https://translate.astian.org/translate', {
        q: text,
        source: fromLang,
        target: toLang,
        format: 'text',
    }, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return response.data.translatedText;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }catch (error: any) {
        console.error('Translation API error:', error?.response?.data || error.message);
        alert('Translation failed. Try again or switch the server 🧊');
        throw new Error('Failed to translate text');
    }
};
