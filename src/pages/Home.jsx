

function Home() {
    return (
        <div className='home'>

            <div className='about d-flex flex-column text-center container container-lg p-5 mx-0 mw-100'>
                <h1 className='fw-bold text-light my-4'>Hi, My Name is MyName</h1>
                <div className='prompt text-warning m-2'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n
                        Ad adipisci aliquam aut 😊</p>
                </div>
            </div>
            <div className='skills vh-100 my-5'>
                <ol className='list d-flex flex-column justify-content-center align-items-center text-center'>
                    <li className='items list-group-item my-4'>
                        <h2 className='fw-bold '>Front-End</h2>
                        <span>HTML, CSS, Bootstrap, Tailwind, MUI, Javascript, React.Js , React Router, Redux, Next.JS, RestAPI</span>
                    </li>
                    <li className='items list-group-item my-4'>
                        <h2>Back-End</h2>
                        <span>Node.JS, Express.JS, PostgreSQL </span>
                    </li>
                    <li className='items list-group-item my-4'>
                        <h2>Languages</h2>
                        <span>English, French</span>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Home
