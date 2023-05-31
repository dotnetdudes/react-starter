import exampleApi from './exampleApi';

class ExampleApiManager {
  private static instance: ExampleApiManager;
  public api;

  private constructor() {
    this.api = exampleApi.create();
  }

  public static getInstance(): ExampleApiManager {
    if (!ExampleApiManager.instance) {
      ExampleApiManager.instance = new ExampleApiManager();
    }
    return ExampleApiManager.instance;
  }
}

export default ExampleApiManager;
