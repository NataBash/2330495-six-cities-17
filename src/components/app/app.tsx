import { Route, BrowserRouter, Routes } from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import AuthScreen from '../../pages/auth-screen/auth-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import { Offers } from '../../types/offers';
import { FullInfoOffer} from '../../types/offer';


type AppScreenProps = {
  offers: Offers;
  fullOffer: FullInfoOffer;
};

function App({ fullOffer,offers }: AppScreenProps): JSX.Element {
  const citiesCardClassName = 'cities';
  const favoritesCardClassName = 'favorites';
  const nearCardClassName = 'near-places';

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={
              <MainScreen
                cardClassName={citiesCardClassName}
              />
            }
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <FavoritesScreen
                  offers={offers}
                  cardClassName={favoritesCardClassName}
                />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={
              <OfferScreen
                cardClassName={nearCardClassName}
                offers={offers}
                fullOffer={fullOffer}
                // onHandleActiveIdChange={handleActiveIdChange}
              />
            }
          />
          <Route path={AppRoute.Login} element={<AuthScreen />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
