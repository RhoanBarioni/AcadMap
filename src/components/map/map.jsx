import styles from './map.module.scss';


function Map() {
  return (
    <>
        <div className={styles['map-container']}>
            <div className={styles['map-title']}>
                <div className={styles['map-text']}>
                    <h1>Mapa em tempo real</h1>
                    <p>Veja onde cada professor está no campus agora</p>
                </div>
                <div className={styles['button-map']}><a href="">Abrir mapa completo <img src="../src/assets/img/icon/seta.webp" alt="" /></a></div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>professor online</th>
                        <th>sala presente</th>
                        <th>período online</th>
                        <th>matéria - turma</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>asd</td>
                        <td>aaa</td>
                        <td>aaa</td>
                        <td>aaa</td>
                    </tr>
                    <tr>
                        <td>asd</td>
                        <td>aaa</td>
                        <td>aaa</td>
                        <td>aaa</td>
                    </tr>
                    <tr>
                        <td>asd</td>
                        <td>aaa</td>
                        <td>aaa</td>
                        <td>aaa</td>
                    </tr>
                    <tr>
                        <td>asd</td>
                        <td>aaa</td>
                        <td>aaa</td>
                        <td>aaa</td>
                    </tr>
                    <tr>
                        <td>asd</td>
                        <td>aaa</td>
                        <td>aaa</td>
                        <td>aaa</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
  );
}

export default Map;