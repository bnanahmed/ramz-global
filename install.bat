@echo off
chcp 65001 >nul
echo.
echo ==========================================
echo   Global Icon Constructions - Setup
echo ==========================================
echo.
echo [1/3] Installing dependencies...
call npm install
echo.
echo [2/3] Building project...
call npm run build
echo.
echo [3/3] Done! Starting dev server...
echo.
echo Open: http://localhost:3000
echo.
call npm run dev
