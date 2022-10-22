import React from 'react';

const About = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'Right',
                alignItems: 'Right',
                height: '100vh'
            }}>

            <div>
                <div className="greetings">Hello kind people</div><div className="line"></div>
                <div className="save">SAVE OUR</div>
                <div className="planet">PLANET</div>
                <div className="description">
                    <p>
                        Our economy is largely dependent on tourisn and
                        rain-fed agriculture, both susceptible to climate<br /> change.
                        increased intensity of hazardous droughts and heat waves directly harm animals,
                        destroy crops<br />  and wreck havoc on
                        rain-fed agriculture, both susceptible to climate change.
                        increased intensity of<br />  hazardous droughts and heat waves directly harm animals,
                        on people’s livelihoods.
                    </p>
                </div>
                <div>
                    <button className="learn">Learn more</button>
                </div>
            </div>
            <div className="photo">
                <img src={tree} />

            </div>

            <div className="more">OVERVIEW</div>

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