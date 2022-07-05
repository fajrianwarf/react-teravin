import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addKeahlian } from '../features/form/formSlice';

export default function Keahlian() {
  const dispatch = useDispatch();
  const { keahlian } = useSelector((state) => state.form);
  const handleChange = (event, index) => {
    const list = [...keahlian];
    // list[index]['list'] = event.target.value;
    list.splice(index, 1, event.target.value);
    dispatch(addKeahlian(list));
  };

  const handleAdd = () => {
    dispatch(addKeahlian([...keahlian, '']));
  };

  const handleRemove = (index) => {
    const list = [...keahlian];
    list.splice(index, 1);
    dispatch(addKeahlian(list));
  };

  return (
    <div className='my-5'>
      <h3 className='mb-2 is-size-4'>Keahlian</h3>
      <div className='my-2 columns'>
        <div className='column is-half'>
          {keahlian.map((item, index) => (
            <div className='field columns' key={index}>
              <label htmlFor='keahlian' className='label column is-one-fifth'>
                Skill {index + 1}
              </label>
              <div className='control column is-three-fifths'>
                <input
                  id='keahlian'
                  type='text'
                  placeholder='...'
                  value={item}
                  className='input'
                  onChange={(e) => handleChange(e, index)}
                />
                {keahlian[index] === '' && (
                  <p className='help is-danger'>list can't be empty</p>
                )}
              </div>
              {keahlian.length !== 1 && index !== 0 && (
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
            + add another skill
          </button>
        </div>
      </div>
    </div>
  );
}
