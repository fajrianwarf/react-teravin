import React from 'react';

export default function RiwayatPendidikan({ pendidikan, setPendidikan }) {
	const handleChange = (event, index) => {
		const list = [...pendidikan];
		list[index]['list'] = event.target.value;
		setPendidikan(list);
	};

	const handleAdd = () => {
		setPendidikan([...pendidikan, { list: '' }]);
	};

	const handleRemove = (index) => {
		const list = [...pendidikan];
		list.splice(index, 1);
		setPendidikan(list);
	};

	return (
		<div className='p-8 my-4 bg-slate-200'>
			<div className='mb-2 text-lg font-semibold'>Riwayat pendidikan</div>
			<div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-12'>
				<div>
					{pendidikan.map((item, index) => (
						<div className='w-full my-2' key={index}>
							<label
								htmlFor='pendidikan'
								className='inline-block w-2/12 text-sm md:text-base'
							>
								Pend.
							</label>
							<input
								id='pendidikan'
								type='text'
								placeholder='...'
								value={item.list}
								className='w-9/12 px-2 py-1 transition duration-300 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-400'
								onChange={(e) => handleChange(e, index)}
							/>
							{pendidikan.length !== 1 && index !== 0 && (
								<button
									className='inline-block py-0.5 px-1 rounded-md ml-2 text-red-700 bg-white border'
									onClick={() => handleRemove(index)}
								>
									x
								</button>
							)}
						</div>
					))}
				</div>
				<div className='flex items-center justify-center py-1 bg-white md:mt-2'>
					<button onClick={() => handleAdd()}>+ add</button>
				</div>
			</div>
		</div>
	);
}
