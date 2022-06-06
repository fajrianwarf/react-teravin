import React from 'react';

export default function PengalamanKerja({
	pengalamanKerja,
	setPengalamanKerja,
}) {
	const handleChange = (event, index) => {
		const list = [...pengalamanKerja];
		list[index]['list'] = event.target.value;
		setPengalamanKerja(list);
	};

	const handleAdd = () => {
		setPengalamanKerja([...pengalamanKerja, { list: '' }]);
	};

	const handleRemove = (index) => {
		const list = [...pengalamanKerja];
		list.splice(index, 1);
		setPengalamanKerja(list);
	};

	return (
		<div className='p-8 my-4 bg-slate-200'>
			<h3 className='mb-2 text-lg font-semibold'>Pengalaman kerja</h3>
			<div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-12'>
				<div>
					{pengalamanKerja.map((item, index) => (
						<div className='w-full my-2' key={index}>
							<label
								htmlFor='pengalamanKerja'
								className='inline-block w-2/12 text-sm md:text-base'
							>
								Pek. {index + 1}
							</label>
							<input
								id='pengalamanKerja'
								type='text'
								placeholder='...'
								value={item.list}
								className='w-9/12 px-2 py-1 transition duration-300 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-400'
								onChange={(e) => handleChange(e, index)}
							/>
							{pengalamanKerja.length !== 1 && index !== 0 && (
								<button
									className='inline-block py-0.5 px-1 md:px-2 rounded-md ml-0.5 text-red-700 bg-white border'
									onClick={() => handleRemove(index)}
								>
									x
								</button>
							)}
						</div>
					))}
				</div>
				<div className='flex items-center justify-center py-1 bg-white'>
					<button onClick={() => handleAdd()}>+ add</button>
				</div>
			</div>
		</div>
	);
}
