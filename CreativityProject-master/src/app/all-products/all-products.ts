import { Photos } from '../photos';
import { all } from '../all-products//all';
import { people} from '../all-products//people';
import { places } from '../all-products//places';
import { things } from '../all-products//things';

export const products: Photos[] = [
];

all.forEach(addProduct);
people.forEach(addProduct);
places.forEach(addProduct);
things.forEach(addProduct);

function addProduct(photos: Photos): void {
    products.push(photos);
}

