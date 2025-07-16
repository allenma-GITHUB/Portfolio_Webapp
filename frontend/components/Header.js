import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-white shadow-md">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/">
                    <a className="text-2xl font-bold text-gray-800">MA</a>
                </Link>
                <div className="flex space-x-4">
                    <Link href="/#projects"><a className="text-gray-600 hover:text-gray-800">Projects</a></Link>
                    <Link href="/#experience"><a className="text-gray-600 hover:text-gray-800">Experience</a></Link>
                    <Link href="/#skills"><a className="text-gray-600 hover:text-gray-800">Skills</a></Link>
                    <Link href="/#certifications"><a className="text-gray-600 hover:text-gray-800">Certifications</a></Link>
                    <Link href="/#education"><a className="text-gray-600 hover:text-gray-800">Education</a></Link>
                    <Link href="/blog"><a className="text-gray-600 hover:text-gray-800">Blog</a></Link>
                    <Link href="/contact"><a className="text-gray-600 hover:text-gray-800">Contact</a></Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
