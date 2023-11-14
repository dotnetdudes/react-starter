import { Header } from '../index';
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

describe('<Header  />', () => {
  it('should match snapshot', () => {
    const header = render(<Header />);
    expect(header.container.firstChild).toMatchSnapshot();
  });

  it('should render a <div> tag', () => {
    const header = render(<Header />);
    expect(header.container.querySelector('div')).toBeInTheDocument();
  });
});