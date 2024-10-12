import React from "react";
import styles from "../../Assets/css/UserSubscription/SubscribedTradersList.module.css";

function SubscribedTradersList(props) {
  // var trader1 = {
  //   traderName : "John Smith",
  //   username: "john69",
  //   tradingSince: "5th jan 2022",
  //   membership: "Gold",
  //   traderImg: "defaultDP.png"
  // };
  const activeTrader = (index) => {
    console.log(index);
  };

  return (
    <>
      <div className={styles.traderIcon}>
        {console.log(props.traderImg)}
        <img
          src={require("../../Assets/images/Navbar/".concat(props.traderImg))}
          alt="trader img"
          onClick={activeTrader(props.traderData)}
        />
      </div>
    </>
  );
}

export default SubscribedTradersList;
