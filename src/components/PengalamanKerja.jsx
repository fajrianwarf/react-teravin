import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPengalamanKerja } from '../features/form/formSlice';

export default function PengalamanKerja() {
  const dispatch = useDispatch();
  const { pengalamanKerja } = useSelector((state) => state.form);
  const handleChange = (event, index) => {
    const list = [...pengalamanKerja];
    // list[index]['list'] = event.target.value;
    list.splice(index, 1, event.target.value);
    dispatch(addPengalamanKerja(list));
  };

  const handleAdd = () => {
    dispatch(addPengalamanKerja([...pengalamanKerja, '']));
  };

  const handleRemove = (index) => {
    const list = [...pengalamanKerja];
    list.splice(index, 1);
    dispatch(addPengalamanKerja(list));
  };

  return (
    <div className='my-5'>
      <h3 className='mb-2 is-size-4'>Pengalaman kerja</h3>
      <div className='my-2 columns'>
        <div className='column is-half'>
          {pengalamanKerja.map((item, index) => (
            <div className='field columns' key={index}>
              <label
                htmlFor='pengalamanKerja'
                className='label column is-one-fifth'
              >
                Pek. {index + 1}
              </label>
              <div className='control column is-three-fifths'>
                <input
                  id='pengalamanKerja'
                  type='text'
                  placeholder='...'
                  value={item}
                  className='input'
                  onChange={(e) => handleChange(e, index)}
                />
                {pengalamanKerja[index] === '' && (
                  <p className='help is-danger'>list can't be empty</p>
                )}
              </div>
              {pengalamanKerja.length !== 1 && index !== 0 && (
                <div className='column is-one-fifth'>
                  <button
                    className='button is-danger is-outlined'
                    onClick={() => handleRemove(index)}
                  >
                    x
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className='box columns is-flex is-vcentered is-centered column is-half'>
          <button className='button' onClick={() => handleAdd()}>
            + add
          </button>
        </div>
      </div>
    </div>
  );
}
