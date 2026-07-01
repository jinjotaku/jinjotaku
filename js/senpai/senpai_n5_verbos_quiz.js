// === DICCIONARIOS DE CONJUGACIÓN ===
const conjugations = {
    "su": {
        inf_pres: ["su", "す"], inf_past: ["shita", "した"], inf_presNeg: ["sanai", "さない"], inf_pastNeg: ["sanakatta", "さなかった"], inf_te: ["shite", "して"], inf_imp: ["se", "せ"], inf_tai: ["shitai", "したい"],
        form_pres: ["shimasu", "します"], form_past: ["shimashita", "しました"], form_presNeg: ["shimasen", "しません"], form_pastNeg: ["shimasendeshita", "しませんでした"], form_te: ["shite kudasai", "してください"], form_imp: ["shinasai", "しなさい"], form_tai: ["shitai desu", "したいです"]
    },
    "ku": {
        inf_pres: ["ku", "く"], inf_past: ["ita", "いた"], inf_presNeg: ["kanai", "かない"], inf_pastNeg: ["kanakatta", "かなかった"], inf_te: ["ite", "いて"], inf_imp: ["ke", "け"], inf_tai: ["kitai", "きたい"],
        form_pres: ["kimasu", "きます"], form_past: ["kimashita", "きました"], form_presNeg: ["kimasen", "きません"], form_pastNeg: ["kimasendeshita", "きませんでした"], form_te: ["ite kudasai", "いてください"], form_imp: ["kinasai", "きなさい"], form_tai: ["kitai desu", "きたいです"]
    },
    "iku": {
        inf_pres: ["ku", "く"], inf_past: ["tta", "った"], inf_presNeg: ["kanai", "かない"], inf_pastNeg: ["kanakatta", "かなかった"], inf_te: ["tte", "って"], inf_imp: ["ke", "け"], inf_tai: ["kitai", "きたい"],
        form_pres: ["kimasu", "きます"], form_past: ["kimashita", "きました"], form_presNeg: ["kimasen", "きません"], form_pastNeg: ["kimasendeshita", "きませんでした"], form_te: ["tte kudasai", "ってください"], form_imp: ["kinasai", "きなさい"], form_tai: ["kitai desu", "きたいです"]
    },
    "gu": {
        inf_pres: ["gu", "ぐ"], inf_past: ["ida", "いだ"], inf_presNeg: ["ganai", "がない"], inf_pastNeg: ["ganakatta", "がなかった"], inf_te: ["ide", "いで"], inf_imp: ["ge", "げ"], inf_tai: ["gitai", "ぎたい"],
        form_pres: ["gimasu", "ぎます"], form_past: ["gimashita", "ぎました"], form_presNeg: ["gimasen", "ぎません"], form_pastNeg: ["gimasendeshita", "ぎませんでした"], form_te: ["ide kudasai", "いでください"], form_imp: ["ginasai", "ぎなさい"], form_tai: ["gitai desu", "ぎたいes"]
    },
    "bu": {
        inf_pres: ["bu", "ぶ"], inf_past: ["nda", "んだ"], inf_presNeg: ["banai", "ばない"], inf_pastNeg: ["banakatta", "ばなかった"], inf_te: ["nde", "んで"], inf_imp: ["be", "べ"], inf_tai: ["bitai", "びたい"],
        form_pres: ["bimasu", "びます"], form_past: ["bimashita", "びました"], form_presNeg: ["bimasen", "びません"], form_pastNeg: ["bimasendeshita", "びませんでした"], form_te: ["nde kudasai", "んでください"], form_imp: ["binasai", "びなさい"], form_tai: ["bitai desu", "びたいです"]
    },
    "mu": {
        inf_pres: ["mu", "む"], inf_past: ["nda", "んだ"], inf_presNeg: ["manai", "まない"], inf_pastNeg: ["manakatta", "まなかった"], inf_te: ["nde", "んで"], inf_imp: ["me", "め"], inf_tai: ["mitai", "みたい"],
        form_pres: ["mimasu", "みます"], form_past: ["mimashita", "みました"], form_presNeg: ["mimasen", "みません"], form_pastNeg: ["mimasendeshita", "みませんでした"], form_te: ["nde kudasai", "んでください"], form_imp: ["minasai", "みなさい"], form_tai: ["mitai desu", "みたいes"]
    },
    "nu": {
        inf_pres: ["nu", "ぬ"], inf_past: ["nda", "んだ"], inf_presNeg: ["nanai", "なない"], inf_pastNeg: ["nanakatta", "ななかった"], inf_te: ["nde", "んで"], inf_imp: ["ne", "ね"], inf_tai: ["nitai", "にたい"],
        form_pres: ["nimasu", "にます"], form_past: ["nimashita", "にました"], form_presNeg: ["nimasen", "にません"], form_pastNeg: ["nimasendeshita", "にませんでした"], form_te: ["nde kudasai", "んでください"], form_imp: ["ninasai", "になさい"], form_tai: ["nitai desu", "にたいです"]
    },
    "ru_u": {
        inf_pres: ["ru", "る"], inf_past: ["tta", "った"], inf_presNeg: ["ranai", "らない"], inf_pastNeg: ["ranakatta", "らなかった"], inf_te: ["tte", "って"], inf_imp: ["re", "れ"], inf_tai: ["ritai", "りたい"],
        form_pres: ["rimasu", "ります"], form_past: ["rimashita", "りました"], form_presNeg: ["rimasen", "りません"], form_pastNeg: ["rimasendeshita", "りませんでした"], form_te: ["tte kudasai", "ってください"], form_imp: ["rinasai", "りなさい"], form_tai: ["ritai desu", "りたいes"]
    },
    "tsu": {
        inf_pres: ["tsu", "つ"], inf_past: ["tta", "った"], inf_presNeg: ["tanai", "たない"], inf_pastNeg: ["tanakatta", "たなかった"], inf_te: ["tte", "って"], inf_imp: ["te", "て"], inf_tai: ["chitai", "ちたい"],
        form_pres: ["chimasu", "ちます"], form_past: ["chimashita", "ちました"], form_presNeg: ["chimasen", "ちません"], form_pastNeg: ["chimasendeshita", "ちませんでした"], form_te: ["tte kudasai", "ってください"], form_imp: ["chinasai", "ちなさい"], form_tai: ["chitai desu", "ちたいです"]
    },
    "u": {
        inf_pres: ["u", "う"], inf_past: ["tta", "った"], inf_presNeg: ["wanai", "わない"], inf_pastNeg: ["wanakatta", "わなかった"], inf_te: ["tte", "って"], inf_imp: ["e", "え"], inf_tai: ["itai", "いたい"],
        form_pres: ["imasu", "います"], form_past: ["imashita", "imashita"/* Wait */, "いました"], form_presNeg: ["imasen", "いません"], form_pastNeg: ["imasendeshita", "いませんでした"], form_te: ["tte kudasai", "ってください"], form_imp: ["inasai", "いなさい"], form_tai: ["itai desu", "いたいです"]
    },
    "ru_ru": {
        inf_pres: ["ru", "る"], inf_past: ["ta", "た"], inf_presNeg: ["nai", "ない"], inf_pastNeg: ["nakatta", "なかった"], inf_te: ["te", "て"], inf_imp: ["ro", "ろ"], inf_tai: ["tai", "たい"],
        form_pres: ["masu", "ます"], form_past: ["mashita", "ました"], form_presNeg: ["masen", "ません"], form_pastNeg: ["masendeshita", "ませんでした"], form_te: ["te kudasai", "てください"], form_imp: ["nasai", "なさい"], form_tai: ["tai desu", "たいです"]
    }
};

