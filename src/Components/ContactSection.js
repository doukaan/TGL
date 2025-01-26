    import React from "react";
    import Footer from "./footer";
    const ContactSection = () => {
    return (
        <section className="bg-gradient-to-b from-black to-blue-950 text-white py-16 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="col-span-1 md:col-span-2">
            <p className="text-sm uppercase text-gray-400">Merhaba!</p>
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight mt-4">
                Hadi projeniz hakkında <br />
            <span className="text-blue-400">konuşalım!</span>
            </h2>
            <p className="mt-4 text-gray-400">Bizimle iletişime geçin! →</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-24 gap-8">
            <div className="">
        <h4 className="text-xl w-fit font-semibold bg-blue-700 rounded-full px-3 py-2 inline-block">
            İletişim
        </h4>
        <ul className="mt-4 space-y-2 md:text-gray-300">
        <li>
            <a href="mailto:tglelektrik@gmail.com" className="font-bold text-white hover:text-blue-300">
            📧 Email: tglelektrik@gmail.com
            </a>
        </li>
        <li>
            <a href="tel:+905510466110" className="font-bold text-white hover:text-blue-300">
            📞 Phone: +90 (551) 046 61 10
            </a>
        </li>
        <li>
            <a href="https://wa.me/905510466110" className="font-bold text-white hover:text-blue-300 flex items-center space-x-2">
            <span>💬 Whatsapp: Hakkı Toğal</span>
            </a>
        </li>
        </ul>


        </div>


        </div>
       
        </div>
        </section>
    );
    };

    export default ContactSection;
