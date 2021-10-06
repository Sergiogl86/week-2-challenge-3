// let EndTime = false;
let totalTime;
let respuesta;
let PosLetra;
let Enjuego = true;

// TEMA 4. PROYECTO Pasapalabra Game!

const Pasapalabra = {
  Jugador: {
    Nombre: "",
    Palabras_Ok: 0,
    Palabras_KO: 0,
  },
  Rosco: [
    {
      letter: "a",
      answer: "abducir",
      status: 0,
      question:
        "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
    },

    {
      letter: "b",
      answer: "bingo",
      status: 0,
      question:
        "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
    },

    {
      letter: "c",
      answer: "churumbel",
      status: 0,
      question: "CON LA C. Niño, crío, bebé",
    },

    {
      letter: "d",
      answer: "diarrea",
      status: 0,
      question:
        "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
    },

    {
      letter: "e",
      answer: "ectoplasma",
      status: 0,
      question:
        "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
    },

    {
      letter: "f",
      answer: "facil",
      status: 0,
      question:
        "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
    },

    {
      letter: "g",
      answer: "galaxia",
      status: 0,
      question:
        "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
    },

    {
      letter: "h",
      answer: "harakiri",
      status: 0,
      question: "CON LA H. Suicidio ritual japonés por desentrañamiento",
    },

    {
      letter: "i",
      answer: "iglesia",
      status: 0,
      question: "CON LA I. Templo cristiano",
    },

    {
      letter: "j",
      answer: "jabali",
      status: 0,
      question:
        "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
    },

    {
      letter: "l",
      answer: "licantropo",
      status: 0,
      question: "CON LA L. Hombre lobo",
    },

    {
      letter: "m",
      answer: "misantropo",
      status: 0,
      question:
        "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
    },

    {
      letter: "n",
      answer: "necedad",
      status: 0,
      question: "CON LA N. Demostración de poca inteligencia",
    },

    {
      letter: "ñ",
      answer: "señal",
      status: 0,
      question:
        "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
    },

    {
      letter: "o",
      answer: "orco",
      status: 0,
      question:
        "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
    },

    {
      letter: "p",
      answer: "protoss",
      status: 0,
      question:
        "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
    },

    {
      letter: "q",
      answer: "queso",
      status: 0,
      question:
        "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
    },

    { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor" },

    {
      letter: "s",
      answer: "stackoverflow",
      status: 0,
      question:
        "CON LA S. Comunidad salvadora de todo desarrollador informático",
    },

    {
      letter: "t",
      answer: "terminator",
      status: 0,
      question:
        "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
    },

    {
      letter: "u",
      answer: "unamuno",
      status: 0,
      question:
        "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
    },

    {
      letter: "v",
      answer: "vikingos",
      status: 0,
      question:
        "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
    },

    {
      letter: "x",
      answer: "botox",
      status: 0,
      question:
        "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
    },

    {
      letter: "y",
      answer: "peyote",
      status: 0,
      question:
        "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
    },

    {
      letter: "z",
      answer: "zen",
      status: 0,
      question:
        "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
    },
  ],
  Buffer_Rosco: [
    {
      letter: "a",
      answer: "abducir",
      status: 0,
      question:
        "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien.",
    },
    {
      letter: "a",
      answer: "arco",
      status: 0,
      question: "CON LA A. Porción de una curva comprendida entre dos puntos.",
    },
    {
      letter: "a",
      answer: "alcohol",
      status: 0,
      question:
        "CON LA A. Cada uno de los compuestos orgánicos que contienen el grupo hidroxilo unido a un radical alifático o a alguno de sus derivados.",
    },

    {
      letter: "b",
      answer: "bingo",
      status: 0,
      question:
        "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso.",
    },
    {
      letter: "b",
      answer: "barba",
      status: 0,
      question:
        "CON LA B. Pelo que nace en la cara, desde la zona situada ante las orejas hasta el arranque del cuello.",
    },
    {
      letter: "b",
      answer: "bueno",
      status: 0,
      question: "CON LA B. Útil y a propósito para algo.",
    },

    {
      letter: "c",
      answer: "churumbel",
      status: 0,
      question: "CON LA C. Niño, crío, bebé.",
    },
    {
      letter: "c",
      answer: "charco",
      status: 0,
      question:
        "CON LA C. Agua, u otro líquido, detenida en un hoyo o cavidad de la tierra o del piso.",
    },
    {
      letter: "c",
      answer: "cascabel",
      status: 0,
      question:
        "CON LA C. Bola hueca de metal, generalmente pequeña, con una ranura, y que tiene en su interior una pieza metálica que, con el movimiento, suena.",
    },

    {
      letter: "d",
      answer: "diarrea",
      status: 0,
      question:
        "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida.",
    },
    {
      letter: "d",
      answer: "dedo",
      status: 0,
      question:
        "CON LA D. Cada uno de los cinco apéndices articulados en que terminan la mano y el pie del hombre y, en el mismo o menor número, de muchos animales.",
    },
    {
      letter: "d",
      answer: "dado",
      status: 0,
      question:
        "CON LA D. En los juegos de azar, objeto generalmente cúbico en cuyas caras aparecen puntos, que representan distintos números, o figuras diferentes.",
    },

    {
      letter: "e",
      answer: "ectoplasma",
      status: 0,
      question:
        "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación.",
    },
    {
      letter: "e",
      answer: "emblema",
      status: 0,
      question:
        "CON LA E. Jeroglífico, símbolo o empresa en que se representa alguna figura, al pie de la cual se escribe algún verso o lema que declara el concepto o moralidad que encierra.",
    },
    {
      letter: "e",
      answer: "edad",
      status: 0,
      question:
        "CON LA E. Tiempo que ha vivido una persona o ciertos animales o vegetales.",
    },

    {
      letter: "f",
      answer: "facil",
      status: 0,
      question:
        "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad.",
    },
    {
      letter: "f",
      answer: "faro",
      status: 0,
      question:
        "CON LA F. Torre alta en las costas, con luz en su parte superior, para que durante la noche sirva de señal a los navegantes.",
    },
    {
      letter: "f",
      answer: "falso",
      status: 0,
      question: "CON LA F. Incierto y contrario a la verdad.",
    },

    {
      letter: "g",
      answer: "galaxia",
      status: 0,
      question:
        "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas.",
    },
    {
      letter: "g",
      answer: "gallina",
      status: 0,
      question: "CON LA G. Persona cobarde, pusilánime y tímida.",
    },
    {
      letter: "g",
      answer: "gas",
      status: 0,
      question:
        "CON LA G. Fluido que tiende a expandirse y que se caracteriza por su baja densidad, como el aire.",
    },

    {
      letter: "h",
      answer: "harakiri",
      status: 0,
      question: "CON LA H. Suicidio ritual japonés por desentrañamiento.",
    },
    {
      letter: "h",
      answer: "hacha",
      status: 0,
      question:
        "CON LA H. Herramienta cortante, compuesta de una gruesa hoja de acero, con filo algo convexo, ojo para enastarla, y a veces con peto.",
    },
    {
      letter: "h",
      answer: "hola",
      status: 0,
      question: "CON LA H. Se usa como salutación familiar",
    },

    {
      letter: "i",
      answer: "iglesia",
      status: 0,
      question: "CON LA I. Templo cristiano.",
    },
    {
      letter: "i",
      answer: "isla",
      status: 0,
      question: "CON LA I. Porción de tierra rodeada de agua por todas partes.",
    },
    {
      letter: "i",
      answer: "inspirar",
      status: 0,
      question: "CON LA I. Aspirar el aire exterior hacia los pulmones.",
    },

    {
      letter: "j",
      answer: "jabali",
      status: 0,
      question:
        "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba.",
    },
    {
      letter: "j",
      answer: "jarra",
      status: 0,
      question:
        "CON LA J. Vasija de barro, porcelana, loza, cristal, etc., con cuello y boca anchos y una o dos asas.",
    },
    {
      letter: "j",
      answer: "jarabe",
      status: 0,
      question:
        "CON LA J. Bebida que se hace cociendo azúcar en agua hasta que se espesa, añadiéndole zumos refrescantes o sustancias medicinales.",
    },

    {
      letter: "l",
      answer: "licantropo",
      status: 0,
      question: "CON LA L. Hombre lobo.",
    },
    {
      letter: "l",
      answer: "labio",
      status: 0,
      question:
        "CON LA L. Reborde exterior carnoso y móvil de la boca de los mamíferos.",
    },
    {
      letter: "l",
      answer: "loro",
      status: 0,
      question:
        "CON LA L. Papagayo, ave, y más particularmente el que tiene el plumaje con fondo rojo.",
    },

    {
      letter: "m",
      answer: "misantropo",
      status: 0,
      question:
        "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas.",
    },
    {
      letter: "m",
      answer: "madre",
      status: 0,
      question: "CON LA M. Mujer que ha concebido o ha parido uno o más hijos.",
    },
    {
      letter: "m",
      answer: "mito",
      status: 0,
      question:
        "CON LA M. Narración maravillosa situada fuera del tiempo histórico y protagonizada por personajes de carácter divino o heroico.",
    },

    {
      letter: "n",
      answer: "necedad",
      status: 0,
      question: "CON LA N. Demostración de poca inteligencia.",
    },
    {
      letter: "n",
      answer: "nada",
      status: 0,
      question: "CON LA N. Inexistencia total o carencia absoluta de todo ser.",
    },
    {
      letter: "n",
      answer: "niño",
      status: 0,
      question: "CON LA N. Que está en la niñez.",
    },

    {
      letter: "ñ",
      answer: "señal",
      status: 0,
      question:
        "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
    },
    {
      letter: "ñ",
      answer: "baño",
      status: 0,
      question: "CONTIENE LA Ñ. Acción y efecto de bañar.",
    },
    {
      letter: "ñ",
      answer: "añorar",
      status: 0,
      question:
        "CONTIENE LA Ñ. Recordar con pena la ausencia, privación o pérdida de alguien o algo muy querido.",
    },

    {
      letter: "o",
      answer: "orco",
      status: 0,
      question:
        "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien.",
    },
    {
      letter: "o",
      answer: "oracion",
      status: 0,
      question: "CON LA O. Acción y efecto de orar.",
    },
    {
      letter: "o",
      answer: "orquesta",
      status: 0,
      question:
        "CON LA O. Conjunto de músicos que interpretan obras musicales con diversos instrumentos y bajo la guía de un director.",
    },

    {
      letter: "p",
      answer: "protoss",
      status: 0,
      question:
        "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft.",
    },
    {
      letter: "p",
      answer: "pato",
      status: 0,
      question:
        "CON LA P. Ave palmípeda acuática, con el pico aplanado y patas cortas, con dedos unidos entre sí por una membrana, de la cual existen varias especies, algunas de ellas domésticas.",
    },
    {
      letter: "p",
      answer: "peseta",
      status: 0,
      question:
        "CON LA P. Unidad monetaria de España entre 1869 y 2002, hasta la implantación del euro.",
    },

    {
      letter: "q",
      answer: "queso",
      status: 0,
      question:
        "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche.",
    },
    {
      letter: "q",
      answer: "queja",
      status: 0,
      question: "CON LA Q. Expresión de dolor, pena o sentimiento.",
    },
    {
      letter: "q",
      answer: "quesadilla",
      status: 0,
      question: "CON LA Q. Cierto género de pastel, compuesto de queso y masa.",
    },

    { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor." },
    {
      letter: "r",
      answer: "raro",
      status: 0,
      question: "CON LA R. Que se comporta de un modo inhabitual.",
    },
    {
      letter: "r",
      answer: "raza",
      status: 0,
      question: "CON LA R. Casta o calidad del origen o linaje.",
    },

    {
      letter: "s",
      answer: "stackoverflow",
      status: 0,
      question:
        "CON LA S. Comunidad salvadora de todo desarrollador informático.",
    },
    {
      letter: "s",
      answer: "sal",
      status: 0,
      question:
        "CON LA S. Sustancia, consistente en cloruro sódico, ordinariamente blanca, cristalina.",
    },
    {
      letter: "s",
      answer: "solo",
      status: 0,
      question:
        "CON LA S. Que está sin otra cosa o que se mira separado de ella.",
    },

    {
      letter: "t",
      answer: "terminator",
      status: 0,
      question:
        "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984.",
    },
    {
      letter: "t",
      answer: "tarta",
      status: 0,
      question:
        "CON LA T. Pastel grande, de forma generalmente redonda, relleno de frutas, crema, etc., o bien de bizcocho, pasta de almendra y otras clases de masa homogénea.",
    },
    {
      letter: "t",
      answer: "topo",
      status: 0,
      question:
        "CON LA T. Mamífero insectívoro del tamaño de un ratón, de cuerpo rechoncho, cola corta y pelaje negruzco suave y tupido.",
    },

    {
      letter: "u",
      answer: "unamuno",
      status: 0,
      question:
        "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914.",
    },
    {
      letter: "u",
      answer: "usar",
      status: 0,
      question: "CON LA U. Hacer servir una cosa para algo.",
    },
    {
      letter: "u",
      answer: "unico",
      status: 0,
      question: "CON LA U. Solo y sin otro de su especie.",
    },

    {
      letter: "v",
      answer: "vikingos",
      status: 0,
      question:
        "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa.",
    },
    {
      letter: "v",
      answer: "volcan",
      status: 0,
      question:
        "CON LA V. Abertura en la tierra, y más comúnmente en una montaña, por donde salen de tiempo en tiempo humo, llamas y materias encendidas o derretidas.",
    },
    {
      letter: "v",
      answer: "valor",
      status: 0,
      question:
        "CON LA V. Grado de utilidad o aptitud de las cosas para satisfacer las necesidades o proporcionar bienestar o deleite.",
    },

    {
      letter: "x",
      answer: "botox",
      status: 0,
      question:
        "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética.",
    },
    {
      letter: "x",
      answer: "sexto",
      status: 0,
      question: "CONTIENE LA X. Que ocupa en una serie el lugar número seis.",
    },
    {
      letter: "x",
      answer: "asfixia",
      status: 0,
      question: "CONTIENE LA X. Suspensión o dificultad en la respiración.",
    },

    {
      letter: "y",
      answer: "peyote",
      status: 0,
      question:
        "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos.",
    },
    {
      letter: "y",
      answer: "coyote",
      status: 0,
      question:
        "CONTIENE LA Y. Mamífero carnívoro de Norteamérica, semejante al lobo pero más pequeño y de pelaje gris amarillento.",
    },
    {
      letter: "y",
      answer: "suyo",
      status: 0,
      question: "CONTIENE LA Y. De él o de ella, de ellos o de ellas.",
    },

    {
      letter: "z",
      answer: "zen",
      status: 0,
      question:
        "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional.",
    },
    {
      letter: "z",
      answer: "zorro",
      status: 0,
      question:
        "CON LA Z. Mamífero cánido de menos de un metro de longitud, incluida la cola, de hocico alargado y orejas empinadas, pelaje de color pardo rojizo y muy espeso, especialmente en la cola, de punta blanca. Es de costumbres crepusculares y nocturnas; abunda en España y caza con gran astucia toda clase de animales, incluso de corral",
    },
    {
      letter: "z",
      answer: "zarza",
      status: 0,
      question:
        "CON LA Z. Arbusto de la familia de las rosáceas, con tallos sarmentosos, arqueados en las puntas, prismáticos, de cuatro a cinco metros de largo, con aguijones fuertes y con forma de gancho, hojas divididas en cinco hojuelas elípticas, aserradas, lampiñas por el haz y velludas por el envés, flores blancas o róseas en racimos terminales, y cuyo fruto, comestible, es la zarzamora.",
    },
  ],
  Score: [
    { name: "Pedro", palabras: 15, fallos: 3 },

    { name: "Marta", palabras: 18, fallos: 5 },

    { name: "Albert", palabras: 19, fallos: 5 },

    { name: "Joan", palabras: 12, fallos: 4 },
  ],
  Jugar_Pasapalabra() {
    Enjuego = true;
    totalTime = 160;

    Pasapalabra.updateClock();

    document.getElementById("Empezar").style.visibility = "hidden";
    document.getElementById("Timer").style.visibility = "visible";
    document.getElementById("Definicion").style.visibility = "visible";
    document.getElementById("respuesta").style.visibility = "visible";
    document.getElementById("contestar").style.visibility = "visible";
    document.getElementById("PasaPalabra").style.visibility = "visible";

    PosLetra = 0;

    Pasapalabra.Jugador.Palabras_Ok = 0;
    Pasapalabra.Jugador.Palabras_KO = 0;

    document.getElementById("OK").innerHTML = Pasapalabra.Jugador.Palabras_Ok;
    document.getElementById("KO").innerHTML = Pasapalabra.Jugador.Palabras_KO;

    jugando = true;
    salir = true;

    Pasapalabra.Generar_Rosco();
    Pasapalabra.Reiniciar_Bomobo();

    Pasapalabra.Comprobar_palabras(PosLetra);
  },
  Generar_Rosco() {
    x = 0;
    for (let i = 0; i < Pasapalabra.Rosco.length; i++) {
      x = 3 * i + Math.floor(Math.random() * 3);
      Pasapalabra.Rosco[i] = Pasapalabra.Buffer_Rosco[x];
    }

    console.table(Pasapalabra.Rosco);
  },
  Comprobar_palabras(letra) {
    id = Pasapalabra.Rosco[letra].letter.toUpperCase();
    document.getElementById(id).style.borderColor = "orange";
    document.getElementById("Definicion").innerHTML =
      Pasapalabra.Rosco[letra].question;
  },
  Click_Contestar() {
    respuesta = document.getElementById("respuesta").value;
    let respuestaOk = false;
    id = Pasapalabra.Rosco[PosLetra].letter.toUpperCase();

    if (!isNaN(respuesta) || respuesta == "") {
      alert("Introduzca una respuesta valida o /*/ Pasapalabra /*/");
    } else {
      respuestaOk = true;
    }

    if (respuestaOk) {
      if (respuesta.toLowerCase() == Pasapalabra.Rosco[PosLetra].answer) {
        Pasapalabra.Jugador.Palabras_Ok += 1;
        Pasapalabra.Rosco[PosLetra].status = 1;
        document.getElementById("OK").innerHTML =
          Pasapalabra.Jugador.Palabras_Ok;
        document.getElementById(id).style.backgroundImage =
          "url(./IMG/CirculoVerde.jpg)";
        document.getElementById("respuesta").value = "";
      } else {
        Pasapalabra.Jugador.Palabras_KO += 1;
        Pasapalabra.Rosco[PosLetra].status = 1;
        document.getElementById("KO").innerHTML =
          Pasapalabra.Jugador.Palabras_KO;
        document.getElementById(id).style.backgroundImage =
          "url(./IMG/CirculoRojo.jpg)";
        document.getElementById("respuesta").value = "";
        alert(
          `¡Noooo...!, la respuesta correcta es: ${Pasapalabra.Rosco[PosLetra].answer}`
        );
      }
      document.getElementById(id).style.borderColor = "white";

      if (Pasapalabra.Comprobar_Pasapalabra()) {
        do {
          if (PosLetra < Pasapalabra.Rosco.length - 1) {
            PosLetra += 1;
          } else {
            PosLetra = 0;
          }
        } while (Pasapalabra.Rosco[PosLetra].status != 0);

        Pasapalabra.Comprobar_palabras(PosLetra);
      } else {
        Pasapalabra.Mostrar_Resultado();
      }
    }
  },
  Click_Pasapalabra() {
    document.getElementById(id).style.borderColor = "white";
    document.getElementById("respuesta").value = "";

    do {
      if (PosLetra < Pasapalabra.Rosco.length - 1) {
        PosLetra += 1;
      } else {
        PosLetra = 0;
      }
    } while (Pasapalabra.Rosco[PosLetra].status != 0);

    Pasapalabra.Comprobar_palabras(PosLetra);
  },
  Comprobar_Pasapalabra() {
    Contestado = true;

    for (let i = 0; i < Pasapalabra.Rosco.length; i++) {
      if (Pasapalabra.Rosco[i].status == 0) {
        Contestado = false;
      }
    }

    if (
      Pasapalabra.Jugador.Palabras_Ok == Pasapalabra.Rosco.length ||
      Contestado
    ) {
      return false;
    }
    return true;
  },
  Mostrar_Resultado() {
    Enjuego = false;

    if (Pasapalabra.Jugador.Palabras_Ok == Pasapalabra.Rosco.length) {
      // Ha ganado ->
      document.getElementById("Definicion").style.visibility = "hidden";
      document.getElementById("respuesta").style.visibility = "hidden";
      document.getElementById("contestar").style.visibility = "hidden";
      document.getElementById("PasaPalabra").style.visibility = "hidden";
      id = Pasapalabra.Rosco[PosLetra].letter.toUpperCase();
      document.getElementById(id).style.borderColor = "white";

      document.getElementById("Final").style.visibility = "visible";
      document.getElementById("Final").style.backgroundImage =
        "url(./IMG/CirculoVerde.jpg)";
      document.getElementById("Final").style.color = "black";
      document.getElementById("Final").innerHTML =
        "¡Ha ganado el Rosco de SkylabCoders!, registra tu resultado.";
      document.getElementById("Nombre").style.visibility = "visible";
      document.getElementById("registrar").style.visibility = "visible";
    } else if (
      Pasapalabra.Jugador.Palabras_Ok + Pasapalabra.Jugador.Palabras_KO ==
      Pasapalabra.Rosco.length
    ) {
      // Ha completado el rosco ->
      document.getElementById("Definicion").style.visibility = "hidden";
      document.getElementById("respuesta").style.visibility = "hidden";
      document.getElementById("contestar").style.visibility = "hidden";
      document.getElementById("PasaPalabra").style.visibility = "hidden";
      id = Pasapalabra.Rosco[PosLetra].letter.toUpperCase();
      document.getElementById(id).style.borderColor = "white";

      document.getElementById("Final").style.visibility = "visible";
      document.getElementById("Final").style.backgroundImage =
        "url(./IMG/CirculoTimer.jpg)";
      document.getElementById("Final").style.color = "black";
      document.getElementById("Final").innerHTML =
        "¡Enhorabuena!, ha completado el rosco, registra tu resultado.";
      document.getElementById("Nombre").style.visibility = "visible";
      document.getElementById("registrar").style.visibility = "visible";
    }
  },
  Crear_Table() {
    const hilera = document.createElement("tr");

    const celda1 = document.createElement("td");
    const textoCelda1 = document.createTextNode("Nombre");
    celda1.appendChild(textoCelda1);
    hilera.appendChild(celda1);

    const celda2 = document.createElement("td");
    const textoCelda2 = document.createTextNode("Aciertos");
    celda2.appendChild(textoCelda2);
    hilera.appendChild(celda2);

    const celda3 = document.createElement("td");
    const textoCelda3 = document.createTextNode("Fallos");
    celda3.appendChild(textoCelda3);
    hilera.appendChild(celda3);

    document.getElementById("Hall").appendChild(hilera);
  },
  Vaciar_Table() {
    // https://developer.mozilla.org/es/docs/Web/API/Node/removeChild
    const borrar = document.getElementById("Hall");
    while (borrar.firstChild) {
      borrar.removeChild(borrar.firstChild);
    }
  },
  Mostrar_Puntos() {
    // https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces
    const lista = Pasapalabra.Score.sort((a, b) => b.palabras - a.palabras);
    for (let i = 0; i < lista.length; i++) {
      const hilera = document.createElement("tr");

      const celda1 = document.createElement("td");
      const textoCelda1 = document.createTextNode(`${lista[i].name}`);
      celda1.appendChild(textoCelda1);
      hilera.appendChild(celda1);

      const celda2 = document.createElement("td");
      const textoCelda2 = document.createTextNode(`${lista[i].palabras}`);
      celda2.appendChild(textoCelda2);
      hilera.appendChild(celda2);

      const celda3 = document.createElement("td");
      const textoCelda3 = document.createTextNode(`${lista[i].fallos}`);
      celda3.appendChild(textoCelda3);
      hilera.appendChild(celda3);

      document.getElementById("Hall").appendChild(hilera);
    }
  },
  Añadir_Puntos() {
    const name = document.getElementById("Nombre").value;
    Pasapalabra.Jugador.Nombre = name;
    const OK = Pasapalabra.Jugador.Palabras_Ok;
    const KO = Pasapalabra.Jugador.Palabras_KO;

    Pasapalabra.Score.push({ name, palabras: OK, fallos: KO });

    Pasapalabra.Vaciar_Table();
    Pasapalabra.Crear_Table();
    Pasapalabra.Mostrar_Puntos();

    document.getElementById("Final").style.visibility = "hidden";
    document.getElementById("Nombre").style.visibility = "hidden";
    document.getElementById("registrar").style.visibility = "hidden";

    document.getElementById("Empezar").style.visibility = "visible";
    document.getElementById("Nombre").value = "Introduce tu nombre - >";

    for (let i = 0; i < Pasapalabra.Rosco.length; i++) {
      id = Pasapalabra.Rosco[i].letter.toUpperCase();
      document.getElementById(id).style.backgroundImage =
        "url(./IMG/CirculoAzul.jpg)";
    }
    document.getElementById("Timer").style.backgroundImage =
      "url(./IMG/CirculoTimer.jpg)";
    document.getElementById("Timer").innerHTML = "160";
    document.getElementById("OK").innerHTML = "0";
    document.getElementById("KO").innerHTML = "0";
  },
  Reiniciar_Bomobo() {
    for (let i = 0; i < Pasapalabra.Rosco.length; i++) {
      Pasapalabra.Rosco[i].status = 0;
    }
  },
  updateClock() {
    document.getElementById("Timer").innerHTML = totalTime;
    if (totalTime == 0) {
      // EndTime = true;
      document.getElementById("Timer").innerHTML = "FIN";
      document.getElementById("Timer").style.backgroundImage =
        "url(./IMG/CirculoTimerEnd.jpg)";
      document.getElementById("Definicion").style.visibility = "hidden";
      document.getElementById("respuesta").style.visibility = "hidden";
      document.getElementById("contestar").style.visibility = "hidden";
      document.getElementById("PasaPalabra").style.visibility = "hidden";
      id = Pasapalabra.Rosco[PosLetra].letter.toUpperCase();
      document.getElementById(id).style.borderColor = "white";

      document.getElementById("Final").style.visibility = "visible";
      document.getElementById("Final").style.backgroundImage =
        "url(./IMG/CirculoTimerEnd.jpg)";
      document.getElementById("Final").style.color = "black";
      document.getElementById("Final").innerHTML =
        "¡Lastima! Gran partida, registra tu resultado.";
      document.getElementById("Nombre").style.visibility = "visible";
      document.getElementById("registrar").style.visibility = "visible";
    } else if (Enjuego) {
      totalTime -= 1;
      setTimeout("Pasapalabra.updateClock()", 1000);
    }
  },
};
