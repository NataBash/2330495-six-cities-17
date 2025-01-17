import { Link } from 'react-router-dom';
import HeaderLeft from '../header-left/header-left';
// import { AuthorizationStatus } from '../../const';
import { useAppSelector} from '../../hooks';
import { RootState } from '../../types/state';
import { AuthorizationStatus } from '../../const';

function Header(): JSX.Element {
  const { authorizationStatus, user } = useAppSelector((state: RootState) => ({
    authorizationStatus: state.authorizationStatus,
    user: state.user,
  }));

  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;
  console.log('User data:', user);
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <HeaderLeft></HeaderLeft>

          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link
                  className="header__nav-link header__nav-link--profile"
                  to="#"
                >
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  <span className="header__user-name user__name">
                    Oliver.conner@gmail.com
                  </span>
                  <span className="header__favorite-count">3</span>
                </Link>
              </li>
              <li className="header__nav-item">
                <Link className="header__nav-link" to="#">
                  <span className="header__signout">Sign out</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
