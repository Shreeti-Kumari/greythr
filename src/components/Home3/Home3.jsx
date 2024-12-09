import React from 'react'
import './Home3.css'

const Home3 = () => {

    const data = [
        {
            id: 1,
            img: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-newspaper"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path><path d="M18 14h-8"></path><path d="M15 18h-5"></path><path d="M10 6h8v4h-8V6Z"></path></svg>,
            headline: 'You don’t have an HRMS, and running HR ops on Sheets',
            para: 'Use one single app for all HR and Payroll Processes, including workforce management, employee relations, leave and attendance'
        },
        {
            id: 2,
            img: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-file-clock"><path d="M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><circle cx="8" cy="16" r="6"></circle><path d="M9.5 17.5 8 16.25V14"></path></svg>,
            headline: 'Your payroll solution is unstable, requires hours of manual work',
            para: 'Ensure faster and accurate checkouts. Implement complex policies. Automate hours of manual payroll processes and remove any manual error'
        },
        {
            id: 3,
            img: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-hand-coins"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"></path><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"></path><path d="m2 16 6 6"></path><circle cx="16" cy="9" r="2.9"></circle><circle cx="6" cy="5" r="3"></circle></svg>,
            headline: 'Most HR and payroll tasks are manual, clerical, and take hours to...',
            para: 'Give access to the best-in-category leave management solution for efficient leave management'
        },
        {
            id: 4,
            img: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar-clock"><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path><path d="M16 2v4"></path><path d="M8 2v4"></path><path d="M3 10h5"></path><path d="M17.5 17.5 16 16.3V14"></path><circle cx="16" cy="16" r="6"></circle></svg>,
            headline: 'You’re still using old ways to capture and track leaves and...',
            para: '150+ basic and advanced admin reports covering Leave and Attendance, Payroll, MIS, Claims, Welfare and State-level Policies'
        },
    ]

    return (
        <div className='home3'>
            <div className='topPart'>
                <h2>Modern <span>HR and Payroll </span> are Complex</h2>
                <p>greytHR solves some of the most common HR and Payroll issues that slow down your business.</p>
            </div>
            <div className='cards'>
                {data.map((item, idx) => {
                    return (
                        <div key={idx} className='card'>
                            <div className='img'>
                                {item.img}
                            </div>
                            <div className='headline'>{item.headline}</div>
                            <div className='para'>{item.para}</div>
                        </div>
                    )
                })}
            </div>
            <div className='card card2'>
                <div className='img2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-tablet"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect><line x1="12" x2="12.01" y1="18" y2="18"></line></svg>
                </div>
                <h2 className='headline'>Your employees need a self-serving portal (ESS), ON MOBILE!</h2>
                <p className='para'>Use greytHR’s ‘mobile-first’ Employee Self Service Portal (ESS) enables common HR tasks for employees and managers. Access payslips, manage leaves, add expense claims and so much more. All on mobile</p>
            </div>
            <div className="btns">
                <button>Explore HRMS</button>
                <button>Explore Payroll</button>
            </div>
        </div >
    )
}

export default Home3
