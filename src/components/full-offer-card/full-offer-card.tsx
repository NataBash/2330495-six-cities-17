import { FullInfoOffer } from '../../types/offer';
import Reviews from '../reviews/reviews';
// import OfferMap from '../../utils/map-components';
import OfferHost from '../offer-host/offer-host';
import { OfferMap } from '../../utils/map-components';
import { Point } from '../../types/map-points';

type FullOfferCardProps = {
  currentOffer: FullInfoOffer;
  points: Point[];
  isActiveId: string | null;
};

function FullOfferCard({
  currentOffer,
  points,
  isActiveId,
}: FullOfferCardProps): JSX.Element | null {
  const {
    goods,
    price,
    title,
    type,
    bedrooms,
    maxAdults,
    images,
    host,
    rating,
    id,
    city,
    // isPremium,
    // isFavorite,
  } = currentOffer;

  const ratingPercentage = `${Math.round(rating) * 20}%`;
  if (!currentOffer || !currentOffer.goods) {
    return null;
  }
  return (
    <section className="offer">
      <div className="offer__gallery-container container">
        <div className="offer__gallery">
          {images?.map((image, index) => (
            <div className="offer__image-wrapper" key={image}>
              <img
                className="offer__image"
                src={image}
                alt={`Photo ${index + 1}`}
              />
            </div>
          ))}
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
              <span style={{ width: ratingPercentage }}></span>
              <span className="visually-hidden">{`Rating: ${rating}`}</span>
            </div>
            <span className="offer__rating-value rating__value">{rating}</span>
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
              {goods?.map((good) => (
                <li key={good} className="offer__inside-item">
                  {good}
                </li>
              ))}
            </ul>
          </div>
          <OfferHost
            name={host.name}
            avatarUrl={host.avatarUrl}
            isPro={host.isPro}
          />
          {/* </OfferHost> */}
          <Reviews offerId={id}></Reviews>
        </div>
      </div>
      <OfferMap city={city} points={points} isActiveId={isActiveId || id} />
    </section>
  );
}

export default FullOfferCard;
