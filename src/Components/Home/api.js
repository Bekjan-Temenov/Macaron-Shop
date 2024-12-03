import { apiRoot } from '../../app/api';

export const api = {
    product: (data) => apiRoot.get('/products', data),
};