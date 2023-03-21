import './workshops.css'
import pranayama from '../../../src/assets/pranayama.jpeg';
import meditation from '../../../src/assets/meditation.jpeg';
import flexibility from '../../../src/assets/flexibility.jpeg';

export const Workshops = () => {
    return (
        <>
            <h1>Our Workshops:</h1>
            <div >
                <ul className="uldiv">
                    <li>
                        <h3>Pranayama</h3>
                        <img src={pranayama}></img>
                        <div className='row'>
                            <p className="box">Pranayama is the practice of breath regulation. It's a main component of yoga, an exercise for physical and mental wellness. In Sanskrit, “prana” means life energy and “yama” means control. The practice of pranayama involves breathing exercises and patterns.</p>
                        </div>
                    </li>
                    <li>
                        <h3>Meditation</h3>
                        <img src={meditation}></img>
                        <div className='row'>
                            <p className="box">Meditation is a practice in which an individual uses a technique – such as mindfulness, or focusing the mind on a particular object, thought, or activity – to train attention and awareness, and achieve a mentally clear and emotionally calm and stable state.</p>
                        </div>
                    </li>
                    <li>
                        <h3>Flexibility</h3>
                        <img src={flexibility}></img>
                        <div className='row'>
                            <p className="box"> This workshop is designed to teach students clear and precise exercises to target upper back and shoulder flexibility. We will go over back, shoulder, and neck extension exercises so students can walk away knowing how to address and connect their upper back and shoulders for better bridges and pole tricks. </p>
                        </div>
                    </li>

                </ul>
            </div>
        </>

    )
}