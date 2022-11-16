import React from 'react'
import s from './Message.module.css'
import {MessageOneType, MessageType, userType} from "../HW1";

// нужно создать правильный тип вместо any
export type MessagePropsType = {
    message: MessageType
}

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <div className={s.imageAndText}>
                <img src="https://img5.cliparto.com/pic/xl/206718/7371559-3d-cartoon-avatar-of-smiling-mature-man.jpg"
                     id={'hw1-avatar-' + props.message.id}

                />
                <br/>
                <div className={s.text}>
                    <div id={'hw1-name-' + props.message.id} className={s.name}>
                        {/*создаёт студент*/}
                        Sergio
                        {/**/}
                    </div>
                    <pre id={'hw1-text-' + props.message.id} className={s.messageText}>
                        {/*создаёт студент*/}
                        some new text
                        {/**/}
                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + props.message.id} className={s.time}>
                {/*создаёт студент*/}
                8:59
                {/**/}
            </div>
        </div>
    )
}

export default Message
