import {ReactComponent as SignPost} from "../images/signs-post-solid.svg";
import {ReactComponent as Suitcase} from "../images/suitcase-solid.svg";
import {ReactComponent as Clipboard} from "../images/clipboard-list-solid.svg";
import {ReactComponent as Question} from "../images/circle-question-solid.svg";
import {ReactComponent as Gift} from "../images/gift-solid.svg";

export default function Info() {
    return (
        <article className="info">
            <h1>Info</h1>
            <section>
                <fieldset><legend> <h2>How to Get There</h2> </legend></fieldset>
                <div className="text-box">
                    <SignPost className="symbol"/>
                    <div>
                        <p>“The best places are the hardest to get to” – Let’s say that’s from Tolkien</p>
                        <p>Zion is definitely ‘off the beaten path’, it’s a river oasis tucked away in
                                the cliffs of southern Utah. Not exactly the place that has an airport,
                                unfortunately. Here is the best way to get there</p>
                        <ul>
                            <li>Fly into Las Vegas</li>
                            <li>Rent a car (or split one with someone else who’s going)</li>
                            <li><a href="https://www.google.com/maps/dir/Harry+Reid+International
                            +Airport,+5757+Wayne+Newton+Blvd,+Las+Vegas,+NV+89119/Zion+Red+Rock+
                            Villa,+991+W+230+S,+Rockville,+UT+84763/@36.4020003,-114.9718179,8.32z
                            /data=!4m14!4m13!1m5!1m1!1s0x80c8c59f1f049c5d:0x471359241ec41e1e!2m2!
                            1d-115.1537389!2d36.0839998!1m5!1m1!1s0x80cae70549b2ced1:0x80a16af4650
                            52756!2m2!1d-113.0639233!2d37.1597035!3e0" aria-label="Google Maps directions">
                                Drive about 2.5 hours North-East</a></li>
                        </ul>
                    </div>
                </div>
            </section>
            <section>
                <fieldset><legend> <h2>What to Bring</h2> </legend></fieldset>
                <div className="text-box">
                    <Suitcase className="symbol"/>
                    <div>
                        <dl>
                            <dt>Clothes</dt>
                            <dd>Zion is in the desert, which means it’s going to be hot during the day and
                                cold at night. You should pack accordingly for both. For the actual ceremony,
                                we’re not asking people to wear a suit into a National Park, we’re just
                                asking that you please dress nice, but be comfortable, we want you to have
                                fun! It would also be a good idea to bring swim clothes!</dd>
                            <dt>Food</dt>
                            <dd>We’re going to do everything we can do make sure everyone is always fed, but
                                I’ll be honest, this is a lot of people to feed, and I don’t have professional
                                experience feeding a small army. In case there’s a meal where we didn’t get
                                enough food, or if you don’t like what we’re having, it might not be a bad
                                idea to just bring some snacks you like.</dd>
                            <dt>Things To Do</dt>
                            <dd>Have a boardgame you like? A Viking lawn game where you toss wood blocks? An
                                inflatable pool orca? Bring ‘em! We’re on the hook for damages done to the
                                Villa though, so please just use your (or someone more responsible’s) better
                                judgement.</dd>
                        </dl>
                    </div>
                </div>
            </section>
            <section>
                <fieldset><legend> <h2>Itinerary</h2> </legend></fieldset>
                <div className="text-box">
                    <Clipboard className="symbol"/>
                    <div>
                        <dl>
                            <dt>Thursday, May 30th</dt>
                            <dd><ul>
                                <li>5:00 – Check-in time at the Villa, guests can start arriving</li>
                            </ul></dd>
                            <dt>Friday, May 31st</dt>
                            <dd><ul>
                                <li>All Day – Free Play</li>
                            </ul></dd>
                            <dt>Saturday, June 1st</dt>
                            <dd><ul>
                                <li>Wedding ceremony ‘n’ such</li>
                            </ul></dd>
                            <dt>Sunday, June 2nd</dt>
                            <dd><ul>
                                <li>All Day – Free Play</li>
                            </ul></dd>
                            <dt>Monday, June 3rd</dt>
                            <dd><ul>
                                <li>10:00 AM Check-out</li>
                            </ul></dd>
                        </dl>
                    </div>
                </div>
            </section>
            <section>
                <fieldset><legend> <h2>FAQ</h2> </legend></fieldset>
                <div className="text-box">
                    <Question className="symbol"/>
                    <div>
                        <dl>
                            <dt>What is the meaning of life?</dt>
                            <dd>Wow, right out of the gate with the most frequently asked question!
                                Ah, the simplest answer is simply just that life is meaningless,
                                beyond whatever meaning you give it. So, find what’s important to
                                you and have fun!
                            </dd>
                        </dl>
                    </div>
                </div>
            </section>
            <section>
                <fieldset><legend> <h2>Registry</h2> </legend></fieldset>
                <div className="text-box">
                    <Gift className="symbol"/>
                    <div>
                        <p>Since we’re making you schlep all the way to Utah, we’re not expecting
                            you to also get us a gift. Your presence is the greatest gift.</p>
                    </div>
                </div>
            </section>
        </article>
    )
}