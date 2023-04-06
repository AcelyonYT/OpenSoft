// imports
import "../../scss-css/components/maintag.css";

/**
 * Creates the main tag that will hold each page information
 * Will need to be changed based on routes
 */
export default class MainTag {
    constructor() {}

    /**
     * Builds the main tag elements
     * @returns The html of the main tag
     */
    render() {
        return(
            <main className="main"></main>
        );
    }
}