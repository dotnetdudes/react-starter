export const MuiButton = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 0,
      },
      contained: ({ ownerState }) => ({
        ...(ownerState.disabled
          ? {
              border: 'none',
            }
          : {
              backgroundColor: '#E51937',
              border: '1px solid #E51937',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#fff',
                boxShadow: 'none',
                border: '1px solid #121212',
                color: '#121212',
              },
            }),
      }),
      outlined: {
        '&:hover': {
          backgroundColor: '#121212',
          boxShadow: 'none',
          border: '1px solid #fff',
          color: '#fff',
        },
      },
      text: {
        '&:hover': {
          backgroundColor: '#fff',
        },
      },
      textSecondary: {
        color: '#80868B',
        textDecoration: 'underline',
        '&:hover': {
          backgroundColor: '#fff',
          textDecoration: 'underline',
          boxShadow: '0',
          color: '#E51937',
        },
      },
    },
  },
};
