#define JUMP_ZERO_MASK  128
#define JUMP_EQUAL_MASK 64
#define JUMP_NOT_ZERO_MASK  32 
#define JUMP_GREATER_MASK   16
#define JUMP_GREATER_EQUAL_MASK 8
#define JUMP_LESS_MASK  4
#define JUMP_LESS_EQUAL_MASK 2
#define JUMP_NOT_EQUAL_MASK 1

#define GPR32_COUNTER_REG_INDEX 0

// ======================================= [ MATH OPS ] =====================================================

void add(){ VXRegisterCoreUnit.GPR32_Reg[VXInstructionDecoderUnit->operand1] += VXRegisterCoreUnit.GPR32_Reg[VXInstructionDecoderUnit->operand2];}
void sub(){ VXRegisterCoreUnit.GPR32_Reg[VXInstructionDecoderUnit->operand1] -= VXRegisterCoreUnit.GPR32_Reg[VXInstructionDecoderUnit->operand2];}
void mul(){ VXRegisterCoreUnit.GPR32_Reg[VXInstructionDecoderUnit->operand1] *= VXRegisterCoreUnit.GPR32_Reg[VXInstructionDecoderUnit->operand2];}
void divd(){ VXRegisterCoreUnit.GPR32_Reg[VXInstructionDecoderUnit->operand1] /= VXRegisterCoreUnit.GPR32_Reg[VXInstructionDecoderUnit->operand2];}
void mod(){ VXRegisterCoreUnit.GPR32_Reg[VXInstructionDecoderUnit->operand1] %= VXRegisterCoreUnit.GPR32_Reg[VXInstructionDecoderUnit->operand2];}

// ======================================= [ MATH OPS ] =====================================================

// ===================================== [ LOGICAL OPS ] ====================================================

void and_op(){ VXRegisterCoreUnit.GPR32_Reg[VXInstructionDecoderUnit->operand1] &= VXRegisterCoreUnit.GPR32_Reg[VXInstructionDecoderUnit->operand2];}
void or_op(){ VXRegisterCoreUnit.GPR32_Reg[VXInstructionDecoderUnit->operand1] |= VXRegisterCoreUnit.GPR32_Reg[VXInstructionDecoderUnit->operand2];}
void not_op(){ VXRegisterCoreUnit.GPR32_Reg[VXInstructionDecoderUnit->operand1] =! VXRegisterCoreUnit.GPR32_Reg[VXInstructionDecoderUnit->operand1];}
void xor_op(){ VXRegisterCoreUnit.GPR32_Reg[VXInstructionDecoderUnit->operand1] ^= VXRegisterCoreUnit.GPR32_Reg[VXInstructionDecoderUnit->operand2];}
void nand_op(){ VXRegisterCoreUnit.GPR32_Reg[VXInstructionDecoderUnit->operand1] = ! (VXRegisterCoreUnit.GPR32_Reg[VXInstructionDecoderUnit->operand1] & VXRegisterCoreUnit.GPR32_Reg[VXInstructionDecoderUnit->operand2]); }
void nor_op(){ VXRegisterCoreUnit.GPR32_Reg[VXInstructionDecoderUnit->operand1] = ! (VXRegisterCoreUnit.GPR32_Reg[VXInstructionDecoderUnit->operand1] | VXRegisterCoreUnit.GPR32_Reg[VXInstructionDecoderUnit->operand2]);}
void xnor_op(){ VXRegisterCoreUnit.GPR32_Reg[VXInstructionDecoderUnit->operand1] = ! (VXRegisterCoreUnit.GPR32_Reg[VXInstructionDecoderUnit->operand1] ^ VXRegisterCoreUnit.GPR32_Reg[VXInstructionDecoderUnit->operand2]); }

// ===================================== [ LOGICAL OPS ] ====================================================

// ===================================== [ STACK OPS ] ====================================================

void push(){ VXBufferController(INT_WRITE_MODE,VXInstructionDecoderUnit->operand1,VXInstructionDecoderUnit->operand2);}
void pop(){ VXBufferController(INT_READ_MODE,VXInstructionDecoderUnit->operand1,VXInstructionDecoderUnit->operand2);}
void flush_stack(){ for (int i=0;i< STACK_LIMIT;i++){ VXBufferUnit.IntStack[i]=VXInstructionDecoderUnit->operand1;} }

