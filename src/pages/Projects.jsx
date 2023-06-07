import '../Projects.css'
import proj1 from '../assets/proj1.jpg'
import proj2 from '../assets/proj2.jpg'
import proj3 from '../assets/proj3.jpg'


const Projects = () => {
    return (
        <div className='projects'>
            <h1 className='text-center txt-col fw-bold py-5'>My Projects Until Now</h1>

            <div className='projectList card no-padd d-flex justify-content-center text-center align-items-center'>
                <div className=' my-5'>
                    <img alt='img1' src={proj1} className='card-img-top pics'></img>
                    <div className='card-body'>
                        <h5 className='card-title txt-col'>Social Media App</h5>
                        <p className='card-text'>Sth.com a website you can easily sth</p>
                    </div>
                </div>

                <div className=' my-5'>
                    <img alt='img2' src={proj2} className='card-img-top pics'></img>
                    <div className='card-body'>
                        <h5 className='card-title txt-col'>Digital Marketing App</h5>
                        <p className='card-text'>Digital Market with my Digital Marketing app</p>
                    </div>
                </div>

                <div className=' my-5'>
                    <img alt='img3' src={proj3} className='card-img-top pics'></img>
                    <div className='card-body'>
                        <h5 className='card-title txt-col'>Meditation App</h5>
                        <p className='card-text'>Meditate with my Meditation app</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;