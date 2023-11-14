import { NotFoundPage } from '../index';
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

jest.mock('react-helmet-async', () => {
  const React = require('react');
  const plugin = jest.requireActual('react-helmet-async');
  const mockHelmet = ({ children, ...props }) =>
    React.createElement(
      'div',
      {
        ...props,
        className: 'mock-helmet',
      },
      children,
    );
  return {
    ...plugin,
    Helmet: jest.fn().mockImplementation(mockHelmet),
  };
});

describe('<NotFoundPage  />', () => {
  it('should match snapshot', () => {
    const notFound = render(<NotFoundPage />);
    expect(notFound.container.firstChild).toMatchSnapshot();
  });

  it('should render a <div> tag', () => {
    const notFound = render(<NotFoundPage />);
    expect(notFound.container.querySelector('div')).toBeInTheDocument();
  });
});
