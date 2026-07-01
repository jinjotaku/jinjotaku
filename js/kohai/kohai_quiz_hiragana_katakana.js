// === BASE DE DATOS DE HIRAGANA Y KATAKANA COMPLETAMENTE EXPANDIDA ===
const kanaList = [
    // ==================== HIRAGANA BÁSICOS ====================
    { system: 'Hiragana', category: 'Básicos', character: 'あ', romaji: 'a', mnemonic: 'La "A" de "Árbol" con una cruz y su copa redondeada.', example: 'あさ (Asa - Mañana)' },
    { system: 'Hiragana', category: 'Básicos', character: 'い', romaji: 'i', mnemonic: 'Dos bastones paralelos, el de la izquierda tiene un gancho.', example: 'いぬ (Inu - Perro)' },
    { system: 'Hiragana', category: 'Básicos', character: 'う', romaji: 'u', mnemonic: 'Un cuerpo encorvado haciendo un esfuerzo ("¡Uuuf!").', example: 'うみ (Umi - Mar)' },
    { system: 'Hiragana', category: 'Básicos', character: 'え', romaji: 'e', mnemonic: 'Una persona corriendo de perfil ("Eh, ¡espera!").', example: 'えん (En - Yen)' },
    { system: 'Hiragana', category: 'Básicos', character: 'お', romaji: 'o', mnemonic: 'Parece la "あ" pero con un punto extra arriba a la derecha.', example: 'おちゃ (Ocha - Té verde)' },
    
    { system: 'Hiragana', category: 'Básicos', character: 'か', romaji: 'ka', mnemonic: 'Un brazo de karateka dando un golpe en el aire.', example: 'かさ (Kasa - Paraguas)' },
    { system: 'Hiragana', category: 'Básicos', character: 'き', romaji: 'ki', mnemonic: 'Una llave antigua dibujada de forma estilizada (Key).', example: 'きもの (Kimono - Vestido trad.)' },
    { system: 'Hiragana', category: 'Básicos', character: 'く', romaji: 'ku', mnemonic: 'El pico abierto de un pájaro cuco diciendo "¡Cu-cú!".', example: 'くるま (Kuruma - Coche)' },
    { system: 'Hiragana', category: 'Básicos', character: 'け', romaji: 'ke', mnemonic: 'Un barril de cerveza con una jarra al lado (Keg).', example: 'けいたい (Keitai - Móvil)' },
    { system: 'Hiragana', category: 'Básicos', character: 'こ', romaji: 'ko', mnemonic: 'Dos trazos paralelos tumbados, como dos cantos rodados.', example: 'こえ (Koe - Voz)' },

    { system: 'Hiragana', category: 'Básicos', character: 'さ', romaji: 'sa', mnemonic: 'Parecido a "き" pero con un solo trazo cruzado superior.', example: 'sakura (さくら - Cerezo)' },
    { system: 'Hiragana', category: 'Básicos', character: 'し', romaji: 'shi', mnemonic: 'Un anzuelo de pescar para coger un "shi-shi-shimi".', example: 'しお (Shio - Sal)' },
    { system: 'Hiragana', category: 'Básicos', character: 'す', romaji: 'su', mnemonic: 'Un columpio dando una vuelta completa sobre el trazo.', example: 'すし (Sushi - Arroz sazonado)' },
    { system: 'Hiragana', category: 'Básicos', character: 'せ', romaji: 'se', mnemonic: 'Un asiento con respaldo visto desde el lateral.', example: 'せんせい (Sensei - Profesor)' },
    { system: 'Hiragana', category: 'Básicos', character: 'そ', romaji: 'so', mnemonic: 'Un zig-zag elegante que acaba en una curva suave.', example: 'そら (Sora - Cielo)' },

    { system: 'Hiragana', category: 'Básicos', character: 'た', romaji: 'ta', mnemonic: 'Parece que deletrea la palabra "TA" usando trazos rectos.', example: 'たまご (Tamago - Huevo)' },
    { system: 'Hiragana', category: 'Básicos', character: 'ち', romaji: 'chi', mnemonic: 'Una cara de perfil con una gran nariz y barbilla redondeada.', example: 'ちず (Chizu - Mapa)' },
    { system: 'Hiragana', category: 'Básicos', character: 'つ', romaji: 'tsu', mnemonic: 'Una gran ola o tsunami rompiendo hacia la derecha.', example: 'つくえ (Tsukue - Escritorio)' },
    { system: 'Hiragana', category: 'Básicos', character: 'て', romaji: 'te', mnemonic: 'Una mano doblada mostrando la palma abierta.', example: 'てがみ (Tegami - Carta)' },
    { system: 'Hiragana', category: 'Básicos', character: 'と', romaji: 'to', mnemonic: 'Un dedo gordo del pie con una espina clavada.', example: 'ともだち (Tomodachi - Amigo)' },

    { system: 'Hiragana', category: 'Básicos', character: 'な', romaji: 'na', mnemonic: 'Una monja rezando arrodillada frente a una cruz.', example: 'なつ (Natsu - Verano)' },
    { system: 'Hiragana', category: 'Básicos', character: 'に', romaji: 'ni', mnemonic: 'Una aguja enhebrando un hilo a la derecha (needle).', example: 'にく (Niku - Carne)' },
    { system: 'Hiragana', category: 'Básicos', character: 'ぬ', romaji: 'nu', mnemonic: 'Fideos retorcidos (noodles) con un nudo en el extremo.', example: 'ぬま (Numa - Pantano)' },
    { system: 'Hiragana', category: 'Básicos', character: 'ne', romaji: 'ne', mnemonic: 'Un gato durmiendo acurrucado con la cola enroscada.', example: 'ねこ (Neko - Gato)' },
    { system: 'Hiragana', category: 'Básicos', character: 'の', romaji: 'no', mnemonic: 'Una señal de prohibido ("¡No!") cruzada elegantemente.', example: 'のりこ (Noriko - Nombre propio)' },

    { system: 'Hiragana', category: 'Básicos', character: 'は', romaji: 'ha', mnemonic: 'Un palo a la izquierda y el número 18 a la derecha.', example: 'はな (Hana - Flor)' },
    { system: 'Hiragana', category: 'Básicos', character: 'ひ', romaji: 'hi', mnemonic: 'Una gran sonrisa burlona riendo "¡Hi-hi-hi!".', example: 'ひと (Hito - Persona)' },
    { system: 'Hiragana', category: 'Básicos', character: 'ふ', romaji: 'fu', mnemonic: 'El perfil de la montaña sagrada del Monte Fuji.', example: 'ふゆ (Fuyu - Invierno)' },
    { system: 'Hiragana', category: 'Básicos', character: 'へ', romaji: 'he', mnemonic: 'Una colina o montaña que tienes que subir jadeando.', example: 'へや (Heya - Habitación)' },
    { system: 'Hiragana', category: 'Básicos', character: 'ほ', romaji: 'ho', mnemonic: 'Parecida a la "は", pero tapada con un sombrero superior.', example: 'ほん (Hon - Libro)' },

    { system: 'Hiragana', category: 'Básicos', character: 'ま', romaji: 'ma', mnemonic: 'Una máscara clásica japonesa con dos bandas en la frente.', example: 'まち (Machi - Ciudad)' },
    { system: 'Hiragana', category: 'Básicos', character: 'み', romaji: 'mi', mnemonic: 'El número 21 girado o un camino de curvas simétricas.', example: 'みず (Mizu - Agua)' },
    { system: 'Hiragana', category: 'Básicos', character: 'む', romaji: 'mu', mnemonic: 'Una vaca mugiendo ("Muu") con un lazo en el lomo.', example: 'むし (Mushi - Insecto)' },
    { system: 'Hiragana', category: 'Básicos', character: 'め', romaji: 'me', mnemonic: 'Un ojo con una pestaña larga ("Me" en japonés es ojo).', example: 'め가네 (Megane - Gafas)' },
    { system: 'Hiragana', category: 'Básicos', character: 'も', romaji: 'mo', mnemonic: 'Un anzuelo doble para pescar más peces ("mo-more").', example: 'もり (Mori - Bosque)' },

    { system: 'Hiragana', category: 'Básicos', character: 'や', romaji: 'ya', mnemonic: 'Un yak de montaña con sus cuernos apuntando arriba.', example: 'やま (Yama - Montaña)' },
    { system: 'Hiragana', category: 'Básicos', character: 'ゆ', romaji: 'yu', mnemonic: 'Un pez nadando de forma ágil que gira sobre sí mismo.', example: 'ゆき (Yuki - Nieve)' },
    { system: 'Hiragana', category: 'Básicos', character: 'よ', romaji: 'yo', mnemonic: 'Un yo-yo atado a tu dedo listo para descender.', example: 'よる (Yoru - Noche)' },

    { system: 'Hiragana', category: 'Básicos', character: 'ら', romaji: 'ra', mnemonic: 'Un astronauta sentado en un cohete espacial.', example: 'らいげつ (Raigetsu - Mes que viene)' },
    { system: 'Hiragana', category: 'Básicos', character: 'り', romaji: 'ri', mnemonic: 'Dos cintas colgando de un árbol de "ri-ritmo".', example: 'りんご (Ringo - Manzana)' },
    { system: 'Hiragana', category: 'Básicos', character: 'る', romaji: 'ru', mnemonic: 'Una ruta serpenteante que termina en un bucle cerrado.', example: 'るす (Rusu - Ausencia)' },
    { system: 'Hiragana', category: 'Básicos', character: 'れ', romaji: 're', mnemonic: 'Una persona descansando tumbada contra una pared.', example: 'れいぞうこ (Reizouko - Nevera)' },
    { system: 'Hiragana', category: 'Básicos', character: 'ろ', romaji: 'ro', mnemonic: 'Igual que "る" pero sin el bucle final (vía despejada).', example: 'ろく (Roku - Seis)' },

    { system: 'Hiragana', category: 'Básicos', character: 'わ', romaji: 'wa', mnemonic: 'Una ola gigante golpeando un muelle alto.', example: 'わたし (Watashi - Yo)' },
    { system: 'Hiragana', category: 'Básicos', character: 'を', romaji: 'o / wo', mnemonic: 'Un deportista saltando una valla olímpica.', example: 'Acompaña al objeto directo.' },
    { system: 'Hiragana', category: 'Básicos', character: 'ん', romaji: 'n', mnemonic: 'La letra "n" minúscula escrita de manera cursiva.', example: 'にほん (Nihon - Japón)' },

    // ==================== HIRAGANA DAKUTEN ====================
    { system: 'Hiragana', category: 'Dakuten', character: 'が', romaji: 'ga', mnemonic: 'El carácter か (ka) modificado con comillas (゛).', example: 'がっkou (Gakkou - Escuela)' },
    { system: 'Hiragana', category: 'Dakuten', character: 'ぎ', romaji: 'gi', mnemonic: 'El carácter き (ki) modificado con comillas (゛).', example: 'ぎんkou (Ginkou - Banco)' },
    { system: 'Hiragana', category: 'Dakuten', character: 'ぐ', romaji: 'gu', mnemonic: 'El carácter く (ku) modificado con comillas (゛).', example: 'ぐあい (Guai - Estado/Salud)' },
    { system: 'Hiragana', category: 'Dakuten', character: 'げ', romaji: 'ge', mnemonic: 'El carácter け (ke) modificado con comillas (゛).', example: 'げんき (Genki - Enérgico)' },
    { system: 'Hiragana', category: 'Dakuten', character: 'ご', romaji: 'go', mnemonic: 'El carácter こ (ko) modificado con comillas (゛).', example: 'ごはん (Gohan - Arroz/Comida)' },
    { system: 'Hiragana', category: 'Dakuten', character: 'ざ', romaji: 'za', mnemonic: 'El carácter さ (sa) modificado con comillas (゛).', example: 'ざっし (Zasshi - Revista)' },
    { system: 'Hiragana', category: 'Dakuten', character: 'じ', romaji: 'ji', mnemonic: 'El carácter し (shi) modificado con comillas (゛).', example: 'じてんしゃ (Jitensha - Bici)' },
    { system: 'Hiragana', category: 'Dakuten', character: 'だ', romaji: 'da', mnemonic: 'El carácter た (ta) modificado con comillas (゛).', example: 'だいがく (Daigaku - Universidad)' },
    { system: 'Hiragana', category: 'Dakuten', character: 'ば', romaji: 'ba', mnemonic: 'El carácter は (ha) modificado con comillas (゛).', example: 'ばんごう (Bangou - Número)' },
    { system: 'Hiragana', category: 'Dakuten', character: 'ぱ', romaji: 'pa', mnemonic: 'El carácter は (ha) modificado con un círculo (゜).', example: 'ぱん (Pan - Pan)' },

    // ==================== HIRAGANA YŌON ====================
    { system: 'Hiragana', category: 'Yōon', character: 'きゃ', romaji: 'kya', mnemonic: 'Combinación de き (ki) + ya pequeño (ゃ).', example: 'きゃく (Kyaku - Cliente)' },
    { system: 'Hiragana', category: 'Yōon', character: 'きゅ', romaji: 'kyu', mnemonic: 'Combinación de き (ki) + yu pequeño (ゅ).', example: 'きゅうり (Kyuuri - Pepino)' },
    { system: 'Hiragana', category: 'Yōon', character: 'きょ', romaji: 'kyo', mnemonic: 'Combinación de き (ki) + yo pequeño (ょ).', example: 'きょねん (Kyonen - Año pasado)' },
    { system: 'Hiragana', category: 'Yōon', character: 'しゃ', romaji: 'sha', mnemonic: 'Combinación de し (shi) + ya pequeño (ゃ).', example: 'しゃしん (Shashin - Foto)' },
    { system: 'Hiragana', category: 'Yōon', character: 'しゅ', romaji: 'shu', mnemonic: 'Combinación de し (shi) + yu pequeño (ゅ).', example: 'しゅくだい (Shukudai - Deberes)' },
    { system: 'Hiragana', category: 'Yōon', character: 'しょ', romaji: 'sho', mnemonic: 'Combinación de し (shi) + yo pequeño (ょ).', example: 'しょくどう (Shokudou - Comedor)' },

    // ==================== KATAKANA BÁSICOS ====================
    { system: 'Katakana', category: 'Básicos', character: 'ア', romaji: 'a', mnemonic: 'Un acantilado afilado visto desde el aire.', example: 'アメリカ (Amerika - EE.UU.)' },
    { system: 'Katakana', category: 'Básicos', character: 'イ', romaji: 'i', mnemonic: 'La silueta de un caballete de pintura inclinado.', example: 'イギリス (Igirisu - Reino Unido)' },
    { system: 'Katakana', category: 'Básicos', character: 'ウ', romaji: 'u', mnemonic: 'Muy similar al hiragana う, pero con trazos rectos y angulosos.', example: 'ウサギ (Usagi - Conejo)' },
    { system: 'Katakana', category: 'Básicos', character: 'エ', romaji: 'e', mnemonic: 'Parece una viga pesada de ingeniería metálica.', example: 'エアコン (Eakon - Aire acond.)' },
    { system: 'Katakana', category: 'Básicos', character: 'オ', romaji: 'o', mnemonic: 'Un gimnasta haciendo un spagat perfecto sobre el suelo.', example: 'オレンジ (Orenji - Naranja)' },
    
    { system: 'Katakana', category: 'Básicos', character: 'カ', romaji: 'ka', mnemonic: 'Prácticamente idéntico al hiragana か, pero sin el trazo suelto.', example: 'カメラ (Kamera - Cámara)' },
    { system: 'Katakana', category: 'Básicos', character: 'キ', romaji: 'ki', mnemonic: 'La parte superior de la llave mnemotécnica del hiragana き.', example: 'ギター (Gitaa - Guitarra)' },
    { system: 'Katakana', category: 'Básicos', character: 'ク', romaji: 'ku', mnemonic: 'Dos trazos limpios que simulan un rincón estrecho.', example: 'クラス (Kurasu - Clase)' },
    { system: 'Katakana', category: 'Básicos', character: 'ケ', romaji: 'ke', mnemonic: 'Líneas limpias que parecen una percha de colgar ropa.', example: 'ケーキ (Keeki - Pastel)' },
    { system: 'Katakana', category: 'Básicos', character: 'コ', romaji: 'ko', mnemonic: 'Una esquina cuadrada incompleta orientada a la derecha.', example: 'コーヒー (Koohii - Café)' },

    { system: 'Katakana', category: 'Básicos', character: 'サ', romaji: 'sa', mnemonic: 'Un cactus desértico con tres brazos puntiagudos.', example: 'サラダ (Sarada - Ensalada)' },
    { system: 'Katakana', category: 'Básicos', character: 'シ', romaji: 'shi', mnemonic: 'Ojo con este: Dos gotas y una línea que sube (cara feliz de lado).', example: 'シャツ (Shatsu - Camisa)' },
    { system: 'Katakana', category: 'Básicos', character: 'ス', romaji: 'su', mnemonic: 'Una percha minimalista con un soporte colgante.', example: 'スーパー (Suupaa - Supermercado)' },
    { system: 'Katakana', category: 'Básicos', character: 'セ', romaji: 'se', mnemonic: 'Casi idéntico al hiragana de pero simplificado y angular.', example: 'セーター (Seetaa - Jersey)' },
    { system: 'Katakana', category: 'Básicos', character: 'ソ', romaji: 'so', mnemonic: 'Una gota vertical que apunta hacia abajo.', example: 'ソフト (Sofuto - Suave)' },

    { system: 'Katakana', category: 'Básicos', character: 'タ', romaji: 'ta', mnemonic: 'Muy similar a "ク" pero con un trazo central adicional.', example: 'タクシー (Takushii - Taxi)' },
    { system: 'Katakana', category: 'Básicos', character: 'チ', romaji: 'chi', mnemonic: 'Parece un poste de teléfono metálico inclinado.', example: 'チーズ (Chiizu - Queso)' },
    { system: 'Katakana', category: 'Básicos', character: 'ツ', romaji: 'tsu', mnemonic: '¡Cuidado! Dos líneas horizontales y un trazo que baja.', example: 'ツアー (Tsuaa - Tour)' },
    { system: 'Katakana', category: 'Básicos', character: 'テ', romaji: 'te', mnemonic: 'Una antena de televisión clásica receptora de señal.', example: 'テレビ (Terebi - Televisión)' },
    { system: 'Katakana', category: 'Básicos', character: 'ト', romaji: 'to', mnemonic: 'Un tótem recto con un soporte lateral derecho.', example: 'トイレ (Toire - Baño)' },

    { system: 'Katakana', category: 'Básicos', character: 'ナ', romaji: 'na', mnemonic: 'Una cruz simple, similar a una espada invertida.', example: 'ナイフ (Naifu - Cuchillo)' },
    { system: 'Katakana', category: 'Básicos', character: 'ニ', romaji: 'ni', mnemonic: 'El kanji del número dos (二). Sencillo.', example: 'ニュース (Nyuusu - Noticias)' },
    { system: 'Katakana', category: 'Básicos', character: 'ヌ', romaji: 'nu', mnemonic: 'Trazos en aspa que recuerdan a un par de palillos cruzados.', example: 'ヌードル (Nuudoru - Fideos)' },
    { system: 'Katakana', category: 'Básicos', character: 'ネ', romaji: 'ne', mnemonic: 'Un caballete con soporte de apoyo lateral izquierdo.', example: 'ネクタイ (Nekutai - Corbata)' },
    { system: 'Katakana', category: 'Básicos', character: 'ノ', romaji: 'no', mnemonic: 'Un trazo oblicuo limpio. Un simple lápiz cayendo.', example: 'ノート (Nooto - Libreta)' },

    { system: 'Katakana', category: 'Básicos', character: 'ハ', romaji: 'ha', mnemonic: 'Dos trazos divergentes como las patas de una mesa.', example: 'ハンバーグ (Hanbaagu - Hamburguesa)' },
    { system: 'Katakana', category: 'Básicos', character: 'ヒ', romaji: 'hi', mnemonic: 'Una cuchara plana vista desde arriba.', example: 'ヒーロー (Hiiroo - Héroe)' },
    { system: 'Katakana', category: 'Básicos', character: 'フ', romaji: 'fu', mnemonic: 'La silueta de una nariz prominente de perfil.', example: 'フランス (Furansu - Francia)' },
    { system: 'Katakana', category: 'Básicos', character: 'へ', romaji: 'he', mnemonic: 'Exactamente idéntico al hiragana へ.', example: 'ヘリコプター (Herikoputaa - Helicóptero)' },
    { system: 'Katakana', category: 'Básicos', character: 'ホ', romaji: 'ho', mnemonic: 'Un árbol frondoso de ramas rectilíneas.', example: 'ホテル (Hoteru - Hotel)' },

    { system: 'Katakana', category: 'Básicos', character: 'マ', romaji: 'ma', mnemonic: 'Un ángulo estrecho que apunta hacia atrás.', example: 'マフラー (Mafuraa - Bufanda)' },
    { system: 'Katakana', category: 'Básicos', character: 'ミ', romaji: 'mi', mnemonic: 'Tres líneas diagonales idénticas (las zarpas de un gato).', example: 'ミルク (Miruku - Leche)' },
    { system: 'Katakana', category: 'Básicos', character: 'ム', romaji: 'mu', mnemonic: 'Un triángulo que ha perdido su base.', example: 'ムード (Muudo - Ambiente)' },
    { system: 'Katakana', category: 'Básicos', character: 'メ', romaji: 'me', mnemonic: 'Un aspa perfecta con el trazo principal alargado.', example: 'メール (Meeru - Correo)' },
    { system: 'Katakana', category: 'Básicos', character: 'モ', romaji: 'mo', mnemonic: 'Muy similar al hiragana も pero con ángulos rectos.', example: 'モデル (Moderu - Modelo)' },

    { system: 'Katakana', category: 'Básicos', character: 'ヤ', romaji: 'ya', mnemonic: 'Idéntico al hiragana ya simplificado sin trazo flotante.', example: 'ヤマ (Yama - Nombre propio)' },
    { system: 'Katakana', category: 'Básicos', character: 'ユ', romaji: 'yu', mnemonic: 'La silueta de un vaso de precipitados inclinado.', example: 'ユニフォーム (Yunifoomu - Uniforme)' },
    { system: 'Katakana', category: 'Básicos', character: 'ヨ', romaji: 'yo', mnemonic: 'Una estantería de libros vacía con tres baldas.', example: 'ヨーグルト (Yooguruto - Yogur)' },

    { system: 'Katakana', category: 'Básicos', character: 'ら', romaji: 'ra', mnemonic: 'Una señal de tráfico o semáforo cuadrado.', example: 'ラジオ (Rajio - Radio)' },
    { system: 'Katakana', category: 'Básicos', character: 'リ', romaji: 'ri', mnemonic: 'Prácticamente idéntico al hiragana り.', example: 'りんご (Ringo - Manzana)' },
    { system: 'Katakana', category: 'Básicos', character: 'ル', romaji: 'ru', mnemonic: 'Un compás de dibujo abierto marcando un arco.', example: 'ルール (Ruuru - Regla)' },
    { system: 'Katakana', category: 'Básicos', character: 'レ', romaji: 're', mnemonic: 'La pierna trasera de una persona corriendo al trote.', example: 'レモン (Remon - Limón)' },
    { system: 'Katakana', category: 'Básicos', character: 'ロ', romaji: 'ro', mnemonic: 'Un cuadro perfecto. Una caja o regalo rectangular.', example: 'ロボット (Robotto - Robot)' },

    { system: 'Katakana', category: 'Básicos', character: 'ワ', romaji: 'wa', mnemonic: 'Como "ウ" pero sin la antena de arriba.', example: 'ワイン (Wain - Vino)' },
    { system: 'Katakana', category: 'Básicos', character: 'ヲ', romaji: 'o / wo', mnemonic: 'Una línea horizontal rota con soporte oblicuo.', example: 'Uso arcaico / partículas gramaticales.' },
    { system: 'Katakana', category: 'Básicos', character: 'ン', romaji: 'n', mnemonic: '¡Ojo! Una sola gota casi horizontal y trazo que sube.', example: 'ラーメン (Raamen - Fideos Ramen)' },

    // ==================== KATAKANA DAKUTEN ====================
    { system: 'Katakana', category: 'Dakuten', character: 'ガ', romaji: 'ga', mnemonic: 'El carácter カ (ka) modificado con comillas (゛).', example: 'ガラス (Garasu - Vidrio)' },
    { system: 'Katakana', category: 'Dakuten', character: 'ギ', romaji: 'gi', mnemonic: 'El carácter キ (ki) modificado con comillas (゛).', example: 'ギター (Gitaa - Guitarra)' },
    { system: 'Katakana', category: 'Dakuten', character: 'グ', romaji: 'gu', mnemonic: 'El carácter ク (ku) modificado con comillas (゛).', example: 'グラム (Guramu - Gramo)' },
    { system: 'Katakana', category: 'Dakuten', character: 'ゲ', romaji: 'ge', mnemonic: 'El carácter ケ (ke) modificado con comillas (゛).', example: 'ゲーム (Geemu - Juego)' },
    { system: 'Katakana', category: 'Dakuten', character: 'ゴ', romaji: 'go', mnemonic: 'El carácter コ (ko) modificado con comillas (゛).', example: 'ゴルフ (Gorufu - Golf)' },
    { system: 'Katakana', category: 'Dakuten', character: 'ザ', romaji: 'za', mnemonic: 'El carácter サ (sa) modificado con comillas (゛).', example: 'デザイン (Dezain - Diseño)' },
    { system: 'Katakana', category: 'Dakuten', character: 'ジ', romaji: 'ji', mnemonic: 'El carácter シ (shi) modificado con comillas (゛).', example: 'ビジネス (Bijinesu - Negocios)' },
    { system: 'Katakana', category: 'Dakuten', character: 'ダ', romaji: 'da', mnemonic: 'El carácter タ (ta) modificado con comillas (゛).', example: 'ダンス (Dansu - Baile)' },
    { system: 'Katakana', category: 'Dakuten', character: 'バ', romaji: 'ba', mnemonic: 'El carácter ハ (ha) modificado con comillas (゛).', example: 'バッグ (Baggu - Bolsa)' },
    { system: 'Katakana', category: 'Dakuten', character: 'パ', romaji: 'pa', mnemonic: 'El carácter ハ (ha) modificado con un círculo (゜).', example: 'パスポート (Pasupooto - Pasaporte)' },

    // ==================== KATAKANA YŌON ====================
    { system: 'Katakana', category: 'Yōon', character: 'キャ', romaji: 'kya', mnemonic: 'Combinación de キ (ki) + ya pequeño (ャ).', example: 'キャベツ (Kyabetsu - Repollo)' },
    { system: 'Katakana', category: 'Yōon', character: 'キュ', romaji: 'kyu', mnemonic: 'Combinación de キ (ki) + yu pequeño (ュ).', example: 'キューバ (Kyuuba - Cuba)' },
    { system: 'Katakana', category: 'Yōon', character: 'キョ', romaji: 'kyo', mnemonic: 'Combinación de キ (ki) + yo pequeño (ョ).', example: 'キョウト (Kyouto - Kioto)' },
    { system: 'Katakana', category: 'Yōon', character: 'シャ', romaji: 'sha', mnemonic: 'Combinación de シ (shi) + ya pequeño (ャ).', example: 'シャンプー (Shanpuu - Champú)' },
    { system: 'Katakana', category: 'Yōon', character: 'シュ', romaji: 'shu', mnemonic: 'Combinación de シ (shi) + yu pequeño (ュ).', example: 'シュート (Shuuto - Disparo/Gol)' },
    { system: 'Katakana', category: 'Yōon', character: 'ショ', romaji: 'sho', mnemonic: 'Combinación de シ (shi) + yo pequeño (ョ).', example: 'ショック (Shokku - Impacto)' }
];