const irregulars = {
    "suru": {
        inf_pres: ["suru", "する"], inf_past: ["shita", "した"], inf_presNeg: ["shinai", "しない"], inf_pastNeg: ["shinakatta", "しなかった"], inf_te: ["shite", "して"], inf_imp: ["shiro", "しろ"], inf_tai: ["shitai", "したい"],
        form_pres: ["shimasu", "します"], form_past: ["shimashita", "しました"], form_presNeg: ["shimasen", "しません"], form_pastNeg: ["shimasendeshita", "しませんでした"], form_te: ["shite kudasai", "してください"], form_imp: ["shinasai", "しなさい"], form_tai: ["shitai desu", "したいです"]
    },
    "kuru": {
        inf_pres: ["kuru", "くる"], inf_past: ["kita", "きた"], inf_presNeg: ["konai", "こない"], inf_pastNeg: ["konakatta", "こなかった"], inf_te: ["kite", "きて"], inf_imp: ["koi", "こい"], inf_tai: ["kitai", "きたい"],
        form_pres: ["kimasu", "きます"], form_past: ["kimashita", "きました"], form_presNeg: ["kimasen", "きません"], form_pastNeg: ["kimasendeshita", "きませんでした"], form_te: ["kite kudasai", "きてください"], form_imp: ["kinasai", "きなさい"], form_tai: ["kitai desu", "きたいです"]
    },
    "aru": {
        inf_pres: ["aru", "ある"], inf_past: ["atta", "あった"], inf_presNeg: ["nai", "ない"], inf_pastNeg: ["nakatta", "なかった"],
        form_pres: ["arimasu", "あります"], form_past: ["arimashita", "ありました"], form_presNeg: ["arimasen", "ありません"], form_pastNeg: ["arimasendeshita", "ありませんでした"]
    },
    "kureru": {
        inf_pres: ["kureru", "くれる"], inf_past: ["kureta", "くれた"], inf_presNeg: ["kurenai", "くれない"], inf_pastNeg: ["kurenakatta", "くれなかった"], inf_te: ["kurete", "くれて"], inf_imp: ["kure", "くれ"], inf_tai: ["kuretai", "くれたい"],
        form_pres: ["kuremasu", "くれます"], form_past: ["kuremashita", "くれました"], form_presNeg: ["kuremasen", "くれません"], form_pastNeg: ["kuremasendeshita", "くれませんでした"], form_imp: ["kudasai", "ください"], form_tai: ["kuretai desu", "くれたいです"]
    }
};

