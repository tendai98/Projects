#!/usr/bin/python 

from vxCE import *

def initVXOpcodeTree():
    try:
        fd = open('VX_Opcodes.json')
        VXJSONData = json.load(fd)
        fd.close()
        return VXJSONData 
    except Exception as e:
        print(str(e))
        sys.exit(-1)

try:
    VXOpcodeTree = initVXOpcodeTree()
    fd = open(sys.argv[1])
    codeLines = fd.readlines()
    fd.close()

    packedVX = packVXCode(codeLines)
    encodedVX = encodeVXCode(packedVX,VXOpcodeTree)
    outputBinary = binaryEncodeVXCode(encodedVX)

    fd = open(sys.argv[2],'wb')
    fd.write(outputBinary)
    fd.close()


except IndexError:
    print("Example: ./vxcc.py <inputFile> <outputFile>")
    exit(-1)

except Exception as e:
    print("vxcc: %s"%str(e))
    
