import React from 'react';

export default function DataPersonal({ formData, setFormData }) {
	const listData = ['name', 'email', 'address', 'phone'];
	return (
		<div className='p-8 my-4 bg-slate-200'>
			<h3 className='mb-2 text-lg font-semibold'>Data personal</h3>
			<div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-12'>
				{listData.map((item) => (
					<div className='w-full my-2' key={item}>
						<label
							htmlFor={item}
							className='inline-block w-1/5 text-sm capitalize md:text-base'
						>
							{item}
						</label>
						<input
							id={item}
							type='text'
							placeholder={`${item}...`}
							value={formData?.[item]}
							className='w-4/5 px-2 py-1 transition duration-300 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-400'
							onChange={(e) =>
								setFormData({ ...formData, [item]: e.target.value })
							}
						/>
						{formData?.[item] === '' && (
							<div className='flex justify-end'>
								<p className='inline-block w-4/5 text-red-700'>
									{item} is required
								</p>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
}
