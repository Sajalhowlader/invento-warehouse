import React, { useEffect, useState } from 'react';
import HomeItems from '../HomeItems/HomeItems';
import SectionOne from '../SectionOne/SectionOne';
import SectionTwo from '../SectionTwo/SectionTwo';


const Home = () => {
    const [homeItems, setHomeItems] = useState([])
    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setHomeItems(data))
    }, [])
    const items = homeItems.slice(0, 6)
    return (
        <div >
            <div className='bg-color'>
                <div className="title-container">
                    <h2 className='section-title'>INVENTORY ITEMS</h2>
                </div>
                <div className='inventory-items-container'>
                    {
                        items.map(item => <HomeItems item={item} />)
                    }
                </div>
            </div>
            <SectionOne />
            <SectionTwo />
        </div>
    );
};

export default Home;