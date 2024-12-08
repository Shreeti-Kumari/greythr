import React from 'react'
import './Home7.css'

const Home7 = () => {

    const content = [
        {
            img: 'https://www.datocms-assets.com/40521/1715242968-greythr-academy.png?auto=format&dpr=0.43&fit=max&w=560',
            heading: 'greytHR Academy',
            para: 'Only academy offering courses for HR & Payroll in India'
        },
        {
            img: 'https://www.datocms-assets.com/40521/1715243035-greytribe-community.png?auto=format&dpr=0.43&fit=max&w=560',
            heading: 'greytribe Community',
            para: 'Membership to nationwide online HR community'
        },
        {
            img: 'https://www.datocms-assets.com/40521/1715243081-greythr-resource-library.png?auto=format&dpr=0.43&fit=max&w=560',
            heading: 'greytHR Resource Library ',
            para: 'Blogs, guides & templates for all things HR'
        },
        {
            img: 'https://www.datocms-assets.com/40521/1715243121-hr-garden.png?auto=format&dpr=0.43&fit=max&w=560',
            heading: 'HR Garden',
            para: 'Evergreen knowledge base of topics in core HR, payroll, workforce management and more'
        },
        {
            img: 'https://www.datocms-assets.com/40521/1715243170-greytfm-podcasts.png?auto=format&dpr=0.43&fit=max&w=560',
            heading: 'greytFM Podcasts',
            para: 'Podcasts by HR experts on trending HR topics'
        },
        {
            img: 'https://www.datocms-assets.com/40521/1715243219-parichay-webinars.png?auto=format&dpr=0.43&fit=max&w=560',
            heading: 'Parichay Webinars',
            para: 'Expert webinars on trending HR and compliance topics'
        },
    ]
    return (
        <div>
            <div className='topPart'>
                <h2>Get full access to the greytHR <span>Ecosystem</span></h2>
                <p>greytHR users are backed by our strong community, led by industry thought leaders and practitioners</p>
            </div>
            <div className='home7cards'>
                {
                    content.map((item, idx) => {
                        return (
                            <div key={idx} className="home7card">
                                <div className="image">
                                    <img src={item.img} alt="" />
                                </div>
                                <h2>{item.heading}</h2>
                                <p>{item.para}</p>
                                <a href="#">Know more</a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home7
