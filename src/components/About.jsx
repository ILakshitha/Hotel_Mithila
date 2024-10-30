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
                            <h3 style={{ fontFamily: 'monospace', color: 'white', fontSize: '40px' }}> A private, cozy hotel within a walking distance
                            </h3>
                            Hotel Milton is a cozy and traditional hotel in the centre of Jyväskylä, right near by the Travel Center. The most important sights, museums and the city theatre are all just within a short walk. Also the walking street is only a few blocks away with its restaurants, cafés and shopping possibilities.

Hotel Milton is not part of any large hotel chains, instead it has been for the past five decades a family-owned private hotel. This enables the friendly and customized service. Also the atmosphere has been carefully built to be cozy, warm and welcoming. All the rooms are decorated to be personal and comfortable.

The hotel has free wi-fi, 24h reception, and a lobby bar.</p>

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
