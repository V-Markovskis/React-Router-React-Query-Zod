
const HomePage = () => {
    return (
        <div className='home-container'>
            <div className='col-4 home-container__content'>
                <div>
                    The project is built using React Router and Tanstack (React) Query.
                    Users can create reviews or simply express their opinions about movies using a form.
                </div>
                <img src="https://img-c.udemycdn.com/course/750x422/4059358_3045.jpg" alt="tanstack query" width={500}/>
            </div>
        </div>
    );
};

export default HomePage;