// LÓGICA COMPLETA DEL CUESTIONARIO CON SHUFFLE FISHER-YATES Y AUDIO -->
   
const kanjiList = [
    // --- Personas y Familia ---
    { category: 'Personas', kanji: '兄', hiragana: 'あに (ani)', translation: 'Hermano mayor', note: 'Boca (口) sobre piernas (儿). El hermano mayor es quien habla y dirige.' },
    { category: 'Personas', kanji: '弟', hiragana: 'おとうと (otouto)', translation: 'Hermano menor', note: 'Un cordón enrollado alrededor de un palo. Representa al menor siendo protegido.' },
    { category: 'Personas', kanji: '姉', hiragana: 'あね (ane)', translation: 'Hermana mayor', note: 'Mujer (女) + ciudad/mercado (市). La hermana encargada del mercado.' },
    { category: 'Personas', kanji: '妹', hiragana: 'いもうと (imouto)', translation: 'Hermana menor', note: 'Mujer (女) + aún no (未). La mujer de la familia que "aún no" ha crecido.' },
    { category: 'Personas', kanji: '親', hiragana: 'おや (oya)', translation: 'Padres / Íntimo', note: 'Estar de pie (立) sobre un árbol (木) observando (見). Los padres velan por sus hijos.' },
    { category: 'Personas', kanji: '族', hiragana: 'ぞく (zoku)', translation: 'Familia / Tribu', note: 'Bajo un estandarte (方), flechas (矢). Una tribu unida.' },
    { category: 'Personas', kanji: '主', hiragana: 'おも / ぬし (omo / nushi)', translation: 'Señor / Principal', note: 'La llama ardiendo en el centro de una lámpara, indicando lo principal.' },
    { category: 'Personas', kanji: '夫', hiragana: 'おっと (otto)', translation: 'Esposo', note: 'Un hombre (大) con un alfiler en el pelo indicando su mayoría de edad.' },
    { category: 'Personas', kanji: '妻', hiragana: 'つま (tsuma)', translation: 'Esposa', note: 'Una mujer (女) sosteniendo una escoba, encargada del hogar.' },
    { category: 'Personas', kanji: '客', hiragana: 'きゃく (kyaku)', translation: 'Invitado / Cliente', note: 'Alguien bajo un techo (宀) que viene cada (各) vez.' },
    { category: 'Personas', kanji: '供', hiragana: 'とも / そな (tomo / sona)', translation: 'Acompañante / Ofrecer', note: 'Persona (亻) que ofrece cosas juntas (共) a un superior.' },
    { category: 'Personas', kanji: '者', hiragana: 'もの (mono)', translation: 'Persona', note: 'Anciano (老) que habla (日). Una persona con experiencia.' },
    { category: 'Personas', kanji: '医', hiragana: 'い (i)', translation: 'Médico', note: 'Sacar flechas/armas (矢) de un recinto (匚) para curar.' },
    { category: 'Personas', kanji: '員', hiragana: 'いん (in)', translation: 'Miembro / Empleado', note: 'Una boca (口) sobre una concha/dinero (貝). Alguien a quien se le paga por su palabra o servicio.' },
    { category: 'Personas', kanji: '僕', hiragana: 'ぼく (boku)', translation: 'Yo (masculino)', note: 'Persona (亻) y sirviente. Originalmente significaba sirviente, ahora "yo" humilde.' },
    { category: 'Personas', kanji: '君', hiragana: 'きみ (kimi)', translation: 'Tú / Señor', note: 'Una boca (口) y una mano con bastón (尹). Quien da las órdenes.' },

    // --- Naturaleza, Animales y Tiempo ---
    { category: 'Naturaleza', kanji: '春', hiragana: 'はる (haru)', translation: 'Primavera', note: 'Plantas creciendo bajo el sol (日) en los días cálidos.' },
    { category: 'Naturaleza', kanji: '夏', hiragana: 'なつ (natsu)', translation: 'Verano', note: 'Persona con máscara arrastrando los pies por el calor.' },
    { category: 'Naturaleza', kanji: '秋', hiragana: 'あき (aki)', translation: 'Otoño', note: 'Árbol (禾) y fuego (火). Las hojas rojas parecen en llamas.' },
    { category: 'Naturaleza', kanji: '冬', hiragana: 'ふゆ (fuyu)', translation: 'Invierno', note: 'Hielo (冫) colgando bajo un techo.' },
    { category: 'Naturaleza', kanji: '海', hiragana: 'うみ (umi)', translation: 'Mar', note: 'Agua (氵) + madre (母). El océano es madre de todas las aguas.' },
    { category: 'Naturaleza', kanji: '雪', hiragana: 'ゆき (yuki)', translation: 'Nieve', note: 'Lluvia (雨) que puede ser barrida (ヨ) al acumularse.' },
    { category: 'Naturaleza', kanji: '朝', hiragana: 'あさ (asa)', translation: 'Mañana', note: 'Sol (日) asomando entre la hierba, la luna (月) aún visible.' },
    { category: 'Naturaleza', kanji: '昼', hiragana: 'ひる (hiru)', translation: 'Mediodía', note: 'El sol (日) delimitando el día con sus rayos superiores.' },
    { category: 'Naturaleza', kanji: '夜', hiragana: 'よる (yoru)', translation: 'Noche', note: 'Persona (人) bajo la luna y un techo, descansando.' },
    { category: 'Naturaleza', kanji: '夕', hiragana: 'ゆう (yuu)', translation: 'Atardecer', note: 'Una luna incipiente a la que le falta un trazo.' },
    { category: 'Naturaleza', kanji: '光', hiragana: 'ひかり (hikari)', translation: 'Luz', note: 'Fuego (火) sobre piernas (儿), como una persona llevando una antorcha.' },
    { category: 'Naturaleza', kanji: '風', hiragana: 'かぜ (kaze)', translation: 'Viento', note: 'El viento envolviendo a un insecto (虫).' },
    { category: 'Naturaleza', kanji: '牛', hiragana: 'うし (ushi)', translation: 'Vaca / Toro', note: 'Dibujo esquemático de cuernos y cabeza.' },
    { category: 'Naturaleza', kanji: '鳥', hiragana: 'とり (tori)', translation: 'Pájaro', note: 'Pictograma de pájaro con alas y patas (灬).' },
    { category: 'Naturaleza', kanji: '犬', hiragana: 'いぬ (inu)', translation: 'Perro', note: 'Kanji de grande (大) con un punto para la oreja.' },
    { category: 'Naturaleza', kanji: '魚', hiragana: 'さかな (sakana)', translation: 'Pescado', note: 'Cabeza aguda, cuerpo con escamas (田) y cola (灬).' },
    { category: 'Naturaleza', kanji: '曜', hiragana: 'よう (you)', translation: 'Día de la semana', note: 'Sol (日) y un pájaro volando, midiendo los días.' },
    { category: 'Naturaleza', kanji: '昔', hiragana: 'むかし (mukashi)', translation: 'Antigüedad / Pasado', note: 'Días (日) que se han acumulado y secado como carne al sol.' },
    { category: 'Naturaleza', kanji: '世', hiragana: 'よ (yo)', translation: 'Mundo / Época', note: 'Tres decenas cruzadas (30 años), considerado una generación.' },

    // --- Lugares y Ubicaciones ---
    { category: 'Lugares', kanji: '町', hiragana: 'まち (machi)', translation: 'Pueblo / Ciudad', note: 'Campo (田) y calle (丁).' },
    { category: 'Lugares', kanji: '店', hiragana: 'みせ (mise)', translation: 'Tienda', note: 'Edificio o techo (广) donde se expone (占) mercancía.' },
    { category: 'Lugares', kanji: '院', hiragana: 'いん (in)', translation: 'Institución', note: 'Edificio (阝) con paredes fuertes y techo (完).' },
    { category: 'Lugares', kanji: '屋', hiragana: 'や (ya)', translation: 'Techo / Tienda', note: 'Persona bajo techo/bandera (尸) sentada (至).' },
    { category: 'Lugares', kanji: '駅', hiragana: 'えき (eki)', translation: 'Estación', note: 'Caballo (馬). Las antiguas estaciones eran de relevo equino.' },
    { category: 'Lugares', kanji: '京', hiragana: 'きょう (kyou)', translation: 'Capital', note: 'Gran puerta arquitectónica de ciudad.' },
    { category: 'Lugares', kanji: '都', hiragana: 'と / みやこ (to / miyako)', translation: 'Metrópolis', note: 'Persona (者) en la gran administración/aldea (阝).' },
    { category: 'Lugares', kanji: '道', hiragana: 'みち (michi)', translation: 'Camino', note: 'Caminar (辶) liderado por la cabeza (首).' },
    { category: 'Lugares', kanji: '区', hiragana: 'く (ku)', translation: 'Distrito', note: 'Área demarcada (匚) dividiendo zonas (メ).' },
    { category: 'Lugares', kanji: '県', hiragana: 'けん (ken)', translation: 'Prefectura', note: 'Ojo (目) mirando un árbol (木) delimitando la zona.' },
    { category: 'Lugares', kanji: '市', hiragana: 'し / いち (shi / ichi)', translation: 'Ciudad / Mercado', note: 'Una toalla/bandera colgada señalando un mercado.' },
    { category: 'Lugares', kanji: '村', hiragana: 'むら (mura)', translation: 'Aldea / Villa', note: 'Árboles (木) cerca del límite (寸).' },
    { category: 'Lugares', kanji: '堂', hiragana: 'どう (dou)', translation: 'Salón / Pabellón', note: 'Edificio majestuoso (尚) sobre base de tierra (土).' },
    { category: 'Lugares', kanji: '場', hiragana: 'ば (ba)', translation: 'Lugar / Espacio', note: 'Tierra (土) expuesta al sol naciente (昜).' },
    { category: 'Lugares', kanji: '室', hiragana: 'しつ (shitsu)', translation: 'Habitación', note: 'Techo (宀) que llega (至) al suelo.' },
    { category: 'Lugares', kanji: '庭', hiragana: 'にわ (niwa)', translation: 'Jardín', note: 'Espacio (广) de la corte (廷).' },
    { category: 'Lugares', kanji: '所', hiragana: 'ところ (tokoro)', translation: 'Lugar', note: 'Puerta (戸) cortada con hacha (斤) para abrir paso.' },
    { category: 'Lugares', kanji: '館', hiragana: 'かん (kan)', translation: 'Edificio público', note: 'Lugar de comida (食) para funcionarios (官).' },
    { category: 'Lugares', kanji: '寺', hiragana: 'てら (tera)', translation: 'Templo Budista', note: 'Suelo (土) regido por la ley (寸).' },
    { category: 'Lugares', kanji: '地', hiragana: 'ち (chi)', translation: 'Tierra / Terreno', note: 'Tierra (土) + escorpión/serpiente (也).' },
    { category: 'Lugares', kanji: '界', hiragana: 'かい (kai)', translation: 'Mundo / Límite', note: 'Campos (田) separados o divididos (介).' },
    { category: 'Lugares', kanji: '建', hiragana: 'たて (tate)', translation: 'Construir / Edificio', note: 'Mano empujando (廴) un pincel/herramienta (聿).' },
    { category: 'Lugares', kanji: '局', hiragana: 'きょく (kyoku)', translation: 'Oficina / Buró', note: 'Cuerpo envuelto (尸) observando o mandando (句).' },
    { category: 'Lugares', kanji: '台', hiragana: 'だい (dai)', translation: 'Plataforma / Base', note: 'Estructura alta desde donde una boca (口) puede hablar.' },
    { category: 'Lugares', kanji: '辺', hiragana: 'へん (hen)', translation: 'Vecindad / Alrededor', note: 'Camino (辶) alrededor de una espada/borde (刀).' },

    // --- Acciones y Verbos ---
    { category: 'Acciones', kanji: '思', hiragana: 'おも.う (omo.u)', translation: 'Pensar', note: 'Corazón (心) bajo un campo (田) que originalmente era cerebro.' },
    { category: 'Acciones', kanji: '考', hiragana: 'かんが.える (kangae.ru)', translation: 'Considerar', note: 'Anciano examinando con bastón minuciosamente.' },
    { category: 'Acciones', kanji: '走', hiragana: 'はし.る (hashi.ru)', translation: 'Correr', note: 'Pie moviéndose veloz levantando tierra (土).' },
    { category: 'Acciones', kanji: '歩', hiragana: 'ある.く (aru.ku)', translation: 'Caminar', note: 'Detenerse (止) a dar pequeños (少) pasos.' },
    { category: 'Acciones', kanji: '売', hiragana: 'う.る (u.ru)', translation: 'Vender', note: 'Samurái (士) con piernas (儿) exponiendo objetos.' },
    { category: 'Acciones', kanji: '買', hiragana: 'か.う (ka.u)', translation: 'Comprar', note: 'Red (罒) para atrapar dinero/conchas (貝).' },
    { category: 'Acciones', kanji: '貸', hiragana: 'か.す (ka.su)', translation: 'Prestar', note: 'Persona que sustituye/presta (代) dinero (貝).' },
    { category: 'Acciones', kanji: '借', hiragana: 'か.りる (ka.riru)', translation: 'Tomar prestado', note: 'Persona (亻) pidiendo tiempo (昔).' },
    { category: 'Acciones', kanji: '起', hiragana: 'お.きる (o.kiru)', translation: 'Despertar / Ocurrir', note: 'Levantarse de un salto (走) uno mismo (己).' },
    { category: 'Acciones', kanji: '洗', hiragana: 'あら.う (ara.u)', translation: 'Lavar', note: 'Agua (氵) por delante/primero (先).' },
    { category: 'Acciones', kanji: '帰', hiragana: 'かえ.る (kae.ru)', translation: 'Regresar', note: 'Persiguiendo (追) y barriendo/juntando un trapo para irse a casa.' },
    { category: 'Acciones', kanji: '働', hiragana: 'はたら.く (hatara.ku)', translation: 'Trabajar', note: 'Persona (亻) moviéndose (動).' },
    { category: 'Acciones', kanji: '作', hiragana: 'つく.る (tsuku.ru)', translation: 'Fabricar / Hacer', note: 'Persona (亻) cortando un árbol de golpe (乍).' },
    { category: 'Acciones', kanji: '泳', hiragana: 'およ.ぐ (oyo.gu)', translation: 'Nadar', note: 'Agua (氵) y un individuo extendido nadando (永).' },
    { category: 'Acciones', kanji: '始', hiragana: 'はじ.める (haji.meru)', translation: 'Comenzar', note: 'Mujer (女) y un pedestal/tarima (台). El inicio de una obra.' },
    { category: 'Acciones', kanji: '終', hiragana: 'おわ.る (owa.ru)', translation: 'Terminar', note: 'Hilo (糸) atado/anudado a un clavo (冬).' },
    { category: 'Acciones', kanji: '住', hiragana: 'す.む (su.mu)', translation: 'Vivir (residir)', note: 'Persona (亻) cerca de una vela principal/señor (主).' },
    { category: 'Acciones', kanji: '着', hiragana: 'き.る / つ.く (ki.ru / tsu.ku)', translation: 'Vestir / Llegar', note: 'Oveja (羊) sobre los ojos (目). Taparse como con lana.' },
    { category: 'Acciones', kanji: '切', hiragana: 'き.る (ki.ru)', translation: 'Cortar', note: 'Siete (七) y un cuchillo (刀).' },
    { category: 'Acciones', kanji: '乗', hiragana: 'の.る (no.ru)', translation: 'Subir (vehículo)', note: 'Persona sobre un árbol apuntando en varias direcciones.' },
    { category: 'Acciones', kanji: '降', hiragana: 'お.りる (o.riru)', translation: 'Bajar / Llover', note: 'Montículo (阝) por donde se desciende caminando (夅).' },
    { category: 'Acciones', kanji: '払', hiragana: 'はら.う (hara.u)', translation: 'Pagar', note: 'Mano (扌) lanzando o alejando una tabla (ム).' },
    { category: 'Acciones', kanji: '答', hiragana: 'こた.える (kota.eru)', translation: 'Responder', note: 'Bambú (竹) coincidiendo (合) con la pregunta.' },
    { category: 'Acciones', kanji: '運', hiragana: 'うん (un)', translation: 'Transportar / Suerte', note: 'Moverse (辶) en círculo/ejército (軍).' },
    { category: 'Acciones', kanji: '動', hiragana: 'うご.く (ugo.ku)', translation: 'Moverse', note: 'Fuerza (力) aplicada a algo pesado (重).' },
    { category: 'Acciones', kanji: '止', hiragana: 'と.まる (to.maru)', translation: 'Detener', note: 'La huella de un pie parado en seco.' },
    { category: 'Acciones', kanji: '急', hiragana: 'いそ.ぐ (iso.gu)', translation: 'Apurarse / Urgente', note: 'Corazón (心) que parece asomarse (刍) por la ansiedad.' },
    { category: 'Acciones', kanji: '死', hiragana: 'し.ぬ (shi.nu)', translation: 'Morir', note: 'Huesos expuestos (歹) de una persona (匕).' },
    { category: 'Acciones', kanji: '待', hiragana: 'ま.つ (ma.tsu)', translation: 'Esperar', note: 'Paso (彳) y un templo (寺). Hacer una parada.' },
    { category: 'Acciones', kanji: '知', hiragana: 'し.る (shi.ru)', translation: 'Saber', note: 'Flecha (矢) y boca (口). Hablar rápido e inteligentemente.' },
    { category: 'Acciones', kanji: '集', hiragana: 'あつ.まる (atsu.maru)', translation: 'Reunirse', note: 'Pájaros (隹) posados juntos en un árbol (木).' },
    { category: 'Acciones', kanji: '発', hiragana: 'はつ (hatsu)', translation: 'Emitir / Partir', note: 'Pies (癶) lanzando una flecha/arma (殳) al salir.' },
    { category: 'Acciones', kanji: '進', hiragana: 'すす.む (susu.mu)', translation: 'Avanzar', note: 'Camino (辶) de un pájaro (隹).' },
    { category: 'Acciones', kanji: '送', hiragana: 'おく.る (oku.ru)', translation: 'Enviar', note: 'Camino (辶) al cielo o alejándose de una persona, con luces (关).' },
    { category: 'Acciones', kanji: '転', hiragana: 'ころ.ぶ (koro.bu)', translation: 'Rodar / Caer', note: 'Coche (車) en una nube (云).' },
    { category: 'Acciones', kanji: '産', hiragana: 'う.む (u.mu)', translation: 'Producir / Dar a luz', note: 'Acantilado, nacer (生) y de pie (立).' },
    { category: 'Acciones', kanji: '試', hiragana: 'ため.す (tame.su)', translation: 'Probar / Examen', note: 'Palabras (言) en una ceremonia (式).' },
    { category: 'Acciones', kanji: '験', hiragana: 'けん (ken)', translation: 'Verificar / Examen', note: 'Caballo (馬) combinándose (僉).' },
    { category: 'Acciones', kanji: '問', hiragana: 'と.う (to.u)', translation: 'Preguntar', note: 'Una boca (口) en la puerta (門).' },
    { category: 'Acciones', kanji: '習', hiragana: 'なら.う (nara.u)', translation: 'Aprender', note: 'Plumas (羽) blancas (白). Pajarito aprendiendo a volar.' },
    { category: 'Acciones', kanji: '勉', hiragana: 'べん (ben)', translation: 'Esfuerzo (Estudiar)', note: 'Fuerza (力) para eximirse de un castigo o evitar algo (免).' },
    { category: 'Acciones', kanji: '強', hiragana: 'つよ.い (tsuyo.i)', translation: 'Fuerte (Estudiar)', note: 'Arco (弓) y un insecto grande (虫).' },

    // --- Adjetivos ---
    { category: 'Adjetivos', kanji: '遠', hiragana: 'とお.い (too.i)', translation: 'Lejos', note: 'Camino (辶) muy largo (袁).' },
    { category: 'Adjetivos', kanji: '近', hiragana: 'ちか.い (chika.i)', translation: 'Cerca', note: 'Camino (辶) cortado con hacha (斤).' },
    { category: 'Adjetivos', kanji: '多', hiragana: 'おお.い (oo.i)', translation: 'Muchos', note: 'Dos atardeceres (夕) acumulados.' },
    { category: 'Adjetivos', kanji: '少', hiragana: 'すく.ない (suku.nai)', translation: 'Pocos / Un poco', note: 'Pequeño (小) cortado abajo.' },
    { category: 'Adjetivos', kanji: '広', hiragana: 'ひろ.い (hiro.i)', translation: 'Amplio', note: 'Gran edificio (广) con espacio privado (ム).' },
    { category: 'Adjetivos', kanji: '早', hiragana: 'はや.い (haya.i)', translation: 'Temprano / Rápido', note: 'Sol (日) sobre una base (十).' },
    { category: 'Adjetivos', kanji: '遅', hiragana: 'おそ.い (oso.i)', translation: 'Tarde / Lento', note: 'Oveja (羊) caminando por el camino (辶).' },
    { category: 'Adjetivos', kanji: '重', hiragana: 'おも.い (omo.i)', translation: 'Pesado', note: 'Carro apilado de cosas.' },
    { category: 'Adjetivos', kanji: '軽', hiragana: 'かる.い (karu.i)', translation: 'Ligero', note: 'Coche (車) atado con sedas (巠).' },
    { category: 'Adjetivos', kanji: '悪', hiragana: 'わる.い (waru.i)', translation: 'Malo', note: 'Asia (亜) y corazón (心). Corazón deformado o hundido.' },
    { category: 'Adjetivos', kanji: '暗', hiragana: 'くら.い (kura.i)', translation: 'Oscuro', note: 'Sol (日) tapado por un sonido/ruido (音).' },
    { category: 'Adjetivos', kanji: '太', hiragana: 'ふと.い (futo.i)', translation: 'Gordo / Grueso', note: 'Grande (大) con un punto extra de gordura.' },
    { category: 'Adjetivos', kanji: '短', hiragana: 'みじか.い (mijika.i)', translation: 'Corto', note: 'Flecha (矢) junto a un recipiente (豆).' },
    { category: 'Adjetivos', kanji: '低', hiragana: 'ひく.い (hiku.i)', translation: 'Bajo', note: 'Persona (亻) junto a una base (氏).' },
    { category: 'Adjetivos', kanji: '寒', hiragana: 'さむ.い (samu.i)', translation: 'Frío', note: 'Bajo el techo (宀), plantas apiladas cubriendo hielo (冫).' },
    { category: 'Adjetivos', kanji: '暑', hiragana: 'あつ.い (atsu.i)', translation: 'Calor (clima)', note: 'Sol (日) sobre una persona (者).' },
    { category: 'Adjetivos', kanji: '青', hiragana: 'あお.い (ao.i)', translation: 'Azul', note: 'La luna (月) y crecimiento/juventud (生).' },
    { category: 'Adjetivos', kanji: '赤', hiragana: 'あか.い (aka.i)', translation: 'Rojo', note: 'Tierra (土) sobre fuego grande.' },
    { category: 'Adjetivos', kanji: '黒', hiragana: 'くろ.い (kuro.i)', translation: 'Negro', note: 'Hollín en un pueblo por el fuego (灬).' },
    { category: 'Adjetivos', kanji: '正', hiragana: 'ただ.しい (tada.shii)', translation: 'Correcto', note: 'Una línea arriba de detenerse (止). Detenerse en la línea justa.' },

    // --- Conceptos y Objetos ---
    { category: 'Conceptos', kanji: '音', hiragana: 'おと (oto)', translation: 'Sonido', note: 'Estar de pie (立) sobre un sol/boca (日).' },
    { category: 'Conceptos', kanji: '薬', hiragana: 'くすり (kusuri)', translation: 'Medicina', note: 'Hierba (艹) que da felicidad (楽).' },
    { category: 'Conceptos', kanji: '洋', hiragana: 'よう (you)', translation: 'Occidental / Océano', note: 'Agua (氵) de la oveja (羊).' },
    { category: 'Conceptos', kanji: '服', hiragana: 'ふく (fuku)', translation: 'Ropa', note: 'Luna/Cuerpo (月) prestando servicio o envolviendo.' },
    { category: 'Conceptos', kanji: '色', hiragana: 'いろ (iro)', translation: 'Color', note: 'Persona envuelta (⺈) y cuerpo.' },
    { category: 'Conceptos', kanji: '茶', hiragana: 'ちゃ (cha)', translation: 'Té', note: 'Hierba (艹), un techo/persona y un árbol/palo.' },
    { category: 'Conceptos', kanji: '肉', hiragana: 'にく (niku)', translation: 'Carne', note: 'Bordes de carne colgando dentro de la caja.' },
    { category: 'Conceptos', kanji: '理', hiragana: 'り (ri)', translation: 'Razón / Lógica', note: 'Rey/joya (王) que forma parte de un pueblo/interior (里).' },
    { category: 'Conceptos', kanji: '料', hiragana: 'りょう (ryou)', translation: 'Ingrediente / Tarifa', note: 'Arroz (米) y una pala medidora (斗).' },
    { category: 'Conceptos', kanji: '品', hiragana: 'しな (shina)', translation: 'Artículo / Bien', note: 'Tres bocas o cajas amontonadas.' },
    { category: 'Conceptos', kanji: '物', hiragana: 'もの (mono)', translation: 'Cosa', note: 'Vaca (牛) y no/bandera (勿).' },
    { category: 'Conceptos', kanji: '字', hiragana: 'じ (ji)', translation: 'Letra / Carácter', note: 'Niño (子) bajo un techo (宀).' },
    { category: 'Conceptos', kanji: '題', hiragana: 'だい (dai)', translation: 'Tema / Problema', note: 'Sol y correcto (是) junto a la cabeza (頁).' },
    { category: 'Conceptos', kanji: '質', hiragana: 'しつ (shitsu)', translation: 'Calidad', note: 'Dos hachas cortando (斤) y dinero (貝).' },
    { category: 'Conceptos', kanji: '絵', hiragana: 'え (e)', translation: 'Pintura', note: 'Hilo/sedas (糸) para una reunión (会).' },
    { category: 'Conceptos', kanji: '図', hiragana: 'ず (zu)', translation: 'Mapa / Dibujo', note: 'Caja delimitadora grande rodeando puntos medidos.' },
    { category: 'Conceptos', kanji: '映', hiragana: 'えい (ei)', translation: 'Reflejar', note: 'Sol (日) y centro/héroe (央).' },
    { category: 'Conceptos', kanji: '画', hiragana: 'が / かく (ga / kaku)', translation: 'Trazo / Imagen', note: 'Un campo demarcado con un marco superior.' },
    { category: 'Conceptos', kanji: '楽', hiragana: 'たの.しい (tano.shii)', translation: 'Divertido / Música', note: 'Tambores sobre una base de madera (木).' },
    { category: 'Conceptos', kanji: '歌', hiragana: 'うた (uta)', translation: 'Canción', note: 'Hermanos/abrir la boca (可) y bostezar/soplar (欠).' },
    { category: 'Conceptos', kanji: '心', hiragana: 'こころ (kokoro)', translation: 'Corazón / Mente', note: 'Pictograma clásico del órgano latiendo.' },
    { category: 'Conceptos', kanji: '意', hiragana: 'い (i)', translation: 'Idea / Intención', note: 'Sonido (音) del corazón (心).' },
    { category: 'Conceptos', kanji: '味', hiragana: 'あじ (aji)', translation: 'Sabor', note: 'Boca (口) y el árbol aún no crecido (未).' },
    { category: 'Conceptos', kanji: '事', hiragana: 'こと (koto)', translation: 'Cosa (abstracta)', note: 'Estandarte de un funcionario que relata un hecho.' },
    { category: 'Conceptos', kanji: '業', hiragana: 'ぎょう (gyou)', translation: 'Negocio / Industria', note: 'Vegetación intrincada sobre madera.' },
    { category: 'Conceptos', kanji: '真', hiragana: 'ま (ma)', translation: 'Verdad', note: 'Cuchara/ojo bajo el techo y la base.' },
    { category: 'Conceptos', kanji: '紙', hiragana: 'かみ (kami)', translation: 'Papel', note: 'Hilo (糸) y la raíz familiar (氏).' },
    { category: 'Conceptos', kanji: '英', hiragana: 'えい (ei)', translation: 'Inglés / Brillante', note: 'Hierba (艹) sobre centro/héroe (央).' },
    { category: 'Conceptos', kanji: '漢', hiragana: 'かん (kan)', translation: 'China (Han)', note: 'Agua (氵), pasto (艹) y marido/adulto (夫).' },
    { category: 'Conceptos', kanji: '不', hiragana: 'ふ (fu)', translation: 'No / Negativo', note: 'Raíz/pájaro volando hacia abajo negando todo.' },
    { category: 'Conceptos', kanji: '特', hiragana: 'とく (toku)', translation: 'Especial', note: 'Vaca (牛) y templo (寺).' },
    { category: 'Conceptos', kanji: '別', hiragana: 'べつ (betsu)', translation: 'Separado / Distinto', note: 'Boca (口), fuerza y espada separando.' },
    { category: 'Conceptos', kanji: '便', hiragana: 'べん (ben)', translation: 'Conveniencia', note: 'Persona (亻) y algo renovado/fácil (更).' },
    { category: 'Conceptos', kanji: '利', hiragana: 'り (ri)', translation: 'Beneficio', note: 'Árbol (禾) y cuchillo (刂) de la cosecha.' }
];

