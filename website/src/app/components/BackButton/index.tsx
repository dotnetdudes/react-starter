/**
 *
 * BackButton
 *
 */
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import { useTranslation } from 'react-i18next';

export function BackButton() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const goback = () => navigate(-1);

  return (
    <Button
      variant="text"
      startIcon={<KeyboardBackspaceIcon />}
      onClick={goback}
      sx={{
        alignSelf: 'flex-start',
        marginBottom: '20px',
        color: 'secondary.main',
      }}
    >
      Back
    </Button>
  );
}
