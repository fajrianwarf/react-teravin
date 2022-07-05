import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Index() {
  const navigate = useNavigate();
  const [data, setData] = useState('');

  useEffect(() => {
    if (localStorage.getItem('listData'))
      setData(JSON.parse(localStorage.getItem('listData')));
  }, []);

  return (
    <div className='container h-screen px-4 mx-auto '>
      <div className='mt-10'>
        <div className='text-3xl'>Teravin test reactJS</div>
        <button
          className='px-2 py-1 my-3 border rounded-md'
          onClick={() => navigate('/add')}
        >
          + add data
        </button>
        <div className='flex flex-col w-full'>
          <div className='relative w-full overflow-x-auto rounded-md shadow-md'>
            <table className='w-full text-sm text-center text-gray-500'>
              <thead className='text-xs text-gray-600 uppercase bg-sky-300'>
                <tr>
                  <th scope='col' className='px-6 py-3 border'>
                    id
                  </th>
                  <th scope='col' className='px-6 py-3 border'>
                    name
                  </th>
                  <th scope='col' className='px-6 py-3 border'>
                    address
                  </th>
                  <th scope='col' className='px-6 py-3 border'>
                    View
                  </th>
                </tr>
              </thead>
              <tbody>
                {!data ? (
                  <tr>
                    <td colSpan={4} className='py-2 mx-auto text-red-700'>
                      no data
                    </td>
                  </tr>
                ) : (
                  data.map((item) => (
                    <tr key={item.id}>
                      <td className='px-6 py-3 capitalize border'>{item.id}</td>
                      <td className='px-6 py-3 capitalize border'>
                        {item.name}
                      </td>
                      <td className='px-6 py-3 capitalize border'>
                        {item.address}
                      </td>
                      <td
                        className='px-6 py-3 capitalize border cursor-pointer hover:text-blue-500'
                        onClick={() => navigate('/detail', { state: item })}
                      >
                        detail
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
