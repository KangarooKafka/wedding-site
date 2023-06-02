import {useEffect, useState} from "react";
import GuestListing from "./GuestListing";
import urlUtil from "../Common/utils/urlUtil";

// Makes API call to get all guests
async function getAllGuests() {
    return await fetch(`${urlUtil}/api/guest`, {
        method: 'GET'
    })
        .then(data => data.json())
}

// Makes API call to add a new guest
async function addGuest() {
    return fetch(`${urlUtil}/api/guest`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    })
}

// Displays timed success message
function successMessage(setSuccess) {
    setSuccess(true)
    setTimeout(() => {
        setSuccess(false)
    }, 2000)

}

// Blank form for new guest
let formData = {
    username: [],
    p1FirstName: "",
    p1LastName: "",
    p2FirstName: "",
    p2LastName: "",
    children: ""
}

export default function Manage() {
    // Get user
    const user = localStorage.getItem('username');

    // Guests hook
    const [guests, setGuests] = useState([]);

    // Hook for success message
    const [success, setSuccess] = useState(false);

    // Hook for completed form
    const [finished, setFinished] = useState(false)

    // Gets all guests from API and loads them into state variable
    useEffect(() => {
        let mounted = true;
        getAllGuests()
            .then(async guests => {
                if (mounted) {
                    setGuests(await guests)
                }
            })
        return () => mounted = false;
    }, [])

    // Delegates form change and adds it to appropriate form field
    const handleChange = (e) => {
        switch (e.target.name) {
            case 'username':
                formData.username = e.target.value.split(', ');
                break;
            case 'p1FirstName':
                formData.p1FirstName = e.target.value;
                break;
            case 'p1LastName':
                formData.p1LastName = e.target.value;
                break;
            case 'p2FirstName':
                formData.p2FirstName = e.target.value;
                break;
            case 'p2LastName':
                formData.p2LastName = e.target.value;
                break;
            case 'children':
                formData.children = e.target.value;
                break;
            default:
                break;
        }

        // Check if form is valid enough to be submitted
        if (formData.username.length > 0 &&
            formData.p1FirstName.length > 0 &&
            formData.p1LastName.length > 0) {
            setFinished(true)
        }
    }

    // Handles submit by adding the guest to the database
    const handleSubmit = async (e) => {
        e.preventDefault()

        // Add guests to the API
        await addGuest()

        // Make another call for the all the guests
        getAllGuests()
            .then(async guests => {
                    setGuests(await guests)
            })

        console.log(formData)

        // Reset form data
        formData = {
            username: [],
            p1FirstName: "",
            p1LastName: "",
            p2FirstName: "",
            p2LastName: "",
            children: ""
        }

        // Set success message, reset button and clear fields
        successMessage(setSuccess)
        setFinished(false)
        e.target.reset()
    }

    return (
        <article className="admin">
            <h1>Manage Guests</h1>
            {user === 'kd@rk3' &&
                <div>
                    <form onChange={handleChange} onSubmit={handleSubmit}>
                        <fieldset>
                            <div className={'add-header'}>
                                <h2>Add A Guest</h2>
                                {/* Timed message if new guest successfully added */}
                                {success &&
                                    <p> New guest added!</p>
                                }
                            </div>
                            <div className={'form-boxes'}>
                                <label>
                                    <p>Username</p>
                                    <input name={'username'}/>
                                </label>
                                <label>
                                    <p>Person One First Name:</p>
                                    <input name={'p1FirstName'}/>
                                </label>
                                <label>
                                    <p>Person One Last Name:</p>
                                    <input name={'p1LastName'}/>
                                </label>
                                <label>
                                    <p>Person Two First Name:</p>
                                    <input name={'p2FirstName'}/>
                                </label>
                                <label>
                                    <p>Person Two Last Name:</p>
                                    <input name={'p2LastName'}/>
                                </label>
                                <label>
                                    <p>Children:</p>
                                    <input name={'children'}/>
                                </label>
                            </div>
                        </fieldset>
                        <button disabled={!finished}>Add Guest</button>
                    </form>
                    <section>
                        <ul>
                            {/* For each guest, add them to the list */}
                            {guests.map(guest =>
                                <li key={guest._id}><GuestListing guest={guest}/></li>
                            )}
                        </ul>
                    </section>
                </div>
            }
        </article>
    )
}