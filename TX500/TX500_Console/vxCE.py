#!/usr/bin/python3
import json
import sys
import struct

def initVXOpcodeTree():
    try:
        fd = open('VX_Opcodes.json')
        VXJSONData = json.load(fd)
        fd.close()
        return VXJSONData 
    except Exception as e:
        print(str(e))
        sys.exit(-1)

def packVXCode(codeLines=None):
    if (codeLines!=None and type(codeLines) == list):

        try:

            parsedProgramCode = []
            parsedCode = []

            for code in codeLines:
                symbols = code.split(" ")
                for symbol in symbols:
                    if symbol != "":
                        if ("," in symbol):
                            subsymbols = symbol.split(",")
                            for subsymbol in subsymbols:
                                if (subsymbol != ""):
                                    parsedCode.append(subsymbol.replace("\n",""))
                        else:
                            parsedCode.append(symbol.replace("\n",""))
                            
                parsedProgramCode.append(parsedCode)
                parsedCode=[]

            return parsedProgramCode

        except Exception as e:
            return None

    else:
        return None

def encodeVXCode(packedCode=None,VXOpcodeTree = None):
    if (packedCode!=None and type(packedCode) == list and VXOpcodeTree != None):

        try:
            encodedVXCode = []
            encodedVXI = []

            for packedInstruction in packedCode:
                for operand in packedInstruction:
                    
                    if (operand in VXOpcodeTree.keys()):
                        encodedVXI.append(int(VXOpcodeTree[operand]))
                    else:
                        encodedVXI.append(int(operand))

                encodedVXCode.append(encodedVXI)
                encodedVXI=[]

            return encodedVXCode
        except Exception as e:
            return None

    else:
        return None

def binaryEncodeVXCode(encodedCode=None):
    if (encodedCode!=None and type(encodedCode) == list):

        try:
            OutputVXBinary=""
            VXBinaryInstruction=""

            for encodedVXI in encodedCode:
                VXBinaryInstruction+='\xbe\xbe'
                VXBinaryInstruction+=struct.pack("<i",encodedVXI[0])[0:2]
                encodedVXI.pop(0)

                for encodedOperand in encodedVXI:
                    VXBinaryInstruction+=struct.pack("<i",encodedOperand)
                
                OutputVXBinary+=VXBinaryInstruction
                VXBinaryInstruction=""

            return OutputVXBinary

        except Exception as e:
            print(e)
            return None

    else:
        return None
