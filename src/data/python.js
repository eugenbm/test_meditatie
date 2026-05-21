/**
 * PYTHON.JS - Bază de întrebări Python pentru clasa a 7-a
 * 150+ întrebări structurate pe categorii
 * Nivel: Începători (10-12 ani)
 */

export const python = [
    // ===== BASICS - 20 ÎNTREBĂRI =====
    {
        id: 'python_001',
        category: 'Basics',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce este Python?',
        options: [
            'Un limbaj de programare',
            'Un limbaj natural (ca engleză)',
            'O bibliotecă',
            'Un sistem de operare'
        ],
        correctAnswer: 'Un limbaj de programare',
        explanation: 'Python este un limbaj de programare interpretat, creat în 1991 de Guido van Rossum. Este cunoscut pentru sintaxa simplă și lizibilă, perfectă pentru începători.'
    },
    {
        id: 'python_002',
        category: 'Basics',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Care este extensia unui fișier Python?',
        options: [
            '.py',
            '.python',
            '.pth',
            '.pyc'
        ],
        correctAnswer: '.py',
        explanation: 'Fișierele Python se salvează cu extensia .py. De exemplu: hello.py, program.py, etc.'
    },
    {
        id: 'python_003',
        category: 'Basics',
        type: 'true-false',
        difficulty: 'easy',
        question: 'Python este un limbaj compilat.',
        correctAnswer: 'Fals',
        explanation: 'Python este un limbaj interpretat. Asta înseamnă că codul se execută direct fără a fi compilat mai întâi.'
    },
    {
        id: 'python_004',
        category: 'Basics',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce comandă se folosește pentru a porni Python în terminal?',
        options: [
            'python sau python3',
            'run python',
            'start python',
            'java python'
        ],
        correctAnswer: 'python sau python3',
        explanation: 'În terminal, scriem "python" sau "python3" pentru a deschide interpretatorul Python și pentru a rula programe.'
    },
    {
        id: 'python_005',
        category: 'Basics',
        type: 'true-false',
        difficulty: 'easy',
        question: 'Python este sensibil la majuscule și minuscule (case-sensitive).',
        correctAnswer: 'Adevărat',
        explanation: 'Da, Python este case-sensitive. "variabila", "Variabila" și "VARIABILA" sunt trei variabile diferite.'
    },
    {
        id: 'python_006',
        category: 'Basics',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Care este scopul unui comentariu în Python?',
        options: [
            'Să explice codul (nu afectează execuția)',
            'Să declare variabile',
            'Să inițieze bucle',
            'Să compileze programul'
        ],
        correctAnswer: 'Să explice codul (nu afectează execuția)',
        explanation: 'Comentariile încep cu # și nu sunt executate. Sunt folosite pentru a explica codul pentru alți programatori sau pentru tine în viitor.'
    },
    {
        id: 'python_007',
        category: 'Basics',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa print("Hello World")?',
        options: [
            'Hello World',
            'Hello',
            'World',
            '"Hello World"'
        ],
        correctAnswer: 'Hello World',
        explanation: 'Funcția print() afișează textul pe ecran. Aceasta va afișa: Hello World'
    },
    {
        id: 'python_008',
        category: 'Basics',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Cum se defineşte o variabilă în Python?',
        options: [
            'nume = valoare',
            'var nume = valoare',
            'declare nume = valoare',
            'int nume = valoare'
        ],
        correctAnswer: 'nume = valoare',
        explanation: 'În Python, variabilele se crează simplu prin asignare: nume = valoare. Nu trebuie declarate tipuri de date.'
    },
    {
        id: 'python_009',
        category: 'Basics',
        type: 'true-false',
        difficulty: 'easy',
        question: 'Variabilele în Python trebuie declarate cu un tip de date.',
        correctAnswer: 'Fals',
        explanation: 'Python este cu tipare dinamice. Tipul unei variabile se determină automat pe baza valorii asignate.'
    },
    {
        id: 'python_010',
        category: 'Basics',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Care este rezultatul: type(5)?',
        options: [
            '<class \'int\'>',
            '<class \'float\'>',
            '<class \'str\'>',
            '<class \'bool\'>'
        ],
        correctAnswer: '<class \'int\'>',
        explanation: 'type(5) returnează tipul datei. 5 este un întreg (integer), deci răspunsul este <class \'int\'>.'
    },
    {
        id: 'python_011',
        category: 'Basics',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa: print(10 + 5)?',
        options: [
            '15',
            '10',
            '5',
            '105'
        ],
        correctAnswer: '15',
        explanation: 'Operația de adunare: 10 + 5 = 15. print() va afișa rezultatul: 15'
    },
    {
        id: 'python_012',
        category: 'Basics',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Care din următoarele este un tip de dato corect în Python?',
        options: [
            'int (întreg)',
            'float (zecimal)',
            'str (text)',
            'Toate de mai sus'
        ],
        correctAnswer: 'Toate de mai sus',
        explanation: 'Python are mai mult tipuri de date: int (întreg), float (zecimal), str (text), bool (adevărat/fals), list, dict, etc.'
    },
    {
        id: 'python_013',
        category: 'Basics',
        type: 'true-false',
        difficulty: 'easy',
        question: '"5" este același cu 5 în Python.',
        correctAnswer: 'Fals',
        explanation: '"5" este un text (string), iar 5 este un număr (integer). Sunt tipuri diferite de date.'
    },
    {
        id: 'python_014',
        category: 'Basics',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa: print(10 - 3)?',
        options: [
            '7',
            '13',
            '3',
            '10'
        ],
        correctAnswer: '7',
        explanation: 'Operația de scădere: 10 - 3 = 7. print() va afișa: 7'
    },
    {
        id: 'python_015',
        category: 'Basics',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa: print(4 * 5)?',
        options: [
            '20',
            '9',
            '1',
            '45'
        ],
        correctAnswer: '20',
        explanation: 'Operația de înmulțire: 4 * 5 = 20. print() va afișa: 20'
    },
    {
        id: 'python_016',
        category: 'Basics',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa: print(20 / 4)?',
        options: [
            '5.0',
            '5',
            '4',
            '0.2'
        ],
        correctAnswer: '5.0',
        explanation: 'Operația de împărțire: 20 / 4 = 5.0. În Python 3, / returnează întotdeauna un float.'
    },
    {
        id: 'python_017',
        category: 'Basics',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa: print(2 ** 3)?',
        options: [
            '8',
            '6',
            '5',
            '9'
        ],
        correctAnswer: '8',
        explanation: 'Operatorul ** este pentru putere. 2 ** 3 = 2³ = 8. print() va afișa: 8'
    },
    {
        id: 'python_018',
        category: 'Basics',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa: print(17 % 5)?',
        options: [
            '2',
            '3',
            '5',
            '17'
        ],
        correctAnswer: '2',
        explanation: 'Operatorul % este modulo (rest). 17 ÷ 5 = 3 rest 2. Deci 17 % 5 = 2.'
    },
    {
        id: 'python_019',
        category: 'Basics',
        type: 'true-false',
        difficulty: 'easy',
        question: 'În Python, // realizează împărțirea întreagă (fără zecimale).',
        correctAnswer: 'Adevărat',
        explanation: '// este operatorul de împărțire întreagă. De exemplu: 20 // 3 = 6 (nu 6.67).'
    },
    {
        id: 'python_020',
        category: 'Basics',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa: print(3 + 2 * 4)?',
        options: [
            '11',
            '20',
            '14',
            '9'
        ],
        correctAnswer: '11',
        explanation: 'Ordinea operații: * înainte de +. Deci: 2 * 4 = 8, apoi 3 + 8 = 11.'
    },

    // ===== PRINT ȘI INPUT - 20 ÎNTREBĂRI =====
    {
        id: 'python_021',
        category: 'Print și Input',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa: print("Python", "este", "ușor")?',
        options: [
            'Python este ușor',
            'Pythonestetusut',
            'Python\neste\nușor',
            '"Python" "este" "ușor"'
        ],
        correctAnswer: 'Python este ușor',
        explanation: 'print() cu mai multe argumente le separă cu spații. Afișează: Python este ușor'
    },
    {
        id: 'python_022',
        category: 'Print și Input',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce face end=\'\' în print()?',
        options: [
            'Elimină newline-ul (linia nouă) la final',
            'Adaugă spații suplimentare',
            'Inversează ordinea textului',
            'Schimbă culoarea textului'
        ],
        correctAnswer: 'Elimină newline-ul (linia nouă) la final',
        explanation: 'print(text, end="") elimină caracterul de newline implicit. Implicit, print() adaugă \\n la final.'
    },
    {
        id: 'python_023',
        category: 'Print și Input',
        type: 'true-false',
        difficulty: 'easy',
        question: 'input() returnează un string (text).',
        correctAnswer: 'Adevărat',
        explanation: 'input() citește o linie de text de la tastatură și o returnează ca string, chiar dacă ții numere.'
    },
    {
        id: 'python_024',
        category: 'Print și Input',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Cum transformi un string într-un număr?',
        options: [
            'int() sau float()',
            'num()',
            'convert()',
            'parse()'
        ],
        correctAnswer: 'int() sau float()',
        explanation: 'int("5") transformă "5" (text) în 5 (număr). float("3.14") transformă în 3.14.'
    },
    {
        id: 'python_025',
        category: 'Print și Input',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa: print("Vârstă: " + str(15))?',
        options: [
            'Vârstă: 15',
            'Vârstă:15',
            'Error',
            'str(15)'
        ],
        correctAnswer: 'Vârstă: 15',
        explanation: 'str(15) transformă 15 în "15" (text). Apoi + concatenează (alipește) textele.'
    },
    {
        id: 'python_026',
        category: 'Print și Input',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Care este diferența dintre print("5+3") și print(5+3)?',
        options: [
            'Primul afișează "5+3", al doilea afișează 8',
            'Amândouă afișează 8',
            'Amândouă afișează "5+3"',
            'Nu există diferență'
        ],
        correctAnswer: 'Primul afișează "5+3", al doilea afișează 8',
        explanation: 'print("5+3") afișează textul literal: 5+3. print(5+3) calculează și afișează: 8'
    },
    {
        id: 'python_027',
        category: 'Print și Input',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa: print("A" * 3)?',
        options: [
            'AAA',
            'A3',
            '3A',
            'A A A'
        ],
        correctAnswer: 'AAA',
        explanation: '* pentru stringuri înseamnă repetare. "A" * 3 repetă "A" de 3 ori: AAA'
    },
    {
        id: 'python_028',
        category: 'Print și Input',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa: print(len("Python"))?',
        options: [
            '6',
            '7',
            '5',
            '8'
        ],
        correctAnswer: '6',
        explanation: 'len() returnează lungimea (numărul de caractere). "Python" are 6 caractere.'
    },
    {
        id: 'python_029',
        category: 'Print și Input',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce face .upper() pentru un string?',
        options: [
            'Transformă în majuscule',
            'Transformă în minuscule',
            'Șterge spatiile',
            'Inversează ordinea'
        ],
        correctAnswer: 'Transformă în majuscule',
        explanation: '"python".upper() returnează "PYTHON". Similar, .lower() transformă în minuscule.'
    },
    {
        id: 'python_030',
        category: 'Print și Input',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa: text = "python" \\ print(text.upper())?',
        options: [
            'PYTHON',
            'Python',
            'python',
            'PYTHON!'
        ],
        correctAnswer: 'PYTHON',
        explanation: '.upper() transformă textul în majuscule. "python" devine "PYTHON".'
    },
    {
        id: 'python_031',
        category: 'Print și Input',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa: text = "PYTHON" \\ print(text.lower())?',
        options: [
            'python',
            'PYTHON',
            'Python',
            'pYTHON'
        ],
        correctAnswer: 'python',
        explanation: '.lower() transformă textul în minuscule. "PYTHON" devine "python".'
    },
    {
        id: 'python_032',
        category: 'Print și Input',
        type: 'true-false',
        difficulty: 'easy',
        question: 'sep=\',\' în print() schimbă separatorul dintre argumente.',
        correctAnswer: 'Adevărat',
        explanation: 'print("a", "b", "c", sep=",") afișează: a,b,c (în loc de a b c).'
    },

    // ===== OPERATORI - 25 ÎNTREBĂRI =====
    {
        id: 'python_033',
        category: 'Operatori',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa: print(10 > 5)?',
        options: [
            'True',
            'False',
            '5',
            'Error'
        ],
        correctAnswer: 'True',
        explanation: '> este operatorul "mai mare decât". 10 > 5 este adevărat, deci afișează True.'
    },
    {
        id: 'python_034',
        category: 'Operatori',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa: print(10 < 5)?',
        options: [
            'False',
            'True',
            '15',
            '-5'
        ],
        correctAnswer: 'False',
        explanation: '< este operatorul "mai mic decât". 10 < 5 este fals, deci afișează False.'
    },
    {
        id: 'python_035',
        category: 'Operatori',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa: print(10 == 10)?',
        options: [
            'True',
            'False',
            '10',
            'Error'
        ],
        correctAnswer: 'True',
        explanation: '== verifică egalitate. 10 == 10 este adevărat, deci afișează True.'
    },
    {
        id: 'python_036',
        category: 'Operatori',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa: print(10 != 5)?',
        options: [
            'True',
            'False',
            '15',
            'Error'
        ],
        correctAnswer: 'True',
        explanation: '!= significa "nu este egal cu". 10 != 5 este adevărat, deci afișează True'
    },
    {
        id: 'python_037',
        category: 'Operatori',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa: print(10 >= 10)?',
        options: [
            'True',
            'False',
            '0',
            'Error'
        ],
        correctAnswer: 'True',
        explanation: '>= significa "mai mare sau egal cu". 10 >= 10 este adevărat.'
    },
    {
        id: 'python_038',
        category: 'Operatori',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce face "and" în Python?',
        options: [
            'Returnează True dacă ambele condiții sunt adevărate',
            'Returnează True dacă o condiție este adevărată',
            'Neagă o condiție',
            'Compară doi stringuri'
        ],
        correctAnswer: 'Returnează True dacă ambele condiții sunt adevărate',
        explanation: 'and returnează True doar dacă ambele condiții sunt True. Altfel, returnează False.'
    },
    {
        id: 'python_039',
        category: 'Operatori',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa: print(5 > 3 and 10 > 5)?',
        options: [
            'True',
            'False',
            '15',
            'Error'
        ],
        correctAnswer: 'True',
        explanation: 'Ambele condiții sunt adevărate: 5 > 3 (True) AND 10 > 5 (True). Rezultat: True'
    },
    {
        id: 'python_040',
        category: 'Operatori',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa: print(5 > 10 or 10 > 5)?',
        options: [
            'True',
            'False',
            'Error',
            '10'
        ],
        correctAnswer: 'True',
        explanation: 'or returnează True dacă cel puțin o condiție este adevărată. 10 > 5 este True, deci rezultat: True'
    },
    {
        id: 'python_041',
        category: 'Operatori',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa: print(not True)?',
        options: [
            'False',
            'True',
            'Error',
            '0'
        ],
        correctAnswer: 'False',
        explanation: 'not neagă o valoare. not True = False, not False = True.'
    },
    {
        id: 'python_042',
        category: 'Operatori',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa: print(not False)?',
        options: [
            'True',
            'False',
            'Error',
            '1'
        ],
        correctAnswer: 'True',
        explanation: 'not False = True. not neagă valoarea logică.'
    },
    {
        id: 'python_043',
        category: 'Operatori',
        type: 'true-false',
        difficulty: 'easy',
        question: 'True și False sunt constante booleane în Python.',
        correctAnswer: 'Adevărat',
        explanation: 'Boolean sunt valori de adevăr: True (adevărat) sau False (fals).'
    },
    {
        id: 'python_044',
        category: 'Operatori',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa: print(3 < 5 < 7)?',
        options: [
            'True',
            'False',
            'Error',
            '15'
        ],
        correctAnswer: 'True',
        explanation: 'Python permite comparații înlănțuite. 3 < 5 AND 5 < 7 sunt ambele True.'
    },
    {
        id: 'python_045',
        category: 'Operatori',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Care este rezultatul: 5 == "5"?',
        options: [
            'False',
            'True',
            'Error',
            'None'
        ],
        correctAnswer: 'False',
        explanation: '5 este număr, "5" este text. Sunt tipuri diferite, deci nu sunt egale.'
    },
    {
        id: 'python_046',
        category: 'Operatori',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa: print("a" in "banana")?',
        options: [
            'True',
            'False',
            'Error',
            'a'
        ],
        correctAnswer: 'True',
        explanation: 'in verifică dacă un caracter/string se găsește în alt string. "a" este în "banana".'
    },
    {
        id: 'python_047',
        category: 'Operatori',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa: print("x" in "banana")?',
        options: [
            'False',
            'True',
            'Error',
            '0'
        ],
        correctAnswer: 'False',
        explanation: '"x" nu se găsește în "banana", deci resultat: False'
    },
    {
        id: 'python_048',
        category: 'Operatori',
        type: 'true-false',
        difficulty: 'easy',
        question: 'not in verifică dacă ceva nu se găsește în string.',
        correctAnswer: 'Adevărat',
        explanation: '"x" not in "banana" returnează True, pentru că "x" nu este în "banana".'
    },

    // ===== IF/ELSE - 20 ÎNTREBĂRI =====
    {
        id: 'python_049',
        category: 'If/Else',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa codul?\nif 10 > 5:\n    print("Adevărat")',
        options: [
            'Adevărat',
            'Fals',
            'Error',
            'nimic'
        ],
        correctAnswer: 'Adevărat',
        explanation: 'if verifică o condiție. 10 > 5 este True, deci se execută print("Adevărat").'
    },
    {
        id: 'python_050',
        category: 'If/Else',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa codul?\nif 10 < 5:\n    print("Adevărat")\nelse:\n    print("Fals")',
        options: [
            'Fals',
            'Adevărat',
            'Error',
            'Ambele'
        ],
        correctAnswer: 'Fals',
        explanation: '10 < 5 este False, deci se execută blocul else: print("Fals")'
    },
    {
        id: 'python_051',
        category: 'If/Else',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce este indentarea în Python?',
        options: [
            'Spațiile care definesc blocurile de cod',
            'Un operator matematic',
            'O funcție built-in',
            'Un tip de date'
        ],
        correctAnswer: 'Spațiile care definesc blocurile de cod',
        explanation: 'Indentarea (spații) în Python definește ce cod aparține if, else, for, etc. Este obligatorie!'
    },
    {
        id: 'python_052',
        category: 'If/Else',
        type: 'true-false',
        difficulty: 'easy',
        question: 'elif înseamnă "else if".',
        correctAnswer: 'Adevărat',
        explanation: 'elif este scurtat pentru "else if". Permite mai multe condiții consecutive.'
    },
    {
        id: 'python_053',
        category: 'If/Else',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa codul?\nvârstă = 15\nif vârstă >= 18:\n    print("Adult")\nelse:\n    print("Minor")',
        options: [
            'Minor',
            'Adult',
            'Error',
            'nimic'
        ],
        correctAnswer: 'Minor',
        explanation: 'vârstă = 15. 15 >= 18 este False, deci se execută else: print("Minor")'
    },
    {
        id: 'python_054',
        category: 'If/Else',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa codul?\nnume = "Ana"\nif nume == "Ana":\n    print("Salut Ana!")\nelse:\n    print("Salut necunoscut!")',
        options: [
            'Salut Ana!',
            'Salut necunoscut!',
            'Error',
            'Ana'
        ],
        correctAnswer: 'Salut Ana!',
        explanation: 'nume == "Ana" este True, deci se execută print("Salut Ana!")'
    },
    {
        id: 'python_055',
        category: 'If/Else',
        type: 'multiple-choice',
        difficulty: 'medium',
        question: 'Ce va afișa codul?\nscor = 75\nif scor >= 90:\n    print("A")\nelif scor >= 80:\n    print("B")\nelif scor >= 70:\n    print("C")\nelse:\n    print("F")',
        options: [
            'C',
            'B',
            'A',
            'F'
        ],
        correctAnswer: 'C',
        explanation: 'scor = 75. Nu intră în >= 90, nici >= 80, dar 75 >= 70 este True, deci: C'
    },
    {
        id: 'python_056',
        category: 'If/Else',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce este o condiție imbricată?',
        options: [
            'Un if dentro în alt if',
            'Doi if-uri pe același nivel',
            'Un if fără else',
            'Un elif repetat'
        ],
        correctAnswer: 'Un if dentro în alt if',
        explanation: 'Condiții imbricate sunt if-uri ce se află în interiorul alt if. Se folosesc pentru logică mai complexă.'
    },
    {
        id: 'python_057',
        category: 'If/Else',
        type: 'multiple-choice',
        difficulty: 'medium',
        question: 'Ce va afișa codul?\nif 5 > 3:\n    if 4 > 2:\n        print("Ambele adevărate")',
        options: [
            'Ambele adevărate',
            'Fals',
            'Error',
            'nimic'
        ],
        correctAnswer: 'Ambele adevărate',
        explanation: 'Condiții imbricate. 5 > 3 este True, și 4 > 2 este True, deci se execută print().'
    },
    {
        id: 'python_058',
        category: 'If/Else',
        type: 'true-false',
        difficulty: 'easy',
        question: 'În Python, 0 și "" sunt considerate False în condiții.',
        correctAnswer: 'Adevărat',
        explanation: 'Valori "falsy": 0, "", None, False, liste goale [], etc. sunt tratate ca False în if.'
    },
    {
        id: 'python_059',
        category: 'If/Else',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa codul?\nif 5:\n    print("True")\nelse:\n    print("False")',
        options: [
            'True',
            'False',
            'Error',
            'nimic'
        ],
        correctAnswer: 'True',
        explanation: '5 este un număr non-zero, deci este "truthy". Condițiunea este adevărată.'
    },
    {
        id: 'python_060',
        category: 'If/Else',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa codul?\nif "":\n    print("True")\nelse:\n    print("False")',
        options: [
            'False',
            'True',
            'Error',
            '""'
        ],
        correctAnswer: 'False',
        explanation: '"" (stringul gol) este "falsy", deci condiția este falsă.'
    },
    {
        id: 'python_061',
        category: 'If/Else',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce face o expresie ternară (one-liner if)?',
        options: [
            'Condițiune pe o singură linie: a if condiție else b',
            'Executează trei comenzi',
            'Repetă un if de 3 ori',
            'Compară trei numere'
        ],
        correctAnswer: 'Condițiune pe o singură linie: a if condiție else b',
        explanation: 'Expresia ternară: rezultat = "Da" if 5 > 3 else "Nu". Prescurtare pentru if/else pe o linie.'
    },
    {
        id: 'python_062',
        category: 'If/Else',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa codul?\nmesaj = "Matur" if 20 > 18 else "Minor"\nprint(mesaj)',
        options: [
            'Matur',
            'Minor',
            'Error',
            'if'
        ],
        correctAnswer: 'Matur',
        explanation: '20 > 18 este True, deci mesaj = "Matur". print() afișează: Matur'
    },
    {
        id: 'python_063',
        category: 'If/Else',
        type: 'true-false',
        difficulty: 'easy',
        question: 'Poți folosi pass în blocul if atunci când nu vrei sa faci nimic.',
        correctAnswer: 'Adevărat',
        explanation: 'pass este un placeholder. if 5 > 3: pass nu face nimic, dar nu dă eroare.'
    },

    // ===== BUCLE (FOR) - 25 ÎNTREBĂRI =====
    {
        id: 'python_064',
        category: 'Bucle',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa codul?\nfor i in range(3):\n    print(i)',
        options: [
            '0 1 2',
            '1 2 3',
            '0 1 2 3',
            'Error'
        ],
        correctAnswer: '0 1 2',
        explanation: 'range(3) genrează 0, 1, 2. for repetă print(i) pentru fiecare valoare.'
    },
    {
        id: 'python_065',
        category: 'Bucle',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce face range(5)?',
        options: [
            'Generează 0, 1, 2, 3, 4',
            'Generează 1, 2, 3, 4, 5',
            'Generează 1, 2, 3, 4',
            'Generează 0, 1, 2, 3, 4, 5'
        ],
        correctAnswer: 'Generează 0, 1, 2, 3, 4',
        explanation: 'range(n) generează numere de la 0 la n-1. range(5) = [0, 1, 2, 3, 4].'
    },
    {
        id: 'python_066',
        category: 'Bucle',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa codul?\nfor i in range(1, 4):\n    print(i)',
        options: [
            '1 2 3',
            '0 1 2 3',
            '1 2 3 4',
            'Error'
        ],
        correctAnswer: '1 2 3',
        explanation: 'range(1, 4) generează de la 1 la 3 (4 nu e inclus). Afișează: 1, 2, 3'
    },
    {
        id: 'python_067',
        category: 'Bucle',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa codul?\nfor i in range(0, 6, 2):\n    print(i)',
        options: [
            '0 2 4',
            '0 1 2 3 4 5',
            '2 4 6',
            'Error'
        ],
        correctAnswer: '0 2 4',
        explanation: 'range(start, stop, step). range(0, 6, 2) = [0, 2, 4]. Merge din 2 în 2.'
    },
    {
        id: 'python_068',
        category: 'Bucle',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa codul?\nfor litera in "Python":\n    print(litera)',
        options: [
            'P y t h o n (fiecare pe linie)',
            'Python',
            'P t h n',
            'Error'
        ],
        correctAnswer: 'P y t h o n (fiecare pe linie)',
        explanation: 'for poate itera prin stringuri. Afișează fiecare caracter pe o linie nouă.'
    },
    {
        id: 'python_069',
        category: 'Bucle',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa codul?\nsum = 0\nfor i in range(1, 4):\n    sum = sum + i\nprint(sum)',
        options: [
            '6',
            '3',
            '4',
            '12'
        ],
        correctAnswer: '6',
        explanation: 'Loop cu sum: 0 + 1 = 1, 1 + 2 = 3, 3 + 3 = 6. Afișează: 6'
    },
    {
        id: 'python_070',
        category: 'Bucle',
        type: 'true-false',
        difficulty: 'easy',
        question: 'while repetă un bloc de cod atâta timp cât o condiție este adevărată.',
        correctAnswer: 'Adevărat',
        explanation: 'while condiție: se execută blocul până când condiția devine False.'
    },
    {
        id: 'python_071',
        category: 'Bucle',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa codul?\ni = 0\nwhile i < 3:\n    print(i)\n    i += 1',
        options: [
            '0 1 2',
            '1 2 3',
            '0 1 2 3',
            'Error (bucla infinită)'
        ],
        correctAnswer: '0 1 2',
        explanation: 'while i < 3. i crește la fiecare iterație. 0, 1, 2 sunt afișate.'
    },
    {
        id: 'python_072',
        category: 'Bucle',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce este break în o buclă?',
        options: [
            'Ieșire imediată din buclă',
            'Pause buclei',
            'Resetare buclei',
            'Repetare buclei'
        ],
        correctAnswer: 'Ieșire imediată din buclă',
        explanation: 'break termină bucla imediat. Se merge la codul după buclă.'
    },
    {
        id: 'python_073',
        category: 'Bucle',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa codul?\nfor i in range(10):\n    if i == 3:\n        break\n    print(i)',
        options: [
            '0 1 2',
            '0 1 2 3',
            '0 1 2 3 4 5 6 7 8 9',
            'Error'
        ],
        correctAnswer: '0 1 2',
        explanation: 'Buclă cu break. Când i == 3, break oprește bucla. Afișează: 0, 1, 2'
    },
    {
        id: 'python_074',
        category: 'Bucle',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce este continue în o buclă?',
        options: [
            'Sare la următoarea iterație fără executa restul blocului',
            'Opri bucla complet',
            'Pauzează bucla',
            'Resetează variabila contorului'
        ],
        correctAnswer: 'Sare la următoarea iterație fără executa restul blocului',
        explanation: 'continue sare la următoarea iterație a buclei, omitând codul rămas în iterația curentă.'
    },
    {
        id: 'python_075',
        category: 'Bucle',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa codul?\nfor i in range(5):\n    if i == 2:\n        continue\n    print(i)',
        options: [
            '0 1 3 4',
            '0 1 2 3 4',
            '1 3 4',
            'Error'
        ],
        correctAnswer: '0 1 3 4',
        explanation: 'Când i == 2, continue sare peste print(). Afișează: 0, 1, 3, 4 (fără 2).'
    },
    {
        id: 'python_076',
        category: 'Bucle',
        type: 'multiple-choice',
        difficulty: 'medium',
        question: 'Ce va afișa codul?\nfor i in range(1, 4):\n    for j in range(1, 3):\n        print(f"{i},{j}")',
        options: [
            '1,1 1,2 2,1 2,2 3,1 3,2',
            '1,1 1,2 1,3',
            '1,1 2,2 3,3',
            'Error'
        ],
        correctAnswer: '1,1 1,2 2,1 2,2 3,1 3,2',
        explanation: 'Bucle imbricate (nested). Bucla interioară se execută pentru fiecare iterație a buclei exterioare.'
    },
    {
        id: 'python_077',
        category: 'Bucle',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Care este diferența dintre for și while?',
        options: [
            'for = iterează peste secvență, while = repetă atâta timp cât condiție',
            'while este mai rapid',
            'for funcționează numai cu stringuri',
            'Nu există diferență'
        ],
        correctAnswer: 'for = iterează peste secvență, while = repetă atâta timp cât condiție',
        explanation: 'for: for i in range(5). while: while i < 5. for e pentru secvențe, while e pentru condiții.'
    },
    {
        id: 'python_078',
        category: 'Bucle',
        type: 'true-false',
        difficulty: 'easy',
        question: 'Poți folosi else cu for și while.',
        correctAnswer: 'Adevărat',
        explanation: 'for/while...else: blocul else se execută dacă bucla se termină normal (fără break).'
    },
    {
        id: 'python_079',
        category: 'Bucle',
        type: 'multiple-choice',
        difficulty: 'medium',
        question: 'Ce va afișa codul?\nfor i in range(3):\n    print(i)\nelse:\n    print("Gata!")',
        options: [
            '0 1 2 Gata!',
            '0 1 2',
            'Gata!',
            'Error'
        ],
        correctAnswer: '0 1 2 Gata!',
        explanation: 'Buclă cu else. Else se execută după ce for se termină normal.'
    },
    {
        id: 'python_080',
        category: 'Bucle',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa codul?\nfor x in [1, 2, 3]:\n    print(x)',
        options: [
            '1 2 3',
            '[1, 2, 3]',
            '1',
            'Error'
        ],
        correctAnswer: '1 2 3',
        explanation: 'for pentru o listă. Iterează prin fiecare element: 1, 2, 3.'
    },
    {
        id: 'python_081',
        category: 'Bucle',
        type: 'multiple-choice',
        difficulty: 'medium',
        question: 'Ce calculează această buclă?\nproduct = 1\nfor i in range(1, 5):\n    product *= i',
        options: [
            'Factorialul lui 4 (4! = 24)',
            'Suma de la 1 la 4',
            'Puterea lui 4',
            'Media numerelor'
        ],
        correctAnswer: 'Factorialul lui 4 (4! = 24)',
        explanation: '1 * 1 = 1, 1 * 2 = 2, 2 * 3 = 6, 6 * 4 = 24. Aceasta este 4! = 24.'
    },
    {
        id: 'python_082',
        category: 'Bucle',
        type: 'multiple-choice',
        difficulty: 'medium',
        question: 'Ce va afișa codul?\ncount = 0\nfor i in range(1, 11):\n    if i % 2 == 0:\n        count += 1\nprint(count)',
        options: [
            '5',
            '10',
            '6',
            'Error'
        ],
        correctAnswer: '5',
        explanation: 'Numără numerele pare de la 1 la 10. 2, 4, 6, 8, 10 = 5 numere pare.'
    },
    {
        id: 'python_083',
        category: 'Bucle',
        type: 'multiple-choice',
        difficulty: 'medium',
        question: 'Ce va afișa codul?\nsum = 0\nfor i in range(1, 6):\n    sum += i\nprint(sum)',
        options: [
            '15',
            '5',
            '10',
            '20'
        ],
        correctAnswer: '15',
        explanation: '1 + 2 + 3 + 4 + 5 = 15. Loop suma numerele de la 1 la 5.'
    },
    {
        id: 'python_084',
        category: 'Bucle',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa codul?\nfor i in range(3):\n    print("*" * (i + 1))',
        options: [
            '* ** ***',
            '*** ** *',
            '***',
            'Error'
        ],
        correctAnswer: '* ** ***',
        explanation: 'Creează un triunghi. i=0: "*", i=1: "**", i=2: "***".'
    },
    {
        id: 'python_085',
        category: 'Bucle',
        type: 'true-false',
        difficulty: 'easy',
        question: 'pass într-o buclă nu face nimic, dar permite sintaxă validă.',
        correctAnswer: 'Adevărat',
        explanation: 'for i in range(5): pass este sintactic corect, doar nu face nimic.'
    },

    // ===== LISTE - 50 ÎNTREBĂRI =====
    {
        id: 'python_086',
        category: 'Liste',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa: colors = ["roșu", "verde", "albastru"] \\ print(colors[0])?',
        options: [
            'roșu',
            'verde',
            'albastru',
            'Error'
        ],
        correctAnswer: 'roșu',
        explanation: 'Lista cu 3 elemente. colors[0] e primul element: "roșu". Indexarea începe de la 0.'
    },
    {
        id: 'python_087',
        category: 'Liste',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa: numere = [1, 2, 3, 4, 5] \\ print(numere[2])?',
        options: [
            '3',
            '2',
            '4',
            'Error'
        ],
        correctAnswer: '3',
        explanation: 'numere[2] e al treilea element (index 2): 3.'
    },
    {
        id: 'python_088',
        category: 'Liste',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa: colors = ["roșu", "verde", "albastru"] \\ print(colors[-1])?',
        options: [
            'albastru',
            'roșu',
            'verde',
            'Error'
        ],
        correctAnswer: 'albastru',
        explanation: 'Indexul negativ -1 e ultimul element. colors[-1] = "albastru".'
    },
    {
        id: 'python_089',
        category: 'Liste',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa: colors = ["roșu", "verde", "albastru"] \\ print(colors[-2])?',
        options: [
            'verde',
            'roșu',
            'albastru',
            'Error'
        ],
        correctAnswer: 'verde',
        explanation: 'colors[-2] e penultimul element: "verde".'
    },
    {
        id: 'python_090',
        category: 'Liste',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa: numere = [1, 2, 3, 4, 5] \\ print(len(numere))?',
        options: [
            '5',
            '4',
            '6',
            'Error'
        ],
        correctAnswer: '5',
        explanation: 'len() returnează lungimea listei. 5 elemente = lungimea 5.'
    },
    {
        id: 'python_091',
        category: 'Liste',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa: fruit = [] \\ fruit.append("măr") \\ print(fruit)?',
        options: [
            '[\'măr\']',
            '[]',
            '[măr]',
            'Error'
        ],
        correctAnswer: '[\'măr\']',
        explanation: '.append() adaugă un element la sfârșitul listei. Lista devine: ["măr"]'
    },
    {
        id: 'python_092',
        category: 'Liste',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa: numere = [1, 2, 3] \\ numere.append(4) \\ print(numere)?',
        options: [
            '[1, 2, 3, 4]',
            '[1, 2, 3]',
            '[4]',
            'Error'
        ],
        correctAnswer: '[1, 2, 3, 4]',
        explanation: '.append(4) adaugă 4 la final. Lista devine: [1, 2, 3, 4]'
    },
    {
        id: 'python_093',
        category: 'Liste',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa: numere = [1, 2, 3, 2, 4] \\ print(numere.count(2))?',
        options: [
            '2',
            '1',
            '3',
            'Error'
        ],
        correctAnswer: '2',
        explanation: '.count() numără apariții. 2 apare de 2 ori în listă.'
    },
    {
        id: 'python_094',
        category: 'Liste',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa: numere = [1, 2, 3, 4, 5] \\ print(numere.index(3))?',
        options: [
            '2',
            '1',
            '3',
            'Error'
        ],
        correctAnswer: '2',
        explanation: '.index() returnează poziția. 3 e la index 2 (al treilea element).'
    },
    {
        id: 'python_095',
        category: 'Liste',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa: numere = [1, 2, 3, 4, 5] \\ print(numere[1:3])?',
        options: [
            '[2, 3]',
            '[1, 2]',
            '[3, 4, 5]',
            'Error'
        ],
        correctAnswer: '[2, 3]',
        explanation: 'Slicing: numere[1:3] = elemente de la index 1 la 2 (3 nu e inclus): [2, 3]'
    },
    {
        id: 'python_096',
        category: 'Liste',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa: numere = [1, 2, 3, 4, 5] \\ print(numere[:3])?',
        options: [
            '[1, 2, 3]',
            '[1, 2]',
            '[3, 4, 5]',
            'Error'
        ],
        correctAnswer: '[1, 2, 3]',
        explanation: 'numere[:3] = primele 3 elemente: [1, 2, 3]'
    },
    {
        id: 'python_097',
        category: 'Liste',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa: numere = [1, 2, 3, 4, 5] \\ print(numere[2:])?',
        options: [
            '[3, 4, 5]',
            '[1, 2]',
            '[2, 3, 4, 5]',
            'Error'
        ],
        correctAnswer: '[3, 4, 5]',
        explanation: 'numere[2:] = din index 2 până la final: [3, 4, 5]'
    },
    {
        id: 'python_098',
        category: 'Liste',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa: numere = [1, 2, 3, 4, 5] \\ numere[0] = 10 \\ print(numere)?',
        options: [
            '[10, 2, 3, 4, 5]',
            '[1, 2, 3, 4, 5]',
            '[1, 10, 3, 4, 5]',
            'Error'
        ],
        correctAnswer: '[10, 2, 3, 4, 5]',
        explanation: 'Modificare element: numere[0] = 10. Primul element devine 10.'
    },
    {
        id: 'python_099',
        category: 'Liste',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa: numere = [1, 2, 3] \\ numere.remove(2) \\ print(numere)?',
        options: [
            '[1, 3]',
            '[1, 2, 3]',
            '[2, 3]',
            'Error'
        ],
        correctAnswer: '[1, 3]',
        explanation: '.remove() șterge prima apariție. 2 este șters. Lista: [1, 3]'
    },
    {
        id: 'python_100',
        category: 'Liste',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa: numere = [1, 2, 3] \\ numere.pop() \\ print(numere)?',
        options: [
            '[1, 2]',
            '[1, 2, 3]',
            '[2, 3]',
            'Error'
        ],
        correctAnswer: '[1, 2]',
        explanation: '.pop() șterge ultimul element. 3 este șters. Lista: [1, 2]'
    },
    {
        id: 'python_101',
        category: 'Liste',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa: numere = [1, 2, 3] \\ numere.pop(1) \\ print(numere)?',
        options: [
            '[1, 3]',
            '[1, 2, 3]',
            '[2, 3]',
            'Error'
        ],
        correctAnswer: '[1, 3]',
        explanation: '.pop(1) șterge element de la index 1 (care e 2). Lista: [1, 3]'
    },
    {
        id: 'python_102',
        category: 'Liste',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa: numere = [3, 1, 2] \\ numere.sort() \\ print(numere)?',
        options: [
            '[1, 2, 3]',
            '[3, 1, 2]',
            '[2, 1, 3]',
            'Error'
        ],
        correctAnswer: '[1, 2, 3]',
        explanation: '.sort() sortează în ordine crescătoare. [1, 2, 3]'
    },
    {
        id: 'python_103',
        category: 'Liste',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa: colors = ["roșu", "verde", "albastru"] \\ colors.reverse() \\ print(colors)?',
        options: [
            '[\'albastru\', \'verde\', \'roșu\']',
            '[\'roșu\', \'verde\', \'albastru\']',
            '[\'verde\', \'roșu\', \'albastru\']',
            'Error'
        ],
        correctAnswer: '[\'albastru\', \'verde\', \'roșu\']',
        explanation: '.reverse() inversează ordinea listei.'
    },
    {
        id: 'python_104',
        category: 'Liste',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa: numere = [1, 2, 3] \\ print(2 in numere)?',
        options: [
            'True',
            'False',
            'Error',
            '2'
        ],
        correctAnswer: 'True',
        explanation: 'in verifică dacă element e în listă. 2 este în [1, 2, 3], deci True.'
    },
    {
        id: 'python_105',
        category: 'Liste',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa: for num in [1, 2, 3]: \\ print(num)?',
        options: [
            '1 2 3',
            '[1, 2, 3]',
            '1',
            'Error'
        ],
        correctAnswer: '1 2 3',
        explanation: 'for iterează prin liste. Afișează fiecare element.'
    },
    {
        id: 'python_106',
        category: 'Liste',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa: numere = [1, 2, 3, 4, 5] \\ total = sum(numere) \\ print(total)?',
        options: [
            '15',
            '5',
            '10',
            'Error'
        ],
        correctAnswer: '15',
        explanation: 'sum() calculează suma elementelor. 1+2+3+4+5 = 15.'
    },
    {
        id: 'python_107',
        category: 'Liste',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa: numere = [3, 1, 4, 1, 5] \\ print(max(numere))?',
        options: [
            '5',
            '4',
            '3',
            'Error'
        ],
        correctAnswer: '5',
        explanation: 'max() returnează cel mai mare element. 5 e cel mai mare.'
    },
    {
        id: 'python_108',
        category: 'Liste',
        type: 'multiple-choice',
        difficulty: 'easy',
        question: 'Ce va afișa: numere = [3, 1, 4, 1, 5] \\ print(min(numere))?',
        options: [
            '1',
            '3',
            '4',
            'Error'
        ],
        correctAnswer: '1',
        explanation: 'min() returnează cel mai mic element. 1 e cel mai mic.'
    },
    {
        id: 'python_109',
        category: 'Liste',
        type: 'multiple-choice',
        difficulty: 'medium',
        question: 'Ce va afișa: numere = [] \\ for i in range(1, 4): \\ numere.append(i) \\ print(numere)?',
        options: [
            '[1, 2, 3]',
            '[0, 1, 2]',
            '[]',
            'Error'
        ],
        correctAnswer: '[1, 2, 3]',
        explanation: 'Loop care construiește lista. append adaugă 1, 2, 3. Lista: [1, 2, 3]'
    },
    {
        id: 'python_110',
        category: 'Liste',
        type: 'multiple-choice',
        difficulty: 'medium',
        question: 'Ce va afișa: text = "abc" \\ lista = list(text) \\ print(lista)?',
        options: [
            '[\'a\', \'b\', \'c\']',
            '[\'abc\']',
            '\'a\' \'b\' \'c\'',
            'Error'
        ],
        correctAnswer: '[\'a\', \'b\', \'c\']',
        explanation: 'list() transformă string în listă de caractere: ["a", "b", "c"]'
    },
    {
        id: 'python_111',
        category: 'Liste',
        type: 'multiple-choice',
        difficulty: 'medium',
        question: 'Ce va afișa: numere = [1, 2, 3] \\ copie = numere.copy() \\ copie.append(4) \\ print(numere)?',
        options: [
            '[1, 2, 3]',
            '[1, 2, 3, 4]',
            'Error',
            '[4]'
        ],
        correctAnswer: '[1, 2, 3]',
        explanation: '.copy() creează copie. Modificarea copiei nu afectează original.'
    },
    {
        id: 'python_112',
        category: 'Liste',
        type: 'multiple-choice',
        difficulty: 'medium',
        question: 'Ce va afișa: numere1 = [1, 2] \\ numere2 = [3, 4] \\ total = numere1 + numere2 \\ print(total)?',
        options: [
            '[1, 2, 3, 4]',
            '[1, 2]',
            '[3, 4]',
            'Error'
        ],
        correctAnswer: '[1, 2, 3, 4]',
        explanation: '+ concatenează (alipește) liste. [1, 2] + [3, 4] = [1, 2, 3, 4]'
    },
    {
        id: 'python_113',
        category: 'Liste',
        type: 'multiple-choice',
        difficulty: 'medium',
        question: 'Ce va afișa: numere = [1, 2, 3] * 2 \\ print(numere)?',
        options: [
            '[1, 2, 3, 1, 2, 3]',
            '[1, 2, 3]',
            '[2, 4, 6]',
            'Error'
        ],
        correctAnswer: '[1, 2, 3, 1, 2, 3]',
        explanation: '* repetă lista. [1, 2, 3] * 2 = [1, 2, 3, 1, 2, 3]'
    },
    {
        id: 'python_114',
        category: 'Liste',
        type: 'multiple-choice',
        difficulty: 'medium',
        question: 'Ce va afișa: numere = [1, 2, 3, 4, 5] \\ pare = [x for x in numere if x % 2 == 0] \\ print(pare)?',
        options: [
            '[2, 4]',
            '[1, 3, 5]',
            '[1, 2, 3, 4, 5]',
            'Error'
        ],
        correctAnswer: '[2, 4]',
        explanation: 'List comprehension. Filtrează numerele pare: [2, 4]'
    },
    {
        id: 'python_115',
        category: 'Liste',
        type: 'multiple-choice',
        difficulty: 'medium',
        question: 'Ce va afișa: numere = [1, 2, 3] \\ patrate = [x ** 2 for x in numere] \\ print(patrate)?',
        options: [
            '[1, 4, 9]',
            '[1, 2, 3]',
            '[2, 4, 6]',
            'Error'
        ],
        correctAnswer: '[1, 4, 9]',
        explanation: 'List comprehension. Calculează pătrate: 1², 2², 3² = [1, 4, 9]'
    },
    {
        id: 'python_116',
        category: 'Liste',
        type: 'multiple-choice',
        difficulty: 'medium',
        question: 'Ce va afișa: numere = [[1, 2], [3, 4]] \\ print(numere[0][1])?',
        options: [
            '2',
            '1',
            '3',
            'Error'
        ],
        correctAnswer: '2',
        explanation: 'Liste imbricate. numere[0][1] = al doilea element din prima listă: 2'
    },
    {
        id: 'python_117',
        category: 'Liste',
        type: 'multiple-choice',
        difficulty: 'medium',
        question: 'Ce va afișa: numere = [1, 2, 3, 4, 5] \\ print(numere[::2])?',
        options: [
            '[1, 3, 5]',
            '[2, 4]',
            '[1, 2, 3]',
            'Error'
        ],
        correctAnswer: '[1, 3, 5]',
        explanation: '[::2] = sare peste 1. Afișează elementos de la start cu pas 2: [1, 3, 5]'
    },
    {
        id: 'python_118',
        category: 'Liste',
        type: 'multiple-choice',
        difficulty: 'medium',
        question: 'Ce va afișa: numere = [1, 2, 3, 4, 5] \\ print(numere[::-1])?',
        options: [
            '[5, 4, 3, 2, 1]',
            '[1, 2, 3, 4, 5]',
            '[4, 3, 2, 1]',
            'Error'
        ],
        correctAnswer: '[5, 4, 3, 2, 1]',
        explanation: '[::-1] = inversează. Afișează lista în ordine inversă.'
    },
    {
        id: 'python_119',
        category: 'Liste',
        type: 'multiple-choice',
        difficulty: 'medium',
        question: 'Ce va afișa: numere = [1, 2, 3] \\ numere.insert(1, 10) \\ print(numere)?',
        options: [
            '[1, 10, 2, 3]',
            '[1, 2, 3, 10]',
            '[10, 1, 2, 3]',
            'Error'
        ],
        correctAnswer: '[1, 10, 2, 3]',
        explanation: '.insert(1, 10) inserează 10 la index 1. Lista: [1, 10, 2, 3]'
    },
    {
        id: 'python_120',
        category: 'Liste',
        type: 'multiple-choice',
        difficulty: 'medium',
        question: 'Ce va afișa: numere = [1, 2, 3, 4, 5] \\ numere[1:3] = [10, 20] \\ print(numere)?',
        options: [
            '[1, 10, 20, 4, 5]',
            '[1, 2, 3, 4, 5]',
            '[10, 20]',
            'Error'
        ],
        correctAnswer: '[1, 10, 20, 4, 5]',
        explanation: 'Slice assignment. Înlocuiește elemente 1-2 cu [10, 20].'
    },
    {
        id: 'python_121',
        category: 'Liste',
        type: 'multiple-choice',
        difficulty: 'medium',
        question: 'Ce va afișa: fruit = ["măr", "portocală", "banană"] \\ for i, fruct in enumerate(fruit): print(i, fruct)?',
        options: [
            '0 măr \\ 1 portocală \\ 2 banană',
            'măr portocală banană',
            '1 măr 2 portocală 3 banană',
            'Error'
        ],
        correctAnswer: '0 măr \\ 1 portocală \\ 2 banană',
        explanation: 'enumerate() dă index și valoare. Afișează: 0 măr, 1 portocală, 2 banană'
    },
    {
        id: 'python_122',
        category: 'Liste',
        type: 'multiple-choice',
        difficulty: 'medium',
        question: 'Ce va afișa: numere = [1, 2, 3, 4, 5] \\ nou_lista = [x * 2 for x in numere] \\ print(nou_lista)?',
        options: [
            '[2, 4, 6, 8, 10]',
            '[1, 2, 3, 4, 5]',
            '[1, 4, 9, 16, 25]',
            'Error'
        ],
        correctAnswer: '[2, 4, 6, 8, 10]',
        explanation: 'List comprehension. Dublează fiecare element: [2, 4, 6, 8, 10]'
    },
    {
        id: 'python_123',
        category: 'Liste',
        type: 'multiple-choice',
        difficulty: 'medium',
        question: 'Ce va afișa: numere = [1, 2, 3] \\ for i in range(len(numere)): print(numere[i])?',
        options: [
            '1 2 3',
            '[1, 2, 3]',
            '0 1 2',
            'Error'
        ],
        correctAnswer: '1 2 3',
        explanation: 'Loop cu range(len()). Iterează prin indici și afișează fiecare element.'
    },
    {
        id: 'python_124',
        category: 'Liste',
        type: 'multiple-choice',
        difficulty: 'medium',
        question: 'Ce va afișa: colors = ["roșu", "verde", "albastru"] \\ colors[1] = "galben" \\ print(colors)?',
        options: [
            '[\'roșu\', \'galben\', \'albastru\']',
            '[\'roșu\', \'verde\', \'albastru\']',
            '[\'galben\', \'verde\', \'albastru\']',
            'Error'
        ],
        correctAnswer: '[\'roșu\', \'galben\', \'albastru\']',
        explanation: 'Modificare element. Index 1 ("verde") devine "galben".'
    },
    {
        id: 'python_125',
        category: 'Liste',
        type: 'multiple-choice',
        difficulty: 'hard',
        question: 'Ce va afișa: numere = [[1, 2, 3], [4, 5, 6]] \\ flatten = [x for rand in numere for x in rand] \\ print(flatten)?',
        options: [
            '[1, 2, 3, 4, 5, 6]',
            '[[1, 2, 3], [4, 5, 6]]',
            '[1, 4]',
            'Error'
        ],
        correctAnswer: '[1, 2, 3, 4, 5, 6]',
        explanation: 'List comprehension imbricată. Flattening 2D în 1D lista.'
    },
    {
        id: 'python_126',
        category: 'Liste',
        type: 'multiple-choice',
        difficulty: 'medium',
        question: 'Ce va afișa: lista = [0, False, "", [], None] \\ Câte "falsy" sunt?',
        options: [
            '5',
            '0',
            '3',
            'Error'
        ],
        correctAnswer: '5',
        explanation: 'Toate elementele sunt "falsy" (0, False, "", [], None). 5 falsy values.'
    },
    {
        id: 'python_127',
        category: 'Liste',
        type: 'multiple-choice',
        difficulty: 'medium',
        question: 'Ce va afișa: fruit = ["măr", "banană", "portocală"] \\ fruit.clear() \\ print(fruit)?',
        options: [
            '[]',
            '[\'măr\', \'banană\', \'portocală\']',
            'None',
            'Error'
        ],
        correctAnswer: '[]',
        explanation: '.clear() șterge toți elementele. Lista devine goală: []'
    },
    {
        id: 'python_128',
        category: 'Liste',
        type: 'multiple-choice',
        difficulty: 'medium',
        question: 'Ce va afișa: lista1 = [1, 2, 3] \\ lista2 = lista1 \\ lista2[0] = 10 \\ print(lista1)?',
        options: [
            '[10, 2, 3]',
            '[1, 2, 3]',
            'Error',
            '[10, 2, 3] și [1, 2, 3]'
        ],
        correctAnswer: '[10, 2, 3]',
        explanation: 'Referință. lista1 și lista2 arată la același obiect. Modificarea afectează ambele.'
    },
    {
        id: 'python_129',
        category: 'Liste',
        type: 'multiple-choice',
        difficulty: 'hard',
        question: 'Ce va afișa: numere = [5, 2, 8, 1, 9] \\ sorted_desc = sorted(numere, reverse=True) \\ print(sorted_desc)?',
        options: [
            '[9, 8, 5, 2, 1]',
            '[1, 2, 5, 8, 9]',
            '[5, 2, 8, 1, 9]',
            'Error'
        ],
        correctAnswer: '[9, 8, 5, 2, 1]',
        explanation: 'sorted(..., reverse=True) sortează descrescător. [9, 8, 5, 2, 1]'
    },
    {
        id: 'python_130',
        category: 'Liste',
        type: 'multiple-choice',
        difficulty: 'medium',
        question: 'Ce va afișa: words = ["python", "java", "c++"] \\ result = [w.upper() for w in words] \\ print(result)?',
        options: [
            '[\'PYTHON\', \'JAVA\', \'C++\']',
            '[\'python\', \'java\', \'c++\']',
            '[\'Python\', \'Java\', \'C++\']',
            'Error'
        ],
        correctAnswer: '[\'PYTHON\', \'JAVA\', \'C++\']',
        explanation: 'List comprehension cu .upper(). Transformă în majuscule.'
    }
];
