const saints = {
    jesus: {
        name: "Jesus Cristo",
        image: "image.png",
        fullName: "Jesus de Nazaré, o Cristo",
        feast: "Cristo, centro da fé cristã",
        birth: "Século I a.C. — Belém, segundo os Evangelhos",
        death: "Século I d.C. — Jerusalém",
        origin: "Belém e Nazaré, Terra Santa",
        patron: "Senhor e Salvador; centro da vida cristã",

        subtitle:
            "O Filho de Deus feito homem, verdadeiro Deus e verdadeiro homem.",

        bio:
            "Segundo a fé da Igreja Católica, Jesus Cristo é o Filho eterno de Deus que assumiu verdadeiramente a natureza humana para a nossa salvação. Concebido pelo Espírito Santo e nascido da Virgem Maria, Ele é verdadeiro Deus e verdadeiro homem.",

        story:
            "Jesus anunciou o Reino de Deus, chamou à conversão, formou discípulos, acolheu pecadores, curou enfermos e ensinou o amor a Deus e ao próximo. Em Jerusalém, entregou-se à Paixão e morreu crucificado. A Igreja professa que ao terceiro dia ressuscitou verdadeiramente dos mortos, venceu o pecado e a morte e depois ascendeu aos Céus.",

        symbols:
            "A cruz, o Cordeiro de Deus, o Sagrado Coração, o pão e o vinho, o peixe e o monograma de Cristo.",

        legacy:
            "Para a Igreja Católica, Jesus não é apenas uma grande figura do passado: Ele é o Cristo vivo, Senhor e Salvador. Sua Encarnação, Paixão, morte e Ressurreição estão no centro da esperança cristã.",

        prayer:
            "Senhor Jesus Cristo, Filho de Deus e nosso Salvador, faze que eu te conheça cada vez mais, te ame de todo o coração e te siga com fidelidade. Amém."
    },

    pedro: {
        name: "São Pedro",
        image: "sao-pedro.png",
        fullName: "Simão Pedro",
        feast: "29 de junho",
        birth: "Século I a.C. — data incerta",
        death: "c. 64–68 d.C.",
        origin: "Betsaida, Galileia",
        patron: "Pescadores e diversas comunidades",

        subtitle:
            "Apóstolo de Jesus e uma das figuras centrais da Igreja nascente.",

        bio:
            "Pedro, chamado originalmente Simão, era pescador e irmão de André. Foi um dos Doze Apóstolos e aparece nos Evangelhos entre os discípulos mais próximos de Jesus.",

        story:
            "Depois da Ressurreição, Pedro teve papel destacado entre os primeiros cristãos. A tradição cristã antiga associa Pedro à Igreja de Roma e ao martírio nessa cidade.",

        symbols:
            "Chaves, barco, rede de pesca e galo.",

        legacy:
            "É lembrado pela fé, pelo arrependimento e por sua liderança entre os primeiros discípulos. Na tradição católica, é considerado o primeiro papa.",

        prayer:
            "São Pedro, ajuda-nos a permanecer firmes na fé e a seguir Jesus com coragem. Amém."
    },

    antonio: {
        name: "Santo Antônio",
        image: "santo-antonio.png",
        fullName: "Santo Antônio de Pádua",
        feast: "13 de junho",
        birth: "1195",
        death: "13 de junho de 1231",
        origin: "Lisboa, Portugal",
        patron: "Pobres, objetos perdidos e diversas devoções populares",

        subtitle:
            "Frade franciscano, pregador e doutor da Igreja.",

        bio:
            "Santo Antônio nasceu em Lisboa e recebeu o nome de Fernando de Bulhões. Tornou-se frade franciscano e ficou conhecido pela pregação e pelo profundo conhecimento das Escrituras.",

        story:
            "Dedicou-se à pregação, ao estudo e ao auxílio dos necessitados. Viveu em diferentes regiões da Europa e passou seus últimos anos na região de Pádua, na Itália.",

        symbols:
            "Menino Jesus, livro das Escrituras, hábito franciscano e lírio.",

        legacy:
            "É lembrado pela pregação, caridade e defesa da fé.",

        prayer:
            "Santo Antônio, ensina-nos a amar a Deus, ajudar quem precisa e confiar na providência divina. Amém."
    },

    francisco: {
        name: "São Francisco de Assis",
        image: "sao-francisco.png",
        fullName: "Francisco Bernardone",
        feast: "4 de outubro",
        birth: "1181 ou 1182",
        death: "3 de outubro de 1226",
        origin: "Assis, Itália",
        patron: "Animais, meio ambiente e família franciscana",

        subtitle:
            "Exemplo de simplicidade, paz, fraternidade e cuidado com a criação.",

        bio:
            "Francisco nasceu em Assis, na Itália, e escolheu uma vida de pobreza voluntária, oração e serviço aos outros.",

        story:
            "Reuniu companheiros para viver segundo o Evangelho, dando origem à Ordem dos Frades Menores. Sua espiritualidade valoriza humildade, paz, fraternidade e proximidade com a criação.",

        symbols:
            "Cruz, hábito franciscano, animais, Crucifixo de São Damião e estigmas.",

        legacy:
            "É lembrado pela simplicidade, fraternidade, paz e amor à criação.",

        prayer:
            "São Francisco de Assis, ajuda-nos a viver com simplicidade, promover a paz e servir nossos irmãos com alegria. Amém."
    },

    paulo: {
        name: "São Paulo",
        image: "sao-paulo.png",
        fullName: "Paulo Apóstolo",
        feast: "29 de junho",
        birth: "Século I d.C. — data incerta",
        death: "c. 64–67 d.C.",
        origin: "Tarso, Cilícia",
        patron: "Missionários, teólogos e escritores",

        subtitle:
            "Apóstolo dos povos e grande missionário do cristianismo primitivo.",

        bio:
            "Paulo, também chamado Saulo, inicialmente perseguiu os cristãos, mas sua vida mudou profundamente após uma experiência com Cristo no caminho de Damasco.",

        story:
            "Tornou-se um dos principais missionários da Igreja nascente, viajando por várias regiões do mundo mediterrâneo e anunciando o Evangelho a diferentes povos.",

        symbols:
            "Espada, livro e pergaminho.",

        legacy:
            "Suas viagens missionárias e cartas tiveram enorme influência na formação das primeiras comunidades cristãs.",

        prayer:
            "São Paulo Apóstolo, dá-nos coragem para anunciar o Evangelho e um coração disposto à conversão. Amém."
    },

    rita: {
        name: "Santa Rita de Cássia",
        image: "santa-rita.png",
        fullName: "Rita Lotti",
        feast: "22 de maio",
        birth: "c. 1381",
        death: "22 de maio de 1457",
        origin: "Roccaporena, Itália",
        patron: "Causas difíceis e situações consideradas impossíveis",

        subtitle:
            "Religiosa agostiniana conhecida pela perseverança, oração e confiança em Deus.",

        bio:
            "Rita viveu o matrimônio e enfrentou dificuldades familiares. Depois da morte do marido e dos filhos, entrou no mosteiro das agostinianas de Cássia.",

        story:
            "Sua tradição espiritual destaca perseverança, reconciliação, perdão e profunda devoção a Cristo.",

        symbols:
            "Crucifixo, hábito religioso, espinho e rosas.",

        legacy:
            "É especialmente lembrada por pessoas que enfrentam situações difíceis.",

        prayer:
            "Santa Rita de Cássia, intercede por nós para que tenhamos paciência nas dificuldades, coragem para perdoar e esperança. Amém."
    }
};


