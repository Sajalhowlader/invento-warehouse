import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Lodaing/Loading';
import Banner from '../Banner/Banner';
import HomeItems from '../HomeItems/HomeItems';
import SectionOne from '../SectionOne/SectionOne';
import SectionTwo from '../SectionTwo/SectionTwo';


const Home = () => {
    const navigate = useNavigate()
    const handleSeeMore = () => {
        navigate("/allItems")
    }
    const [homeItems, setHomeItems] = useState([])
    useEffect(() => {
        fetch('https://aqueous-brook-47293.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setHomeItems(data))

    }, [])
    if (homeItems.length === 0) {
        return <Loading />
    }
    const items = homeItems.slice(0, 6)

    return (
        <div >
            <Banner />
            <div className='bg-color'>
                <div className="title-container">
                    <h2 className='section-title'>INVENTORY ITEMS</h2>
                </div>
                <div className="inventory-items-container">
                    <div className='single-inventory-items-container'>
                        {
                            items.map(item => <HomeItems key={item._id} item={item} />)
                        }
                    </div>
                    <div className="see-more">
                        <button onClick={handleSeeMore}>See More...</button>
                    </div>
                </div>

            </div>
            <SectionOne />
            <SectionTwo />
        </div>
    );
};

export default Home;