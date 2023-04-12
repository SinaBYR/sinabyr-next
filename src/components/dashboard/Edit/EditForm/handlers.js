export const setValues = (data, e) => {
    const field = e.target.name;

    if(field === 'tech') {
        const newTech = [...data.tech]
        newTech[e.target.id] = e.target.value

        return {
            ...data,
            tech: newTech
        }
    }

    if(field === 'preview') {
        const [file] = e.target.files
        if(!file) {
            return {
                ...data,
                preview: null
            }
        }

        return {
            ...data,
            preview: file
        }
    }

    return {
        ...data,
        [field]: e.target.value
    }
}

export const isValid = (data) => {
    const isValid = Object.keys(data).every(field => {
        // No matter if any image file was chosen or not. For preview filed, I always return true to pass the condition.
        // Because there is already an image in the database anyway. If image file is omitted, it should be FINE.
        if(field === 'preview') {
            return true
        }

        if(field === 'tech') {
            return data.tech.every(value => value.length)
        }

        return data[field].length
    })
    return isValid
}