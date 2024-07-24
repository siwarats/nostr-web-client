"use client";

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootContainer from './home/RootContainer';
import Following from './following/Following';
import Relays from './relay/Relays';
import Profile from './profile/Profile';
import Setting from './setting/Setting';
import Feeds from './feed/Feeds';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootContainer />,
    children: [
      // { path: '/', element: <Relays /> },
      { path: '/', element: <Feeds /> },
      { path: '/following', element: <Following /> },
      { path: '/relay', element: <Relays /> },
      { path: '/profile', element: <Profile /> },
      { path: '/setting', element: <Setting /> },
    ]
  }
]);


export default function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}
