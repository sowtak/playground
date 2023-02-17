import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {USER_REGISTER_RESET} from "../../constants/userConstants";
import {register} from "../../actions/userActions";
import {Message} from "../../components/Message";
import {FullPageLoader} from "../../components/FullPageLoader/FullPageLoader";
import {Link, useHistory} from "react-router-dom";

export const Registration = (props: any) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');


    const dispatch = useDispatch();
    const userRegister = useSelector((state: any) => state.userRegister);

    let {loading, error, userInfo} = userRegister;

    const redirect = props.location.search ? props.location.search.substring(props.location.search.indexOf('=') + 1) : '/';

    useEffect(() => {
        if (userInfo) {
            props.history.push(redirect);
        }
    }, [props.history, userInfo, redirect]);

    const registerHandler = (e: any) => {
        setMessage('');
        e.preventDefault();

        if (password !== confirmPassword) {
            setMessage('パスワードが一致しません');
            dispatch({type: USER_REGISTER_RESET});
        } else if (!email.endsWith(`hokudai.ac.jp`)) {
            setMessage("hokudai.ac.jp で終わるメールアドレスのみ使用可能です");
            dispatch({type: USER_REGISTER_RESET});
        } else {
            dispatch(register(username, email, password));
            //props.history.push('/register/mail-sent');
        }
    };


    return (
            <div id="container mt-5" className="justify-content-md-center">
                <div className="row">
                    <div className="col">
                        <h4>新規登録</h4>
                        <hr/>
                        {message && <Message variant='danger'>{message}</Message>}
                        {error && <Message variant='danger'>{JSON.stringify(error)}</Message>}
                        <form onSubmit={registerHandler}>

                            <div className="form-control row">
                                <label className="col-sm-2 col-form-label">ユーザー名</label>
                                <div className="col-sm-4">
                                <input className="form-control py-3"
                                       required
                                       placeholder='日本語、英数字ともに利用できます'
                                       value={username}
                                       onChange={(e) => setUsername(e.target.value)}/>
                                </div>
                            </div>

                            <div className="form-control row">
                                <label className="col-sm-2 col-form-label">メールアドレス</label>
                                <div className="col-sm-4">
                                <input className="form-control py-3"
                                       required
                                       placeholder='hokudai.ac.jp で終わるメールアドレス'
                                       value={email}
                                       onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                            </div>

                            <div className="form-control row">
                                <label className="col-sm-2 col-form-label">パスワード</label>
                                <div className="col-sm-4">
                                <input className="form-control py-3"
                                       required
                                       placeholder='8字以上のパスワード'
                                       type='password'
                                       value={password}
                                       onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                            </div>

                            <div className="form-control row">
                                <label className="col-sm-2 col-form-label">パスワード(確認)</label>
                                <div className="col-sm-4">
                                <input className="form-control py-3"
                                       required
                                       placeholder='確認のためもう一度パスワードを入力してください'
                                       type='password'
                                       value={confirmPassword}
                                       onChange={(e) => setConfirmPassword(e.target.value)}/>
                                </div>
                            </div>

                            <button type='submit' className='btn btn-primary mx-3 py-3'>
                                登録
                            </button>
                        </form>

                        <div className='py-4'>
                            <div className="col">
                                既にアカウントをお持ちですか？ <Link
                                to={redirect ? `/login?redirect=${redirect}` : '/login'}>ログイン</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {loading && <FullPageLoader/>}
            </div>
    );
};