// === IMPLEMENTACIÓN DE ALGORITMO FISHER-YATES (TRUE RANDOM) ===
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

let db = []; // Base de datos dinámica para las preguntas mezcladas
let questions = [], totalLimit = 25, currentIdx = 0, score = 0, history = [], isFinished = false;

// === GENERADOR DINÁMICO DE PREGUNTAS MEJORADO CON FISHER-YATES ===
function generateDatabase(selectedSystem, selectedCategory) {
    db = [];
    
    // 1. Filtrar lista de caracteres según preferencias del usuario
    let filteredList = [...kanaList];
    
    if (selectedSystem !== 'Ambos') {
        filteredList = filteredList.filter(k => k.system === selectedSystem);
    }
    
    if (selectedCategory !== 'Todos') {
        filteredList = filteredList.filter(k => k.category === selectedCategory);
    }

    // Si por algún motivo la selección es vacía, cargamos todo por seguridad
    if (filteredList.length === 0) {
        filteredList = [...kanaList];
    }

    // 2. Generar preguntas para la lista filtrada
    filteredList.forEach(item => {
        // MODALIDAD 1: Lectura (Carácter -> Rōmaji)
        let otherRomajis = filteredList
            .filter(k => k.romaji !== item.romaji)
            .map(k => k.romaji);
        
        // Obtener elementos únicos y mezclarlos con Fisher-Yates
        otherRomajis = [...new Set(otherRomajis)];
        let wrongRomajis = shuffleArray(otherRomajis).slice(0, 3);
        
        // Si no hay suficientes distractores del mismo grupo filtrado, usar el pool completo
        if (wrongRomajis.length < 3) {
            let backupRomajis = [...new Set(kanaList.filter(k => k.romaji !== item.romaji).map(k => k.romaji))];
            wrongRomajis = shuffleArray(backupRomajis).slice(0, 3);
        }
        
        // Crear opciones y mezclarlas equitativamente
        let optionsReading = [
            { text: item.romaji, correct: true },
            { text: wrongRomajis[0] || '?', correct: false },
            { text: wrongRomajis[1] || '?', correct: false },
            { text: wrongRomajis[2] || '?', correct: false }
        ];

        db.push({
            type: 'reading',
            character: item.character,
            system: item.system,
            q: `¿Cuál es el rōmaji correcto para este carácter (${item.system})?`,
            options: shuffleArray(optionsReading),
            answer: item.romaji,
            help: `Ejemplo: ${item.example}`
        });

        // MODALIDAD 2: Búsqueda (Rōmaji -> Carácter)
        let otherKanas = filteredList
            .filter(k => k.character !== item.character && k.system === item.system)
            .map(k => k.character);
            
        otherKanas = [...new Set(otherKanas)];
        let wrongKanas = shuffleArray(otherKanas).slice(0, 3);

        // Backup de distractores si la categoría filtrada es muy pequeña
        if (wrongKanas.length < 3) {
            let backupKanas = [...new Set(kanaList.filter(k => k.character !== item.character && k.system === item.system).map(k => k.character))];
            wrongKanas = shuffleArray(backupKanas).slice(0, 3);
        }

        let optionsSearch = [
            { text: item.character, correct: true },
            { text: wrongKanas[0] || '?', correct: false },
            { text: wrongKanas[1] || '?', correct: false },
            { text: wrongKanas[2] || '?', correct: false }
        ];

        db.push({
            type: 'search',
            character: '?', // Ocultar en pantalla
            system: item.system,
            q: `Encuentra el carácter correspondiente al sonido "${item.romaji}" (${item.system})`,
            options: shuffleArray(optionsSearch),
            answer: item.character,
            help: `Mnemotecnia: ${item.mnemonic}`
        });
    });
}

