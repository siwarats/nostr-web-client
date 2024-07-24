import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

export default function RootContainer() {
    return (
        <div className='flex justify-center'>
            <div className='w-full max-w-[1280px] h-screen flex justify-between'>
                <div className='flex w-1/5'>
                    <NavBar />
                </div>
                <div className='flex w-3/5'>
                    <Outlet />
                </div>
                <div className='flex w-1/5'>
                    <div className='pt-[20px]'>
                        Empty Empty Empty Empty Empty Empty Empty Empty Empty Empty Empty Empty Empty Empty Empty
                        Empty Empty Empty Empty Empty Empty Empty Empty Empty Empty Empty Empty Empty Empty Empty
                        Empty Empty Empty Empty Empty Empty Empty Empty Empty Empty Empty Empty Empty Empty Empty
                    </div>
                </div>
            </div>
        </div>
    );
}