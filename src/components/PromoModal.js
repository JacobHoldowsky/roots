import React, { useEffect } from "react";
import styles from "./PromoModal.module.css";

/**
 * PromoModal
 * Lightweight accessible modal for homepage promo.
 */
const PromoModal = ({ isOpen, onClose, imageSrc }) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.backdrop} role="dialog" aria-modal="true">
      <div className={styles.modal}>
        <button className={styles.closeBtn} aria-label="Close" onClick={onClose}>
          ×
        </button>
        <div className={styles.headerArea}>
          <p className={styles.kicker}>Check out Mimi's new</p>
          <h3 className={styles.title}>Therapeutic Toolkit</h3>
        </div>
        <div className={styles.contentArea}>
          <img src={imageSrc} alt="Therapeutic Toolkit book cover" />
        </div>
        <div className={styles.ctaRow}>
          <a
            className={styles.primaryCta}
            href="https://www.mylittletoolkit.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.mylittletoolkit.com
          </a>
        </div>
        <button className={styles.secondaryCta} onClick={onClose}>
          Stay here to continue and learn more about Roots Rockland's therapy practice
        </button>
      </div>
    </div>
  );
};

export default PromoModal;


