import { PostType } from 'app/services/example/types';

/* --- STATE --- */
export interface ExampleFeatureState {
  posts: Array<PostType>;
  loading: boolean;
  error: boolean;
  errorMessage: string | null;
}