/* =====================================================
   ELEMENTOS PRINCIPAIS
===================================================== */

const homePage = document.getElementById("homePage");
const saintPage = document.getElementById("saintPage");
const biblePage = document.getElementById("biblePage");

const sidebar = document.getElementById("sidebar");

const saintButtons =
    document.querySelectorAll(".saint-btn");


/* =====================================================
   MOSTRAR / ESCONDER PÁGINAS
===================================================== */

function hidePages() {

    homePage.classList.add("hidden");

    saintPage.classList.add("hidden");

    biblePage.classList.add("hidden");
}


function closeMobileMenu() {

    sidebar.classList.remove("open");
}


function goHome() {

    hidePages();

    homePage.classList.remove("hidden");

    saintButtons.forEach(button => {
        button.classList.remove("active");
    });

    closeMobileMenu();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =====================================================
   ABRIR JESUS / SANTO
===================================================== */

function showSaint(id) {

    const saint = saints[id];

    if (!saint) {
        return;
    }

    hidePages();

    saintPage.classList.remove("hidden");

    saintPage.dataset.saint = id;


    document.getElementById("saintImage").src =
        saint.image;

    document.getElementById("saintImage").alt =
        saint.name;


    document.getElementById("saintName").textContent =
        saint.name;

    document.getElementById("saintFeast").textContent =
        saint.feast;

    document.getElementById("saintSubtitle").textContent =
        saint.subtitle;


    document.getElementById("fullName").textContent =
        saint.fullName;

    document.getElementById("birth").textContent =
        saint.birth;

    document.getElementById("death").textContent =
        saint.death;

    document.getElementById("origin").textContent =
        saint.origin;

    document.getElementById("feastInfo").textContent =
        saint.feast;

    document.getElementById("patron").textContent =
        saint.patron;


    document.getElementById("bio").textContent =
        saint.bio;

    document.getElementById("story").textContent =
        saint.story;

    document.getElementById("symbols").textContent =
        saint.symbols;

    document.getElementById("legacy").textContent =
        saint.legacy;

    document.getElementById("prayer").textContent =
        saint.prayer;


    saintButtons.forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.saint === id
        );

    });


    closeMobileMenu();


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* CLIQUES DOS SANTOS */

