const Footer = () => {
    return (
        <footer className="bg-white border-t mt-10">
            <div className="container mx-auto px-6 py-4 text-center text-gray-600">
                <p>&copy; {new Date().getFullYear()} Maurice Allen. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
