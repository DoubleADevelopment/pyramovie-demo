/* components */
import AppNav from './header-nav/header-nav';
import HeaderSearchBar from './header-search-bar/header-search-bar';
/* styles */
import style from './app-header.module.css';

const AppHeader = () => {
	return (
		<header className={`${style['app-header']} `}>
			<div className={`${style['app-header__wrap']} container`}>
				<h1 className={`${style['app-header__title']}`}>Top Films App</h1>

				<AppNav />

				<HeaderSearchBar />
			</div>
		</header>
	);
};

export default AppHeader;