saintButtons.forEach(button => {

    button.addEventListener("click", () => {

        showSaint(
            button.dataset.saint
        );

    });

});


/* =====================================================
   BÍBLIA CATÓLICA
===================================================== */


/*
    O arquivo abaixo contém a Bíblia Católica completa
    em JSON.

    O repositório informa que biblia.json contém todos
    os livros da edição. 
*/

const BIBLE_URL =
    "https://raw.githubusercontent.com/Dancrf/biblia-db/main/biblia.json";


let bibleData = null;

let bibleLoadingPromise = null;


/* =====================================================
   LIVROS DA BÍBLIA
===================================================== */

const bibleBooks = [

    /* PENTATEUCO */

    {
        group: "Pentateuco",
        name: "Gênesis",
        chapters: 50
    },

    {
        group: "Pentateuco",
        name: "Êxodo",
        chapters: 40
    },

    {
        group: "Pentateuco",
        name: "Levítico",
        chapters: 27
    },

    {
        group: "Pentateuco",
        name: "Números",
        chapters: 36
    },

    {
        group: "Pentateuco",
        name: "Deuteronômio",
        chapters: 34
    },


    /* HISTÓRICOS */

    {
        group: "Livros Históricos",
        name: "Josué",
        chapters: 24
    },

    {
        group: "Livros Históricos",
        name: "Juízes",
        chapters: 21
    },

    {
        group: "Livros Históricos",
        name: "Rute",
        chapters: 4
    },

    {
        group: "Livros Históricos",
        name: "1 Samuel",
        chapters: 31
    },

    {
        group: "Livros Históricos",
        name: "2 Samuel",
        chapters: 24
    },

    {
        group: "Livros Históricos",
        name: "1 Reis",
        chapters: 22
    },

    {
        group: "Livros Históricos",
        name: "2 Reis",
        chapters: 25
    },

    {
        group: "Livros Históricos",
        name: "1 Crônicas",
        chapters: 29
    },

    {
        group: "Livros Históricos",
        name: "2 Crônicas",
        chapters: 36
    },

    {
        group: "Livros Históricos",
        name: "Esdras",
        chapters: 10
    },

    {
        group: "Livros Históricos",
        name: "Neemias",
        chapters: 13
    },

    {
        group: "Livros Históricos",
        name: "Tobias",
        chapters: 14
    },

    {
        group: "Livros Históricos",
        name: "Judite",
        chapters: 16
    },

    {
        group: "Livros Históricos",
        name: "Ester",
        chapters: 16
    },

    {
        group: "Livros Históricos",
        name: "1 Macabeus",
        chapters: 16
    },

    {
        group: "Livros Históricos",
        name: "2 Macabeus",
        chapters: 15
    },


    /* SAPIENCIAIS */

    {
        group: "Sapienciais e Poéticos",
        name: "Jó",
        chapters: 42
    },

    {
        group: "Sapienciais e Poéticos",
        name: "Salmos",
        chapters: 150
    },

    {
        group: "Sapienciais e Poéticos",
        name: "Provérbios",
        chapters: 31
    },

    {
        group: "Sapienciais e Poéticos",
        name: "Eclesiastes",
        chapters: 12
    },

    {
        group: "Sapienciais e Poéticos",
        name: "Cântico dos Cânticos",
        chapters: 8
    },

    {
        group: "Sapienciais e Poéticos",
        name: "Sabedoria",
        chapters: 19
    },

    {
        group: "Sapienciais e Poéticos",
        name: "Eclesiástico",
        chapters: 51
    },


    /* PROFETAS */

    {
        group: "Profetas",
        name: "Isaías",
        chapters: 66
    },

    {
        group: "Profetas",
        name: "Jeremias",
        chapters: 52
    },

    {
        group: "Profetas",
        name: "Lamentações",
        chapters: 5
    },

    {
        group: "Profetas",
        name: "Baruc",
        chapters: 6
    },

    {
        group: "Profetas",
        name: "Ezequiel",
        chapters: 48
    },

    {
        group: "Profetas",
        name: "Daniel",
        chapters: 14
    },

    {
        group: "Profetas",
        name: "Oseias",
        chapters: 14
    },

    {
        group: "Profetas",
        name: "Joel",
        chapters: 3
    },

    {
        group: "Profetas",
        name: "Amós",
        chapters: 9
    },

    {
        group: "Profetas",
        name: "Obadias",
        chapters: 1
    },

    {
        group: "Profetas",
        name: "Jonas",
        chapters: 4
    },

    {
        group: "Profetas",
        name: "Miqueias",
        chapters: 7
    },

    {
        group: "Profetas",
        name: "Naum",
        chapters: 3
    },

    {
        group: "Profetas",
        name: "Habacuque",
        chapters: 3
    },

    {
        group: "Profetas",
        name: "Sofonias",
        chapters: 3
    },

    {
        group: "Profetas",
        name: "Ageu",
        chapters: 2
    },

    {
        group: "Profetas",
        name: "Zacarias",
        chapters: 14
    },

    {
        group: "Profetas",
        name: "Malaquias",
        chapters: 4
    },


    /* EVANGELHOS E ATOS */

    {
        group: "Evangelhos e Atos",
        name: "Mateus",
        chapters: 28
    },

    {
        group: "Evangelhos e Atos",
        name: "Marcos",
        chapters: 16
    },

    {
        group: "Evangelhos e Atos",
        name: "Lucas",
        chapters: 24
    },

    {
        group: "Evangelhos e Atos",
        name: "João",
        chapters: 21
    },

    {
        group: "Evangelhos e Atos",
        name: "Atos dos Apóstolos",
        chapters: 28
    },


    /* CARTAS DE SÃO PAULO */

    {
        group: "Cartas de São Paulo",
        name: "Romanos",
        chapters: 16
    },

    {
        group: "Cartas de São Paulo",
        name: "1 Coríntios",
        chapters: 16
    },

    {
        group: "Cartas de São Paulo",
        name: "2 Coríntios",
        chapters: 13
    },

    {
        group: "Cartas de São Paulo",
        name: "Gálatas",
        chapters: 6
    },

    {
        group: "Cartas de São Paulo",
        name: "Efésios",
        chapters: 6
    },

    {
        group: "Cartas de São Paulo",
        name: "Filipenses",
        chapters: 4
    },

    {
        group: "Cartas de São Paulo",
        name: "Colossenses",
        chapters: 4
    },

    {
        group: "Cartas de São Paulo",
        name: "1 Tessalonicenses",
        chapters: 5
    },

    {
        group: "Cartas de São Paulo",
        name: "2 Tessalonicenses",
        chapters: 3
    },

    {
        group: "Cartas de São Paulo",
        name: "1 Timóteo",
        chapters: 6
    },

    {
        group: "Cartas de São Paulo",
        name: "2 Timóteo",
        chapters: 4
    },

    {
        group: "Cartas de São Paulo",
        name: "Tito",
        chapters: 3
    },

    {
        group: "Cartas de São Paulo",
        name: "Filemom",
        chapters: 1
    },

    {
        group: "Cartas de São Paulo",
        name: "Hebreus",
        chapters: 13
    },


    /* CARTAS CATÓLICAS */

    {
        group: "Cartas Católicas",
        name: "Tiago",
        chapters: 5
    },

    {
        group: "Cartas Católicas",
        name: "1 Pedro",
        chapters: 5
    },

    {
        group: "Cartas Católicas",
        name: "2 Pedro",
        chapters: 3
    },

    {
        group: "Cartas Católicas",
        name: "1 João",
        chapters: 5
    },

    {
        group: "Cartas Católicas",
        name: "2 João",
        chapters: 1
    },

    {
        group: "Cartas Católicas",
        name: "3 João",
        chapters: 1
    },

    {
        group: "Cartas Católicas",
        name: "Judas",
        chapters: 1
    },


    /* APOCALIPSE */

    {
        group: "Apocalipse",
        name: "Apocalipse",
        chapters: 22
    }

];


