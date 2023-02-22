import { Variants } from 'framer-motion';

export const paginationMotion: Variants = {
  rest: {
    border: 'rgba(56,163,157, 0) 0.1rem solid',
    color: '#272727',
    background: '#fff',
    // fontWeight: 'normal',
    type: 'spring',
  },
  active: {
    border: 'rgba(56,163,157, 1) 0.1rem solid',
    color: '#ffffff',
    background: '#38a39d',

    // fontWeight: 'bold',
    type: 'spring',
  },
};