// === REPRODUCTOR DE AUDIO ===
window.playQuizAudio = function(text, btnElement, event) {
    if (event) event.stopPropagation();

    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        
        // Limpiamos la cadena de caracteres (ej: "おこ.る (oko.ru)" -> "おこる") para que el TTS nativo lo lea natural
        let cleanText = text.split(' ')[0].trim();
        cleanText = cleanText.replace(/\./g, ''); // Remover todos los puntos
        
        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.lang = 'ja-JP';
        utterance.rate = 0.9;
        utterance.pitch = 1;
        
        if (btnElement) {
            btnElement.classList.add('audio-playing');
            utterance.onend = () => btnElement.classList.remove('audio-playing');
            utterance.onerror = () => btnElement.classList.remove('audio-playing');
        }
        window.speechSynthesis.speak(utterance);
    }
};

// === ALGORITMO FISHER-YATES (Knuth Shuffle) ===
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

let db = []; // Contenedor dinámico de preguntas
let questions = [], totalLimit = 10, currentIdx = 0, score = 0, history = [], isFinished = false;

// === GENERADOR DINÁMICO DE PREGUNTAS CON CONTROL DE DISTRACTORES ===
function generateDatabase(selectedCategory, selectedType) {
    db = [];
    
    // 1. Filtrar los Kanjis por la categoría seleccionada
    let filteredKanjis = [...kanjiList];
    if (selectedCategory !== 'Todos') {
        filteredKanjis = filteredKanjis.filter(k => k.category === selectedCategory);
    }
    
    // En caso de que no haya suficientes elementos (salvaguarda), usar todo el pool
    if (filteredKanjis.length === 0) {
        filteredKanjis = [...kanjiList];
    }

    // 2. Crear las preguntas de forma dinámica
    filteredKanjis.forEach(item => {
        
        // --- MODALIDAD A: Traducción (Kanji -> Español) ---
        if (selectedType === 'Mixto' || selectedType === 'translation') {
            let otherTranslations = filteredKanjis
                .filter(k => k.translation !== item.translation)
                .map(k => k.translation);
            
            otherTranslations = [...new Set(otherTranslations)];
            let wrongTranslations = shuffleArray(otherTranslations).slice(0, 3);
            
            if (wrongTranslations.length < 3) {
                let backup = [...new Set(kanjiList.filter(k => k.translation !== item.translation).map(k => k.translation))];
                wrongTranslations = shuffleArray(backup).slice(0, 3);
            }

            let options = [
                { text: item.translation, correct: true, audioText: null },
                { text: wrongTranslations[0] || 'Desconocido', correct: false, audioText: null },
                { text: wrongTranslations[1] || 'Oculto', correct: false, audioText: null },
                { text: wrongTranslations[2] || 'Ninguno', correct: false, audioText: null }
            ];

            db.push({
                type: 'translation',
                kanji: item.kanji,
                category: item.category,
                q: `¿Qué significa el kanji [ ${item.kanji} ]?`,
                options: shuffleArray(options),
                answer: item.translation,
                help: `Lectura en hiragana: ${item.hiragana}`
            });
        }

        // --- MODALIDAD B: Lectura (Kanji -> Hiragana) ---
        if (selectedType === 'Mixto' || selectedType === 'reading') {
            let otherHiraganas = filteredKanjis
                .filter(k => k.hiragana !== item.hiragana)
                .map(k => k.hiragana);
            
            otherHiraganas = [...new Set(otherHiraganas)];
            let wrongHiraganas = shuffleArray(otherHiraganas).slice(0, 3);

            if (wrongHiraganas.length < 3) {
                let backup = [...new Set(kanjiList.filter(k => k.hiragana !== item.hiragana).map(k => k.hiragana))];
                wrongHiraganas = shuffleArray(backup).slice(0, 3);
            }

            let options = [
                { text: item.hiragana, correct: true, audioText: item.hiragana },
                { text: wrongHiraganas[0] || '---', correct: false, audioText: wrongHiraganas[0] },
                { text: wrongHiraganas[1] || '---', correct: false, audioText: wrongHiraganas[1] },
                { text: wrongHiraganas[2] || '---', correct: false, audioText: wrongHiraganas[2] }
            ];

            db.push({
                type: 'reading',
                kanji: item.kanji,
                category: item.category,
                q: `¿Cuál es la lectura principal en hiragana para el kanji [ ${item.kanji} ]?`,
                options: shuffleArray(options),
                answer: item.hiragana,
                help: `Traducción: ${item.translation}`
            });
        }

        // --- MODALIDAD C: Búsqueda Reversa (Español -> Kanji) ---
        if (selectedType === 'Mixto' || selectedType === 'kanji_search') {
            // Extraer los objetos enteros para tener acceso a su hiragana para el audio
            let otherKanjiObjects = filteredKanjis.filter(k => k.kanji !== item.kanji);
            let wrongKanjis = shuffleArray(otherKanjiObjects).slice(0, 3);

            if (wrongKanjis.length < 3) {
                let backup = kanjiList.filter(k => k.kanji !== item.kanji);
                wrongKanjis = shuffleArray(backup).slice(0, 3);
            }

            let options = [
                { text: item.kanji, correct: true, audioText: item.hiragana },
                { text: wrongKanjis[0]?.kanji || '?', correct: false, audioText: wrongKanjis[0]?.hiragana },
                { text: wrongKanjis[1]?.kanji || '?', correct: false, audioText: wrongKanjis[1]?.hiragana },
                { text: wrongKanjis[2]?.kanji || '?', correct: false, audioText: wrongKanjis[2]?.hiragana }
            ];

            db.push({
                type: 'kanji_search',
                kanji: '?', // Se oculta en el display gigante
                category: item.category,
                q: `¿Cuál es el kanji correcto para la traducción "${item.translation}"?`,
                options: shuffleArray(options),
                answer: item.kanji,
                help: `Lectura: ${item.hiragana}`
            });
        }

        // --- MODALIDAD D: Composición o Mnemotecnias ---
        if ((selectedType === 'Mixto' || selectedType === 'composition') && item.note) {
            let otherNotes = filteredKanjis
                .filter(k => k.note !== item.note && k.note)
                .map(k => k.note);
            
            otherNotes = [...new Set(otherNotes)];
            let wrongNotes = shuffleArray(otherNotes).slice(0, 3);

            if (wrongNotes.length < 3) {
                let backup = [...new Set(kanjiList.filter(k => k.note !== item.note && k.note).map(k => k.note))];
                wrongNotes = shuffleArray(backup).slice(0, 3);
            }

            let options = [
                { text: item.note, correct: true, audioText: null },
                { text: wrongNotes[0] || 'Ideograma pictográfico simple.', correct: false, audioText: null },
                { text: wrongNotes[1] || 'Representación geométrica clásica.', correct: false, audioText: null },
                { text: wrongNotes[2] || 'Trazo abstracto con fines gramaticales.', correct: false, audioText: null }
            ];

            db.push({
                type: 'composition',
                kanji: item.kanji,
                category: item.category,
                q: `¿Cuál es la composición o mnemotecnia del kanji [ ${item.kanji} ]?`,
                options: shuffleArray(options),
                answer: item.note,
                help: `${item.translation} (${item.hiragana})`
            });
        }
    });
}

