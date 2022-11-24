// switch testimonials on viewport changeroooo
// make him hit the sauce
// on hover pause
// fix the ten million scroll bars
// No more fixed width.
//  -- max-width(1140px);
// ;-;

import './App.css';
import logo from './images/logo.svg';

import menu from './images/icon-hamburger.svg';
import menuClose from './images/icon-close.svg';
import decorationPill from './images/bg-tablet-pattern.svg';

import introIllustration from './images/illustration-intro.svg';
import Testimonial from './Testimonial';

import avatar1 from './images/avatar-ali.png';
import avatar2 from './images/avatar-anisha.png';
import avatar3 from './images/avatar-richard.png';
import avatar4 from './images/avatar-shanai.png';

import { useEffect, useState } from 'react';
import Dropdown from './Dropdown';
import { useMediaQuery } from 'react-responsive';
import Footer from './Footer';

let testimonialConfigs = {
  ali: {
    name: 'Ali Bravo',
    text: '“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”',
    img: avatar1,
  },
  anisha: {
    name: 'Anisha Li',
    text: '“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”',
    img: avatar2,
  },
  richard: {
    name: 'Richard Watts',
    text: '“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”',
    img: avatar3,
  },
  shanai: {
    name: 'Shanai Gough',
    text: '“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”',
    img: avatar4,
  },
};

let next = {
  ali: 'anisha',
  anisha: 'richard',
  richard: 'shanai',
  shanai: 'ali',
};

// let updater;
function App() {
  useEffect(() => {}, []);

  const onDesktop = useMediaQuery({ query: '(min-width: 800px)' });
  const [inMenu, toggleInMenu] = useState(false);
  const [testimonials, setTestimonials] = useState(
    onDesktop
      ? [
          'ali',
          'anisha',
          'richard',
          'shanai',
          'ali',
          'anisha',
          'richard',
          'shanai',
        ]
      : ['ali']
  );
  // const [testimonials, setTestimonials] = useState(['ali', 'richard']);
  const [testimonialStyle, setTestimonialStyle] = useState(
    'testimonial-container'
  );

  useEffect(() => {
    if (onDesktop)
      setTestimonials([
        'ali',
        'anisha',
        'richard',
        'shanai',
        'ali',
        'anisha',
        'richard',
        'shanai',
      ]);
    else setTestimonials(['ali']);
  }, [onDesktop]);

  function handleTransistion(styling) {
    setTestimonialStyle(styling);
    setTimeout(() => {
      setTestimonialStyle('testimonial-container slide-in');
      setTestimonials([next[testimonials[0]]]);
    }, 175);

    let activeDot = document.querySelector('.--viewing');
    activeDot.classList.remove('--viewing');
    if (activeDot.nextElementSibling) {
      activeDot.nextElementSibling.classList.add('--viewing');
    } else {
      document
        .querySelector('.testimonial-indicator')
        .firstElementChild.classList.add('--viewing');
    }
  }

  return (
    <div className="super-container">
      {inMenu ? (
        <Dropdown toggleInMenu={toggleInMenu} inMenu={inMenu}></Dropdown>
      ) : null}
      <div className="decoration-pill-container">
        <img
          src={decorationPill}
          alt="Decoration"
          className="decoration-pill"
        />
      </div>
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        {onDesktop ? (
          <>
            <div className="header-links-container">
              <a href="https://dylanmanfredi.xyz/" className="header-link">
                Pricing
              </a>
              <a href="https://dylanmanfredi.xyz/" className="header-link">
                Product
              </a>
              <a href="https://dylanmanfredi.xyz/" className="header-link">
                About Us
              </a>
              <a href="https://dylanmanfredi.xyz/" className="header-link">
                Careers
              </a>
              <a href="https://dylanmanfredi.xyz/" className="header-link">
                Community
              </a>
            </div>
            <div className="get-started-button-header-container">
              <button className="get-started-button">Get Started</button>
            </div>
          </>
        ) : (
          <div
            className="hamburger-menu-container"
            onClick={() => toggleInMenu(!inMenu)}
          >
            <img
              src={inMenu ? menuClose : menu}
              alt="Menu"
              className="hamburger-menu"
            />
          </div>
        )}
      </header>
      <section className="intro-container">
        <div className="intro-illustration-container">
          <img
            src={introIllustration}
            alt="Dashboards"
            className="intro-illustration"
          />
        </div>
        <div className="intro-content-container">
          <div className="intro-text-container">
            <h1 className="intro-header">
              Bring everyone together to build better products.
            </h1>
            <div className="intro-description">
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </div>
            <div className="decoration-pill-container2">
              <img
                src={decorationPill}
                alt="Decoration"
                className="decoration-pill2"
              />
            </div>
          </div>
          <button className="get-started-button">Get Started</button>
        </div>
      </section>
      <div className="section-divider"></div>
      <main className="second-intro-features-container">
        <div className="second-intro-text-container">
          <div className="intro-header second-header">
            What’s different about Manage?
          </div>
          <div className="intro-description second-intro-description">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </div>
        </div>
        <div className="all-features-container">
          <div className="features-container">
            <div className="feature-header-container feature1-header-container">
              <div className="feature-header feature1-header">
                <div className="feature-number feature1-number">01</div>
                <div className="feature-header-text">
                  Track company-wide progress
                </div>
              </div>
            </div>
            <div className="feature-text feature1-text">
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way done to the
              smallest of details. Never lose sight of the bigger picture again.
            </div>
          </div>
          <div className="features-container">
            <div className="feature-header-container feature2">
              <div className="feature-header">
                <div className="feature-number">02</div>
                <div className="feature-header-text">
                  Advanced built-in reports
                </div>
              </div>
            </div>
            <div className="feature-text">
              Set internal delivery estimates and track progress toward company
              goals. Our customisable dashboard helps you build out the reports
              you need to keep key stakeholders informed.
            </div>
          </div>
          <div className="features-container">
            <div className="feature-header-container feature1-header-container">
              <div className="feature-header feature1-header">
                <div className="feature-number feature1-number">03</div>
                <div className="feature-header-text">
                  Everything you need in one place
                </div>
              </div>
            </div>
            <div className="feature-text feature1-text">
              Stop jumping from one service to another to communicate, store
              files, track tasks and share documents. Manage offers an
              all-in-one team productivity solution.
            </div>
          </div>
        </div>
      </main>
      <div className="section-divider"></div>
      <section className="testimonials-container">
        {onDesktop ? (
          <div
            className="fade-out"
            onMouseEnter={() =>
              setTestimonialStyle('testimonial-container --pause')
            }
            onMouseLeave={() => setTestimonialStyle('testimonial-container')}
          ></div>
        ) : null}
        <header className="testimonials-header">What they've said</header>
        <div className="all-testimonials">
          {testimonials.map((person, i) => (
            <Testimonial
              person={testimonialConfigs[person].name}
              text={testimonialConfigs[person].text}
              img={testimonialConfigs[person].img}
              handleTransistion={handleTransistion}
              testimonialStyle={testimonialStyle}
              key={i}
            ></Testimonial>
          ))}
        </div>
      </section>
      {onDesktop ? null : (
        <div className="testimonial-indicator-container">
          <div className="testimonial-indicator">
            <div className="testimonial-dot --viewing"></div>
            <div className="testimonial-dot"></div>
            <div className="testimonial-dot"></div>
            <div className="testimonial-dot"></div>
          </div>
        </div>
      )}
      <div className="get-started-button-container">
        <button className="get-started-button">Get Started</button>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
