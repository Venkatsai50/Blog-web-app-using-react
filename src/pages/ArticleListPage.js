import ArticleList from'../components/ArticleList';
import articles from './Article-Content';
const ArticleListPage = () => {
    return(
        <>
            <h3 >Articles List</h3>
            <ArticleList articles={articles} />

        </>
    );
}
export default ArticleListPage;