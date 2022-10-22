import React from 'react';
import './About.css'
const About = () => {
    return (
        <div id='about'>
            <h2 className='over'>Overview</h2>
            <div className="content">
                <div className="card">
                    <div className="eclipse"></div>
                    <h2 className="headtop">PROBLEM STATEMENT</h2>
                    <p className="problem">
                        How might we curb deforestation in community forest to reduce the emission
                        of carbon dioxide in order to mitigate the effects of global warming?
                    </p>
                </div>
                <div className="card">
                    <div className="eclipse"></div>
                    <h2 className="headtop">FINDINGS </h2>
                    <p className="problem">
                        How might we curb deforestation in community forest to reduce the emission
                        of carbon dioxide in order to mitigate the effects of global warming?
                    </p>
                </div>
                <div className="card">
                    <div className="eclipse"></div>
                    <h2 className="headtop">POSSIBLE SOLUTION </h2>
                    <p className="problem">
                        Create a sound alert system, that assesses recorded sounds and decide upon the
                        nature of these segments, and alerts rangers incase the sound recorded corresponds
                        to the dangerous sound.
                    </p>
                </div>
            </div>
        </div >

    );
};

export default About;