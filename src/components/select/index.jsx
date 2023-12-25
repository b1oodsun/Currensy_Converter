import React from "react";
import styles from './styles.module.scss';
import Select from "react-select";
import clsx from "clsx";

const CustomSelect = (props) => {
    const{
        value,
        onChange,
        options,
        label,
        className
    } = props
    const selectClassnames = clsx(
        styles['select-wrap'],
        className
    )

    return(
        <div className={styles['select-wrap']}>
            {label && (
                <span className={styles['label']}>
                    {label}
                </span>
            )}
            <Select 
            value={value}
            onChange={onChange}
            options={options}
            />
        </div>
    )
}

export default CustomSelect;