import React from 'react';
import './Home.css'
import tree from '../Images/tree.png'
const Home = () => {
    return (
        <div>
            <div className='Home' id='id-home'>
                <div className="greenbox">
                </div>
                <div className="greenboxtwo"></div>

                <div className='home'>
                    <div className="description">
                        <div className="save">
                            <h1>SAVE OUR <br /> PLANET</h1>
                        </div>
                        <div className="spot">
                            <p>
                                Our economy is heavily reliant on tourism and rain-fed agriculture,
                                both of which are<br />vulnerable to climate change. Increased severity
                                of hazardous droughts and heat wave<br />directly harm animals, destroy
                                crops, and devastate rain-fed agriculture, both of which are vulnerable to <br /> climate change.
                                Increased severity of dangerous droughts and heat waves have a direct impact on animals and people's<br />livelihoods.
                            </p>
                        </div>
                        <div className="learn">
                            <button>Learn more</button>
                        </div>
                    </div>

                    <div className='image'>
                        <img src={tree} alt="logo" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;