export type Skill = {
    id: number;
    title: string;
    icon: string;
    description: string;
};

export type Project = {
    id: number;
    title: string;
    img: string;
    skills: string[];
    author: string;
    link: string;
};

export type Video = {
    id: number;
    title: string;
    src: string;
    img: string;
};
