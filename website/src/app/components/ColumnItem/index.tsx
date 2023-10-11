/**
 *
 * ColumnItem
 *
 */
import { styled } from '@mui/material/styles';

const ColumnItem = styled('div')(({ theme }) => ({
  padding: theme.spacing(),
  [theme.breakpoints.down('sm')]: {
    marginLeft: '0.1rem',
    marginRight: '0.1rem',
  },
  [theme.breakpoints.up('sm')]: {
    marginLeft: '2rem',
    marginRight: '2rem',
  },
}));

export default ColumnItem;
