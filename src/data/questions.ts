export interface Question {
  id: string;
  question: string;
  answer: string;
  code?: string;
}

export interface QuestionSet {
  id: number;
  title: string;
  questions: Question[];
}

export const questionSets: QuestionSet[] = [
  {
    id: 1,
    title: "Set 1: Basics & Primes",
    questions: [
      {
        id: "1-1",
        question: "Part A: Write a C program that takes two positive integers as input and prints the largest among them.",
        answer: "Use an if-else statement to compare the two numbers and print the one that is greater.",
        code: "#include <stdio.h>\n\nint main() {\n    int a, b;\n    printf(\"Enter two positive integers: \");\n    scanf(\"%d %d\", &a, &b);\n    if (a > b)\n        printf(\"Largest is %d\\n\", a);\n    else\n        printf(\"Largest is %d\\n\", b);\n    return 0;\n}"
      },
      {
        id: "1-2",
        question: "Part A: Write a C program to check whether a given non-negative integer is prime or not.",
        answer: "A prime number is only divisible by 1 and itself. We check for divisibility from 2 up to the square root of the number.",
        code: "#include <stdio.h>\n\nint main() {\n    int n, i, flag = 1;\n    printf(\"Enter a non-negative integer: \");\n    scanf(\"%d\", &n);\n    if (n <= 1) flag = 0;\n    for (i = 2; i <= n / 2; ++i) {\n        if (n % i == 0) {\n            flag = 0;\n            break;\n        }\n    }\n    if (flag) printf(\"%d is prime.\\n\", n);\n    else printf(\"%d is not prime.\\n\", n);\n    return 0;\n}"
      },
      { id: "1-3", question: "Part B: What is a pointer in C?", answer: "A pointer is a variable that stores the memory address of another variable." },
      { id: "1-4", question: "Part B: What is recursion?", answer: "Recursion is a process in which a function calls itself directly or indirectly to solve a problem." },
      { id: "1-5", question: "Part B: What is the syntax of declaring a pointer variable?", answer: "The syntax is: data_type *pointer_name;", code: "int *ptr;" },
      { id: "1-6", question: "Part B: What is dynamic memory allocation?", answer: "It is the process of allocating memory at runtime using functions like malloc(), calloc(), realloc(), and free()." },
      { id: "1-7", question: "Part B: What is the use of printf()?", answer: "printf() is a standard library function used to print formatted output to the standard output (usually the screen)." }
    ]
  },
  {
    id: 2,
    title: "Set 2: Arrays & Loops",
    questions: [
      {
        id: "2-1",
        question: "Part A: Write a C program that prompts the user to enter the radius of the circle and computes the area of a circle.",
        answer: "The area of a circle is calculated using the formula: Area = π * r * r.",
        code: "#include <stdio.h>\n\nint main() {\n    float radius, area;\n    printf(\"Enter radius: \");\n    scanf(\"%f\", &radius);\n    area = 3.14159 * radius * radius;\n    printf(\"Area: %.2f\\n\", area);\n    return 0;\n}"
      },
      {
        id: "2-2",
        question: "Part A: Write a program to read integers from the user, store them in an array, and compute their sum and average.",
        answer: "Iterate through the array to calculate the total sum, then divide by the number of elements to find the average.",
        code: "#include <stdio.h>\n\nint main() {\n    int n, i, sum = 0;\n    float avg;\n    printf(\"Enter number of elements: \");\n    scanf(\"%d\", &n);\n    int arr[n];\n    for(i=0; i<n; i++) {\n        scanf(\"%d\", &arr[i]);\n        sum += arr[i];\n    }\n    avg = (float)sum / n;\n    printf(\"Sum: %d, Avg: %.2f\\n\", sum, avg);\n    return 0;\n}"
      },
      { id: "2-3", question: "Part B: What is an array in C?", answer: "An array is a collection of elements of the same data type stored in contiguous memory locations." },
      { id: "2-4", question: "Part B: What is the difference between while and do while loop?", answer: "A 'while' loop checks the condition before execution (entry-controlled), while a 'do-while' loop executes the body at least once before checking the condition (exit-controlled)." },
      { id: "2-5", question: "Part B: What is scanf() used for?", answer: "scanf() is used to read formatted input from the standard input (usually the keyboard)." },
      { id: "2-6", question: "Part B: Define function in C.", answer: "A function is a self-contained block of code that performs a specific task and can be reused throughout the program." },
      { id: "2-7", question: "Part B: What is the use of header files?", answer: "Header files contain declarations for library functions and macros, allowing them to be used in different source files." }
    ]
  },
  {
    id: 3,
    title: "Set 3: Structures & Armstrong",
    questions: [
      {
        id: "3-1",
        question: "Part A: Write a C program to read and display one dimensional integer array.",
        answer: "Use a loop to input values into the array and another loop to print them.",
        code: "#include <stdio.h>\n\nint main() {\n    int n, i;\n    printf(\"Size: \"); scanf(\"%d\", &n);\n    int arr[n];\n    for(i=0; i<n; i++) scanf(\"%d\", &arr[i]);\n    for(i=0; i<n; i++) printf(\"%d \", arr[i]);\n    return 0;\n}"
      },
      {
        id: "3-2",
        question: "Part A: Write a C program to determine whether a given natural number is an Armstrong number or not.",
        answer: "An Armstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.",
        code: "#include <stdio.h>\n#include <math.h>\n\nint main() {\n    int num, original, rem, n = 0, result = 0;\n    scanf(\"%d\", &num);\n    original = num;\n    while (original != 0) { original /= 10; ++n; }\n    original = num;\n    while (original != 0) {\n        rem = original % 10;\n        result += pow(rem, n);\n        original /= 10;\n    }\n    if (result == num) printf(\"Armstrong\\n\");\n    else printf(\"Not Armstrong\\n\");\n    return 0;\n}"
      },
      { id: "3-3", question: "Part B: What is recursion?", answer: "A function calling itself to solve smaller sub-problems." },
      { id: "3-4", question: "Part B: What is a structure in C?", answer: "A user-defined data type that allows grouping variables of different types under a single name." },
      { id: "3-5", question: "Part B: What is a variable?", answer: "A named storage location in memory used to hold a value that can change during program execution." },
      { id: "3-6", question: "Part B: What is the purpose of return statement?", answer: "It terminates function execution and optionally sends a value back to the caller." },
      { id: "3-7", question: "Part B: Define loop.", answer: "A programming construct that repeats a block of code as long as a specified condition is met." }
    ]
  },
  {
    id: 4,
    title: "Set 4: Strings & Functions",
    questions: [
      {
        id: "4-1",
        question: "Part A: Write a program to concatenate two strings using built-in function.",
        answer: "Use the 'strcat()' function from the <string.h> library.",
        code: "#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char s1[100] = \"Hello \", s2[] = \"World\";\n    strcat(s1, s2);\n    printf(\"%s\", s1);\n    return 0;\n}"
      },
      {
        id: "4-2",
        question: "Part A: Write a C program to read integers from the user, store them in an array, and compute their sum and average.",
        answer: "Sum all elements and divide by count.",
        code: "// Similar to Set 2, Part A, Q2"
      },
      { id: "4-3", question: "Part B: What is a string in C?", answer: "A string is a sequence of characters terminated by a null character ('\\0')." },
      { id: "4-4", question: "Part B: What is strlen() function?", answer: "It returns the length of a string (excluding the null character)." },
      { id: "4-5", question: "Part B: What is strcat() function?", answer: "It appends one string to the end of another string." },
      { id: "4-6", question: "Part B: What is the use of #include directive?", answer: "It tells the preprocessor to include the contents of a file (usually a header file) in the program." },
      { id: "4-7", question: "Part B: What is a function?", answer: "A block of code that performs a specific task." }
    ]
  },
  {
    id: 5,
    title: "Set 5: Search & Constants",
    questions: [
      {
        id: "5-1",
        question: "Part A: Write a program to read a string and find its length using built-in functions.",
        answer: "Use 'strlen()' to find the length.",
        code: "#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str[100];\n    gets(str);\n    printf(\"Length: %lu\", strlen(str));\n    return 0;\n}"
      },
      {
        id: "5-2",
        question: "Part A: Write a C program to check whether the given element is present or not in the array using linear search.",
        answer: "Iterate through the array and compare each element with the target value.",
        code: "#include <stdio.h>\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5}, target = 3, i, found = 0;\n    for(i=0; i<5; i++) {\n        if(arr[i] == target) { found = 1; break; }\n    }\n    if(found) printf(\"Found\"); else printf(\"Not Found\");\n    return 0;\n}"
      },
      { id: "5-3", question: "Part B: What is linear search?", answer: "A simple search algorithm that checks every element in a list sequentially until a match is found." },
      { id: "5-4", question: "Part B: What is an array index?", answer: "A numerical value representing the position of an element in an array, starting from 0." },
      { id: "5-5", question: "Part B: What is a pointer?", answer: "A variable that holds the address of another variable." },
      { id: "5-6", question: "Part B: What is a constant?", answer: "A value that cannot be altered by the program during its execution." },
      { id: "5-7", question: "Part B: What is the difference between = and ==?", answer: "'=' is the assignment operator, while '==' is the equality comparison operator." }
    ]
  },
  {
    id: 6,
    title: "Set 6: Recursion & Sorting",
    questions: [
      {
        id: "6-1",
        question: "Part A: Write a recursive C program to find the factorial of a given number.",
        answer: "Factorial of n is n * factorial(n-1), with base case factorial(0) = 1.",
        code: "#include <stdio.h>\n\nlong int fact(int n) {\n    if (n >= 1) return n * fact(n - 1);\n    else return 1;\n}\n\nint main() {\n    int n; scanf(\"%d\", &n);\n    printf(\"Factorial: %ld\", fact(n));\n    return 0;\n}"
      },
      {
        id: "6-2",
        question: "Part A: Write a program that reads integers and arranges them in ascending order using Bubble Sort.",
        answer: "Repeatedly swap adjacent elements if they are in the wrong order.",
        code: "#include <stdio.h>\n\nint main() {\n    int a[100], n, i, j, temp;\n    scanf(\"%d\", &n);\n    for(i=0; i<n; i++) scanf(\"%d\", &a[i]);\n    for(i=0; i<n-1; i++) {\n        for(j=0; j<n-i-1; j++) {\n            if(a[j] > a[j+1]) {\n                temp = a[j]; a[j] = a[j+1]; a[j+1] = temp;\n            }\n        }\n    }\n    for(i=0; i<n; i++) printf(\"%d \", a[i]);\n    return 0;\n}"
      },
      { id: "6-3", question: "Part B: Define recursion.", answer: "A function calling itself." },
      { id: "6-4", question: "Part B: What is Bubble Sort?", answer: "A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order." },
      { id: "6-5", question: "Part B: What is the base condition in recursion?", answer: "The condition that stops the recursion from continuing infinitely." },
      { id: "6-6", question: "Part B: What is a loop?", answer: "A sequence of instructions that is continually repeated until a certain condition is reached." },
      { id: "6-7", question: "Part B: What is the difference between for and while loop?", answer: "'for' is typically used when the number of iterations is known, while 'while' is used when the condition is the primary driver." }
    ]
  },
  {
    id: 7,
    title: "Set 7: Matrices & Prototypes",
    questions: [
      {
        id: "7-1",
        question: "Part A: Write a program to concatenate two strings using built-in functions.",
        answer: "Use strcat().",
        code: "// Same as Set 4, Part A, Q1"
      },
      {
        id: "7-2",
        question: "Part A: Write a program to perform matrix addition.",
        answer: "Add corresponding elements of two matrices of the same dimensions.",
        code: "#include <stdio.h>\n\nint main() {\n    int a[2][2], b[2][2], sum[2][2], i, j;\n    // Input a and b...\n    for(i=0; i<2; i++)\n        for(j=0; j<2; j++)\n            sum[i][j] = a[i][j] + b[i][j];\n    return 0;\n}"
      },
      { id: "7-3", question: "Part B: What is a function prototype?", answer: "A declaration of a function that specifies its name, return type, and parameters before the function is defined." },
      { id: "7-4", question: "Part B: What is a parameter in function?", answer: "A variable used in a function definition to receive data passed to the function." },
      { id: "7-5", question: "Part B: What is a return value?", answer: "The value that a function sends back to the calling code." },
      { id: "7-6", question: "Part B: What is a library function?", answer: "A built-in function provided by the C standard library (e.g., printf, scanf)." },
      { id: "7-7", question: "Part B: What is void type?", answer: "A keyword used to indicate that a function does not return a value or that a pointer is generic." }
    ]
  },
  {
    id: 8,
    title: "Set 8: Transpose & Identifiers",
    questions: [
      {
        id: "8-1",
        question: "Part A: Write a C program that takes two integers and prints the largest.",
        answer: "Use if-else.",
        code: "// Same as Set 1, Part A, Q1"
      },
      {
        id: "8-2",
        question: "Part A: Write a C program to perform matrix transpose.",
        answer: "Interchange rows and columns of a matrix.",
        code: "#include <stdio.h>\n\nint main() {\n    int a[2][3], trans[3][2], i, j;\n    // Input a...\n    for(i=0; i<2; i++)\n        for(j=0; j<3; j++)\n            trans[j][i] = a[i][j];\n    return 0;\n}"
      },
      { id: "8-3", question: "Part B: What is matrix multiplication?", answer: "An operation that produces a single matrix from two matrices by multiplying rows by columns." },
      { id: "8-4", question: "Part B: What is a nested loop?", answer: "A loop inside another loop." },
      { id: "8-5", question: "Part B: What is an identifier in C?", answer: "A name given to entities like variables, functions, and arrays." },
      { id: "8-6", question: "Part B: What is a keyword in C?", answer: "A reserved word that has a special meaning to the compiler (e.g., int, if, else)." },
      { id: "8-7", question: "Part B: What is main() function?", answer: "The starting point of execution in every C program." }
    ]
  },
  {
    id: 9,
    title: "Set 9: Structures & Members",
    questions: [
      {
        id: "9-1",
        question: "Part A: Write a program to read a string and find its length using built-in function.",
        answer: "Use strlen().",
        code: "// Same as Set 5, Part A, Q1"
      },
      {
        id: "9-2",
        question: "Part A: Write a program to read and print employee data using array of structure.",
        answer: "Define a structure for Employee and create an array of that structure type.",
        code: "#include <stdio.h>\n\nstruct Employee {\n    char name[50];\n    int id;\n};\n\nint main() {\n    struct Employee emp[2];\n    for(int i=0; i<2; i++) {\n        scanf(\"%s %d\", emp[i].name, &emp[i].id);\n    }\n    for(int i=0; i<2; i++) {\n        printf(\"Name: %s, ID: %d\\n\", emp[i].name, emp[i].id);\n    }\n    return 0;\n}"
      },
      { id: "9-3", question: "Part B: What is a structure in C?", answer: "A collection of different data types grouped together." },
      { id: "9-4", question: "Part B: What is struct keyword?", answer: "Used to define a structure." },
      { id: "9-5", question: "Part B: What is a member of structure?", answer: "An individual variable within a structure." },
      { id: "9-6", question: "Part B: What is a data type?", answer: "A classification that specifies which type of value a variable can hold." },
      { id: "9-7", question: "Part B: What is the use of scanf()?", answer: "To read input." }
    ]
  },
  {
    id: 10,
    title: "Set 10: Expressions & Sorting",
    questions: [
      {
        id: "10-1",
        question: "Part A: Write a C program to evaluate arithmetic expression D= (a+b)*(c+a) and display the result.",
        answer: "Input a, b, c and compute the expression.",
        code: "#include <stdio.h>\n\nint main() {\n    int a, b, c, d;\n    scanf(\"%d %d %d\", &a, &b, &c);\n    d = (a + b) * (c + a);\n    printf(\"D = %d\", d);\n    return 0;\n}"
      },
      {
        id: "10-2",
        question: "Part A: Write a program that reads integers and arranges them in ascending order using Bubble Sort.",
        answer: "Standard Bubble Sort.",
        code: "// Same as Set 6, Part A, Q2"
      },
      { id: "10-3", question: "Part B: What is sorting?", answer: "The process of arranging data in a specific order (ascending or descending)." },
      { id: "10-4", question: "Part B: What is a variable?", answer: "A named memory location." },
      { id: "10-5", question: "Part B: What is the difference between char and int data type?", answer: "'char' stores a single character (1 byte), while 'int' stores an integer (usually 4 bytes)." },
      { id: "10-6", question: "Part B: What is a loop control statement?", answer: "Statements like break and continue that alter the flow of a loop." },
      { id: "10-7", question: "Part B: What is a pointer?", answer: "An address-storing variable." }
    ]
  },
  {
    id: 11,
    title: "Set 11: Memory & Circles",
    questions: [
      {
        id: "11-1",
        question: "Part A: Write a C program that prompts the user to enter the radius of the circle and computes the perimeter of a circle.",
        answer: "Perimeter = 2 * π * r.",
        code: "#include <stdio.h>\n\nint main() {\n    float r, p;\n    scanf(\"%f\", &r);\n    p = 2 * 3.14 * r;\n    printf(\"Perimeter: %f\", p);\n    return 0;\n}"
      },
      {
        id: "11-2",
        question: "Part A: Write a C program to read integers from the user, store them in an array, and compute their sum and average.",
        answer: "Sum and average calculation.",
        code: "// Same as Set 2, Part A, Q2"
      },
      { id: "11-3", question: "Part B: Write any two dynamic memory allocation strategies in C?", answer: "malloc() and calloc()." },
      { id: "11-4", question: "Part B: Write different methods of function call.", answer: "Call by Value and Call by Reference." },
      { id: "11-5", question: "Part B: What is union in C?", answer: "A user-defined data type where all members share the same memory location." },
      { id: "11-6", question: "Part B: Write syntax of declaring a pointer variable?", answer: "data_type *ptr_name;" },
      { id: "11-7", question: "Part B: Write syntax of fopen() in C?", answer: "FILE *fopen(const char *filename, const char *mode);" }
    ]
  },
  {
    id: 12,
    title: "Set 12: Search & Smallest",
    questions: [
      {
        id: "12-1",
        question: "Part A: Write a C program that takes two positive integers as input and prints the smallest among them.",
        answer: "Use if-else to find the minimum.",
        code: "#include <stdio.h>\n\nint main() {\n    int a, b;\n    scanf(\"%d %d\", &a, &b);\n    if(a < b) printf(\"Smallest: %d\", a);\n    else printf(\"Smallest: %d\", b);\n    return 0;\n}"
      },
      {
        id: "12-2",
        question: "Part A: Write a C program to check whether the given element is present or not in an array using linear search.",
        answer: "Linear search algorithm.",
        code: "// Same as Set 5, Part A, Q2"
      },
      { id: "12-3", question: "Part B: What is a pointer in C?", answer: "Variable holding memory address." },
      { id: "12-4", question: "Part B: What is recursion?", answer: "Function calling itself." },
      { id: "12-5", question: "Part B: What is the difference between call by value and call by reference?", answer: "Call by value passes a copy; call by reference passes the address." },
      { id: "12-6", question: "Part B: What is dynamic memory allocation in C?", answer: "Allocating memory at runtime." },
      { id: "12-7", question: "Part B: What is the use of fopen() function?", answer: "To open a file for reading, writing, or appending." }
    ]
  }
];
