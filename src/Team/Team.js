import './Team.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram} from '@fortawesome/fontawesome-svg-core'
import { faF, faCamera, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function Team() {
    return(

    <div className="team">

        <h1 className='team-h1'>Team</h1>
        <p>Meet the people that are going to take your business to the next level.</p>

        <div className='users'>

        <div className='user1'>

        <img className='person' src='person.webp' alt='person'/>
        <h1>Mark Lawrance</h1>

        <h3>Web Designer</h3>

        <p>Creative, detail-oriented, always focused.<br></br> front-end developer</p>
        <div className='icons'>

        <FontAwesomeIcon className='faF' icon={faF}></FontAwesomeIcon>
        <FontAwesomeIcon className='faCamera' icon={faCamera}></FontAwesomeIcon>
        <FontAwesomeIcon className='faTelegram' icon={faPaperPlane}></FontAwesomeIcon>

        </div>

        </div>

        <div className='user2'>

        <img className='person1' src='person1.webp' alt='person'/>
        <h1>Jane Stenton</h1>

        <h3>SEO Specialist</h3>

        <p>Curious, tech-geeck and gets<br></br> serious when it comes to work.</p>

        <div className='icons1'>

        <FontAwesomeIcon className='faF' icon={faF}></FontAwesomeIcon>
        <FontAwesomeIcon className='faCamera' icon={faCamera}></FontAwesomeIcon>
        <FontAwesomeIcon className='faTelegram' icon={faPaperPlane}></FontAwesomeIcon>

        </div>


        </div>

        <div className='user3'>

        <img className='person2' src='niga.jpg' alt='person'/>
        <h1>John Smith</h1>

        <h3>SEO Specialist</h3>

        <p>Enthusiastic, passionate with<br></br> great sense of humor.</p>

        <div className='icons2'>

        <FontAwesomeIcon className='faF' icon={faF}></FontAwesomeIcon>
        <FontAwesomeIcon className='faCamera' icon={faCamera}></FontAwesomeIcon>
        <FontAwesomeIcon className='faTelegram' icon={faPaperPlane}></FontAwesomeIcon>

        </div>



        </div>


        </div>







    </div>





    );
}

export default Team