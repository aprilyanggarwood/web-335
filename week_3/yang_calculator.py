# Title: yang_calculator.py
# Author: April Yang
# Date: 08 26 2022
# Description: Python Variables and Functions

# Function named add with two parameters and return the added total.
def add(num1,num2):
    return num1 + num2
# Function named subtract with two parameters and return the subtracted total.
def subtract(num1,num2):
    return num1 - num2
# Function named divide with two parameters and return the divided total.
def divide(num1,num2):
    return num1 / num2
# Function named multiply with two parameters and return the multiplied total.
def multiply(num1,num2):
    return num1 * num2

# Variable question is assigned to store the value of input "Y" or "N"
question = input("Do you want to play one, Y or N? ")
while question == "Y": # While input is "Y", then loop the set of statements in the block.
  
  # User will follow the statement to type information
  num1 = input("Type a number: ")
  operation = input("Type a operation: ")
  num2 = input("Type a number: ")

 # Variables are assigned to store results.
  add_result = int(num1) +int(num2)
  subtract_result = int(num1) - int(num2)
  divide_result = int(num1) / int(num2)
  multiply_result = int(num1) * int(num2)

  # The result will be printed in a format <num1 [arithmetic operation] num2 is num3
  if operation == "+":
    print(num1, operation, num2, "is", add_result)
  elif  operation == "-":
    print(num1, operation, num2, "is", subtract_result)
  elif  operation == "/":
    print(num1, operation, num2, "is", divide_result)
  elif  operation == "*":
    print(num1, operation, num2, "is", multiply_result)
 
 # A question will be displayed along with a result print
  question = input("Do you want to play another one, Y or N? ")
  