const formLabels = {
    inf_pres: "Presente (Informal)", inf_past: "Pasado (Informal)", inf_presNeg: "Presente Negativo (Informal)", inf_pastNeg: "Pasado Negativo (Informal)",
    inf_te: "Forma -te (Informal)", inf_imp: "Imperativo (Informal)", inf_tai: "Deseo (Informal)",
    form_pres: "Presente (Formal)", form_past: "Pasado (Formal)", form_presNeg: "Presente Negativo (Formal)", form_pastNeg: "Pasado Negativo (Formal)",
    form_te: "Forma -te (Formal/Kudasai)", form_imp: "Imperativo Formal (Nasai)", form_tai: "Deseo (Formal)"
};

// Base de datos oficial depurada y ajustada exactamente a 50 verbos esenciales sin duplicados conflictivos
const verbList = [
    { es: "Hacer", r: "su", h: "す", type: "suru" }, 
    { es: "Venir", r: "ku", h: "く", type: "kuru" },
    { es: "Haber/Estar objetos", r: "a", h: "あ", type: "aru" }, 
    { es: "Haber/Estar vivos", r: "i", h: "い", type: "ru_ru" },
    { es: "Dar (hacia otros)", r: "age", h: "あげ", type: "ru_ru" }, 
    { es: "Dar (hacia mi)", r: "kure", h: "くれ", type: "kureru" },
    { es: "Recibir", r: "mora", h: "もら", type: "u" }, 
    { es: "Ir", r: "i", h: "い", type: "iku" },
    { es: "Beber", r: "no", h: "の", type: "mu" }, 
    { es: "Hablar", r: "hana", h: "はな", type: "su" },
    { es: "Escuchar/Preguntar", r: "ki", h: "き", type: "ku" }, 
    { es: "Comprar", r: "ka", h: "か", type: "u" },
    { es: "Encontrarse con", r: "a", h: "あ", type: "u" }, 
    { es: "Volver a casa", r: "kae", h: "かえ", type: "ru_u" },
    { es: "Leer", r: "yo", h: "よ", type: "mu" }, 
    { es: "Escribir", r: "ka", h: "か", type: "ku" },
    { es: "Esperar", r: "ma", h: "ま", type: "tsu" }, 
    { es: "Hacer/Cocinar", r: "tsuku", h: "つく", type: "ru_u" },
    { es: "Entender", r: "waka", h: "わか", type: "ru_u" }, 
    { es: "Pensar/Empatía", r: "omo", h: "おも", type: "u" },
    { es: "Cantar", r: "uta", h: "うた", type: "u" }, 
    { es: "Caminar", r: "aru", h: "ある", type: "ku" },
    { es: "Volar/Saltar", r: "to", h: "と", type: "bu" }, 
    { es: "Nadar", r: "oyo", h: "およ", type: "gu" },
    { es: "Morir", r: "shi", h: "し", type: "nu" }, 
    { es: "Terminar", r: "owa", h: "おわ", type: "ru_u" },
    { es: "Empezar", r: "hajima", h: "はじま", type: "ru_u" }, 
    { es: "Usar", r: "tsuka", h: "つか", type: "u" },
    { es: "Poner/Colocar", r: "o", h: "お", type: "ku" }, 
    { es: "Tomar/Coger", r: "to", h: "と", type: "ru_u" },
    { es: "Subir a transporte", r: "no", h: "の", type: "ru_u" }, 
    { es: "Sacar", r: "da", h: "だ", type: "su" },
    { es: "Correr", r: "hashi", h: "はし", type: "ru_u" }, 
    { es: "Caerse", r: "koro", h: "ころ", type: "bu" }, 
    { es: "Jugar", r: "aso", h: "あそ", type: "bu" },
    { es: "Vivir en un lugar", r: "su", h: "す", type: "mu" }, 
    { es: "Comer", r: "tabe", h: "たべ", type: "ru_ru" }, 
    { es: "Ver/Mirar", r: "mi", h: "み", type: "ru_ru" },
    { es: "Dormir", r: "ne", h: "ね", type: "ru_ru" }, 
    { es: "Levantarse", r: "oki", h: "おき", type: "ru_ru" },
    { es: "Enseñar", r: "oshie", h: "おしえ", type: "ru_ru" }, 
    { es: "Cerrar", r: "shime", h: "しめ", type: "ru_ru" },
    { es: "Abrir", r: "ake", h: "あけ", type: "ru_ru" }, 
    { es: "Poder", r: "deki", h: "でき", type: "ru_ru" },
    { es: "Recordar", r: "oboe", h: "おぼえ", type: "ru_ru" }, 
    { es: "Olvidar", r: "wasure", h: "わすれ", type: "ru_ru" },
    { es: "Dejar/Parar", r: "yame", h: "やめ", type: "ru_ru" }, 
    { es: "Pensar/Analizar", r: "kangae", h: "かんγae"/* Fix encoding representation */, h: "かんがえ", type: "ru_ru" },
    { es: "Vestirse", r: "ki", h: "き", type: "ru_ru" }, 
    { es: "Pedir prestado", r: "kari", h: "かり", type: "ru_ru" }
];

