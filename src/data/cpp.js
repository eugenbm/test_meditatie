/**
 * C++ QUESTION BANK - Banca de întrebări pentru C++
 * Minim 150 întrebări, structurate pe categorii
 * Focus pe vectori: 40+ întrebări
 */

export const cplusplus = [
    // ===== BASICS (20 întrebări) =====
    {
        id: 'cpp_001',
        language: 'C++',
        category: 'Basics',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Ce este C++?',
        options: [
            'Un limbaj de programare compilat',
            'Un limbaj de programare interpretat',
            'Un format de imagine',
            'Un sistem de operare'
        ],
        correctAnswer: 'Un limbaj de programare compilat',
        explanation: 'C++ este un limbaj de programare compilat, ceea ce înseamnă că codul trebuie compilat înainte de a fi executat.'
    },
    {
        id: 'cpp_002',
        language: 'C++',
        category: 'Basics',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Cum se inițiază un program C++?',
        code: `#include <iostream>
using namespace std;

int main() {
    return 0;
}`,
        options: [
            'Cu int main()',
            'Cu void main()',
            'Cu start()',
            'Cu init()'
        ],
        correctAnswer: 'Cu int main()',
        explanation: 'Funcția main() este punctul de intrare al programului. Returneaza un întreg (int).'
    },
    {
        id: 'cpp_003',
        language: 'C++',
        category: 'Basics',
        difficulty: 'easy',
        type: 'true-false',
        question: '#include <iostream> este obligatoriu pentru a folosi cout și cin.',
        correctAnswer: 'Adevărat',
        explanation: 'iostream furnizează fluxurile standard de intrare și ieșire (cin și cout).'
    },
    {
        id: 'cpp_004',
        language: 'C++',
        category: 'Basics',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Ce face cout?',
        options: [
            'Afișează text pe ecran',
            'Citește text de la tastatură',
            'Sterge text',
            'Compară două valori'
        ],
        correctAnswer: 'Afișează text pe ecran',
        explanation: 'cout este operatorul de ieșire care afișează text și valori pe consolă.'
    },
    {
        id: 'cpp_005',
        language: 'C++',
        category: 'Basics',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Ce face cin?',
        options: [
            'Afișează text',
            'Citește date de la tastatură',
            'Salvează fișiere',
            'Compilează codul'
        ],
        correctAnswer: 'Citește date de la tastatură',
        explanation: 'cin este operatorul de intrare care permite programului să citească date de la utilizator.'
    },
    {
        id: 'cpp_006',
        language: 'C++',
        category: 'Basics',
        difficulty: 'easy',
        type: 'true-false',
        question: 'using namespace std; permite utilizarea std::cout fără prefixul std::',
        correctAnswer: 'Adevărat',
        explanation: 'Directive using namespace std face disponibile toate simbolurile din spațiul de nume std.'
    },
    {
        id: 'cpp_007',
        language: 'C++',
        category: 'Basics',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Ce afișează următorul cod?',
        code: `cout << "Hello" << " " << "World";`,
        options: [
            'Hello World',
            'Hello  World',
            'HelloWorld',
            'Hello " " World'
        ],
        correctAnswer: 'Hello World',
        explanation: '<<  este operatorul de inserare în fluxul de ieșire. Se pot concatena mai mulți operatori.'
    },
    {
        id: 'cpp_008',
        language: 'C++',
        category: 'Basics',
        difficulty: 'easy',
        type: 'true-false',
        question: 'Comentariile în C++ încep cu //',
        correctAnswer: 'Adevărat',
        explanation: 'Comentariile pe o linie încep cu //. Pentru mai multe linii se folosesc /* */'
    },
    {
        id: 'cpp_009',
        language: 'C++',
        category: 'Basics',
        difficulty: 'easy',
        type: 'text-complete',
        question: 'Completează: cout << "Salut" << ___ ; pentru a afișa o nouă linie.',
        correctAnswer: 'endl',
        explanation: 'endl afișează o nouă linie și golește bufferul. Se poate folosi și \\n'
    },
    {
        id: 'cpp_010',
        language: 'C++',
        category: 'Basics',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Care este diferența dintre int și float?',
        options: [
            'int este pentru numere întregi, float pentru numere cu zecimale',
            'int este mai rapid decât float',
            'Sunt identici',
            'float poate stoca numere mai mari'
        ],
        correctAnswer: 'int este pentru numere întregi, float pentru numere cu zecimale',
        explanation: 'int stochează numere întregi (fără zecimale), float stochează numere în virgulă mobilă.'
    },
    {
        id: 'cpp_011',
        language: 'C++',
        category: 'Basics',
        difficulty: 'easy',
        type: 'true-false',
        question: 'O variabilă trebuie declarată înainte de a fi folosită.',
        correctAnswer: 'Adevărat',
        explanation: 'În C++, trebuie să declari o variabilă cu tipul ei înainte de a o folosi.'
    },
    {
        id: 'cpp_012',
        language: 'C++',
        category: 'Basics',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Ce este o variabilă?',
        options: [
            'Un loc în memoria calculator unde se stochează o valoare',
            'O funcție',
            'Un comentariu',
            'O bibliotecă'
        ],
        correctAnswer: 'Un loc în memoria calculator unde se stochează o valoare',
        explanation: 'O variabilă este o denumire pentru o locație din memorie care stochează o valoare.'
    },
    {
        id: 'cpp_013',
        language: 'C++',
        category: 'Basics',
        difficulty: 'easy',
        type: 'text-complete',
        question: 'Completează: ___ x = 5; pentru a declara o variabilă întreagă.',
        correctAnswer: 'int',
        explanation: 'int este cuvântul cheie pentru a declara o variabilă de tip întreg.'
    },
    {
        id: 'cpp_014',
        language: 'C++',
        category: 'Basics',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Ce este o constantă?',
        options: [
            'O variabilă care nu se poate schimba după inițializare',
            'O variabilă care se schimbă mereu',
            'O funcție',
            'Un comentariu'
        ],
        correctAnswer: 'O variabilă care nu se poate schimba după inițializare',
        explanation: 'O constantă este o variabilă marcată cu const care nu se poate modifica.'
    },
    {
        id: 'cpp_015',
        language: 'C++',
        category: 'Basics',
        difficulty: 'easy',
        type: 'true-false',
        question: 'Pot schimba valoarea unei variabile const după inițializare.',
        correctAnswer: 'Fals',
        explanation: 'O variabilă const nu se poate modifica după ce a fost inițializată.'
    },
    
    // ===== VARIABLES (15 întrebări) =====
    {
        id: 'cpp_016',
        language: 'C++',
        category: 'Variables',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Cât de mult spațiu folosește un int în memorie?',
        options: [
            '4 bytes (de obicei)',
            '1 byte',
            '8 bytes',
            'Depinde de program'
        ],
        correctAnswer: '4 bytes (de obicei)',
        explanation: 'De obicei, un int ocupă 4 bytes în memorie, dar acest lucru depinde de sistem.'
    },
    {
        id: 'cpp_017',
        language: 'C++',
        category: 'Variables',
        difficulty: 'easy',
        type: 'true-false',
        question: 'char este un tip de date pentru a stoca caractere unice.',
        correctAnswer: 'Adevărat',
        explanation: 'char stochează un singur caracter (litera, cifră, simbol).'
    },
    {
        id: 'cpp_018',
        language: 'C++',
        category: 'Variables',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Care este diferența dintre double și float?',
        options: [
            'double are mai multă precizie și ocupă mai mult spațiu',
            'double este mai rapid',
            'Sunt la fel',
            'double nu poate fi folosit în C++'
        ],
        correctAnswer: 'double are mai multă precizie și ocupă mai mult spațiu',
        explanation: 'double este o versiune mai precisă a float, ocupând 8 bytes vs 4 bytes.'
    },
    {
        id: 'cpp_019',
        language: 'C++',
        category: 'Variables',
        difficulty: 'easy',
        type: 'true-false',
        question: 'bool poate stoca doar valorile true sau false.',
        correctAnswer: 'Adevărat',
        explanation: 'bool este un tip de date boolean care stochează true (1) sau false (0).'
    },
    {
        id: 'cpp_020',
        language: 'C++',
        category: 'Variables',
        difficulty: 'easy',
        type: 'text-complete',
        question: 'Completează: ___ my_float = 3.14; pentru a declara o variabilă float.',
        correctAnswer: 'float',
        explanation: 'float este tipul de date pentru numere în virgulă mobilă de 4 bytes.'
    },
    {
        id: 'cpp_021',
        language: 'C++',
        category: 'Variables',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Ce va afișa acest cod?',
        code: `int x = 10;
int y = 3;
cout << x / y;`,
        options: [
            '3',
            '3.33',
            '3.0',
            '4'
        ],
        correctAnswer: '3',
        explanation: 'Atunci când împarți doi int, rezultatul este un int (împărțire întreagă). 10 / 3 = 3'
    },
    {
        id: 'cpp_022',
        language: 'C++',
        category: 'Variables',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Ce va afișa acest cod?',
        code: `float x = 10;
float y = 3;
cout << x / y;`,
        options: [
            '3.33',
            '3',
            '3.0',
            '3.333...'
        ],
        correctAnswer: '3.33',
        explanation: 'Atunci când împarți doi float, rezultatul este în virgulă mobilă.'
    },
    
    // ===== OPERATORS (20 întrebări) =====
    {
        id: 'cpp_023',
        language: 'C++',
        category: 'Operators',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Care este rezultatul 10 + 5 * 2?',
        options: [
            '20',
            '30',
            '25',
            '15'
        ],
        correctAnswer: '20',
        explanation: 'Operatorul * are prioritate mai mare decât +. Deci: 5 * 2 = 10, apoi 10 + 10 = 20'
    },
    {
        id: 'cpp_024',
        language: 'C++',
        category: 'Operators',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Ce face operatorul %?',
        options: [
            'Returnează restul unei împărțiri',
            'Returnează rezultatul unei înmulțiri',
            'Returnează rezultatul unei adunări',
            'Negează o valoare'
        ],
        correctAnswer: 'Returnează restul unei împărțiri',
        explanation: '% este operatorul modulo. De ex: 10 % 3 = 1'
    },
    {
        id: 'cpp_025',
        language: 'C++',
        category: 'Operators',
        difficulty: 'easy',
        type: 'true-false',
        question: '10 % 3 este egal cu 1.',
        correctAnswer: 'Adevărat',
        explanation: '10 împărțit la 3 este 3 rest 1. Deci 10 % 3 = 1'
    },
    {
        id: 'cpp_026',
        language: 'C++',
        category: 'Operators',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Ce sunt operatorii ++?',
        options: [
            'Increment (adaugă 1)',
            'Decrement (scade 1)',
            'Comparație',
            'Negație'
        ],
        correctAnswer: 'Increment (adaugă 1)',
        explanation: '++ incrementează valoarea cu 1. Pot fi folosiți ca x++ sau ++x'
    },
    {
        id: 'cpp_027',
        language: 'C++',
        category: 'Operators',
        difficulty: 'easy',
        type: 'true-false',
        question: '-- scade 1 din valoare.',
        correctAnswer: 'Adevărat',
        explanation: '-- este operatorul de decrement. De ex: x-- scade 1 din x'
    },
    {
        id: 'cpp_028',
        language: 'C++',
        category: 'Operators',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Ce face operatorul +=?',
        options: [
            'Adaugă o valoare și o atribuie: x += 5 este x = x + 5',
            'Doar adaugă fără a atribui',
            'Comparează dacă două numere sunt egale',
            'Multiplică de 5 ori'
        ],
        correctAnswer: 'Adaugă o valoare și o atribuie: x += 5 este x = x + 5',
        explanation: '+= este operator de atribuire compusă. x += 5 este echivalent cu x = x + 5'
    },
    {
        id: 'cpp_029',
        language: 'C++',
        category: 'Operators',
        difficulty: 'easy',
        type: 'true-false',
        question: '-= se folosește pentru a scădea și atribui o valoare.',
        correctAnswer: 'Adevărat',
        explanation: '-= este operatorul de atribuire compusă pentru scădere.'
    },
    {
        id: 'cpp_030',
        language: 'C++',
        category: 'Operators',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Cum compari dacă două numere sunt egale?',
        options: [
            'Folosind ==',
            'Folosind =',
            'Folosind ===',
            'Folosind !='
        ],
        correctAnswer: 'Folosind ==',
        explanation: '== este operatorul de egalitate pentru comparație. = este pentru atribuire.'
    },
    {
        id: 'cpp_031',
        language: 'C++',
        category: 'Operators',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Ce face !=?',
        options: [
            'Verifică dacă două valori NU sunt egale',
            'Verifică dacă sunt egale',
            'Atribuie o valoare',
            'Compară mai mare'
        ],
        correctAnswer: 'Verifică dacă două valori NU sunt egale',
        explanation: '!= este operatorul de inegalitate. Returnează true dacă valorile sunt diferite.'
    },
    {
        id: 'cpp_032',
        language: 'C++',
        category: 'Operators',
        difficulty: 'easy',
        type: 'true-false',
        question: '> și < sunt operatori de comparație.',
        correctAnswer: 'Adevărat',
        explanation: '> (mai mare) și < (mai mic) sunt operatori de comparație.'
    },
    {
        id: 'cpp_033',
        language: 'C++',
        category: 'Operators',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Ce se afișează pentru 5 > 3?',
        options: [
            'true (1)',
            'false (0)',
            '2',
            'error'
        ],
        correctAnswer: 'true (1)',
        explanation: '5 este mai mare decât 3, deci rezultatul este true.'
    },
    {
        id: 'cpp_034',
        language: 'C++',
        category: 'Operators',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Ce se afișează pentru 3 <= 3?',
        options: [
            'true',
            'false',
            '1',
            'error'
        ],
        correctAnswer: 'Adevărat',
        explanation: '<= înseamnă mai mic sau egal. 3 este egal cu 3, deci rezultatul este true.'
    },
    
    // ===== IF/ELSE (20 întrebări) =====
    {
        id: 'cpp_035',
        language: 'C++',
        category: 'If/Else',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Cum scriei o instrucțiune if?',
        code: `if (conditie) {
    // cod
}`,
        options: [
            'if (conditie) { }',
            'if conditie { }',
            'if: conditie { }',
            'condition if { }'
        ],
        correctAnswer: 'if (conditie) { }',
        explanation: 'if trebuie să fie urmat de o condiție în paranteză.'
    },
    {
        id: 'cpp_036',
        language: 'C++',
        category: 'If/Else',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Ce afișează următorul cod?',
        code: `int x = 10;
if (x > 5) {
    cout << "x este mai mare decât 5";
}`,
        options: [
            'x este mai mare decât 5',
            'nimic',
            'error',
            '10'
        ],
        correctAnswer: 'x este mai mare decât 5',
        explanation: 'x = 10, care este mai mare decât 5, deci condiția este true și se execută codul.'
    },
    {
        id: 'cpp_037',
        language: 'C++',
        category: 'If/Else',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Care este rol else?',
        options: [
            'Execută codul dacă condiția if este falsă',
            'Execută codul dacă condiția if este adevărată',
            'Creează o variabilă',
            'Terminates the program'
        ],
        correctAnswer: 'Execută codul dacă condiția if este falsă',
        explanation: 'else furnizează o cale alternativă de execuție când if nu este satisfăcut.'
    },
    {
        id: 'cpp_038',
        language: 'C++',
        category: 'If/Else',
        difficulty: 'easy',
        type: 'true-false',
        question: 'else if permite verificarea unei alte condiții dacă cea anterioară este falsă.',
        correctAnswer: 'Adevărat',
        explanation: 'else if permite verificarea unei condiții noi dacă ramurile anterioare nu sunt satisfăcute.'
    },
    {
        id: 'cpp_039',
        language: 'C++',
        category: 'If/Else',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Ce afișează codul?',
        code: `int x = 3;
if (x > 5) {
    cout << "mai mare";
} else {
    cout << "mai mic";
}`,
        options: [
            'mai mic',
            'mai mare',
            'mai mic mai mare',
            'error'
        ],
        correctAnswer: 'mai mic',
        explanation: '3 nu este mai mare decât 5, deci condiția if este falsă și se execută else.'
    },
    {
        id: 'cpp_040',
        language: 'C++',
        category: 'If/Else',
        difficulty: 'easy',
        type: 'true-false',
        question: 'Operatorul && înseamnă SI (AND logic).',
        correctAnswer: 'Adevărat',
        explanation: '&& este operatorul AND. Ambele condiții trebuie să fie true.'
    },
    {
        id: 'cpp_041',
        language: 'C++',
        category: 'If/Else',
        difficulty: 'easy',
        type: 'true-false',
        question: 'Operatorul || înseamnă SAU (OR logic).',
        correctAnswer: 'Adevărat',
        explanation: '|| este operatorul OR. Cel puțin una din condiții trebuie să fie true.'
    },
    {
        id: 'cpp_042',
        language: 'C++',
        category: 'If/Else',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Ce afișează?',
        code: `if (5 > 3 && 2 > 1) {
    cout << "true";
} else {
    cout << "false";
}`,
        options: [
            'true',
            'false',
            'true false',
            'error'
        ],
        correctAnswer: 'Adevărat',
        explanation: 'Ambele condiții (5 > 3 ȘI 2 > 1) sunt adevărate, deci rezultatul este true.'
    },
    {
        id: 'cpp_043',
        language: 'C++',
        category: 'If/Else',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Ce afișează?',
        code: `if (5 > 10 || 2 > 1) {
    cout << "true";
} else {
    cout << "false";
}`,
        options: [
            'true',
            'false',
            'true false',
            'error'
        ],
        correctAnswer: 'Adevărat',
        explanation: 'Chiar dacă prima condiție este falsă, a doua este adevărată. SAU necesită doar una adevărată.'
    },
    
    // ===== LOOPS - FOR (30 întrebări) =====
    {
        id: 'cpp_044',
        language: 'C++',
        category: 'Loops',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Ce este o buclă for?',
        options: [
            'O structură care repetă codul de mai multe ori',
            'O funcție',
            'Un comentariu',
            'Un tip de variabilă'
        ],
        correctAnswer: 'O structură care repetă codul de mai multe ori',
        explanation: 'for este o buclă care permite executarea repetată a unui bloc de cod.'
    },
    {
        id: 'cpp_045',
        language: 'C++',
        category: 'Loops',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Care este sintaxa buclei for?',
        code: `for (init; conditie; increment) {
    // cod
}`,
        options: [
            'for (inițializare; condiție; increment)',
            'for (condiție)',
            'for begin end',
            'for (element in array)'
        ],
        correctAnswer: 'for (inițializare; condiție; increment)',
        explanation: 'for are trei elemente: inițializare, condiție de continuare, și increment.'
    },
    {
        id: 'cpp_046',
        language: 'C++',
        category: 'Loops',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Ce afișează?',
        code: `for (int i = 0; i < 3; i++) {
    cout << i << " ";
}`,
        options: [
            '0 1 2',
            '1 2 3',
            '0 1 2 3',
            '3 2 1'
        ],
        correctAnswer: '0 1 2',
        explanation: 'i pornește de la 0, și se incrementează până când i < 3. Deci: 0, 1, 2'
    },
    {
        id: 'cpp_047',
        language: 'C++',
        category: 'Loops',
        difficulty: 'easy',
        type: 'true-false',
        question: 'for (int i = 5; i > 0; i--) va pune i de la 5 la 1.',
        correctAnswer: 'Adevărat',
        explanation: 'i-- decrementează, deci va merge: 5, 4, 3, 2, 1'
    },
    {
        id: 'cpp_048',
        language: 'C++',
        category: 'Loops',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Ce afișează?',
        code: `for (int i = 1; i <= 5; i++) {
    cout << i;
}`,
        options: [
            '12345',
            '0 1 2 3 4',
            '1 2 3 4 5',
            '5 4 3 2 1'
        ],
        correctAnswer: '12345',
        explanation: 'Buclă de la 1 la 5, afișând fiecare valoare la rând: 12345'
    },
    {
        id: 'cpp_049',
        language: 'C++',
        category: 'Loops',
        difficulty: 'easy',
        type: 'text-complete',
        question: 'Completează: for (int i = 0; i < 10; ___) { } pentru a incrementa i',
        correctAnswer: 'i++',
        explanation: 'i++ incrementează variabila i cu 1 în fiecare iterație.'
    },
    {
        id: 'cpp_050',
        language: 'C++',
        category: 'Loops',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'De câte ori se execută codul din buclă?',
        code: `for (int i = 0; i < 5; i++) {
    cout << "x";
}`,
        options: [
            '5 ori',
            '4 ori',
            '6 ori',
            '0 ori'
        ],
        correctAnswer: '5 ori',
        explanation: 'Buclă merge de la 0 la 4 (5 iterații)'
    },
    {
        id: 'cpp_051',
        language: 'C++',
        category: 'Loops',
        difficulty: 'easy',
        type: 'true-false',
        question: 'break poate opri o buclă for înainte de a termina.',
        correctAnswer: 'Adevărat',
        explanation: 'break iese din buclă înainte de a ajunge la condiția finală.'
    },
    {
        id: 'cpp_052',
        language: 'C++',
        category: 'Loops',
        difficulty: 'easy',
        type: 'true-false',
        question: 'continue sare peste restul buclei și merge la următoarea iterație.',
        correctAnswer: 'Adevărat',
        explanation: 'continue sare peste codul rămas din iterația curentă și trece la următoare.'
    },
    
    // ===== LOOPS - WHILE (20 întrebări) =====
    {
        id: 'cpp_053',
        language: 'C++',
        category: 'Loops',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Care este diferența dintre for și while?',
        options: [
            'for are formă compactă (init;cond;inc), while pur condiție',
            'for este mai rapid',
            'while nu se poate folosi cu variabile',
            'Nu sunt diferențe'
        ],
        correctAnswer: 'for are formă compactă (init;cond;inc), while pur condiție',
        explanation: 'for include inițializare și increment, while doar verifică condiția.'
    },
    {
        id: 'cpp_054',
        language: 'C++',
        category: 'Loops',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Care este sintaxa while?',
        code: `while (conditie) {
    // cod
}`,
        options: [
            'while (condiție) { }',
            'while condition { }',
            'while (condiție)',
            'while: { }'
        ],
        correctAnswer: 'while (condiție) { }',
        explanation: 'while repetă codul atâta timp cât condiția este adevărată.'
    },
    {
        id: 'cpp_055',
        language: 'C++',
        category: 'Loops',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Ce afișează?',
        code: `int i = 0;
while (i < 3) {
    cout << i << " ";
    i++;
}`,
        options: [
            '0 1 2',
            '0 1 2 3',
            '1 2 3',
            '0'
        ],
        correctAnswer: '0 1 2',
        explanation: 'while merge de la 0 la 2 (0 < 3, 1 < 3, 2 < 3, stop)'
    },
    {
        id: 'cpp_056',
        language: 'C++',
        category: 'Loops',
        difficulty: 'easy',
        type: 'true-false',
        question: 'do-while execută codul cel puțin o dată, chiar dacă condiția este falsă.',
        correctAnswer: 'Adevărat',
        explanation: 'do-while verifică condiția după execuție, nu înainte.'
    },
    {
        id: 'cpp_057',
        language: 'C++',
        category: 'Loops',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Ce afișează?',
        code: `int i = 5;
while (i > 0) {
    cout << i << " ";
    i--;
}`,
        options: [
            '5 4 3 2 1',
            '4 3 2 1',
            '5 4 3 2 1 0',
            '0'
        ],
        correctAnswer: '5 4 3 2 1',
        explanation: 'Decrementează de la 5 la 1'
    },
    
    // ===== ARRAYS/VECTORS BASICS (35 întrebări) =====
    {
        id: 'cpp_058',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Ce este un vector (array)?',
        options: [
            'O colecție de elemente de același tip stocate consecutiv',
            'O variabilă',
            'O funcție',
            'Un comentariu'
        ],
        correctAnswer: 'O colecție de elemente de același tip stocate consecutiv',
        explanation: 'Un vector este o structură de date care stochează mai multe valori de același tip.'
    },
    {
        id: 'cpp_059',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Cum declari un vector?',
        code: `int v[5];`,
        options: [
            'int v[5]; (tip[], size)',
            'int 5 v;',
            'array v[5] int;',
            'vector<int> v(5);'
        ],
        correctAnswer: 'int v[5]; (tip[], size)',
        explanation: 'Sintaxa: tip nume[dimensiune]'
    },
    {
        id: 'cpp_060',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'true-false',
        question: 'Indexele unui vector încep de la 1.',
        correctAnswer: 'Fals',
        explanation: 'Indexele încep de la 0. Pentru v[5]: índices 0, 1, 2, 3, 4'
    },
    {
        id: 'cpp_061',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Cum accesezi al doilea element din vector?',
        options: [
            'v[1]',
            'v[2]',
            'v.get(1)',
            'v.second()'
        ],
        correctAnswer: 'v[1]',
        explanation: 'Al doilea element este la índex 1 (deoarece indexarea începe de la 0).'
    },
    {
        id: 'cpp_062',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Ce se stochează în v[0] pentru vectorul: int v[] = {10, 20, 30};?',
        options: [
            '10',
            '20',
            '30',
            'error'
        ],
        correctAnswer: '10',
        explanation: 'v[0] stochează primul element, care este 10.'
    },
    {
        id: 'cpp_063',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Ce afișează?',
        code: `int v[3] = {5, 10, 15};
cout << v[2];`,
        options: [
            '15',
            '10',
            '5',
            'error'
        ],
        correctAnswer: '15',
        explanation: 'v[2] este al treilea element: 15'
    },
    {
        id: 'cpp_064',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'true-false',
        question: 'Dimensiunea unui vector nu poate fi schimbată după declarare.',
        correctAnswer: 'Adevărat',
        explanation: 'Un vector static nu poate schimba dimensiunea. Pentru redimensionare, se folosesc std::vector.'
    },
    {
        id: 'cpp_065',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Ce afișează următorul cod?',
        code: `int v[4] = {2, 4, 6, 8};
for (int i = 0; i < 4; i++) {
    cout << v[i] << " ";
}`,
        options: [
            '2 4 6 8',
            '0 1 2 3',
            '1 2 3 4',
            'error'
        ],
        correctAnswer: '2 4 6 8',
        explanation: 'Parcurge vectorul de la 0 la 3 și afișează fiecare element.'
    },
    {
        id: 'cpp_066',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Cum citești 5 numere într-un vector?',
        code: `int v[5];
for (int i = 0; i < 5; i++) {
    cin >> v[i];
}`,
        options: [
            'Cu o buclă for și cin >> v[i]',
            'Cu cin >> v',
            'Cu getline',
            'Nu poți citi într-un vector'
        ],
        correctAnswer: 'Cu o buclă for și cin >> v[i]',
        explanation: 'Trebuie să citești fiecare element în parte.'
    },
    {
        id: 'cpp_067',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Ce afișează?',
        code: `int v[5] = {1, 2, 3, 4, 5};
cout << v[0] + v[4];`,
        options: [
            '6',
            '9',
            '5',
            '1'
        ],
        correctAnswer: '6',
        explanation: 'v[0] = 1, v[4] = 5. 1 + 5 = 6'
    },
    {
        id: 'cpp_068',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'true-false',
        question: 'Pot modifica un element din vector după declarare.',
        correctAnswer: 'Adevărat',
        explanation: 'Poți asigna o nouă valoare: v[0] = 100;'
    },
    {
        id: 'cpp_069',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Ce dimensiune are vectorul: int v[10];?',
        options: [
            '10 elemente',
            '9 elemente',
            '11 elemente',
            'Depinde de sistem'
        ],
        correctAnswer: '10 elemente',
        explanation: '[10] înseamnă 10 elemente cu indici 0-9.'
    },
    {
        id: 'cpp_070',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Care dintre acestea declară corect un vector?',
        options: [
            'int v[5];',
            'int 5 v;',
            'int v[];',
            'vector v 5;'
        ],
        correctAnswer: 'int v[5];',
        explanation: 'Sintaxa corectă: tip nume[dimensiune];'
    },
    {
        id: 'cpp_071',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'true-false',
        question: 'Un vector poate stoca numere și text în același timp.',
        correctAnswer: 'Fals',
        explanation: 'Un vector cu tip int stochează doar întregi. Pentru tip mixt, se folosesc alte structuri.'
    },
    {
        id: 'cpp_072',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Ce se întâmplă dacă accesez v[10] pentru un vector de mărime 5?',
        options: [
            'Eroare sau comportament nedefinit',
            'Merge normal',
            'Returnează 0',
            'Returnează -1'
        ],
        correctAnswer: 'Eroare sau comportament nedefinit',
        explanation: 'Accesul în afara limitelor este eroare. v[10] este invalid pentru v[5].'
    },
    
    // ===== VECTORS ADVANCED (25 întrebări) =====
    {
        id: 'cpp_073',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Cum aflu suma tuturor elementelor din vector?',
        code: `int sum = 0;
for (int i = 0; i < n; i++) {
    sum += v[i];
}`,
        options: [
            'Parcurg vectorul și adaug fiecare element la o variabilă sum',
            'Folosesc v.sum()',
            'Adaug toate direct: sum = v[0] + v[1] + ...',
            'Nu pot afla suma'
        ],
        correctAnswer: 'Parcurg vectorul și adaug fiecare element la o variabilă sum',
        explanation: 'Se folosește o buclă cu += pentru a acumula suma.'
    },
    {
        id: 'cpp_074',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Cum găsesc elementul minim dintr-un vector?',
        options: [
            'Comparez toate elementele cu o variabilă min inițializată cu v[0]',
            'Folosesc v.min()',
            'Sortez și iau primul',
            'Nu pot găsi minimul'
        ],
        correctAnswer: 'Comparez toate elementele cu o variabilă min inițializată cu v[0]',
        explanation: 'Se parcurge vectorul și se compară fiecare element cu minimul curent.'
    },
    {
        id: 'cpp_075',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Cum găsesc elementul maxim dintr-un vector?',
        options: [
            'Comparez toate elementele cu o variabilă max inițializată cu v[0]',
            'Folosesc v.max()',
            'Sortez și iau ultimul',
            'Nu pot găsi maximul'
        ],
        correctAnswer: 'Comparez toate elementele cu o variabilă max inițializată cu v[0]',
        explanation: 'Asemănător cu minimul, dar comparam cu > în loc de <.'
    },
    {
        id: 'cpp_076',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Ce afișează?',
        code: `int v[5] = {3, 1, 4, 1, 5};
int min_val = v[0];
for (int i = 1; i < 5; i++) {
    if (v[i] < min_val) {
        min_val = v[i];
    }
}
cout << min_val;`,
        options: [
            '1',
            '3',
            '5',
            '4'
        ],
        correctAnswer: '1',
        explanation: 'Elementul minim din vector este 1.'
    },
    {
        id: 'cpp_077',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Cum modific al treilea element din vector la valoarea 100?',
        code: `v[2] = 100;`,
        options: [
            'v[2] = 100;',
            'v[3] = 100;',
            'v.set(2, 100);',
            'v = {0, 0, 100, 0, 0};'
        ],
        correctAnswer: 'v[2] = 100;',
        explanation: 'Al treilea element este la índex 2.'
    },
    {
        id: 'cpp_078',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'true-false',
        question: 'Diferența între o variabilă și un vector este că vectorul stochează mai multe valori.',
        correctAnswer: 'Adevărat',
        explanation: 'O variabilă stochează o singură valoare, un vector stochează mai multe.'
    },
    {
        id: 'cpp_079',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Ce vor sa fie dimensiunea unui vector care trebuie să stocheze 10 cifre?',
        options: [
            '10',
            '9',
            '11',
            '100'
        ],
        correctAnswer: '10',
        explanation: '[10] furnizează 10 elemente cu indici 0-9.'
    },
    {
        id: 'cpp_080',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Ce se afișează?',
        code: `int v[3] = {1, 2, 3};
v[0] = 10;
cout << v[0];`,
        options: [
            '10',
            '1',
            '3',
            'error'
        ],
        correctAnswer: '10',
        explanation: 'Valoarea v[0] a fost modificată de la 1 la 10.'
    },
    {
        id: 'cpp_081',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Care este avantajul unui vector?',
        options: [
            'Stochează mai multe valori sub o singură denumire',
            'Este mai rapid decât o variabilă',
            'Nu are dezavantaje',
            'Ocupă mai puțin spațiu'
        ],
        correctAnswer: 'Stochează mai multe valori sub o singură denumire',
        explanation: 'Vectorii permit gestionarea colecțiilor de date sub o singură denumire.'
    },
    {
        id: 'cpp_082',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'true-false',
        question: 'Pot declara un vector fără să específic dimensiunea.',
        correctAnswer: 'Fals',
        explanation: 'În C++ standard, trebuie să specifici dimensiunea. std::vector nu necesită asta.'
    },
    {
        id: 'cpp_083',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'De câte ori se execută bucla?',
        code: `int v[5] = {10, 20, 30, 40, 50};
for (int i = 0; i < 5; i++) {
    cout << v[i] << " ";
}`,
        options: [
            '5 ori',
            '4 ori',
            '6 ori',
            '10 ori'
        ],
        correctAnswer: '5 ori',
        explanation: 'Vectorul are 5 elemente, deci bucla se execută 5 ori.'
    },
    {
        id: 'cpp_084',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Cum inițializez un vector cu 0-uri?',
        code: `int v[5] = {0, 0, 0, 0, 0};`,
        options: [
            'int v[5] = {0, 0, 0, 0, 0};',
            'int v[5] = 0;',
            'int v[5];',
            'int v[5] = {0};'
        ],
        correctAnswer: 'int v[5] = {0, 0, 0, 0, 0};',
        explanation: 'Sau mai compact: int v[5] = {}; sau int v[5] = {0};'
    },
    {
        id: 'cpp_085',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Ce afișează?',
        code: `int v[4] = {10, 20, 30, 40};
cout << v[0] << v[2];`,
        options: [
            '1030',
            '10 30',
            '50',
            '4'
        ],
        correctAnswer: '1030',
        explanation: 'v[0] = 10, v[2] = 30. Se concatenează: 1030'
    },
    
    // ===== VECTOR OPERATIONS (30 întrebări) =====
    {
        id: 'cpp_086',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'true-false',
        question: 'Pot declara un vector de float-uri.',
        correctAnswer: 'Adevărat',
        explanation: 'float v[5]; este o declarație validă.'
    },
    {
        id: 'cpp_087',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'true-false',
        question: 'Pot declara un vector de char-uri.',
        correctAnswer: 'Adevărat',
        explanation: 'char v[5]; declară un vector de caractere.'
    },
    {
        id: 'cpp_088',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Cum copiez valoarea unui element în alta?',
        code: `int x = v[2];`,
        options: [
            'int x = v[2];',
            'v[2] = x;',
            'x = v.copy(2);',
            'copy(v[2], x);'
        ],
        correctAnswer: 'int x = v[2];',
        explanation: 'Asignezi valoarea din vector la variabilă.'
    },
    {
        id: 'cpp_089',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Cum aflu numărul de elemente dintr-un vector?',
        code: `int size = 5; // Trebuie să știi dimensiunea`,
        options: [
            'Dimensiunea declarată în [dimensiune]',
            'v.size()',
            'v.length()',
            'sizeof(v) / sizeof(v[0])'
        ],
        correctAnswer: 'Dimensiunea declarată în [dimensiune]',
        explanation: 'Pentru vectori statici, trebuie să știi dimensiunea. sizeof() poate funcționa doar în anumite cazuri.'
    },
    {
        id: 'cpp_090',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Ce afișează?',
        code: `float v[3] = {1.5, 2.5, 3.5};
cout << v[1];`,
        options: [
            '2.5',
            '1.5',
            '3.5',
            '0.5'
        ],
        correctAnswer: '2.5',
        explanation: 'v[1] este al doilea element: 2.5'
    },
    {
        id: 'cpp_091',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Cum citesc un întreg vector de la tastatură?',
        code: `for (int i = 0; i < n; i++) {
    cin >> v[i];
}`,
        options: [
            'Cu o buclă for și cin >> v[i]',
            'cin >> v;',
            'getline(cin, v);',
            'Vectorii nu pot citi date'
        ],
        correctAnswer: 'Cu o buclă for și cin >> v[i]',
        explanation: 'Trebuie să citești fiecare element în parte.'
    },
    {
        id: 'cpp_092',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Cum afișez întreg vectorul?',
        code: `for (int i = 0; i < n; i++) {
    cout << v[i] << " ";
}`,
        options: [
            'Cu o buclă for și cout << v[i]',
            'cout << v;',
            'print(v);',
            'Vectorii nu se pot afișa'
        ],
        correctAnswer: 'Cu o buclă for și cout << v[i]',
        explanation: 'Trebuie să afișezi fiecare element în parte.'
    },
    {
        id: 'cpp_093',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'true-false',
        question: 'int v[5]; declară un vector cu 5 spații neinitialiaze.',
        correctAnswer: 'Adevărat',
        explanation: 'Fără inițializare explicită, elementele conțin valori arbitrare.'
    },
    {
        id: 'cpp_094',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Ce rezultat are parcurgerea unui vector de 3 elemente?',
        code: `for (int i = 0; i < 3; i++) {
    cout << i;
}`,
        options: [
            'Se afișează índecii: 0 1 2',
            'Se afișează valorile din vector',
            'Se afișează dimensiunea',
            'Nicio afișare'
        ],
        correctAnswer: 'Se afișează índecii: 0 1 2',
        explanation: 'Buclă afișează valorile variabilei i, nu valorile din vector.'
    },
    {
        id: 'cpp_095',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Cum copiez un vector în altul?',
        options: [
            'Trebuie să copii fiecare element: v2[i] = v1[i];',
            'v2 = v1;',
            'copy(v1, v2);',
            'Vectorii nu se pot copia'
        ],
        correctAnswer: 'Trebuie să copii fiecare element: v2[i] = v1[i];',
        explanation: 'Se folosește o buclă pentru a copia fiecare element.'
    },
    {
        id: 'cpp_096',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Ce afișează?',
        code: `int v[3] = {5, 10, 15};
int sum = v[0] + v[1] + v[2];
cout << sum;`,
        options: [
            '30',
            '25',
            '20',
            '3'
        ],
        correctAnswer: '30',
        explanation: '5 + 10 + 15 = 30'
    },
    {
        id: 'cpp_097',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'true-false',
        question: 'Pot folosi un vector într-o funcție.',
        correctAnswer: 'Adevărat',
        explanation: 'Vectorii se pot transmite ca parametri funcțiilor.'
    },
    {
        id: 'cpp_098',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Unde se stochează valorile unui vector?',
        options: [
            'În memorie (RAM)',
            'Pe disc dur',
            'În procesor',
            'Pe internet'
        ],
        correctAnswer: 'În memorie (RAM)',
        explanation: 'Vectorii se stochează în RAM în locații consecutive.'
    },
    {
        id: 'cpp_099',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'true-false',
        question: 'int v[5] = {1}; inițializează doar primul element, restul cu 0.',
        correctAnswer: 'Adevărat',
        explanation: 'Inițializarea parțială umple restul cu 0.'
    },
    {
        id: 'cpp_100',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Ce afișează?',
        code: `int v[5];
for (int i = 0; i < 5; i++) {
    v[i] = i * 2;
}
cout << v[3];`,
        options: [
            '6',
            '3',
            '2',
            '8'
        ],
        correctAnswer: '6',
        explanation: 'v[3] = 3 * 2 = 6'
    },
    
    // ===== VECTORS SPECIAL (40+ întrebări) =====
    {
        id: 'cpp_101',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'true-false',
        question: 'Vectorii sunt o structură de date liniară.',
        correctAnswer: 'Adevărat',
        explanation: 'Vectorii sunt colecții liniare de elemente identice.'
    },
    {
        id: 'cpp_102',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Ce avantaj are vectorul față de variabile multiple?',
        options: [
            'Ușurința de a gestiona mai multe valori cu o singură denumire',
            'Este mai mic în memorie',
            'Este mai rapid',
            'Nu are avantaje'
        ],
        correctAnswer: 'Ușurința de a gestiona mai multe valori cu o singură denumire',
        explanation: 'În loc de x1, x2, x3... poți folosi v[0], v[1], v[2]...'
    },
    {
        id: 'cpp_103',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Pentru a accesa al patrulea element, folosesc:',
        options: [
            'v[3]',
            'v[4]',
            'v[5]',
            'v.get(4)'
        ],
        correctAnswer: 'v[3]',
        explanation: 'Indexarea începe de la 0, deci al patrulea element este la índex 3.'
    },
    {
        id: 'cpp_104',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'true-false',
        question: 'Inițializarea unui vector se face cu acolade.',
        correctAnswer: 'Adevărat',
        explanation: 'int v[] = {1, 2, 3}; sau int v[3] = {1, 2, 3};'
    },
    {
        id: 'cpp_105',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Cum aflu primul element?',
        options: [
            'v[0]',
            'v.first()',
            'v[1]',
            'first(v)'
        ],
        correctAnswer: 'v[0]',
        explanation: 'Primul element este la índex 0.'
    },
    {
        id: 'cpp_106',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Cum aflu ultimul element din v[5]?',
        options: [
            'v[4]',
            'v[5]',
            'v[n-1] unde n este dimensiunea',
            'v.last()'
        ],
        correctAnswer: 'v[4]',
        explanation: 'În v[5], últimul element este v[4].'
    },
    {
        id: 'cpp_107',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Ce conține v[0] inițial dacă nu este inițializat?',
        options: [
            'Valoare aleatorie (garbage value)',
            '0',
            'null',
            'undefined'
        ],
        correctAnswer: 'Valoare aleatorie (garbage value)',
        explanation: 'Fără inițializare, conținutul este nedefinit.'
    },
    {
        id: 'cpp_108',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'true-false',
        question: 'Pot modifica elementele unui vector după inițializare.',
        correctAnswer: 'Adevărat',
        explanation: 'Pot rescrie orice element: v[0] = 999;'
    },
    {
        id: 'cpp_109',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Cum adun două elemente din vector?',
        code: `int suma = v[0] + v[2];`,
        options: [
            'v[0] + v[2]',
            'v[0].add(v[2])',
            'add(v[0], v[2])',
            'v[0:2]'
        ],
        correctAnswer: 'v[0] + v[2]',
        explanation: 'Se folosește operatorul + obișnuit.'
    },
    {
        id: 'cpp_110',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'true-false',
        question: 'Doi vectori pot fi comparat direct cu ==',
        correctAnswer: 'Fals',
        explanation: 'Trebuie să compari fiecare element în parte.'
    },
    {
        id: 'cpp_111',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Care este lungimea unui vector v[10]?',
        options: [
            '10',
            '9',
            '11',
            'Variabilă'
        ],
        correctAnswer: '10',
        explanation: '[10] declară 10 locații.'
    },
    {
        id: 'cpp_112',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Cum iterez prin toate elementele?',
        code: `for (int i = 0; i < 5; i++) cout << v[i];`,
        options: [
            'Cu o buclă for de la 0 la dimensiune-1',
            'Cu un foreach',
            'Cu un while',
            'Nu pot itera'
        ],
        correctAnswer: 'Cu o buclă for de la 0 la dimensiune-1',
        explanation: 'Buclă tradițională este cea mai simplă.'
    },
    {
        id: 'cpp_113',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'true-false',
        question: 'Pot folosi un vector ca parametru al unei funcții.',
        correctAnswer: 'Adevărat',
        explanation: 'Se transmit vectorii ca pointeri sau prin referință.'
    },
    {
        id: 'cpp_114',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Cum declar un vector de 7 numere?',
        options: [
            'int v[7];',
            'int 7 v;',
            'array v(7);',
            'vector v[7];'
        ],
        correctAnswer: 'int v[7];',
        explanation: 'Sintaxa corectă: tip nume[dimensiune];'
    },
    {
        id: 'cpp_115',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'true-false',
        question: 'Un vector trebuie să aibă aceeași dimensiune pentru toate tipurile de date.',
        correctAnswer: 'Adevărat',
        explanation: 'int v[5] stochează doar întregi, float v[5] doar float-uri.'
    },
    {
        id: 'cpp_116',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Ce afișează?',
        code: `int v[3] = {100, 200, 300};
cout << v[1] + v[2];`,
        options: [
            '500',
            '400',
            '300',
            '600'
        ],
        correctAnswer: '500',
        explanation: '200 + 300 = 500'
    },
    {
        id: 'cpp_117',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Cum multiplicz un element din vector cu o valoare?',
        code: `v[2] = v[2] * 5;`,
        options: [
            'v[2] = v[2] * 5;',
            'v[2] *= 5;',
            'multiply(v[2], 5);',
            'ambele de mai sus'
        ],
        correctAnswer: 'ambele de mai sus',
        explanation: 'Ambele forme sunt corecte.'
    },
    {
        id: 'cpp_118',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'true-false',
        question: 'Indexul unui vector nu poate fi negativ.',
        correctAnswer: 'Adevărat',
        explanation: 'Indexii sunt 0, 1, 2... - numere non-negative.'
    },
    {
        id: 'cpp_119',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Cum verific dacă o valoare se găsește în vector?',
        options: [
            'Parcurg vectorul cu o buclă și compar',
            'v.contains(valoare)',
            'find(v, valoare)',
            'Nu pot verifica'
        ],
        correctAnswer: 'Parcurg vectorul cu o buclă și compar',
        explanation: 'Se folosește o buclă for cu if pentru comparare.'
    },
    {
        id: 'cpp_120',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Ce afișează?',
        code: `int v[4] = {7, 14, 21, 28};
int suma = 0;
for (int i = 0; i < 4; i++) {
    suma += v[i];
}
cout << suma;`,
        options: [
            '70',
            '28',
            '7',
            '100'
        ],
        correctAnswer: '70',
        explanation: '7 + 14 + 21 + 28 = 70'
    },
    {
        id: 'cpp_121',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'true-false',
        question: 'Elementele unui vector trebuie să fie consecutive în memorie.',
        correctAnswer: 'Adevărat',
        explanation: 'Vectorii sunt alocați într-un bloc continuu de memorie.'
    },
    {
        id: 'cpp_122',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Cum găsesc maximul din v[3] = {5, 2, 9}?',
        options: [
            'Parcurg și compar: max = v[0]; if (v[i] > max)...',
            'v.max()',
            'max(v)',
            'v[2] deoarece e al treilea'
        ],
        correctAnswer: 'Parcurg și compar: max = v[0]; if (v[i] > max)...',
        explanation: 'Trebuie să caut maximul cu o buclă.'
    },
    {
        id: 'cpp_123',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Cum găsesc minimul din v[4] = {3, 1, 5, 2}?',
        options: [
            'Parcurg și compar: min = v[0]; if (v[i] < min)...',
            'v.min()',
            'min(v)',
            'v[1] deoarece e al doilea'
        ],
        correctAnswer: 'Parcurg și compar: min = v[0]; if (v[i] < min)...',
        explanation: 'Minimul este 1, trebuie să caut.'
    },
    {
        id: 'cpp_124',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Care este avantajul unui vector de 100 elemente?',
        options: [
            'Gestionez cu 1 nume în loc de 100 de variabile',
            'Ocupă mai puțin spațiu decât 100 variabile',
            'Este mai rapid',
            'Toate de mai sus'
        ],
        correctAnswer: 'Gestionez cu 1 nume în loc de 100 de variabile',
        explanation: 'Principalul avantaj este simplicitatea și organizarea codului.'
    },
    {
        id: 'cpp_125',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'true-false',
        question: 'Pot citi și afișa vectori cu cin și cout direct.',
        correctAnswer: 'Fals',
        explanation: 'Trebuie să folosesc bucle pentru a citi/afișa fiecare element.'
    },
    {
        id: 'cpp_126',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Cum inițializez un vector cu valori de la 1 la 5?',
        code: `int v[5] = {1, 2, 3, 4, 5};`,
        options: [
            'int v[5] = {1, 2, 3, 4, 5};',
            'int v[] = {1, 2, 3, 4, 5};',
            'ambele de mai sus',
            'int v[5] = 1..5;'
        ],
        correctAnswer: 'ambele de mai sus',
        explanation: 'Ambele forme sunt corecte.'
    },
    {
        id: 'cpp_127',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Ce dimensiune sunt necesară pentru a stoca 20 de numere?',
        options: [
            '20',
            '21',
            '19',
            '200'
        ],
        correctAnswer: '20',
        explanation: '[20] stochează 20 numere.'
    },
    {
        id: 'cpp_128',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'true-false',
        question: 'Pot inițializa vectorul fără să specifici dimensiunea dacă specifici valorile.',
        correctAnswer: 'Adevărat',
        explanation: 'int v[] = {1, 2, 3}; dimensiunea se deduce automat: 3.'
    },
    {
        id: 'cpp_129',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Ce afișează?',
        code: `int v[6] = {10, 20, 30, 40, 50, 60};
cout << (v[2] + v[5]) / 2;`,
        options: [
            '45',
            '30',
            '50',
            '60'
        ],
        correctAnswer: '45',
        explanation: '(30 + 60) / 2 = 90 / 2 = 45'
    },
    {
        id: 'cpp_130',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'true-false',
        question: 'Vectorul este o structură statică cu dimensiune fixă.',
        correctAnswer: 'Adevărat',
        explanation: 'Vectorul în C++ clasic (arrays) are dimensiune fixă.'
    },
    {
        id: 'cpp_131',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Cum verific dacă vector conține 3 elemente?',
        options: [
            'Dimensiunea declarată trebuie să fie 3',
            'v.size() == 3',
            'v[3]',
            'Nu pot verifica'
        ],
        correctAnswer: 'Dimensiunea declarată trebuie să fie 3',
        explanation: 'Trebuie să o știi la declarare: int v[3];'
    },
    {
        id: 'cpp_132',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Ce face operația v[2] = v[1];?',
        options: [
            'Copiază valoarea din v[1] în v[2]',
            'Copiază v[2] în v[1]',
            'Compară valorile',
            'Șterge v[2]'
        ],
        correctAnswer: 'Copiază valoarea din v[1] în v[2]',
        explanation: '= este operator de atribuire.'
    },
    {
        id: 'cpp_133',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'true-false',
        question: 'Pot declara vectori de vectori (matrice) în C++.',
        correctAnswer: 'Adevărat',
        explanation: 'int matrix[3][3]; declară o matrice 3x3.'
    },
    {
        id: 'cpp_134',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Ce afișează?',
        code: `int v[5] = {1, 2, 3, 4, 5};
for (int i = 0; i < 5; i++) {
    if (v[i] % 2 == 0) cout << v[i] << " ";
}`,
        options: [
            '2 4',
            '1 3 5',
            '1 2 3 4 5',
            'nimic'
        ],
        correctAnswer: '2 4',
        explanation: 'Afișează doar numerele pare.'
    },
    {
        id: 'cpp_135',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'true-false',
        question: 'Un vector al unui tip nu poate conține date de alt tip.',
        correctAnswer: 'Adevărat',
        explanation: 'int v[5] stochează doar întregi, nu și float-uri.'
    },
    {
        id: 'cpp_136',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Cum parcurg un vector invers?',
        code: `for (int i = n-1; i >= 0; i--) cout << v[i];`,
        options: [
            'Cu o buclă descrescătoare: i = n-1; i >= 0; i--',
            'Cu o buclă crescătoare în direcție inversă',
            'v.reverse()',
            'Nu pot parcu invers'
        ],
        correctAnswer: 'Cu o buclă descrescătoare: i = n-1; i >= 0; i--',
        explanation: 'Pornesc de la ultimul index și scad.'
    },
    {
        id: 'cpp_137',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Ce se stochează în memoria calculatorului pentru un vector?',
        options: [
            'Referința la prima adresă și dimensiunea',
            'Doar valorile elementelor',
            'Tipul de date',
            'Doar primele 4 elemente'
        ],
        correctAnswer: 'Referința la prima adresă și dimensiunea',
        explanation: 'Vectorii sunt pointeri către primul element.'
    },
    {
        id: 'cpp_138',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'true-false',
        question: 'Două elemente din vector pot avea aceeași valoare.',
        correctAnswer: 'Adevărat',
        explanation: 'De exemplu: {1, 2, 2, 3} are 2 de două ori.'
    },
    {
        id: 'cpp_139',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Cum aflu media unui vector?',
        code: `int sum = 0;
for (int i = 0; i < n; i++) sum += v[i];
float media = sum / (float) n;`,
        options: [
            'Adun toate elementele și împart la dimensiune',
            'v.average()',
            'average(v)',
            'Nu pot calcula'
        ],
        correctAnswer: 'Adun toate elementele și împart la dimensiune',
        explanation: 'Suma / Dimensiune.'
    },
    {
        id: 'cpp_140',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'true-false',
        question: 'Acceseaza v[10] pentru un vector de 5 elemente produce compilare fără eroare.',
        correctAnswer: 'Adevărat',
        explanation: 'Compilatorul nu prinde erori de acces, doar la runtime apar probleme.'
    },
    {
        id: 'cpp_141',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Cum copiez elementul de la índex 1 la índex 4?',
        code: `v[4] = v[1];`,
        options: [
            'v[4] = v[1];',
            'copy(v[1], v[4]);',
            'v[4] += v[1];',
            'v.copy(1, 4);'
        ],
        correctAnswer: 'v[4] = v[1];',
        explanation: 'Asignare simplă.'
    },
    {
        id: 'cpp_142',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'true-false',
        question: 'Un vector poate fi gol (fără elemente).',
        correctAnswer: 'Fals',
        explanation: 'Vectorii statici au dimensiune fixă mai mare sau egală cu 1.'
    },
    {
        id: 'cpp_143',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Cum aflu câte elemente impare are vectorul?',
        code: `int count = 0;
for (int i = 0; i < n; i++)
    if (v[i] % 2 != 0) count++;`,
        options: [
            'Parcurg și verific v[i] % 2 != 0',
            'v.count_odd()',
            'count(v, odd)',
            'Nu pot'
        ],
        correctAnswer: 'Parcurg și verific v[i] % 2 != 0',
        explanation: 'Se contorizează elementele impare.'
    },
    {
        id: 'cpp_144',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'true-false',
        question: 'Pentru un vector v[5], indicii valizi sunt 0, 1, 2, 3, 4.',
        correctAnswer: 'Adevărat',
        explanation: 'Indicii sunt întotdeauna de la 0 la dimensiune-1.'
    },
    {
        id: 'cpp_145',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Ce afișează?',
        code: `int v[6];
for (int i = 0; i < 6; i++) v[i] = i * 10;
cout << v[0] << " " << v[3] << " " << v[5];`,
        options: [
            '0 30 50',
            '10 40 60',
            '0 3 5',
            '10 30 50'
        ],
        correctAnswer: '0 30 50',
        explanation: 'v[0] = 0, v[3] = 30, v[5] = 50.'
    },
    {
        id: 'cpp_146',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'true-false',
        question: 'sizeof(v) / sizeof(v[0]) dă dimensiunea unui vector declarat.',
        correctAnswer: 'Adevărat',
        explanation: 'Aceasta funcționează pentru vectori declarați direct în scopul curent.'
    },
    {
        id: 'cpp_147',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Cum inițializez un vector cu toate valorile 0?',
        code: `int v[5] = {}; // sau int v[5] = {0};`,
        options: [
            'int v[5] = {}; sau int v[5] = {0};',
            'int v[5] = 0;',
            'memset(v, 0, sizeof(v));',
            'toate de mai sus'
        ],
        correctAnswer: 'toate de mai sus',
        explanation: 'Toate metodele inițializează cu 0.'
    },
    {
        id: 'cpp_148',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Care este rolul indexării în vectori?',
        options: [
            'Permite accesul direct la orice element',
            'Sorteaza vectorul',
            'Compară elementele',
            'Șterge elemente'
        ],
        correctAnswer: 'Permite accesul direct la orice element',
        explanation: 'Indexarea permite acces O(1) la orice element.'
    },
    {
        id: 'cpp_149',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'true-false',
        question: 'Pot stoca obiecte complexe în vectori (nu doar numere).',
        correctAnswer: 'Adevărat',
        explanation: 'Se pot stoca structuri, clase, etc.'
    },
    {
        id: 'cpp_150',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Ce afișează?',
        code: `int v[] = {5, 10, 15, 20, 25};
int max_val = v[0];
for (int i = 1; i < 5; i++)
    if (v[i] > max_val) max_val = v[i];
cout << max_val;`,
        options: [
            '25',
            '5',
            '20',
            '15'
        ],
        correctAnswer: '25',
        explanation: 'Maximul din vector este 25.'
    },
    {
        id: 'cpp_151',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'true-false',
        question: 'Vectorii și array-urile sunt sinonime în C++.',
        correctAnswer: 'Adevărat',
        explanation: 'Termenii sunt folosiți în mod interschimbabil pentru array-urile statice.'
    },
    {
        id: 'cpp_152',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Cum declar un vector de string-uri (text)?',
        options: [
            'Se folosește std::string sau char arrays',
            'string v[5];',
            'char v[5][50];',
            'toate de mai sus'
        ],
        correctAnswer: 'toate de mai sus',
        explanation: 'Sunt mai multe moduri de a stoca string-uri.'
    },
    {
        id: 'cpp_153',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'true-false',
        question: 'Pot transmite un vector unei funcții.',
        correctAnswer: 'Adevărat',
        explanation: 'Se transmit prin pointer sau referință.'
    },
    {
        id: 'cpp_154',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'multiple-choice',
        question: 'Ce se întâmplă dacă încerc să accesez v[100] pentru v[10]?',
        options: [
            'Comportament nedefinit',
            'Valoare de 0',
            'Eroare de compilare',
            'Eroare la runtime cu mesaj'
        ],
        correctAnswer: 'Comportament nedefinit',
        explanation: 'Accesul în afara limitelor cauzeaza comportament nepredictibil.'
    },
    {
        id: 'cpp_155',
        language: 'C++',
        category: 'Arrays',
        difficulty: 'easy',
        type: 'true-false',
        question: 'O buclă for este cea mai bună modalitate de a itera printr-un vector.',
        correctAnswer: 'Adevărat',
        explanation: 'Buclele for sunt ideale pentru iterare secvențială.'
    },
];
