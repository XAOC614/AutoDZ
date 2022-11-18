import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type ButtonType = 'red' | 'secondary'

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: ButtonType
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        xType = 'secondary',
        className,
        disabled,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {

    const finalClassName = `${s.button} ${s[xType]} ${disabled ? s.disabled : s.default}`
    // const finalClassName = s.button
    //     + (disabled
    //             ? s.secondary
    //             : xType === 'red'
    //                 ? s.red : s.button)
    //     + (className ? ' ' + className : '') // задачка на смешивание классов
    // const finalClassName = `${xType ? s.red : s.default} ${className}`
    return (
        <button
            disabled={disabled}
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