// ===================================== [ STACK OPS ] ====================================================

// ===================================== [ SYSTEM OPS ] ===================================================

void halt(){while(true){delay(MCU_HALT_DELAY);}}
void sleep(){
    switch(VXInstructionDecoderUnit->operand1){
        case MICRO_SEC:
          delayMicroseconds(VXInstructionDecoderUnit->operand2);
          break;
        case MILLI_SEC:
          delay(VXInstructionDecoderUnit->operand2);
          break;
    }
  }
void sysrst(){ESP.reset();}
void reset_vx(){setup();}

// ===================================== [ SYSTEM OPS ] ===================================================

// =================================== [ EXEC_FLOW OPS ] ==================================================

void jmp(){
  if (((VXInstructionDecoderUnit->operand1 % VX_INSTRUCTION_SIZE) == 0 ) && (VXInstructionDecoderUnit->operand1 < VXRegisterCoreUnit.programSize)){
    VXRegisterCoreUnit.VXProgramCounter=VXInstructionDecoderUnit->operand1;
  }
}

void jz(){
  if (((VXInstructionDecoderUnit->operand1 % VX_INSTRUCTION_SIZE) == 0 ) && (VXInstructionDecoderUnit->operand1 < VXRegisterCoreUnit.programSize) && (VXRegisterCoreUnit.flagsRegister[0] & JUMP_ZERO_MASK ) ){
    VXRegisterCoreUnit.VXProgramCounter=VXInstructionDecoderUnit->operand1;
  }
 }
void je(){
  if (((VXInstructionDecoderUnit->operand1 % VX_INSTRUCTION_SIZE) == 0 ) && (VXInstructionDecoderUnit->operand1 < VXRegisterCoreUnit.programSize) && (VXRegisterCoreUnit.flagsRegister[0] & JUMP_EQUAL_MASK ) ){
    VXRegisterCoreUnit.VXProgramCounter=VXInstructionDecoderUnit->operand1;
  }  
}
void jnz(){
  if (((VXInstructionDecoderUnit->operand1 % VX_INSTRUCTION_SIZE) == 0 ) && (VXInstructionDecoderUnit->operand1 < VXRegisterCoreUnit.programSize) && (VXRegisterCoreUnit.flagsRegister[0] & JUMP_NOT_ZERO_MASK) ){
    VXRegisterCoreUnit.VXProgramCounter=VXInstructionDecoderUnit->operand1;
  }   
}
void jg(){
  if (((VXInstructionDecoderUnit->operand1 % VX_INSTRUCTION_SIZE) == 0 ) && (VXInstructionDecoderUnit->operand1 < VXRegisterCoreUnit.programSize) && (VXRegisterCoreUnit.flagsRegister[0] & JUMP_GREATER_MASK) ){
    VXRegisterCoreUnit.VXProgramCounter=VXInstructionDecoderUnit->operand1;
  }   
}
void jge(){
  if (((VXInstructionDecoderUnit->operand1 % VX_INSTRUCTION_SIZE) == 0 ) && (VXInstructionDecoderUnit->operand1 < VXRegisterCoreUnit.programSize) && (VXRegisterCoreUnit.flagsRegister[0] & JUMP_GREATER_EQUAL_MASK) ){
    VXRegisterCoreUnit.VXProgramCounter=VXInstructionDecoderUnit->operand1;
  }   
}
void jl(){
  if (((VXInstructionDecoderUnit->operand1 % VX_INSTRUCTION_SIZE) == 0 ) && (VXInstructionDecoderUnit->operand1 < VXRegisterCoreUnit.programSize) && (VXRegisterCoreUnit.flagsRegister[0] & JUMP_LESS_MASK) ){
    VXRegisterCoreUnit.VXProgramCounter=VXInstructionDecoderUnit->operand1;
  }   
}  

