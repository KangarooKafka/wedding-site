const Home = () => {
    let greeting;
    const personOne = localStorage.getItem('p1FirstName');
    const personTwo = localStorage.getItem('p2FirstName');
    if (personTwo.length > 0) {
        greeting = `${personOne} & ${personTwo}`
    } else {
        greeting = `${personOne}`
    }

    return (
        <article className="home">
            <h1>Welcome {greeting}!</h1>
            <section>
            <p>Our whole lives, we always watched people plan
                expensive destination weddings that were a pain for
                all their guests, and we said to ourselves,
                “we’ll never do that”.</p>
                <p>Well, here we are.</p>
            <p>So what happened? Why a destination wedding at Zion National Park? In 2021 We took a road
                trip across the American West to visit
                National Parks, and Zion immediately became our
                most favorite place in the world, and we knew
                immediately it’s where we wanted to get married.</p>
            </section>
            <section>
                <fieldset><legend><h2>The Plan</h2></legend></fieldset>
            <p>Since you’re already coming all the way out to
                southern Utah, it seemed like such a waste to just
                come out for a day then send everyone home. Instead,
                what we’ve done is rented a 12,000 square foot villa
                for the five days around our wedding for everyone to
                stay in. Not only will you be coming for the wedding,
                but also hopefully having a fun multi-day vacation at
                a super cool place. For more information on the
                Location tab.</p>
            </section>
            <section>
                <fieldset><legend><h2>Cost</h2></legend></fieldset>
            <p>We have guests coming from all ends of the financial
                spectrum and want to make sure as many people can
                come as possible. In fact, the other reason for
                getting the Villa was so that people wouldn’t have
                to worry about finding a hotel. As such, we are not
                going to be requiring anyone chip in for their stay
                at the Villa, or for any of the food we will be
                providing for the length of the stay. That being said,
                my lottery numbers keep being duds and this whole
                endeavor is very expensive. If you feel you can,
                it would be greatly appreciated if you chipped in
                for the Villa and food. If not, really don’t worry
                about it, we’re just glad to have you there!</p>
            </section>
            <section>
                <fieldset><legend><h2>Important</h2></legend></fieldset>
            <p>The Villa does have a limited number of beds.
                It’s a lot, but it’s still limited. As of right now,
                we cannot guarantee that there is going to be enough
                space for everyone (at least to sleep).</p>
            <p>Once everyone RSVPs, we’ll be able to put together the
                sleeping arrangements and figure out if we have enough
                beds. At that point, we will email you and let you know
                if there is space in the Villa, or if you’ll be needing
                to rent a hotel room.</p>
            <p>That means the sooner you can RSVP, the easier it will
                be for us to figure everything out. Obviously there
                are a lot of logistics that you need to look at, but
                if you know you definitely will or will not be going,
                please let us know as soon as possible!</p>
            </section>
        </article>
    )
}

export default Home;