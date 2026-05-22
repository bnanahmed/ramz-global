@echo off
chcp 65001 >nul
title Global Icon Constructions - Setup
color 0A

echo.
echo  ╔══════════════════════════════════════════╗
echo  ║   الرمز العالمي للمقاولات - إعداد       ║
echo  ║   Global Icon Constructions - Setup      ║
echo  ╚══════════════════════════════════════════╝
echo.

:: Check Node.js
node --version >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo [خطأ] Node.js غير مثبت!
    echo يرجى تنزيله من: https://nodejs.org
    pause
    exit /b 1
)

echo [✓] Node.js متاح
echo.

:: Install dependencies
echo [1/3] تثبيت المكتبات...
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo [خطأ] فشل تثبيت المكتبات
    pause
    exit /b 1
)
echo [✓] تم تثبيت المكتبات
echo.

:: Build check
echo [2/3] فحص المشروع...
call npm run build
if %ERRORLEVEL% NEQ 0 (
    echo [تحذير] يوجد خطأ في البناء - تشغيل وضع التطوير فقط
)
echo.

:: Run dev server
echo [3/3] تشغيل الخادم المحلي...
echo.
echo  ┌─────────────────────────────────────┐
echo  │  الموقع متاح على:                  │
echo  │  http://localhost:3000              │
echo  └─────────────────────────────────────┘
echo.
start "" "http://localhost:3000"
call npm run dev
