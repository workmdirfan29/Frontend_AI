# Python Conditional Statements
# Conditional statements are used to make decisions in a program.
# They execute different blocks of code based on conditions.


# 1. IF STATEMENT:
# The if statement runs a block of code only when the condition is True.

age = 20

if age >= 18:
    print("You are eligible to vote")


# 2. IF-ELSE STATEMENT:
# The else statement runs when the if condition is False.

age = 15

if age >= 18:
    print("You are eligible to vote")
else:
    print("You are not eligible to vote")


# 3. IF-ELIF-ELSE STATEMENT:
# The elif statement is used to check multiple conditions.
# If one condition is False, it checks the next condition.

age = 10

if age < 13:
    print("You are a child")
elif age < 18:
    print("You are a teenager")
else:
    print("You are an adult")


# 4. Nested IF STATEMENT:
# An if statement inside another if statement is called a nested if statement.

age = 20
has_id = True

if age >= 18:
    if has_id:
        print("You can vote")
    else:
        print("ID is required")
else:
    print("You are not eligible to vote")
