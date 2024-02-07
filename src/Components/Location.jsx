import {ReactComponent as Hiker} from "../SVGs/hiker.svg";
import {ReactComponent as Mansion} from "../SVGs/mansion.svg";
import {ReactComponent as Zion} from "../SVGs/zion.svg";
import {ReactComponent as Dino5} from "../SVGs/dino-4.svg";
import {ReactComponent as Dino6} from "../SVGs/dino-5.svg";
import {ReactComponent as Dino7} from "../SVGs/dino-6.svg";

export default function Location(state) {
    return (
        <article className="location">
            <h1>The Location</h1>
            <section>
                <fieldset><legend> <h2>Zion National Park</h2> </legend></fieldset>
                <div className="text-box">
                    {state.SVGTheme ? (
                        <Dino5 className="symbol" aria-label={"Image of dinosaur"}/>
                    ) : (
                        <Zion className="symbol" aria-label={"Image of Zion"}/>
                    )}
                    <div>
                        <p>Zion National Park is a stunning natural wonder located in southwestern Utah,
                            covering an area of over 229 square miles. The park is renowned for its breathtaking
                            red rock canyons, towering cliffs, and dramatic landscapes.</p>
                        <p>The park is home to a diverse range of ecosystems, from high-altitude forests to arid
                            deserts, and boasts a wealth of wildlife, including bighorn sheep, mule deer, and coyotes.
                            The park's centerpiece is Zion Canyon, which is up to half a mile deep and over 15 miles
                            long. The canyon was carved by the Virgin River, which flows through the park, creating
                            stunning rock formations, waterfalls, and hanging gardens.</p>
                    </div>
                </div>
            </section>
            <section>
                <fieldset><legend> <h2>The Villa</h2> </legend></fieldset>
                <div className="text-box">
                    {state.SVGTheme ? (
                        <Dino6 className="symbol" aria-label={"Image of dinosaur"}/>
                    ) : (
                        <Mansion className="symbol" aria-label={"Image of mansion"}/>
                    )}
                    <div>
                        <p>The Zion Red Rock Villa is a 12,000 square foot, three story luxury estate situated on 15
                            private acres we will have all to ourselves!</p>
                        <p className={"not-indented"}>Things to do at the Villa include, but are not limited to:</p>
                        <ul>
                            <li> Two private lakes with kayaks and stand-up paddle boards</li>
                            <li> Private beach access to the Virgin River</li>
                            <li> Private theater with luxury seats for 18 people and a luxury floor for everyone else</li>
                            <li> Heated pool and hot tub (heated pool Xtreme)</li>
                            <li> Sauna (if you want to experience hot water without being in a tub)</li>
                            <li> Pickleball courts (very en vogue with adults right now)</li>
                            <li> Outdoor playground (always en vogue with kids)</li>
                            <li> Many tables for boardgames</li>
                            <li> A piano, if you want to show people you know how to play a piano</li>
                            <li> Many TVs</li>
                        </ul>
                        <p>For more information, please check out &nbsp;
                            <a target="_blank" href="https://www.zionredrock.com/zionredrockvilla">
                                their website</a>.</p>
                    </div>
                </div>
            </section>
            <section>
                <fieldset><legend> <h2>Other Activities</h2> </legend></fieldset>
                <div className="text-box">
                    {state.SVGTheme ? (
                        <Dino7 className="symbol" aria-label={"Image of dinosaur"}/>
                    ) : (
                        <Hiker className="symbol" aria-label={"Image of hiker"}/>
                    )}
                    <div>
                        <p>In addition to things to do at the Villa itself, there's a host of things you can do in the
                        immediate area, as well as further afield.</p>
                        <p className={"not-indented"}>Things to do in the area:</p>
                        <ul>
                            <li> ATV rentals</li>
                            <li> Tubing down the Virgin River (lazy river style)</li>
                            <li> Hiking Zion (we would especially suggest The Narrows)</li>
                            <li> Horseback riding</li>
                        </ul>
                        <p className={"not-indented"}>Locations further afield:</p>
                        <ul>
                            <li> Bryce Canyon</li>
                            <li> Norther rim of the Grand Canyon</li>
                            <li> Kolb Canyon</li>
                            <li> Hoover Dam</li>
                            <li> The town where "The Hangover" was filmed</li>
                        </ul>
                    </div>
                </div>
            </section>
        </article>
    )
}