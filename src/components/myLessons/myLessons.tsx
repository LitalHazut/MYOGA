import './myLessons.css'
import soft from '../../../src/assets/softyoga.jpeg';
import vinyasa from '../../../src/assets/vinyasayoga.webp';
import ashtanga from '../../../src/assets/ashtangayoga.jpeg';


export const MyLessons = () => {
    return (
        <>
            <h1>My Lessons:</h1>
            <div >
                <ul className="horizontal-list">
                    <li >
                        <h3>Soft yoga</h3>
                        <img src={soft}></img>
                        <div className='row'>
                            <p className="box">A soft practice that combines work with stretching, breathing, gentle work on the body.</p>
                        </div>
                    </li>
                    <li>
                        <h3>Vinyasa yoga</h3>
                        <img src={vinyasa}></img>
                        <div className='row'>
                            <p className="box">Dynamic practice with a combination of movement and breathing synchronization.
                                Training that is freed from adherence to certain schools of practice and offers varying sequences of postures.</p>
                        </div>
                    </li>
                    <li>
                        <h3>Ashtanga yoga</h3>
                        <img src={ashtanga}></img>
                        <div className='row'>
                            <p className="box">Ashtanga vinyasa yoga is a style of yoga as exercise popularized by K. Pattabhi Jois during the twentieth century, often promoted as a modern-day form of classical Indian yoga.Jois claimed to have learned the system from his teacher Tirumalai Krishnamacharya. The style is energetic, synchronizing breath with movements. The individual poses (asanas) are linked by flowing movements (vinyasas).</p>
                        </div>
                    </li>
                </ul>
            </div>
        </>


    )
}