const sections = [
    {
        title: "Część I",
        subtitle: "Sądzę, że osobiście wnoszę do grupy...",
        points: 10,
        questions: ['Wydaje mi się, że szybko dostrzegam i umiem wykorzystać nowe możliwości', 'Mogę dobrze pracować z różnymi ludźmi', '"Produkowanie" pomysłów to moja naturalna zdolność', 'Moja siła tkwi w tym, że potrafię z ludzi "wyciągnąć" to, co mają w sobie najlepszego, aby przyczynili się do osiągnięcia celów i zadań grupowych', 'Moja główna umiejętność polega na doprowadzaniu do końca i wiąże się z efektywnością', 'Jestem w stanie przez jakiś czas zaakceptować niepopularność mojej osoby, jeśli prowadzi do wartościowych wyników', 'Zwykle wyczuwam, co jest realistyczne i prawdopodobne, jeśli chodzi o osiągnięcie sukcesu', 'Zwykle mogę zaproponować jakieś alternatywne wyjście bez uprzedzeń i niechęci'],

    },
    {
        title: "Część II",
        subtitle: "Jeśli mam jakieś niedociągnięcia w pracy grupowej to dlatego, że...",
        points: 10,
        questions: ['Nie mogę się uspokoić, dopóki narada nie jest uporządkowana, kontrolowana i ogólnie dobrze prowadzona', 'Mam skłonność do bycia wspaniałomyślnym dla tych, których przekonujące pomysły nie zostały odpowiednio przemyślane', 'Mam skłonność do gadulstwa, gdy grupa rozpracowuje nowe pomysły', 'Mój chłodny ogląd spraw utrudnia mi przyłączenie się do gotowości i entuzjazmu kolegów', 'Czasami jestem spostrzegany jako wywierający nadmierny nacisk i autorytatywny wpływ, jeśli coś musi zostać rzeczywiście zrobione', 'Trudno mi kierować „na pierwszej linii”, gdyż czuję się zbyt odpowiedzialny za atmosferę grupową', 'Mam skłonność do rozmyślania o tym, co w danej chwili wpada mi do głowy, przez co tracę kontakt z tym, co się dzieje', 'Koledzy widzą mnie jako niepotrzebnie przejmującego się szczegółami i możliwością, że sprawy mogą się źle ułożyć'],
    },
    {
        title: "Część III",
        subtitle: "Gdy jestem wciągnięty razem z innymi w przygotowanie projektu...",
        points: 10,
        questions: ['Mam skłonność do wywierania wpływu na ludzi, lecz bez wywierania na nich presji', 'Moja czujność pozwala zapobiegać wielu pomyłkom i błędom', 'Jestem gotów kłaść nacisk na działanie, aby upewnić się, że narada nie jest stratą czasu lub, że prowadzi do utracenia z widoku głównego celu', 'Zwykle można na mnie polegać, że wymyślę coś oryginalnego', 'Zawsze jestem gotów uczynić dobrą sugestię przedmiotem zainteresowania całej grupy', 'Zawsze poszukuję ostatnich nowinek, nowych odkryć i wyników badań na określony temat', 'Mam przekonanie, że moja umiejętność wydawania sądu może pomóc w podjęciu odpowiednich decyzji', 'Moją specjalnością jest zorganizowanie najbardziej znaczącej części pracyMoją specjalnością jest zorganizowanie najbardziej znaczącej części pracy'],
    },
    {
        title: "Część IV",
        subtitle: "Moją charakterystyczną cechą w pracy grupowej jest...",
        points: 10,
        questions: ['Rzeczywiście interesuję się bliższym poznaniem moich kolegów', 'Nie mam oporów przed przeciwstawianiem się zdaniu większości', 'Zwykle potrafię przyjąć taką linię argumentacji, aby obalić błędny punkt widzenia', 'Sądzę, że mam szczególny talent do wprowadzania pomysłów w życie, gdy plan ma być zastosowany', 'Mam skłonność do unikania tego, co oczywiste i do zaskakiwania czymś niespodziewanym', 'Doprowadzam to, czego się podejmę do perfekcji', 'Jestem gotów do nawiązywania i wykorzystywania kontaktów poza grupowych, jeśli jest to potrzebne', 'Nawet jeśli interesuje mnie wiele aspektów sprawy, nie mam problemów z podjęciem decyzji co do wyboru rozwiązania'],
    },
    {
        title: "Część V",
        subtitle: "Czerpię satysfakcję z pracy, gdyż...",
        points: 10,
        questions: ['Cieszy mnie analizowanie sytuacji i rozważanie możliwości wyboru', 'Interesuje mnie znalezienie praktycznych rozwiązań problemów', 'Lubię mieć przekonanie, że sprzyjam kształtowaniu dobrych kontaktów międzyludzkich w pracy', 'Lubię mieć duży wpływ na decyzje', 'Cieszę się z kontaktów z ludźmi, którzy mają coś nowego do zaoferowania', 'Jestem w stanie doprowadzić do zgody w ważnych dla pracy sprawach', 'Wczuwam się w moją część zadania, jeśli pragnę poświęcić zadaniu całą swoją uwagę', 'Lubię znaleźć taki obszar, który pobudza moja wyobraźnię'],
    },
    {
        title: "Część VI",
        subtitle: "Jeśli nagle otrzymuję trudne zadanie do wykonania w ograniczonym czasie i wobec nieznanych mi osób...",
        points: 10,
        questions: ['Mam ochotę zaszyć się w kącie, aby wymyślić sposób na wyjście z impasu', 'Byłbym gotów do współpracy z osobą, która wykazała najbardziej pozytywne nastawienie', 'Znalazłbym sposób na zmniejszenie skali zadania prze ustalenie, co mogłyby zrobić poszczególne jednostk', 'Moje naturalne wyczucie spraw pilnych pozwoli na postępowanie zgodnie z planem', 'Z pewnością zachowam spokój i zdolność do trzeźwego osądu', 'Mimo nacisków zachowam stałość celu', 'Byłbym przygotowany do przejęcia konstruktywnego kierownictwa, jeśli stwierdziłbym, że grupa nie robi postępu', 'Zainicjowałbym dyskusję w celu stymulowania nowych pomysłów, rozwiązań'],
    },
    {
        title: "Część VII",
        subtitle: "W odniesieniu do problemów, za które jestem w grupie odpowiedzialny..",
        points: 10,
        questions: ['Mam skłonność do ujawniania niezadowolenia wobec tych, którzy moim zdaniem przeszkadzają w osiąganiu postępów', 'Inni mogą mnie krytykować za to, że jestem analityczny i niedostatecznie opieram się na intuicji', 'Moje pragnienie, aby praca została starannie wykonana, może wstrzymywać pójście do przodu', 'Mam skłonność do nudzenia się i oczekuję, że inni będą mnie stymulować i „zapalać”', 'Trudno mi rozpocząć, jeśli cele nie są dla mnie jasne', 'Czasami nie jestem tak efektywny, jak bym chciał, jeśli chodzi o wyjaśnienie złożonych problemów, jakie przede mną stoją', 'Mam świadomość, że wymagam od innych rzeczy, których sam nie mogę zrobić', 'Waham się, gdy należałoby przeforsować mój punkt widzenia, gdy mam do czynienia z jawną opozycją'],
    }
];
export default sections;