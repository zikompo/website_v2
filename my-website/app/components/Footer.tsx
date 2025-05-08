import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-neutral-800 text-white py-4">
        <div className="container mx-auto text-center">
            <p className="text-sm">
            &copy; {new Date().getFullYear()} Zikora. All rights reserved.
            </p>
            <p className="text-sm">
            Built with ❤️.
            </p>
        </div>
        </footer>
    );
    }

export default Footer;