import Link from 'next/link';
import styles from './nav.module.css';

const Navlink = () => {
	return (
		<div className={styles.container}>
			<Link className={styles.navLink} href='/formUpload'>
				Form upload
			</Link>
			<Link className={styles.navLink} href='/formDownload'>
				Form download
			</Link>
			<Link className={styles.navLink} href='/formMaster'>
				Form master
			</Link>
		</div>
	);
};

export default Navlink;