void jle(){
  if (((VXInstructionDecoderUnit->operand1 % VX_INSTRUCTION_SIZE) == 0 ) && (VXInstructionDecoderUnit->operand1 < VXRegisterCoreUnit.programSize) && (VXRegisterCoreUnit.flagsRegister[0] & JUMP_LESS_EQUAL_MASK) ){
    VXRegisterCoreUnit.VXProgramCounter=VXInstructionDecoderUnit->operand1;
  }   
}  

void jne(){
  if (((VXInstructionDecoderUnit->operand1 % VX_INSTRUCTION_SIZE) == 0 ) && (VXInstructionDecoderUnit->operand1 < VXRegisterCoreUnit.programSize) && (VXRegisterCoreUnit.flagsRegister[0] & JUMP_NOT_EQUAL_MASK) ){
    VXRegisterCoreUnit.VXProgramCounter=VXInstructionDecoderUnit->operand1;
  }   
}
void lp(){
   while (((VXInstructionDecoderUnit->operand1 % VX_INSTRUCTION_SIZE) == 0 ) && (VXInstructionDecoderUnit->operand1 < VXRegisterCoreUnit.programSize) && (VXRegisterCoreUnit.GPR32_Reg[GPR32_COUNTER_REG_INDEX] > 0) ){
    VXRegisterCoreUnit.VXProgramCounter=VXInstructionDecoderUnit->operand1;
    VXRegisterCoreUnit.GPR32_Reg[GPR32_COUNTER_REG_INDEX]--;
  }  
}

void lpz(){
  while (((VXInstructionDecoderUnit->operand1 % VX_INSTRUCTION_SIZE) == 0 ) && (VXInstructionDecoderUnit->operand1 < VXRegisterCoreUnit.programSize) && (VXInstructionDecoderUnit->operand1 < VXRegisterCoreUnit.programSize) && (VXRegisterCoreUnit.GPR32_Reg[GPR32_COUNTER_REG_INDEX] != 0 ) ){
    VXRegisterCoreUnit.VXProgramCounter=VXInstructionDecoderUnit->operand1;
    VXRegisterCoreUnit.GPR32_Reg[GPR32_COUNTER_REG_INDEX]--;
  }    
}
void lpe(){
  while (((VXInstructionDecoderUnit->operand1 % VX_INSTRUCTION_SIZE) == 0 ) && (VXInstructionDecoderUnit->operand1 < VXRegisterCoreUnit.programSize) && ((VXInstructionDecoderUnit->operand1 < VXRegisterCoreUnit.programSize) && (VXInstructionDecoderUnit->operand1 < VXRegisterCoreUnit.programSize) && (VXRegisterCoreUnit.GPR32_Reg[GPR32_COUNTER_REG_INDEX] == 0 ))){
    VXRegisterCoreUnit.VXProgramCounter=VXInstructionDecoderUnit->operand1;
    VXRegisterCoreUnit.GPR32_Reg[GPR32_COUNTER_REG_INDEX]--;
  } 
}
void lpnz(){
while (((VXInstructionDecoderUnit->operand1 % VX_INSTRUCTION_SIZE) == 0 ) && (VXInstructionDecoderUnit->operand1 < VXRegisterCoreUnit.programSize) && ((VXRegisterCoreUnit.GPR32_Reg[GPR32_COUNTER_REG_INDEX] > 0)) ){
    VXRegisterCoreUnit.VXProgramCounter=VXInstructionDecoderUnit->operand1;
    VXRegisterCoreUnit.GPR32_Reg[GPR32_COUNTER_REG_INDEX]--;
  }    
}

