import React from 'react'
import { Navbar } from '../../components/navbar/Navbar'
import { Footer } from "../../components/footer/Footer";
import esewa from "../../assets/images/esewa.png";
import khalti from "../../assets/images/khalti.png";
import happy from "../../assets/images/happy.jpg";
import climate from "../../assets/images/climate.png";
import water from "../../assets/images/water.png";
import children from "../../assets/images/children.png";
import emergency from "../../assets/images/emergency.png";
import family from "../../assets/images/family.png";
import transport from "../../assets/images/transport.png";
import pet from "../../assets/images/pet.png";
import disasters from "../../assets/images/disasters.png";
import organization from "../../assets/images/organization.png";
import right from "../../assets/images/right.png";
import wish from "../../assets/images/wish.png";
import education from "../../assets/images/education.png";
import resque from "../../assets/images/resque.png";
import black from "../../assets/images/black.png";
import business from "../../assets/images/business.png";
import minority from "../../assets/images/minority.png";
import homeless from "../../assets/images/homeless.png";
import investigation from "../../assets/images/investigation.png";
import refugee from "../../assets/images/refugee.png";
import religion from "../../assets/images/religion.png";
import veteran from "../../assets/images/veteran.png";
import sport from "../../assets/images/sport.png";
import food from "../../assets/images/food.png";
import women from "../../assets/images/women.png";
import lgbtq from "../../assets/images/lgbtq.png";
import event from "../../assets/images/event.png";
import a from "../../assets/images/a.png";
import b from "../../assets/images/b.png";
import c from "../../assets/images/c.png";
import d from "../../assets/images/d.png";
import e from "../../assets/images/e.png";
import f from "../../assets/images/f.png";
import g from "../../assets/images/g.png";
import bg from "../../assets/images/a.svg";





