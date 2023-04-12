import classes from './EditForm.module.css';
import { useState, useEffect } from 'react';
import { ErrorMessage, PrimaryButton, WarningButton, ConfirmButton } from '../../../Utilities';
import { Input } from '../../Input/Input';
import { ScaleLoader } from 'react-spinners'
import { setValues, isValid } from './handlers';

const EditForm = ({ submit, deleteProject, preData, loading, error}) => {
    const [formData,setFormData] = useState({
        title: '',
        preview: null,
        demo: '',
        code: '',
        description: '',
        tech: ['']
    })
    const [isConfirming, setIsConfirming] = useState(false)
    const addInputHandler = () => {
        // I add an empty string to the formData.tech to turn newly added tech input into a controlled input.
        const newTechArray = [...formData.tech]
        newTechArray.push('')
        setFormData({
            ...formData,
            tech: newTechArray
        })
    }
    const deleteInputHandler = () => {
        if(formData.tech.length < 2) {
            return
        }

        const newTechArray = [...formData.tech]
        newTechArray.pop()

        setFormData({
            ...formData,
            tech: newTechArray
        })
    }
    const onChangeHandler = e => {
        setFormData(setValues(formData, e))
    }
    const onSubmitHandler = e => {
        e.preventDefault()

        const data = new FormData()
        Object.keys(formData).forEach(field => {
            // If preview is not being changed, then I don't even want to add it to FormData instance.
            if(field === 'preview' && !formData.preview) {
                return
            }
            
            if(field === 'tech') {
                return formData[field].forEach(value => {
                    data.append('tech[]', value)
                })
            }

            data.append(field, formData[field])
        })

        if(!isValid(formData)) {
            return
        }

        submit(data)
    }
    const showDeleteConfirmation = () => {
        setIsConfirming(true)
    }
    const cancelDeleteHandler = () => {
        setIsConfirming(false)
    }
    const confirmDeleteHandler = () => {
        deleteProject()
    }

    useEffect(() => {
        if(!Object.keys(preData).length) {
            return
        }
        const newFormData = {...formData}
        Object.keys(preData).forEach(field => {
            if(field === '_id' || field === 'preview') {
                return
            }

            newFormData[field] = preData[field]
        })
        setFormData(newFormData)
    }, [preData])

    let techElements = formData.tech.map((_, i) => {
        return (
            <Input
                key={i}
                type="text"
                label={"Tech " + (i + 1)}
                name="tech"
                id={i}
                value={formData.tech[i]}
                onChange={onChangeHandler}
            />
        )
    })

    return (
        <div className={classes.EditForm}>
            <form className={classes.Form} onSubmit={onSubmitHandler}>
                {error && <ErrorMessage>{error.message}</ErrorMessage>}
                <Input
                    key="title"
                    type="text"
                    label="Title"
                    name="title"
                    id="title"
                    value={formData.title}
                    onChange={onChangeHandler}
                    />
                <Input
                    key="demo"
                    type="text"
                    label="Demo Link"
                    id="demo"
                    name="demo"
                    value={formData.demo}
                    onChange={onChangeHandler}
                    />
                <Input
                    key="code"
                    type="text"
                    label="Code Link"
                    id="code"
                    name="code"
                    value={formData.code}
                    onChange={onChangeHandler}
                    />
                <Input
                    key="description"
                    type="textarea"
                    label="Description"
                    name="description"
                    id="description"
                    value={formData.description}
                    onChange={onChangeHandler}
                    />
                <Input
                    key="preview"
                    type="file"
                    label="Preview"
                    name="preview"
                    id="preview"
                    accept="image/png, image/jpeg"
                    onChange={onChangeHandler}
                    />
                <div className={classes.Previews}>
                    {
                        formData.preview
                        // if an image file is chosen, then that image will be displayed.
                        ?
                        <img
                            className={classes.Preview}
                            src={URL.createObjectURL(formData.preview)}
                            alt="upload-preview" />
                        :
                        // if an image file is NOT chosen, then image from database will be displayed.
                        <img
                            className={classes.Preview}
                            src={preData.preview}
                            alt="upload-preview" />
                    }
                </div>
                <div className={classes.Technologies}>{techElements}</div>
                <div className={classes.ButtonsWrapper}>
                    <PrimaryButton type="button" onClick={addInputHandler}>Add Tech</PrimaryButton>
                    <PrimaryButton type="button" onClick={deleteInputHandler}>Delete Tech</PrimaryButton>
                    <ConfirmButton type="submit" onClick={onSubmitHandler} disabled={loading || !isValid(formData)}>
                        {
                            loading
                            ?
                            <ScaleLoader color="#eeeeee" height="10px" radius="2px"/>
                            :
                            'Update'
                        }
                    </ConfirmButton>
                    {
                        isConfirming
                        ?
                        <div className={classes.ConfirmDeleteButtons}>
                            <PrimaryButton type="button" onClick={confirmDeleteHandler}>Yes</PrimaryButton>
                            <PrimaryButton type="button" onClick={cancelDeleteHandler}>No</PrimaryButton>
                        </div>
                        :
                        <WarningButton type="button" onClick={showDeleteConfirmation}>Delete</WarningButton>
                    }
                </div>
            </form>
        </div>
    )
}

export { EditForm }