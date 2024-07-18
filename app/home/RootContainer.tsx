import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import styles from './RootContainer.module.css';

export default function RootContainer() {
    return (
        <div className={styles.rootContainer}>
            <div className={styles.mainContainer}>
                <div className={styles.leftContainer}>
                    <NavBar />
                </div>
                <div className={styles.middleContainer}>
                    <Outlet />
                </div>
                <div className={styles.rightContainer}>
                    third
                </div>
            </div>
        </div>
    );
}