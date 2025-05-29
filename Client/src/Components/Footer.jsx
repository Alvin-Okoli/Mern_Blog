
export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4 mt-10">
            <img src="AFROLOG LOGO 2.png" alt="" width={130} className="mx-auto"/>
            <div className="text-center">
                <p className="text-sm">©2025 Afrilog. All rights reserved.</p>
                <p className="text-xs mt-2">Follow us on 
                    <a href="https://twitter.com" className="text-yellow-500 hover:underline ml-1">Twitter</a>, 
                    <a href="https://facebook.com" className="text-yellow-500 hover:underline ml-1">Facebook</a>, 
                    <a href="https://instagram.com" className="text-yellow-500 hover:underline ml-1">Instagram</a>
                </p>
            </div>
        </footer>
    );
}