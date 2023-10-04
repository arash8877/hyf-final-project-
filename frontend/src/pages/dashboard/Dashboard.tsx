import './Dashboard.css';
import { Outlet } from 'react-router-dom';
import { Header, MenuDesktop } from '../../IndexForImport';
import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';
import { signOut, User, getAuth, onAuthStateChanged } from '@firebase/auth';
import api from '../../api';

const Dashboard = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const navigate = useNavigate();
  const handleSignOut = () => signOut(getAuth());

  const checkToken = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user: User | null) => {
      if (user) {
        try {
          const request = await api();
          await request.get('/main-page');
          setLoading(false);
        } catch (e) {
          console.error(e);
        }
      } else {
        navigate('/login');
      }
    });
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <div className='pages'>
          <div className='menu-desktop'>
            <MenuDesktop />
          </div>
          <div className='main'>
            <Header />
            <Outlet />
            <button onClick={handleSignOut}>Sign out</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
