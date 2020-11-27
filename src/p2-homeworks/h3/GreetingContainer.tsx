import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import Greeting from './Greeting';
import {UserType} from './HW3';

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>('');
    const [error, setError] = useState<boolean>(false);

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
        setError(false)
    }

    const addUser = () => {
        let newUser = name.trim()
        if (!newUser) {
            setError(true)
            setTimeout(() => setError(false), 900)
        } else {
            alert(`Hello, ` + newUser + '!')
            addUserCallback(newUser)
        }
        setName('')
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') addUser()
    }

    const totalUsers: number = users.length;

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
