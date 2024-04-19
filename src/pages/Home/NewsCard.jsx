import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { title, image_url, details, _id } = news;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl mx-auto">
                <figure><img src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    {
                        details.length > 200 ?
                        <p>{details.slice(0,200)} <Link 
                        to={`/news/${_id}`}
                        className='text-blue-500'>Read more....</Link></p>
                        :
                        <p>{details}</p>
                    }

                </div>
            </div>
        </div>

    );
};

NewsCard.propTypes = {
    news: PropTypes.array,
}

export default NewsCard;