/* =====================================================
   ELEMENTOS DA BÍBLIA
===================================================== */

const bookSelect =
    document.getElementById("bookSelect");

const chapterSelect =
    document.getElementById("chapterSelect");

const verseInput =
    document.getElementById("verseInput");

const versesContainer =
    document.getElementById("verses");


/* =====================================================
   CRIAR MENU DOS LIVROS
===================================================== */

function createBookOptions() {

    bookSelect.innerHTML = "";

    const groups = [
        ...new Set(
            bibleBooks.map(
                book => book.group
            )
        )
    ];


    groups.forEach(groupName => {

        const optgroup =
            document.createElement("optgroup");

        optgroup.label =
            groupName;


        bibleBooks
            .filter(
                book =>
                    book.group === groupName
            )
            .forEach(book => {

                const option =
                    document.createElement(
                        "option"
                    );

                const index =
                    bibleBooks.indexOf(book);

                option.value =
                    index;

                option.textContent =
                    book.name;

                optgroup.appendChild(
                    option
                );

            });


        bookSelect.appendChild(
            optgroup
        );

    });

}


/* =====================================================
   CRIAR CAPÍTULOS
===================================================== */

function createChapterOptions() {

    chapterSelect.innerHTML = "";

    const bookIndex =
        Number(bookSelect.value);

    const book =
        bibleBooks[bookIndex];


    if (!book) {
        return;
    }


    for (
        let chapter = 1;
        chapter <= book.chapters;
        chapter++
    ) {

        const option =
            document.createElement(
                "option"
            );

        option.value =
            chapter;

        option.textContent =
            chapter;

        chapterSelect.appendChild(
            option
        );

    }

}


