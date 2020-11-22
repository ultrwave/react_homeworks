import React from 'react';
import Affair from './Affair';
import {AffairType} from './HW2';
import {FilterType} from './HW2';
import Style from './Affairs.module.css';


type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (filterValue: FilterType) => void
    deleteAffairCallback: (affairId: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => props.setFilter('all');
    const setHigh = () => props.setFilter('high');
    const setMiddle = () => props.setFilter('middle');
    const setLow = () => props.setFilter('low');

    return (
        <div className={Style.hw2}>
            <div className={Style.affairsList}>
                {mappedAffairs}
            </div>
            <div className={Style.filters}>
                <button className={Style.filterButton} onClick={setAll}>All</button>
                <button className={Style.filterButton} onClick={setHigh}>High</button>
                <button className={Style.filterButton} onClick={setMiddle}>Middle</button>
                <button className={Style.filterButton} onClick={setLow}>Low</button>
            </div>
        </div>
    );
}

export default Affairs;
