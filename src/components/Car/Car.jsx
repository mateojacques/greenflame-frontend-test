import styles from "./car.module.css";

const Car = ({
  name,
  picture,
  category,
  vehGroup,
  code,
  seats,
  largeSuitcase,
  smallSuitcase,
  doors,
  transmition,
  air,
  RateDataKey,
  RateDataName,
  CurrencyCode,
  TotalAmount,
  RateDataKey2,
  RateDataName2,
  CurrencyCode2,
  TotalAmount2,
  RateDataKey3,
  RateDataName3,
  CurrencyCode3,
  TotalAmount3,
  RateDataKey4,
  RateDataName4,
  CurrencyCode4,
  TotalAmount4,
  RateDataKey5,
  RateDataName5,
  CurrencyCode5,
  TotalAmount5,
  onToggleModal
}) => {
  return (
    <article className={styles.car}>
      <div className={styles.car__top}>
        <img src={picture} alt={name} />
        <div>
          <h3>{category}</h3>
          <div>
            <p>
              Group {vehGroup} ({code})
            </p>
            <p>{name}</p>
          </div>
        </div>

        <button className={styles.car__top__btn}>
          <i className="bi-check2"></i> Book now!
        </button>
      </div>

      <div className={styles.car__bottom}>
        <div className={styles.car__bottom__characteristics}>
          <h5>Characteristics</h5>
          <ul>
            <li>
              {" "}
              <i className="bi-asterisk"></i> {seats} seats
            </li>
            <li>
              <i className="bi-asterisk"></i> {largeSuitcase} large suitcase
            </li>
            <li>
              <i className="bi-asterisk"></i>
              {smallSuitcase} small suitcase
            </li>
            <li>
              <i className="bi-asterisk"></i>
              {doors} doors
            </li>
            <li>
              <i className="bi-asterisk"></i>
              {transmition} transmition
            </li>
            <li>
              <i className="bi-asterisk"></i>
              {air}
            </li>
          </ul>
        </div>

        <div className={styles.car__bottom__rates}>
          <h5>Available Rates</h5>
          <div>
            <div className={styles.rates__rateData}>
              <input type="checkbox" />

              <p
                className={styles.rateData__info}
              >{`${RateDataKey} - ${RateDataName}`}</p>

              <p className={styles.rateData__inclusions} onClick={onToggleModal}>Rate Inclusions</p>

              <p className={styles.rateData__total}>
                {`${CurrencyCode}`} <span> {`${TotalAmount}`} </span>
              </p>
            </div>

            <div className={styles.rates__rateData}>
              <input type="checkbox" />

              <p
                className={styles.rateData__info}
              >{`${RateDataKey2} - ${RateDataName2}`}</p>

              <p className={styles.rateData__inclusions} onClick={onToggleModal}>Rate Inclusions</p>

              <p className={styles.rateData__total}>
                {`${CurrencyCode2}`} <span> {`${TotalAmount2}`} </span>
              </p>
            </div>

            <div className={styles.rates__rateData}>
              <input type="checkbox" />

              <p
                className={styles.rateData__info}
              >{`${RateDataKey3} - ${RateDataName3}`}</p>

              <p className={styles.rateData__inclusions} onClick={onToggleModal}>Rate Inclusions</p>

              <p className={styles.rateData__total}>
                {`${CurrencyCode3}`} <span> {`${TotalAmount3}`} </span>
              </p>
            </div>

            <div className={styles.rates__rateData}>
              <input type="checkbox" />

              <p
                className={styles.rateData__info}
              >{`${RateDataKey4} - ${RateDataName4}`}</p>

              <p className={styles.rateData__inclusions} onClick={onToggleModal}>Rate Inclusions</p>

              <p className={styles.rateData__total}>
                {`${CurrencyCode4}`} <span> {`${TotalAmount4}`} </span>
              </p>
            </div>

            <div className={styles.rates__rateData}>
              <input type="checkbox" />

              <p
                className={styles.rateData__info}
              >{`${RateDataKey5} - ${RateDataName5}`}</p>

              <p className={styles.rateData__inclusions} onClick={onToggleModal}>Rate Inclusions</p>

              <p className={styles.rateData__total}>
                {`${CurrencyCode5}`} <span> {`${TotalAmount5}`} </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Car;