void cmp(){
  if (VXRegisterCoreUnit.GPR32_Reg[VXInstructionDecoderUnit->operand1] == 0){
    VXRegisterCoreUnit.flagsRegister[0]|=JUMP_ZERO_MASK;
  }
  if (VXRegisterCoreUnit.GPR32_Reg[VXInstructionDecoderUnit->operand1] == VXRegisterCoreUnit.GPR32_Reg[VXInstructionDecoderUnit->operand2]){
    VXRegisterCoreUnit.flagsRegister[0]|=JUMP_EQUAL_MASK;
  }
  if (VXRegisterCoreUnit.GPR32_Reg[VXInstructionDecoderUnit->operand1] != 0){
    VXRegisterCoreUnit.flagsRegister[0]|=JUMP_NOT_ZERO_MASK;
  }
  if (VXRegisterCoreUnit.GPR32_Reg[VXInstructionDecoderUnit->operand1] > VXRegisterCoreUnit.GPR32_Reg[VXInstructionDecoderUnit->operand2]){
    VXRegisterCoreUnit.flagsRegister[0]|=JUMP_GREATER_MASK;
  }
  if (VXRegisterCoreUnit.GPR32_Reg[VXInstructionDecoderUnit->operand1] >= VXRegisterCoreUnit.GPR32_Reg[VXInstructionDecoderUnit->operand2]){
    VXRegisterCoreUnit.flagsRegister[0]|=JUMP_GREATER_EQUAL_MASK;
  }
  if (VXRegisterCoreUnit.GPR32_Reg[VXInstructionDecoderUnit->operand1] < VXRegisterCoreUnit.GPR32_Reg[VXInstructionDecoderUnit->operand2]){
    VXRegisterCoreUnit.flagsRegister[0]|=JUMP_LESS_MASK;
  }
  if (VXRegisterCoreUnit.GPR32_Reg[VXInstructionDecoderUnit->operand1] <= VXRegisterCoreUnit.GPR32_Reg[VXInstructionDecoderUnit->operand2]){
    VXRegisterCoreUnit.flagsRegister[0]|=JUMP_LESS_EQUAL_MASK;
  }
  if (VXRegisterCoreUnit.GPR32_Reg[VXInstructionDecoderUnit->operand1] != VXRegisterCoreUnit.GPR32_Reg[VXInstructionDecoderUnit->operand2]){
    VXRegisterCoreUnit.flagsRegister[0]|=JUMP_NOT_EQUAL_MASK;
  }
  
}

// =================================== [ EXEC_FLOW OPS ] ==================================================

// ================================== [ DATA_REG_IO OPS ] =================================================

void cdr(){;VXRegisterCoreUnit.GPR32_Reg[VXInstructionDecoderUnit->operand1]=VXInstructionDecoderUnit->operand2;}
void crr(){;VXRegisterCoreUnit.GPR32_Reg[VXInstructionDecoderUnit->operand1]=VXRegisterCoreUnit.GPR32_Reg[VXInstructionDecoderUnit->operand2];}
void clear_flags(){Serial.print(" -> CFL");VXRegisterCoreUnit.flagsRegister[0]=0;}

void set_pin_level(){ digitalWrite(VXInstructionDecoderUnit->operand1,VXInstructionDecoderUnit->operand2);}
void set_pin_mode(){ pinMode(VXInstructionDecoderUnit->operand1,VXInstructionDecoderUnit->operand2);}
void pwm(){ analogWrite(VXInstructionDecoderUnit->operand1,VXInstructionDecoderUnit->operand2);}
void read_analog(){ VXRegisterCoreUnit.analogInput=analogRead(A0);}
void set_serial(){ Serial.begin(VXInstructionDecoderUnit->operand1);}

// ================================== [ DATA_REG_IO OPS ] =================================================

// =================================== [ FLOAT MATH OPS ] =================================================

void fcos(){ VXRegisterCoreUnit.FLT32_Reg[VXInstructionDecoderUnit->operand1] = cos(VXRegisterCoreUnit.FLT32_Reg[VXInstructionDecoderUnit->operand2]);}
void fsin(){ VXRegisterCoreUnit.FLT32_Reg[VXInstructionDecoderUnit->operand1] = sin(VXRegisterCoreUnit.FLT32_Reg[VXInstructionDecoderUnit->operand2]);}
void ftan(){ VXRegisterCoreUnit.FLT32_Reg[VXInstructionDecoderUnit->operand1] = tan(VXRegisterCoreUnit.FLT32_Reg[VXInstructionDecoderUnit->operand2]);}
void fmax_(){ VXRegisterCoreUnit.FLT32_Reg[VXInstructionDecoderUnit->operand1] = fmax(VXRegisterCoreUnit.FLT32_Reg[VXInstructionDecoderUnit->operand1],VXRegisterCoreUnit.FLT32_Reg[VXInstructionDecoderUnit->operand2]);}
void fsqr(){ VXRegisterCoreUnit.FLT32_Reg[VXInstructionDecoderUnit->operand1] = VXRegisterCoreUnit.FLT32_Reg[VXInstructionDecoderUnit->operand2] * VXRegisterCoreUnit.FLT32_Reg[VXInstructionDecoderUnit->operand2];}
void fsqrt(){ VXRegisterCoreUnit.FLT32_Reg[VXInstructionDecoderUnit->operand1] = sqrt(VXRegisterCoreUnit.FLT32_Reg[VXInstructionDecoderUnit->operand2]);}
void fmin_(){ VXRegisterCoreUnit.FLT32_Reg[VXInstructionDecoderUnit->operand1] = fmin(VXRegisterCoreUnit.FLT32_Reg[VXInstructionDecoderUnit->operand1],VXRegisterCoreUnit.FLT32_Reg[VXInstructionDecoderUnit->operand2]);}
void fabs_(){ VXRegisterCoreUnit.FLT32_Reg[VXInstructionDecoderUnit->operand1] = fabs(VXRegisterCoreUnit.FLT32_Reg[VXInstructionDecoderUnit->operand2]);}

