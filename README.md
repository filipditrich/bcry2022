# BCRY 2022 Domácí úkol
Řešitel: [Ditrich Filip](mailto:filip.ditrich@plus4u.net)

## Popis úkolu

Řešení obsahuje několik úloh s rozdílnými (maximálními) bodovými ohodnoceními. Suma bodů ze všech úloh je **45 bodů**.
Studenti si mohou vybrat libovolnou podmnožinu úloh a řešení těchto úloh zaslat. Celkově je ovšem počet bodů omezen **maximálním počtem bodů z úkolu**, což je

- Maximální bodový zisk z úkolu 35 bodů

Součet bodů z úloh může být vyšší než výše zmíněné maximum . V takovém případě (zisku více než maxima bodů) je zisk z
daného úkolu nastaven na maximální hodnotu. Formát odevzdání je jeden **zip soubor**, nazvaný dle předmětu a příjmení a
jména studenta, obsahující adresáře s čísly a názvy odevzdávaných úloh. Úlohy jsou různého typu - problémově orientované
či programovací. U jednotlivých úloh je očekáváno následující:

1. Problémově orientované úlohy ... typickým odevzdáním je sken dokumentu (formát PDF), na kterém je ukázáno řešení či
   export elektronicky sepsaného řešení (například Libreoffice, Latex či Word dokumentu)
2. Programovací úlohy ... očekávanými složkami jsou skript(y) řešící daný problém, popis spuštění skriptů (readme.txt) a
   případné další potřebné (datové) soubory. Pracovním jazykem je JavaScript a prostředím pouze obyčejná konzole (tudíž
   nikoliv prohlížeč). Pozor, že skript musí být snadno spustitelný z běžné konzole (není nutné odevzdávat celý projekt
   daného prostředí). Pozor: Ozkoušejte svá řešení s ohledem na návod zasílaný v souboru readme.txt. Pokud skript
   nepůjde spustit a otestovat nebude hodnocen.

Příklad: Pokud pan Josef Novák bude ve svém odevzdání zasílat řešení úlohy 1 (problémově orientované) a úlohy 4 (
programovací). Odevzdávaný soubor by tedy měl vypadat následovně:
```angular2html
crypto2021_novak_jan.zip
     ukol1
         novak_jan_ukol1.pdf # sken dokumentu s řešením či export libreoffice řešení 
     ukol4
         novak_jan_ukol4.js # javascipt ukazujici realizaci ulohy
         ukazka.json # pripadne datove soubory
         readme.txt # soubor popisujici potrebne kroky ke spusteni - tedy potrebne
         # knihovny (uvazujeme jen standardni) a sekvenci kroku ke spusteni
```

Pokud je potřeba k řešení zaslat i poznámky, založte prosím v hlavním adresáři archivu další soubor readme.txt.

