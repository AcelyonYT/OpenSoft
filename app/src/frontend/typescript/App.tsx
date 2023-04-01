/**
 * Creates the Application and renders
 */
export default class App {
  constructor() {}

  /**
   * Renders the webpage
   * @returns The html website
   */
  render() {
    return (
      <div>
        <h1>{ import.meta.env.VITE_HELLO_WORLD }</h1>
      </div>
    );
  }
}