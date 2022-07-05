import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addForm } from '../features/form/formSlice';

export default function DataPersonal() {
  const listData = ['name', 'email', 'address', 'phone'];
  const { form } = useSelector((state) => state.form);
  const dispatch = useDispatch();

  return (
    <div className='my-4'>
      <h3 className='mb-2 is-size-4'>Data personal</h3>
      <div className='my-2 columns is-multiline'>
        {listData.map((item) => (
          <div className='field column is-half'>
            <label htmlFor={item} className='label'>
              {item}
            </label>
            <div className='control'>
              <input
                id={item}
                type='text'
                placeholder={`${item}...`}
                value={form[item]}
                className='input'
                onChange={(e) =>
                  dispatch(addForm({ ...form, [item]: e.target.value }))
                }
              />
            </div>
            {form[item] === '' && (
              <p className='help is-danger'>{item} is required</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
