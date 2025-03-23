import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: NextRequest) {
    // & Data 
        const AIModels =  ['runwayml/stable-diffusion-v1-5','stabilityai/stable-diffusion-xl-base-1.0','kandinsky-community/kandinsky-2-2','black-forest-labs/FLUX.1-dev','ByteDance/InfiniteYou'] ;
        const { prompt } = await req.json();
        const apiKey = process.env.HUGGING_FACE_API_KEY;
        const modelUrl = `https://api-inference.huggingface.co/models/${AIModels[0]}`;
    // & Data 
    if (!prompt) {
        return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }
    if (!apiKey) {
        return NextResponse.json({ error: 'Missing API Key' }, { status: 500 });
    }
    // & HuggingFace Post method 
        try {
            const response = await axios.post(
                modelUrl,
                { inputs: prompt },
                {
                    headers: {
                        Authorization: `Bearer ${apiKey}`,
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    responseType: 'json',
                }
            );
            if (response.data.error) {
                return NextResponse.json({ error: response.data.error }, { status: 500 });
            }
            // * Real Response (status: 200) 
                return NextResponse.json({ imageUrl: response.data }, { status: 200 });
            // * Real Response (status: 200) 
        
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.error('Hugging Face API Error:', error.response?.data || error.message);
            return NextResponse.json({ error: 'Failed to generate image', details: error.response?.data }, { status: 500 });
        }
    // & HuggingFace Post method 
}
