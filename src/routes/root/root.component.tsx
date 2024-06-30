import Navigation from '@/components/navigation/navigation.component';
import { setCurrentUser } from '@/store/user/user.action';
import {
  createUserDocFromAuth,
  onAuthStateChangedListener,
} from '@/utils/firebase/firebase.utils';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

const Root = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user: any) => {
      if (user) {
        createUserDocFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, []);

  return (
    <>
      <nav>
        <Navigation />
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
