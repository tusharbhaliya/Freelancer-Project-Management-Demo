import { useState, useContext } from "react"
import {useParams} from 'react-router-dom'
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";
const Delete = props => {
    const { pid } = useParams()
    const auth = useContext(AuthContext)

    const history = useHistory();

    const submitHandler = async event => {
        event.preventDefault()
        try {
            const res = await fetch(`http://localhost:5000/product/delete/${pid}`, {
                method: 'DELETE',
                headers: {
                    Authorization: 'breaer ' + auth.token
                },
               
            })
            const data = await res.json()
            if (res.ok)
                history.push('/')
            console.log(data.message)
        } catch (err) {
            console.log(err)
        }

    }
    return <form onSubmit={submitHandler}>
        <label>Are Sure ? </label>
        <button type="submit"> CONFORM</button>
    </form>
}

export default Delete