import React from 'react';

export default function Keahlian({ keahlian, setKeahlian }) {
	const handleChange = (event, index) => {
		const list = [...keahlian];
		list[index]['list'] = event.target.value;
		setKeahlian(list);
	};

	const handleAdd = () => {
		setKeahlian([...keahlian, { list: '' }]);
	};

	const handleRemove = (index) => {
		const list = [...keahlian];
		list.splice(index, 1);
		setKeahlian(list);
	};

	return (
		<div className='p-8 my-4  bg-slate-200'>
			<h3 className='mb-2 text-lg font-semibold'>Keahlian</h3>
			<div className='grid grid-cols-1'>
				<div>
					{keahlian.map((item, index) => (
						<div className='w-full my-2' key={index}>
							<label
								htmlFor='keahlian'
								className='inline-block w-2/12 text-sm md:text-base'
							>
								Skill {index + 1}
							</label>
							<input
								id='keahlian'
								type='text'
								placeholder='...'
								value={item.list}
								className='w-9/12 px-2 py-1 transition duration-300 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-400'
								onChange={(e) => handleChange(e, index)}
							/>
							{keahlian.length !== 1 && index !== 0 && (
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
				<div className='flex items-center justify-center py-2 mt-2 bg-white'>
					<button onClick={() => handleAdd()}>+ add another skill</button>
				</div>
			</div>
		</div>
	);
}
