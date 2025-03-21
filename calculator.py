num1 = float(input("10: "))
operation = input("(+, -, *, /): +")
num2 = float(input("5: "))
if operation == "+":
    result = num1 + num2
elif operation == "-":
    result = num1 - num2
elif operation == "*":
    result = num1 * num2
elif operation == "/":
    if num2 != 0:
        result = num1 / num2
    else:
        result = "Error! Division by zero."
else:
    result = "Invalid operation!"
print(f"The result is: {result}")

