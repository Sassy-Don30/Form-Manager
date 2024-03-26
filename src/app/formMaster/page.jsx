import styles from './formMaster.module.css';

const FormMaster = () => {
	// Static data for table rows
	const formData = [
		{ name: 'Form 1', prefix: 'F1', status: 'Active' },
		{ name: 'Form 2', prefix: 'F2', status: 'Inactive' },
		{ name: 'Form 3', prefix: 'F3', status: 'Active' },
	];

	return (
		<div className={styles.container}>
			<div className={styles.grayBox}>
				<h1 className={styles.title}>Form master</h1>
				<button className={styles.addButton}>Add</button>
				<table className={styles.formTable}>
					<thead>
						<tr>
							<th>Form Name</th>
							<th>Form Prefix</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{formData.map((data, index) => (
							<tr key={index}>
								<td>{data.name}</td>
								<td>{data.prefix}</td>
								<td>{data.status}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default FormMaster;
