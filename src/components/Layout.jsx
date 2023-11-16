import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import React from 'react';
import Spiner from './Spiner/Spiner';
import AppBar from './AppBar/AppBar';

export default function Layout() {
  return (
    <>
      <AppBar />
      <main>
        <Suspense fallback={<Spiner />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
