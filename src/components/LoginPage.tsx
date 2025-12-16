import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useUserStore } from '../store';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {

    const { setUsername, setJwt, username } = useUserStore();
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const login = (username: string, password: string) => {
        try {
            fetch(import.meta.env.VITE_SERVER_URL + "/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password })
            }).then(res => {
                if (res) {
                    setJwt(JSON.stringify(res));
                    navigate("/");
                }
            })
        } catch (error) {
            alert("Login failed: " + error);
        }
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <img src="/images/logo.png" alt="logo" width={250}/>
            <h1>Login</h1>
            <div>
                <TextField
                    id="outlined-basic"
                    label="Username"
                    variant="outlined"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                <TextField
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div style={{ marginTop: '10px' }}>
                <Button variant="contained" color="primary" onClick={() => login(username, password)}>
                    Login
                </Button>
            </div>



        </div>
    )
}