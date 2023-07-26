import articles from "./Article-Content";
import { useParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";
const ArticlePage = () => {
    const { articleId } = useParams();
    const article = articles.find((article) => article.id === articleId);
    if (!article) {
        return <ErrorPage />;
    }
    else {
        return (
            <div>
                <h1>{article.title}</h1>
                {
                    article.content.map((content, index) => (
                         <p key={index}>{content}</p>
                    ))

                }
                
            </div>
        );
    }

            

   
}
export default ArticlePage;