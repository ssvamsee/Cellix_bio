import { Helmet } from "react-helmet";

const Frank = () => {
    return(
        <div>
            <Helmet>
                <title>Frank Diana | Cellix Bio</title>
                <meta name="description" content="Frank Diana"/>
                <meta name="keywords" content="Board of Members and directors of Cellix Bio, cellix bio Founder CEO, COO and Scientific Team and Advisors, 
                    Avaca CEO, COO and Scientific Team and Advisors , cellix bio pharma Founder CEO, COO and Scientific Team and Advisors, 
                    Frank Diana," 
                />
            </Helmet>
            <div className='patentlandingpage'>
                <video src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/Board.mp4" autoPlay muted loop playsInline className='patents_video_bg' type="video/mp4"/>
                <div className='pipeline-text'>
                    <div className='patents_text_1'>
                        <h1 className='pipelineCarouselh1'>Frank Diana</h1>
                    </div>
                </div>
            </div>
            <div className="LeaderContainerPage">
                <img className="LeaderImgPage" src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/CellixBio.Leadership.FrankDiana.PNG" alt="leader"></img>
                <div className="LeaderContentPage">
                    <h1>Frank Diana</h1>
                    <h2>CMC & REGULATORY</h2>
                    <p>Dr. Frank Diana is experienced in the areas of CMC, Pharmaceutical and Analytical Development. Dr. Diana had a 40-year career in the Pharmaceutical Industry working for Endo Pharmaceuticals, Johnson & Johnson and DuPont Pharmaceuticals mostly in Pharmaceutical Development, Technical Operations and Quality. He obtained his PhD from St. John's University in NY and is an adjunct professor in the RA/QA graduate program at Temple University’s School of Pharmacy teaching several courses including Global CMC Issues.</p>
                </div>
            </div>
        </div>
    );
}
export default Frank;