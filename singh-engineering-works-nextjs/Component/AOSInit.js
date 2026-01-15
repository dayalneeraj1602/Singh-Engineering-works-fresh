'use client'

import { useEffect } from 'react';

const AOSInit = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('aos').then((AOS) => {
        AOS.init({ offset: 50 });
      });
    }
  }, []);

  return null;
};

export default AOSInit;