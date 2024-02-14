import {ReactComponent as Plan} from "../SVGs/plan.svg";
import {ReactComponent as Wedding} from "../SVGs/wedding.svg";
import {ReactComponent as Costs} from "../SVGs/costs.svg";
import {ReactComponent as Dino1} from "../SVGs/dino.svg";
import {ReactComponent as Dino2} from "../SVGs/dino-1.svg";
import {ReactComponent as Dino3} from "../SVGs/dino-2.svg";
import {ReactComponent as Dino4} from "../SVGs/dino-3.svg";
import {ReactComponent as Zion} from "../SVGs/zion.svg";

export default function Home(state) {
    // Get the first name of the users
    const personOne = localStorage.getItem('p1FirstName');
    const personTwo = localStorage.getItem('p2FirstName');

    return (
        <article className="home">
            {/* Display custom welcome message, depending on if there are one or two guests */}
            {personTwo.length > 0 ? (
                <h1>Welcome {personOne} & {personTwo}!</h1>
            ) : (
                <h1>Welcome {personOne}!</h1>
            )}
            <section>
                <div className="text-box">
                    {state.SVGTheme ? (
                        <Dino1 className="symbol" aria-label={"Image of Dilophosaurus"}/>
                    ) : (
                        <Wedding className="symbol" aria-label={"Image of two birds and a heart"}/>
                    )}
                    <div>
                        <p>Welcome to our wedding website! We are thrilled to have
                        you here and share in our excitement as we prepare for
                        our special day!</p>
                        <p>We are so excited to share this milestone with our family and
                        friends, and we can't wait to create memories with you all that will last
                        a lifetime! We hope this website will be a helpful resource
                        for you as we prepare for our big day.</p>
                        <p>UPDATE: We have a wedding discord now, let us know if you'd like to be
                            invited! It has a great dinosaur channel for discussing dinosaurs.</p>
                    </div>
                </div>
            </section>
            <section>
                <fieldset><legend><h2>Why Zion?</h2></legend></fieldset>
                <div className="text-box">
                    {state.SVGTheme ? (
                        <Dino2 className="symbol" aria-label={"Image of dinosaur"}/>
                    ) : (
                        <Zion className="symbol" aria-label={"Image of Zion"}/>
                    )}
                    <div>
                        <p>We know what you're thinking, "why in the blue blazes
                            are you getting married in Utah?"</p>
                        <p>Well, that's a valid question. Honestly, we always hated
                            the idea of destination weddings since it's a huge ask and
                            headache for our guests. But, here we are, so sorry about that!</p>
                        <p>So what happened? Well, in 2021 we took a road trip of the American
                            West, and when we visited Zion, it was so breathtakingly beautiful that
                            we both immediately knew it's where we wanted to get married. Kevin
                            started shopping for engagement rings as soon as we got home.</p>
                    </div>
                </div>
            </section>
            <section>
                <fieldset><legend><h2>Costs</h2></legend></fieldset>
                <div className="text-box">
                    {state.SVGTheme ? (
                        <Dino4 className="symbol" aria-label={"Image of dinosaur"}/>
                    ) : (
                        <Costs className="symbol" aria-label={"Image of money on fire"}/>
                    )}
                    <div>
                        <div className={"formatted-list"}>
                            <p>It's hard to estimate prices, but these
                                are our best guesses so you have an idea of how much
                                it might cost.</p>
                            <dl>
                                <dt>Airfare</dt>
                                <dd>Around $300-$400 per person, round trip</dd>
                                <dt>Rental Car</dt>
                                <dd>Around $50 a day, plus insurance. I would highly suggesting checking
                                    with your credit card or existing car insurance to see if they offer
                                    free rental insurance.</dd>
                                <dt>Lodging</dt>
                                <dd>It depends on how close you want to be and how nice of a place
                                    you want. You can get an AirBnB 30 minutes away for around $120 a night,
                                    or a nice Hotel close by for $300+ a night. We also have a block booked
                                    at a nearby hotel for $169 a night. Let us know if you want that info.</dd>
                                <dd>If you stay at the Villa, there is no set cost for you. It is very
                                    expensive for us however, so if you're staying at the Villa and feel
                                    financially comfortable enough to chip in to the cost, that would be
                                    highly appreciated.</dd>
                                <dt>Food</dt>
                                <dd>We will be doing our best to feed everyone at the Villa. Again,
                                    you do not need to pay us anything for this, but if you want to chip
                                    in, it would be appreciated.</dd>
                            </dl>
                            <p>We would also suggest talking to people you know who are also going to
                                coordinate sharing things like rental cars.</p>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    )
}