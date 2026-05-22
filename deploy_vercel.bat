@echo off
chcp 65001 >nul
title Deploy to Vercel
color 0B

echo.
echo  ╔══════════════════════════════════════════╗
echo  ║      رفع الموقع على Vercel              ║
echo  ╚══════════════════════════════════════════╝
echo.

:: Check npm
npm --version >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo [خطأ] npm غير متاح
    pause
    exit /b 1
)

:: Install Vercel CLI
echo [1/4] تثبيت Vercel CLI...
call npm install -g vercel
echo [✓] تم تثبيت Vercel CLI
echo.

:: Login
echo [2/4] تسجيل الدخول لـ Vercel...
echo (سيفتح المتصفح - سجل دخولك)
call vercel login
echo.

:: Build
echo [3/4] بناء المشروع...
call npm run build
echo.

:: Deploy
echo [4/4] رفع الموقع...
call vercel --prod
echo.
echo  ╔══════════════════════════════════════════╗
echo  ║  ✅ تم رفع الموقع بنجاح على Vercel!    ║
echo  ╚══════════════════════════════════════════╝
echo.
pause
