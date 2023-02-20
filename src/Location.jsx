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
                    <div>
                        <p>Gaze up at massive sandstone cliffs of cream, pink, and red that soar into a
                            brilliant blue sky, while enjoying the lush green foliage and emerald pools
                            created by the Virgin River. It’s no wonder that Zion ends up near the top of
                            most lists of greatest National Parks.</p>
                        <p>I can guarantee that the beauty of Zion will make an impression on you!</p>
                        <p>In the park, there is a wide variety of hiking trails you can take, including
                            Angel’s Landing, where you spend a portion of the hike strapped to the trail,
                            and The Narrows, where you hike up a shallow river through a slot canyon.</p>
                    </div>
                </div>
            </section>
            <section>
                <fieldset><legend> <h2>The Villa</h2> </legend></fieldset>
                <div className="text-box">
                    <Suitcase className="symbol"/>
                    <div>
                        <p>The Villa is a 12,000 square foot, three story luxury estate situated on 15
                            acres we have all to ourselves.</p>
                        <p>Things to do at the Villa include:</p>
                        <ul>
                            <li>Two private lakes with kayaks and paddleboards</li>
                            <li>Private beach access to the Virgin River</li>
                            <li>Private theater with luxury seats for 18 people and a luxury floor for everyone else</li>
                            <li>Heated pool and hot tub (heated pool Xtreme)</li>
                            <li>Sauna (if you want to experience hot water without being in a tub)</li>
                            <li>Pickleball courts</li>
                            <li>Outdoor playground</li>
                            <li>A wide range of TVs and tables for boardgames</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section>
                <fieldset><legend> <h2>Other Activities</h2> </legend></fieldset>
                <div className="text-box">
                    <Clipboard className="symbol"/>
                    <div>
                        <p>Outside the Villa, there are plenty of other things to do!</p>
                        <p>Nearby:</p>
                        <ul>
                            <li>ATV rentals</li>
                            <li>Tubing down the Virgin River (lazy river style)</li>
                            <li>Hiking Zion’s hiking trails</li>
                            <li>Hiking up The Narrows</li>
                        </ul>
                        <p>Further:</p>
                        <ul>
                            <li>Bryce Canyon</li>
                            <li>Norther rim of the Grand Canyon</li>
                            <li>Kolb Canyon</li>
                            <li>Hoover Damn</li>
                        </ul>
                    </div>
                </div>
            </section>
        </article>
    )
}

export default Location;