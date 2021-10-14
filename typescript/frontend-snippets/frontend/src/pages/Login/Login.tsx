import React, {useState, useEffect, FormEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../actions/userActions";
import {Message} from "../../components/Message";
import {Link} from "react-router-dom";
import {FullPageLoader} from "../../components/FullPageLoader/FullPageLoader";

export const Login = (props: any) => {
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const userLogin = useSelector((state: any) => state.userLogin);
    const {loading, error, userInfo} = userLogin;


    const redirect = props.location.search
        ? props.location.search.substring(props.location.search.indexOf('=') + 1) : '/';

    useEffect(() => {
        if (userInfo) {
            props.history.push(redirect);
        }
    }, [props.history, userInfo, redirect]);

    const loginSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(login(usernameOrEmail, password));
    };

    return (
        <div id="container" className="justify-content-md-center">
            <div className="row">
                <div className="col-md-6">
                    <h1>ログイン</h1>
                    {error && <Message variant='danger'>{JSON.stringify(error)}</Message>}
                    <form onSubmit={loginSubmitHandler}>

                        <div className="form-group row" id='usernameOrEmail'>
                            <label>メールアドレス</label>
                            <input className="form-control"
                                   placeholder='ユーザー名またはメールアドレス'
                                   required
                                   value={usernameOrEmail}
                                   onChange={(e) => setUsernameOrEmail(e.target.value)}/>
                        </div>

                        <div className="form-group row" id='password'>
                            <label>パスワード</label>
                            <input className="form-control"
                                   placeholder='パスワード'
                                   required
                                   value={password}
                                   onChange={(e) => setPassword(e.target.value)}/>
                        </div>

                        <button type='submit' className='btn btn-primary'>ログイン</button>
                    </form>

                    <div className='py-3'>
                        <div className="col">
                            アカウント作成は <Link
                            to={redirect ? `/register?redirect=${redirect}` : '/register'}>こちら</Link>から
                        </div>
                    </div>
                    <div className='py-1'>
                        <div className="col">
                            <Link to={redirect ? `/forgot?redirect=${redirect}` : '/forgot'}> パスワードを忘れた方はこちら</Link>
                        </div>
                    </div>
                </div>
            </div>
            {loading && <FullPageLoader/>}
        </div>
    );
};
