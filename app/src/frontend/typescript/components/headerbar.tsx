// imports
import "../../scss-css/components/headerbar.css";

/**
 * Creates the header bar component
 */
export default class HeaderBar {
    constructor(){}

    /**
     * Builds the header bar html
     * @returns the html to the header bar
     */
    render(){
        return(
            <header className="background">
                <div className="headerContainer">
                    <h2 className="headerTitle">OpenSoft</h2>
                </div>
                <div className="buttonContainer">
                    <a className="headerButton background">X</a>
                    <a className="headerButton background">_</a>
                </div>
            </header>
        );
    }
}