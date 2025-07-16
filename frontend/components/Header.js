import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <nav className="container mx-auto flex justify-between">
                <Link href="/">
                    <a className="font-bold text-xl">Maurice Allen</a>
                </Link>
                <div>
                    <Link href="/#projects">
                        <a className="ml-4">Projects</a>
                    </Link>
                    <Link href="/#experience">
                        <a className="ml-4">Experience</a>
                    </Link>
                    <Link href="/#skills">
                        <a className="ml-4">Skills</a>
                    </Link>
                    <Link href="/#certifications">
                        <a className="ml-4">Certifications</a>
                    </Link>
                    <Link href="/#education">
                        <a className="ml-4">Education</a>
                    </Link>
                    <Link href="/#blog">
                        <a className="ml-4">Blog</a>
                    </Link>
                    <Link href="/contact">
                        <a className="ml-4">Contact</a>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
