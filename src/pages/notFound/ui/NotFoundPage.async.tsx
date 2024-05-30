import { lazy } from 'react';

export const NotFoundPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    setTimeout(() => resolve(import('./NotFoundPage')), 1500)
}));
