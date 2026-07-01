 // === BASE DE DATOS DE KANJIS N3 (130 Kanjis Esenciales) ===
        const kanjiData = [
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

        // LÓGICA DE AUDIO
        function playKanjiAudio(text, btnElement, event) {
            // Prevenir otros clics accidentales
            if (event) event.stopPropagation();

            // Comprobar soporte de la Web Speech API
            if ('speechSynthesis' in window) {
                window.speechSynthesis.cancel();
                
                const utterance = new SpeechSynthesisUtterance(text);
                utterance.lang = 'ja-JP'; // Japonés
                utterance.rate = 0.9;     // Un pelín más lento para entenderlo bien
                utterance.pitch = 1;

                if (btnElement) {
                    btnElement.classList.add('audio-playing');
                    utterance.onend = () => btnElement.classList.remove('audio-playing');
                    utterance.onerror = () => btnElement.classList.remove('audio-playing');
                }

                window.speechSynthesis.speak(utterance);
            } else {
                console.warn("Tu navegador no soporta la reproducción de audio nativa.");
            }
        }

        // LÓGICA DE LA INTERFAZ
        const categories = ['Todos', 'Personas y Sociedad', 'Naturaleza y Tiempo', 'Lugares y Posiciones', 'Verbos y Acciones', 'Adjetivos y Estados', 'Conceptos y Objetos'];
        
        function initFilters() {
            const filterContainer = document.getElementById('filters');
            
            categories.forEach(category => {
                const btn = document.createElement('button');
                btn.textContent = category;
                btn.className = `filter-btn px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 border 
                                 ${category === 'Todos' 
                                    ? 'active bg-[#d1513c] text-white border-[#d1513c] shadow-md shadow-[#d1513c]/30' 
                                    : 'bg-white text-slate-600 border-slate-200 shadow-sm'}`;
                
                btn.onclick = () => {
                    // Actualizar botones
                    document.querySelectorAll('.filter-btn').forEach(b => {
                        b.classList.remove('active', 'bg-[#d1513c]', 'text-white', 'border-[#d1513c]', 'shadow-md', 'shadow-[#d1513c]/30');
                        b.classList.add('bg-white', 'text-slate-600', 'border-slate-200', 'shadow-sm');
                    });
                    
                    btn.classList.remove('bg-white', 'text-slate-600', 'border-slate-200', 'shadow-sm');
                    btn.classList.add('active', 'bg-[#d1513c]', 'text-white', 'border-[#d1513c]', 'shadow-md', 'shadow-[#d1513c]/30');
                    
                    // Filtrar datos
                    filterData(category);
                };
                
                filterContainer.appendChild(btn);
            });
        }

        function filterData(category) {
            const grid = document.getElementById('kanjiGrid');
            grid.innerHTML = ''; // Limpiar grid

            const filteredData = category === 'Todos' 
                ? kanjiData 
                : kanjiData.filter(item => item.category === category);

            filteredData.forEach((item, index) => {
                const card = document.createElement('div');
                
                // Estructura de tarjeta moderna. Position 'relative' añadido para el botón de audio
                card.className = 'kanji-card fade-in bg-white border border-amber-100/50 rounded-2xl p-6 shadow-sm flex flex-col items-center text-center transition-all duration-300 relative';
                card.style.animationDelay = `${index * 0.02}s`; // Efecto cascada
                
                // Extraemos el hiragana puro antes de los paréntesis o puntos separadores para forzar la lectura perfecta.
                // Ejemplo: "おも.う (omo.u)" -> "おもう"
                let readingToSpeak = item.hiragana.split(' ')[0];
                readingToSpeak = readingToSpeak.replace('.', '');

                card.innerHTML = `
                    <!-- Botón de Audio interactivo -->
                    <button onclick="playKanjiAudio('${readingToSpeak}', this, event)" class="absolute top-3 right-3 text-slate-300 hover:text-[#d1513c] transition-colors p-2 rounded-full hover:bg-slate-50 active:bg-slate-100" title="Escuchar pronunciación" aria-label="Escuchar ${item.kanji}">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M11 5L6 9H2v6h4l5 4V5z"></path>
                        </svg>
                    </button>

                    <div class="w-full flex justify-start mb-2">
                        <span class="text-[9px] sm:text-[10px] font-bold uppercase text-[#d1513c]/60 bg-[#fcebef] px-2 py-1 rounded-md tracking-wider">
                            ${item.category}
                        </span>
                    </div>
                    <div class="hiragana text-sm font-semibold text-slate-400 mb-1 tracking-wide mt-1">
                        ${item.hiragana}
                    </div>
                    <div class="kanji text-7xl sm:text-8xl font-black text-[#d1513c] my-4 drop-shadow-sm">
                        ${item.kanji}
                    </div>
                    <div class="translation text-xl font-bold text-[#2c405a] mb-4">
                        ${item.translation}
                    </div>
                    <div class="note w-full mt-auto text-xs bg-[#fdf8f5] p-4 rounded-xl border-l-4 border-[#d1513c] text-left text-slate-600 leading-relaxed">
                        <strong class="text-[#2c405a] flex items-center gap-1 mb-1">
                            <svg class="w-3 h-3 text-[#d1513c]" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                            Composición
                        </strong>
                        ${item.note}
                    </div>
                `;
                grid.appendChild(card);
            });
        }

        // --- MANEJO DEL BOTÓN DE SCROLL UP (VOLVER ARRIBA) ---
        window.addEventListener('scroll', () => {
            const btn = document.getElementById('backToTop');
            if (window.scrollY > 300) {
                btn.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
                btn.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');
            } else {
                btn.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
                btn.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
            }
        });

        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // Inicializar
        document.addEventListener('DOMContentLoaded', () => {
            initFilters();
            filterData('Todos');
        });