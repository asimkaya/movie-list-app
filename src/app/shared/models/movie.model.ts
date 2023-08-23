export interface Movie extends General {
    title: string;
    director: string;
    year: Date | string;
    image: string;
    description?: string;
}

interface General {
    id: number;
}