'use client';

import { useState } from 'react';
import styles from './FormUpload.module.css';

const FormUpload = () => {
	const [selectedOption, setSelectedOption] = useState('');
	const [previewField, setPreviewField] = useState(false);
	const [textFieldValue, setTextFieldValue] = useState('');

	const handleDropdownChange = (event) => {
		setSelectedOption(event.target.value);
		if (event.target.value !== 'no') setPreviewField(true);
		else setPreviewField(false);
	};

	const handleTextFieldChange = (event) => {
		setTextFieldValue(event.target.value);
	};

	const handlePreviewClick = () => {
		alert('Preview clicked');
	};

	return (
		<div className={styles.container}>
			<div className={styles.grayBox}>
				<h1 className={styles.title}>Form Upload</h1>
				<div className='flex'>
					<select
						value={selectedOption}
						onChange={handleDropdownChange}
						className={styles.dropdown}
					>
						<option value='no'>Select Form</option>
						<option value='form1'>Form 1</option>
						<option value='form2'>Form 2</option>
						<option value='form3'>Form 3</option>
					</select>
					{previewField && (
						<div className={styles.previewContainer}>
							<label className={styles.previewLabel}>
								Enter serial number
							</label>
							<input
								type='text'
								value={textFieldValue}
								onChange={handleTextFieldChange}
								className={styles.textInput}
							/>

							<button
								onClick={handlePreviewClick}
								className={styles.previewButton}
							>
								Preview
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default FormUpload;
