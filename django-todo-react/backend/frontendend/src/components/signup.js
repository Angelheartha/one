import React, { useState } from "react";
import axiosInstance from "../axiosApi";


const Signup = () => {


   const[email, setEmail] = useState("")
   const[password, setPassword] = useState("")
   const[username, setUsername] = useState("")






   const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axiosInstance.post('/user/create/',
             {
                username: username,
                email: email,
                password: password

            },
            {withCredentials:true});
            return response;
        } catch (error) {
            console.log(error.stack);
            this.setState({
                errors:error.response.data
            });
        }
    }



        return (
            <div>
                <p>Signup</p>

                <form className="form" onSubmit={handleSubmit}>
                    <input
                       type="email"
                       name="email"
                       placeholder="メールアドレス"
                       value={email}
                       onChange={event => setEmail(event.target.value)}
                    />
                    <input
                       type="password"
                       name="password"
                       placeholder="パスワード"
                       value={password}
                       onChange={event => setPassword(event.target.value)}
                    />
                    <input
                       type="username"
                       name="username"
                       placeholder="ユーザー名"
                       value={username}
                       onChange={event => setUsername(event.target.value)}
                    />

                   <button type="submit">登録</button>
                </form>
            </div>
        )

}

export default Signup;