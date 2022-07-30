import './Header.css'

function Header() {
  return(
  
    <div className='header-web'>

     <nav>
     
     <ul className='head-ul'>
    <li>about</li>
    <li>home</li>
    <li>blog</li>
    <li>testimonials</li>
    <li>services</li>
    <li>ourteam</li>
    <li>contact us</li>




     </ul>


     </nav>

     <div className='head-content'>
      
      <h1>clean.slick.pixel perfect</h1>

      <p className='para-head'>lldy is a great one-page theme, perfect for developers and designers but also for someone who just wants a new website for his business. Try it now!
Learn more Download</p>


      <div className='header-button'>

      <button className='head-button'>learn more</button>
      <button className='head-button1'>Download</button>


       </div>
     </div>






    </div>


  );  
}


export default Header