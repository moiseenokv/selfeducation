### How to kill a process which is using port 8080 in windows

Step 1 : Find Process id in windows using command prompt

        netstat  -ano  |  findstr  <Port Number>

Step 2 : Kill the process using command prompt

    taskkill  /F  /PID  <Process Id>