// === GESTOR DE ESTADO DEL JUEGO ===
function startGame() {
    const categorySelect = document.getElementById('quiz-category').value;
    const typeSelect = document.getElementById('quiz-type').value;
    const limitSelect = document.getElementById('num-questions').value;
    
    // Generar pool de preguntas filtradas y barajadas
    generateDatabase(categorySelect, typeSelect);
    let pool = shuffleArray(db);
    
    // Si el pool final quedó vacío por algún filtro extremo, cargamos todo por seguridad
    if (pool.length === 0) {
        generateDatabase('Todos', 'Mixto');
        pool = shuffleArray(db);
    }

    totalLimit = limitSelect === 'all' ? pool.length : parseInt(limitSelect);
    questions = pool.slice(0, Math.min(totalLimit, pool.length));
    
    // Reiniciar marcadores
    currentIdx = 0;
    score = 0;
    history = [];
    isFinished = false;

    document.getElementById('score').textContent = `Puntos: 0`;
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
    
    showQuestion();
}

function showQuestion() {
    if (currentIdx >= questions.length) return finish();
    const q = questions[currentIdx];
    
    // Actualizar textos y progreso
    const currentQuestionNum = currentIdx + 1;
    document.getElementById('progress').textContent = `Pregunta ${currentQuestionNum}/${questions.length}`;
    
    const percentage = (currentIdx / questions.length) * 100;
    document.getElementById('progress-bar').style.width = `${percentage}%`;
    
    // Controlar visualizador de Kanji superior
    const displayContainer = document.getElementById('kanji-display-container');
    const displayEl = document.getElementById('kanji-display');
    const badgeEl = document.getElementById('category-badge');
    
    if (q.kanji === '?') {
        displayContainer.classList.add('hidden'); // Ocultar para modo búsqueda reversa
    } else {
        displayContainer.classList.remove('hidden');
        displayEl.textContent = q.kanji;
        badgeEl.textContent = q.category;
        
        // Efecto de entrada elástica de Jinjotaku
        displayEl.style.transform = 'scale(0.85)';
        displayEl.style.opacity = '0';
        setTimeout(() => {
            displayEl.style.transform = 'scale(1)';
            displayEl.style.opacity = '1';
        }, 50);
    }

    document.getElementById('question').textContent = q.q;
    
    // Dibujar opciones interactivas
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    
    q.options.forEach(opt => {
        const btn = document.createElement('button');
        const isShort = opt.text.length <= 12;
        
        // Si la opción tiene audio asociado (ej. Hiragana o Kanji), le añadimos el icono
        let contentHTML = `<span class="flex-1 text-center">${opt.text}</span>`;
        if (opt.audioText) {
            btn.className = `w-full text-left p-4 rounded-xl border border-slate-200 btn-option transition-all font-semibold text-slate-700 focus:outline-none select-none bg-white flex justify-between items-center group ${isShort ? 'text-base sm:text-lg' : 'text-xs sm:text-sm'}`;
            contentHTML = `
                <span>${opt.text}</span>
                <div onclick="playQuizAudio('${opt.audioText}', this, event)" class="shrink-0 text-slate-200 group-hover:text-slate-400 hover:!text-[#d1513c] transition-colors p-2 rounded-full hover:bg-slate-50 active:bg-slate-100" title="Escuchar opción" aria-label="Escuchar opción">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M11 5L6 9H2v6h4l5 4V5z"></path>
                    </svg>
                </div>
            `;
        } else {
            btn.className = `w-full p-4 rounded-xl border border-slate-200 btn-option transition-all font-semibold text-slate-700 focus:outline-none select-none bg-white flex items-center justify-center ${isShort ? 'text-base sm:text-lg' : 'text-xs sm:text-sm'}`;
        }

        btn.innerHTML = contentHTML;
        
        btn.onclick = () => {
            const isCorrect = opt.correct;
            history.push({ 
                q: q.q, 
                char: q.kanji !== '?' ? q.kanji : opt.text,
                ans: opt.text, 
                corr: q.answer, 
                ok: isCorrect,
                help: q.help
            });
            
            if (isCorrect) score += 10;
            document.getElementById('score').textContent = `Puntos: ${score}`;
            currentIdx++;
            showQuestion();
        };
        optionsDiv.appendChild(btn);
    });
}

