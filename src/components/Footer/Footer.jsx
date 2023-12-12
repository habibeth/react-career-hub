import { Link } from 'react-router-dom';
import logoFooter from '../../assets/icons/social.png'

const Footer = () => {
    return (
        <footer className="mt-10 p-10 bg-zinc-900 text-base-content text-white">
            <div className="footer max-w-6xl mx-auto">
                <aside>
                    <h2 className="text-3xl font-extrabold">CareerHub</h2>
                    <p className='mt-5 mb-5'>There are many variations of passages <br /> of Lorem Ipsum , but the majority have<br /> suffered alteration in some form.</p>
                    <img src={logoFooter} alt="" />
                </aside>
                <nav>
                    <header className="footer-title">Company</header>
                    <Link className="link link-hover mt-2">About Us</Link>
                    <Link className="link link-hover mt-2">Work</Link>
                    <Link className="link link-hover mt-2">Latest News</Link>
                    <Link className="link link-hover mt-2">Careers</Link>
                </nav>
                <nav>
                    <header className="footer-title">Product</header>
                    <Link className="link link-hover mt-2">Prototype</Link>
                    <Link className="link link-hover mt-2">Plans & Pricing</Link>
                    <Link className="link link-hover mt-2">Customers</Link>
                    <Link className="link link-hover mt-2">Integrations</Link>
                </nav>
                <nav>
                    <header className="footer-title">Support</header>
                    <Link className="link link-hover mt-2">Help Desk</Link>
                    <Link className="link link-hover mt-2">Sales</Link>
                    <Link className="link link-hover mt-2">Become a Partner</Link>
                    <Link className="link link-hover mt-2">Developers</Link>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;