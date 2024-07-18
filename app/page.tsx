"use client";

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootContainer from './home/RootContainer';
import Following from './following/Following';
// import Relay from './relay/Relay';
import Profile from './profile/Profile';
import Setting from './setting/Setting';
import Feeds from './feed/Feeds';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootContainer />,
    children: [
      // { path: '/', element: <Following /> },
      { path: '/', element: <Feeds /> },
      { path: '/following', element: <Following /> },
      // { path: '/relay', element: <Relay /> },
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
