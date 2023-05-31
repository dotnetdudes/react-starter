import { ExampleFeature } from '..';
import * as React from 'react';
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

describe('<ExampleFeature  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<ExampleFeature />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
