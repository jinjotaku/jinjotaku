  // === BASE DE DATOS DE KANJIS N4 (COMPLETA ~165 Kanjis) ===
        const kanjiData = [
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
                // Alternativa de fallback silencioso (sin alert, si prefieres)
                console.warn("Tu navegador no soporta la reproducción de audio nativa.");
            }
        }

        // LÓGICA DE LA INTERFAZ
        const categories = ['Todos', 'Personas', 'Naturaleza', 'Lugares', 'Acciones', 'Adjetivos', 'Conceptos'];
        
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
                        <span class="text-[10px] font-bold uppercase text-[#d1513c]/60 bg-[#fcebef] px-2 py-1 rounded-md tracking-wider">
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
