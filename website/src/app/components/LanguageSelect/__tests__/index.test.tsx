import { LanguageSelect } from '..';
import { render } from 'app/utils/test-utils';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

describe('<LanguageSelect  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<LanguageSelect />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
