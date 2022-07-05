import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Detail() {
  const { state } = useLocation();
  const dataPersonal = ['name', 'address', 'email', 'phone'];

  return (
    <div className='container h-screen px-4 py-4 mx-auto'>
      <div className='flex justify-between mt-10 mb-4'>
        <h2 className='text-2xl font-bold'>Detail views</h2>
        <Link to={'/'} className='px-2 py-1 border rounded-md'>
          back
        </Link>
      </div>
      <div className='px-4 py-2 bg-slate-300'>
        <div className='my-2'>
          <h3 className='text-lg font-semibold'>Data Personal</h3>
          <div className='grid grid-cols-1 mt-2 md:grid-cols-2 md:gap-x-12'>
            {dataPersonal.map((item) => (
              <div className='flex items-center w-full my-2' key={item}>
                <p className='inline-block w-1/6 text-sm capitalize md:text-base'>
                  {item}
                </p>
                <p className='inline-block w-5/6 px-2 py-1 overflow-auto bg-white'>
                  {state?.[item]}
                </p>
              </div>
            ))}
          </div>
        </div>
        <hr />
        <div className='my-2'>
          <h3 className='text-lg font-semibold'>Riwayat pendidikan</h3>
          <div className='grid grid-cols-1 mt-2 md:grid-cols-2 md:gap-x-12'>
            {state?.pendidikan?.map((item, index) => (
              <div className='flex items-center w-full my-2' key={index}>
                <p className='inline-block w-1/6 text-sm md:text-base'>
                  Pend. {index + 1}
                </p>
                <p className='inline-block w-5/6 px-2 py-1 overflow-auto bg-white'>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
        <hr />

        <div className='my-2'>
          <h3 className='text-lg font-semibold'>Pengalaman kerja</h3>
          <div className='grid grid-cols-1 mt-2 md:grid-cols-2 md:gap-x-12'>
            {state?.pengalamanKerja?.map((item, index) => (
              <div className='flex items-center w-full my-2' key={index}>
                <p className='inline-block w-1/6 text-sm md:text-base'>
                  Pek. {index + 1}
                </p>
                <p className='inline-block w-5/6 px-2 py-1 overflow-auto bg-white'>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
        <hr />

        <div className='my-2'>
          <h3 className='text-lg font-semibold'>Keahlian</h3>
          <div className='grid grid-cols-1 mt-2 md:grid-cols-2 md:gap-x-12'>
            {state?.keahlian?.map((item, index) => (
              <div className='flex items-center w-full my-2' key={index}>
                <p className='inline-block w-1/6 text-sm md:text-base'>
                  Skill {index + 1}
                </p>
                <p className='inline-block w-5/6 px-2 py-1 overflow-auto bg-white'>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='flex justify-end w-full pb-4 mt-4'>
        <Link to={'/'} className='px-2 py-1 border rounded-md '>
          done
        </Link>
      </div>
    </div>
  );
}
