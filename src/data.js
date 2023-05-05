import * as images from './assets/index';

const Data = [
    {
        id: 1,
        title: 'Life lessons with Katie Zaferes',
        description: '',
        price: 136,
        coverImg: images.katie,
        state: {
            rating: '5.0',
            reviewCount: 6
        },
        location: 'SOLD OUT',
        openSpots: 0,
        country: 'USA',
    },
    {
        id: 2,
        title: 'Learn wedding photography',
        description: '',
        price: 125,
        coverImg: images.weddingPhoto,
        state: {
            rating: '5.0',
            reviewCount: 30
        },
        location: 'ONLINE',
        openSpots: 27,
        country: 'USA',
    },
    {
        id: 3,
        title: 'Group Mountain Biking',
        description: '',
        price: 50,
        coverImg: images.mountainBike,
        state: {
            rating: '4.8',
            reviewCount: 2
        },
        location: 'ONLINE',
        openSpots: 3,
        country: 'USA',
    }
]

export default Data;