import React from 'react';

interface FooterProps {
    name: string;
    year: number;
}

const Footer: React.FC<FooterProps> = ({ name, year }) => {
    return (
    <footer>
        <p> {year} {name}. 
            <a href='https://github.com/TylerBaze03'> GitHub</a>
        </p>
    </footer>
    );
};

export default Footer;