import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';

export const HamburgerMenuButtonStyled = styled(MenuIcon)(() => ({
  '&&': {
    width: '50px',
    height: 'auto',
    color: '#fff'
  },
}));
