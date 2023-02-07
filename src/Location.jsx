import {ReactComponent as SignPost} from "./images/signs-post-solid.svg";
import {ReactComponent as Suitcase} from "./images/suitcase-solid.svg";
import {ReactComponent as Clipboard} from "./images/clipboard-list-solid.svg";
import {ReactComponent as Question} from "./images/circle-question-solid.svg";
import {ReactComponent as Gift} from "./images/gift-solid.svg";

const Location = () => {
    return (
        <article className="location">
            <h1>The Location</h1>
            <section>
                <fieldset><legend> <h2>Zion National Park</h2> </legend></fieldset>
                <div className="text-box">
                    <SignPost className="symbol"/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </section>
            <section>
                <fieldset><legend> <h2>The Villa</h2> </legend></fieldset>
                <div className="text-box">
                    <Suitcase className="symbol"/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </section>
            <section>
                <fieldset><legend> <h2>Other Activities</h2> </legend></fieldset>
                <div className="text-box">
                    <Clipboard className="symbol"/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </section>
        </article>
    )
}

export default Location;