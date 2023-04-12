import classes from './Input.module.css';

const Input = ({ type, label, name, id, value, accept, onChange, onFocus, onBlur }) => {
    let display;
    switch (type) {
        case 'text': {
            display = (
                <>
                    <label htmlFor={id}>{label}</label>
                    <input
                        name={name}
                        id={id}
                        type="text"
                        value={value}
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                    />
                </>
            )
            break
        }
        case 'file': {
            display = (
                <>
                    <label htmlFor={id}>{label}</label>
                    <input
                        name={name}
                        id={id}
                        type="file"
                        accept={accept}
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                    />
                </>
            )
            break
        }
        case 'textarea': {
            display = (
                <>
                    <label htmlFor={id}>{label}</label>
                    <textarea
                        name={name}
                        id={id}
                        type="file"
                        accept={accept}
                        value={value}
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                    />
                </>
            )
            break
        }
        default: {
            return null
        }
    }
    return (
        <div className={classes.Input}>
            {display}
        </div>
    )
}

export { Input }