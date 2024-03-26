'use client';

import { useState } from 'react';
import styles from './formDownload.module.css';

const FormDownload = () => {
	const [selectedOption, setSelectedOption] = useState('');
	const [displayDownload, setDisplayDownload] = useState(false);

	const handleDropdownChange = (event) => {
		setSelectedOption(event.target.value);
		if (event.target.value !== 'no') setDisplayDownload(true);
		else setDisplayDownload(false);
	};

	const handleDownload = () => {
		alert('Download');
	};

	return (
		<div className={styles.container}>
			<div className={styles.grayBox}>
				<h1 className={styles.title}>Form Download</h1>
				<div className='flex'>
					<select
						className={styles.dropdown}
						value={selectedOption}
						onChange={handleDropdownChange}
					>
						<option value='no'>Select Form</option>
						<option value='form1'>Form 1</option>
						<option value='form2'>Form 2</option>
						<option value='form3'>Form 3</option>
					</select>
				</div>
				{displayDownload && (
					<div className={styles.button}>
						<button onClick={handleDownload}>Download</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default FormDownload;
