
import Ninjalogo from '../../assets/images/ninja_PNG26.png'
const Home = () =>  {

    return(
        <div className="container home-page">
            <div className='text-zone'>
                <h1>Hi, <br/>I'm
                <img src={Ninjalogo} alt="devman"/>
                Rahul Soren
                <br/>
                Web Developer
                </h1>
                <h2> Final Year Undergrad / Frontend Developer /</h2>
            </div>
        </div>
    )
}

export default Home;