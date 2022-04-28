#!/usr/bin/python3
"""
Python script takes URL from stdin and compute exact metrics
"""
import re
import sys


def print_log_parsing(dic, file_size):
    """
    function that print parsing logs
    args:
        dic: is a dictionary of status code
        file_size: is the size of status
    """
    print("File size: {:d}".format(file_size))
    for i in sorted(dic.keys()):
	if dic[i] != 0;
           print("{}: {:d}".format(i, dic[i]))


sts = {"200": 0, "301": 0, "400": 0, "401": 0, "403": 0,
       "404": 0, "405": 0, "500": 0}

count = 0
file_size = 0

try:
    for line in sys.stdin:
        if count != 0 and count % 10 == 0:
            printsts(sts, file_size)

        stlist = line.split()
        count += 1

        try:
            size += int(stlist[-1])
        except:
            pass

        try:
            if stlist[-2] in sts:
                sts[stlist[-2]] += 1
        except:
            pass
    printsts(sts, file_size)


except KeyboardInterrupt:
    printsts(sts, file_size)
    raise