/* =====================================================
   CARREGAR BÍBLIA
===================================================== */

async function loadBible() {

    if (bibleData) {

        return bibleData;
    }


    if (bibleLoadingPromise) {

        return bibleLoadingPromise;
    }


    document.getElementById(
        "loadingState"
    ).textContent =
        "Carregando Bíblia...";


    bibleLoadingPromise =
        fetch(BIBLE_URL)

        .then(response => {

            if (!response.ok) {

                throw new Error(
                    "Não foi possível baixar o texto bíblico."
                );
            }

            return response.json();
        })

        .then(data => {

            bibleData = data;

            document.getElementById(
                "loadingState"
            ).textContent =
                "Bíblia carregada";

            return data;
        })

        .catch(error => {

            bibleLoadingPromise = null;

            document.getElementById(
                "loadingState"
            ).textContent =
                "Erro ao carregar";

            throw error;
        });


    return bibleLoadingPromise;
}


/* =====================================================
   IDENTIFICAR ESTRUTURA DO JSON
===================================================== */

function getBooksFromData(data) {

    if (Array.isArray(data)) {
        return data;
    }

    if (
        data &&
        Array.isArray(data.books)
    ) {
        return data.books;
    }

    if (
        data &&
        Array.isArray(data.livros)
    ) {
        return data.livros;
    }

    return [];
}


