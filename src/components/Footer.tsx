import logoTxt from '../assets/logo-text.png'

const Footer = () => {
    return (
        <footer className="border-t border-gray-100 bg-white">
            <div className="mx-auto container py-12">
                <div className="flex justify-between gap-10">
                    <div>

                        <img src={logoTxt} alt="logo-text" />

                        <p className="mt-4 max-w-md text-sm leading-6 text-[#717b87]">
                            Curated tools, technologies, and resources for developers building
                            modern software.
                        </p>

                        <div className="mt-5 flex gap-5 text-sm font-medium">
                            <a
                                href="#"
                                className="text-[#4a515a] transition hover:text-pink-500"
                            >
                                GitHub
                            </a>

                            <a
                                href="#"
                                className="text-[#4a515a] transition hover:text-pink-500"
                            >
                                Twitter
                            </a>

                            <a
                                href="#"
                                className="text-[#4a515a] transition hover:text-pink-500"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-wide text-[#26292e]">
                            Product
                        </h3>

                        <ul className="mt-4 space-y-3 text-sm">
                            <li>
                                <a
                                    href="#"
                                    className="text-[#626b76] transition hover:text-pink-500"
                                >
                                    Home
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="text-[#626b76] transition hover:text-pink-500"
                                >
                                    Technologies
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="text-[#626b76] transition hover:text-pink-500"
                                >
                                    Projects
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-wide text-[#26292e]">
                            Company
                        </h3>

                        <ul className="mt-4 space-y-3 text-sm">
                            <li>
                                <a
                                    href="#"
                                    className="text-[#626b76] transition hover:text-pink-500"
                                >
                                    About
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="text-[#626b76] transition hover:text-pink-500"
                                >
                                    Contact
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="text-[#626b76] transition hover:text-pink-500"
                                >
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-wide text-[#26292e]">
                            Legal
                        </h3>

                        <ul className="mt-4 space-y-3 text-sm">
                            <li>
                                <a
                                    href="#"
                                    className="text-[#626b76] transition hover:text-pink-500"
                                >
                                    Privacy Policy
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="text-[#626b76] transition hover:text-pink-500"
                                >
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-14 flex justify-between gap-4 border-t border-gray-200 pt-7 text-xs text-[#4a515a] ">
                    <p>© 2026 Dev Stack. All rights reserved.</p>

                    <div className="flex gap-6">
                        <a href="#" className="transition hover:text-pink-500">
                            Privacy
                        </a>

                        <a href="#" className="transition hover:text-pink-500">
                            Terms
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
