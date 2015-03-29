#!/usr/bin/env python 
"""
ideone.com
API sample

This script shows how to use ideone api.
"""

from SOAPpy import WSDL
from time import sleep
import sys

PYTHON_2 = 4


# creating wsdl client
wsdlObject = WSDL.Proxy('http://ideone.com/api/1/service.wsdl')

# calling test method
#response = wsdlObject.testFunction('celestinew', 'Underdogs!')
#code = 'print "Hello World!"\nfor i in range(10):\n\tprint "I see"\n'
#code2 = 'num = 0\nwhile True:\n\tprint num\n\tnum = num + 1\n'
#code3 = 'printf("this is c code");'

code = sys.argv[2]

response = wsdlObject.createSubmission('celestinew', 'Underdogs!', code, PYTHON_2, '', 1, 0)

print "Code:", str(response['item'][1]['value']) + "~"

'''
sleep(5)

# Don't need this:
response2 = wsdlObject.getSubmissionStatus('celestinew', 'Underdogs!', str(response['item'][1]['value']))

print ""
# printing returned values
for item in response2['item']:
        print item

print ""
'''
# createSubmission takes at most 5 seconds to run
sleep(4)

#response = wsdlObject.getLanguages('celestinew', 'Underdogs!')
response = wsdlObject.getSubmissionDetails('celestinew', 'Underdogs!', str(response['item'][1]['value']), 0, 0, 1, 1, 1)

print "Compilation Info:"
print response['item'][-1]['value'] + "~"
print "Output:"
print response['item'][-3]['value'] + "~"
print "Errors:"
print response['item'][-2]['value']

'''
# printing returned values
for item in response['item']:
        print item
'''