void srnd(){ randomSeed(VXRegisterCoreUnit.FLT32_Reg[VXInstructionDecoderUnit->operand1]);}
void rnd(){ VXRegisterCoreUnit.FLT32_Reg[VXInstructionDecoderUnit->operand1] = random(VXRegisterCoreUnit.FLT32_Reg[VXInstructionDecoderUnit->operand1],VXRegisterCoreUnit.FLT32_Reg[VXInstructionDecoderUnit->operand2]);}
void fadd(){ VXRegisterCoreUnit.FLT32_Reg[VXInstructionDecoderUnit->operand1] += VXRegisterCoreUnit.FLT32_Reg[VXInstructionDecoderUnit->operand2];}
void fsub(){ VXRegisterCoreUnit.FLT32_Reg[VXInstructionDecoderUnit->operand1] -= VXRegisterCoreUnit.FLT32_Reg[VXInstructionDecoderUnit->operand2];}
void fdiv(){ VXRegisterCoreUnit.FLT32_Reg[VXInstructionDecoderUnit->operand1] /= VXRegisterCoreUnit.FLT32_Reg[VXInstructionDecoderUnit->operand2];}
void fmul(){ VXRegisterCoreUnit.FLT32_Reg[VXInstructionDecoderUnit->operand1] *= VXRegisterCoreUnit.FLT32_Reg[VXInstructionDecoderUnit->operand2];}
void fpow(){ VXRegisterCoreUnit.FLT32_Reg[VXInstructionDecoderUnit->operand1] = pow(VXRegisterCoreUnit.FLT32_Reg[VXInstructionDecoderUnit->operand1],VXRegisterCoreUnit.FLT32_Reg[VXInstructionDecoderUnit->operand2]);}

// =================================== [ FLOAT MATH OPS ] =================================================
// =================================== [ FLOAT IO OPS ] =================================================
void fcv(){
  popFloat.value = VXInstructionDecoderUnit->operand2;
  loadInt = (struct int2Float *) &popFloat.value;
  VXRegisterCoreUnit.FLT32_Reg[VXInstructionDecoderUnit->operand1]=loadInt->value;
}
 
void fcr(){ VXRegisterCoreUnit.FLT32_Reg[VXInstructionDecoderUnit->operand1]=VXRegisterCoreUnit.FLT32_Reg[VXInstructionDecoderUnit->operand2];}
void fpush(){ VXBufferController(FLOAT_WRITE_MODE,VXInstructionDecoderUnit->operand1,VXInstructionDecoderUnit->operand2);}
void fpop(){ VXBufferController(FLOAT_READ_MODE,VXInstructionDecoderUnit->operand1,VXInstructionDecoderUnit->operand2);}
// =================================== [ FLOAT IO OPS ] =================================================

// =================================== [ MISC OPS ] =================================================
void inc(){ VXRegisterCoreUnit.GPR32_Reg[VXInstructionDecoderUnit->operand1]++;}
void dcr(){ VXRegisterCoreUnit.GPR32_Reg[VXInstructionDecoderUnit->operand1]--;}
// =================================== [ MISC OPS ] =================================================

void NOP(){}
