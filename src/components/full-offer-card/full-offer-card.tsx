import { FullInfoOffer } from '../../types/offer';
// import fullInfoOffer from '../../mocks/offer';
// import FormComments from '../form-comments/form-comments';

import Reviews from '../reviews/reviews';
import OfferMap from '../offer-map/offer-map';
import OfferHost from '../offer-host/offer-host';

function FullOfferCard({
  fullOffer,
}: {
  fullOffer: FullInfoOffer;
}): JSX.Element {
  const {
    goods,
    price,
    title,
    type,
    bedrooms,maxAdults,
    // rating,
    // id,
    // isPremium,
    // isFavorite,
  } = fullOffer;

  // const ratingPercentage = `${Math.round(rating) * 20}%`;

  return (
    <section className="offer">
      <div className="offer__gallery-container container">
        <div className="offer__gallery">
          <div className="offer__image-wrapper">
            <img
              className="offer__image"
              src="img/room.jpg"
              alt="Photo studio"
            />
          </div>
          <div className="offer__image-wrapper">
            <img
              className="offer__image"
              src="img/apartment-01.jpg"
              alt="Photo studio"
            />
          </div>
          <div className="offer__image-wrapper">
            <img
              className="offer__image"
              src="img/apartment-02.jpg"
              alt="Photo studio"
            />
          </div>
          <div className="offer__image-wrapper">
            <img
              className="offer__image"
              src="img/apartment-03.jpg"
              alt="Photo studio"
            />
          </div>
          <div className="offer__image-wrapper">
            <img
              className="offer__image"
              src="img/studio-01.jpg"
              alt="Photo studio"
            />
          </div>
          <div className="offer__image-wrapper">
            <img
              className="offer__image"
              src="img/apartment-01.jpg"
              alt="Photo studio"
            />
          </div>
        </div>
      </div>
      <div className="offer__container container">
        <div className="offer__wrapper">
          <div className="offer__mark">
            <span>Premium</span>
          </div>
          <div className="offer__name-wrapper">
            <h1 className="offer__name">{title}</h1>
            <button className="offer__bookmark-button button" type="button">
              <svg className="offer__bookmark-icon" width="31" height="33">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="offer__rating rating">
            <div className="offer__stars rating__stars">
              <span style={{ width: '80%' }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="offer__rating-value rating__value">4.8</span>
          </div>
          <ul className="offer__features">
            <li className="offer__feature offer__feature--entire">{type}</li>
            <li className="offer__feature offer__feature--bedrooms">
              {bedrooms} Bedrooms
            </li>
            <li className="offer__feature offer__feature--adults">
              Max {maxAdults} adults
            </li>
          </ul>
          <div className="offer__price">
            <b className="offer__price-value">&euro;{price}</b>
            <span className="offer__price-text">&nbsp;night</span>
          </div>
          <div className="offer__inside">
            <h2 className="offer__inside-title">What&apos;s inside</h2>

            <ul className="offer__inside-list">
              {goods.map((good) => (
                <li key={good} className="offer__inside-item">
                  {good}
                </li>
              ))}
            </ul>
          </div>
          <OfferHost></OfferHost>
          <Reviews></Reviews>
        </div>
      </div>
      <OfferMap></OfferMap>
    </section>
  );
}

export default FullOfferCard;
