import React from 'react';
import oneImg from '../../../images/about-1.jpg'
const SectionOne = () => {
    return (
        <div>
            <h1>FOR CUSTOMER</h1>
            <div className='one-Container'>
                <div className="one-info">
                    <h3>At <span>Warehouse</span>, I provide a unique solution for warehousing space for business and consumers</h3>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.
                        <br />
                        <br />
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.

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