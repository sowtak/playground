@echo off
setlocal enabledelayedexpansion

rem --- メインシーケンス
setlocal
rem コマンド実行位置取得
FOR /F %%i in ('cd') do set pwd=%%i
rem コマンド実行位置に移動
cd %pwd%
rem ローカルパスからコンテストID、タスクIDを取得
rem 例) C:\AtCoder\abc123\a
set contest_id=%pwd:~-8,6%
set task_id=%pwd:~-1%
rem コンテストID、タスクIDをパラメータにして提出コール
call :Submit %contest_id% %task_id%
endlocal
exit /b

rem --- 提出シーケンス
:Submit
rem online-judge-toolsにて言語指定して提出
rem パラメータからURLを作成
oj submit -l 4005 --no-guess https://atcoder.jp/contests/%1/tasks/%1_%2 Main.java
exit /b