/* =====================================================
   EXTRAIR CAPÍTULO
===================================================== */

function getChapterFromBook(
    book,
    chapterNumber
) {

    if (!book) {
        return null;
    }


    const chapters =
        book.chapters ||
        book.capitulos ||
        book.capítulos;


    if (!chapters) {
        return null;
    }


    if (Array.isArray(chapters)) {

        return chapters[
            chapterNumber - 1
        ];
    }


    return (
        chapters[chapterNumber] ||
        chapters[String(chapterNumber)]
    );
}


/* =====================================================
   EXTRAIR VERSÍCULOS
===================================================== */

function getVersesFromChapter(
    chapter
) {

    if (!chapter) {
        return [];
    }


    /*
        Caso mais simples:

        [
            "versículo 1",
            "versículo 2"
        ]
    */

    if (Array.isArray(chapter)) {

        return chapter.map(
            (item, index) => {

                if (
                    typeof item === "string"
                ) {

                    return {
                        number: index + 1,
                        text: item
                    };
                }


                if (
                    typeof item === "object"
                ) {

                    return {

                        number:
                            Number(
                                item.numero ||
                                item.number ||
                                item.verse ||
                                item.versiculo ||
                                item.versículo ||
                                index + 1
                            ),

                        text:
                            item.texto ||
                            item.text ||
                            item.verseText ||
                            ""
                    };

                }


                return {
                    number:
                        index + 1,

                    text:
                        String(item)
                };

            });

    }


    /*
        Se o capítulo possuir:

        {
            verses: [...]
        }
    */

    const verses =
        chapter.verses ||
        chapter.versiculos ||
        chapter.versículos;


    if (Array.isArray(verses)) {

        return getVersesFromChapter(
            verses
        );
    }


    /*
        Caso venha como objeto:

        {
            "1": "texto",
            "2": "texto"
        }
    */

    if (
        typeof chapter === "object"
    ) {

        return Object.entries(chapter)

            .filter(
                ([key]) =>
                    !isNaN(Number(key))
            )

            .map(
                ([number, text]) => ({

                    number:
                        Number(number),

                    text:
                        typeof text ===
                        "string"
                            ? text
                            :
                            (
                                text.texto ||
                                text.text ||
                                ""
                            )

                })
            );

    }


    return [];
}


/* =====================================================
   MOSTRAR VERSÍCULOS
===================================================== */

