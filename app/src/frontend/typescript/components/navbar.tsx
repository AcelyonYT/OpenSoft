// imports
import "../../scss-css/components/navbar.css";

/**
 * Creates the Navigation bar component on the site
 */
export default class NavBar {
    constructor(){}

    /**
     * Builds the nav bar
     * @returns the html of the nav bar
     */
    render(){
        return(
            <nav className="nav">
                <ul>
                    <li>Home</li>
                </ul>
            </nav>
        );
    }
}