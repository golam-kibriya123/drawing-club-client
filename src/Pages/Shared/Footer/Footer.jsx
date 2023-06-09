import { Link } from "react-router-dom";
import underLine from "../../../assets/Logo/PNG/under-line.png"

const Footer = () => {
    return (
        <div>

            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <Link className="text-xl text-primary relative font-bold mb-5" to={'/'}>
                        Drawing Club
                        <img src={underLine} alt="" className=" absolute -bottom-2 w-[90%]" />
                    </Link>
                    <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <div>
                    <p>Copyright © 2023 - All right reserved by HIGH SCHOOL DRAWING CLUB TEAM</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;