function renderVerses(
    verses,
    selectedVerse
) {

    versesContainer.innerHTML = "";


    if (!verses.length) {

        versesContainer.innerHTML = `
            <div class="reader-error">

                Não encontrei os versículos
                deste capítulo.

            </div>
        `;

        return;
    }


    verses.forEach(verse => {

        const line =
            document.createElement("div");

        line.className =
            "verse";


        if (
            verse.number ===
            selectedVerse
        ) {

            line.classList.add(
                "selected"
            );

        }


        line.id =
            `verse-${verse.number}`;


        const number =
            document.createElement(
                "span"
            );

        number.className =
            "verse-number";

        number.textContent =
            verse.number;


        const text =
            document.createElement(
                "span"
            );

        text.textContent =
            verse.text;


        line.appendChild(number);

        line.appendChild(text);

        versesContainer.appendChild(
            line
        );

    });


    const selected =
        document.getElementById(
            `verse-${selectedVerse}`
        );


    if (selected) {

        setTimeout(() => {

            selected.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 100);

    }

}


/* =====================================================
   LER CAPÍTULO
===================================================== */

async function readBible() {

    const bookIndex =
        Number(bookSelect.value);

    const chapterNumber =
        Number(chapterSelect.value);

    const selectedVerse =
        Math.max(
            1,
            Number(verseInput.value)
            || 1
        );


    const bookMeta =
        bibleBooks[bookIndex];


    if (!bookMeta) {
        return;
    }


    document.getElementById(
        "reference"
    ).textContent =
        `${bookMeta.name} ${chapterNumber}, ${selectedVerse} — capítulo completo abaixo.`;


    document.getElementById(
        "readerTitle"
    ).textContent =
        `${bookMeta.name} — capítulo ${chapterNumber}`;


    versesContainer.innerHTML = `
        <p class="loading">
            Carregando capítulo...
        </p>
    `;


    try {

        const data =
            await loadBible();


        const books =
            getBooksFromData(data);


        const bibleBook =
            books[bookIndex];


        if (!bibleBook) {

            throw new Error(
                "Livro não encontrado no banco bíblico."
            );

        }


        const chapter =
            getChapterFromBook(
                bibleBook,
                chapterNumber
            );


        if (!chapter) {

            throw new Error(
                "Capítulo não encontrado."
            );

        }


        const verses =
            getVersesFromChapter(
                chapter
            );


        renderVerses(
            verses,
            selectedVerse
        );

    }

    catch (error) {

        console.error(error);


        versesContainer.innerHTML = `

            <div class="reader-error">

                <strong>
                    Não consegui carregar
                    a Bíblia.
                </strong>

                <br><br>

                ${error.message}

                <br><br>

                Verifique sua conexão com
                a internet e tente novamente.

            </div>

        `;

    }

}


/* =====================================================
   ABRIR PÁGINA DA BÍBLIA
===================================================== */

function showBible() {

    hidePages();

    biblePage.classList.remove(
        "hidden"
    );


    saintButtons.forEach(button => {

        button.classList.remove(
            "active"
        );

    });


    closeMobileMenu();


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    readBible();
}


/* =====================================================
   EVENTOS DA BÍBLIA
===================================================== */

bookSelect.addEventListener(
    "change",
    () => {

        createChapterOptions();

        verseInput.value = 1;

        readBible();

    }
);


chapterSelect.addEventListener(
    "change",
    () => {

        verseInput.value = 1;

        readBible();

    }
);


document
    .getElementById("readBible")
    .addEventListener(
        "click",
        readBible
    );


document
    .getElementById("bibleButton")
    .addEventListener(
        "click",
        showBible
    );


/* =====================================================
   BOTÕES DE NAVEGAÇÃO
===================================================== */

document
    .getElementById("homeButton")
    .addEventListener(
        "click",
        goHome
    );


document
    .getElementById("brandHome")
    .addEventListener(
        "click",
        event => {

            event.preventDefault();

            goHome();

        }
    );


document
    .getElementById("mobileMenu")
    .addEventListener(
        "click",
        () => {

            sidebar.classList.toggle(
                "open"
            );

        }
    );


/* =====================================================
   CONFIGURAÇÃO INICIAL
===================================================== */

createBookOptions();


/*
    Mateus é o livro de índice 46
    na ordem católica usada acima.
*/

bookSelect.value = 46;

createChapterOptions();

verseInput.value = 1;