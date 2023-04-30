export default function Home() {
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
                <p>Welcome to our wedding website! We are thrilled to have
                    you here and share in our excitement as we prepare for
                    our special day</p>
                <p>We are so excited to share this milestone with our family and
                    friends, and we can't wait to create memories with you all that will last
                    a lifetime! We hope this website will be a helpful resource
                    for you as we prepare for our big day.</p>
                <p>PS, the website's theming options are best experienced
                    on a desktop.</p>
            </section>
            <section>
                <fieldset><legend><h2>Why Zion?</h2></legend></fieldset>
                <p>We know what you're thinking, "why in the blue blazes
                    are you getting married in Utah?"</p>
                <p>Well, that's a valid question. Honestly, we always hated
                    the idea of destination weddings since it's a huge ask and
                    headache for our guests. But, here we are, so sorry about that!</p>
                <p>So what happened? Well, in 2021 we took a road trip of the American
                    West, and when we visited Zion, it was so breathtakingly beautiful that
                    we both immediately knew it's where we wanted to get married. Kevin
                    started shopping for engagement rings as soon as we got home.</p>
            </section>
            <section>
                <fieldset><legend><h2>The Plan</h2></legend></fieldset>
                <p>We understand that traveling all the way out to Utah is
                    a tall ask, so to make it worth the trip we've rented
                    out a 12,000 square foot villa on 15 private acres for
                    the 5 days around our wedding.</p>
                <p>The villa will serve as a space for us to hang out with our guests,
                    and for many of you, a place to stay! Now unfortunately, we have
                    slightly more people invited than beds available at the villa, so
                    right now we cannot promise everyone a place to sleep there.</p>
                <p>That is why we're giving people the ability to RSVP early. If
                    you know for sure that you will not be able to make the trek out, or
                    are pretty confident you can make it work, please let us know by
                    filling out the form on the RSVP tab.</p>
                <p>Once we have a better idea of who is coming, we can better plan
                    logistics, as well as let people know if they will or will not need to
                    book a hotel. Regardless if you'll have a bed at the villa though, you'll
                    still be able to hang out there with everyone else and enjoy the amenities.
                    So we would encourage everyone to please check out the Location page.</p>
            </section>
            <section>
                <fieldset><legend><h2>Costs</h2></legend></fieldset>
                <div className={"formatted-list"}>
                    <p>It's hard to estimate prices this far out, but these
                        are our best guesses so you have an idea of how much
                        it might cost.</p>
                    <dl>
                        <dt>Airfare</dt>
                        <dd>Around $300-$400 per person, round trip</dd>
                        <dt>Rental Car</dt>
                        <dd>Around $50 a day</dd>
                        <dt>Lodging</dt>
                        <dd>It depends on how close you want to be and how nice of a place
                            you want. You can get an AirBnB 30 minutes away for around $120 a night,
                            or a nice Hotel close by for $300+ a night.</dd>
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
            </section>
        </article>
    )
}