// === LÓGICA DEL JUEGO ===
function startGame() {
    const systemSelect = document.getElementById('quiz-system').value;
    const categorySelect = document.getElementById('quiz-category').value;
    const limitSelect = document.getElementById('num-questions').value;
    
    // Generamos la base de datos aplicando la primera capa de aleatoriedad y filtros
    generateDatabase(systemSelect, categorySelect);
    
    // Barajamos todo el pool de preguntas usando Fisher-Yates
    let pool = shuffleArray(db);
    
    totalLimit = limitSelect === "all" ? pool.length : parseInt(limitSelect);
    questions = pool.slice(0, Math.min(totalLimit, pool.length));
    
    // Reiniciar variables de juego
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
    
    // Renderizar el visualizador gigante central
    const displayContainer = document.getElementById('kana-display-container');
    const displayEl = document.getElementById('kana-display');
    const badgeEl = document.getElementById('system-badge');
    
    if (q.character === '?') {
        displayContainer.classList.add('hidden'); // Ocultar para preguntas donde la respuesta es el kana
    } else {
        displayContainer.classList.remove('hidden');
        displayEl.textContent = q.character;
        badgeEl.textContent = q.system;
        
        // Efecto visual premium de entrada
        displayEl.style.transform = 'scale(0.85)';
        displayEl.style.opacity = '0';
        setTimeout(() => {
            displayEl.style.transform = 'scale(1)';
            displayEl.style.opacity = '1';
        }, 50);
    }

    document.getElementById('question').textContent = q.q;
    
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    
    // Si las opciones son de longitud corta (como un sonido único), aumentamos la fuente
    const isShortOption = q.options[0].text.length <= 4;

    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.textContent = opt.text;
        btn.className = `w-full text-center p-4 rounded-xl border border-slate-200 btn-option transition-all font-semibold text-slate-700 focus:outline-none select-none bg-white ${isShortOption ? 'text-2xl font-bold' : 'text-sm sm:text-base'}`;
        
        btn.onclick = () => {
            const isCorrect = opt.correct;
            history.push({ 
                q: q.q, 
                char: q.character !== '?' ? q.character : opt.text,
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
    
    // Si el usuario decide finalizar antes de tiempo, rellenamos el historial vacío
    while (history.length < questions.length) {
        const q = questions[history.length];
        history.push({ q: q.q, char: q.character, ans: "---", corr: q.answer, ok: false, help: q.help });
    }
    
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    document.getElementById('final-score').textContent = `${score} / ${questions.length * 10} pts`;
    
    document.getElementById('log').innerHTML = history.map((h, i) => `
        <div class="mb-3 p-4 border-b border-amber-100/50 ${h.ok ? 'text-emerald-700 bg-emerald-50/50' : 'text-red-700 bg-red-50/30'} rounded-xl">
            <span class="font-bold text-slate-600 block mb-1">Pregunta ${i+1}: ${h.q}</span>
            <div class="text-sm mt-1 flex flex-col gap-1">
                ${h.char !== '?' ? `<span class="text-xl font-black text-[#d1513c]">${h.char}</span>` : ''}
                <div><strong>Tu Respuesta:</strong> <span class="${h.ok ? 'text-emerald-600 font-bold' : 'text-red-600 font-semibold'}">${h.ans}</span>${h.ok ? ' ✓' : ''}</div>
                ${!h.ok ? `<div><strong class="text-slate-700">Respuesta Correcta:</strong> <span class="text-emerald-600 font-bold">${h.corr}</span></div>` : ''}
            </div>
            <div class="text-xs text-slate-500 mt-2 italic bg-amber-50/30 p-2 rounded-lg border border-amber-100/30">
                ${h.help}
            </div>
        </div>`).join('');
}