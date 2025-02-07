@echo off
chcp 65001

cd ../../
start /min /b npm run dev
start http://localhost:5173/
