import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.svg';
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='lists'>
                <div className="list">
                    <h4>Product</h4>
                    <a href="#">HR Software</a>
                    <a href="">Payroll Software</a>
                    <a href="">Leave Management</a>
                    <a href="#">Attendance Management</a>
                    <a href="">Performance Management</a>
                    <a href="">Employee Self Service</a>
                    <a href="">Employee Engagement</a>
                    <a href="">Unite Marketplace</a>
                    <a href="">Recruitment Software</a>
                    <a href="">greytHR Service Status</a>
                </div>
                <div className="list">
                    <h4>HR & Payroll Administration</h4>
                    <a href="#">What is HRMS?</a>
                    <a href="">What is Payroll?</a>
                    <a href="">What is Statutory Compliance?</a>
                    <a href="#">Guide to Leave Management</a>
                    <a href="">Guide to Attendance Management</a>
                    <a href="">Holiday Lists 2023</a>
                    <a href="">Holiday Lists 2024</a>
                    <a href="">Holiday Lists 2025</a>
                    <a href="">Gender Inclusivity Report 2024</a>
                </div>
                <div className="list">
                    <h4>Resources</h4>
                    <a href="#">Blogs</a>
                    <a href="">Guides</a>
                    <a href="">Templates</a>
                    <a href="#">Webinars</a>
                    <a href="">Podcasts</a>
                    <a href="">Academy</a>
                    <a href="">Community Forums</a>
                    <a href="">Statutory Wiki</a>
                    <a href="">Case Studies</a>
                    <a href="">HR Garden</a>
                </div>
                <div className="list">
                    <h4>greytHR Customers</h4>
                    <a href="#">greytHR Help</a>
                    <a href="">Login</a>
                    <a href="">Videos</a>
                    <img src="https://www.greythr.com/static/e1eac8a442862a5bf475771bfcd1bc10/0a0f0/play-store.webp" alt="" />
                    <img src="https://www.greythr.com/static/2e4d2edcf2b2c624db7f03bc05fa1bed/305ba/app-store.webp" alt="" />
                </div>
                <div className="list">
                    <h4>Company</h4>
                    <a href="#">About</a>
                    <a href="">Customers</a>
                    <a href="">Payroll Service Providers</a>
                    <a href="#">Partners</a>
                    <a href="">Plans & Pricing</a>
                    <a href="">Newsroom</a>
                    <a href="">Unite Marketplace</a>
                    <a href="">Careers</a>
                    <a href="">Contact us</a>
                </div>
                <div className="list">
                    <h4>Competitors</h4>
                    <a href="#">greytHR vs Keka</a>
                </div>
            </div>
            <div className='footerAd'>
                <div className='footerleft'>
                    <img className='footerlogo' src={logo} alt="" />
                    <img src="https://www.greythr.com/static/79d2a3ae3dd5cfb640d82079243d7d8e/dd97c/new-gdpr.webp" alt="" />
                    <img src="https://www.greythr.com/static/8967dde7d7f3624171e8b0aaf01c1ffa/ce5de/soc2.webp" alt="" />
                    <img src="https://www.greythr.com/static/d2acb93764624188e7d67021e39d9809/887ba/iso.webp" alt="" />
                </div>
                <div className="footerright">
                    {/* <FaWhatsapp className='whatsapp'/> */}
                    {/* <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDEiIHZpZXdCb3g9IjAgMCA0MCA0MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zNC4xNzE4IDUuODQwNjFDMzAuNDEyMSAyLjA3NjExIDI1LjQxMTggMC4wMDE5MDk5NCAyMC4wODQgMEM5LjEwNTY3IDAgMC4xNzA5NCA4LjkzMzc4IDAuMTY3MTIgMTkuOTE1QzAuMTY1MjEgMjMuNDI1NCAxLjA4Mjk0IDI2Ljg1MTkgMi44MjU3NyAyOS44NzE2TDAgNDAuMTkyOUwxMC41NTgyIDM3LjQyMzRDMTMuNDY3IDM5LjAxMDcgMTYuNzQyNiAzOS44NDYyIDIwLjA3NTQgMzkuODQ3MkgyMC4wODRDMzEuMDYwNCAzOS44NDcyIDM5Ljk5NjIgMzAuOTEyNCA0MCAxOS45MzEyQzQwLjAwMTkgMTQuNjA5MiAzNy45MzI0IDkuNjA2MDggMzQuMTcxOCA1Ljg0MTU3VjUuODQwNjFaTTIwLjA4NCAzNi40ODM4SDIwLjA3NzNDMTcuMTA3MyAzNi40ODI5IDE0LjE5MzggMzUuNjg0NCAxMS42NTE3IDM0LjE3NjZMMTEuMDQ3MSAzMy44MTc2TDQuNzgxNTYgMzUuNDYxTDYuNDUzNzEgMjkuMzUyTDYuMDYwMjYgMjguNzI1NkM0LjQwMzM4IDI2LjA4OTkgMy41Mjc2NyAyMy4wNDM0IDMuNTI5NTggMTkuOTE2QzMuNTMzNCAxMC43ODkzIDEwLjk1OTMgMy4zNjM0MSAyMC4wOTA4IDMuMzYzNDFDMjQuNTEyMiAzLjM2NTMyIDI4LjY2ODMgNS4wODkwNiAzMS43OTM5IDguMjE4NUMzNC45MTk2IDExLjM0NyAzNi42Mzk0IDE1LjUwNjkgMzYuNjM3NiAxOS45MjkzQzM2LjYzMzcgMjkuMDU3IDI5LjIwNzkgMzYuNDgyOSAyMC4wODQgMzYuNDgyOVYzNi40ODM4Wk0yOS4xNjM5IDI0LjA4NjNDMjguNjY2MyAyMy44MzcxIDI2LjIxOTggMjIuNjMzOCAyNS43NjMyIDIyLjQ2NzdDMjUuMzA2OCAyMi4zMDE0IDI0Ljk3NTQgMjIuMjE4NCAyNC42NDQgMjIuNzE2OUMyNC4zMTI3IDIzLjIxNTQgMjMuMzU4NyAyNC4zMzY2IDIzLjA2ODMgMjQuNjY3OUMyMi43NzggMjUuMDAwMiAyMi40ODc3IDI1LjA0MTMgMjEuOTkwMSAyNC43OTJDMjEuNDkyNyAyNC41NDI4IDE5Ljg4OTIgMjQuMDE3NiAxNy45ODc5IDIyLjMyMjRDMTYuNTA4NyAyMS4wMDI3IDE1LjUwOTcgMTkuMzczNiAxNS4yMTk0IDE4Ljg3NUMxNC45MjkxIDE4LjM3NjYgMTUuMTg4OSAxOC4xMDcyIDE1LjQzNzEgMTcuODU5OUMxNS42NjA2IDE3LjYzNjQgMTUuOTM0NyAxNy4yNzgzIDE2LjE4MzkgMTYuOTg4QzE2LjQzMzIgMTYuNjk3NyAxNi41MTUzIDE2LjQ4OTYgMTYuNjgxNCAxNi4xNTgxQzE2Ljg0NzcgMTUuODI1OCAxNi43NjQ2IDE1LjUzNTYgMTYuNjQwNCAxNS4yODYyQzE2LjUxNjIgMTUuMDM3IDE1LjUyMTIgMTIuNTg3NCAxNS4xMDU4IDExLjU5MTRDMTQuNzAxOCAxMC42MjEyIDE0LjI5MTIgMTAuNzUzIDEzLjk4NjYgMTAuNzM2OEMxMy42OTYyIDEwLjcyMjQgMTMuMzY0OSAxMC43MTk2IDEzLjAzMjYgMTAuNzE5NkMxMi43MDAyIDEwLjcxOTYgMTIuMTYxNiAxMC44NDM3IDExLjcwNTEgMTEuMzQyMkMxMS4yNDg3IDExLjg0MDcgOS45NjMyMyAxMy4wNDQ5IDkuOTYzMjMgMTUuNDkzNEM5Ljk2MzIzIDE3Ljk0MiAxMS43NDYyIDIwLjMwOTQgMTEuOTk1NCAyMC42NDE4QzEyLjI0NDcgMjAuOTc0MSAxNS41MDQ5IDI2LjAwMDEgMjAuNDk2NiAyOC4xNTY0QzIxLjY4MzcgMjguNjY5MiAyMi42MTA5IDI4Ljk3NTggMjMuMzMzOCAyOS4yMDVDMjQuNTI1NyAyOS41ODQxIDI1LjYxMDQgMjkuNTMwNyAyNi40NjggMjkuNDAyN0MyNy40MjQgMjkuMjU5NCAyOS40MTIyIDI4LjE5ODQgMjkuODI2NyAyNy4wMzYyQzMwLjI0MTEgMjUuODc0IDMwLjI0MTEgMjQuODc3IDMwLjExNyAyNC42Njk4QzI5Ljk5MjkgMjQuNDYyNiAyOS42NjA2IDI0LjMzNzQgMjkuMTYzIDI0LjA4ODJMMjkuMTYzOSAyNC4wODYzWiIgZmlsbD0iIzI1RDM2NiIvPgo8L3N2Zz4K" alt="" /> */}
                    <p>Message us on WhatsApp</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
