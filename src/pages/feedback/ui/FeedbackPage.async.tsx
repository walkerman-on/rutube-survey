import { lazy } from 'react';

export const FeedbackPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    setTimeout(() => resolve(import('./FeedbackPage')), 1500)
}));
