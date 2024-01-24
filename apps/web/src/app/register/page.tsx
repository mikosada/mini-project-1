'use client';

import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [fix, setFix] = useState(false);
  const [fixFilter, setFixFilter] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [referral, setReferral] = useState('');
  const [parentReferral, setParentReferral] = useState('');
  const [role, setRole] = useState('CUSTOMER');

  const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRole(event.target.value);
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:8000/auth/regis', {
        username,
        email,
        password,
        role,
        parentReferral,
      });
      alert('Register success');
    } catch (error: any) {
      console.error(
        'Error during registration: ',
        error.response?.data || error.message,
      );
    }
  };

  const setFixed = () => {
    if (window.scrollY > 56) {
      setFix(true);
    } else {
      setFix(false);
    }

    if (window.scrollY > 200) {
      setFixFilter(true);
    } else {
      setFixFilter(false);
    }
  };

  window.addEventListener('scroll', setFixed);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg gray-100 p-5 rounded shadow-sm">
        <h1 className=" font-bold my-4">Registration</h1>
        <label
          htmlFor="username"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          className="border rounded w-full py-2 px-3"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          className="border rounded w-full py-2 px-3"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label
          htmlFor="password"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          className="border rounded w-full py-2 px-3"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label
          htmlFor="referral"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Referral code
        </label>
        <input
          type="text"
          id="parentRefferal"
          className="border rounded w-full py-2 px-3"
          placeholder="Referral code"
          value={parentReferral}
          onChange={(e) => setParentReferral(e.target.value)}
        />
        <label className="mr-3">
          You are:
          <label>
            <input
              className="mx-2 my-4"
              type="radio"
              name="role"
              value="CUSTOMER"
              checked={role === 'CUSTOMER'}
              onChange={handleRoleChange}
            />
            Customer
          </label>
          <label className="mx-2">
            <input
              className="mx-2"
              type="radio"
              name="role"
              value="ORGANIZER"
              checked={role === 'ORGANIZER'}
              onChange={handleRoleChange}
            />
            Organizer
          </label>
        </label>
        <div className="mt-4">
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleRegister}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}