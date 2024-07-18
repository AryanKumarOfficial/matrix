import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h3 className="font-bold text-xl mb-2">Company</h3>
                        <p className="text-gray-400">123 Business Rd, Business City, Business State, 12345</p>
                    </div>
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h3 className="font-bold text-xl mb-2">Quick Links</h3>
                        <ul>
                            <li className="mb-2"><Link to="/about" className="hover:underline">About Us</Link></li>
                            <li className="mb-2"><Link to="/services" className="hover:underline">Services</Link></li>
                            <li className="mb-2"><Link to="/contact" className="hover:underline">Contact</Link></li>
                            <li className="mb-2"><Link to="/faq" className="hover:underline">FAQ</Link></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h3 className="font-bold text-xl mb-2">Follow Us</h3>
                        <ul className="flex">
                            <li className="mr-6">
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
                                   className="hover:underline">Facebook</a>
                            </li>
                            <li className="mr-6">
                                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"
                                   className="hover:underline">Twitter</a>
                            </li>
                            <li className="mr-6">
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
                                   className="hover:underline">Instagram</a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"
                                   className="hover:underline">LinkedIn</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h3 className="font-bold text-xl mb-2">Contact Us</h3>
                        <p className="text-gray-400">Email: contact@company.com</p>
                        <p className="text-gray-400">Phone: (123) 456-7890</p>
                    </div>
                </div>
                <div className="mt-8 text-center text-gray-500">
                    &copy; {new Date().getFullYear()} Company Name. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
