'use client'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const router = useRouter()

    const handleLogin = async () => {
        try {
            const res = await axios.post('https://softthaiapp.com/Billing-api/api/auth/login', {
                username,
                password
            })

            const token = res.data.token
            localStorage.setItem('token', token)

            router.push('/dashboard')
        } catch (err: any) {

            setError('Username or password is incorrect');
            console.error('เกิดข้อผิดพลาด:', err);
        }
    }

    return (
        <div className="p-4 max-w-md mx-auto">
            <h1 className="text-xl font-bold mb-4">Login</h1>

            <input
                type="text"
                placeholder="Username"
                className="border p-2 w-full mb-2"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                className="border p-2 w-full mb-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            {error && <div className="text-red-500 mb-2">{error}</div>}

            <button
                onClick={handleLogin}
                className="bg-blue-500 text-white px-4 py-2 rounded w-full"
            >
                Login
            </button>
        </div>
    )
}
