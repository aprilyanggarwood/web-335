# Title: yang_hobbies.py
# Author: April Yang
# Date: 09 07 2022
# Description: Python Conditionals, Lists, and Loops

print("-- LIST OF HOBBIES --")
# Create a list of at least 5 hobbies.
hobbyList = ["traveling","baking","shopping","swimming","hiking"]
# Use a for loop to iterate over the list of hobbies and print them to the console window.
for HL in hobbyList:
    print(HL)


# Create a list of days (Sunday through Saturday).
daysList = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
# Variables are assigned to different strings.
message1 = str("You are off and should enjoy your hobbies!")
message2 = str("It is a work day.")

print('\n')

print("-- LIST OF DAYS WITH MESSAGES--")

# Use a for loop to iterate over the list of days and print them to the console window.
# Use if…else statement to display what the day is.
# For Saturday and Sunday display a message indicating you are off and should enjoy your hobbies.  
# For all other days display a message indicating it is a work day. 
for DL in daysList:
    if DL == daysList[0] or DL == daysList[6]:
       print(DL)
       print(message1)
    else:
       print(DL)       
       print(message2)


        
    
