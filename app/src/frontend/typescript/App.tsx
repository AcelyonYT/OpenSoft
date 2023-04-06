// imports
import NavBar from "./components/navbar";
import HeaderBar from "./components/headerbar";
import MainTag from "./components/mainelement";

// assign components
const Nav = new NavBar();
const Header = new HeaderBar();
const Main = new MainTag();

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
      <>
        <Header.render />
        <Nav.render />
        <Main.render />
      </>
    );
  }
}