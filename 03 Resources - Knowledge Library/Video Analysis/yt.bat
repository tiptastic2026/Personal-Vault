cls
setlocal enabledelayedexpansion
@echo off

REM =====================================================
REM CHANGE LOG
REM =====================================================
REM Format:
REM YYYY-MM-DD - USER - CHANGE_DESCRIPTION
REM 2026-06-20 - tipta - Completed sanitization loop fixes & extra space trimming.
REM 2026-06-20 - tipta - Updated output directory to local user profile logs folder.
REM 2026-06-20 - tipta - Sanitized quotes from title string to prevent syntax breaks.
REM 2026-06-20 - tipta - Added video length (duration) extraction capability.
REM =====================================================

REM =====================================================
REM VALIDATION
REM =====================================================
IF "%~1"=="" (
    echo.
    echo ERROR: No URL provided.
    echo.
    echo Usage:
    echo     yt "https://youtube.com"
    echo.
    echo Press any key to exit...
    pause >nul
    exit /b 1
)

REM =====================================================
REM SYSTEM ENVIRONMENT SETUP (UPDATED TO LOGS DIRECTORY)
REM =====================================================
set "SCRIPT_NAME=yt_meta"
set "OUTPUT_DIR=C:\Users\tipta\logs"

REM Ensure the target directory exists before writing files
if not exist "%OUTPUT_DIR%" mkdir "%OUTPUT_DIR%"

REM =====================================================
REM MAIN LOGIC
REM =====================================================
echo Fetching video title...
for /f "delims=" %%i in ('yt-dlp --print "%%(title)s" "%~1"') do set "RAW_TITLE=%%i"
echo [OK] Title received.

echo Fetching channel name...
for /f "delims=" %%i in ('yt-dlp --print "%%(uploader)s" "%~1"') do set "CHANNEL=%%i"
echo [OK] Channel received.

echo Fetching video duration...
for /f "delims=" %%i in ('yt-dlp --print "%%(duration_string)s" "%~1"') do set "LENGTH=%%i"
echo [OK] Duration received.


REM =====================================================
REM STRING SANITIZATION & SPACE CLEANING
REM =====================================================

REM 1. Remove quotes and periods FIRST explicitly
set "CLEAN_TITLE=!RAW_TITLE:"=!"
set "CLEAN_TITLE=!CLEAN_TITLE:.=!"
set "CLEAN_CHANNEL=!CHANNEL:"=!"
set "CLEAN_CHANNEL=!CLEAN_CHANNEL:.=!"

REM 2. Then recursively sanitize remaining characters (< > : / \ | ? *)
for %%C in (^< ^> ^: ^/ ^\ ^| ^? ^*) do (
    set "CLEAN_TITLE=!CLEAN_TITLE:%%C=!"
    set "CLEAN_CHANNEL=!CLEAN_CHANNEL:%%C=!"
)

REM 3. Collapse multiple spaces down to a single space
:CollapseSpaces
set "OLD_TITLE=!CLEAN_TITLE!"
set "OLD_CHANNEL=!CLEAN_CHANNEL!"
set "CLEAN_TITLE=!CLEAN_TITLE:  = !"
set "CLEAN_CHANNEL=!CLEAN_CHANNEL:  = !"
if "!CLEAN_TITLE!" neq "!OLD_TITLE!" goto CollapseSpaces
if "!CLEAN_CHANNEL!" neq "!OLD_CHANNEL!" goto CollapseSpaces

REM 4. Strip any accidental leading or trailing edge spaces
for /f "tokens=* delims= " %%a in ("!CLEAN_TITLE!") do set "CLEAN_TITLE=%%a"
for /f "tokens=* delims= " %%a in ("!CLEAN_CHANNEL!") do set "CLEAN_CHANNEL=%%a"


REM =====================================================
REM FILE AND CLIPBOARD GENERATION
REM =====================================================
for /f "tokens=2 delims==" %%i in ('wmic OS Get localdatetime /value') do set dt=%%i
set TS=%dt:~0,4%%dt:~4,2%%dt:~6,2%_%dt:~8,2%%dt:~10,2%%dt:~12,2%

set "OUTPUT_FILE=%OUTPUT_DIR%\%SCRIPT_NAME%_%TS%.txt"

REM Print clean output to console
echo Channel - "!CLEAN_CHANNEL!"
echo Title   - "!CLEAN_TITLE!"
echo Length  - "!LENGTH!"

REM Format the clipboard string cleanly for your template lines
(
echo !CLEAN_CHANNEL!
echo !CLEAN_TITLE!
echo !LENGTH!
) > "%OUTPUT_FILE%"

REM Copy data to Windows Clipboard
type "%OUTPUT_FILE%" | clip

REM =====================================================
REM SUCCESS MESSAGE
REM =====================================================
echo.
echo Log saved to: %OUTPUT_FILE%
echo.
echo Copied formatted metadata lines to clipboard:
echo 1. !CLEAN_CHANNEL!
echo 2. !CLEAN_TITLE!
echo 3. !LENGTH!
