import './contact.css'

export const Contact = () => {
    return (
        <>
            <h1>Contact us:</h1>
            <div className="container"></div>
            <form>
                <div className="input-container">
                    <label>First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                </div>
                <div className="input-container">
                    <label>Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                </div>
                <div className="input-container">
                    <label >Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                </div>
                <div className="button-container">
                    <input type="submit" value="Submit" />
                </div>

            </form>
        </>
    )
}