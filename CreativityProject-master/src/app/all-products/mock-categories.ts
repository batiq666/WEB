import { Category } from '../category';
import { all } from './all';
import { people} from './people';
import { places } from './places';
import { things } from './things';

export const categories: Category[] = [
    {
        id: 1,
        name: 'All',
        img: '../../assets/img/07.jpg',
    },
    {
        id: 2,
        name: 'People',
        img: '../../assets/img/01.jpg',
    },
    {
        id: 3,
        name: 'Places',
        img: '../../assets/img/05.jpg',

    },
    {
        id: 4,
        name: 'Things',
        img: '../../assets/img/10.jpg',
    }
];
