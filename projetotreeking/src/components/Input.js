import styles from "./Input.module.css";

function Input({name, typeOfInput, labelName, theme, value, change}){
    let aux;
    theme === 1? aux=(styles.layout_input): aux=(styles.layout_input2);    

    return(
        <div>
            <label className={styles.layout_label} htmlFor={name}>{labelName}</label>
            <input className={aux} id={name} type={typeOfInput} value={value} onChange={change}></input>
        </div>
        
    );
}

export default Input;