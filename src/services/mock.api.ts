import { gentlemanInfo, gentlemenInfo } from '../interfaces/gentlemanInfo';

export const getGentlemen = async () => {
    const list: gentlemenInfo = [
        {
            id: 1,
            name: 'Bertin Osborne',
            status: 'Alive',
            profession: 'Youtuber',
            twitter: '@osbourne',
            picture: 'bertin.jpg',
            alternativeText: 'Osbourne pointing at you',
            selected: true,
        },
        {
            id: 2,
            name: 'The Farytale',
            status: 'RIP',
            profession: 'Influencer',
            twitter: 'pending',
            picture: 'fary.jpg',
            alternativeText: 'The Fary pointing at you',
            selected: false,
        },
        {
            id: 3,
            name: 'Julius Churchs',
            status: 'Alive',
            profession: 'Java developer',
            twitter: '@julius_churchs',
            picture: 'julio.jpg',
            alternativeText: 'Churchs pointing at you',
            selected: true,
        },
    ];
    return list;
};

export const addGentleman = async (gentData: Partial<gentlemanInfo>) => {
    // let list: gentlemenInfo = [];
    const gentlemanData: gentlemanInfo = {
        id: 0,
        name: gentData.name as string,
        status: gentData.status as string,
        profession: gentData.profession as string,
        twitter: gentData.twitter as string,
        picture: gentData.picture as string,
        alternativeText: gentData.alternativeText as string,
        selected: false,
    };
    return gentlemanData;
};
