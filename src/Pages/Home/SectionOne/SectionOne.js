import React from 'react';
import oneImg from '../../../images/about-1.jpg'
const SectionOne = () => {
    return (
        <div className='one-container'>
            <div className="title-container">
                <h2 className='section-title one'>FOR CUSTOMER</h2>
            </div>
            <div className='one-info-Container'>
                <div className="one-info">
                    <h3>At <span>Warehouse</span>, I provide a unique solution for warehousing space for business and consumers</h3>
                    <p>Warehousing is an important piece of your retail supply chain. While its not the sexiest of subjects, warehousing and inventory storage affect everything from sourcing raw materials and, efficiently managing inventory, to getting orders delivered to customers on time.
                        <br />
                        <br />
                        Though the principles of warehousing have not changed much over the years, warehousing solutions have evolved a lot.

                        With new technologies, urbanization, and the ever-growing world of online shopping, warehousing has never been a hotter topic — so much so that there has even been a shortage of warehouse space and on-demand warehousing popping up.

                    </p>
                </div>
                <div className="oneImg">
                    <img src={oneImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SectionOne;