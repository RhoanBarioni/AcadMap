import styles from '../style/home.module.scss';

// components
import Menu from '../components/menu/menu.jsx';
import Header from '../components/header/header.jsx';
import Map from '../components/map/map.jsx';


function Home() {
  return (
    <>
      <Menu />
      <main>
        <Header />
          <div className={styles['row']}>
            <div className="mapgraph-container">
              <Map />
              <Header />
            </div>
            <div className="info-container">
              <Header />
              <Header />
            </div>
          </div>
      </main>
    </>
  );
}

export default Home;