import peoplecard from "../../assets/images/people-card.svg";
import circle from "../../assets/images/circle.svg";
import circle1 from "../../assets/images/circle1.svg";
import semicircle from "../../assets/images/semi-circle.svg";
import rectangle1 from "../../assets/images/rectangle1.svg";
import rectangle2 from "../../assets/images/rectangle2.svg";
import flower from "../../assets/images/flower.svg";
import quatar from "../../assets/images/quatar.svg";
import "./home.css"
import { BsArrowRight } from "react-icons/bs";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='hero container'>
        <div className='hero-wrapper'>
          <img className='circle1' src={circle1} alt="" />
          <img className='circle2' src={circle} alt="" />
          <img className='semicircle' src={semicircle} alt="" />
          <img className='rectangle1' src={rectangle1} alt="" />
          <img className='rectangle2' src={rectangle2} alt="" />
          <img className='quatar1' src={quatar} alt="" />
          <img className='quatar2' src={quatar} alt="" />
          <img className='quatar3' src={quatar} alt="" />
          <img className='flower' src={flower} alt="" />
          <div className='hero-wrapper-content'>
            <h1>Fundingnp - Croudfunding Platform of Nepal</h1>
            <p>We provide volunteers, donors and everyone in need with the best app to connect with people and organizations involved in non-profit activities all around the world.
            </p>
            <li>
              <a href=''>Start Fundraising<BsArrowRight /></a>
            </li>
          </div>

        </div>
      </div>

      <div className='hero-supported-by container'>
        <h4>SUPPORTED BY</h4>
        <img src={khalti} alt="" />
        <img src={esewa} alt="" />
      </div>

      <div className='container people'>
        <div className='people-primary'>
          <h4>PEOPLE</h4>
          <h1>Your ideas come <br /> to life with fundingnp</h1>
          <li>Peer-to-peer giving among individuals</li>
          <li>Individual volunteers and activists are our backbone</li>
          <li>Fast-track engagements for Non-profit crowdfunding</li>
          <li>Nonprofit organizations can all partake various cases</li>
          <li>Celebrities and influencers, anyone can engage in charity</li>
          <li>Corporate philanthropy embodied through CSR and ESG departments</li>
        </div>
        <div className='people-secondary'>
          <img src={b} alt="" />
          {/* <img src={peoplecard} alt="" /> */}
        </div>
      </div>

      <div className='all-world container'>
        <div>
          <h4>ALL WORLD</h4>
          <h1>Find out for yourself in a variety of topics</h1>
          <li>
            The Myrtus app offers a vast variety of activities and functions for effectively converting
            content and community engagement into charity donations. Anything from peer-to-peer
            donations, fundraising campaigns, crowdfunding, crowdsourcing, and much more
          </li>
          <div className='all-world-item'>
            <p><img src={climate} alt="" /> Climate</p>
            <p><img src={water} alt="" /> Water</p>
            <p><img src={family} alt="" /> Family</p>
            <p><img src={transport} alt="" /> Transport</p>
            <p><img src={emergency} alt="" /> Emergency</p>
            <p><img src={pet} alt="" /> Pets</p>
            <p><img src={children} alt="" /> Children</p>
            <p><img src={disasters} alt="" /> Disasters</p>
            <p><img src={organization} alt="" /> Organization</p>
            <p><img src={wish} alt="" /> whishes</p>
            <p><img src={right} alt="" /> Human Rights</p>
            <p><img src={sport} alt="" /> Sports</p>
            <p><img src={education} alt="" /> Education</p>
            <p><img src={food} alt="" /> Food</p>
            <p><img src={religion} alt="" /> Religion</p>
            <p><img src={black} alt="" /> Black</p>
            <p><img src={homeless} alt="" /> Homeless</p>
            <p><img src={refugee} alt="" /> Refugees</p>
            <p><img src={women} alt="" /> women</p>
            <p><img src={business} alt="" /> Business</p>
            <p><img src={lgbtq} alt="" /> LGBTQ+</p>
            <p><img src={minority} alt="" /> Minority</p>
            <p><img src={resque} alt="" /> Resque</p>
            <p><img src={event} alt="" /> Events</p>
            <p><img src={investigation} alt="" /> Investigations</p>
            <p><img src={family} alt="" /> Families</p>
            <p><img src={veteran} alt="" /> Veterans</p>
          </div>
          <a href="">Learn more<BsArrowRight /></a>
        </div>
      </div>


      <div className='feature container'>
        <div className='feature-wrapper'>
          <h4>FEATURES</h4>
          <h1>Explore the Fundingnp and its extensive functionality</h1>
          <div className='feature-card'>
            <div className='feature-card-primary'>
              <img src={e} alt="" />
            </div>
            <div className='feature-card-secondary'>
              <h3>Interactive Stories</h3>
              <li>Fundingnp is all about making your voice heard through video
                stories that give users the opportunity to launch impact
                campaigns and change the world for the better. So that
                anyone can start doing good starting from the house next door.</li>
            </div>
          </div>
          <div className='feature-card'>
            <div className='feature-card-secondary'>
              <h3>Gamification Mechanics</h3>
              <li>The embedded gamification mechanics of the Myrtus app
                allow anyone to start helping others while enjoying the
                process. Collect, send and share goods and services with
                ‘non-profit goals using a simple and user-friendly interface
                that encourages action over contemplation.</li>
            </div>
            <div className='feature-card-primary'>
              <img src={f} alt="" />
            </div>
          </div>
          <div className='feature-card'>
            <div className='feature-card-primary'>
              <img src={g} alt="" />
            </div>
            <div className='feature-card-secondary'>
              <h3>Cleanliness and safety</h3>
              <li>No ads and no personal data sharing with third parties.
                Myrtus’ goal is to provide the most user-friendly charity
                ‘app based on the latest technologies and the convenient,
                interface. Security of funds is ensured by modern
                cryptographic methods, and accounts are protected by
                two-factor authentication.</li>
            </div>
          </div>
          <div className='feature-card'>
            <div className='feature-card-secondary'>
              <h3>Transparency and Trust</h3>
              <li>Trustis the coin of charity, so the Myrtus app applies a ranking
                system for each user, which will showcase the number of
                people or organizations that individual helped with full
                transparency of reporting on funds raised and spent, eliminating
                the possibilty of fraud. Increase ranking and receive rewards.</li>
            </div>
            <div className='feature-card-primary'>
              <img src={d} alt="" />
            </div>
          </div>
        </div>
      </div>


      <div className='container newsletter'>
        <div className='newsletter-wrapper'>
          <div className='newsletter-wrapper-info'>
            <div className='newsletter-wrapper-primary'>
              <img src={bg} alt="" />
            </div>
            <div className='newsletter-wrapper-secondary'>
              <h1>Subscribe to our <br /> News and Updates</h1>
              <li>Myrtus is launching soon, so stay up to date with the
                latest news and updates by subscribing to our social
                network feeds and notifications.</li>
              <form>
                <input type="email" placeholder='Email' />
                <a className='btn'>Subscribe</a>
                <p>By clicking the button, you agree to the <a>Privacy policy</a>.</p>
              </form>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}
