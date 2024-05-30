import { lazy } from 'react';

export const ResultPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ResultPage')), 1500)
}));
