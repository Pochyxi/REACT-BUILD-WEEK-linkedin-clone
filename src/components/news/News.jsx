import './News.css';

function News() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgetsArticle">
            <div className="widgetsArticleLeft">
            </div>
            <div className="widgetsArticleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>

            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className='widgetsHead'>
                <h2>LinkedIn News</h2>
            </div>
            {newsArticle("articolo demo demo demo demo", "visto da 100 persone e stimazzi")}
            {newsArticle("articolo demo demo demo demo", "1 giorno fa. 500 lettori")}
            {newsArticle("articolo demo demo demo demo", "prova prova prova prova")}
            {newsArticle("articolo Guerra in Ucraina", "L'Europa in difficoltà")}
        </div>


    )
}

export default News; 
