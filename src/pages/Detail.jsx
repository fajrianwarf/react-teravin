import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Detail() {
  const { state } = useLocation();
  const dataPersonal = ['name', 'address', 'email', 'phone'];

  return (
    <div className='container px-4 py-4 mx-auto'>
      <div className='flex justify-between mt-10 mb-4'>
        <h2 className='is-size-1'>Detail views</h2>
        <Link to={'/'} className='px-2 py-1 my-2 button is-info'>
          back
        </Link>
      </div>
      <div className='box'>
        <div className='my-2'>
          <h3 className='mb-3 is-size-4'>Data Personal</h3>
          <div
            className='m-auto columns is-multiline'
            style={{ verticalAlign: 'text-top' }}
          >
            {dataPersonal.map((item) => (
              <div className='column is-half columns' key={item}>
                <p className='column is-half label'>{item}</p>
                <p className='column is-half input is-flex'>{state?.[item]}</p>
              </div>
            ))}
          </div>
        </div>
        <hr />
        <div className='my-2'>
          <h3 className='mb-3 is-size-4'>Riwayat pendidikan</h3>
          <div
            className='m-auto columns is-multiline'
            style={{ verticalAlign: 'text-top' }}
          >
            {state?.pendidikan?.map((item, index) => (
              <div className='column is-half columns' key={index}>
                <p className='column is-half label'>Pend. {index + 1}</p>
                <p className='column is-half input is-flex'>{item}</p>
              </div>
            ))}
          </div>
        </div>
        <hr />

        <div className='my-2'>
          <h3 className='mb-3 is-size-4'>Pengalaman kerja</h3>
          <div
            className='m-auto columns is-multiline'
            style={{ verticalAlign: 'text-top' }}
          >
            {state?.pengalamanKerja?.map((item, index) => (
              <div className='column is-half columns' key={index}>
                <p className='column is-half label'>Pek. {index + 1}</p>
                <p className='column is-half input is-flex'>{item}</p>
              </div>
            ))}
          </div>
        </div>
        <hr />

        <div className='my-2'>
          <h3 className='mb-3 is-size-4'>Keahlian</h3>
          <div
            className='m-auto columns is-multiline'
            style={{ verticalAlign: 'text-top' }}
          >
            {state?.keahlian?.map((item, index) => (
              <div className='column is-half columns is-vcentered' key={index}>
                <p className='column is-half label'>Skill {index + 1}</p>
                <p className='column is-half input is-flex'>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='has-text-right'>
        <Link to={'/'} className='button is-info'>
          done
        </Link>
      </div>
    </div>
  );
}
