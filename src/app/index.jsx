import React from "react";
import Button from "../components/button";
import styles from "./styles.module.scss";
import { useState } from "react";
import CustomSelect from "../components/select";
import Input from "../components/input";

const CURRENCY_OPTIONS = [
  { value: "USD", label: "USD" },
  { value: "AED", label: "AED" },
  { value: "AUD", label: "AUD" },
  { value: "EUR", label: "EUR" },
  { value: "KGS", label: "KGS" },
];

function App() {
  const [fromOption, setFromOption] = useState(null);
  const [toOption, setToOption] = useState(null);
  return (
    <div className={styles["currency-converter-wrap"]}>
      <span className={styles["title"]}> Currency Converter</span>
      <Input 
      className={styles['forms-input']}
      />
      <div className={styles["Selects"]}>
      <CustomSelect
        label="From"
        value={fromOption}
        onChange={(val) => setFromOption(val)}
        options={CURRENCY_OPTIONS}
      />
      <img src="https://cdn-icons-png.flaticon.com/512/7133/7133490.png" 
      className={styles["swap-icon" ]}/>
      
      <CustomSelect
        label="To"
        value={toOption}
        onChange={(val) => setToOption(val)}
        options={CURRENCY_OPTIONS}
      />
      </div>
      <span className={styles["result"]}>1,000 USD=73,704.26 INR</span>
      <Button
        onClick={() => console.log("click")}
        className={styles["convert-btn"]}
      >
        Get Exchange Rate
      </Button>
    </div>
  );
}

export default App;
