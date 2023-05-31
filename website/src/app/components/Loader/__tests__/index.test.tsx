import { Loader } from '..';
import { render } from 'app/utils/test-utils';

/* jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
})); */

describe('<Loader  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Loader />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
