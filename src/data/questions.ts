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
      { id: "1-3", question: "Part B: What is a pointer in C?", answer: "A pointer is a variable that stores the memory address of another variable. It is declared using the * operator (e.g., int *ptr;) and allows direct memory manipulation." },
      { id: "1-4", question: "Part B: What is recursion?", answer: "Recursion is a process where a function calls itself directly or indirectly to solve a problem. It requires a base case to stop the execution and prevent infinite loops." },
      { id: "1-5", question: "Part B: What is the syntax of declaring a pointer variable?", answer: "The syntax is: data_type *pointer_name; For example, 'int *p;' declares a pointer 'p' that can store the address of an integer variable.", code: "int *ptr;" },
      { id: "1-6", question: "Part B: What is dynamic memory allocation?", answer: "It is the process of allocating memory at runtime instead of compile time. It uses library functions like malloc(), calloc(), realloc(), and free() to manage memory efficiently." },
      { id: "1-7", question: "Part B: What is the use of printf()?", answer: "printf() is a standard library function used to display formatted output on the screen. It can print strings, integers, floats, and other data types using format specifiers like %d, %f, etc." }
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
      { id: "2-3", question: "Part B: What is an array in C?", answer: "An array is a collection of elements of the same data type stored in contiguous memory locations. It allows storing multiple values under a single name and accessing them using an index." },
      { id: "2-4", question: "Part B: What is the difference between while and do while loop?", answer: "A 'while' loop is an entry-controlled loop that checks the condition before execution. A 'do-while' loop is an exit-controlled loop that executes the body at least once before checking the condition." },
      { id: "2-5", question: "Part B: What is scanf() used for?", answer: "scanf() is a standard library function used to read formatted input from the keyboard. It uses format specifiers and the address-of operator (&) to store values in variables." },
      { id: "2-6", question: "Part B: Define function in C.", answer: "A function is a self-contained block of code that performs a specific task. It helps in code reusability, modularity, and makes the program easier to understand and debug." },
      { id: "2-7", question: "Part B: What is the use of header files?", answer: "Header files contain declarations for library functions and macros. Including them (e.g., #include <stdio.h>) allows the program to use pre-defined functions like printf() and scanf()." }
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
      { id: "3-3", question: "Part B: What is recursion?", answer: "Recursion is a technique where a function calls itself to solve a smaller version of the same problem. It must have a base case to terminate and prevent infinite recursion." },
      { id: "3-4", question: "Part B: What is a structure in C?", answer: "A structure is a user-defined data type that allows grouping variables of different types under a single name. It is useful for representing complex data like student or employee records." },
      { id: "3-5", question: "Part B: What is a variable?", answer: "A variable is a named storage location in memory used to hold a value that can change during program execution. Every variable has a specific data type and a memory address." },
      { id: "3-6", question: "Part B: What is the purpose of return statement?", answer: "The return statement terminates the execution of a function and optionally sends a value back to the calling function. It is also used to exit the main() function." },
      { id: "3-7", question: "Part B: Define loop.", answer: "A loop is a programming construct that repeats a block of code multiple times as long as a specified condition is true. Common loops in C are for, while, and do-while." }
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
      { id: "4-3", question: "Part B: What is a string in C?", answer: "A string is a sequence of characters stored in a character array and terminated by a null character ('\\0'). It is used to store and manipulate text data." },
      { id: "4-4", question: "Part B: What is strlen() function?", answer: "strlen() is a built-in function in <string.h> that returns the number of characters in a string, excluding the null terminator. It is used to find the length of a string." },
      { id: "4-5", question: "Part B: What is strcat() function?", answer: "strcat() is a library function used to concatenate (join) two strings. It appends the source string to the end of the destination string, resulting in a single combined string." },
      { id: "4-6", question: "Part B: What is the use of #include directive?", answer: "The #include directive is a preprocessor command that tells the compiler to include the contents of a specified file (usually a header file) into the source code before compilation." },
      { id: "4-7", question: "Part B: What is a function?", answer: "A function is a block of code designed to perform a specific task. It helps in breaking down a large program into smaller, manageable modules, promoting code reuse and clarity." }
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
      { id: "5-3", question: "Part B: What is linear search?", answer: "Linear search is a simple searching algorithm that checks every element in an array sequentially until the desired element is found or the entire array has been scanned." },
      { id: "5-4", question: "Part B: What is an array index?", answer: "An array index is a numerical value used to identify the position of an element within an array. In C, array indexing always starts from 0 for the first element." },
      { id: "5-5", question: "Part B: What is a pointer?", answer: "A pointer is a variable that stores the memory address of another variable. It allows indirect access to data and is essential for dynamic memory management and efficient data handling." },
      { id: "5-6", question: "Part B: What is a constant?", answer: "A constant is a value that cannot be changed by the program during its execution. Constants can be defined using the 'const' keyword or the '#define' preprocessor directive." },
      { id: "5-7", question: "Part B: What is the difference between = and ==?", answer: "The '=' operator is used for assignment (storing a value in a variable), while the '==' operator is used for comparison (checking if two values are equal)." }
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
      { id: "6-3", question: "Part B: Define recursion.", answer: "Recursion is a process where a function calls itself to solve a problem. It simplifies complex problems by breaking them into smaller, identical sub-problems, requiring a base case to terminate." },
      { id: "6-4", question: "Part B: What is Bubble Sort?", answer: "Bubble Sort is a simple sorting algorithm that repeatedly compares adjacent elements and swaps them if they are in the wrong order. This process continues until the entire list is sorted." },
      { id: "6-5", question: "Part B: What is the base condition in recursion?", answer: "The base condition is a specific case in a recursive function that stops the recursion. Without a base condition, the function would call itself infinitely, leading to a stack overflow error." },
      { id: "6-6", question: "Part B: What is a loop?", answer: "A loop is a sequence of instructions that is repeated until a specific condition is met. Loops are used to perform repetitive tasks efficiently without writing the same code multiple times." },
      { id: "6-7", question: "Part B: What is the difference between for and while loop?", answer: "A 'for' loop is typically used when the number of iterations is known in advance. A 'while' loop is used when the number of iterations depends on a condition being met during execution." }
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
      { id: "7-3", question: "Part B: What is a function prototype?", answer: "A function prototype is a declaration that tells the compiler the function's name, return type, and parameters. It allows the function to be called before its actual definition in the code." },
      { id: "7-4", question: "Part B: What is a parameter in function?", answer: "A parameter is a variable in a function definition that acts as a placeholder for the values (arguments) passed to the function when it is called. It allows functions to work with dynamic data." },
      { id: "7-5", question: "Part B: What is a return value?", answer: "A return value is the result that a function sends back to the calling code using the 'return' statement. It allows a function to communicate the outcome of its task to the rest of the program." },
      { id: "7-6", question: "Part B: What is a library function?", answer: "Library functions are pre-defined functions provided by the C standard library (e.g., printf, scanf, sqrt). They perform common tasks and can be used by including the relevant header files." },
      { id: "7-7", question: "Part B: What is void type?", answer: "The 'void' keyword specifies that a function does not return any value or that it does not take any parameters. It is also used to declare generic pointers (void *) that can point to any data type." }
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
      { id: "8-3", question: "Part B: What is matrix multiplication?", answer: "Matrix multiplication is an operation that takes two matrices and produces a third matrix. It involves multiplying the elements of the rows of the first matrix by the columns of the second matrix." },
      { id: "8-4", question: "Part B: What is a nested loop?", answer: "A nested loop is a loop that is placed inside the body of another loop. The inner loop completes all its iterations for every single iteration of the outer loop, useful for working with 2D arrays." },
      { id: "8-5", question: "Part B: What is an identifier in C?", answer: "An identifier is a unique name given to program elements like variables, functions, and arrays. Identifiers must follow specific naming rules, such as starting with a letter or underscore." },
      { id: "8-6", question: "Part B: What is a keyword in C?", answer: "Keywords are reserved words in C that have a predefined meaning to the compiler (e.g., int, float, if, else). They cannot be used as identifiers (variable or function names)." },
      { id: "8-7", question: "Part B: What is main() function?", answer: "The main() function is the entry point of every C program. Execution starts from main(), and it typically returns an integer value to the operating system to indicate the program's exit status." }
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
      { id: "9-3", question: "Part B: What is a structure in C?", answer: "A structure is a user-defined data type that groups variables of different data types under one name. It is used to represent a single entity with multiple attributes, like a book or a student." },
      { id: "9-4", question: "Part B: What is struct keyword?", answer: "The 'struct' keyword is used to define a structure. It tells the compiler that a new user-defined data type is being created, followed by the structure name and its member variables." },
      { id: "9-5", question: "Part B: What is a member of structure?", answer: "A member of a structure is an individual variable defined within the structure. Members can be of different data types and are accessed using the dot (.) operator with a structure variable." },
      { id: "9-6", question: "Part B: What is a data type?", answer: "A data type specifies the type of data a variable can hold (e.g., int, float, char) and determines the amount of memory allocated to it and the operations that can be performed on it." },
      { id: "9-7", question: "Part B: What is the use of scanf()?", answer: "scanf() is used to read input from the standard input (usually the keyboard). It uses format specifiers to interpret the input data and stores it in the memory address of the specified variables." }
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
      { id: "10-3", question: "Part B: What is sorting?", answer: "Sorting is the process of arranging a collection of data elements in a specific order, either ascending or descending. Common sorting algorithms include Bubble Sort, Selection Sort, and Insertion Sort." },
      { id: "10-4", question: "Part B: What is a variable?", answer: "A variable is a named memory location used to store data that can be modified during program execution. Each variable has a name, a type, and a value." },
      { id: "10-5", question: "Part B: What is the difference between char and int data type?", answer: "The 'char' data type is used to store a single character and typically occupies 1 byte. The 'int' data type is used to store whole numbers and usually occupies 2 or 4 bytes depending on the compiler." },
      { id: "10-6", question: "Part B: What is a loop control statement?", answer: "Loop control statements like 'break' and 'continue' are used to alter the normal flow of a loop. 'break' exits the loop immediately, while 'continue' skips the rest of the current iteration." },
      { id: "10-7", question: "Part B: What is a pointer?", answer: "A pointer is a variable that holds the memory address of another variable. It is a powerful tool in C for dynamic memory allocation, array manipulation, and passing arguments by reference." }
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
      { id: "11-3", question: "Part B: Write any two dynamic memory allocation strategies in C?", answer: "Two common strategies are malloc() (allocates a block of uninitialized memory) and calloc() (allocates multiple blocks of memory and initializes them to zero)." },
      { id: "11-4", question: "Part B: Write different methods of function call.", answer: "The two methods are Call by Value (passing a copy of the argument) and Call by Reference (passing the address of the argument, allowing the function to modify the original value)." },
      { id: "11-5", question: "Part B: What is union in C?", answer: "A union is a user-defined data type that allows storing different data types in the same memory location. All members share the same space, so only one member can be used at a time." },
      { id: "11-6", question: "Part B: Write syntax of declaring a pointer variable?", answer: "The syntax is: data_type *pointer_name; For example, 'float *ptr;' declares a pointer 'ptr' that can store the address of a floating-point variable." },
      { id: "11-7", question: "Part B: Write syntax of fopen() in C?", answer: "The syntax is: FILE *fopen(const char *filename, const char *mode); It opens a file and returns a pointer to a FILE structure, or NULL if the operation fails." }
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
      { id: "12-3", question: "Part B: What is a pointer in C?", answer: "A pointer is a variable that stores the memory address of another variable. It is used for dynamic memory allocation, efficient array handling, and passing variables by reference." },
      { id: "12-4", question: "Part B: What is recursion?", answer: "Recursion is a programming technique where a function calls itself to solve a problem. It requires a base case to terminate and is often used for tasks like factorial calculation or tree traversal." },
      { id: "12-5", question: "Part B: What is the difference between call by value and call by reference?", answer: "In call by value, a copy of the argument is passed, so the original variable remains unchanged. In call by reference, the address is passed, allowing the function to modify the original variable." },
      { id: "12-6", question: "Part B: What is dynamic memory allocation in C?", answer: "Dynamic memory allocation allows a program to request memory from the system during runtime using functions like malloc() and calloc(). This memory must be manually released using free()." },
      { id: "12-7", question: "Part B: What is the use of fopen() function?", answer: "The fopen() function is used to open a file for various operations like reading ('r'), writing ('w'), or appending ('a'). It returns a file pointer used for subsequent file handling tasks." }
    ]
  }
];
