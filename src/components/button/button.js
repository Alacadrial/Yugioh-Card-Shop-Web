import './button.css'

const Button = (props) => {
    return (
        <>
        <button className="btn" onClick={props.onClickAction}>{props.buttonText}</button>
        </>
    )
}

export default Button
