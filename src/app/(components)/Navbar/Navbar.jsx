import Navlink from './Navlink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import styles from './nav.module.css';

const Navbar = () => {
	return (
		<nav>
			<div className='flex flex-col bg-navbar p-8 h-full'>
				<div className={styles.searchContainer}>
					<FontAwesomeIcon
						icon={faSearch}
						className={styles.searchIcon}
					/>
					<input
						type='text'
						placeholder='Search'
						className={styles.navbar}
					/>
				</div>
				<Navlink />
			</div>
		</nav>
	);
};

export default Navbar;
