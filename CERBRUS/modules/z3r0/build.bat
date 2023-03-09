copy z3r0.py temp.py
python prebuilder.py 127.0.0.1:9000 temp.py payload.py
pyinstaller --onefile  payload.py
del payload.spec
del temp.py
rmdir /S /Q build
copy dist\payload.exe .
rmdir /S /Q dist 
