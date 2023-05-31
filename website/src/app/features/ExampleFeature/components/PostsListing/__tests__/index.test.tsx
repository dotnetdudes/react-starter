import { PostsListing } from '..';
import { render } from 'app/utils/test-utils';
import * as React from 'react';

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

describe('<PostsListing  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<PostsListing posts={[]} />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