function finish() {
    if (isFinished) return;
    isFinished = true;
    document.getElementById('progress-bar').style.width = `100%`;
    
    // Rellenar respuestas vacías si se sale anticipadamente
    while (history.length < questions.length) {
        const q = questions[history.length];
        history.push({ q: q.q, char: q.kanji, ans: '---', corr: q.answer, ok: false, help: q.help });
    }
    
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    document.getElementById('final-score').textContent = `${score} / ${questions.length * 10} pts`;
    
    // Dibujar registro detallado
    document.getElementById('log').innerHTML = history.map((h, i) => `
        <div class="mb-3 p-4 border-b border-amber-100/50 ${h.ok ? 'text-emerald-700 bg-emerald-50/50' : 'text-red-700 bg-red-50/30'} rounded-xl">
            <span class="font-bold text-slate-600 block mb-1">Pregunta ${i+1}: ${h.q}</span>
            <div class="text-sm mt-1 flex flex-col gap-1">
                ${h.char && h.char !== '?' ? `<span class="text-2xl font-black text-[#d1513c]">${h.char}</span>` : ''}
                <div><strong>Tu Respuesta:</strong> <span class="${h.ok ? 'text-emerald-600 font-bold' : 'text-red-600 font-semibold'}">${h.ans}</span>${h.ok ? ' ✓' : ''}</div>
                ${!h.ok ? `<div><strong class="text-slate-700">Respuesta Correcta:</strong> <span class="text-emerald-600 font-bold">${h.corr}</span></div>` : ''}
            </div>
            <div class="text-xs text-slate-500 mt-2 italic bg-amber-50/30 p-2 rounded-lg border border-amber-100/30">
                Pista mnemotécnica: ${h.help}
            </div>
        </div>`).join('');
}