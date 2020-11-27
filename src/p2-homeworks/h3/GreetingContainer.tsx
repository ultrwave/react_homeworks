import React, {ChangeEvent, KeyboardEvent, createRef, useRef, useState, ReactDOM} from 'react';
import Greeting from './Greeting';
import {UserType} from './HW3';


type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('');
    const [error, setError] = useState<boolean>(false);

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
        setError(false)
    }

    const addUser = (ref) => {
        let newUser = name.trim()
        if (!newUser) {
            setError(true)
        } else {
            alert(`Hello, ` + newUser + '!')
            addUserCallback(newUser)
        }
        setName('')
        // document.querySelector({s.nameInput}).focus() // ts ругается
        // ReactDOM.findDOMNode(this.refs.ref)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') addUser()
    }

    const totalUsers = users.length;

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            onKeyPressHandler={onKeyPressHandler}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    );
}

export default GreetingContainer;
