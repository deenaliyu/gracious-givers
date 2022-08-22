import React from 'react'
import Button from 'react-bootstrap/Button';
import Header from './Header'
import image1 from '../Assets/Web/home/Hakima.png';
import image2 from '../Assets/Web/home/heart.png';
import image3 from '../Assets/Web/home/location.png';
import image4 from '../Assets/Web/home/smile.png';
import image5 from '../Assets/Web/home/hub.png';
import image6 from '../Assets/Web/home/merge.png';
import card1 from '../Assets/Web/home/Bida.png';
import card2 from '../Assets/Web/home/Dollar.png';
import card3 from '../Assets/Web/home/kids.png';
import card4 from '../Assets/Web/home/reachout.png';
import img1 from '../Assets/Web/home/12.png';
import img2 from '../Assets/Web/home/13.png';
import img3 from '../Assets/Web/home/14.png';
import img4 from '../Assets/Web/home/15.png';
import foot1 from '../Assets/Web/home/Footer.png';

const Home = () => {
  return (
    <>
     
      <div className='container-fluid home'>
      <Header />
        <div className='row mt-5'>
        <div className='col-md-12 mt-5'>
          <div className='home-head'>Be Their Future.</div>
          <div className='home-body'>
          <p><span className='ms'>Our Mission</span> : Eradicate Poverty and also Teaching our youth the importance of self
           sufficiency and leadership through skill building and problem solving.</p>
          </div>
            <div className='d-flex justify-content-center mt-5'>
            <Button className="botp" variant="outline-success">Donate Now</Button>
            <Button className="botr" variant="outline-success">Opportunities</Button>
            </div>
          </div>
        </div>

        <div className='container-fluid emp'>
        <div className='row mb-4'>
        <div className='col-md-4'>
          <div className='cardoo'>
            <div className='card-header'>
            <img src={image1} alt="Logo" />
            </div>
          <div className='card-body'>
          <h4 className='heading'>Hakima Empowement <br></br>Center</h4>
          <p>Hakima Empowerment Center help women and children get various vocational skills so that they will be self reliant...</p>
          <Button className="boto mt-4" variant="outline-success">Apply Here</Button>
          </div>
          </div>
        </div>
        <div className='col-md-4 '>
        <div className='cardoo'>
            <div className='card-header'>
            <img src={image2} alt="Logo" />
            </div>
          <div className='card-body'>
          <h4 className='heading mt-4 mb-4'>HEALTHY FOOD</h4>
          <p>Our homestead project helps youth discover the importance of good health and nutrition. Instilling healthy eating habits not only helps us grow physically, but mentally.</p>
          <Button className="boto mt-4" variant="outline-success">Make Donation</Button>
          </div>
          </div>
        </div>
        <div className='col-md-4 '>
        <div className='cardoo'>
            <div className='card-header'>
            <img src={image3} alt="Logo" />
            </div>
          <div className='card-body'>
          <h4 className='heading mt-4 mb-4'>VOLUNTEER LOCATIONS</h4>
          <p>Our nonprofit primarily operates out of Bida, Minna, Kano, Agaie, Bosso, and Lapie area. Inquire about becoming a volunteer. Or Request Gracious Givers help for an event</p>
          <Button className="boto mt-3" variant="outline-success">Contact Us</Button>
          </div>
          </div>
        </div>
        </div>
        <div className='row mt-5'>
        <div className='col-md-4'>
          <div className='cardoo'>
            <div className='card-header'>
            <img src={image4} alt="Logo" />
            </div>
          <div className='card-body'>
          <h4 className='heading mb-3 mt-3'>LOVE & CARE</h4>
          <p>Help children all over the world blossom into something beautiful. See how your donation can help pay registration fees for children who come from low income households.</p>
          <Button className="boto mt-2" variant="outline-success">Click here to See How</Button>
          </div>
          </div>
        </div>
        <div className='col-md-4 '>
        <div className='cardoo'>
            <div className='card-header'>
            <img src={image5} alt="Logo" />
            </div>
          <div className='card-body'>
          <h4 className='heading mt-5 mb-4'>JOIN THE CAUSE</h4>
          <p>We are always looking for individuals and groups to help! Please click the link below to find out how you can become apart of something great!</p>
          <Button className="boto mt-2" variant="outline-success">Join Now</Button>
          </div>
          </div>
        </div>
        <div className='col-md-4 '>
        <div className='cardoo'>
            <div className='card-header'>
            <img src={image6} alt="Logo" />
            </div>
          <div className='card-body'>
          <h4 className='heading mt-4 mb-4'>SUPPORT OUR GROWTH</h4>
          <p>A seed makes itself…But it needs help. Sometimes it needs a moth or a wasp or a gust of wind. Sometimes it needs a farm and it needs a farmer. It needs a garden and a gardener. It needs you.</p>
          </div>
          </div>
        </div>
        </div>
        </div>

        <div className='container-fluid feature'>
        <h4 className='fhead'>Featured Causes</h4>
        <h5 className='fdown'>Our Current Featured Projects</h5>
        <div className='row mt-5'>
        <div className='col-md-4'>
          <div className=''>
            <img src={card1} alt="Logo" className='imgg'/>
          <div className='card-body'>
          <h4 className='headf mt-3'>In Bida, we train 1000 women & widows on vocational skills</h4>
          <p className='headp'>The training which commenced at two different canters in Bida for the past three weeks was aimed at teaching....</p>
        
          </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className=''>
            <img src={card2} alt="Logo" className='imgg' />
          <div className='card-body'>
          <h4 className='headf mt-3'>Every Dollar You Donate Helps a Kid, Be a Kid</h4>
          <p className='headp'>Help youth and teams sponsored by Mighty Mentors pay for upfront registration costs. We partner…</p>
        
          </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className=''>
            <img src={card3} alt="Logo" className='imgg' />
          <div className='card-body'>
          <h4 className='headf mt-3'>Protect Our Kids. Protect Our Environment.</h4>
          <p className='headp'>How hands-on farming can help a child’s growth Farming teaches life skills. The fact that…</p>
        
          </div>
          </div>
        </div>
        </div>

      </div>

      <div className='helpi'>
      <div className='row mt-5 gx-0'>
        <div className='col-md-6'>
            <img src={card4} alt="Logo" />
        </div>
        <div className='col-md-6 helpi1'>
          <div className='helpp'>
          <h4 className='heda'>Help us reach our “Youth Homestead” Project Goal</h4>
          <p className='Phase'>Phase 1</p>
          <div className='d-flex justify-content-around'>
          <Button className="botp" variant="outline-success">Donate Now</Button>
          <Button className="botr" variant="outline-success">Learn More</Button>
          </div>
          </div>
          </div>
        </div>
        </div>
        <div className='container-fluid feature'>
        <h4 className='fhead'>Informative Articles</h4>
        <h5 className='fdown'>Please Take The Time To Check Our Some Of Our Articles</h5>
        <div className='row mt-5'>
        <div className='col-md-3'>
          <div className=''>
            <img src={img1} alt="Logo" className='imgg'/>
          <div className='card-body'>
          <h4 className='headf mt-3'>Protect Our Kids. Protect Our Environment</h4>        
          </div>
          </div>
        </div>
        <div className='col-md-3'>
          <div className=''>
            <img src={img2} alt="Logo" className='imgg' />
          <div className='card-body'>
          <h4 className='headf mt-3'>Why Is Self Sufficiency Important?</h4>
          </div>
          </div>
        </div>
        <div className='col-md-3'>
          <div className=''>
            <img src={img3} alt="Logo" className='imgg' />
          <div className='card-body'>
          <h4 className='headf mt-3'>Raising Confident Children</h4>
        
          </div>
          </div>
        </div>
        <div className='col-md-3'>
          <div className=''>
            <img src={img4} alt="Logo" className='imgg' />
          <div className='card-body'>
          <h4 className='headf mt-3'>How Team Building Builds Mental Awareness</h4>
        
          </div>
          </div>
        </div>
        </div>

      </div>
      <div className='helpii'>
        </div>
        <div className='container-fluid footer1'>
        <div className='row mmm'>
        <div className='col-md-3'>
          <div className=''>
          <h4 className='pr'>1080</h4>
          <p className='pw'>Women & Kids Helped</p>
          </div>
        </div>
        <div className='col-md-3'>
          <div className=''>
          <h4 className='pr'>50</h4>
          <p className='pw'>Volunteers</p>
          </div>
        </div>
        <div className='col-md-3'>
          <div className=''>
          <h4 className='pr'>10</h4>
          <p className='pw'>Projects</p>
          </div>
        </div>
        <div className='col-md-3'>
          <div className=''>
          <h4 className='pr'>1</h4>
          <p className='pw'>Mission</p>
          </div>
        </div>
        </div>

      </div>
      <div className='container-fluid footer2'>
        <div className='d-flex justify-content-center pt-20'>
        <img src={foot1} alt="Logo" className='imgg'/>
        </div>
        <div className='row ppp'>
        <div className='col-md-5 px-5'>
          <div className='fot1'>
          <h4 className='hw'>Our Mission</h4>
          <p className='fw mt-6'>Teaching our youth the importance of Self Sufficiency and Leadership through Skill Building & Problem Solving.</p>
          <h4 className='hw mt-4'>Social Icons</h4>
          </div>
        </div>
        <div className='col-md-3'>
        </div>
        <div className='col-md-4 '>
          <div className='fot2'>
          <h4 className='pr'>10</h4>
          <p className='pw'>Projects</p>
          </div>
        </div>
        </div>
        <div className='d-flex justify-content-center'>
        <p className=''>Copyright © 2022 Gracious Givers Foundation</p>
        </div>
      </div>
      </div>
      
    </>
  )
}

export default Home
