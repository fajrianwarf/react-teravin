import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DataPersonal from '../components/DataPersonal';
import Keahlian from '../components/Keahlian';
import PengalamanKerja from '../components/PengalamanKerja';
import RiwayatPendidikan from '../components/RiwayatPendidikan';
import { generateId, resetData } from '../features/form/formSlice';

export default function Add() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reduxState = useSelector((state) => state.form);
  const { form, pendidikan, pengalamanKerja, keahlian } = useSelector(
    (state) => state.form
  );
  const [page, setPage] = useState(0);
  const [data, setData] = useState('');

  useEffect(() => {
    if (localStorage.getItem('listData'))
      setData(JSON.parse(localStorage.getItem('listData')));
  }, []);

  const pageDisplay = () => {
    if (page === 0) {
      return <DataPersonal />;
    } else if (page === 1) {
      return <RiwayatPendidikan />;
    } else if (page === 2) {
      return <PengalamanKerja />;
    } else {
      return <Keahlian />;
    }
  };

  const sendData = () => {
    dispatch(generateId());
    let listData = {
      ...form,
      pendidikan: pendidikan.filter((item) => item !== ''),
      pengalamanKerja: pengalamanKerja.filter((item) => item !== ''),
      keahlian: keahlian.filter((item) => item !== ''),
    };
    let updatedData = {};
    if (!data) {
      updatedData = [{ ...listData }];
    } else {
      updatedData = [...data, { ...listData }];
    }
    console.log('send data: ', updatedData);
    localStorage.setItem('listData', JSON.stringify(updatedData));
    dispatch(resetData());
    navigate('/');
  };

  const buttonDisplay = () => {
    if (page === 0) {
      return (
        <button
          className='px-4 py-1 border rounded-md'
          onClick={() => setPage((curr) => curr + 1)}
          disabled={
            form.name === '' &&
            form.email === '' &&
            form.address === '' &&
            form.phone === ''
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
          disabled={pendidikan[0] === ''}
        >
          Next
        </button>
      );
    } else if (page === 2) {
      return (
        <button
          className='px-4 py-1 border rounded-md'
          onClick={() => setPage((curr) => curr + 1)}
          disabled={pengalamanKerja[0] === ''}
        >
          Next
        </button>
      );
    } else {
      return (
        <button
          className='px-4 py-1 border rounded-md'
          onClick={() => sendData()}
          disabled={keahlian[0] === ''}
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
      <pre style={{ width: 200 }}>{JSON.stringify(reduxState)}</pre>
    </div>
  );
}
