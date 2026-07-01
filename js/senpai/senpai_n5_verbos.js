// LÓGICA DE AUDIO: Reproducir la forma de diccionario pura
        function playVerbAudio(text, btnElement, event) {
            if (event) event.stopPropagation();

            if ('speechSynthesis' in window) {
                window.speechSynthesis.cancel(); // Cancelar audios en cola
                
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
            } else {
                alert("Lo sentimos, tu navegador no soporta la reproducción de audio nativa.");
            }
        }

        // Helper para compactar la entrada de datos de las conjugaciones
        function makeC(arr) {
            return {
                pres: { i: arr[0], f: arr[1] },
                past: { i: arr[2], f: arr[3] },
                neg: { i: arr[4], f: arr[5] },
                pastneg: { i: arr[6], f: arr[7] },
                te: { i: arr[8], f: arr[9] },
                imp: { i: arr[10], f: arr[11] },
                des: { i: arr[12], f: arr[13] }
            };
        }

        // === BASE DE DATOS DE VERBOS COMPLETOS CON ROMAJI ===
        const verbData = [
            // IRREGULARES
            { category: 'Irregulares', kanji: 'する', hiragana: 'suru', translation: 'Hacer', conj: makeC([
                'する (suru)', 'します (shimasu)', 'した (shita)', 'しました (shimashita)', 'しない (shinai)', 'しません (shimasen)', 'しなかった (shinakatta)', 'しませんでした (shimasendeshita)', 'して (shite)', 'してください (shite kudasai)', 'しろ (shiro)', 'しなさい (shinasai)', 'したい (shitai)', 'したいです (shitai desu)'
            ])},
            { category: 'Irregulares', kanji: '来る', hiragana: 'くる (kuru)', translation: 'Venir', conj: makeC([
                'くる (kuru)', 'きます (kimasu)', 'きた (kita)', 'きました (kimashita)', 'こない (konai)', 'きません (kimasen)', 'こなかった (konakatta)', 'きませんでした (kimasendeshita)', 'きて (kite)', 'きてください (kite kudasai)', 'こい (koi)', 'きなさい (kinasai)', 'きたい (kitai)', 'きたいです (kitai desu)'
            ])},
            
            // DAR / RECIBIR
            { category: 'Dar / Recibir', kanji: 'あげる', hiragana: 'ageru', translation: 'Dar (hacia otro)', conj: makeC([
                'あげる (ageru)', 'あげます (agemasu)', 'あげた (ageta)', 'あげました (agemashita)', 'あげない (agenai)', 'あげません (agemasen)', 'あげなかった (agenakatta)', 'あげませんでした (agemasendeshita)', 'あげて (agete)', 'あげてください (agete kudasai)', 'あげろ (agero)', 'あげなさい (agenasai)', 'あげたい (agetai)', 'あげたいです (agetai desu)'
            ])},
            { category: 'Dar / Recibir', kanji: 'くれる', hiragana: 'kureru', translation: 'Dar (hacia mí)', conj: makeC([
                'くれる (kureru)', 'くれます (kuremasu)', 'くれた (kureta)', 'くれました (kuremashita)', 'くれない (kurenai)', 'くれません (kuremasen)', 'くれなかった (kurenakatta)', 'くれませんでした (kuremasendeshita)', 'くれて (kurete)', '-', 'くれ (kure)', 'ください (kudasai)', 'くれたい (kuretai)', 'くれたいです (kuretai desu)'
            ])},
            { category: 'Dar / Recibir', kanji: 'もらう', hiragana: 'morau', translation: 'Recibir', conj: makeC([
                'もらう (morau)', 'もらいます (moraimasu)', 'もらった (moratta)', 'もらいました (moraimashita)', 'もらわない (morawanai)', 'もらいません (moraimasen)', 'もらわなかった (morawanakatta)', 'もらいませんでした (moraimasendeshita)', 'もらって (moratte)', 'もらってください (moratte kudasai)', 'もらえ (morae)', 'もらいなさい (morainasai)', 'もらいたい (moraitai)', 'もらいたいです (moraitai desu)'
            ])},

            // GRUPO 1
            { category: 'Grupo 1', kanji: 'ある', hiragana: 'aru', translation: 'Haber / Estar (objetos)', conj: makeC([
                'ある (aru)', 'あります (arimasu)', 'あった (atta)', 'ありました (arimashita)', 'ない (nai)', 'ありません (arimasen)', 'なかった (nakatta)', 'ありませんでした (arimasendeshita)', '-', '-', '-', '-', '-', '-'
            ])},
            { category: 'Grupo 1', kanji: '行く', hiragana: 'いく (iku)', translation: 'Ir', conj: makeC([
                'いく (iku)', 'いきます (ikimasu)', 'いった (itta)', 'いきました (ikimashita)', 'いかない (ikanai)', 'いきません (ikimasen)', 'いかなかった (ikanakatta)', 'いきませんでした (ikimasendeshita)', 'いって (itte)', 'いってください (itte kudasai)', 'いけ (ike)', 'いきなさい (ikinasai)', 'いきたい (ikitai)', 'いきたいです (ikitai desu)'
            ])},
            { category: 'Grupo 1', kanji: '飲む', hiragana: 'のむ (nomu)', translation: 'Beber', conj: makeC([
                'のむ (nomu)', 'のみます (nomimasu)', 'のんだ (nonda)', 'のみました (nomimashita)', 'のまない (nomanai)', 'のみません (nomimasen)', 'のまなかった (nomanakatta)', 'のみませんでした (nomimasendeshita)', 'のんで (nonde)', 'のんでください (nonde kudasai)', 'のめ (nome)', 'のみなさい (nominasai)', 'のみたい (nomitai)', 'のみたいです (nomitai desu)'
            ])},
            { category: 'Grupo 1', kanji: '話す', hiragana: 'はなす (hanasu)', translation: 'Hablar', conj: makeC([
                'はなす (hanasu)', 'はなします (hanashimasu)', 'はなした (hanashita)', 'はなしました (hanashimashita)', 'はなさない (hanasanai)', 'はなしません (hanashimasen)', 'はなさなかった (hanasanakatta)', 'はなしませんでした (hanashimasendeshita)', 'はなして (hanashite)', 'はなしてください (hanashite kudasai)', 'はなせ (hanase)', 'はなしなさい (hanashinasai)', 'はなしたい (hanashitai)', 'はなしたいです (hanashitai desu)'
            ])},
            { category: 'Grupo 1', kanji: '聞く', hiragana: 'きく (kiku)', translation: 'Escuchar / Preguntar', conj: makeC([
                'きく (kiku)', 'ききます (kikimasu)', 'きいた (kiita)', 'ききました (kikimashita)', 'きかない (kikanai)', 'ききません (kikimasen)', 'きかなかった (kikanakatta)', 'ききませんでした (kikimasendeshita)', 'きいて (kiite)', 'きいてください (kiite kudasai)', 'きけ (kike)', 'ききなさい (kikinasai)', 'ききたい (kikitai)', 'ききたいです (kikitai desu)'
            ])},
            { category: 'Grupo 1', kanji: '買う', hiragana: 'かう (kau)', translation: 'Comprar', conj: makeC([
                'かう (kau)', 'かいます (kaimasu)', 'かった (katta)', 'かいました (kaimashita)', 'かわない (kawanai)', 'かいません (kaimasen)', 'かわなかった (kawanakatta)', 'かいませんでした (kaimasendeshita)', 'かって (katte)', 'かってください (katte kudasai)', 'かえ (kae)', 'かいなさい (kainasai)', 'かいたい (kaitai)', 'かいたいです (kaitai desu)'
            ])},
            { category: 'Grupo 1', kanji: '会う', hiragana: 'あう (au)', translation: 'Encontrarse con', conj: makeC([
                'あう (au)', 'あいます (aimasu)', 'あった (atta)', 'あいました (aimashita)', 'あわない (awanai)', 'あいません (aimasen)', 'あわなかった (awanakatta)', 'あいませんでした (aimasendeshita)', 'あって (atte)', 'あってください (atte kudasai)', 'あえ (ae)', 'あいなさい (ainasai)', 'あいたい (aitai)', 'あいたいです (aitai desu)'
            ])},
            { category: 'Grupo 1', kanji: '帰る', hiragana: 'かえる (kaeru)', translation: 'Volver a casa', conj: makeC([
                'かえる (kaeru)', 'かえります (kaerimasu)', 'かえった (kaetta)', 'かえりました (kaerimashita)', 'かえらない (kaeranai)', 'かえりません (kaerimasen)', 'かえらなかった (kaeranakatta)', 'かえりませんでした (kaerimasendeshita)', 'かえって (kaette)', 'かえってください (kaette kudasai)', 'かえれ (kaere)', 'かえりなさい (kaerinasai)', 'かえりたい (kaeritai)', 'かえりたいです (kaeritai desu)'
            ])},
            { category: 'Grupo 1', kanji: '読む', hiragana: 'よむ (yomu)', translation: 'Leer', conj: makeC([
                'よむ (yomu)', 'よみます (yomimasu)', 'よんだ (yonda)', 'よみました (yomimashita)', 'よまない (yomanai)', 'よみません (yomimasen)', 'よまなかった (yomanakatta)', 'よみませんでした (yomimasendeshita)', 'よんで (yonde)', 'よんでください (yonde kudasai)', 'よめ (yome)', 'よみなさい (yominasai)', 'よみたい (yomitai)', 'よみたいです (yomitai desu)'
            ])},
            { category: 'Grupo 1', kanji: '書く', hiragana: 'かく (kaku)', translation: 'Escribir', conj: makeC([
                'かく (kaku)', 'かきます (kakimasu)', 'かいた (kaita)', 'かきました (kakimashita)', 'かかない (kakanai)', 'かきません (kakimasen)', 'かかなかった (kakanakatta)', 'かきませんでした (kakimasendeshita)', 'かいて (kaite)', 'かいてください (kaite kudasai)', 'かけ (kake)', 'かきなさい (kakinasai)', 'かきたい (kakitai)', 'かきたいです (kakitai desu)'
            ])},
            { category: 'Grupo 1', kanji: '待つ', hiragana: 'まつ (matsu)', translation: 'Esperar', conj: makeC([
                'まつ (matsu)', 'まちます (machimasu)', 'まった (matta)', 'まちました (machimashita)', 'またない (matanai)', 'まちません (machimasen)', 'またなかった (matanakatta)', 'まちませんでした (machimasendeshita)', 'まって (matte)', 'まってください (matte kudasai)', 'まて (mate)', 'まちなさい (machinasai)', 'まちたい (machitai)', 'まちたいです (machitai desu)'
            ])},
            { category: 'Grupo 1', kanji: '作る', hiragana: 'つくる (tsukuru)', translation: 'Hacer / Cocinar', conj: makeC([
                'つくる (tsukuru)', 'つくります (tsukurimasu)', 'つくった (tsukutta)', 'つくりました (tsukurimashita)', 'つくらない (tsukuranai)', 'つくりません (tsukurimasen)', 'つくらなかった (tsukuranakatta)', 'つくりませんでした (tsukurimasendeshita)', 'つくって (tsukutte)', 'つくってください (tsukutte kudasai)', 'つくれ (tsukure)', 'つくりなさい (tsukurinasai)', 'つくりたい (tsukuritai)', 'つくりたいです (tsukuritai desu)'
            ])},
            { category: 'Grupo 1', kanji: '分かる', hiragana: 'わかる (wakaru)', translation: 'Entender', conj: makeC([
                'わかる (wakaru)', 'わかります (wakarimasu)', 'わかった (wakatta)', 'わかりました (wakarimashita)', 'わからない (wakaranai)', 'わかりません (wakarimasen)', 'わからなかった (wakaranakatta)', 'わかりませんでした (wakarimasendeshita)', 'わかって (wakatte)', 'わかってください (wakatte kudasai)', 'わかれ (wakare)', 'わかりなさい (wakarinasai)', 'わかりたい (wakaritai)', 'わかりたいです (wakaritai desu)'
            ])},
            { category: 'Grupo 1', kanji: '思う', hiragana: 'おもう (omou)', translation: 'Pensar', conj: makeC([
                'おもう (omou)', 'おもいます (omoimasu)', 'おもった (omotta)', 'おもいました (omoimashita)', 'おもわない (omowanai)', 'おもいません (omoimasen)', 'おもわなかった (omowanakatta)', 'おもいませんでした (omoimasendeshita)', 'おもって (omotte)', 'おもってください (omotte kudasai)', 'おもえ (omoe)', 'おもいなさい (omoinasai)', 'おもいたい (omoitai)', 'おもいたいです (omoitai desu)'
            ])},
            { category: 'Grupo 1', kanji: '歌う', hiragana: 'うたう (utau)', translation: 'Cantar', conj: makeC([
                'うたう (utau)', 'うたいます (utaimasu)', 'うたった (utatta)', 'うたいました (utaimashita)', 'うたわない (utawanai)', 'うたいません (utaimasen)', 'うたわなかった (utawanakatta)', 'うたいませんでした (utaimasendeshita)', 'うたって (utatte)', 'うたってください (utatte kudasai)', 'うたえ (utae)', 'うたいなさい (utainasai)', 'うたいたい (utaitai)', 'うたいたいです (utaitai desu)'
            ])},
            { category: 'Grupo 1', kanji: '歩く', hiragana: 'あるく (aruku)', translation: 'Caminar', conj: makeC([
                'あるく (aruku)', 'あるきます (arukimasu)', 'あるいた (aruita)', 'あるきました (arukimashita)', 'あるかない (arukanai)', 'あるきません (arukimasen)', 'あるかなかった (arukanakatta)', 'あるきませんでした (arukimasendeshita)', 'あるいて (aruite)', 'あるいてください (aruite kudasai)', 'あるけ (aruke)', 'あるきなさい (arukinasai)', 'あるきたい (arukitai)', 'あるきたいです (arukitai desu)'
            ])},
            { category: 'Grupo 1', kanji: '飛ぶ', hiragana: 'とぶ (tobu)', translation: 'Volar / Saltar', conj: makeC([
                'とぶ (tobu)', 'とびます (tobimasu)', 'とんだ (tonda)', 'とびました (tobimashita)', 'とばない (tobanai)', 'とびません (tobimasen)', 'とばなかった (tobanakatta)', 'とびませんでした (tobimasendeshita)', 'とんで (tonde)', 'とんでください (tonde kudasai)', 'とべ (tobe)', 'とびなさい (tobinasai)', 'とびたい (tobitai)', 'とびたいです (tobitai desu)'
            ])},
            { category: 'Grupo 1', kanji: '泳ぐ', hiragana: 'およぐ (oyogu)', translation: 'Nadar', conj: makeC([
                'およぐ (oyogu)', 'およぎます (oyogimasu)', 'およいだ (oyoida)', 'およぎました (oyogimashita)', 'およがない (oyoganai)', 'およぎません (oyogimasen)', 'およがなかった (oyoganakatta)', 'およぎませんでした (oyogimasendeshita)', 'およいで (oyoide)', 'およいでください (oyoide kudasai)', 'およげ (oyoge)', 'およぎなさい (oyoginasai)', 'およぎたい (oyogitai)', 'およぎたいです (oyogitai desu)'
            ])},
            { category: 'Grupo 1', kanji: '死ぬ', hiragana: 'しぬ (shinu)', translation: 'Morir', conj: makeC([
                'しぬ (shinu)', 'しにます (shinimasu)', 'しんだ (shinda)', 'しにました (shinimashita)', 'しなない (shinanai)', 'しにません (shinimasen)', 'しななかった (shinanakatta)', 'しにませんでした (shinimasendeshita)', 'しんで (shinde)', 'しんでください (shinde kudasai)', 'しね (shine)', 'しになさい (shininasai)', 'しにたい (shinitai)', 'しにたいです (shinitai desu)'
            ])},
            { category: 'Grupo 1', kanji: '終わる', hiragana: 'おわる (owaru)', translation: 'Terminar', conj: makeC([
                'おわる (owaru)', 'おわります (owarimasu)', 'おわった (owatta)', 'おわりました (owarimashita)', 'おわらない (owaranai)', 'おわりません (owarimasen)', 'おわらなかった (owaranakatta)', 'おわりませんでした (owarimasendeshita)', 'おわって (owatte)', 'おわってください (owatte kudasai)', 'おわれ (oware)', 'おわりなさい (owarinasai)', 'おわりたい (owaritai)', 'おわりたいです (owaritai desu)'
            ])},
            { category: 'Grupo 1', kanji: '始まる', hiragana: 'はじまる (hajimaru)', translation: 'Empezar', conj: makeC([
                'はじまる (hajimaru)', 'はじまります (hajimarimasu)', 'はじまった (hajimatta)', 'はじまりました (hajimarimashita)', 'はじまらない (hajimaranai)', 'はじまりません (hajimarimasen)', 'はじまらなかった (hajimaranakatta)', 'はじまりませんでした (hajimarimasendeshita)', 'はじまって (hajimatte)', 'はじまってください (hajimatte kudasai)', 'はじまれ (hajimare)', 'はじまりなさい (hajimarinasai)', 'はじまりたい (hajimaritai)', 'はじまりたいです (hajimaritai desu)'
            ])},
            { category: 'Grupo 1', kanji: '使う', hiragana: 'つかう (tsukau)', translation: 'Usar', conj: makeC([
                'つかう (tsukau)', 'つかいます (tsukaimasu)', 'つかった (tsukatta)', 'つかいました (tsukaimashita)', 'つかわない (tsukawanai)', 'つかいません (tsukaimasen)', 'つかわなかった (tsukawanakatta)', 'つかいませんでした (tsukaimasendeshita)', 'つかって (tsukatte)', 'つかってください (tsukatte kudasai)', 'つかえ (tsukae)', 'つかいなさい (tsukainasai)', 'つかいたい (tsukaitai)', 'つかいたいです (tsukaitai desu)'
            ])},
            { category: 'Grupo 1', kanji: '置く', hiragana: 'おく (oku)', translation: 'Poner / Colocar', conj: makeC([
                'おく (oku)', 'おきます (okimasu)', 'おいた (oita)', 'おきました (okimashita)', 'おかない (okanai)', 'おきません (okimasen)', 'おかなかった (okanakatta)', 'おきませんでした (okimasendeshita)', 'おいて (oite)', 'おいてください (oite kudasai)', 'おけ (oke)', 'おきなさい (okinasai)', 'おきたい (okitai)', 'おきたいです (okitai desu)'
            ])},
            { category: 'Grupo 1', kanji: '取る', hiragana: 'とる (toru)', translation: 'Tomar / Coger', conj: makeC([
                'とる (toru)', 'とります (torimasu)', 'とった (totta)', 'とりました (torimashita)', 'とらない (toranai)', 'とりません (torimasen)', 'とらなかった (toranakatta)', 'とりませんでした (torimasendeshita)', 'とって (totte)', 'とってください (totte kudasai)', 'とれ (tore)', 'とりなさい (torinasai)', 'とりたい (toritai)', 'とりたいです (toritai desu)'
            ])},
            { category: 'Grupo 1', kanji: '乗る', hiragana: 'のる (noru)', translation: 'Subir (transporte)', conj: makeC([
                'のる (noru)', 'のります (norimasu)', 'のった (notta)', 'のりました (norimashita)', 'のらない (noranai)', 'のりません (norimasen)', 'のらなかった (noranakatta)', 'のりませんでした (norimasendeshita)', 'のって (notte)', 'のってください (notte kudasai)', 'のれ (nore)', 'のりなさい (norinasai)', 'のりたい (noritai)', 'のりたいです (noritai desu)'
            ])},
            { category: 'Grupo 1', kanji: '出す', hiragana: 'だす (dasu)', translation: 'Sacar', conj: makeC([
                'だす (dasu)', 'だします (dashimasu)', 'だした (dashita)', 'だしました (dashimashita)', 'ださない (dasanai)', 'だしません (dashimasen)', 'ださなかった (dasanakatta)', 'だしませんでした (dashimasendeshita)', 'だして (dashite)', 'だしてください (dashite kudasai)', 'だせ (dase)', 'だしなさい (dashinasai)', 'だしたい (dashitai)', 'だしたいです (dashitai desu)'
            ])},
            { category: 'Grupo 1', kanji: 'つたう', hiragana: 'tsutau', translation: 'Seguir / Ir a lo largo', conj: makeC([
                'つたう (tsutau)', 'つたいます (tsutaimasu)', 'つたった (tsutatta)', 'つたいました (tsutaimashita)', 'つたわない (tsutawanai)', 'つたいません (tsutaimasen)', 'つたわなかった (tsutawanakatta)', 'つたいませんでした (tsutaimasendeshita)', 'つたって (tsutatte)', 'つたってください (tsutatte kudasai)', 'つたえ (tsutae)', 'つたえなさい (tsutaenasai)', 'つたいたい (tsutaitai)', 'つたいたいです (tsutaitai desu)'
            ])},
            { category: 'Grupo 1', kanji: '走る', hiragana: 'はしる (hashiru)', translation: 'Correr', conj: makeC([
                'はしる (hashiru)', 'はしります (hashirimasu)', 'はしった (hashitta)', 'はしりました (hashirimashita)', 'はしらない (hashiranai)', 'はしりません (hashirimasen)', 'はしらなかった (hashiranakatta)', 'はしりませんでした (hashirimasendeshita)', 'はしって (hashitte)', 'はしってください (hashitte kudasai)', 'はしれ (hashire)', 'はしりなさい (hashirinasai)', 'はしりたい (hashiritai)', 'はしりたいです (hashiritai desu)'
            ])},
            { category: 'Grupo 1', kanji: '転ぶ', hiragana: 'ころぶ (korobu)', translation: 'Caerse', conj: makeC([
                'ころぶ (korobu)', 'ころびます (korobimasu)', 'ころんだ (koronda)', 'ころびました (korobimashita)', 'ころばない (korobanai)', 'ころびません (korobimasen)', 'ころばなかった (korobanakatta)', 'ころびませんでした (korobimasendeshita)', 'ころんで (koronde)', 'ころんでください (koronde kudasai)', 'ころべ (korobe)', 'ころびなさい (korobinasai)', 'ころびたい (korobitai)', 'ころびたいです (korobitai desu)'
            ])},
            { category: 'Grupo 1', kanji: '遊ぶ', hiragana: 'あそぶ (asobu)', translation: 'Jugar', conj: makeC([
                'あそぶ (asobu)', 'あそびます (asobimasu)', 'あそんだ (asonda)', 'あそびました (asobimashita)', 'あそばない (asobanai)', 'あそびません (asobimasen)', 'あそばなかった (asobanakatta)', 'あそびませんでした (asobimasendeshita)', 'あそんで (asonde)', 'あそんでください (asonde kudasai)', 'あそべ (asobe)', 'あそびなさい (asobinasai)', 'あそびたい (asobitai)', 'あそびたいです (asobitai desu)'
            ])},
            { category: 'Grupo 1', kanji: '住む', hiragana: 'すむ (sumu)', translation: 'Vivir (lugar)', conj: makeC([
                'すむ (sumu)', 'すみます (sumimasu)', 'すんだ (sunda)', 'すみました (sumimashita)', 'すまない (sumanai)', 'すみません (sumimasen)', 'すまなかった (sumanakatta)', 'すみませんでした (sumimasendeshita)', 'すんで (sunde)', 'すんでください (sunde kudasai)', 'すめ (summe)', 'すみなさい (suminasai)', 'すみたい (sumitai)', 'すみたいです (sumitai desu)'
            ])},
            { category: 'Grupo 1', kanji: '飼う', hiragana: 'かう (kau)', translation: 'Tener (mascota)', conj: makeC([
                'かう (kau)', 'かいます (kaimasu)', 'かった (katta)', 'かいました (kaimashita)', 'かわない (kawanai)', 'かいません (kaimasen)', 'かわなかった (kawanakatta)', 'かいませんでした (kaimasendeshita)', 'かって (katte)', 'かってください (katte kudasai)', 'かえ (kae)', 'かいなさい (kainasai)', 'かいたい (kaitai)', 'かいたいです (kaitai desu)'
            ])},

            // GRUPO 2
            { category: 'Grupo 2', kanji: 'いる', hiragana: 'iru', translation: 'Haber / Estar (vivos)', conj: makeC([
                'いる (iru)', 'います (imasu)', 'いた (ita)', 'いました (imashita)', 'いない (inai)', 'いません (imasen)', 'いなかった (inakatta)', 'いませんでした (imasendeshita)', 'いて (ite)', 'いてください (ite kudasai)', 'いろ (iro)', 'いなさい (inasai)', 'いたい (itai)', 'いたいです (itai desu)'
            ])},
            { category: 'Grupo 2', kanji: '食べる', hiragana: 'たべる (taberu)', translation: 'Comer', conj: makeC([
                'たべる (taberu)', 'たべます (tabemasu)', 'たべた (tabeta)', 'たべました (tabemashita)', 'たべない (tabenai)', 'たべません (tabemasen)', 'たべなかった (tabenakatta)', 'たべませんでした (tabemasendeshita)', 'たべて (tabete)', 'たべてください (tabete kudasai)', 'たべろ (tabero)', 'たべなさい (tabenasai)', 'たべたい (tabetai)', 'たべたいです (tabetai desu)'
            ])},
            { category: 'Grupo 2', kanji: '見る', hiragana: 'みる (miru)', translation: 'Ver / Mirar', conj: makeC([
                'みる (miru)', 'みます (mimasu)', 'みた (mita)', 'みました (mimashita)', 'みない (minai)', 'みません (mimasen)', 'みなかった (minakatta)', 'みませんでした (mimasendeshita)', 'みて (mite)', 'みてください (mite kudasai)', 'みろ (miro)', 'みなさい (minasai)', 'みたい (mitai)', 'みたいです (mitai desu)'
            ])},
            { category: 'Grupo 2', kanji: '寝る', hiragana: 'ねる (neru)', translation: 'Dormir', conj: makeC([
                'ねる (neru)', 'ねます (nemasu)', 'ねた (neta)', 'ねました (nemashita)', 'ねない (nenai)', 'ねません (nemasen)', 'ねなかった (nenakatta)', 'ねませんでした (nemasendeshita)', 'ねて (nete)', 'ねてください (nete kudasai)', 'ねろ (nero)', 'ねなさい (nenasai)', 'ねたい (netai)', 'ねたいです (netai desu)'
            ])},
            { category: 'Grupo 2', kanji: '起きる', hiragana: 'おきる (okiru)', translation: 'Levantarse', conj: makeC([
                'おきる (okiru)', 'おきます (okimasu)', 'おきた (okita)', 'おきました (okimashita)', 'おきない (okinai)', 'おきません (okimasen)', 'おきなかった (okinakatta)', 'おきませんでした (okimasendeshita)', 'おきて (okite)', 'おきてください (okite kudasai)', 'おきろ (okiro)', 'おきなさい (okinasai)', 'おきたい (okitai)', 'おきたいです (okitai desu)'
            ])},
            { category: 'Grupo 2', kanji: '教える', hiragana: 'おしえる (oshieru)', translation: 'Enseñar', conj: makeC([
                'おしえる (oshieru)', 'おしえます (oshiemasu)', 'おしえた (oshieta)', 'おしえました (oshiemashita)', 'おしえない (oshienai)', 'おしえません (oshiemasen)', 'おしえなかった (oshienakatta)', 'おしえませんでした (oshiemasendeshita)', 'おしえて (oshiete)', 'おしえてください (oshiete kudasai)', 'おしえろ (oshiero)', 'おしえなさい (oshienasai)', 'おしえたい (oshietai)', 'おしえたいです (oshietai desu)'
            ])},
            { category: 'Grupo 2', kanji: '閉める', hiragana: 'しめる (shimeru)', translation: 'Cerrar', conj: makeC([
                'しめる (shimeru)', 'しめます (shimemasu)', 'しめた (shimeta)', 'しめました (shimemashita)', 'しめない (shimenai)', 'しめません (shimemasen)', 'しめなかった (shimenakatta)', 'しめませんでした (shimemasendeshita)', 'しめて (shimete)', 'しめてください (shimete kudasai)', 'しめろ (shimero)', 'しめなさい (shimenasai)', 'しめたい (shimetai)', 'しめたいです (shimetai desu)'
            ])},
            { category: 'Grupo 2', kanji: '開ける', hiragana: 'あける (akeru)', translation: 'Abrir', conj: makeC([
                'あける (akeru)', 'あけます (akemasu)', 'あけた (aketa)', 'あけました (akemashita)', 'あけない (akenai)', 'あけません (akemasen)', 'あけなかった (akenakatta)', 'あけませんでした (akemasendeshita)', 'あけて (akete)', 'あけてください (akete kudasai)', 'あけろ (akero)', 'あけなさい (akenasai)', 'あけたい (aketai)', 'あけたいです (aketai desu)'
            ])},
            { category: 'Grupo 2', kanji: 'できる', hiragana: 'dekiru', translation: 'Poder (ser capaz)', conj: makeC([
                'できる (dekiru)', 'できます (dekimasu)', 'できた (dekita)', 'できました (dekimashita)', 'できない (dekinai)', 'できません (dekimasen)', 'できなかった (dekinakatta)', 'できませんでした (dekimasendeshita)', '-', '-', '-', '-', 'できたい (dekitai)', 'できたいです (dekitai desu)'
            ])},
            { category: 'Grupo 2', kanji: '覚える', hiragana: 'おぼえる (oboeru)', translation: 'Recordar', conj: makeC([
                'おぼえる (oboeru)', 'おぼえます (oboemasu)', 'おぼえた (oboeta)', 'おぼえました (oboemashita)', 'おぼえない (oboenai)', 'おぼえません (oboemasen)', 'おぼえなかった (oboenakatta)', 'おぼえませんでした (oboemasendeshita)', 'おぼえて (oboete)', 'おぼえてください (oboete kudasai)', 'おぼえろ (oboero)', 'おぼえなさい (oboenasai)', 'おぼえたい (oboetai)', 'おぼえたいです (oboetai desu)'
            ])},
            { category: 'Grupo 2', kanji: '忘れる', hiragana: 'わすれる (wasureru)', translation: 'Olvidar', conj: makeC([
                'わすれる (wasureru)', 'わすれます (wasuremasu)', 'わすれた (wasureta)', 'わすれました (wasuremashita)', 'わすれない (wasurenai)', 'わすれません (wasuremasen)', 'わすれなかった (wasurenakatta)', 'わすれませんでした (wasuremasendeshita)', 'わすれて (wasurete)', 'わすれてください (wasurete kudasai)', 'わすれろ (wasurero)', 'わすれなさい (wasurenasai)', 'わすれたい (wasuretai)', 'わすれたいです (wasuretai desu)'
            ])},
            { category: 'Grupo 2', kanji: 'やめる', hiragana: 'yameru', translation: 'Dejar / Parar', conj: makeC([
                'やめる (yameru)', 'やめます (yamemasu)', 'やめた (yameta)', 'やめました (yamemashita)', 'やめない (yamenai)', 'やめません (yamemasen)', 'やめなかった (yamenakatta)', 'やめませんでした (yamemasendeshita)', 'やめて (yamete)', 'やめてください (yamete kudasai)', 'やめろ (yamero)', 'やめなさい (yamenasai)', 'やめたい (yametai)', 'やめたいです (yametai desu)'
            ])},
            { category: 'Grupo 2', kanji: '変える', hiragana: 'かえる (kaeru)', translation: 'Cambiar', conj: makeC([
                'かえる (kaeru)', 'かえます (kaemasu)', 'かえた (kaeta)', 'かえました (kaemashita)', 'かえない (kaenai)', 'かえません (kaemasen)', 'かえなかった (kaenakatta)', 'かえませんでした (kaemasendeshita)', 'かえて (kaete)', 'かえてください (kaete kudasai)', 'かえろ (kaero)', 'かえなさい (kaenasai)', 'かえたい (kaetai)', 'かえたいです (kaetai desu)'
            ])},
            { category: 'Grupo 2', kanji: '考える', hiragana: 'かんがえる (kangaeru)', translation: 'Pensar / Analizar', conj: makeC([
                'かんがえる (kangaeru)', 'かんがえます (kangaemasu)', 'かんがえた (kangaeta)', 'かんがえました (kangaemashita)', 'かんがえない (kangaenai)', 'かんがえません (kangaemasen)', 'かんがえなかった (kangaenakatta)', 'かんがえませんでした (kangaemasendeshita)', 'かんがえて (kangaete)', 'かんがえてください (kangaete kudasai)', 'かんがえろ (kangaero)', 'かんがえなさい (kangaenasai)', 'かんがえたい (kangaetai)', 'かんがえたいです (kangaetai desu)'
            ])},
            { category: 'Grupo 2', kanji: '着る', hiragana: 'きる (kiru)', translation: 'Vestirse', conj: makeC([
                'きる (kiru)', 'きます (kimasu)', 'きた (kita)', 'きました (kimashita)', 'きない (kinai)', 'きません (kimasen)', 'きなかった (kinakatta)', 'きませんでした (kimasendeshita)', 'きて (kite)', 'きてください (kite kudasai)', 'きろ (kiro)', 'きなさい (kinasai)', 'きたい (kitai)', 'きたいです (kitai desu)'
            ])},
            { category: 'Grupo 2', kanji: '借りる', hiragana: 'かりる (kariru)', translation: 'Pedir prestado', conj: makeC([
                'かりる (kariru)', 'かります (karimasu)', 'かりた (karita)', 'かりました (karimashita)', 'かりない (karinai)', 'かりません (karimasen)', 'かりなかった (karinakatta)', 'かりませんでした (karimasendeshita)', 'かりて (karite)', 'かりてください (karite kudasai)', 'かりろ (kariro)', 'かりなさい (karinasai)', 'かりたい (karitai)', 'かりたいです (karitai desu)'
            ])}
        ];

        // LÓGICA DE LA INTERFAZ
        const categories = ['Todos', 'Grupo 1', 'Grupo 2', 'Irregulares', 'Dar / Recibir'];
        
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
                    document.querySelectorAll('.filter-btn').forEach(b => {
                        b.classList.remove('active', 'bg-[#d1513c]', 'text-white', 'border-[#d1513c]', 'shadow-md', 'shadow-[#d1513c]/30');
                        b.classList.add('bg-white', 'text-slate-600', 'border-slate-200', 'shadow-sm');
                    });
                    
                    btn.classList.remove('bg-white', 'text-slate-600', 'border-slate-200', 'shadow-sm');
                    btn.classList.add('active', 'bg-[#d1513c]', 'text-white', 'border-[#d1513c]', 'shadow-md', 'shadow-[#d1513c]/30');
                    
                    filterData(category);
                };
                
                filterContainer.appendChild(btn);
            });
        }

        // Función para renderizar los bloques de conjugación interactivos
        function renderConjugationBlock(title, data) {
            if (data.i === '-' && data.f === '-') return ''; // Saltar si no se usa
            
            // Sub-función para crear un texto clickeable con audio para cada conjugación
            const renderItem = (textStr) => {
                if (textStr === '-') return '<span class="leading-tight block text-slate-300">-</span>';
                
                // Extraemos solo el japonés antes del paréntesis para el audio (ej: "します (shimasu)" -> "します")
                const japText = textStr.split(' (')[0];
                
                return `
                    <div class="flex items-start gap-1 mt-0.5 w-fit hover:bg-amber-50 p-1 -ml-1 rounded cursor-pointer transition-colors group" onclick="playVerbAudio('${japText}', this.querySelector('svg'), event)" title="Escuchar conjugación">
                        <span class="leading-tight block text-slate-700 group-hover:text-[#d1513c] transition-colors select-none">${textStr}</span>
                        <svg class="w-3.5 h-3.5 text-slate-300 group-hover:text-[#d1513c] transition-colors shrink-0 mt-[1px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M11 5L6 9H2v6h4l5 4V5z"></path></svg>
                    </div>
                `;
            };

            return `
                <div class="bg-white p-2 rounded-lg border border-amber-100/50 shadow-sm shrink-0">
                    <span class="text-[10px] font-bold text-[#d1513c] block uppercase tracking-wider mb-1">${title}</span>
                    <div class="grid grid-cols-2 gap-2 text-xs text-slate-600">
                        <div>
                            <span class="text-[9px] font-bold text-slate-400 block uppercase mb-1">Informal</span>
                            ${renderItem(data.i)}
                        </div>
                        <div>
                            <span class="text-[9px] font-bold text-slate-400 block uppercase mb-1">Formal</span>
                            ${renderItem(data.f)}
                        </div>
                    </div>
                </div>
            `;
        }

        function filterData(category) {
            const grid = document.getElementById('kanjiGrid');
            grid.innerHTML = ''; 

            const filteredData = category === 'Todos' 
                ? verbData 
                : verbData.filter(item => item.category === category);

            filteredData.forEach((item, index) => {
                const card = document.createElement('div');
                // IMPORTANT: Se añade la clase 'relative' para posicionar el botón del audio correctamente
                card.className = 'kanji-card fade-in bg-white border border-amber-100/50 rounded-2xl p-6 shadow-sm flex flex-col items-center text-center transition-all duration-300 relative';
                card.style.animationDelay = `${index * 0.02}s`; 
                
                let badgeBg = 'bg-[#fcebef]';
                let badgeText = 'text-[#d1513c]/60';
                if(item.category === 'Grupo 1') { badgeBg = 'bg-blue-50'; badgeText = 'text-blue-500/70'; }
                if(item.category === 'Grupo 2') { badgeBg = 'bg-emerald-50'; badgeText = 'text-emerald-500/70'; }
                if(item.category === 'Irregulares') { badgeBg = 'bg-purple-50'; badgeText = 'text-purple-500/70'; }

                // Extraemos la lectura del presente informal (Forma Diccionario) y le quitamos el romaji para que el audio sea perfecto
                const readingToSpeak = item.conj.pres.i.split(' ')[0];

                card.innerHTML = `
                    <!-- Botón de Audio interactivo -->
                    <button onclick="playVerbAudio('${readingToSpeak}', this, event)" class="absolute top-3 right-3 text-slate-300 hover:text-[#d1513c] transition-colors p-2 rounded-full hover:bg-slate-50 active:bg-slate-100" title="Escuchar pronunciación" aria-label="Escuchar ${item.kanji}">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M11 5L6 9H2v6h4l5 4V5z"></path>
                        </svg>
                    </button>

                    <div class="w-full flex justify-start mb-2 pr-10">
                        <span class="text-[10px] font-bold uppercase ${badgeBg} ${badgeText} px-2 py-1 rounded-md tracking-wider">
                            ${item.category}
                        </span>
                    </div>
                    <div class="hiragana text-sm font-semibold text-slate-400 mb-1 tracking-wide mt-1">
                        ${item.hiragana}
                    </div>
                    <div class="kanji text-5xl sm:text-6xl font-black text-[#d1513c] my-4 drop-shadow-sm h-16 flex items-center justify-center">
                        ${item.kanji}
                    </div>
                    <div class="translation text-xl font-bold text-[#2c405a] mb-5">
                        ${item.translation}
                    </div>
                    
                    <!-- Caja de conjugaciones desplazable -->
                    <div class="w-full mt-auto bg-[#fdf8f5] p-3 rounded-xl border-l-4 border-[#d1513c] text-left">
                        <strong class="text-[#2c405a] text-xs flex items-center gap-1 mb-2 border-b border-[#f5abb2]/30 pb-2">
                            <svg class="w-3 h-3 text-[#d1513c]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
                            Conjugaciones
                        </strong>
                        <div class="max-h-56 overflow-y-auto pr-1 flex flex-col gap-2 custom-scrollbar">
                            ${renderConjugationBlock('Presente', item.conj.pres)}
                            ${renderConjugationBlock('Pasado', item.conj.past)}
                            ${renderConjugationBlock('Negativo', item.conj.neg)}
                            ${renderConjugationBlock('Pasado Neg.', item.conj.pastneg)}
                            ${renderConjugationBlock('Forma て', item.conj.te)}
                            ${renderConjugationBlock('Imperativo', item.conj.imp)}
                            ${renderConjugationBlock('Deseo (-tai)', item.conj.des)}
                        </div>
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
