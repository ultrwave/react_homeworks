import React, {ChangeEvent, createRef, KeyboardEvent} from 'react';
import s from './Greeting.module.css';

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // ???
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
    addUser: () => void
    error: boolean
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, onKeyPressHandler, addUser, error, totalUsers}
) => {
    const inputClass = error ? s.inputError : s.inputValid

    const inputRef = createRef<HTMLInputElement>()



    return (
        <div className={s.greeting}>
            <input
                // autoFocus={true} не работает
                value={name}
                onChange={setNameCallback}
                onKeyPress={onKeyPressHandler}
                className={`${inputClass} ${s.nameInput}`}
                ref={inputRef}
            />
            <button onClick={addUser(inputRef)}>add</button>
            <span>{totalUsers}</span>
            <div>
                {/*<span>{error.toString()}</span> /!* поправить *!/*/}
            </div>
        </div>
    );
}

export default Greeting;
