import './Connect.css'

function Connect() {
    return(

    <div className='connect'>


        <h1 className='connect-h1'>Contact Us</h1>

        <div className='adress'>

            <h3>Address: Street 221B Baker Street, London, UK</h3>

            <h3>Customer Support E-mail: contact@site.com Phone: (555) 555-5555</h3>




        </div>

        <div className='inputs'>

        <p>Your Name (required):</p> <input type='text'></input>
        <p>Your Email (required):</p> <input type='text'></input>
        Subject: <input type='text'></input>


        </div>

        
        <textarea placeholder='Your Massage'></textarea>

        <button className='connect-button'>Send</button>










    </div>





    );
}


export default Connect