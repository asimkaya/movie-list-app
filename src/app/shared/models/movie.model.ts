export interface Movie extends General {
    title?: string;
    director?: string;
    year: Date | string;
    image?: string;
}

interface General {
    id: number;
}
export interface DialogModel {
    dialogTitle: string;
    dialogData: Movie;
}