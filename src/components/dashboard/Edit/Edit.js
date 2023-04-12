import { useHistory, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { axios } from '../../../axios/axios';
import { EditForm } from './EditForm/EditForm';
import { ErrorMessage } from '../../Utilities';

const Edit = () => {
    const [project, setProject] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    // If update or delete request doesn't work for some reason, the error will be displayed on top of EditForm.
    // However if fetching a project which is going to be edited fails, then based on fetchError state,
    // I don't even show the editing form to user, but instead show only error emssafe.
    const [fetchError, setFetchError] = useState(null)
    const { projectID } = useParams()
    const history = useHistory()

    const updateProject = async (payload) => {
        setLoading(true)
        setError(null)
        try {
            const response = await axios.patch('/projects/' + projectID, payload)
            const data = await response.data
            setProject(data)
            setLoading(false)
            if(response.status === 200) {
                history.replace('/')
            }
        } catch(err) {
            console.log(err)
            setError(err)
            setLoading(false)
        }
    }

    const deleteProject = async () => {
        setLoading(true)
        setError(null)
        try {
            const response = await axios.delete('/projects/' + projectID)
            setLoading(false)
            if(response.status === 200) {
                history.replace('/')
            }
        } catch(err) {
            console.log(err)
            setError(err)
            setLoading(false)
        }
    }
    
    useEffect(() => {
        const fetchProject = async () => {
            setError(null)
            // setLoading(true)
            try {
                const response = await axios.get('/projects/' + projectID)
                const data = await response.data
                setProject(data)
                // setLoading(false)
            } catch(err) {
                console.log(err)
                setFetchError(err)
                // setLoading(false)
            }
        }
        fetchProject()
    }, [projectID])

    return (
        <div>
            {
                fetchError
                ?
                <ErrorMessage>{fetchError.message}</ErrorMessage>
                :
                <EditForm
                    submit={updateProject}
                    deleteProject={deleteProject}
                    preData={project}
                    loading={loading}
                    error={error}/>
            }
        </div>
    )
}

export { Edit }