// UI
import styles from './Container.module.css';
import SplashScreen from '../../ui/SplashScreen/SplashScreen';

const Container = ({ children, isAPILoading }) => {
  return (
    <>
      {isAPILoading && <SplashScreen />}
      <div className={styles.container}>{children}</div>
    </>
  );
};

export default Container;
