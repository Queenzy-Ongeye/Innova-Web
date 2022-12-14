import React from 'react';
import treepic from '../Images/treepic.png'
import desktop from '../Images/desktop.png'
import './Product.css'

const Product = () => {
    return (
        <div id='work'>
            <div className='product'>
                <div className="words">
                    <h1>Our Product</h1>
                    <p>Novva is an alert device that is used to perform forest<br /> monitoring actions
                        designed for KFS that offers real time <br /> analysis and classification  from live sound recordings and <br />notifies
                        the ranges incase the registered sound corresponds<br /> to the sounds classified as dangerous sounds.
                    </p>
                    <div className="learn">
                        <button>Learn More.</button>
                    </div>
                </div>
                <div className="pictures">
                    <div className="tree">
                        <img src={treepic} />
                    </div>
                    <div className="rectangle"></div>
                    <div className="rectangletwo"></div>
                </div>

            </div>
            <h1 className="headwork">How does it work ?</h1>
            <div className="desktop">
                <img src={desktop} alt="desk" />
            </div>
        </div>
    );
}
export default Product;