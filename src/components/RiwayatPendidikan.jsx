import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPendidikan } from '../features/form/formSlice';

export default function RiwayatPendidikan() {
  const dispatch = useDispatch();
  const { pendidikan } = useSelector((state) => state.form);
  const handleChange = (event, index) => {
    const list = JSON.parse(JSON.stringify(pendidikan));
    list[index] = event.target.value;
    // list.splice(index, 1, event.target.value);
    dispatch(addPendidikan(list));
  };

  const handleAdd = () => {
    dispatch(addPendidikan([...pendidikan, '']));
  };

  const handleRemove = (index) => {
    const list = [...pendidikan];
    list.splice(index, 1);
    dispatch(addPendidikan(list));
  };

  return (
    <div className='my-5'>
      <div className='mb-2 is-size-4'>Riwayat pendidikan</div>
      <div className='my-2 columns'>
        <div className='column is-half'>
          {pendidikan.map((item, index) => (
            <div className='field columns' key={index}>
              <label htmlFor='pendidikan' className='label column is-one-fifth'>
                Pend. {index + 1}
              </label>
              <div className='control column is-three-fifths'>
                <input
                  id='pendidikan'
                  type='text'
                  placeholder='...'
                  value={item}
                  className='input '
                  onChange={(e) => handleChange(e, index)}
                />
                {pendidikan[index] === '' && (
                  <p className='help is-danger'>the list can't be empty</p>
                )}
              </div>
              {pendidikan.length !== 1 && index !== 0 && (
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
