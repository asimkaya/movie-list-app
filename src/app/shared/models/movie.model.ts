export interface Movie extends General {
    title: string;
    director: string;
    year: Date | string;
    image: string;
    description?: string;
    type: string;
}

interface General {
    id: number;
}
