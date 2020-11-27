import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Greeting.module.css';

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
    addUser: () => void
    error: boolean
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, onKeyPressHandler, addUser, error, totalUsers}
) => {
    const inputClass = error ? s.inputError : ''
    const buttonClass = error ? s.submitButtonError : ''
    const infoClass = error ? s.infoErr : ''
    const info = error? 'Empty input :(' : ('Total users: ' + totalUsers)

    return (
        <div className={s.greeting}>
            <input
                value={name}
                onChange={setNameCallback}
                onKeyPress={onKeyPressHandler}
                className={`${s.input} ${inputClass}`}
            />
            <button onClick={addUser}
                    className={`${s.submitButton} ${buttonClass}`}
            ><span>Add</span>
            </button>
            <span className={`${s.info} ${infoClass}`}>{info}</span>
        </div>
    );
}

export default Greeting;
