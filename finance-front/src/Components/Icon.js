import React from "react";
import styles from './componentStyles.module.css';

function Icon({ path, onClick, isActive }) {
  const svgPath = process.env.PUBLIC_URL + "/" + path;
  const backgroundStyle = isActive ? { backgroundColor: 'yellow' } : {};

  return (
    <div className={`${styles.circularDiv}`} onClick={onClick} style={backgroundStyle}>
      <object
        data={svgPath}
        type="image/svg+xml"
        className={styles.icon}
      >
        Tu navegador no admite la visualización de SVG.
      </object>
    </div>
  );
}

export default Icon;
