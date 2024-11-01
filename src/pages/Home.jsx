import React, { useRef } from 'react';
import Carou from '../components/Carou';
import Header from '../components/Header';
import madhack from '../assets/Madhacklogo.svg';
import { Box, Typography } from '@mui/material';
import MadeHackTimeline from '../components/TimeLine';
import About from '../components/About';
import Prizecard from '../components/Prizecard';
import Faq from '../components/Faq';
import Footer from '../components/Footer';

export default function Home() {
  const homeref = useRef(null);
  const aboutref = useRef(null);
  const timelineref = useRef(null);
  const prizeref = useRef(null); // Fixed typo here
  const faqref = useRef(null);

  const scrollToSection = (section) => {
    switch (section) {
      case 'Home': // Ensure this matches the section names used in Header
        homeref.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'About':
        aboutref.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Rooms':
        timelineref.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Contact Us': // Fixed typo here
        prizeref.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Faq':
        faqref.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div>
        <Header scrollToSection={scrollToSection} />

        <div>


          <section ref={homeref} style={{
            height: '850px', display: 'flex', justifyContent: 'center', alignItems: 'center',background: 'linear-gradient(To bottom, #000000 0%, #050A30 100%)',
          }}>
            

            <div style={{
              display: 'flex',
              alignItems: 'center'
            }}>

              <Box
                sx={{
                  

                  width: 900,
                  height: 900,
                  borderRadius: 100,
                  //bgcolor: '#0f1e64',
                  // backgroundImage: `url(${madhack})`, // Add your image URL here
                  backgroundSize: '500px', // Ensures the image covers the entire box
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  opacity:'0.8',
                  transition: 'background-size 0.5s ease, opacity 0.5s ease',
                  '&:hover': {
                    bgcolor: '',
                    backgroundSize: '600px',
                    opacity:'0.5'
                  },
                }}
              />


            </div>

          </section>
          <div ref={aboutref} style={{ height: '840px', backgroundColor: '#050A30', position: '', paddingTop: '100px' }}>
            <div style={{ width: 'full', textAlign: 'center' }}>
              <Typography color='white'
                sx={{
                  fontSize: '60px',    // Set font size
                  fontFamily: 'Times new roman'  // Set font family
                }}
              >
                Intrduction

              </Typography>
              <About />
            </div>
          </div>
          <div ref={timelineref} style={{ backgroundColor: '#050A30', padding: '20px', margin: '0', paddingTop: '100px' }}>
            <div style={{ width: 'full', textAlign: 'center' }}>
              <Typography color='white'
                sx={{
                  fontSize: '50px',    // Set font size
                  fontFamily: 'Times new roman'  // Set font family
                }}
              >
              

              </Typography>
            </div>
            <div>
              <MadeHackTimeline />
            </div>
          </div> {/* Added missing timeline section */}
          <div ref={prizeref} style={{ backgroundColor: '#050A30', paddingTop: '100px', textAlign: 'center' }}>
            <Typography color='white'
              sx={{
                fontSize: '60px',    // Set font size
                fontFamily: 'Times new roman'  // Set font family
              }}
            >
              prizes

            </Typography>
            <Prizecard />
            <div style={{ backgroundColor: 'white' }}>


              <h2 style={{ fontFamily: 'times new roman',fontSize:'40px' }}>Our Partners</h2>
              <Carou />

            </div>

          </div>
          <div ref={faqref} style={{ height: 'auto', backgroundColor: '#050A30', paddingTop: '100px' }}>
          <div style={{ width: 'full', textAlign: 'center' }}>
              <Typography color='white'
                sx={{
                  fontSize: '50px',    // Set font size
                  fontFamily: 'Times new roman'  // Set font family
                }}
              >
                FAQ

              </Typography>
            </div>

            <div style={{
              display: 'flex',          // Enables Flexbox
              justifyContent: 'center', // Centers horizontally
              alignItems: 'center',     // Centers vertically
              height: 'auto',          // Keeps the div size the same
              width: '800px',
              margin: '0 auto',
              paddingBottom:'300px'         // Ensures the div is centered within the parent container
            }}>
              <Faq />
            </div>


          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}
