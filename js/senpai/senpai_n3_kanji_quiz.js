// LÓGICA COMPLETA DEL CUESTIONARIO CON SHUFFLE FISHER-YATES Y AUDIO -->
   
const kanjiList = [
    // --- Personas y Sociedad ---
    { category: 'Personas y Sociedad', kanji: '娘', hiragana: 'むすめ (musume)', translation: 'Hija', note: 'Mujer (女) y bueno (良). La mujer buena de la familia es la hija.' },
    { category: 'Personas y Sociedad', kanji: '息', hiragana: 'いき / むすこ (iki)', translation: 'Respiración / Hijo', note: 'Uno mismo (自) sobre el corazón (心). La respiración sale del propio corazón.' },
    { category: 'Personas y Sociedad', kanji: '祖', hiragana: 'そ (so)', translation: 'Ancestro', note: 'Altar o espíritu (礻) y además (且). Rezar a los ancestros.' },
    { category: 'Personas y Sociedad', kanji: '孫', hiragana: 'まご (mago)', translation: 'Nieto/a', note: 'Niño (子) atado a un hilo/descendencia (系).' },
    { category: 'Personas y Sociedad', kanji: '老', hiragana: 'お.いる (o.iru)', translation: 'Anciano', note: 'Un anciano encorvado sosteniendo un bastón.' },
    { category: 'Personas y Sociedad', kanji: '婦', hiragana: 'ふ (fu)', translation: 'Señora / Esposa', note: 'Mujer (女) con una escoba (帚). Ama de casa tradicional.' },
    { category: 'Personas y Sociedad', kanji: '仲', hiragana: 'なか (naka)', translation: 'Relación / Vínculo', note: 'Persona (亻) en el centro (中). El que media entre dos partes.' },
    { category: 'Personas y Sociedad', kanji: '徒', hiragana: 'と (to)', translation: 'Seguidor / Discípulo', note: 'Paso (彳) y correr (走). Seguir los pasos del maestro.' },
    { category: 'Personas y Sociedad', kanji: '氏', hiragana: 'し (shi)', translation: 'Apellido / Señor', note: 'Pictograma de una raíz o linaje familiar extendiéndose.' },
    { category: 'Personas y Sociedad', kanji: '師', hiragana: 'し (shi)', translation: 'Maestro / Experto', note: 'Ejército/Tribu a la izquierda y un estandarte. El que dirige a los estudiantes.' },
    { category: 'Personas y Sociedad', kanji: '役', hiragana: 'やく (yaku)', translation: 'Rol / Servicio', note: 'Paso (彳) y golpear (殳). Patrullar y cumplir con el deber.' },
    { category: 'Personas y Sociedad', kanji: '民', hiragana: 'みん (min)', translation: 'Pueblo / Ciudadano', note: 'Un ojo cerrado o cegado. Antiguamente, los súbditos obedientes.' },
    { category: 'Personas y Sociedad', kanji: '専', hiragana: 'せん (sen)', translation: 'Especialidad', note: 'Diez (十) y un campo de arroz (田). Especializarse en un área delimitada.' },
    { category: 'Personas y Sociedad', kanji: '共', hiragana: 'とも (tomo)', translation: 'Juntos / Ambos', note: 'Manos ofreciendo algo juntas en un altar.' },
    { category: 'Personas y Sociedad', kanji: '彼', hiragana: 'かれ (kare)', translation: 'Él / Novio', note: 'Paso (彳) y piel/corteza (皮). Esa persona "de allí".' },
    { category: 'Personas y Sociedad', kanji: '妻', hiragana: 'つま (tsuma)', translation: 'Esposa', note: 'Mujer (女) y una mano (ヨ). La encargada del hogar.' },
    
    // --- Naturaleza y Tiempo ---
    { category: 'Naturaleza y Tiempo', kanji: '氷', hiragana: 'こおり (koori)', translation: 'Hielo', note: 'Kanji de agua (水) con un trazo extra que indica que está congelada.' },
    { category: 'Naturaleza y Tiempo', kanji: '波', hiragana: 'なみ (nami)', translation: 'Ola', note: 'Agua (氵) y piel (皮). La "piel" o superficie ondulante del agua.' },
    { category: 'Naturaleza y Tiempo', kanji: '陽', hiragana: 'よう (you)', translation: 'Sol / Positivo', note: 'Colina (阝) y sol brillante (昜). El lado soleado.' },
    { category: 'Naturaleza y Tiempo', kanji: '季', hiragana: 'き (ki)', translation: 'Estación del año', note: 'Cosecha de arroz (禾) y niño (子). El ciclo del tiempo agrícola.' },
    { category: 'Naturaleza y Tiempo', kanji: '節', hiragana: 'ふし (fushi)', translation: 'Nudo / Época', note: 'Bambú (竹) que tiene nudos marcando su crecimiento.' },
    { category: 'Naturaleza y Tiempo', kanji: '暮', hiragana: 'く.れる (ku.reru)', translation: 'Anochecer / Vivir', note: 'Sol (日) escondiéndose tras la hierba (艹).' },
    { category: 'Naturaleza y Tiempo', kanji: '晩', hiragana: 'ばん (ban)', translation: 'Noche', note: 'Sol (日) y eximirse (免). Cuando el sol se exime o desaparece.' },
    { category: 'Naturaleza y Tiempo', kanji: '晴', hiragana: 'は.れる (ha.reru)', translation: 'Despejado', note: 'Sol (日) y azul/verde (青). El cielo azul bajo el sol.' },
    { category: 'Naturaleza y Tiempo', kanji: '雲', hiragana: 'くも (kumo)', translation: 'Nube', note: 'Lluvia (雨) sobre una acumulación/nube (云).' },
    { category: 'Naturaleza y Tiempo', kanji: '星', hiragana: 'ほし (hoshi)', translation: 'Estrella', note: 'Sol (日) naciendo o formándose (生).' },
    { category: 'Naturaleza y Tiempo', kanji: '緑', hiragana: 'みどり (midori)', translation: 'Verde', note: 'Hilo (糸) de un tejido de seda verde.' },
    { category: 'Naturaleza y Tiempo', kanji: '畑', hiragana: 'はたけ (hatake)', translation: 'Campo (Tierra)', note: 'Fuego (火) y campo (田). Campo preparado quemando la maleza (Típico kanji japonés).' },
    { category: 'Naturaleza y Tiempo', kanji: '岸', hiragana: 'きし (kishi)', translation: 'Costa / Orilla', note: 'Montaña (山), acantilado (厂) y seco (干). La tierra firme frente al mar.' },
    { category: 'Naturaleza y Tiempo', kanji: '谷', hiragana: 'たに (tani)', translation: 'Valle', note: 'Agua fluyendo hacia abajo desde una boca o apertura en las montañas.' },
    { category: 'Naturaleza y Tiempo', kanji: '岩', hiragana: 'いわ (iwa)', translation: 'Roca', note: 'Montaña (山) y piedra/duro (石).' },
    { category: 'Naturaleza y Tiempo', kanji: '島', hiragana: 'しま (shima)', translation: 'Isla', note: 'Un pájaro (鳥) posándose en una montaña (山) en medio del mar.' },
    { category: 'Naturaleza y Tiempo', kanji: '草', hiragana: 'くさ (kusa)', translation: 'Hierba', note: 'Planta (艹) y temprano (早). Lo primero que brota.' },
    { category: 'Naturaleza y Tiempo', kanji: '葉', hiragana: 'は (ha)', translation: 'Hoja', note: 'Planta (艹) sobre un árbol o generación (世) y madera (木).' },
    { category: 'Naturaleza y Tiempo', kanji: '根', hiragana: 'ね (ne)', translation: 'Raíz', note: 'Árbol (木) y el ojo u origen (艮). La base invisible del árbol.' },

    // --- Lugares y Posiciones ---
    { category: 'Lugares y Posiciones', kanji: '港', hiragana: 'みなと (minato)', translation: 'Puerto', note: 'Agua (氵) fluyendo por carriles comunes (巷).' },
    { category: 'Lugares y Posiciones', kanji: '橋', hiragana: 'はし (hashi)', translation: 'Puente', note: 'Árbol/Madera (木). Puente de madera elevado.' },
    { category: 'Lugares y Posiciones', kanji: '城', hiragana: 'しろ (shiro)', translation: 'Castillo', note: 'Tierra (土) usada para construir (成).' },
    { category: 'Lugares y Posiciones', kanji: '園', hiragana: 'えん (en)', translation: 'Jardín / Parque', note: 'Recinto cerrado (囗) que contiene túnicas o vestimentas.' },
    { category: 'Lugares y Posiciones', kanji: '署', hiragana: 'しょ (sho)', translation: 'Estación pública', note: 'Red (罒) y persona (者). Lugar oficial (policía/bomberos).' },
    { category: 'Lugares y Posiciones', kanji: '庫', hiragana: 'こ (ko)', translation: 'Almacén', note: 'Techo (广) y coche (車). Garaje o depósito.' },
    { category: 'Lugares y Posiciones', kanji: '階', hiragana: 'かい (kai)', translation: 'Planta / Piso', note: 'Montículo o escaleras (阝) y alinear/juntar (皆).' },
    { category: 'Lugares y Posiciones', kanji: '宿', hiragana: 'やど (yado)', translation: 'Alojamiento', note: 'Techo (宀), persona (亻) y cien (百). Lugar donde caben muchas personas.' },
    { category: 'Lugares y Posiciones', kanji: '郵', hiragana: 'ゆう (yuu)', translation: 'Correo postal', note: 'Colgando (垂) hacia un pueblo (阝).' },
    { category: 'Lugares y Posiciones', kanji: '祭', hiragana: 'まつり (matsuri)', translation: 'Festival', note: 'Carne (月/肉) sobre un altar (示). Ofrendas a los dioses.' },
    { category: 'Lugares y Posiciones', kanji: '府', hiragana: 'ふ (fu)', translation: 'Gobierno / Prefectura', note: 'Edificio (广) donde se administran o dan (付) leyes.' },
    { category: 'Lugares y Posiciones', kanji: '州', hiragana: 'しゅう (shuu)', translation: 'Estado / Provincia', note: 'Río con bancos de arena dividiendo el territorio.' },
    { category: 'Lugares y Posiciones', kanji: '底', hiragana: 'そこ (soko)', translation: 'Fondo', note: 'Techo (广) y la base o raíz (氏).' },
    { category: 'Lugares y Posiciones', kanji: '側', hiragana: 'がわ (gawa)', translation: 'Lado', note: 'Persona (亻) observando o al lado de una norma (則).' },
    { category: 'Lugares y Posiciones', kanji: '央', hiragana: 'おう (ou)', translation: 'Centro', note: 'Hombre grande con algo en medio de su cuello o cuerpo.' },
    { category: 'Lugares y Posiciones', kanji: '席', hiragana: 'せき (seki)', translation: 'Asiento', note: 'Techo (广), toalla/cojín (巾) y vigas. Lugar preparado para sentarse.' },
    { category: 'Lugares y Posiciones', kanji: '局', hiragana: 'きょく (kyoku)', translation: 'Buró / Oficina', note: 'Cuerpo (尸) inclinado dictando normas u observando (句).' },

    // --- Verbos y Acciones ---
    { category: 'Verbos y Acciones', kanji: '怒', hiragana: 'おこ.る (oko.ru)', translation: 'Enfadarse', note: 'Corazón (心) y esclavo/mujer (奴). Sentimiento de opresión.' },
    { category: 'Verbos y Acciones', kanji: '泣', hiragana: 'な.く (na.ku)', translation: 'Llorar', note: 'Agua (氵) y ponerse de pie (立). Lágrimas cayendo de los ojos.' },
    { category: 'Verbos y Acciones', kanji: '笑', hiragana: 'わら.う (wara.u)', translation: 'Reír', note: 'Bambú (竹) cediendo o balanceándose por la risa.' },
    { category: 'Verbos y Acciones', kanji: '喜', hiragana: 'よろこ.ぶ (yoroko.bu)', translation: 'Alegrarse', note: 'Boca (口) y frijoles en un tambor de celebración.' },
    { category: 'Verbos y Acciones', kanji: '悲', hiragana: 'かな.しむ (kana.shimu)', translation: 'Entristecerse', note: 'Corazón (心) dividido o no entero (非).' },
    { category: 'Verbos y Acciones', kanji: '疲', hiragana: 'つか.れる (tsuka.reru)', translation: 'Cansarse', note: 'Enfermedad (疒) y piel (皮). El cansancio es como estar enfermo.' },
    { category: 'Verbos y Acciones', kanji: '痛', hiragana: 'いた.い (ita.i)', translation: 'Doler', note: 'Enfermedad (疒) y pasar/atravesar (甬).' },
    { category: 'Verbos y Acciones', kanji: '驚', hiragana: 'おどろ.く (odoro.ku)', translation: 'Sorprenderse', note: 'Caballo (馬) y respeto/alarma (敬). El caballo que se asusta.' },
    { category: 'Verbos y Acciones', kanji: '悩', hiragana: 'なや.む (naya.mu)', translation: 'Preocuparse', note: 'Corazón/Mente (忄) y el cerebro funcionando mal.' },
    { category: 'Verbos y Acciones', kanji: '恐', hiragana: 'おそ.れる (oso.reru)', translation: 'Temer', note: 'Corazón (心) y herramienta/golpear (巩). Miedo al castigo.' },
    { category: 'Verbos y Acciones', kanji: '眠', hiragana: 'ねむ.る (nemu.ru)', translation: 'Dormir', note: 'Ojo (目) y pueblo/habitantes (民). Cerrar los ojos.' },
    { category: 'Verbos y Acciones', kanji: '探', hiragana: 'さが.す (saga.su)', translation: 'Buscar', note: 'Mano (扌) tocando algo profundo (深).' },
    { category: 'Verbos y Acciones', kanji: '捨', hiragana: 'す.てる (su.teru)', translation: 'Tirar / Desechar', note: 'Mano (扌) deshaciéndose de una casa o choza.' },
    { category: 'Verbos y Acciones', kanji: '拾', hiragana: 'ひろ.う (hiro.u)', translation: 'Recoger', note: 'Mano (扌) uniendo o juntando (合).' },
    { category: 'Verbos y Acciones', kanji: '捕', hiragana: 'つか.まえる (tsuka.maeru)', translation: 'Atrapar', note: 'Mano (扌) y de gran uso/fuerza (甫).' },
    { category: 'Verbos y Acciones', kanji: '投', hiragana: 'な.げる (na.geru)', translation: 'Lanzar', note: 'Mano (扌) y golpear con arma (殳).' },
    { category: 'Verbos y Acciones', kanji: '押', hiragana: 'お.す (o.su)', translation: 'Empujar', note: 'Mano (扌) y coraza (甲).' },
    { category: 'Verbos y Acciones', kanji: '抜', hiragana: 'ぬ.く (nu.ku)', translation: 'Extraer / Sacar', note: 'Mano (扌) y amigo/perro (友).' },
    { category: 'Verbos y Acciones', kanji: '抱', hiragana: 'だ.く (da.ku)', translation: 'Abrazar', note: 'Mano (扌) envolviendo (包).' },
    { category: 'Verbos y Acciones', kanji: '越', hiragana: 'こ.える (ko.eru)', translation: 'Cruzar / Superar', note: 'Correr (走) con una lanza/hacha (戉).' },
    { category: 'Verbos y Acciones', kanji: '頼', hiragana: 'たの.む (tano.mu)', translation: 'Pedir / Confiar', note: 'Cabeza (頁) y un fardo atado (束). Confiar una carga.' },
    { category: 'Verbos y Acciones', kanji: '断', hiragana: 'ことわ.る (kotowa.ru)', translation: 'Rechazar / Cortar', note: 'Hacha (斤) cortando unos hilos (㡭).' },
    { category: 'Verbos y Acciones', kanji: '謝', hiragana: 'あやま.る (ayama.ru)', translation: 'Disculparse', note: 'Palabras (言) y disparar una flecha (射).' },
    { category: 'Verbos y Acciones', kanji: '祈', hiragana: 'いの.る (ino.ru)', translation: 'Rezar', note: 'Altar (礻) y un hacha cortando (斤). Ofrenda.' },
    { category: 'Verbos y Acciones', kanji: '祝', hiragana: 'いわ.う (iwa.u)', translation: 'Celebrar', note: 'Altar (礻) y un hermano mayor (兄) hablando.' },
    { category: 'Verbos y Acciones', kanji: '逃', hiragana: 'に.げる (ni.geru)', translation: 'Escapar', note: 'Camino (辶) y agüero/presagio (兆).' },
    { category: 'Verbos y Acciones', kanji: '迷', hiragana: 'まよ.う (mayo.u)', translation: 'Perderse / Dudar', note: 'Camino (辶) y arroz (米) esparcido. No encontrar la ruta.' },
    { category: 'Verbos y Acciones', kanji: '戻', hiragana: 'もど.る (modo.ru)', translation: 'Volver', note: 'Puerta (戸) y perro (犬). El perro volviendo a la puerta de casa.' },
    { category: 'Verbos y Acciones', kanji: '守', hiragana: 'まも.る (mamo.ru)', translation: 'Proteger', note: 'Techo (宀) y medida (寸). Custodiar la ley de la casa.' },
    { category: 'Verbos y Acciones', kanji: '助', hiragana: 'たす.ける (tasu.keru)', translation: 'Ayudar', note: 'Fuerza (力) aplicada a un estante o soporte (且).' },

    // --- Adjetivos y Estados ---
    { category: 'Adjetivos y Estados', kanji: '難', hiragana: 'むずか.しい (muzuka.shii)', translation: 'Difícil', note: 'Pájaro (隹) atrapado en una red o terreno fangoso (堇).' },
    { category: 'Adjetivos y Estados', kanji: '易', hiragana: 'やさ.しい (yasa.shii)', translation: 'Fácil / Simple', note: 'Sol (日) asomando (勿). Algo que se ve claro y fácil.' },
    { category: 'Adjetivos y Estados', kanji: '柔', hiragana: 'やわ.らかい (yawa.rakai)', translation: 'Suave / Flexible', note: 'Una pica/lanza (矛) y madera (木). Madera flexible como el bambú.' },
    { category: 'Adjetivos y Estados', kanji: '硬', hiragana: 'かた.い (kata.i)', translation: 'Duro (Físico)', note: 'Piedra (石) y renovar (更). Duro como la piedra pulida.' },
    { category: 'Adjetivos y Estados', kanji: '固', hiragana: 'かた.い (kata.i)', translation: 'Sólido / Firme', note: 'Recinto cerrado (囗) y antiguo (古). Algo inamovible.' },
    { category: 'Adjetivos y Estados', kanji: '浅', hiragana: 'あさ.い (asa.i)', translation: 'Poco profundo', note: 'Agua (氵) donde se ven dos lanzas (戋).' },
    { category: 'Adjetivos y Estados', kanji: '深', hiragana: 'ふか.い (fuka.i)', translation: 'Profundo', note: 'Agua (氵) y buscar con antorchas (罙).' },
    { category: 'Adjetivos y Estados', kanji: '厚', hiragana: 'あつ.い (atsu.i)', translation: 'Grueso', note: 'Roca o acantilado (厂) y sol (日) y niño (子). Pared gruesa.' },
    { category: 'Adjetivos y Estados', kanji: '薄', hiragana: 'うす.い (usu.i)', translation: 'Delgado', note: 'Hierba (艹) y agua extendiéndose (溥).' },
    { category: 'Adjetivos y Estados', kanji: '濃', hiragana: 'こ.い (ko.i)', translation: 'Oscuro / Denso', note: 'Agua (氵) y agricultura abundante (農).' },
    { category: 'Adjetivos y Estados', kanji: '偉', hiragana: 'えら.い (era.i)', translation: 'Admirable / Grande', note: 'Persona (亻) y oponerse/resistir (韋). Alguien que destaca.' },
    { category: 'Adjetivos y Estados', kanji: '貧', hiragana: 'まず.しい (mazu.shii)', translation: 'Pobre', note: 'Dinero (貝) dividido o escaso (分).' },
    { category: 'Adjetivos y Estados', kanji: '富', hiragana: 'とみ (tomi)', translation: 'Riqueza', note: 'Techo (宀) y abundancia (畐). Casa llena de bienes.' },
    { category: 'Adjetivos y Estados', kanji: '豊', hiragana: 'ゆた.か (yuta.ka)', translation: 'Abundante', note: 'Vasija ritual con frijoles brotando abundantemente.' },
    { category: 'Adjetivos y Estados', kanji: '鋭', hiragana: 'するど.い (surudo.i)', translation: 'Afilado', note: 'Metal (金) y el cuerno o aguijón (兌).' },
    { category: 'Adjetivos y Estados', kanji: '鈍', hiragana: 'にぶ.い (nibu.i)', translation: 'Lento / Romo', note: 'Metal (金) y brote retenido (屯).' },
    { category: 'Adjetivos y Estados', kanji: '荒', hiragana: 'あら.い (ara.i)', translation: 'Violento / Áspero', note: 'Hierba (艹) muriendo o secándose por la corriente (流).' },
    { category: 'Adjetivos y Estados', kanji: '涼', hiragana: 'すず.しい (suzushii)', translation: 'Fresco', note: 'Agua (氵) de la capital (京).' },
    { category: 'Adjetivos y Estados', kanji: '温', hiragana: 'あたた.かい (atata.kai)', translation: 'Templado', note: 'Agua (氵) contenida en un plato bajo el sol (昷).' },
    { category: 'Adjetivos y Estados', kanji: '単', hiragana: 'たん (tan)', translation: 'Simple', note: 'Arma antigua de una sola pieza.' },

    // --- Conceptos y Objetos ---
    { category: 'Conceptos y Objetos', kanji: '愛', hiragana: 'あい (ai)', translation: 'Amor', note: 'Corazón (心) en el medio, envuelto con pies caminando hacia alguien.' },
    { category: 'Conceptos y Objetos', kanji: '夢', hiragana: 'ゆめ (yume)', translation: 'Sueño', note: 'Ojos tapados bajo la hierba por la noche (夕).' },
    { category: 'Conceptos y Objetos', kanji: '幸', hiragana: 'しあわ.せ (shiawa.se)', translation: 'Felicidad', note: 'Estar libre de unas esposas o castigo.' },
    { category: 'Conceptos y Objetos', kanji: '福', hiragana: 'ふく (fuku)', translation: 'Fortuna', note: 'Altar (礻) y abundancia (畐).' },
    { category: 'Conceptos y Objetos', kanji: '運', hiragana: 'うん (un)', translation: 'Suerte / Destino', note: 'Avanzar (辶) militarmente (軍).' },
    { category: 'Conceptos y Objetos', kanji: '命', hiragana: 'いのち (inochi)', translation: 'Vida / Orden', note: 'Boca dictando una orden y golpeando.' },
    { category: 'Conceptos y Objetos', kanji: '念', hiragana: 'ねん (nen)', translation: 'Pensamiento', note: 'El ahora (今) en el corazón (心).' },
    { category: 'Conceptos y Objetos', kanji: '感', hiragana: 'かん (kan)', translation: 'Sentimiento', note: 'Corazón (心) impactado o tocado (咸).' },
    { category: 'Conceptos y Objetos', kanji: '情', hiragana: 'じょう (jou)', translation: 'Emoción / Simpatía', note: 'Mente (忄) y azul/limpio (青).' },
    { category: 'Conceptos y Objetos', kanji: '恋', hiragana: 'こい (koi)', translation: 'Romance', note: 'Hilo (糸) atando un corazón (心).' },
    { category: 'Conceptos y Objetos', kanji: '恥', hiragana: 'はじ (haji)', translation: 'Vergüenza', note: 'Oreja (耳) y corazón (心). Las orejas enrojecen por la emoción.' },
    { category: 'Conceptos y Objetos', kanji: '辞', hiragana: 'じ (ji)', translation: 'Palabra / Dimisión', note: 'Lengua picante (舌) o hablando y sufrimiento (辛).' },
    { category: 'Conceptos y Objetos', kanji: '識', hiragana: 'しき (shiki)', translation: 'Conocimiento', note: 'Palabras (言) combinadas con sonidos (音) armados (戈).' },
    { category: 'Conceptos y Objetos', kanji: '結', hiragana: 'けつ (ketsu)', translation: 'Atar / Concluir', note: 'Hilo (糸) que da buena suerte/fortuna (吉).' },
    { category: 'Conceptos y Objetos', kanji: '果', hiragana: 'か (ka)', translation: 'Fruto / Resultado', note: 'Un árbol (木) del que cuelgan frutas grandes (田).' },
    { category: 'Conceptos y Objetos', kanji: '歴', hiragana: 'れき (reki)', translation: 'Currículo / Pasado', note: 'Bosque (林) bajo un acantilado pasando el tiempo (止).' },
    { category: 'Conceptos y Objetos', kanji: '史', hiragana: 'し (shi)', translation: 'Historia', note: 'Mano sujetando el pincel de un escriba.' },
    { category: 'Conceptos y Objetos', kanji: '技', hiragana: 'ぎ (gi)', translation: 'Habilidad', note: 'Mano (扌) que se apoya o cruza (支).' },
    { category: 'Conceptos y Objetos', kanji: '術', hiragana: 'じゅつ (jutsu)', translation: 'Técnica / Arte', note: 'Avanzar/Paso (行) en medio del mijo o brotes.' },
    { category: 'Conceptos y Objetos', kanji: '毒', hiragana: 'どく (doku)', translation: 'Veneno', note: 'Madre (母) que nace con fuerza vital tóxica (生).' },
    { category: 'Conceptos y Objetos', kanji: '血', hiragana: 'ち (chi)', translation: 'Sangre', note: 'Una gota en una vasija sacrificial.' },
    { category: 'Conceptos y Objetos', kanji: '骨', hiragana: 'ほね (hone)', translation: 'Hueso', note: 'Un cuerpo (肉) con la calavera o articulaciones al descubierto.' },
    { category: 'Conceptos y Objetos', kanji: '歯', hiragana: 'は (ha)', translation: 'Diente', note: 'Una boca/encía abierta mostrando los dientes.' },
    { category: 'Conceptos y Objetos', kanji: '髪', hiragana: 'かみ (kami)', translation: 'Cabello', note: 'Pelo largo (髟) y un amigo (友) que corre (犮).' },
    { category: 'Conceptos y Objetos', kanji: '身', hiragana: 'み (mi)', translation: 'Cuerpo / Persona', note: 'Silueta de un cuerpo embarazado (físico humano).' },
    { category: 'Conceptos y Objetos', kanji: '球', hiragana: 'きゅう (kyuu)', translation: 'Esfera', note: 'Joya/Rey (王) y buscar (求).' },
    { category: 'Conceptos y Objetos', kanji: '箱', hiragana: 'はこ (hako)', translation: 'Caja', note: 'Bambú (竹) entrelazado y ojos (相).' },
    { category: 'Conceptos y Objetos', kanji: '筆', hiragana: 'ふで (fude)', translation: 'Pincel', note: 'Bambú (竹) y un cepillo (聿).' },
    { category: 'Conceptos y Objetos', kanji: '鏡', hiragana: 'かがみ (kagami)', translation: 'Espejo', note: 'Metal (金) y reflejarse (竟).' },
    { category: 'Conceptos y Objetos', kanji: '窓', hiragana: 'まど (mado)', translation: 'Ventana', note: 'Agujero/Techo (穴) que mira al corazón/interior (心).' }
];

// === REPRODUCTOR DE AUDIO ===
window.playQuizAudio = function(text, btnElement, event) {
    // Prevenir que el click en el audio seleccione la respuesta
    if (event) event.stopPropagation();

    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        
        // Limpiamos la cadena de caracteres (ej: "おこ.る (oko.ru)" -> "おこる") para que el TTS nativo lo lea natural
        let cleanText = text.split(' ')[0].trim();
        cleanText = cleanText.replace('.', '');
        
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