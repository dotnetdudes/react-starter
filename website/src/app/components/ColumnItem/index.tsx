/**
 *
 * ColumnItem
 *
 */
import { styled } from '@mui/material/styles';

const ColumnItem = styled('div')(({ theme }) => ({
  padding: theme.spacing(),
  [theme.breakpoints.down('sm')]: {
    // width: '100%',
    marginLeft: '0.1rem',
    marginRight: '0.1rem',
  },
  [theme.breakpoints.up('sm')]: {
    // width: '100%',
    marginLeft: '2rem',
    marginRight: '2rem',
  },
}));

export default ColumnItem;
