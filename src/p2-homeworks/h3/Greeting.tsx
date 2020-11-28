import React, {ChangeEvent, KeyboardEvent, useRef} from 'react';
import s from './Greeting.module.css';

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
    addUser: (ref: any) => void
    error: boolean
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, onKeyPressHandler, addUser, error, totalUsers}
) => {

    const inputRef = useRef<HTMLInputElement>(null)
    const addUserFn = () => addUser(inputRef)

    const inputClass = s.input + (error ? (' ' + s.inputError) : '')
    const buttonClass = s.submitButton + (error ? (' ' + s.submitButtonError) : '')
    const infoClass = s.info + (error ? (' ' + s.infoErr) : '')
    const info = error? 'Empty input :(' : ('Total users: ' + totalUsers)

    return (
        <div className={s.greeting}>
            <input
                value={name}
                onChange={setNameCallback}
                onKeyPress={onKeyPressHandler}
                className={inputClass}
                ref={inputRef}
            />
            <button onClick={addUserFn}
                    className={buttonClass}
            ><span>Add</span>
            </button>
            <span className={infoClass}>{info}</span>
        </div>
    );
}

export default Greeting;
