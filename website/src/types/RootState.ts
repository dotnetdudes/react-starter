import { ThemeState } from 'app/components/ThemeProvider/slice/types';
import { ExampleFeatureState } from 'app/features/ExampleFeature/slice/types';
import { TestState } from 'app/features/Test/slice/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  theme?: ThemeState;
  exampleFeature?: ExampleFeatureState;
  test?: TestState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
