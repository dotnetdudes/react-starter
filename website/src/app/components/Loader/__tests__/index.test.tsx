import { Loader } from '..';
import { render } from 'app/utils/test-utils';

describe('<Loader  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Loader />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
  it('should render a <div> tag', () => {
    const loadingIndicator = render(<Loader />);
    expect(loadingIndicator.container.querySelector('div')).toBeInTheDocument();
  });
  it('should have a class attribute', () => {
    const loadingIndicator = render(<Loader />);
    expect(loadingIndicator.container.querySelector('div')).toHaveAttribute(
      'class',
    );
  });
});