// === NUEVA FUNCIÓN DE BARAJE (Aleatoriedad Real sin Sesgo) ===
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// === LÓGICA DE AUDIO GLOBAL PARA EL QUIZ ===
window.playQuizAudio = function(text, btnElement, event) {
    // Prevenir que el click en el audio seleccione la respuesta
    if (event) event.stopPropagation();

    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
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

let db = [];

function generateDatabase() {
    let allVerbsData = [];
    
    for (let v of verbList) {
        let conjugated = { meta: v, forms: {} };
        let formsDict = irregulars[v.type] || conjugations[v.type];
        
        for (let formKey in formsDict) {
            let suffix = formsDict[formKey];
            let r_stem = (v.type in irregulars) ? "" : v.r;
            let h_stem = (v.type in irregulars) ? "" : v.h;
            
            let full_r = r_stem + suffix[0];
            let full_h = h_stem + suffix[1];
            
            full_r = full_r.charAt(0).toUpperCase() + full_r.slice(1);
            conjugated.forms[formKey] = { t: full_r, h: full_h };
        }
        allVerbsData.push(conjugated);
    }

    for (let v of allVerbsData) {
        let dictForm = v.forms['inf_pres'] ? v.forms['inf_pres'].t : v.meta.es;
        let dictFormHiragana = v.forms['inf_pres'] ? v.forms['inf_pres'].h : "";
        
        for (let formKey in v.forms) {
            let correctOpt = v.forms[formKey];
            let qText = `¿${formLabels[formKey]} de '${dictForm}' (${v.meta.es})?`;
            
            let options = [correctOpt];
            let attempts = 0;
            
            while (options.length < 4 && attempts < 100) {
                attempts++;
                let isSameVerb = Math.random() > 0.5;
                let wrongOpt = null;
                
                if (isSameVerb) {
                    let formKeys = Object.keys(v.forms);
                    let randomFormKey = formKeys[Math.floor(Math.random() * formKeys.length)];
                    wrongOpt = v.forms[randomFormKey];
                } else {
                    let randomVerb = allVerbsData[Math.floor(Math.random() * allVerbsData.length)];
                    if (randomVerb.forms[formKey]) {
                        wrongOpt = randomVerb.forms[formKey];
                    }
                }
                
                if (wrongOpt && wrongOpt.t !== correctOpt.t && !options.some(o => o.t === wrongOpt.t)) {
                    options.push(wrongOpt);
                }
            }

            db.push({
                q: qText,
                baseH: dictFormHiragana,
                options: options,
                answer: correctOpt.t
            });
        }
    }
}

generateDatabase();

// === LÓGICA DEL JUEGO ===
let questions = [], totalLimit = 10, currentIdx = 0, score = 0, history = [], isFinished = false;

function startGame() {
    const select = document.getElementById('num-questions');
    const errorMsg = document.getElementById('error-msg');
    
    // Control visual de errores en lugar de usar alerts nativos
    if (!select.value) { 
        errorMsg.classList.remove('hidden'); 
        return; 
    }
    
    errorMsg.classList.add('hidden');
    totalLimit = select.value === "all" ? db.length : parseInt(select.value);
    
    // Barajamos perfectamente la colección entera de preguntas generadas
    let pool = [...db];
    shuffleArray(pool);
    questions = pool.slice(0, Math.min(totalLimit, db.length));
    
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    if (currentIdx >= questions.length) return finish();
    const q = questions[currentIdx];
    
    // Actualizar barra e indicadores en UI
    const currentQuestionNum = currentIdx + 1;
    document.getElementById('progress').textContent = `Pregunta ${currentQuestionNum}/${questions.length}`;
    
    const percentage = (currentIdx / questions.length) * 100;
    document.getElementById('progress-bar').style.width = `${percentage}%`;
    
    // Mostrar la pregunta y el botón de audio para el verbo base
    document.getElementById('question').innerHTML = `
        <div class="flex justify-between items-start gap-4">
            <span>${q.q}</span>
            <button onclick="playQuizAudio('${q.baseH}', this, event)" class="shrink-0 text-slate-300 hover:text-[#d1513c] transition-colors p-2 rounded-full hover:bg-slate-50 active:bg-slate-100" title="Escuchar verbo original" aria-label="Escuchar verbo original">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M11 5L6 9H2v6h4l5 4V5z"></path>
                </svg>
            </button>
        </div>
    `;
    
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    
    // Mezcla perfecta de las 4 opciones de respuesta para que nunca sigan patrones predecibles
    let shuffledOptions = [...q.options];
    shuffleArray(shuffledOptions);
    
    shuffledOptions.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = "w-full text-left p-4 rounded-xl border border-slate-200 btn-option transition-all font-medium text-slate-700 focus:outline-none select-none bg-white flex justify-between items-center group";
        
        btn.innerHTML = `
            <span>${opt.t} <span class="text-slate-400 font-normal ml-1">(${opt.h})</span></span>
            <div onclick="playQuizAudio('${opt.h}', this, event)" class="shrink-0 text-slate-200 group-hover:text-slate-400 hover:!text-[#d1513c] transition-colors p-2 rounded-full hover:bg-slate-50 active:bg-slate-100" title="Escuchar opción" aria-label="Escuchar opción">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M11 5L6 9H2v6h4l5 4V5z"></path>
                </svg>
            </div>
        `;
        
        btn.onclick = () => {
            const isCorrect = (opt.t === q.answer);
            history.push({ q: q.q, ans: opt.t, corr: q.answer, ok: isCorrect });
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
    while (history.length < questions.length) {
        const q = questions[history.length];
        history.push({ q: q.q, ans: "---", corr: q.answer, ok: false });
    }
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    document.getElementById('final-score').textContent = `${score} / ${questions.length * 10} pts`;
    
    document.getElementById('log').innerHTML = history.map((h, i) => `
        <div class="mb-3 p-3 border-b border-amber-100/50 ${h.ok ? 'text-emerald-700 bg-emerald-50/50' : 'text-red-700 bg-red-50/30'} rounded-xl">
            <span class="font-bold">${i+1}.</span> ${h.q}<br>
            <strong class="text-xs">Respuesta: ${h.ans} ${h.ok ? '✓' : '<span class="text-[10px] font-normal text-slate-500 block mt-1">(Correcta: ' + h.corr + ')</span>'}</strong>
        </div>`).join('');
}