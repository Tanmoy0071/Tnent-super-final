// import { a, section } from "framer-motion/client";
import logoImage from '@/assets/images/Logo for website.png'; 
import Image from "next/image";

const footerLinks = [
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/legals", label: "Legals" },
];

export default function Footer() {
    return (
        <section className="py-16">
            <div className="container">
                <div className="flex flex-col md:flex-row md:justify-between items-center gap-6 ">
                    <div>
                        <Image src={logoImage} className='lg:w-[10vw] sm:w-[44vw]' alt="Tnent Store Logo"/>
                    </div>
                    <div>
                        <nav className="flex gap-6">
                            {footerLinks.map((links, index) => (
                                <a key={index} href={links.href} className="text-white/50 text-sm">{links.label}</a>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
}