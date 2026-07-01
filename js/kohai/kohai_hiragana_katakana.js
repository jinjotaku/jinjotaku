 // === BASE DE DATOS DE HIRAGANA Y KATAKANA COMPLETADA ===
        const kanaData = [
            // ==================== HIRAGANA BÁSICOS ====================
            { system: 'hiragana', category: 'Básicos', character: 'あ', romaji: 'a', mnemonic: 'La "A" de "Árbol" con una cruz y su copa redondeada.', example: 'あさ (Asa - Mañana)' },
            { system: 'hiragana', category: 'Básicos', character: 'い', romaji: 'i', mnemonic: 'Dos bastones paralelos, el de la izquierda tiene un gancho.', example: 'いぬ (Inu - Perro)' },
            { system: 'hiragana', category: 'Básicos', character: 'う', romaji: 'u', mnemonic: 'Un cuerpo encorvado haciendo un esfuerzo ("¡Uuuf!").', example: 'うみ (Umi - Mar)' },
            { system: 'hiragana', category: 'Básicos', character: 'え', romaji: 'e', mnemonic: 'Una persona corriendo de perfil ("Eh, ¡espera!").', example: 'えん (En - Yen)' },
            { system: 'hiragana', category: 'Básicos', character: 'お', romaji: 'o', mnemonic: 'Parece la "あ" pero con un punto extra arriba a la derecha.', example: 'おちゃ (Ocha - Té verde)' },
            
            { system: 'hiragana', category: 'Básicos', character: 'か', romaji: 'ka', mnemonic: 'Un brazo de karateka dando un golpe en el aire.', example: 'かさ (Kasa - Paraguas)' },
            { system: 'hiragana', category: 'Básicos', character: 'き', romaji: 'ki', mnemonic: 'Una llave antigua dibujada de forma estilizada (Key).', example: 'きもの (Kimono - Vestido trad.)' },
            { system: 'hiragana', category: 'Básicos', character: 'く', romaji: 'ku', mnemonic: 'El pico abierto de un pájaro cuco diciendo "¡Cu-cú!".', example: 'くるま (Kuruma - Coche)' },
            { system: 'hiragana', category: 'Básicos', character: 'け', romaji: 'ke', mnemonic: 'Un barril de cerveza con una jarra al lado (Keg).', example: 'けいたい (Keitai - Móvil)' },
            { system: 'hiragana', category: 'Básicos', character: 'こ', romaji: 'ko', mnemonic: 'Dos trazos paralelos tumbados, como dos cantos rodados.', example: 'こえ (Koe - Voz)' },

            { system: 'hiragana', category: 'Básicos', character: 'さ', romaji: 'sa', mnemonic: 'Parecido a "き" pero con un solo trazo cruzado superior.', example: 'さくら (Sakura - Cerezo)' },
            { system: 'hiragana', category: 'Básicos', character: 'し', romaji: 'shi', mnemonic: 'Un anzuelo de pescar para coger un "shi-shi-shimi".', example: 'しお (Shio - Sal)' },
            { system: 'hiragana', category: 'Básicos', character: 'す', romaji: 'su', mnemonic: 'Un columpio dando una vuelta completa sobre el trazo.', example: 'すし (Sushi - Arroz sazonado)' },
            { system: 'hiragana', category: 'Básicos', character: 'せ', romaji: 'se', mnemonic: 'Un asiento con respaldo visto desde el lateral.', example: 'せんせい (Sensei - Profesor)' },
            { system: 'hiragana', category: 'Básicos', character: 'そ', romaji: 'so', mnemonic: 'Un zig-zag elegante que acaba en una curva suave.', example: 'そら (Sora - Cielo)' },

            { system: 'hiragana', category: 'Básicos', character: 'た', romaji: 'ta', mnemonic: 'Parece que deletrea la palabra "TA" usando trazos rectos.', example: 'たまご (Tamago - Huevo)' },
            { system: 'hiragana', category: 'Básicos', character: 'ち', romaji: 'chi', mnemonic: 'Una cara de perfil con una gran nariz y barbilla redondeada.', example: 'ちず (Chizu - Mapa)' },
            { system: 'hiragana', category: 'Básicos', character: 'つ', romaji: 'tsu', mnemonic: 'Una gran ola o tsunami rompiendo hacia la derecha.', example: 'つくえ (Tsukue - Escritorio)' },
            { system: 'hiragana', category: 'Básicos', character: 'て', romaji: 'te', mnemonic: 'Una mano doblada mostrando la palma abierta.', example: 'てがみ (Tegami - Carta)' },
            { system: 'hiragana', category: 'Básicos', character: 'と', romaji: 'to', mnemonic: 'Un dedo gordo del pie con una espina clavada.', example: 'ともだち (Tomodachi - Amigo)' },

            { system: 'hiragana', category: 'Básicos', character: 'な', romaji: 'na', mnemonic: 'Una monja rezando arrodillada frente a una cruz.', example: 'なつ (Natsu - Verano)' },
            { system: 'hiragana', category: 'Básicos', character: 'に', romaji: 'ni', mnemonic: 'Una aguja enhebrando un hilo a la derecha (needle).', example: 'にく (Niku - Carne)' },
            { system: 'hiragana', category: 'Básicos', character: 'ぬ', romaji: 'nu', mnemonic: 'Fideos retorcidos (noodles) con un nudo en el extremo.', example: 'ぬま (Numa - Pantano)' },
            { system: 'hiragana', category: 'Básicos', character: 'ね', romaji: 'ne', mnemonic: 'Un gato durmiendo acurrucado con la cola enroscada.', example: 'ねこ (Neko - Gato)' },
            { system: 'hiragana', category: 'Básicos', character: 'の', romaji: 'no', mnemonic: 'Una señal de prohibido ("¡No!") cruzada elegantemente.', example: 'のりこ (Noriko - Nombre propio)' },

            { system: 'hiragana', category: 'Básicos', character: 'は', romaji: 'ha', mnemonic: 'Un palo a la izquierda y el número 18 a la derecha.', example: 'はな (Hana - Flor)' },
            { system: 'hiragana', category: 'Básicos', character: 'ひ', romaji: 'hi', mnemonic: 'Una gran sonrisa burlona riendo "¡Hi-hi-hi!".', example: 'ひと (Hito - Persona)' },
            { system: 'hiragana', category: 'Básicos', character: 'ふ', romaji: 'fu', mnemonic: 'El perfil de la montaña sagrada del Monte Fuji.', example: 'ふゆ (Fuyu - Invierno)' },
            { system: 'hiragana', category: 'Básicos', character: 'へ', romaji: 'he', mnemonic: 'Una colina o montaña que tienes que subir jadeando.', example: 'へや (Heya - Habitación)' },
            { system: 'hiragana', category: 'Básicos', character: 'ほ', romaji: 'ho', mnemonic: 'Parecida a la "は", pero tapada con un sombrero superior.', example: 'ほん (Hon - Libro)' },

            { system: 'hiragana', category: 'Básicos', character: 'ま', romaji: 'ma', mnemonic: 'Una máscara clásica japonesa con dos bandas en la frente.', example: 'まち (Machi - Ciudad)' },
            { system: 'hiragana', category: 'Básicos', character: 'み', romaji: 'mi', mnemonic: 'El número 21 girado o un camino de curvas simétricas.', example: 'みず (Mizu - Agua)' },
            { system: 'hiragana', category: 'Básicos', character: 'む', romaji: 'mu', mnemonic: 'Una vaca mugiendo ("Muu") con un lazo en el lomo.', example: 'むし (Mushi - Insecto)' },
            { system: 'hiragana', category: 'Básicos', character: 'め', romaji: 'me', mnemonic: 'Un ojo con una pestaña larga ("Me" en japonés es ojo).', example: 'めがね (Megane - Gafas)' },
            { system: 'hiragana', category: 'Básicos', character: 'も', romaji: 'mo', mnemonic: 'Un anzuelo doble para pescar más peces ("mo-more").', example: 'もり (Mori - Bosque)' },

            { system: 'hiragana', category: 'Básicos', character: 'や', romaji: 'ya', mnemonic: 'Un yak de montaña con sus cuernos apuntando arriba.', example: 'やま (Yama - Montaña)' },
            { system: 'hiragana', category: 'Básicos', character: 'ゆ', romaji: 'yu', mnemonic: 'Un pez nadando de forma ágil que gira sobre sí mismo.', example: 'ゆき (Yuki - Nieve)' },
            { system: 'hiragana', category: 'Básicos', character: 'よ', romaji: 'yo', mnemonic: 'Un yo-yo atado a tu dedo listo para descender.', example: 'よる (Yoru - Noche)' },

            { system: 'hiragana', category: 'Básicos', character: 'ら', romaji: 'ra', mnemonic: 'Un astronauta sentado en un cohete espacial.', example: 'らいげつ (Raigetsu - Mes que viene)' },
            { system: 'hiragana', category: 'Básicos', character: 'り', romaji: 'ri', mnemonic: 'Dos cintas colgando de un árbol de "ri-ritmo".', example: 'りんご (Ringo - Manzana)' },
            { system: 'hiragana', category: 'Básicos', character: 'る', romaji: 'ru', mnemonic: 'Una ruta serpenteante que termina en un bucle cerrado.', example: 'るす (Rusu - Ausencia)' },
            { system: 'hiragana', category: 'Básicos', character: 'れ', romaji: 're', mnemonic: 'Una persona descansando tumbada contra una pared.', example: 'れいぞうこ (Reizouko - Nevera)' },
            { system: 'hiragana', category: 'Básicos', character: 'ろ', romaji: 'ro', mnemonic: 'Igual que "る" pero sin el bucle final (vía despejada).', example: 'ろく (Roku - Seis)' },

            { system: 'hiragana', category: 'Básicos', character: 'わ', romaji: 'wa', mnemonic: 'Una ola gigante golpeando un muelle alto.', example: 'わたし (Watashi - Yo)' },
            { system: 'hiragana', category: 'Básicos', character: 'を', romaji: 'o / wo', mnemonic: 'Un deportista saltando una valla olímpica.', example: 'Acompaña al objeto directo.' },
            { system: 'hiragana', category: 'Básicos', character: 'ん', romaji: 'n', mnemonic: 'La letra "n" minúscula escrita de manera cursiva.', example: 'にほん (Nihon - Japón)' },

            // ==================== HIRAGANA DAKUTEN ====================
            { system: 'hiragana', category: 'Dakuten', character: 'が', romaji: 'ga', mnemonic: 'El carácter か (ka) modificado con comillas (゛).', example: 'がっこう (Gakkou - Escuela)' },
            { system: 'hiragana', category: 'Dakuten', character: 'ぎ', romaji: 'gi', mnemonic: 'El carácter き (ki) modificado con comillas (゛).', example: 'ぎんこう (Ginkou - Banco)' },
            { system: 'hiragana', category: 'Dakuten', character: 'ぐ', romaji: 'gu', mnemonic: 'El carácter く (ku) modificado con comillas (゛).', example: 'ぐあい (Guai - Estado/Salud)' },
            { system: 'hiragana', category: 'Dakuten', character: 'げ', romaji: 'ge', mnemonic: 'El carácter け (ke) modificado con comillas (゛).', example: 'げんき (Genki - Enérgico)' },
            { system: 'hiragana', category: 'Dakuten', character: 'ご', romaji: 'go', mnemonic: 'El carácter こ (ko) modificado con comillas (゛).', example: 'ごはん (Gohan - Arroz/Comida)' },
            { system: 'hiragana', category: 'Dakuten', character: 'ざ', romaji: 'za', mnemonic: 'El carácter さ (sa) modificado con comillas (゛).', example: 'ざっし (Zasshi - Revista)' },
            { system: 'hiragana', category: 'Dakuten', character: 'じ', romaji: 'ji', mnemonic: 'El carácter し (shi) modificado con comillas (゛).', example: 'じてんしゃ (Jitensha - Bici)' },
            { system: 'hiragana', category: 'Dakuten', character: 'だ', romaji: 'da', mnemonic: 'El carácter た (ta) modificado con comillas (゛).', example: 'だいがく (Daigaku - Universidad)' },
            { system: 'hiragana', category: 'Dakuten', character: 'ば', romaji: 'ba', mnemonic: 'El carácter は (ha) modificado con comillas (゛).', example: 'ばんごう (Bangou - Número)' },
            { system: 'hiragana', category: 'Dakuten', character: 'ぱ', romaji: 'pa', mnemonic: 'El carácter は (ha) modificado con un círculo (゜).', example: 'ぱん (Pan - Pan)' },

            // ==================== HIRAGANA YŌON ====================
            { system: 'hiragana', category: 'Yōon', character: 'きゃ', romaji: 'kya', mnemonic: 'Combinación de き (ki) + ya pequeño (ゃ).', example: 'きゃく (Kyaku - Cliente)' },
            { system: 'hiragana', category: 'Yōon', character: 'きゅ', romaji: 'kyu', mnemonic: 'Combinación de き (ki) + yu pequeño (ゅ).', example: 'きゅうり (Kyuuri - Pepino)' },
            { system: 'hiragana', category: 'Yōon', character: 'きょ', romaji: 'kyo', mnemonic: 'Combinación de き (ki) + yo pequeño (ょ).', example: 'きょねん (Kyonen - Año pasado)' },
            { system: 'hiragana', category: 'Yōon', character: 'しゃ', romaji: 'sha', mnemonic: 'Combinación de し (shi) + ya pequeño (ゃ).', example: 'しゃしん (Shashin - Foto)' },
            { system: 'hiragana', category: 'Yōon', character: 'しゅ', romaji: 'shu', mnemonic: 'Combinación de し (shi) + yu pequeño (ゅ).', example: 'しゅくだい (Shukudai - Deberes)' },
            { system: 'hiragana', category: 'Yōon', character: 'しょ', romaji: 'sho', mnemonic: 'Combinación de し (shi) + yo pequeño (ょ).', example: 'しょくどう (Shokudou - Comedor)' },

            // ==================== KATAKANA BÁSICOS ====================
            { system: 'katakana', category: 'Básicos', character: 'ア', romaji: 'a', mnemonic: 'Un acantilado afilado visto desde el aire.', example: 'アメリカ (Amerika - EE.UU.)' },
            { system: 'katakana', category: 'Básicos', character: 'イ', romaji: 'i', mnemonic: 'La silueta de un caballete de pintura inclinado.', example: 'イギリス (Igirisu - Reino Unido)' },
            { system: 'katakana', category: 'Básicos', character: 'ウ', romaji: 'u', mnemonic: 'Muy similar al hiragana う, pero con trazos rectos y angulosos.', example: 'ウサギ (Usagi - Conejo)' },
            { system: 'katakana', category: 'Básicos', character: 'エ', romaji: 'e', mnemonic: 'Parece una viga pesada de ingeniería metálica.', example: 'エアコン (Eakon - Aire acond.)' },
            { system: 'katakana', category: 'Básicos', character: 'オ', romaji: 'o', mnemonic: 'Un gimnasta haciendo un spagat perfecto sobre el suelo.', example: 'オレンジ (Orenji - Naranja)' },
            
            { system: 'katakana', category: 'Básicos', character: 'カ', romaji: 'ka', mnemonic: 'Prácticamente idéntico al hiragana か, pero sin el trazo suelto.', example: 'カメラ (Kamera - Cámara)' },
            { system: 'katakana', category: 'Básicos', character: 'キ', romaji: 'ki', mnemonic: 'La parte superior de la llave mnemotécnica del hiragana き.', example: 'ギター (Gitaa - Guitarra)' },
            { system: 'katakana', category: 'Básicos', character: 'ク', romaji: 'ku', mnemonic: 'Dos trazos limpios que simulan un rincón estrecho.', example: 'クラス (Kurasu - Clase)' },
            { system: 'katakana', category: 'Básicos', character: 'ケ', romaji: 'ke', mnemonic: 'Líneas limpias que parecen una percha de colgar ropa.', example: 'ケーキ (Keeki - Pastel)' },
            { system: 'katakana', category: 'Básicos', character: 'コ', romaji: 'ko', mnemonic: 'Una esquina cuadrada incompleta orientada a la derecha.', example: 'コーヒー (Koohii - Café)' },

            { system: 'katakana', category: 'Básicos', character: 'サ', romaji: 'sa', mnemonic: 'Un cactus desértico con tres brazos puntiagudos.', example: 'サラダ (Sarada - Ensalada)' },
            { system: 'katakana', category: 'Básicos', character: 'シ', romaji: 'shi', mnemonic: 'Ojo con este: Dos gotas y una línea que sube (cara feliz de lado).', example: 'シャツ (Shatsu - Camisa)' },
            { system: 'katakana', category: 'Básicos', character: 'ス', romaji: 'su', mnemonic: 'Una percha minimalista con un soporte colgante.', example: 'スーパー (Suupaa - Supermercado)' },
            { system: 'katakana', category: 'Básicos', character: 'セ', romaji: 'se', mnemonic: 'Casi idéntico al hiragana de pero simplificado y angular.', example: 'セーター (Seetaa - Jersey)' },
            { system: 'katakana', category: 'Básicos', character: 'ソ', romaji: 'so', mnemonic: 'Una gota vertical que apunta hacia abajo.', example: 'ソフト (Sofuto - Suave)' },

            { system: 'katakana', category: 'Básicos', character: 'タ', romaji: 'ta', mnemonic: 'Muy similar a "ク" pero con un trazo central adicional.', example: 'タクシー (Takushii - Taxi)' },
            { system: 'katakana', category: 'Básicos', character: 'チ', romaji: 'chi', mnemonic: 'Parece un poste de teléfono metálico inclinado.', example: 'チーズ (Chiizu - Queso)' },
            { system: 'katakana', category: 'Básicos', character: 'ツ', romaji: 'tsu', mnemonic: '¡Cuidado! Dos líneas horizontales y un trazo que baja.', example: 'ツアー (Tsuaa - Tour)' },
            { system: 'katakana', category: 'Básicos', character: 'テ', romaji: 'te', mnemonic: 'Una antena de televisión clásica receptora de señal.', example: 'テレビ (Terebi - Televisión)' },
            { system: 'katakana', category: 'Básicos', character: 'ト', romaji: 'to', mnemonic: 'Un tótem recto con un soporte lateral derecho.', example: 'トイレ (Toire - Baño)' },

            { system: 'katakana', category: 'Básicos', character: 'ナ', romaji: 'na', mnemonic: 'Una cruz simple, similar a una espada invertida.', example: 'ナイフ (Naifu - Cuchillo)' },
            { system: 'katakana', category: 'Básicos', character: 'ニ', romaji: 'ni', mnemonic: 'El kanji del número dos (二). Sencillo.', example: 'ニュース (Nyuusu - Noticias)' },
            { system: 'katakana', category: 'Básicos', character: 'ヌ', romaji: 'nu', mnemonic: 'Trazos en aspa que recuerdan a un par de palillos cruzados.', example: 'ヌードル (Nuudoru - Fideos)' },
            { system: 'katakana', category: 'Básicos', character: 'ネ', romaji: 'ne', mnemonic: 'Un caballete con soporte de apoyo lateral izquierdo.', example: 'ネクタイ (Nekutai - Corbata)' },
            { system: 'katakana', category: 'Básicos', character: 'ノ', romaji: 'no', mnemonic: 'Un trazo oblicuo limpio. Un simple lápiz cayendo.', example: 'ノート (Nooto - Libreta)' },

            { system: 'katakana', category: 'Básicos', character: 'ハ', romaji: 'ha', mnemonic: 'Dos trazos divergentes como las patas de una mesa.', example: 'ハンバーグ (Hanbaagu - Hamburguesa)' },
            { system: 'katakana', category: 'Básicos', character: 'ヒ', romaji: 'hi', mnemonic: 'Una cuchara plana vista desde arriba.', example: 'ヒーロー (Hiiroo - Héroe)' },
            { system: 'katakana', category: 'Básicos', character: 'フ', romaji: 'fu', mnemonic: 'La silueta de una nariz prominente de perfil.', example: 'フランス (Furansu - Francia)' },
            { system: 'katakana', category: 'Básicos', character: 'ヘ', romaji: 'he', mnemonic: 'Exactamente idéntico al hiragana へ.', example: 'ヘリコプター (Herikoputaa - Helicóptero)' },
            { system: 'katakana', category: 'Básicos', character: 'ホ', romaji: 'ho', mnemonic: 'Un árbol frondoso de ramas rectilíneas.', example: 'ホテル (Hoteru - Hotel)' },

            { system: 'katakana', category: 'Básicos', character: 'マ', romaji: 'ma', mnemonic: 'Un ángulo estrecho que apunta hacia atrás.', example: 'マフラー (Mafuraa - Bufanda)' },
            { system: 'katakana', category: 'Básicos', character: 'ミ', romaji: 'mi', mnemonic: 'Tres líneas diagonales idénticas (las zarpas de un gato).', example: 'ミルク (Miruku - Leche)' },
            { system: 'katakana', category: 'Básicos', character: 'ム', romaji: 'mu', mnemonic: 'Un triángulo que ha perdido su base.', example: 'ムード (Muudo - Ambiente)' },
            { system: 'katakana', category: 'Básicos', character: 'メ', romaji: 'me', mnemonic: 'Un aspa perfecta con el trazo principal alargado.', example: 'メール (Meeru - Correo)' },
            { system: 'katakana', category: 'Básicos', character: 'モ', romaji: 'mo', mnemonic: 'Muy similar al hiragana も pero con ángulos rectos.', example: 'モデル (Moderu - Modelo)' },

            { system: 'katakana', category: 'Básicos', character: 'ヤ', romaji: 'ya', mnemonic: 'Idéntico al hiragana ya simplificado sin trazo flotante.', example: 'ヤマ (Yama - Nombre propio)' },
            { system: 'katakana', category: 'Básicos', character: 'ユ', romaji: 'yu', mnemonic: 'La silueta de un vaso de precipitados inclinado.', example: 'ユニフォーム (Yunifoomu - Uniforme)' },
            { system: 'katakana', category: 'Básicos', character: 'ヨ', romaji: 'yo', mnemonic: 'Una estantería de libros vacía con tres baldas.', example: 'ヨーグルト (Yooguruto - Yogur)' },

            { system: 'katakana', category: 'Básicos', character: 'ラ', romaji: 'ra', mnemonic: 'Una señal de tráfico o semáforo cuadrado.', example: 'ラジオ (Rajio - Radio)' },
            { system: 'katakana', category: 'Básicos', character: 'リ', romaji: 'ri', mnemonic: 'Prácticamente idéntico al hiragana り.', example: 'リンゴ (Ringo - Manzana)' },
            { system: 'katakana', category: 'Básicos', character: 'ル', romaji: 'ru', mnemonic: 'Un compás de dibujo abierto marcando un arco.', example: 'ルール (Ruuru - Regla)' },
            { system: 'katakana', category: 'Básicos', character: 'レ', romaji: 're', mnemonic: 'La pierna trasera de una persona corriendo al trote.', example: 'レモン (Remon - Limón)' },
            { system: 'katakana', category: 'Básicos', character: 'ロ', romaji: 'ro', mnemonic: 'Un cuadro perfecto. Una caja o regalo rectangular.', example: 'ロボット (Robotto - Robot)' },

            { system: 'katakana', category: 'Básicos', character: 'ワ', romaji: 'wa', mnemonic: 'Como "ウ" pero sin la antena de arriba.', example: 'ワイン (Wain - Vino)' },
            { system: 'katakana', category: 'Básicos', character: 'ヲ', romaji: 'o / wo', mnemonic: 'Una línea horizontal rota con soporte oblicuo.', example: 'ヲタク (Wotaku - Otaku/Fanático)' },
            { system: 'katakana', category: 'Básicos', character: 'ン', romaji: 'n', mnemonic: '¡Ojo! Una sola gota casi horizontal y trazo que sube.', example: 'ラーメン (Raamen - Fideos Ramen)' },

            // ==================== KATAKANA DAKUTEN ====================
            { system: 'katakana', category: 'Dakuten', character: 'ガ', romaji: 'ga', mnemonic: 'El carácter カ (ka) modificado con comillas (゛).', example: 'ガラス (Garasu - Cristal)' },
            { system: 'katakana', category: 'Dakuten', character: 'ギ', romaji: 'gi', mnemonic: 'El carácter キ (ki) modificado con comillas (゛).', example: 'ギター (Gitaa - Guitarra)' },
            { system: 'katakana', category: 'Dakuten', character: 'グ', romaji: 'gu', mnemonic: 'El carácter ク (ku) modificado con comillas (゛).', example: 'グラス (Gurasu - Vaso)' },
            { system: 'katakana', category: 'Dakuten', character: 'ゲ', romaji: 'ge', mnemonic: 'El carácter ケ (ke) modificado con comillas (゛).', example: 'ゲーム (Geemu - Juego)' },
            { system: 'katakana', category: 'Dakuten', character: 'ゴ', romaji: 'go', mnemonic: 'El carácter コ (ko) modificado con comillas (゛).', example: 'ゴルフ (Gorufu - Golf)' },
            { system: 'katakana', category: 'Dakuten', character: 'ザ', romaji: 'za', mnemonic: 'El carácter サ (sa) modificado con comillas (゛).', example: 'デザイン (Dezain - Diseño)' },
            { system: 'katakana', category: 'Dakuten', character: 'ジ', romaji: 'ji', mnemonic: 'El carácter シ (shi) modificado con comillas (゛).', example: 'ジュース (Juusu - Zumo)' },
            { system: 'katakana', category: 'Dakuten', character: 'ダ', romaji: 'da', mnemonic: 'El carácter タ (ta) modificado con comillas (゛).', example: 'ダンス (Dansu - Baile)' },
            { system: 'katakana', category: 'Dakuten', character: 'バ', romaji: 'ba', mnemonic: 'El carácter ハ (ha) modificado con comillas (゛).', example: 'バス (Basu - Autobús)' },
            { system: 'katakana', category: 'Dakuten', character: 'パ', romaji: 'pa', mnemonic: 'El carácter ハ (ha) modificado con círculo (゜).', example: 'パン (Pan - Pan)' },
            
            // ==================== KATAKANA YŌON ====================
            { system: 'katakana', category: 'Yōon', character: 'キャ', romaji: 'kya', mnemonic: 'Combinación de キ (ki) + ya pequeño (ャ).', example: 'キャベツ (Kyabetsu - Repollo)' },
            { system: 'katakana', category: 'Yōon', character: 'キュ', romaji: 'kyu', mnemonic: 'Combinación de キ (ki) + yu pequeño (ュ).', example: 'キュウリ (Kyuuri - Pepino)' },
            { system: 'katakana', category: 'Yōon', character: 'キョ', romaji: 'kyo', mnemonic: 'Combinación de キ (ki) + yo pequeño (ョ).', example: 'キョロキョロ (Kyorokyoro - Mirar a todos lados)' },
            { system: 'katakana', category: 'Yōon', character: 'シャ', romaji: 'sha', mnemonic: 'Combinación de シ (shi) + ya pequeño (ャ).', example: 'シャツ (Shatsu - Camisa)' },
            { system: 'katakana', category: 'Yōon', character: 'シュ', romaji: 'shu', mnemonic: 'Combinación de シ (shi) + yu pequeño (ュ).', example: 'シューズ (Shuuzu - Zapatos)' },
            { system: 'katakana', category: 'Yōon', character: 'ショ', romaji: 'sho', mnemonic: 'Combinación de シ (shi) + yo pequeño (ョ).', example: 'ショップ (Shoppu - Tienda)' }
        ];

        // Variables de estado
        let currentSystem = 'hiragana';
        let currentCategory = 'Todos';
        let isFlashcardMode = false;
        let searchQuery = '';
        let filteredCards = [];
        let mobileCurrentIndex = 0;

        // Inicialización
        function init() {
            filterData();
            
            // Listener de Scroll para el botón "Volver arriba"
            window.addEventListener('scroll', () => {
                const btn = document.getElementById('backToTop');
                if (window.scrollY > 300) {
                    btn.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
                    btn.classList.add('opacity-100', 'translate-y-0');
                } else {
                    btn.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
                    btn.classList.remove('opacity-100', 'translate-y-0');
                }
            });
        }

        // Función para reproducir el audio del Kana usando Web Speech API
        function playKanaAudio(text, btnElement, event) {
            // Evitar que otros eventos se disparen si estamos en móvil
            if (event) event.stopPropagation();

            // Comprobar si el navegador soporta síntesis de voz
            if ('speechSynthesis' in window) {
                // Cancelar cualquier audio reproduciéndose
                window.speechSynthesis.cancel();
                
                const utterance = new SpeechSynthesisUtterance(text);
                utterance.lang = 'ja-JP'; // Idioma: Japonés
                utterance.rate = 0.9;     // Velocidad ligeramente más lenta para mayor claridad
                utterance.pitch = 1;      // Tono normal

                // Añadir efecto visual al botón
                if (btnElement) {
                    btnElement.classList.add('audio-playing');
                    utterance.onend = () => {
                        btnElement.classList.remove('audio-playing');
                    };
                    utterance.onerror = () => {
                        btnElement.classList.remove('audio-playing');
                    };
                }

                window.speechSynthesis.speak(utterance);
            } else {
                alert("Lo sentimos, tu navegador no soporta la reproducción de audio nativa.");
            }
        }

        // Cambiar entre Hiragana y Katakana
        function switchSystem(system) {
            currentSystem = system;
            
            // Estilizar botones de las pestañas
            const btnH = document.getElementById('tab-hiragana');
            const btnK = document.getElementById('tab-katakana');
            
            if (system === 'hiragana') {
                btnH.className = "sys-tab flex-1 py-3 px-4 rounded-xl font-bold text-base transition-all duration-300 bg-[#d1513c] text-white shadow-md shadow-[#d1513c]/20";
                btnK.className = "sys-tab flex-1 py-3 px-4 rounded-xl font-bold text-base transition-all duration-300 text-slate-600 hover:text-[#d1513c] bg-transparent";
            } else {
                btnK.className = "sys-tab flex-1 py-3 px-4 rounded-xl font-bold text-base transition-all duration-300 bg-[#d1513c] text-white shadow-md shadow-[#d1513c]/20";
                btnH.className = "sys-tab flex-1 py-3 px-4 rounded-xl font-bold text-base transition-all duration-300 text-slate-600 hover:text-[#d1513c] bg-transparent";
            }
            
            // Reiniciar filtros y re-renderizar
            currentCategory = 'Todos';
            searchQuery = '';
            document.getElementById('searchBar').value = '';
            updateCategoryButtons();
            filterData();
        }

        // Cambiar categoría (Básicos, Dakuten...)
        function setCategory(category) {
            currentCategory = category;
            updateCategoryButtons();
            filterData();
        }

        function updateCategoryButtons() {
            const btns = document.querySelectorAll('.filter-btn');
            btns.forEach(btn => {
                if (btn.innerText.includes(currentCategory)) {
                    btn.className = "filter-btn active px-4 py-2 rounded-xl text-sm font-bold border transition-all bg-[#d1513c] text-white border-[#d1513c]";
                } else {
                    btn.className = "filter-btn px-4 py-2 rounded-xl text-sm font-bold border border-slate-200 text-slate-500 bg-white hover:bg-slate-50 transition-all";
                }
            });
        }

        // Modo Flashcard (Ocultar el romaji)
        function toggleFlashcardMode() {
            isFlashcardMode = document.getElementById('flashcardMode').checked;
            filterData();
        }

        // Filtrar datos basado en las condiciones actuales
        function filterData() {
            searchQuery = document.getElementById('searchBar').value.toLowerCase().trim();
            
            filteredCards = kanaData.filter(item => {
                const matchSystem = item.system === currentSystem;
                const matchCategory = currentCategory === 'Todos' || item.category === currentCategory;
                const matchSearch = item.romaji.toLowerCase().includes(searchQuery) || item.character.includes(searchQuery);
                return matchSystem && matchCategory && matchSearch;
            });
            
            mobileCurrentIndex = 0;
            renderDesktop();
            renderMobile();
        }

        // Generar HTML de la tarjeta (Se incluye el botón de AUDIO)
        function getCardHTML(item) {
            return `
                <div class="kana-card bg-white rounded-2xl p-5 border border-amber-100/60 shadow-sm relative group text-center flex flex-col justify-between transition-all fade-in cursor-default min-h-[220px]">
                    <!-- Botón de Audio interactivo -->
                    <button onclick="playKanaAudio('${item.character}', this, event)" class="absolute top-3 right-3 text-slate-300 hover:text-[#d1513c] transition-colors p-2 rounded-full hover:bg-slate-50 active:bg-slate-100" title="Escuchar pronunciación" aria-label="Escuchar ${item.character}">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M11 5L6 9H2v6h4l5 4V5z"></path>
                        </svg>
                    </button>

                    <div class="mt-2">
                        <div class="text-6xl font-bold text-[#2c405a] mb-1 drop-shadow-sm">${item.character}</div>
                        <div class="text-xl font-semibold text-[#d1513c] mb-3 romaji-text transition-opacity ${isFlashcardMode ? 'opacity-0 select-none' : 'opacity-100'}">${item.romaji}</div>
                    </div>
                    
                    <div>
                        <p class="text-[11px] leading-relaxed text-slate-500 mb-3 h-10 overflow-hidden px-1">${item.mnemonic}</p>
                        <div class="text-xs font-bold text-slate-600 bg-[#fdf8f5] border border-amber-100/50 p-2.5 rounded-xl shadow-inner">
                            ${item.example}
                        </div>
                    </div>
                </div>
            `;
        }

        // Renderizar vista de Escritorio (Grid)
        function renderDesktop() {
            const grid = document.getElementById('kanaGrid');
            if (filteredCards.length === 0) {
                grid.innerHTML = `<div class="col-span-full text-center py-10 text-slate-400 font-medium text-sm">No se han encontrado resultados.</div>`;
                return;
            }
            grid.innerHTML = filteredCards.map(item => getCardHTML(item)).join('');
        }

        // Renderizar vista Móvil (Swipe / Una tarjeta)
        function renderMobile() {
            const container = document.getElementById('mobileCardContainer');
            const progress = document.getElementById('mobileProgress');
            
            if (filteredCards.length === 0) {
                container.innerHTML = `<div class="text-center py-10 text-slate-400 font-medium text-sm w-full">No se han encontrado resultados.</div>`;
                progress.innerText = `0 de 0`;
                return;
            }

            container.innerHTML = `<div class="w-full max-w-sm mx-auto shadow-lg rounded-2xl">${getCardHTML(filteredCards[mobileCurrentIndex])}</div>`;
            progress.innerText = `${mobileCurrentIndex + 1} de ${filteredCards.length}`;
        }

        // Controles Móviles
        function nextMobileCard() {
            if (filteredCards.length === 0) return;
            mobileCurrentIndex = (mobileCurrentIndex + 1) % filteredCards.length;
            renderMobile();
        }

        function prevMobileCard() {
            if (filteredCards.length === 0) return;
            mobileCurrentIndex = (mobileCurrentIndex - 1 + filteredCards.length) % filteredCards.length;
            renderMobile();
        }

        // Soportar Swipe (deslizamiento táctil) en móviles
        let touchstartX = 0;
        let touchendX = 0;
        
        const slider = document.getElementById('mobileStudyView');
        slider.addEventListener('touchstart', e => { touchstartX = e.changedTouches[0].screenX; });
        slider.addEventListener('touchend', e => {
            touchendX = e.changedTouches[0].screenX;
            handleGesture();
        });

        function handleGesture() {
            if (touchendX < touchstartX - 40) nextMobileCard(); // Swipe izquierda
            if (touchendX > touchstartX + 40) prevMobileCard(); // Swipe derecha
        }

        // Arrancar la app
        window.onload = init;