#!/bin/bash

kill $(pgrep nc) >& /dev/null
kill $(pgrep ncat) >& /dev/null
cp test_files/* .

printf "[*] Building .SO file...\n"
gcc -shared test_lib.c -o test_lib.so

printf "[*] Forking Test Servers...\n"
bash net_test_servers.sh &

printf "[*] Forking Probe Tester...\n"
 python3 probe_test_handler.py &

printf "[*] Running module tester...\n\n"
python3 test_module.py

printf "[!] Cleaning up...\n"
rm test_lib.so
rm -r __pycache__
rm -r net_test_servers.sh
rm -r probe_test_handler.py
rm -r test_fx.py
rm -r test_lib.c
rm -r test_module.py
rm 01ba4719c80b6

kill $(pgrep nc) >& /dev/null
kill $(pgrep ncat) >& /dev/null
