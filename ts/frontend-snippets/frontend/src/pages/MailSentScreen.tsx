import React from "react";
import {Container} from "react-bootstrap";


export const MailSentScreen = (props: any) => {
    return (
        <div>
            <Container>
                <h1>仮登録が完了しました</h1>
                <h2>アカウント有効化リンクを記載したメールを送信したので、リンクをクリックしてアカウント登録を完了させてください</h2>
            </Container>
        </div>
    )
}