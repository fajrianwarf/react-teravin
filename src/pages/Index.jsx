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
      <div className='mt-3 mb-6'>
        <div className='is-size-1'>Teravin test reactJS</div>
        <button
          className='my-3 button is-info'
          onClick={() => navigate('/add')}
        >
          + add data
        </button>
        <div className='box'>
          <table className='table m-auto is-bordered is-hoverable has-text-centered'>
            <thead>
              <tr>
                <th scope='col' className='px-6 py-3 has-text-centered'>
                  id
                </th>
                <th scope='col' className='px-6 py-3 has-text-centered'>
                  name
                </th>
                <th scope='col' className='px-6 py-3 has-text-centered'>
                  address
                </th>
                <th scope='col' className='px-6 py-3 has-text-centered'>
                  View
                </th>
              </tr>
            </thead>
            <tbody>
              {!data ? (
                <tr>
                  <td colSpan={4} className='py-2 m-auto has-text-danger'>
                    no data
                  </td>
                </tr>
              ) : (
                data.map((item) => (
                  <tr key={item.id}>
                    <td className='px-6 py-3'>{item.id}</td>
                    <td className='px-6 py-3'>{item.name}</td>
                    <td className='px-6 py-3'>{item.address}</td>
                    <td className='px-6 py-3'>
                      <button
                        className='button is-small is-outlined is-info'
                        onClick={() => navigate('/detail', { state: item })}
                      >
                        detail
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
