import Button from 'react-bootstrap/Button';
function PatentHome(){
    return (
        <div>
            <div className='PatentHomeContainer'>
                <img className='PatentHomeImg' src="https://pharmaceuticalmanufacturer.media/downloads/8719/download/shutterstock_1952492305.jpg?cb=6a0449b64584f77e8d4d0bb7585d324f&w=1000&h=" alt="hands"></img>
                <p className='PatentHomep'>CELLIX BIO's HAS OVER 432 GLOBAL PATENTS FROM 2009 to 2022</p>
                <Button variant="outline-info"className='PatentHomeButton'>Know More</Button>
            </div>
        </div>
    );
}
export default PatentHome;