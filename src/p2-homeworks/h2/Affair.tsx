import React from 'react';
import {AffairType} from './HW2';
import Style from './Affairs.module.css';

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (affairId: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = props.deleteAffairCallback

    return (
        <li key={props.affair._id} className={Style.affairItem}>
            <span className={Style.affair}>{props.affair.name}</span>
            <button className={Style.xButton} onClick={() => deleteCallback(props.affair._id)}>x</button>
        </li>
    );
}

export default Affair;
