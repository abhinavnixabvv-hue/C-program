export interface Question {
  id: string;
  question: string;
  answer: string;
  code?: string;
}

export interface QuestionSet {
  id: number;
  category: "C Lab Exam" | "Previous Question Papers";
  title: string;
  questions: Question[];
}

export const questionSets: QuestionSet[] = [
  {
    id: 1,
    category: "C Lab Exam",
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
      { id: "1-3", question: "Part B: What is a pointer in C?", answer: "A pointer is a variable that stores the memory address of another variable. It is declared using the * operator (e.g., int *ptr;) and allows direct memory manipulation." },
      { id: "1-4", question: "Part B: What is recursion?", answer: "Recursion is a process where a function calls itself directly or indirectly to solve a problem. It requires a base case to stop the execution and prevent infinite loops." },
      { id: "1-5", question: "Part B: What is the syntax of declaring a pointer variable?", answer: "The syntax is: data_type *pointer_name; For example, 'int *p;' declares a pointer 'p' that can store the address of an integer variable.", code: "int *ptr;" },
      { id: "1-6", question: "Part B: What is dynamic memory allocation?", answer: "It is the process of allocating memory at runtime instead of compile time. It uses library functions like malloc(), calloc(), realloc(), and free() to manage memory efficiently." },
      { id: "1-7", question: "Part B: What is the use of printf()?", answer: "printf() is a standard library function used to display formatted output on the screen. It can print strings, integers, floats, and other data types using format specifiers like %d, %f, etc." }
    ]
  },
  {
    id: 2,
    category: "C Lab Exam",
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
      { id: "2-3", question: "Part B: What is an array in C?", answer: "An array is a collection of elements of the same data type stored in contiguous memory locations. It allows storing multiple values under a single name and accessing them using an index." },
      { id: "2-4", question: "Part B: What is the difference between while and do while loop?", answer: "A 'while' loop is an entry-controlled loop that checks the condition before execution. A 'do-while' loop is an exit-controlled loop that executes the body at least once before checking the condition." },
      { id: "2-5", question: "Part B: What is scanf() used for?", answer: "scanf() is a standard library function used to read formatted input from the keyboard. It uses format specifiers and the address-of operator (&) to store values in variables." },
      { id: "2-6", question: "Part B: Define function in C.", answer: "A function is a self-contained block of code that performs a specific task. It helps in code reusability, modularity, and makes the program easier to understand and debug." },
      { id: "2-7", question: "Part B: What is the use of header files?", answer: "Header files contain declarations for library functions and macros. Including them (e.g., #include <stdio.h>) allows the program to use pre-defined functions like printf() and scanf()." }
    ]
  },
  {
    id: 3,
    category: "C Lab Exam",
    title: "Set 3: Structures & Armstrong",
    questions: [
      {
        id: "3-1",
        question: "Part A: Write a C program to read and display one dimensional integer array.",
        answer: "Use a loop to input values into the array and another loop to print them.",
        code: "#include <stdio.h>\n\nint main() {\n    int n;\n\n    printf(\"Enter size of array: \");\n    scanf(\"%d\", &n);\n\n    int arr[n];\n\n    printf(\"Enter %d elements:\\n\", n);\n\n    for(int i = 0; i < n; i++) {\n        scanf(\"%d\", &arr[i]);\n    }\n\n    printf(\"Array elements are:\\n\");\n\n    for(int i = 0; i < n; i++) {\n        printf(\"%d \", arr[i]);\n    }\n\n    return 0;\n}"
      },
      {
        id: "3-2",
        question: "Part A: Write a C program to determine whether a given natural number is an Armstrong number or not.",
        answer: "An Armstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.",
        code: "#include <stdio.h>\n#include <math.h>\n\nint main() {\n    int org, temp, rem, digits = 0;\n    double sum = 0;\n\n    printf(\"Enter a number: \");\n    scanf(\"%d\", &org);\n\n    temp = org;\n\n    while(temp != 0) {\n        digits++;\n        temp = temp / 10;\n    }\n\n    temp = org;\n\n    while(temp != 0) {\n        rem = temp % 10;\n        sum = sum + pow(rem, digits);\n        temp = temp / 10;\n    }\n\n    if(sum == org)\n        printf(\"%d is Armstrong Number\",org);\n    else\n        printf(\"%d is not Armstrong Number\",org);\n\n    return 0;\n}"
      },
      { id: "3-3", question: "Part B: What is recursion?", answer: "Recursion is a technique where a function calls itself to solve a smaller version of the same problem. It must have a base case to terminate and prevent infinite recursion." },
      { id: "3-4", question: "Part B: What is a structure in C?", answer: "A structure is a user-defined data type that allows grouping variables of different types under a single name. It is useful for representing complex data like student or employee records." },
      { id: "3-5", question: "Part B: What is a variable?", answer: "A variable is a named storage location in memory used to hold a value that can change during program execution. Every variable has a specific data type and a memory address." },
      { id: "3-6", question: "Part B: What is the purpose of return statement?", answer: "The return statement terminates the execution of a function and optionally sends a value back to the calling function. It is also used to exit the main() function." },
      { id: "3-7", question: "Part B: Define loop.", answer: "A loop is a programming construct that repeats a block of code multiple times as long as a specified condition is true. Common loops in C are for, while, and do-while." }
    ]
  },
  {
    id: 4,
    category: "C Lab Exam",
    title: "Set 4: Strings & Functions",
    questions: [
      {
        id: "4-1",
        question: "Part A: Write a C program to find the length of a string without using strlen().",
        answer: "Iterate through the string until the null character is reached.",
        code: "#include <stdio.h>\n\nint main() {\n    char str[100];\n    int i = 0;\n    printf(\"Enter string: \");\n    scanf(\"%s\", str);\n    while(str[i] != '\\0') i++;\n    printf(\"Length: %d\", i);\n    return 0;\n}"
      },
      { id: "4-2", question: "Part B: What is a function prototype?", answer: "A function prototype is a declaration of a function that tells the compiler about the function's name, return type, and parameters before its actual definition." }
    ]
  },
  {
    id: 5,
    category: "C Lab Exam",
    title: "Set 5: Search & Constants",
    questions: [
      {
        id: "5-1",
        question: "Part A: Write a C program to perform linear search in an array.",
        answer: "Iterate through the array and compare each element with the target value.",
        code: "#include <stdio.h>\n\nint main() {\n    int n, key, i, found = 0;\n    printf(\"Enter size: \");\n    scanf(\"%d\", &n);\n    int arr[n];\n    for(i=0; i<n; i++) scanf(\"%d\", &arr[i]);\n    printf(\"Enter key: \");\n    scanf(\"%d\", &key);\n    for(i=0; i<n; i++) {\n        if(arr[i] == key) {\n            printf(\"Found at index %d\", i);\n            found = 1;\n            break;\n        }\n    }\n    if(!found) printf(\"Not found\");\n    return 0;\n}"
      }
    ]
  },
  {
    id: 6,
    category: "C Lab Exam",
    title: "Set 6: Recursion & Sorting",
    questions: [
      {
        id: "6-1",
        question: "Part A: Write a C program to find factorial using recursion.",
        answer: "The factorial of n is n * factorial(n-1), with base case factorial(0) = 1.",
        code: "#include <stdio.h>\n\nint fact(int n) {\n    if(n == 0) return 1;\n    return n * fact(n-1);\n}\n\nint main() {\n    int n;\n    printf(\"Enter n: \");\n    scanf(\"%d\", &n);\n    printf(\"Factorial: %d\", fact(n));\n    return 0;\n}"
      }
    ]
  },
  {
    id: 7,
    category: "C Lab Exam",
    title: "Set 7: Matrices & Prototypes",
    questions: [
      {
        id: "7-1",
        question: "Part A: Write a C program to add two 2D matrices.",
        answer: "Iterate through rows and columns, adding corresponding elements.",
        code: "#include <stdio.h>\n\nint main() {\n    int r, c, i, j;\n    printf(\"Enter rows and cols: \");\n    scanf(\"%d %d\", &r, &c);\n    int a[r][c], b[r][c], sum[r][c];\n    for(i=0; i<r; i++) for(j=0; j<c; j++) scanf(\"%d\", &a[i][j]);\n    for(i=0; i<r; i++) for(j=0; j<c; j++) scanf(\"%d\", &b[i][j]);\n    for(i=0; i<r; i++) {\n        for(j=0; j<c; j++) {\n            sum[i][j] = a[i][j] + b[i][j];\n            printf(\"%d \", sum[i][j]);\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}"
      }
    ]
  },
  {
    id: 8,
    category: "C Lab Exam",
    title: "Set 8: Transpose & Identifiers",
    questions: [
      {
        id: "8-1",
        question: "Part A: Write a C program to find the transpose of a matrix.",
        answer: "The transpose is obtained by swapping rows and columns.",
        code: "#include <stdio.h>\n\nint main() {\n    int r, c, i, j;\n    scanf(\"%d %d\", &r, &c);\n    int a[r][c], t[c][r];\n    for(i=0; i<r; i++) for(j=0; j<c; j++) scanf(\"%d\", &a[i][j]);\n    for(i=0; i<r; i++) for(j=0; j<c; j++) t[j][i] = a[i][j];\n    for(i=0; i<c; i++) {\n        for(j=0; j<r; j++) printf(\"%d \", t[i][j]);\n        printf(\"\\n\");\n    }\n    return 0;\n}"
      }
    ]
  },
  {
    id: 9,
    category: "C Lab Exam",
    title: "Set 9: Structures & Members",
    questions: [
      {
        id: "9-1",
        question: "Part A: Write a C program to store student info using structures.",
        answer: "Define a structure with name, roll, and marks, then read and display.",
        code: "#include <stdio.h>\n\nstruct Student {\n    char name[50];\n    int roll;\n    float marks;\n};\n\nint main() {\n    struct Student s;\n    scanf(\"%s %d %f\", s.name, &s.roll, &s.marks);\n    printf(\"Name: %s, Roll: %d, Marks: %.2f\", s.name, s.roll, s.marks);\n    return 0;\n}"
      }
    ]
  },
  {
    id: 10,
    category: "C Lab Exam",
    title: "Set 10: Expressions & Sorting",
    questions: [
      {
        id: "10-1",
        question: "Part A: Write a C program to sort an array using bubble sort.",
        answer: "Repeatedly swap adjacent elements if they are in the wrong order.",
        code: "#include <stdio.h>\n\nint main() {\n    int n, i, j, temp;\n    scanf(\"%d\", &n);\n    int a[n];\n    for(i=0; i<n; i++) scanf(\"%d\", &a[i]);\n    for(i=0; i<n-1; i++) {\n        for(j=0; j<n-i-1; j++) {\n            if(a[j] > a[j+1]) {\n                temp = a[j]; a[j] = a[j+1]; a[j+1] = temp;\n            }\n        }\n    }\n    for(i=0; i<n; i++) printf(\"%d \", a[i]);\n    return 0;\n}"
      }
    ]
  },
  {
    id: 11,
    category: "C Lab Exam",
    title: "Set 11: Memory & Circles",
    questions: [
      {
        id: "11-1",
        question: "Part A: Write a C program to find the area of a circle using a function.",
        answer: "Pass the radius to a function that returns the calculated area.",
        code: "#include <stdio.h>\n\nfloat area(float r) { return 3.14 * r * r; }\n\nint main() {\n    float r;\n    scanf(\"%f\", &r);\n    printf(\"Area: %.2f\", area(r));\n    return 0;\n}"
      }
    ]
  },
  {
    id: 12,
    category: "C Lab Exam",
    title: "Set 12: Search & Smallest",
    questions: [
      {
        id: "12-1",
        question: "Part A: Write a C program to find the smallest element in an array.",
        answer: "Initialize min with the first element and update it if a smaller one is found.",
        code: "#include <stdio.h>\n\nint main() {\n    int n, i, min;\n    scanf(\"%d\", &n);\n    int a[n];\n    for(i=0; i<n; i++) scanf(\"%d\", &a[i]);\n    min = a[0];\n    for(i=1; i<n; i++) if(a[i] < min) min = a[i];\n    printf(\"Smallest: %d\", min);\n    return 0;\n}"
      }
    ]
  },
  {
    id: 13,
    category: "Previous Question Papers",
    title: "KTU Dec 2025: Programming in C",
    questions: [
      {
        id: "13-1",
        question: "Calculate and print the result of: result = 8 + 3 * (10 - 6) / 2;",
        answer: "Following operator precedence (BODMAS/PEMDAS), parentheses are evaluated first, then multiplication and division from left to right, then addition.",
        code: "#include <stdio.h>\n\nint main() {\n    int result = 8 + 3 * (10 - 6) / 2;\n    printf(\"%d\", result);\n    return 0;\n}"
      },
      {
        id: "13-2",
        question: "Differentiate between entry-controlled and exit-controlled loops in C.",
        answer: "Entry-controlled loops (for, while) check the condition before executing the loop body. Exit-controlled loops (do-while) execute the body first and then check the condition.",
        code: "// Entry-controlled (while)\nwhile(condition) { ... }\n\n// Exit-controlled (do-while)\ndo { ... } while(condition);"
      },
      {
        id: "13-3",
        question: "Write a C program to calculate the length of a string without using any built-in string handling functions.",
        answer: "Iterate through the character array until the null character ('\\0') is encountered.",
        code: "#include <stdio.h>\n\nint main() {\n    char str[100];\n    int length = 0;\n    printf(\"Enter a string: \");\n    scanf(\"%s\", str);\n    while(str[length] != '\\0') {\n        length++;\n    }\n    printf(\"Length: %d\", length);\n    return 0;\n}"
      },
      {
        id: "13-4",
        question: "Write a C program to find the second largest element in an array.",
        answer: "Keep track of the largest and second largest while iterating through the array.",
        code: "#include <stdio.h>\n#include <limits.h>\n\nint main() {\n    int n, i, first, second;\n    printf(\"Enter size: \");\n    scanf(\"%d\", &n);\n    int arr[n];\n    for(i=0; i<n; i++) scanf(\"%d\", &arr[i]);\n    first = second = INT_MIN;\n    for(i=0; i<n; i++) {\n        if(arr[i] > first) {\n            second = first;\n            first = arr[i];\n        } else if(arr[i] > second && arr[i] != first) {\n            second = arr[i];\n        }\n    }\n    printf(\"Second largest: %d\", second);\n    return 0;\n}"
      }
    ]
  },
  {
    id: 14,
    category: "Previous Question Papers",
    title: "KTU May 2025: Programming in C",
    questions: [
      {
        id: "14-1",
        question: "What will be the output of: a & b (a=5, b=9)?",
        answer: "5 in binary is 0101, 9 is 1001. Bitwise AND (0101 & 1001) results in 0001, which is 1.",
        code: "#include <stdio.h>\n\nint main() {\n    int a = 5, b = 9;\n    printf(\"%d\", a & b);\n    return 0;\n}"
      },
      {
        id: "14-2",
        question: "Write a C program to check if a number is a strong number.",
        answer: "A strong number is a number where the sum of the factorials of its digits equals the number itself.",
        code: "#include <stdio.h>\n\nint fact(int n) {\n    if(n == 0) return 1;\n    return n * fact(n-1);\n}\n\nint main() {\n    int n, temp, rem, sum = 0;\n    printf(\"Enter number: \");\n    scanf(\"%d\", &n);\n    temp = n;\n    while(temp > 0) {\n        rem = temp % 10;\n        sum += fact(rem);\n        temp /= 10;\n    }\n    if(sum == n) printf(\"Strong number\");\n    else printf(\"Not a strong number\");\n    return 0;\n}"
      }
    ]
  }
];
;
