import bgImage from '../images/auimage.jpeg'

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white pb-4 mt-10 text-center">

            <div id='navBg' style={{height: "30px", backgroundImage: `url(${bgImage})`}} className='h-20 relative'></div>

            <p className="text-4xl font-bold font-serif w-full mx-auto my-6 mt-8">Afro<span className="text-yellow-400">log</span></p>

            <div className="grid grid-cols-2 gap-y-4 mb-5 md:mb-10 lg:grid-cols-4 lg:px-20">

                <div className="grid grid-cols-1 gap-y-2 text-sm my-2 font-extralight lg:text-xl lg:font-medium">
                    <p className="font-semibold text-lg md:my-4 lg:font-bold lg:text-2xl">COMPANY</p>
                    <p className="cursor-pointer hover:text-shadow hover:text-yellow-400">About</p>
                    <p className="cursor-pointer hover:text-shadow hover:text-yellow-400">Features</p>
                    <p className="cursor-pointer hover:text-shadow hover:text-yellow-400">Works</p>
                    <p className="cursor-pointer hover:text-shadow hover:text-yellow-400">Career</p>
                </div>

                <div className="grid grid-cols-1 gap-y-2 text-sm my-2 font-extralight lg:text-xl lg:font-medium">
                    <p className="font-semibold text-lg md:my-4 lg:font-bold lg:text-2xl">HELP</p>
                    <p className="cursor-pointer hover:text-shadow hover:text-yellow-400">Customer Support</p>
                    <p className="cursor-pointer hover:text-shadow hover:text-yellow-400">Delievery details</p>
                    <p className="cursor-pointer hover:text-shadow hover:text-yellow-400">T&C</p>
                    <p className="cursor-pointer hover:text-shadow hover:text-yellow-400">Privacy Policy</p>
                </div>

                <div className="grid grid-cols-1 gap-y-2 text-sm my-2 font-extralight lg:text-xl lg:font-medium">
                    <p className="font-semibold text-lg md:my-4 lg:font-bold lg:text-2xl">FAQ</p>
                    <p className="cursor-pointer hover:text-shadow hover:text-yellow-400">Account</p>
                    <p className="cursor-pointer hover:text-shadow hover:text-yellow-400">Manage Delieveries</p>
                    <p className="cursor-pointer hover:text-shadow hover:text-yellow-400">Orders</p>
                    <p className="cursor-pointer hover:text-shadow hover:text-yellow-400">Payment</p>
                </div>

                <div className="grid grid-cols-1 gap-y-2 text-sm my-2 font-extralight lg:text-xl lg:font-medium">
                    <p className="font-semibold text-lg md:my-4 lg:font-bold lg:text-2xl">RESOURCES</p>
                    <p className="cursor-pointer hover:text-shadow hover:text-yellow-400">Free eBook</p>
                    <p className="cursor-pointer hover:text-shadow hover:text-yellow-400">Development Tutorial</p>
                    <p className="cursor-pointer hover:text-shadow hover:text-yellow-400">How to- Blog</p>
                    <p className="cursor-pointer hover:text-shadow hover:text-yellow-400">Youtube Playlist</p>
                </div>
            </div>
            
            <div>
                <img src="AFROLOG LOGO 2.png" alt="" width={130} className="mx-auto"/>
                <p className="mt-[-20px] font-bold">Telling the <span className="text-yellow-400">African</span> story</p>
                <p className="px-2 mb-8 text-gray-400 lg:px-20">This is Afrilog, the number 1 platform dedicated to sharing the rich history, vibrant cultures, and breathtaking landscapes of Africa. From the majestic savannas to the bustling cities, our blog takes you on a journey to discover the diversity and beauty of this incredible continent. Follow us for inspiring stories, stunning visuals, and a deeper understanding of Africa's complexities and wonders. Let's explore Africa together!</p>
            </div>
            

            <div className="text-center text-xl px-2">
                <p className="text-x  my-4">Follow us on: 
                    <a href="https://twitter.com" className="hover:text-yellow-500 hover:underline ml-1">Twitter</a>, 
                    <a href="https://facebook.com" className="hover:text-yellow-500 hover:underline ml-1">Facebook</a>, 
                    <a href="https://instagram.com" className="hover:text-yellow-500 hover:underline ml-1">Instagram</a>
                </p>
                <p className="text-sm text-gray-400">©2025 Afrilog. All rights reserved.</p>
            </div>
        </footer>
    );
}