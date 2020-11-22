import React from 'react';
import Style from './Message.module.css';

export type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={Style.message}>
            <img src={props.avatar} alt='avatar'/>
            <div className={Style.box}>
                <span className={Style.name}>{props.name}</span>
                <p className={Style.text}>{props.message}</p>
                <span className={Style.time}>{props.time}</span>
            </div>
        </div>
    );
}

export default Message;
