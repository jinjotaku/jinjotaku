 // === BASE DE DATOS DE KANJIS ===
        const kanjiData = [
            // Compuestos
            { category: 'Compuestos', kanji: '男', hiragana: 'おとこ (otoko)', translation: 'Hombre', note: '田 (Campo de arroz) + 力 (Fuerza)' },
            { category: 'Compuestos', kanji: '好', hiragana: 'すき (suki)', translation: 'Gustar / Amable', note: '女 (Mujer) + 子 (Niño/Hijo)' },
            { category: 'Compuestos', kanji: '明', hiragana: 'あかるい (akarui)', translation: 'Brillante / Claro', note: '日 (Sol) + 月 (Luna)' },
            { category: 'Compuestos', kanji: '休', hiragana: 'やすむ (yasumu)', translation: 'Descansar', note: '人 (Persona) + 木 (Árbol). Una persona apoyada en un árbol.' },
            { category: 'Compuestos', kanji: '体', hiragana: 'からだ (karada)', translation: 'Cuerpo', note: '人 (Persona) + 本 (Raíz/Origen)' },
            { category: 'Compuestos', kanji: '林', hiragana: 'はやし (hayashi)', translation: 'Bosque pequeño', note: '木 (Árbol) + 木 (Árbol). Dos árboles juntos.' },
            { category: 'Compuestos', kanji: '森', hiragana: 'もり (mori)', translation: 'Bosque grande', note: '木 (Árbol) + 木 + 木. Tres árboles juntos forman más vegetación.' },
            { category: 'Compuestos', kanji: '間', hiragana: 'あいだ (aida)', translation: 'Entre / Espacio', note: '門 (Puerta) + 日 (Sol). La luz del sol que se filtra.' },
            { category: 'Compuestos', kanji: '校', hiragana: 'こう (kou)', translation: 'Escuela', note: '木 (Árbol) + 交 (Intercambiar / Mezclar)' },
            { category: 'Compuestos', kanji: '聞', hiragana: 'きく (kiku)', translation: 'Escuchar / Oír', note: '門 (Puerta) + 耳 (Oreja). Poner la oreja en la puerta.' },

            // Básicos
            { category: 'Básicos', kanji: '日', hiragana: 'ひ / び (hi / bi)', translation: 'Sol / Día', note: 'Un círculo con una línea en medio (antiguo dibujo del sol).' },
            { category: 'Básicos', kanji: '月', hiragana: 'つき (tsuki)', translation: 'Luna / Mes', note: 'El dibujo de una luna creciente con sus fases.' },
            { category: 'Básicos', kanji: '木', hiragana: 'き (ki)', translation: 'Árbol', note: 'Un tronco con sus ramas superiores y raíces en la base.' },
            { category: 'Básicos', kanji: '田', hiragana: 'た (ta)', translation: 'Campo de arroz', note: 'Un terreno dividido en parcelas de cultivo.' },
            { category: 'Básicos', kanji: '力', hiragana: 'ちから (chikara)', translation: 'Fuerza', note: 'El dibujo de un brazo musculoso o herramienta.' },
            { category: 'Básicos', kanji: '女', hiragana: 'おんな (onna)', translation: 'Mujer', note: 'Silueta de una mujer arrodillada tradicionalmente.' },
            { category: 'Básicos', kanji: '子', hiragana: 'こ (ko)', translation: 'Niño / Hijo', note: 'Un bebé envuelto en mantas con los brazos abiertos.' },
            { category: 'Básicos', kanji: '門', hiragana: 'もん (mon)', translation: 'Puerta / Portal', note: 'Las dos hojas de una puerta doble tradicional.' },
            { category: 'Básicos', kanji: '耳', hiragana: 'みみ (mimi)', translation: 'Oreja', note: 'El dibujo estilizado del pabellón auditivo.' },
            { category: 'Básicos', kanji: '人', hiragana: 'ひと (hito)', translation: 'Persona', note: 'Las dos piernas de una persona caminando de perfil.' },

            // Números
            { category: 'Números', kanji: '一', hiragana: 'いち (ichi)', translation: 'Uno', note: 'Una línea horizontal (un dedo).' },
            { category: 'Números', kanji: '二', hiragana: 'に (ni)', translation: 'Dos', note: 'Dos líneas horizontales (dos dedos).' },
            { category: 'Números', kanji: '三', hiragana: 'さん (san)', translation: 'Tres', note: 'Tres líneas horizontales (tres dedos).' },
            { category: 'Números', kanji: '四', hiragana: 'よん / し (yon / shi)', translation: 'Cuatro', note: 'Originalmente representaba la boca expulsando aire.' },
            { category: 'Números', kanji: '五', hiragana: 'ご (go)', translation: 'Cinco', note: 'Un antiguo cruce de líneas.' },
            { category: 'Números', kanji: '六', hiragana: 'ろく (roku)', translation: 'Seis', note: 'Tradicionalmente se asocia al dibujo de una choza.' },
            { category: 'Números', kanji: '七', hiragana: 'なな / しち (nana / shichi)', translation: 'Siete', note: 'Una forma cruzada cortada.' },
            { category: 'Números', kanji: '八', hiragana: 'はち (hachi)', translation: 'Ocho', note: 'Dos líneas que se abren, indicando división o separación.' },
            { category: 'Números', kanji: '九', hiragana: 'きゅう / く (kyuu / ku)', translation: 'Nueve', note: 'Una mano que intenta alcanzar algo.' },
            { category: 'Números', kanji: '十', hiragana: 'じゅう (juu)', translation: 'Diez', note: 'Una cruz, que representa la unión de todos los dedos.' },
            { category: 'Números', kanji: '百', hiragana: 'ひゃく (hyaku)', translation: 'Cien', note: '一 (Uno) + 白 (Blanco). Cantidad clara y limpia.' },
            { category: 'Números', kanji: '千', hiragana: 'せん (sen)', translation: 'Mil', note: 'Una modificación del kanji de persona (人), con un trazo.' },
            { category: 'Números', kanji: '万', hiragana: 'まん (man)', translation: 'Diez mil', note: 'Una forma gráfica antigua para gran cantidad.' },

            // Días
            { category: 'Días', kanji: '日', hiragana: 'にち (nichi)', translation: 'Domingo', note: 'Kanji simple (Sol).' },
            { category: 'Días', kanji: '月', hiragana: 'げつ (getsu)', translation: 'Lunes', note: 'Kanji simple (Luna).' },
            { category: 'Días', kanji: '火', hiragana: 'か (ka)', translation: 'Martes', note: 'Kanji simple. Hoguera echando chispas.' },
            { category: 'Días', kanji: '水', hiragana: 'すい (sui)', translation: 'Miércoles', note: 'Kanji simple. Corriente de agua fluyendo.' },
            { category: 'Días', kanji: '木', hiragana: 'もく (moku)', translation: 'Jueves', note: 'Kanji simple (Árbol/Madera).' },
            { category: 'Días', kanji: '金', hiragana: 'きん (kin)', translation: 'Viernes', note: 'Compuesto por techo (人) + pepitas de oro enterradas.' },
            { category: 'Días', kanji: '土', hiragana: 'ど (do)', translation: 'Sábado', note: 'Kanji simple. Un brote saliendo de la superficie.' },

            // Direcciones
            { category: 'Direcciones', kanji: '上', hiragana: 'うえ (ue)', translation: 'Arriba / Encima', note: 'Pictograma: línea horizontal y señal hacia arriba.' },
            { category: 'Direcciones', kanji: '下', hiragana: 'した (shita)', translation: 'Abajo / Debajo', note: 'Pictograma: línea horizontal y señal hacia abajo.' },
            { category: 'Direcciones', kanji: '左', hiragana: 'ひだり (hidari)', translation: 'Izquierda', note: 'ナ (Mano izquierda) + 工 (Herramienta/Trabajo).' },
            { category: 'Direcciones', kanji: '右', hiragana: 'みぎ (migi)', translation: 'Derecha', note: 'ナ (Mano derecha) + 口 (Boca).' },
            { category: 'Direcciones', kanji: '前', hiragana: 'まえ (mae)', translation: 'Delante / Antes', note: 'Originalmente: avanzar con un cuchillo o cortar hacia adelante.' },
            { category: 'Direcciones', kanji: '後', hiragana: 'うしろ / あと (ushiro / ato)', translation: 'Detrás / Después', note: 'Caminar despacio + pequeño + pies cruzados.' },
            { category: 'Direcciones', kanji: '中', hiragana: 'なか (naka)', translation: 'Dentro / Centro', note: 'Una línea que atraviesa un cuadro por el medio.' },
            { category: 'Direcciones', kanji: '外', hiragana: 'そと (soto)', translation: 'Fuera', note: '夕 (Atardecer) + ト (Adivinación).' },
            { category: 'Direcciones', kanji: '北', hiragana: 'きた (kita)', translation: 'Norte', note: 'Dos personas dándose la espalda (huyendo del frío).' },
            { category: 'Direcciones', kanji: '南', hiragana: 'みなみ (minami)', translation: 'Sur', note: 'Instrumento musical colgado en las zonas cálidas del sur.' },
            { category: 'Direcciones', kanji: '東', hiragana: 'ひがし (higashi)', translation: 'Este', note: '日 (Sol) + 木 (Árbol). Sol saliendo detrás de los árboles.' },
            { category: 'Direcciones', kanji: '西', hiragana: 'にし (nishi)', translation: 'Oeste', note: 'Nido de pájaros. Regresan cuando el sol se pone.' }
        ];

        // LÓGICA DE AUDIO
        function playKanjiAudio(text, btnElement, event) {
            // Prevenir otros clics accidentales
            if (event) event.stopPropagation();

            // Comprobar soporte de la Web Speech API
            if ('speechSynthesis' in window) {
                // Parar audios anteriores
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
                alert("Lo sentimos, tu navegador no soporta la reproducción de audio nativa.");
            }
        }

        // LÓGICA DE LA INTERFAZ
        const categories = ['Todos', 'Compuestos', 'Básicos', 'Números', 'Días', 'Direcciones'];
        
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
                
                // Estructura de tarjeta moderna. Hemos añadido position 'relative'
                card.className = 'kanji-card fade-in bg-white border border-amber-100/50 rounded-2xl p-6 shadow-sm flex flex-col items-center text-center transition-all duration-300 relative';
                card.style.animationDelay = `${index * 0.02}s`; // Efecto cascada
                
                // Extraemos el hiragana puro antes de los paréntesis o barras (ej. "おとこ (otoko)" -> "おとこ") para forzar la lectura correcta
                const readingToSpeak = item.hiragana.split(' ')[0];

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