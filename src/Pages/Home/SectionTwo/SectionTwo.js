import React from 'react';
import imgOne from '../../../images/provite-1.jpg'
import imgTwo from '../../../images/provite-2.jpg'
import imgThree from '../../../images/provite-3.jpg'
import imgFour from '../../../images/provite-4.jpg'
const SectionTwo = () => {
    return (
        <div>
            <h2>Services</h2>
            <div className="two-container">
                <div className="two-info">
                    <img src={imgThree} alt="" />
                    <h4>Order Management</h4>
                    <p>Management all order from the customer.My goal is to happy all my customer.</p>
                    <button>More</button>
                </div>
                <div className="two-info">
                    <img src={imgOne} alt="" />
                    <h4>Distribution </h4>
                    <p>Distribution all order from the customer.My goal is to happy all my customer.</p>
                    <button>More</button>
                </div>
                <div className="two-info">
                    <img src={imgFour} alt="" />
                    <h4>Customer Engagement</h4>
                    <p>Management all order from the customer.My goal is to happy all my customer.</p>
                    <button>More</button>
                </div>
                <div className="two-info">
                    <img src={imgTwo} alt="" />
                    <h4>Value Added Service</h4>
                    <p>Management all order from the customer.My goal is to happy all my customer.</p>
                    <button>More</button>
                </div>
            </div>
        </div>
    );
};

export default SectionTwo;