import './SavedNews.css';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import Navigation from '../Navigation/Navigation';
import NewsCard from '../NewsCard/NewsCard';

function SavedNews({ openModal, article }) {
    return(
        <div className="saved-news">
        <Navigation isSavedNews={true} openModal={openModal} />
        <SavedNewsHeader />
        
        </div>
    )
}

export default SavedNews;