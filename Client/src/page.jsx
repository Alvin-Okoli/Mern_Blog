import lagos from './images/Lagos,1.jpeg'
import authorLogo from './images/author.jpeg'
// import './page.css'
import bellLogo from'./images/bell-svgrepo-com.svg'
import messageLogo from'./images/message-svgrepo-com.svg'
import likeLogo from'./images/like-svgrepo-com.svg'

function Page(){

    return(
        <div id='page'>
            <div className='section1'>
                <img src={lagos} className='secimg'/>
                <h5>Travel</h5>
                <h3>Welcome to Lagos</h3>

                <p>
                Lagos, Nigeria is a city like no other. With a population of over 21 million people, it is a bustling metropolis that never sleeps. From the vibrant streets of Victoria Island to the historic neighborhoods of Lagos Island, the city is a fusion of traditional and modern culture. The sound of Afrobeat music fills the air, while the smell of suya and jollof rice wafts from street food vendors.</p>

                <p>Lagos is a city of entrepreneurs, with a thriving startup scene and a strong sense of community. The city is home to numerous markets, including the famous Balogun Market, where you can find everything from traditional clothing to handmade crafts. The city's nightlife is also legendary, with numerous bars, clubs, and lounges to choose from.</p>

                <p>Despite its challenges, Lagos is a city of resilience and determination. The people of Lagos are known for their warm hospitality and welcoming nature, making it a popular destination for tourists and business travelers alike. Whether you're interested in history, culture, food, or entertainment, Lagos has something to offer everyone. With its unique blend of African and international influences, Lagos is a city that is truly one of a kind.</p>

                <p>Lagos, Nigeria is a vibrant and bustling metropolis that embodies the essence of African energy and resilience. As the largest city in Nigeria and one of the fastest-growing cities in the world, Lagos is a hub of cultural, economic, and social activity. The city's rich history is reflected in its diverse architecture, from the colonial-era buildings in the Lagos Island district to the modern skyscrapers of Victoria Island.</p>

                <p>Lagos is also home to a thriving arts and culture scene, with numerous galleries, museums, and festivals celebrating the city's unique heritage. The city's famous Eko Atlantic City, a futuristic waterfront development, is a testament to Lagos' ambition and vision for the future. With its stunning beaches, lively markets, and warm hospitality, Lagos is a city that will leave you with unforgettable memories. From the bustling streets of Oshodi to the tranquil canals of Lekki, Lagos is a city that is full of life, energy, and endless possibilities. Whether you're a foodie, an adventurer, or a business traveler, Lagos has something to offer everyone. With its unique blend of tradition and modernity.</p>
            </div>
            
            <div id='section2'>
                <div id='author'>
                    <img src={authorLogo} alt='author-image' height={50}/>
                    <div>Alvin Okoli</div> <br/>
                    <div id='logo'>
                        <div>
                            <img src={likeLogo} height={25}/>
                            <div>Follow</div>
                        </div>

                        <div>
                            <img src={messageLogo} height={25}/>
                            <div>message</div>
                        </div>

                        <div>
                        <img src={bellLogo} height={25}/>
                        <div>Notify</div>
                        </div>
                    </div>
                </div>
                <div id='trend'>Trending</div>
                <div id='recent'>For you</div>
            </div>
        </div>
    )
}

export default Page