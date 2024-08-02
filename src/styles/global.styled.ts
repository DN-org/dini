import { createGlobalStyle } from 'styled-components';

const TextStyles = {
  fontFamily: 'Play, sans-serif',
  fontWeight: '600',
  color: '#fff',
  margin: '0',
  wordSpacing: '5px',
  letterSpacing: '2px'
};

export const GlobalStyles = createGlobalStyle({
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    
  },
  '*::before': {
    boxSizing: 'border-box',
  },
  '*::after': {
    boxSizing: 'border-box',
  },
  body: {
    marginTop: '15vh',
    fontFamily: "'Arial', sans-serif",
    backgroundColor: '#1F1F1F',
    color: 'white',
    lineHeight: 1.6,
  },
  h1: { ...TextStyles, fontSize: '45px', lineHeight: '40px' },
  h2: { ...TextStyles, fontSize: '32px', lineHeight: '40px' },
  h3: { ...TextStyles, fontSize: '24px', lineHeight: '32px' },
  h4: { ...TextStyles, fontSize: '16px', lineHeight: '20px', opacity: '0.9' },
  p: {
    ...TextStyles,
    fontSize: '16px',
    lineHeight: '20px',
    fontWeight: '400',
    opacity: '0.7',
  },
});
