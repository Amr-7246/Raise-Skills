import { StaticImageData } from "next/image";

export interface MusicItem {
    id: string;
    title: string;
    description: string;
    image: string | StaticImageData ;
    audio: string;
}
