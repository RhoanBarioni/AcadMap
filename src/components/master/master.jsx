import styles from "./master.module.scss";

// components
import Header from '../header/header.jsx';
import MapGraph from '../mapgraph/mapgraph.jsx';

function Master() {
  return(
    <>
      <Header />
      <div className={styles['row']}>
        {/* <MapGraph /> */}
      </div>
    </>
  );
}

export default Master;