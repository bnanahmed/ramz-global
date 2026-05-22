@echo off
chcp 65001 >nul
echo.
echo ==========================================
echo   Deploying to Vercel...
echo ==========================================
echo.
echo [1/2] Installing Vercel CLI...
call npm install -g vercel
echo.
echo [2/2] Deploying...
call vercel --prod
echo.
echo Done! Your site is live.
pause
