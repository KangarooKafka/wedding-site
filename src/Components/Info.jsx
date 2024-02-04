import {ReactComponent as Question} from "../SVGs/question.svg";
import {ReactComponent as Gift} from "../SVGs/gift.svg";
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import {ReactComponent as Itinerary} from "../SVGs/itinerary.svg";
import {ReactComponent as Destination} from "../SVGs/destination.svg";
import {ReactComponent as Luggage} from "../SVGs/luggage.svg";
import {ReactComponent as Dino8} from "../SVGs/dino-7.svg";
import {ReactComponent as Dino9} from "../SVGs/dino-8.svg";
import {ReactComponent as Dino10} from "../SVGs/dino-9.svg";
import {ReactComponent as Dino11} from "../SVGs/dino-10.svg";
import {ReactComponent as Dino12} from "../SVGs/dino-11.svg";

export default function Info(state) {

    return (
        <article className="info">
            <h1>Info</h1>
            <section>
                <fieldset><legend> <h2>Itinerary</h2> </legend></fieldset>
                <div className="text-box">
                    {state.SVGTheme ? (
                        <Dino8 className="symbol" aria-label={"Image of dinosaur"}/>
                    ) : (
                        <Itinerary className="symbol" aria-label={"Image of list and clock"}/>
                    )}
                    <div>
                        <p>We'll have more details added here soon, but this is a general overview.</p>
                        <dl>
                            <dt>Thursday, May 30th</dt>
                            <dd><ul>
                                <li> 5:00 – Check-in time at the Villa, guests can start arriving</li>
                            </ul></dd>
                            <dt>Friday, May 31st</dt>
                            <dd><ul>
                                <li> All Day – Free Play</li>
                            </ul></dd>
                            <dt>Saturday, June 1st</dt>
                            <dd><ul>
                                <li> Wedding ceremony</li>
                            </ul></dd>
                            <dt>Sunday, June 2nd</dt>
                            <dd><ul>
                                <li> TEST!!!</li>
                            </ul></dd>
                            <dt>Monday, June 3rd</dt>
                            <dd><ul>
                                <li> 10:00 AM Check-out</li>
                            </ul></dd>
                        </dl>
                    </div>
                </div>
            </section>
            <section>
                <fieldset><legend> <h2>How to Get There</h2> </legend></fieldset>
                <div className="text-box">
                    {state.SVGTheme ? (
                        <Dino9 className="symbol" aria-label={"Image of dinosaur"}/>
                    ) : (
                        <Destination className="symbol" aria-label={"Image of map with destination"} />
                    )}
                    <div>
                        <p>“The best destinations require a journey” – Let’s say that’s from Tolkien</p>
                        <p>Zion is definitely ‘off the beaten path’, it’s a river oasis tucked away in
                            the desert cliffs of southern Utah. Not exactly the kind of place that
                            has an airport, unfortunately. Here is the best way to get there</p>
                        <ul>
                            <li>Fly into Las Vegas</li>
                            <li>Rent a car (or split one with someone else who’s going)</li>
                            <li><a target="_blank" href="https://www.google.com/maps/dir/Harry+Reid+International
                            +Airport,+5757+Wayne+Newton+Blvd,+Las+Vegas,+NV+89119/Zion+Red+Rock+
                            Villa,+991+W+230+S,+Rockville,+UT+84763/@36.4020003,-114.9718179,8.32z
                            /data=!4m14!4m13!1m5!1m1!1s0x80c8c59f1f049c5d:0x471359241ec41e1e!2m2!
                            1d-115.1537389!2d36.0839998!1m5!1m1!1s0x80cae70549b2ced1:0x80a16af4650
                            52756!2m2!1d-113.0639233!2d37.1597035!3e0" aria-label="Google Maps directions">
                                Drive about 3 hours North-East</a></li>
                        </ul>
                    </div>
                </div>
            </section>
            <section>
                <fieldset><legend> <h2>What to Bring</h2> </legend></fieldset>
                <div className="text-box">
                    {state.SVGTheme ? (
                        <Dino10 className="symbol" aria-label={"Image of dinosaur"}/>
                    ) : (
                        <Luggage className="symbol" aria-label={"Image of luggage"}/>
                    )}
                    <div className={"formatted-list"}>
                        <dl>
                            <dt>Clothes</dt>
                            <dd>Zion is in the desert, which means it’s going to be hot during the day and
                                cold at night, so you should pack accordingly for both.</dd>
                            <dd>It would also be a good idea to bring swim clothes, hiking clothes if you plan
                                on hiking in the park, and water shoes if you want to hike The Narrows.</dd>
                            <dt>Food</dt>
                            <dd>We’re going to do everything we can do make sure everyone is fed for the time
                                we're there, but it might not be a bad idea to pick up some of your favorite
                                snacks before you get there.</dd>
                            <dt>Things To Do</dt>
                            <dd>Have a boardgame you like? A Viking lawn game where you toss wood blocks? An
                                inflatable pool orca? Bring ‘em! We’re on the hook for damages done to the
                                Villa though, so please use your (or someone more responsible’s) better
                                judgement.</dd>
                        </dl>
                    </div>
                </div>
            </section>
            <section>
                <fieldset><legend> <h2>FAQ</h2> </legend></fieldset>
                <div className="text-box">
                    {state.SVGTheme ? (
                        <Dino11 className="symbol" aria-label={"Image of dinosaur"}/>
                    ) : (
                        <Question className="symbol" aria-label={"Image of question mark"}/>
                    )}
                    <Accordion>
                        <AccordionItem header={"Is the villa actually in the park?"}>
                            <p>The villa is located about 5 minutes down river from the Park.</p>
                        </AccordionItem>
                        <AccordionItem header={"How many flagons of ale will there be?"}>
                            <p>None, for a multitude of reasons, it's going to be a dry wedding.</p>
                        </AccordionItem>
                        <AccordionItem header={"Where will the ceremony be?"}>
                            <p>It will be deep in the park, at the Temple of Sinawava (not a temple, it's just a pretty spot on the river).</p>
                        </AccordionItem>
                        <AccordionItem header={"How will we be getting to the ceremony?"}>
                            <p>We'll have to drive from the villa to the Park, then take a 30 minute shuttle into the Park to the ceremony location.</p>
                        </AccordionItem>
                        <AccordionItem header={"When will I know if there's space at the villa for me?"}>
                            <p>Shrugging emoji. Hopefully soon.</p>
                        </AccordionItem>
                        <AccordionItem header={"Are the rooms all private?"}>
                            <p>Many of the bedrooms have multiple beds, so some people may
                                have to share rooms.</p>
                        </AccordionItem>
                        <AccordionItem header={"Will I have to share a room with someone I don't know?"}>
                            <p>We're going to endeavor to make this as pleasant for everyone as possible.
                                If you're a family, then definitely not. If you're going stag, then probably.
                                We'll reach out to you and make sure you're happy with where we're placing you
                                before anything is finalized.</p>
                        </AccordionItem>
                        <AccordionItem header={"Do we need to pay for the villa?"}>
                            <p>If you want to chip in, that would be great, if not, that's completely fine!</p>
                        </AccordionItem>
                        <AccordionItem header={"Can I smoke on the property?"}>
                            <p>No, Smoky the Bear underwrites the villa's insurance policies.</p>
                        </AccordionItem>
                        <AccordionItem header={"Can I bring kids?"}>
                            <p>As long as they're yours, of course! They should be listed by name on the
                                RSVP form.</p>
                        </AccordionItem>
                        <AccordionItem header={"Can I bring a plus one?"}>
                            <p>If they're not listed on your RSVP form, then no.</p>
                        </AccordionItem>
                        <AccordionItem header={"Will you need help?"}>
                            <p>Yes! This is a monumental task we've taken on, we're trying to plan
                                a wedding and a sleep-away-camp for adults at the same time. We're
                                definitely going to be asking for people to help out with things,
                                especially with food.</p>
                        </AccordionItem>
                        <AccordionItem header={"What is the meaning of life?"}>
                            <p>The simplest answer is that life is meaningless, beyond
                                whatever meaning you give it. So just find what’s important to
                                you and have fun!</p>
                        </AccordionItem>
                        <AccordionItem header={"Are there stores or restaurants nearby?"}>
                            <p>Yes, there's plenty of stores and restaurants nearby, as well as a Walmart and
                                Costco less than an hour away.</p>
                        </AccordionItem>
                        <AccordionItem header={"Can I camp on the property?"}>
                            <p>Unfortunately, no. No bounce houses either. I don't know why I connected
                            those two things in my head, but regardless: no tents or inflatable castles.</p>
                        </AccordionItem>
                        <AccordionItem header={"My question isn't listed here."}>
                            <p>Just ask us!</p>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>
            <section>
                <fieldset><legend> <h2>Registry</h2> </legend></fieldset>
                <div className="text-box">
                    {state.SVGTheme ? (
                        <Dino12 className="symbol" aria-label={"Image of dinosaur"}/>
                    ) : (
                        <Gift className="symbol" aria-label={"Image of gift"}/>
                    )}
                    <div>
                        <p>Since we’re making you schlep all the way to Utah, we’re not expecting
                            you to also get us a gift. Your presence is the greatest gift.</p>
                    </div>
                </div>
            </section>
        </article>
    )
}