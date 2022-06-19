export interface gentlemanInfo {
    id: number;
    name: string;
    status: string;
    profession: string;
    twitter: string;
    picture: string;
    alternativeText: string;
    selected: boolean;
}

export type gentlemenInfo = Array<gentlemanInfo>;
