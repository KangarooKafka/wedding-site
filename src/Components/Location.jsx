import {ReactComponent as SignPost} from "../images/signs-post-solid.svg";
import {ReactComponent as Suitcase} from "../images/suitcase-solid.svg";
import {ReactComponent as Clipboard} from "../images/clipboard-list-solid.svg";

export default function Location() {
    return (
        <article className="location">
            <h1>The Location</h1>
            <section>
                <fieldset><legend> <h2>Zion National Park</h2> </legend></fieldset>
                <div className="text-box">
                    <SignPost className="symbol"/>
                    <div>
                        <p>Zion National Park is a stunning natural wonder located in southwestern Utah,
                            covering an area of over 229 square miles. The park is renowned for its breathtaking
                            red rock canyons, towering cliffs, and dramatic landscapes.</p>
                        <p>The park is home to a diverse range of ecosystems, from high-altitude forests to arid
                            deserts, and boasts a wealth of wildlife, including bighorn sheep, mule deer, and coyotes.
                            The park's centerpiece is Zion Canyon, which is up to half a mile deep and over 15 miles
                            long. The canyon was carved by the Virgin River, which flows through the park, creating
                            stunning rock formations, waterfalls, and hanging gardens.</p>
                        <p>I had ChatGPT write that. But seriously though, the place is gorgeous!</p>
                    </div>
                </div>
            </section>
            <section>
                <fieldset><legend> <h2>The Villa</h2> </legend></fieldset>
                <div className="text-box">
                    <Suitcase className="symbol"/>
                    <div>
                        <p>The Zion Red Rock Villa is a 12,000 square foot, three story luxury estate situated on 15
                            private acres we will have all to ourselves!</p>
                        <p className={"not-indented"}>Things to do at the Villa include, but are not limited to:</p>
                        <ul>
                            <li>Two private lakes with kayaks and stand-up paddle boards</li>
                            <li>Private beach access to the Virgin River</li>
                            <li>Private theater with luxury seats for 18 people and a luxury floor for everyone else</li>
                            <li>Heated pool and hot tub (heated pool Xtreme)</li>
                            <li>Sauna (if you want to experience hot water without being in a tub)</li>
                            <li>Pickle ball courts (very en vogue with adults right now)</li>
                            <li>Outdoor playground (always en vogue with kids)</li>
                            <li>Many TVs</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section>
                <fieldset><legend> <h2>Other Activities</h2> </legend></fieldset>
                <div className="text-box">
                    <Clipboard className="symbol"/>
                    <div>
                        <p>In addition to things to do at the Villa itself, there's a host of things you can do in the
                        immediate area, as well as further afield.</p>
                        <p className={"not-indented"}>Things to do in the area:</p>
                        <ul>
                            <li>ATV rentals</li>
                            <li>Tubing down the Virgin River (lazy river style)</li>
                            <li>Hiking Zion (we would especially suggest The Narrows)</li>
                            <li>Horseback riding</li>
                        </ul>
                        <p className={"not-indented"}>Locations further afield:</p>
                        <ul>
                            <li>Bryce Canyon</li>
                            <li>Norther rim of the Grand Canyon</li>
                            <li>Kolb Canyon</li>
                            <li>Hoover Dam</li>
                            <li>The town where "The Hangover" was filmed</li>
                        </ul>
                    </div>
                </div>
            </section>
        </article>
    )
}