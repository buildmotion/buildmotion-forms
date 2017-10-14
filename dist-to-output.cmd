REM %1 --> VERSION.
REM Example: buildmotion-forms-%1 becomes buildmotion-forms-1.0.0
xcopy dist\*.* ..\..\output\buildmotion-forms\buildmotion-forms-%1\ /s