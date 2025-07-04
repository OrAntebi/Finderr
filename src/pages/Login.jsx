import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'

import { userService } from '../services/user'
import { login } from '../store/user/user.actions'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'

export function Login() {
    const [users, setUsers] = useState([])
    const [credentials, setCredentials] = useState({ username: '', password: '', fullname: '' })

    const navigate = useNavigate()

    useEffect(() => {
        loadUsers()
    }, [])

    async function loadUsers() {
        const users = await userService.getUsers()
        const quickLoginUsers = users.filter(user => user.quickLogin)
        setUsers(quickLoginUsers)
    }

    async function onLogin(ev = null) {
        if (ev) ev.preventDefault()

        if (!credentials.username) return
        try {
            const user = await login(credentials)
            showSuccessMsg(`Welcome ${user.fullname}`)
            navigate('/categories')
        } catch {
            showErrorMsg('Cannot login')
        }
    }

    function handleChange(ev) {
        const field = ev.target.name
        const value = ev.target.value
        setCredentials({ ...credentials, [field]: value })
    }
    return (
        <form className="login-form" onSubmit={onLogin}>
            <select
                name="username"
                value={credentials.username}
                onChange={handleChange}>
                <option value="">Select User</option>
                {users.map(user => <option key={user._id} value={user.username}>{user.fullname}</option>)}
            </select>
            <button>Login</button>
        </form>
    )
}