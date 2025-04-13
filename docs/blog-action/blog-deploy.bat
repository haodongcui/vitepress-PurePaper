@echo off
chcp 65001

:: 获取当前日期和时间
for /f "tokens=2 delims==" %%I in ('"wmic os get localdatetime /value"') do set datetime=%%I

:: 提取日期和时间
set year=%datetime:~0,4%
set month=%datetime:~4,2%
set day=%datetime:~6,2%
set hour=%datetime:~8,2%
set minute=%datetime:~10,2%

:: 组装 git commit 消息
set commit_message="于 %year%-%month%-%day% %hour%:%minute% 更新"

:: 执行 git 操作
cd ../../
git add .
git commit -m %commit_message%
git push origin main