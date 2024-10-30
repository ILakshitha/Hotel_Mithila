import React from 'react';
import madhack2 from '../assets/hacker-logo.png';

export default function About() {
    return (
        <div>

            <div style={{ display: 'flex' }}>
                <div>
                    <img src={madhack2} alt="MadeHack Image" style={{ height: '700px', width: 'auto', opacity: 0.5 }} />
                </div>
                <div>
                    <div>
                        <p style={{ color: 'white', fontSize: '20px', padding: '20px', textAlign: 'left' }}>
                            <h3 style={{ fontFamily: 'monospace', color: 'white', fontSize: '40px' }}> What is MADHACK </h3>
                            Introducing Sri Lanka’s first Mobile Application Development Hackathon, the IEEE Student Branch of UCSC proudly presents 'MadHack',
                            an inter-university hackathon followed by a series of workshops. MadHack aims to let the participants put their creativity and
                            innovation to the test by giving them the opportunity to develop in any platform of choice.</p>

                    </div>



                    <div>
                        <p style={{ color: 'white', fontSize: '20px', padding: '20px', textAlign: 'left' }}>
                            <h3 style={{ fontFamily: 'monospace', color: 'white', fontSize: '40px' }}> Elevating Mobile App Development </h3>
                            MadHack is a premier hackathon and workshop series for mobile app development in Sri Lanka.
                             Participants can showcase their creativity and learn from industry experts. Whether you're a beginner or experienced developer, 
                             MadHack offers something for everyone. Join us and take the next step in your mobile app development journey.</p>

                    </div>
                </div>
            </div>


        </div>
    )
}
