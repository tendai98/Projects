echo "TCP Test Data"|nc -vv -l -p 9400 >& /dev/null &
echo "SCTP Test Data"|ncat --sctp -vv -l -p 9600 >& /dev/null &
echo "UDP Test Data"|nc -vv -l -p 9500 -u >& /dev/null  &

echo "TCP Test Data"|nc -vv -l -p 9401 >& /dev/null &
echo "SCTP Test Data"|ncat --sctp -vv -l -p 9601 >& /dev/null &
echo "UDP Test Data"|nc -vv -l -p 9501 -u >& /dev/null  &

