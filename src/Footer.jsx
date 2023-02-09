
const Footer = () => {
    return (
        <footer className={"custom-footer"}>
            <author>
                <h3>Bride and Groom Contact:</h3>
                <ul>
                    <li>
                        <h4>Kevin Darke</h4>
                        <a href="tel:8108450806">810-845-0806</a><br />
                        <a href="mailto:kevindarke@gmail.com">kevindarke@gmail.com</a>
                    </li>
                    <li>
                        <h4>Bailey James</h4>
                        <a href="tel:2402053017">240-205-3017</a><br />
                        <a href="mailto:bykejs@yahoo.com">bykejs@yahoo.com</a>
                    </li>
                </ul>

                <address>
                    <h5>Home address:</h5>
                    <a href="https://www.usps.com/ship/letters.htm">
                        7714 Argonaut St<br />
                        Severn, MD 21144</a>
                </address>
            </author>
        </footer>
    )
}

export default Footer;