## Instrukce ke spuštění programovacích úloh
Pro spuštění programovacích úloh je nutné použít `npm` nebo jiný package manager.
Úlohy je možné spustit z kořenové složky zavoláním příkazu `npm run uloha-X`, kde X je číslo úlohy. Spustitelné programovací úlohy jsou: [Úloha 6](#-úloha-6), [Úloha 7](#-úloha-7), [Úloha 8](#-úloha-8), [Úloha 9](#-úloha-9), [Úloha 10](#-úloha-10), [Úloha 11](#-úloha-11). 

## Zadání úloh

### ✅️ [Úloha 1](./uloha-01)

****[3 body]**** Systém po vás požaduje, aby vaše heslo bylo dostatečně bezpečné. Proto chce, aby splňovalo následující
podmínky

1. Heslo bude obsahovat přesně 6 znaků.
2. Heslo musí obsahovat minimálně jeden znak z každé třídy:
    1. znaky anglické abecedy,
    2. čísla,
    3. speciální (ne-alfanumerické) znalky z množiny `('-','_','+','/','!','?')`.
3. Ani čísla ani speciální znaky nesmí být na první ani poslední z pozic.
4. Heslo obsahuje minimálně 2 čísla.

Určete kolik je pro takové heslo kombinací.

### ✅ [Úloha 2](./uloha-02)

**[2 body]** Rozhodli jsme se místo klasické binární abecedy používat abecedu ternární. V této abecedě budeme kódovat
čísla opět v posloupnostech znaků délky 8 (tj. obdobně jako u binárních kódů do bajtů). Příkladem tedy může být
například číslo

```json
10022120
```

Předpokládejme, že chceme kódovat pouze kladná čísla. Kolik čísel je možné v této nové abecedě kódovat?

### ✅ [Úloha 3](./uloha-03)

**[3 body]** Provedeme 3 nezávislé pokusy o odchycení textu. Pravděpodobnost odchycení komunikace je `0.4`. S jakou
pravděpodobností se nám podaří prolomit šifru komunikace, pokud víme, že pravděpodobnost jejího prolomení je při získání
1 textu `0.2`, při získání 2 textů `0.5` a při získání všech třech textů `0.8`.

### ✅ [Úloha 4](./uloha-04)

**[3 body]** Jednoduchý spam filter umí rozlišovat 3 typy spamů: podvodné reklamy (případ 1), phishing (případ 2) a
ostatní (případ 3). Ze sledování provozu je jasné, že pravděpodobnosti těchto případů jsou

1. Případ 1: `0.3`
2. Případ 2: `0.6`
3. Případ 3: `0.1`

Dále víme, že pravděpodobnost, že byl email označen jako spam jsou pro jednotlivé případy postupně

1. Případ 1: `0.9`
2. Případ 2: `0.2`
3. Případ 3: `0.9`

Pro zvolený email víme, že byl označen jako spam. Jaká je pravděpodobnost, že se jedná o případ 1? O případ 2? O případ
3?

### ✅ [Úloha 5](./uloha-05)

**[3 body]** Máme dvě klasické kostky, každou o 6 stranách. Navrhněte binární Huffmanův kód kódující součet dvou
současných hodů. Vypočtěte pro tento kód kompresní faktor.

### ✅ [Úloha 6](./uloha-06)

**[2 body]** Vypište hodnoty jednotlivých `a=123` a `b=321` při volaní rekurzivní funkce pro největšího společného dělitele `gcd(a,b)`. Jaké jsou výsledné hodnoty Bezoutových koeficientů?

### ✅ [Úloha 7](./uloha-07)

**[3 body]** Máme dvě čísla `a` a `b`, pro které platí `gcd(a,b) = d`. Uvažujeme prvočísla `k`, `l` taková, že `gcd(ak,bl) = d`.
Platí toto pro obecná prvočísla či musí být splněna nějaká podmínka? Pokud ano, tak jaká?

### ✅ [Úloha 8](./uloha-08)

**[5 bodů]** Uvažujte text
`PTGBWRMRDHBLYOTAVUUPNAGUTZMXPVNVSHMUMSHMVKOHGRTKJMEQIHERVMPGRMXHGQKXFIGWMYTCPKYDAWCUTFBNLYNBNLKBNOUYBZSHMVWTAARWXFLUITUHAQYUHGMJMHEPGCBAOLVNALKKBANUYFNBOVGGPKVKLEOAA`.
Pokuste se určit velikost klíče pomocí Kasiskiho textu.

### ✅ [Úloha 9](./uloha-09)

**[7 bodů]** Proveďte substituci slova `“ahoj”` pomocí Rijndaelova substitučního boxu. Pro kódování písmen použijte osmibitové
řetězce, například první znak `a` kódujte číslem 97 neboli binárně `01100001` a kódy následujících znaků budou vždy o 1
více, neboli kód znaku `b` bude 98 reprezentovaný `01100010`.

### ✅ [Úloha 10](./uloha-10)

**[9 bodů]** Naprogramujte jednoduchou RSA šifru, ve které jednotlivé kroky udělejte jednodušeji, například výběr veřejného
klíče proveďte hladově (výběr nesoudělných a výběr klíče mezi) a inverzi a tím stanovení klíče proveďte pomocí Eulerovy
věty. Ověřte si funkčnost kódování a dekódování pomocí jednoduchého příkladu.

### ✅ [Úloha 11](./uloha-11)

**[5 body]** Uvažujte Hillovu šifru, kdy slova rozdělujte na dvojice znaků. Zvolte nějakou vhodnou matici pro klíč a
proveďte šifrování slova `"unbelievable"`. Poté ověřte dešifrováním, že došlo ke správnému zašifrování.
