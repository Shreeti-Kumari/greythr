import React from 'react'
import './Home4.css'

const Home4 = () => {
    const users = [
        {
            img: 'https://www.datocms-assets.com/40521/1731476644-cio_title.png?auto=format&dpr=0.5&fit=max&w=128',
            role: 'CIO'
        },
        {
            img: 'https://www.datocms-assets.com/40521/1731476644-chro_title.png?auto=format&dpr=0.5&fit=max&w=128',
            role: 'CHRO'
        },
        {
            img: 'https://www.datocms-assets.com/40521/1731495380-payroll_title.png?auto=format&dpr=0.5&fit=max&w=128',
            role: 'Payroll'
        },
        {
            img: 'https://www.datocms-assets.com/40521/1731495422-managers_title.png?auto=format&dpr=0.5&fit=max&w=128',
            role: 'Manager'
        },
        {
            img: 'https://www.datocms-assets.com/40521/1731495354-employees_title.png?auto=format&dpr=0.5&fit=max&w=128',
            role: 'Employees'
        }
    ]
    return (
        <div className='home4'>
            <div className='topPart'>
                <h2>Everyone gets <span>value</span> from day 1</h2>
                <p>A platform loved by everyone in your company - by employers and employees</p>
            </div>
            <div className="home4cards">
                {users.map((item, idx) => {
                    return (
                        <div key={idx} className="home4card">
                            <img src={item.img} />
                            <p>{item.role}</p>
                        </div>
                    );
                })}
            </div>
            <div className="cardDetails">
                <div className="left">
                    <div className="up">
                        <p>Time-consuming approvals.</p>
                        <p>Challenges in performance monitoring.</p>
                        <p>Administrative overload</p>
                    </div>
                    <div className="down">
                        <h2>with greythr</h2>
                        <p>Team Managers can finally take it easy! Streamline team management (attendance, leaves, performance, shifts) and improve team communication. Look at team reports and increase overall productivity. Run timely appraisals, manage shifts, and simplify approval processes.</p>
                    </div>
                </div>
                <div className="right">
                    <img src="https://www.datocms-assets.com/40521/1731476644-chro.png?auto=format&w=1782" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home4
