const Input = (props) => {
    return (
        <div className='form-control'>
            <input type={props.inputType} placeholder={props.placeHolder} ></input>
        </div>
    )
}

export default Input
