import styles from "./menu.module.scss";

function Menu() {
  return(
    <aside>
      <div className={styles['logo-container']}>
        <a href="#"><img src="../src/assets/img/logo.png" alt="logo" /><span>AcadMap</span></a>
        </div>
      <div className={styles['menu-container']}>
        <ul>
          <li><a href="#"><img src="../src/assets/img/icon/painel-de-controle.webp" alt="" className={styles['icon']} />dashboard</a></li>
          <li><a href="#"><img src="../src/assets/img/icon/comment-regular-full.webp" alt="" className={styles['icon']} />comunicados</a></li>
          <li><a href="#"><img src="../src/assets/img/icon/calendar-regular-full.webp" alt="" className={styles['icon']} />matérias <span>e</span> turmas</a></li>
          <li><a href="#"><img src="../src/assets/img/icon/clock-regular-full.webp" alt="" className={styles['icon']} />horários <span>de</span> aula</a></li>
          <li><a href="#"><img src="../src/assets/img/icon/user-regular-full.webp" alt="" className={styles['icon']} />professores</a></li>
          <li><a href=""><img src="../src/assets/img/info.png" alt="notice" className={styles['img-info']} /></a></li>
          <li><a href="#"><img src="../src/assets/img/icon/warning.webp" alt="" className={styles['icon']} />informações</a></li>
          <li><a href="#"><img src="../src/assets/img/icon/config.webp" alt="" className={styles['icon']} />configurações</a></li>
          <li><a href="#"><img src="../src/assets/img/icon/exit.webp" alt="" className={styles['icon']} />sair <span>da</span> conta</a></li>
        </ul>
      </div>
    </aside>
  );
}

export default Menu;