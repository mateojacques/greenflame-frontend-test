import { useState } from "react";
import styles from "./carList.module.css";
import Car from "../Car/Car";
import Modal from "../Modal/Modal";

import api from "../../api/CarsJson.json";

const CarList = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    function toggleModal(){
        isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true)
    }

  return (
    <div className={styles.carList}>
      {Object.values(api.cars).map((car, i) => {
        const values = Object.values(car)[0];
        return (
          <Car
            key={i}
            name={values.name}
            picture={values.PictureURL}
            category={values.Features2.category}
            vehGroup={values.VehGroup}
            code={values.Code}
            seats={values.Features2.seats}
            largeSuitcase={values.Features2.largeSuitcase}
            smallSuitcase={values.Features2.smallSuitcase}
            doors={values.Features2.doors}
            transmition={values.Features2.transmition}
            air={values.Features2.air}
            RateDataKey={Object.keys(values.Rates)[0]}
            RateDataName={Object.values(values.Rates)[0].RateData.name}
            CurrencyCode={Object.values(values.Rates)[0].CurrencyCode}
            TotalAmount={Math.floor(
              Object.values(values.Rates)[0].RateTotalAmount
            )}
            RateDataKey2={Object.keys(values.Rates)[1]}
            RateDataName2={Object.values(values.Rates)[1].RateData.name}
            CurrencyCode2={Object.values(values.Rates)[1].CurrencyCode}
            TotalAmount2={Math.floor(
              Object.values(values.Rates)[1].RateTotalAmount
            )}
            RateDataKey3={Object.keys(values.Rates)[2]}
            RateDataName3={Object.values(values.Rates)[2].RateData.name}
            CurrencyCode3={Object.values(values.Rates)[2].CurrencyCode}
            TotalAmount3={Math.floor(
              Object.values(values.Rates)[2].RateTotalAmount
            )}
            RateDataKey4={Object.keys(values.Rates)[3]}
            RateDataName4={Object.values(values.Rates)[3].RateData.name}
            CurrencyCode4={Object.values(values.Rates)[3].CurrencyCode}
            TotalAmount4={Math.floor(
              Object.values(values.Rates)[3].RateTotalAmount
            )}
            RateDataKey5={Object.keys(values.Rates)[4]}
            RateDataName5={Object.values(values.Rates)[4].RateData.name}
            CurrencyCode5={Object.values(values.Rates)[4].CurrencyCode}
            TotalAmount5={Math.floor(
              Object.values(values.Rates)[4].RateTotalAmount
            )}
            onToggleModal={toggleModal}
          />
        );
      })}

      {isModalOpen && <Modal onToggleModal={toggleModal}/>}
    </div>
  );
};

export default CarList;
