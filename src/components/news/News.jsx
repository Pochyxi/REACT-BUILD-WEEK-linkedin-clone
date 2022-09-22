import './News.css';

function News() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgetsArticle">
            <div className="widgetsArticleLeft">
                <svg xmlns="http://www.w3.org/2000/svg" className="dots" viewBox="0 0 512 512"><title>Radio Button On</title><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" /><circle cx="256" cy="256" r="144" /></svg>
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
                <svg xmlns="http://www.w3.org/2000/svg" className="infoicon" viewBox="0 0 512 512"><title>Information Circle</title><path d="M248 64C146.39 64 64 146.39 64 248s82.39 184 184 184 184-82.39 184-184S349.61 64 248 64z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" /><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M220 220h32v116" /><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M208 340h88" /><path d="M248 130a26 26 0 1026 26 26 26 0 00-26-26z" /></svg>
            </div>
            {newsArticle("articolo demo demo demo demo", "visto da 100 persone e stimazzi")}
            {newsArticle("articolo demo demo demo demo", "1 giorno fa. 500 lettori")}
            {newsArticle("articolo demo demo demo demo", "prova prova prova prova")}
            {newsArticle("articolo Guerra in Ucraina", "L'Europa in difficoltà")}
        </div>


    )
}

export default News; 
