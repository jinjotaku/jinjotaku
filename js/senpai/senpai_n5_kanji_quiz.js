// LÓGICA COMPLETA DEL CUESTIONARIO CON SHUFFLE FISHER-YATES Y AUDIO -->
   
        const kanjiList = [
            // Compuestos
            { category: 'Compuestos', kanji: '男', hiragana: 'おとこ', translation: 'Hombre', note: '田 (Campo de arroz) + 力 (Fuerza)' },
            { category: 'Compuestos', kanji: '好', hiragana: 'すき', translation: 'Gustar / Amable', note: '女 (Mujer) + 子 (Niño/Hijo)' },
            { category: 'Compuestos', kanji: '明', hiragana: 'あかるい', translation: 'Brillante / Claro', note: '日 (Sol) + 月 (Luna)' },
            { category: 'Compuestos', kanji: '休', hiragana: 'やすむ', translation: 'Descansar', note: '人 (Persona) + 木 (Árbol). Una persona apoyada en un árbol.' },
            { category: 'Compuestos', kanji: '体', hiragana: 'からだ', translation: 'Cuerpo', note: '人 (Persona) + 本 (Raíz/Origen)' },
            { category: 'Compuestos', kanji: '林', hiragana: 'はやし', translation: 'Bosque pequeño', note: '木 (Árbol) + 木 (Árbol). Dos árboles juntos.' },
            { category: 'Compuestos', kanji: '森', hiragana: 'もり', translation: 'Bosque grande', note: '木 (Árbol) + 木 + 木. Tres árboles juntos' },
            { category: 'Compuestos', kanji: '間', hiragana: 'あいだ', translation: 'Entre / Espacio', note: '門 (Puerta) + 日 (Sol). La luz del sol que se filtra' },
            { category: 'Compuestos', kanji: '校', hiragana: 'こう', translation: 'Escuela', note: '木 (Árbol) + 交 (Intercambiar / Mezclar)' },
            { category: 'Compuestos', kanji: '聞', hiragana: 'きく', translation: 'Escuchar / Oír', note: '門 (Puerta) + 耳 (Oreja). Poner la oreja en la puerta.' },

            // Básicos
            { category: 'Básicos', kanji: '日', hiragana: 'ひ / び', translation: 'Sol / Día', note: 'Un círculo con una línea en medio (antiguo dibujo del sol).' },
            { category: 'Básicos', kanji: '月', hiragana: 'つき', translation: 'Luna / Mes', note: 'El dibujo de una luna creciente con sus fases.' },
            { category: 'Básicos', kanji: '木', hiragana: 'き', translation: 'Árbol', note: 'Un tronco con sus ramas superiores y raíces en la base.' },
            { category: 'Básicos', kanji: '田', hiragana: 'た', translation: 'Campo de arroz', note: 'Un terreno dividido en parcelas de cultivo.' },
            { category: 'Básicos', kanji: '力', hiragana: 'ちから', translation: 'Fuerza', note: 'El dibujo de un brazo musculoso o una herramienta de labranza.' },
            { category: 'Básicos', kanji: '女', hiragana: 'おんな', translation: 'Mujer', note: 'Silueta de una mujer arrodillada tradicionalmente.' },
            { category: 'Básicos', kanji: '子', hiragana: 'こ', translation: 'Niño / Hijo', note: 'Un bebé envuelto en mantas con los brazos abiertos.' },
            { category: 'Básicos', kanji: '門', hiragana: 'もん', translation: 'Puerta / Portal', note: 'Las dos hojas de una puerta doble tradicional.' },
            { category: 'Básicos', kanji: '耳', hiragana: 'みみ', translation: 'Oreja', note: 'El dibujo estilizado del pabellón auditivo.' },
            { category: 'Básicos', kanji: '人', hiragana: 'ひと', translation: 'Persona', note: 'Las dos piernas de una persona caminando de perfil.' },

            // Números
            { category: 'Números', kanji: '一', hiragana: 'いち', translation: 'Uno', note: 'Una línea horizontal (un dedo).' },
            { category: 'Números', kanji: '二', hiragana: 'に', translation: 'Dos', note: 'Dos líneas horizontales (dos dedos).' },
            { category: 'Números', kanji: '三', hiragana: 'さん', translation: 'Tres', note: 'Tres líneas horizontales (tres dedos).' },
            { category: 'Números', kanji: '四', hiragana: 'よん / し', translation: 'Cuatro', note: 'Originalmente representaba la boca expulsando aire.' },
            { category: 'Números', kanji: '五', hiragana: 'ご', translation: 'Cinco', note: 'Un antiguo cruce de líneas.' },
            { category: 'Números', kanji: '六', hiragana: 'ろく', translation: 'Seis', note: 'Tradicionalmente se asocia al dibujo de una choza.' },
            { category: 'Números', kanji: '七', hiragana: 'なな / しち', translation: 'Siete', note: 'Una forma cruzada cortada.' },
            { category: 'Números', kanji: '八', hiragana: 'はち', translation: 'Ocho', note: 'Dos líneas que se abren, indicando división o separación.' },
            { category: 'Números', kanji: '九', hiragana: 'きゅう / く', translation: 'Nueve', note: 'Representaba una mano que intenta alcanzar algo.' },
            { category: 'Números', kanji: '十', hiragana: 'じゅう', translation: 'Diez', note: 'Una cruz, que representa la unión de todos los dedos.' },
            { category: 'Números', kanji: '百', hiragana: 'ひゃく', translation: 'Cien', note: '一 (Uno) + 白 (Blanco). Indica cantidad clara y limpia.' },
            { category: 'Números', kanji: '千', hiragana: 'せん', translation: 'Mil', note: 'Una modificación del kanji de persona (人), con un trazo extra.' },
            { category: 'Números', kanji: '万', hiragana: 'まん', translation: 'Diez mil', note: 'Una forma gráfica antigua para representar gran cantidad.' },

            // Días
            { category: 'Días', kanji: '日', hiragana: 'にち', translation: 'Domingo', note: 'Domingo (Día del Sol).' },
            { category: 'Días', kanji: '月', hiragana: 'げつ', translation: 'Lunes', note: 'Lunes (Día de la Luna).' },
            { category: 'Días', kanji: '火', hiragana: 'か', translation: 'Martes', note: 'Martes (Día del Fuego). Hoguera echando chispas.' },
            { category: 'Días', kanji: '水', hiragana: 'すい', translation: 'Miércoles', note: 'Miércoles (Día del Agua). Corriente de agua fluyendo.' },
            { category: 'Días', kanji: '木', hiragana: 'もく', translation: 'Jueves', note: 'Jueves (Día del Árbol).' },
            { category: 'Días', kanji: '金', hiragana: 'きん', translation: 'Viernes', note: 'Viernes (Día del Metal/Oro). Pepitas enterradas en la tierra.' },
            { category: 'Días', kanji: '土', hiragana: 'ど', translation: 'Sábado', note: 'Sábado (Día de la Tierra). Brote saliendo de la tierra.' },

            // Direcciones
            { category: 'Direcciones', kanji: '上', hiragana: 'うえ', translation: 'Arriba / Encima', note: 'Señal apuntando hacia arriba sobre una línea.' },
            { category: 'Direcciones', kanji: '下', hiragana: 'した', translation: 'Abajo / Debajo', note: 'Señal apuntando hacia abajo bajo una línea.' },
            { category: 'Direcciones', kanji: '左', hiragana: 'ひだり', translation: 'Izquierda', note: 'ナ (Mano izquierda) + 工 (Herramienta / Trabajo).' },
            { category: 'Direcciones', kanji: '右', hiragana: 'みぎ', translation: 'Derecha', note: 'ナ (Mano derecha) + 口 (Boca). Llevar comida a la boca.' },
            { category: 'Direcciones', kanji: '前', hiragana: 'まえ', translation: 'Delante / Antes', note: 'Avanzar con un cuchillo o cortar hacia adelante.' },
            { category: 'Direcciones', kanji: '後', hiragana: 'うしろ / あと', translation: 'Detrás / Después', note: 'Caminar despacio + pequeño/capullo + pies cruzados.' },
            { category: 'Direcciones', kanji: '中', hiragana: 'なか', translation: 'Dentro / Centro', note: 'Una línea que atraviesa un cuadro exactamente por el medio.' },
            { category: 'Direcciones', kanji: '外', hiragana: 'そと', translation: 'Fuera', note: '夕 (Atardecer) + ト (Adivinación). Predicciones fuera de hora.' },
            { category: 'Direcciones', kanji: '北', hiragana: 'きた', translation: 'Norte', note: 'Dos personas dándose la espalda mutuamente para protegerse del frío del norte.' },
            { category: 'Direcciones', kanji: '南', hiragana: 'みなみ', translation: 'Sur', note: 'Campana o instrumento musical colgado en las regiones del sur.' },
            { category: 'Direcciones', kanji: '東', hiragana: 'ひがし', translation: 'Este', note: '日 (Sol) + 木 (Árbol). El sol saliendo detrás del árbol.' },
            { category: 'Direcciones', kanji: '西', hiragana: 'にし', translation: 'Oeste', note: 'Dibujo de un nido de pájaros al que regresan al ponerse el sol.' }
        ];

        // === REPRODUCTOR DE AUDIO ===
        window.playQuizAudio = function(text, btnElement, event) {
            // Prevenir que el click en el audio seleccione la respuesta
            if (event) event.stopPropagation();

            if ('speechSynthesis' in window) {
                window.speechSynthesis.cancel();
                // Si hay una barra (ej: ひ / び), nos quedamos solo con la primera lectura para que el audio no lea la barra
                const cleanText = text.split(' / ')[0].trim();
                
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
                        kanjiAudio: item.hiragana, // Para que el botón central lea el kanji
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
                        kanjiAudio: item.hiragana,
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
                        kanjiAudio: null,
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
                        kanjiAudio: item.hiragana,
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