import styles from "./modal.module.css"

const Modal = ({onToggleModal}) => {
    return (
        <div className={styles.modal}>
            <div className={styles.modal__content}>
                <h5 className={styles.modal__content__title}>Rate information</h5>

                <h6 className={styles.modal__content__subtitle}>AR - Most Inclusive</h6>

                <ul>
                    <li>
                        <i className="bi-chevron-right"></i>
                        Unlimited mileage
                    </li>
                    <li>
                        <i className="bi-chevron-right"></i>
                        LDW - Loss Damage Waiver
                    </li>
                    <li>
                        <i className="bi-chevron-right"></i>
                        TPL - Third Party Liability
                    </li>
                    <li>
                        <i className="bi-chevron-right"></i>
                        Local and state TAX
                    </li>
                    <li>
                        <i className="bi-chevron-right"></i>
                        Airport surcharge
                    </li>
                    <li>
                        <i className="bi-chevron-right"></i>
                        First additional driver
                    </li>
                    <li>
                        <i className="bi-chevron-right"></i>
                        Tank of gas
                    </li>
                    <li>
                        <i className="bi-chevron-right"></i>
                        RSN - Roadside assistance
                    </li>
                    <li>
                        <i className="bi-chevron-right"></i>
                        GPS - Satellite Navigator
                    </li>
                </ul>

                <button className={styles.closeModalBtn} onClick={onToggleModal}><i className="bi-x"></i></button>
            </div>

            
        </div>
    )
}

export default Modal
