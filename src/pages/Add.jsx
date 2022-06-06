import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DataPersonal from '../components/DataPersonal';
import Keahlian from '../components/Keahlian';
import PengalamanKerja from '../components/PengalamanKerja';
import RiwayatPendidikan from '../components/RiwayatPendidikan';

export default function Add() {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		address: '',
		phone: '',
	});
	const [pendidikan, setPendidikan] = useState([{ list: '' }]);
	const [pengalamanKerja, setPengalamanKerja] = useState([{ list: '' }]);
	const [keahlian, setKeahlian] = useState([{ list: '' }]);
	const [page, setPage] = useState(0);
	const [data, setData] = useState(
		JSON.parse(localStorage.getItem('listData'))
	);

	const pageDisplay = () => {
		if (page === 0) {
			return <DataPersonal formData={formData} setFormData={setFormData} />;
		} else if (page === 1) {
			return (
				<RiwayatPendidikan
					pendidikan={pendidikan}
					setPendidikan={setPendidikan}
				/>
			);
		} else if (page === 2) {
			return (
				<PengalamanKerja
					pengalamanKerja={pengalamanKerja}
					setPengalamanKerja={setPengalamanKerja}
				/>
			);
		} else {
			return <Keahlian keahlian={keahlian} setKeahlian={setKeahlian} />;
		}
	};

	const sendData = () => {
		let listData = {
			id: Math.floor(Date.now() * Math.random()),
			name: formData.name,
			email: formData.email,
			address: formData.address,
			phone: formData.phone,
			pendidikan: pendidikan.filter((item) => item.list !== ''),
			pengalamanKerja: pengalamanKerja.filter((item) => item.list !== ''),
			keahlian: keahlian.filter((item) => item.list !== ''),
		};
		let updatedData = {};
		if (!data) {
			updatedData = [{ ...listData }];
		} else {
			updatedData = [...data, { ...listData }];
		}
		localStorage.setItem('listData', JSON.stringify(updatedData));
		navigate('/');
	};

	const buttonDisplay = () => {
		if (page === 0) {
			return (
				<button
					className='px-4 py-1 border rounded-md'
					onClick={() => setPage((curr) => curr + 1)}
					disabled={
						formData.name === '' &&
						formData.email === '' &&
						formData.address === '' &&
						formData.phone === ''
					}
				>
					Next
				</button>
			);
		} else if (page === 1) {
			return (
				<button
					className='px-4 py-1 border rounded-md'
					onClick={() => setPage((curr) => curr + 1)}
					disabled={pendidikan[0].list === ''}
				>
					Next
				</button>
			);
		} else if (page === 2) {
			return (
				<button
					className='px-4 py-1 border rounded-md'
					onClick={() => setPage((curr) => curr + 1)}
					disabled={pengalamanKerja[0].list === ''}
				>
					Next
				</button>
			);
		} else {
			return (
				<button
					className='px-4 py-1 border rounded-md'
					onClick={() => sendData()}
					disabled={keahlian[0].list === ''}
				>
					{page >= 3 ? 'Submit' : 'Next'}
				</button>
			);
		}
	};

	return (
		<div className='container h-screen px-4 mx-auto'>
			<div className='p-4 mt-4 border'>
				<div className='mb-2'>Form submission</div>
				<div>Step {page + 1} of 4</div>
				{pageDisplay()}
				<div className='flex justify-end gap-x-2'>
					<div>
						<button
							className={`${
								page === 0 ? 'hidden' : ''
							} px-4 py-1 border rounded-md`}
							onClick={() => setPage((curr) => curr - 1)}
						>
							Prev
						</button>
					</div>
					{buttonDisplay()}
				</div>
			</div>
		</div>
	);
}
