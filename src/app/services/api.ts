import axios from 'axios';

// * ################ AI API  
    export const generateImage = async (prompt: string) => {
        try {
            const response = await axios.post('/api/generate-image', { prompt });
            console.log(response) 
            return response.data.imageUrl;
        
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                console.error('Axios error:', error.response?.data?.error || error.message);
            } else if (error instanceof Error) {
                console.error('Unexpected error:', error.message);
            } else {
                console.error('An unknown error occurred:', error);
            }
            return null;
        }
    };
// * ################ AI API  
// * ################ Translation API  
export const translate = async (InputText: string, from: string, to: string) => {
    const TRANSLATION_API_URL = 'https://libretranslate.com/translate';
    const API_KEY = 'your_api_key_here';
    try {
        const response = await axios.post(TRANSLATION_API_URL, {
            q: InputText,
            source: from,
            target: to,
            format: 'text',
            api_key: API_KEY
        });
        return response.data; 
        
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            console.error('Axios error:', error.response?.data?.error || error.message);
        } else if (error instanceof Error) {
            console.error('Unexpected error:', error.message);
        } else {
            console.error('An unknown error occurred:', error);
        }
        return { error: 'Translation failed' }; 
    }
};

// * ################ Translation API  