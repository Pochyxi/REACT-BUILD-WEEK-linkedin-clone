import { useEffect, useState } from 'react';
import './News.css';

function News() {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetchArticle()
    }, [])

    const fetchArticle = async () => {
        try {
            const response = await fetch("https://api.spaceflightnewsapi.net/v3/articles")
            if (response.ok) {
                const json = await response.json()
                console.log(json)
                setArticles(json)
            }


        } catch (error) {
            console.log(error)
        }
    }

    console.log(articles)
    const newsArticle = (heading, subtitle, url) => (
        <div className="widgetsArticle">
            <div className="widgetsArticleLeft">
            </div>
            <div className="widgetsArticleRight">
                <li>{heading}</li>
                <p className='mt-2'>{subtitle} - <a className='text-success' href={url} target='_blank' rel='noreferrer'>GO</a></p>
            </div>
        </div>
    )

    return (
        <div className="widgets my-2">
            <div className='widgetsHead'>
                <h2>LinkedIn News</h2>
            </div>
            <div className='scrollThis my-2'>
                {
                    articles.map(article => (
                        newsArticle(article.title, article.summary, article.url)
                    ))
                }
            </div>

        </div>


    )
}

export default News; 
