import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changePassword } from '../../../redux/user/userController';

function ChangePass() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(changePassword({ oldPassword, newPassword }));
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <form
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h4 className="text-2xl text-gray-700 font-semibold text-center mb-6">
          Change Password
        </h4>

        <div className="mb-4">
          <input
            type="password"
            placeholder="Enter Old Password"
            className='input-field'
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <input
            type="password"
            placeholder="Enter New Password"
            className='input-field'
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className='custom-button'
          >
          Change Password
        </button>
      </form>
    </div>
  );
}

export default ChangePass;
