import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <div className='homeCont'>
            <div className='hire'>HIRE - TO - RETIER</div>
            <div className='engage'>
                <h1>Engage, appraise and delight <h1> every employee!</h1></h1>
                <p>The most trusted full-suite HRMS for your people operations</p>
            </div>
            <div className='homeCards'>
                <div className='homeCard1'>
                    <img src="https://www.greythr.com/static/04f0777c2b34c651547f6b0bbf7f91cb/538f4/Countries.webp" alt="" />
                    <div className='details'>
                        <p className='counts'>25+</p>
                        <p className='countsDetails'>Countries</p>
                    </div>
                </div>
                <div className='homeCard2'>
                    <img src="https://www.greythr.com/static/a0d554b031e5d6f8a57e0406b9e3ee16/538f4/Companies.webp" />
                    <div className='details'>
                        <p className='counts'>27,000+</p>
                        <p className='countsDetails'>Companies</p>
                    </div>
                </div>
                <div className='homeCard3'>
                    <img src="https://www.greythr.com/static/d9a9b8c52e2f256861fe657331122cca/538f4/Users.webp" alt="" />
                    <div className='details'>
                        <p className='counts'>25,00,000+</p>
                        <p className='countsDetails'>Users</p>
                    </div>
                </div>
            </div>

            <div className='btns'>
                <button>Start a greytHR Free Account</button>
                <button className='btn2'>Talk to Us</button>
            </div>
        </div>
    )
}

export default Home
