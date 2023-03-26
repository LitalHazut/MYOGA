import './gallery.css';
import pic1 from '../../assets/pic1.jpeg'
import pic2 from '../../assets/pic2.webp'
import pic3 from '../../assets/pic3.jpeg'
import pic4 from '../../assets/pic4.jpeg'
import pic5 from '../../assets/pic5.jpeg'
import pic6 from '../../assets/pic6.jpeg'
import pic7 from '../../assets/pic7.jpeg'
import pic8 from '../../assets/pic8.jpeg'
import pic9 from '../../assets/pic9.jpeg'

export const Gallery = () => {
    return (
        <>
            <div className='gallery'>
                <img src={pic1}></img>
                <img src={pic2}></img>
                <img src={pic3}></img>
                <img src={pic4}></img>
                <img src={pic5}></img>
                <img src={pic6}></img>
                <img src={pic7}></img>
                <img src={pic9}></img>
                <img src={pic8}></img>

            </div>
        </>
    )
}