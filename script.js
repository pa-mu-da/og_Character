const statsConfig = [
    {
        id: "BRAWN", nameJa: "筋力",
        skills: [
            { id: "ENDURE", nameJa: "耐久" },
            { id: "FIGHT", nameJa: "格闘" },
            { id: "FORCE", nameJa: "突破" },
            { id: "STUNT", nameJa: "スタント" }
        ]
    },
    {
        id: "NERVES", nameJa: "神経",
        skills: [
            { id: "COOL", nameJa: "平常心" },
            { id: "DRIVE", nameJa: "操縦" },
            { id: "SHOOT", nameJa: "射撃" },
            { id: "SURVIVAL", nameJa: "サバイバル" }
        ]
    },
    {
        id: "SMOOTH", nameJa: "魅力",
        skills: [
            { id: "FLIRT", nameJa: "誘惑" },
            { id: "LEADERSHIP", nameJa: "統率" },
            { id: "SPEECH", nameJa: "話術" },
            { id: "STYLE", nameJa: "スタイル" }
        ]
    },
    {
        id: "FOCUS", nameJa: "知性",
        skills: [
            { id: "DETECT", nameJa: "看破" },
            { id: "HEAL", nameJa: "治療" },
            { id: "FIX", nameJa: "工作" },
            { id: "KNOW", nameJa: "知識" }
        ]
    },
    {
        id: "CRIME", nameJa: "犯罪",
        skills: [
            { id: "AWARENESS", nameJa: "警戒" },
            { id: "DEXTERITY", nameJa: "器用" },
            { id: "STEALTH", nameJa: "隠密" },
            { id: "STREETWISE", nameJa: "ストリート" }
        ]
    }
];

// ロールデータ
const rolesConfig = {
    "コマンドー": {
        attr: "BRAWN",
        skills: ["ENDURE", "FIGHT", "FORCE", "COOL", "SHOOT", "SURVIVAL", "LEADERSHIP", "FIX", "AWARENESS", "STEALTH"],
        feats: ["Hard to Kill", "Hunter", "Intimidation", "Marksman", "Military Background", "That’s All?"]
    },
    "ファイター": {
        attr: "BRAWN",
        skills: ["ENDURE", "FIGHT", "FORCE", "STUNT", "COOL", "FLIRT", "LEADERSHIP", "STYLE", "HEAL", "DEXTERITY"],
        feats: ["Combo", "Counter", "Flying Kick", "Hard to Kill", "Martial Arts", "Punch Reload"]
    },
    "ライダー": {
        attr: "NERVES",
        skills: ["STUNT", "COOL", "DRIVE", "SHOOT", "FLIRT", "STYLE", "FIX", "AWARENESS", "DEXTERITY", "STREETWISE"],
        feats: ["Car Jump", "Crazy Stunt", "Full Throttle!", "Mechanic", "Proven Driver", "Spinout"]
    },
    "エージェント": {
        attr: "NERVES",
        skills: ["ENDURE", "FIGHT", "STUNT", "COOL", "DRIVE", "SHOOT", "LEADERSHIP", "DETECT", "HEAL", "AWARENESS"],
        feats: ["Get Down!", "Gunslinger", "Hard to Kill", "Lie to Me", "Pep Talk", "Selfless"]
    },
    "フェイスマン": {
        attr: "SMOOTH",
        skills: ["FLIRT", "LEADERSHIP", "SPEECH", "STYLE", "DETECT", "HEAL", "KNOW", "DEXTERITY", "STEALTH", "STREETWISE"],
        feats: ["Artist", "Cash Flow", "Heartbreaker", "High Culture", "Master of Disguise", "Silver Tongue"]
    },
    "ノーバディ": {
        attr: "SMOOTH",
        skills: ["FIGHT", "SHOOT", "SURVIVAL", "LEADERSHIP", "SPEECH", "DETECT", "FIX", "HEAL", "KNOW", "DEXTERITY"],
        feats: ["I’ll Make a Phone Call", "Lie to Me", "Mechanic", "Physician", "Proven Driver", "Silver Tongue"]
    },
    "ブレーン": {
        attr: "FOCUS",
        skills: ["DRIVE", "LEADERSHIP", "SPEECH", "STYLE", "DETECT", "FIX", "HEAL", "KNOW", "DEXTERITY", "STEALTH"],
        feats: ["Hacker", "High Culture", "Intuition", "Mastermind", "Outsmart", "Scientist"]
    },
    "プライベート・アイ": {
        attr: "FOCUS",
        skills: ["ENDURE", "STUNT", "COOL", "DRIVE", "SHOOT", "DETECT", "KNOW", "AWARENESS", "STEALTH", "STREETWISE"],
        feats: ["Detective", "I’ll Make a Phone Call", "Intimidation", "Marksman", "Reporter", "Shadow"]
    },
    "クリミナル": {
        attr: "CRIME",
        skills: ["FORCE", "STUNT", "DRIVE", "SHOOT", "SURVIVAL", "SPEECH", "AWARENESS", "DEXTERITY", "STEALTH", "STREETWISE"],
        feats: ["Always Prepared", "Gunslinger", "I’ll Make a Phone Call", "Lockpick", "Pickpocket", "Silver Tongue"]
    },
    "スパイ": {
        attr: "CRIME",
        skills: ["ENDURE", "FIGHT", "STUNT", "COOL", "DRIVE", "SHOOT", "FLIRT", "DETECT", "AWARENESS", "STEALTH"],
        feats: ["Gunslinger", "Heartbreaker", "Martial Arts", "Master of Disguise", "Parkour", "Shadow"]
    }
};

// キャラ付けデータ
const tropesConfig = {
    "Bad to the Bone / 根っからの悪党": {
        attrOptions: ["NERVES", "CRIME"],
        skills: ["FORCE", "STUNT", "DRIVE", "SHOOT", "FLIRT", "STYLE", "DEXTERITY", "STREETWISE"],
        feats: ["Knife Thrower", "Parkour", "Proven Driver", "Shadow"]
    },
    "Cheater / イカサマ師": {
        attrOptions: ["SMOOTH", "CRIME"],
        skills: ["STUNT", "COOL", "SHOOT", "SPEECH", "STYLE", "DEXTERITY", "STEALTH", "STREETWISE"],
        feats: ["Pickpocket", "Lockpick", "Shadow", "Silver Tongue"]
    },
    "Cool but Distressed / クールで陰のある奴": {
        attrOptions: ["NERVES", "SMOOTH"],
        skills: ["FIGHT", "COOL", "DRIVE", "SHOOT", "FLIRT", "DETECT", "KNOW", "STREETWISE"],
        feats: ["Detective", "Gunslinger", "Proven Driver", "Silver Tongue"]
    },
    "Diehard / ダイハード": {
        attrOptions: ["BRAWN", "NERVES"],
        skills: ["ENDURE", "FORCE", "FIGHT", "COOL", "DRIVE", "SHOOT", "LEADERSHIP", "HEAL"],
        feats: ["Gunslinger", "Hard to Kill", "Martial Arts", "Military Background"]
    },
    "Free Spirit / 自由な魂": {
        attrOptions: ["BRAWN", "CRIME"],
        skills: ["FIGHT", "STUNT", "DRIVE", "SURVIVAL", "STYLE", "FIX", "STEALTH", "STREETWISE"],
        feats: ["Artist", "Parkour", "Pickpocket", "That’s All?"]
    },
    "Genius Bruiser / 暴れん坊の天才": {
        attrOptions: ["BRAWN", "FOCUS"],
        skills: ["ENDURE", "FORCE", "FIGHT", "LEADERSHIP", "SPEECH", "FIX", "KNOW", "HEAL"],
        feats: ["Bodybuilder", "High Culture", "Scientist", "That’s All?"]
    },
    "Good Samaritan / 善きサマリア人": {
        attrOptions: ["SMOOTH", "FOCUS"],
        skills: ["ENDURE", "COOL", "SHOOT", "SPEECH", "STYLE", "DETECT", "HEAL", "KNOW"],
        feats: ["Get Down!", "High Culture", "Physician", "Selfless"]
    },
    "Hot Stuff / セクシー爆弾": {
        attrOptions: ["SMOOTH", "CRIME"],
        skills: ["FIGHT", "DRIVE", "FLIRT", "STYLE", "DETECT", "KNOW", "AWARENESS", "DEXTERITY"],
        feats: ["Artist", "Cash Flow", "Heartbreaker", "I’ll Make a Phone Call"]
    },
    "Hunk / マッチョ": {
        attrOptions: ["BRAWN", "SMOOTH"],
        skills: ["ENDURE", "FORCE", "FIGHT", "STUNT", "SURVIVAL", "FLIRT", "LEADERSHIP", "STYLE"],
        feats: ["Bodybuilder", "Combo", "Intimidation", "Selfless"]
    },
    "Jerk with a Heart of Gold / 黄金の心を持つクソ野郎": {
        attrOptions: ["BRAWN", "SMOOTH"],
        skills: ["FIGHT", "SURVIVAL", "FLIRT", "SPEECH", "STYLE", "DEXTERITY", "STEALTH", "STREETWISE"],
        feats: ["Heartbreaker", "Martial Arts", "Parkour", "Silver Tongue"]
    },
    "Last Boy Scout/Girl Scout / 冒険少年/少女": {
        attrOptions: ["BRAWN", "NERVES"],
        skills: ["ENDURE", "STUNT", "COOL", "SHOOT", "SURVIVAL", "FLIRT", "FIX", "STEALTH"],
        feats: ["Hard to Kill", "Hunter", "Military Background", "Selfless"]
    },
    "Leader / リーダー": {
        attrOptions: ["NERVES", "FOCUS"],
        skills: ["ENDURE", "COOL", "SHOOT", "SURVIVAL", "LEADERSHIP", "DETECT", "HEAL", "KNOW"],
        feats: ["Always Prepared", "Get Down!", "Head on a Swivel", "Mastermind"]
    },
    "Lone Wolf / 一匹狼": {
        attrOptions: ["BRAWN", "CRIME"],
        skills: ["FORCE", "FIGHT", "STUNT", "COOL", "SURVIVAL", "FLIRT", "LEADERSHIP", "STREETWISE"],
        feats: ["Archer", "Head on a Swivel", "Martial Arts", "That’s All?"]
    },
    "Mentor / メンター": {
        attrOptions: ["SMOOTH", "FOCUS"],
        skills: ["ENDURE", "COOL", "SURVIVAL", "LEADERSHIP", "SPEECH", "HEAL", "KNOW", "AWARENESS"],
        feats: ["Always Prepared", "Mastermind", "Pep Talk", "Silver Tongue"]
    },
    "Neurotic Geek / 神経質なオタク": {
        attrOptions: ["FOCUS", "CRIME"],
        skills: ["DRIVE", "SPEECH", "DETECT", "FIX", "KNOW", "AWARENESS", "DEXTERITY", "STEALTH"],
        feats: ["Hacker", "Intuition", "Outsmart", "Scientist"]
    },
    "Party Killer / KY": {
        attrOptions: ["NERVES", "CRIME"],
        skills: ["FORCE", "STUNT", "COOL", "SHOOT", "LEADERSHIP", "AWARENESS", "STEALTH", "STREETWISE"],
        feats: ["Head on a Swivel", "Marksman", "Mastermind", "Pep Talk"]
    },
    "Trusty Sidekick / 頼れる相棒": {
        attrOptions: ["NERVES", "FOCUS"],
        skills: ["DRIVE", "SHOOT", "SURVIVAL", "SPEECH", "HEAL", "FIX", "DEXTERITY", "STEALTH"],
        feats: ["Get Down!", "Mechanic", "Physician", "Proven Driver"]
    },
    "Vigilante / 自警団根性": {
        attrOptions: ["BRAWN", "FOCUS"],
        skills: ["FIGHT", "STUNT", "LEADERSHIP", "DETECT", "FIX", "AWARENESS", "STEALTH", "STREETWISE"],
        feats: ["Intimidation", "Martial Arts", "Parkour", "Shadow"]
    }
};

// フィートデータ構成
const featsConfig = {
    "Car Jump": { name: "カージャンプ", desc: "フルターン：運転中、乗り物をジャンプさせることで障害物や障壁を自動的に突破するか、チェイス中にスピード+2を得る。着地時に乗り物はアーマーを1点失う。" },
    "Crazy Stunt": { name: "クレイジー・スタント", desc: "フルターン：運転中、チェイスに勝利するために極めて無謀な操縦を試みることができる。乗り物を破壊し、コインを投げる。表なら「必要（Need）」ボックスを1つ、裏なら5つ埋める。" },
    "Full Throttle!": { name: "フルスロットル！", desc: "ハンドルを握っている間、「緊張（Nervous）」コンディションと「最高速度」によるペナルティを無視する。チェイス中一度だけ、最高速度に達した際にアドレナリンを1点得る。" },
    "Mechanic": { name: "メカニック", desc: "乗り物やその他の装備の製作または修理を行う際、1回振り直しができる。" },
    "Proven Driver": { name: "熟練の運転手", desc: "乗り物の種類（車、バイク、航空機など）を1つ選択する。選択した種類の乗り物の運転、修理、鑑定において1回振り直しができる。" },
    "Spinout": { name: "スピンアウト", desc: "フルターン：あなたが運転する乗り物に乗っている全ヒーローは、チェイス中のリアクション・ターンをスキップする。コインを投げ、表ならスピード-1、裏ならスピード+1となる。" },
    "Get Down!": { name: "伏せろ！", desc: "フルターン：あなたともう一人のヒーローは、ダイスを振ることなく即座に隠れる、銃弾の雨を避ける、または轢かれるのを回避することができる。" },
    "Gunslinger": { name: "ガンスリンガー", desc: "ピストルまたはリボルバーの使用、修理、鑑定、取り扱いにおいて1回振り直しができる。" },
    "Lie to Me": { name: "嘘をついてみろ", desc: "誰かの意図を理解する、あるいは嘘を見抜くためのすべてのロールで1回振り直しができる。" },
    "Pep Talk": { name: "激励", desc: "他人を鼓舞したり、連携を調整したりする際に1回振り直しができる。" },
    "Selfless": { name: "無私無欲", desc: "他人を守る、助ける、あるいは無私な行動をとる際に1回振り直しができる。" },
    "Hacker": { name: "ハッカー", desc: "コンピュータに関するロール、システムのハッキング、またはITセキュリティ対策の回避におけるすべてのロールで1回振り直しができる。" },
    "Intuition": { name: "直感", desc: "クイックアクション：ディレクターに手がかりや示唆を求めるか、敵の「弱点（Weak Spot）」を見つけることができる。" },
    "Mastermind": { name: "巨悪の知恵", desc: "種類の如何を問わず、ロールを1回やり直すことができる。この際、コンディションや状況によるすべての-1ペナルティを無視する。" },
    "Outsmart": { name: "出し抜く", desc: "種類を問わずアクションまたはリアクション・ロールを行う際、指定されたスキルの代わりに「知識（Know）」スキルを使用できる。" },
    "Scientist": { name: "科学者", desc: "専修分野（工学、化学、植物学など）を1つ選択する。選択した分野に関するすべてのロールで1回振り直しができる。" },
    "Hard to Kill": { name: "ハード・トゥ・キル", desc: "BADボックスを埋めた際、アドレナリンを1点得るとともに、次のロールに+1のボーナスを得る。" },
    "Hunter": { name: "ハンター", desc: "動物の追跡や狩猟、方角の確認、または荒野での潜伏に関するすべてのロールで1回振り直しができる。" },
    "Intimidation": { name: "脅迫", desc: "誰かを威圧したり、尋問したりする際に1回振り直しができる。" },
    "Marksman": { name: "名射手", desc: "ライフル、ショットガン、サブマシンガン、またはマシンガンの使用、修理、鑑定、取り扱いにおいて1回振り直しができる。" },
    "Military Background": { name: "軍歴", desc: "軍事知識、作戦の立案、または過去の訓練を思い出す際のすべてのロールで1回振り直しができる。" },
    "That’s All?": { name: "それだけか？", desc: "勇気を示す、痛みに耐える、あるいは脅迫や尋問に抵抗するためのすべてのロールで1回振り直しができる。" },
    "Always Prepared": { name: "常に備えあり", desc: "クイックアクション：役に立つアイテム、情報、あるいは隠しやすい小型の武器を取り出す、または回収することができる。" },
    "Lockpick": { name: "鍵開け", desc: "錠前、ドア、または閉じた容器を解錠しようとする際、1回振り直しができる。" },
    "Pickpocket": { name: "スリ", desc: "誰かから何かを盗む際、1回振り直しができる。" },
    "Artist": { name: "アーティスト", desc: "芸術形式（ダンス、歌唱、絵画など）を1つ選択する。その芸術形式に関するすべてのロールで1回振り直しができる。" },
    "Cash Flow": { name: "潤沢な資金", desc: "キャッシュ3点を持ってゲームを開始する。投獄されているか、人里離れた場所で迷っていない限り、各セッションの開始時にキャッシュ1点を得る。" },
    "Heartbreaker": { name: "ハートブレイカー", desc: "他人を誘惑する、あるいは良い印象を与える際に1回振り直しができる。" },
    "High Culture": { name: "ハイカルチャー", desc: "一般教養、文学、歴史、地理に関する情報を思い出すためのすべてのロールで1回振り直しができる。" },
    "Master of Disguise": { name: "変装の達人", desc: "変装する、気づかれずに移動する、あるいは他人のアイデンティティを騙るためのすべてのロールで1回振り直しができる。" },
    "Silver Tongue": { name: "説得の達人", desc: "嘘をつく、他人を説得する、妥協点を見つける、あるいは交渉するためのすべてのロールで1回振り直しができる。" },
    "Combo": { name: "コンボ", desc: "敵に攻撃を当てた後、アドレナリンを1点消費することで追加のグリット・ダメージを1点与える。複数点のアドレナリンを消費してコンボを続け、さらなるダメージを与えることも可能。" },
    "Counter": { name: "カウンター", desc: "敵の攻撃に対するリアクションにおいて、指定されたスキルの代わりに「肉体＋格闘」でロールできる。この際、コンディションや状況によるすべての-1ペナルティを無視する。" },
    "Flying Kick": { name: "飛び蹴り", desc: "「近距離」または「中距離」にいる敵を攻撃する際、ロールに+1を得る。さらに、素手であれば「近距離」の敵を常に攻撃可能で、そのためにアドレナリンを消費する必要はない。" },
    "Martial Arts": { name: "マーシャルアーツ", desc: "素手で戦う際のすべてのアクション・ロールおよびリアクション・ロールで1回振り直しができる。" },
    "Punch Reload": { name: "パンチ・リロード", desc: "クイックアクション：1回の戦闘につき一度だけ、敵に対するリアクション・ロールに失敗した後、立ち上がって即座にアドレナリン1点を得ることができる。" },
    "I’ll Make a Phone Call": { name: "電話を一本入れよう", desc: "フルターン：連絡先に電話し、情報、便宜、乗り物、または最大3点のキャッシュを依頼する。次の「タイムアウト（休憩）」中に、依頼したものを入手できる。" },
    "Physician": { name: "医師", desc: "診断、手術、または「負傷（Hurt）」などの身体的コンディションを除去するためのすべてのロールで1回振り直しができる。" },
    "Shadow": { name: "追跡者", desc: "隠れる、忍び寄る、あるいは誰かを尾行する際に1回振り直しができる。" },
    "Knife Thrower": { name: "ナイフ投げ", desc: "投擲武器を使用する際、ロールに+1を得る。" },
    "Parkour": { name: "パルクール", desc: "ジャンプ、アクロバットな動作、または着地時の衝撃緩和を試みる際、1回振り直しができる。" },
    "Archer": { name: "射手", desc: "弓の使用、修理、鑑定、取り扱いにおいて1回振り直しができる。" },
    "Head on a Swivel": { name: "周囲への警戒", desc: "危険や待ち伏せを察知する、あるいは潜伏している敵を見つけようとする際、1回振り直しができる。" },
    "Too Young to Die": { name: "死ぬには早すぎる", desc: "バッドボックスを埋めても、コンディションを受けない。「若い（Young）」ヒーロー作成時のみ取得可能。" }
};

const lightningFeats = [
    "Car Jump", "Combo", "Counter", "Crazy Stunt", "Flying Kick",
    "Get Down!", "Intuition", "I’ll Make a Phone Call", "Mastermind",
    "Outsmart", "Spinout"
];

const FEATS_COUNT = 6;

const defaultState = {
    theme: '#E60012',
    profile: {
        name: '', role: '', trope: '', job: '', age: '', flaw: '', catchphrase: '',
        tropeAttr: '' // 選択したキャラ付けの能力値を保持
    },
    memo: '',
    image: '',
    stats: {}, // 能力値・技能の値を保持
    feats: Array(FEATS_COUNT).fill("")
};

// Ability 初期値 2, Skill 初期値 1 に設定
statsConfig.forEach(stat => {
    defaultState.stats[stat.id] = 2;
    stat.skills.forEach(skill => {
        defaultState.stats[skill.id] = 1;
    });
});

let state = JSON.parse(JSON.stringify(defaultState));

// DOMContentLoaded イベント
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    buildUI();
    bindEvents();
    renderAll();
});

// localStorage の読み込み
function loadState() {
    const saved = localStorage.getItem('outgunnedState');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            // 欠損フィールドを防ぐためのディープマージ
            state = { ...defaultState, ...parsed };
            state.profile = { ...defaultState.profile, ...(parsed.profile || {}) };
            state.stats = { ...defaultState.stats, ...(parsed.stats || {}) };
            if (!Array.isArray(state.feats)) state.feats = Array(FEATS_COUNT).fill("");
        } catch (e) {
            console.error("Local storage error, resetting to default.", e);
            state = JSON.parse(JSON.stringify(defaultState));
        }
    }
}

// localStorage への保存
function saveState() {
    localStorage.setItem('outgunnedState', JSON.stringify(state));
}

// ロール・フィートのセレクトボックスオプション更新
function updateFeatOptions() {
    const roleName = state.profile.role;
    const tropeName = state.profile.trope;
    const ageVal = state.profile.age;
    
    // ロールとキャラ付けの両方のFEATを結合し、重複を排除してソート
    let availableFeatsSet = new Set();
    if (roleName && rolesConfig[roleName]) {
        rolesConfig[roleName].feats.forEach(f => availableFeatsSet.add(f));
    }
    if (tropeName && tropesConfig[tropeName]) {
        tropesConfig[tropeName].feats.forEach(f => availableFeatsSet.add(f));
    }
    
    // ヤングの場合の特別なFEAT追加
    if (ageVal === 'ヤング') {
        availableFeatsSet.add("Too Young to Die");
    }
    
    let availableFeats = Array.from(availableFeatsSet);
    // 全て未選択の場合は全てのFEATを選択可能とする
    if (availableFeats.length === 0) {
        availableFeats = Object.keys(featsConfig);
    }
    availableFeats.sort();

    document.querySelectorAll('.feat-select').forEach((select, i) => {
        const currentValue = state.feats[i];
        let optionsHtml = '<option value="">--選択--</option>';
        
        availableFeats.forEach(featName => {
            let displayName = featsConfig[featName] ? featsConfig[featName].name : featName;
            if (lightningFeats.includes(featName)) {
                displayName += " ⚡";
            }
            optionsHtml += `<option value="${featName}">${displayName}</option>`;
        });
        
        select.innerHTML = optionsHtml;
        // 既存選択がリストにあるかチェック
        if (availableFeats.includes(currentValue)) {
            select.value = currentValue;
        } else {
            select.value = "";
            state.feats[i] = "";
        }
    });
}

// フォームのセレクトボックスやプレビューの初期DOM生成
function buildUI() {
    // ロールのセレクトボックス生成
    const roleSelect = document.getElementById('i-role');
    if (roleSelect) {
        let roleOptionsHtml = '<option value="">--選択--</option>';
        Object.keys(rolesConfig).forEach(roleName => {
            roleOptionsHtml += `<option value="${roleName}">${roleName}</option>`;
        });
        roleSelect.innerHTML = roleOptionsHtml;
        if (state.profile.role) roleSelect.value = state.profile.role;
    }

    // キャラ付けのセレクトボックス生成
    const tropeSelect = document.getElementById('i-trope');
    if (tropeSelect) {
        let tropeOptionsHtml = '<option value="">--選択--</option>';
        Object.keys(tropesConfig).forEach(tropeName => {
            tropeOptionsHtml += `<option value="${tropeName}">${tropeName.split(' / ')[1]}</option>`;
        });
        tropeSelect.innerHTML = tropeOptionsHtml;
        if (state.profile.trope) tropeSelect.value = state.profile.trope;
    }

    // フィートのセレクトボックス生成 (左ペイン)
    const featsContainer = document.getElementById('feat-inputs-container');
    featsContainer.innerHTML = '';
    for (let i = 0; i < FEATS_COUNT; i++) {
        const div = document.createElement('div');
        div.className = 'input-group';
        const label = document.createElement('label');
        label.textContent = `フィート ${i + 1}`;
        const select = document.createElement('select');
        select.className = 'feat-select';
        select.dataset.index = i;

        div.appendChild(label);
        div.appendChild(select);
        featsContainer.appendChild(div);
    }

    // フィートのオプション内容を現在のロールに基づいて生成
    updateFeatOptions();

    // 能力値・技能のUI生成 (右ペインプレビュー)
    const pStats = document.getElementById('p-stats');
    pStats.innerHTML = '';
    statsConfig.forEach(group => {
        const groupEl = document.createElement('div');
        groupEl.className = 'stat-group';

        // ヘッダー部分 (能力値)
        let headerHtml = `
            <div class="stat-header" title="${group.nameJa} / ${group.id}">
                <div class="stat-name">${group.nameJa}</div>
                <div class="diamonds attr-diamonds" data-id="${group.id}">
                    <span class="diamond-dot filled fixed" data-val="1"></span>
                    <span class="diamond-dot filled fixed" data-val="2"></span>
                    <span class="diamond-dot toggleable" data-val="3" title="クリックで切り替え"></span>
                </div>
            </div>
            <div class="skills-list">
        `;

        // リスト部分 (技能 4つ)
        group.skills.forEach(skill => {
            headerHtml += `
                <div class="skill-row" title="${skill.nameJa} / ${skill.id}">
                    <span class="skill-name">${skill.nameJa}</span>
                    <div class="diamonds skill-diamonds" data-id="${skill.id}">
                        <span class="diamond-dot filled fixed" data-val="1"></span>
                        <span class="diamond-dot toggleable" data-val="2" title="クリックで切り替え"></span>
                        <span class="diamond-dot toggleable" data-val="3" title="クリックで切り替え"></span>
                    </div>
                </div>
            `;
        });

        headerHtml += `</div>`;
        groupEl.innerHTML = headerHtml;
        pStats.appendChild(groupEl);
    });
}

// イベントバインディング
function bindEvents() {
    // テーマカラー変更
    document.querySelectorAll('input[name="theme"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            state.theme = e.target.value;
            updateAndSave();
        });
    });

    // 能力値・技能の再計算（ロール・キャラ付け変更時）
    function recalculateStats() {
        const roleName = state.profile.role;
        const tropeName = state.profile.trope;
        
        // 1. デフォルト値にリセット
        statsConfig.forEach(stat => {
            state.stats[stat.id] = 2;
            stat.skills.forEach(skill => {
                state.stats[skill.id] = 1;
            });
        });
        
        // 2. ロールのボーナスを加算
        if (roleName && rolesConfig[roleName]) {
            const roleData = rolesConfig[roleName];
            if (state.stats[roleData.attr] !== undefined) {
                state.stats[roleData.attr] += 1;
            }
            roleData.skills.forEach(skill => {
                if (state.stats[skill] !== undefined) {
                    state.stats[skill] += 1;
                }
            });
        }
        
        // 3. キャラ付けのボーナスを加算
        if (tropeName && tropesConfig[tropeName]) {
            const tropeData = tropesConfig[tropeName];
            
            // 選択された能力値があれば加算
            const selectedAttr = state.profile.tropeAttr;
            if (selectedAttr && tropeData.attrOptions.includes(selectedAttr) && state.stats[selectedAttr] !== undefined) {
                state.stats[selectedAttr] += 1;
            }
            
            tropeData.skills.forEach(skill => {
                if (state.stats[skill] !== undefined) {
                    state.stats[skill] += 1;
                }
            });
        }
    }

    // 能力値の名前をクリックしたときの処理（キャラ付けの能力値選択用）
    document.getElementById('p-stats').addEventListener('click', (e) => {
        if (e.target.classList.contains('stat-name-clickable')) {
            const statName = e.target.dataset.stat;
            const tropeName = state.profile.trope;
            
            if (tropeName && tropesConfig[tropeName]) {
                const options = tropesConfig[tropeName].attrOptions;
                if (options.includes(statName)) {
                    // 選択を更新して再計算
                    state.profile.tropeAttr = statName;
                    recalculateStats();
                    updateAndSave();
                }
            }
        }
        
        // 通常のダイヤクリック処理
        if (e.target.classList.contains('toggleable')) {
            const diamondsContainer = e.target.closest('.diamonds');
            const statId = diamondsContainer.dataset.id;
            const clickedVal = parseInt(e.target.dataset.val);

            // 切り替えロジック
            let currentVal = state.stats[statId];
            if (currentVal === clickedVal) {
                // 現在ONになっているマスの最大値をクリックした場合、そこをOFFにする (値を1下げる)
                state.stats[statId] = clickedVal - 1;
            } else {
                // まだOFFのマス、あるいは途中のマスをクリックした場合、その値を設定する
                state.stats[statId] = clickedVal;
            }
            updateAndSave();
        }
    });

    // プロフィール入力
    const profileKeys = Object.keys(defaultState.profile);
    profileKeys.forEach(key => {
        const el = document.getElementById(`i-${key}`);
        if (el) {
            el.addEventListener('input', (e) => {
                state.profile[key] = e.target.value;
                
                // ロールやキャラ付けが変更された場合
                if (key === 'role' || key === 'trope') {
                    // 新しいキャラ付けが選ばれて、前のキャラ付けの選択属性が合わない場合はクリア
                    if (key === 'trope') {
                        const newTrope = e.target.value;
                        if (newTrope && tropesConfig[newTrope]) {
                            if (!tropesConfig[newTrope].attrOptions.includes(state.profile.tropeAttr)) {
                                state.profile.tropeAttr = ''; 
                            }
                        } else {
                            state.profile.tropeAttr = '';
                        }
                    }
                    
                    recalculateStats();
                    updateFeatOptions();
                }

                // 年代が変更された場合もFEATの選択肢を更新する
                if (key === 'age') {
                    updateFeatOptions();
                }
                
                updateAndSave();
            });
        }
    });

    // 画像アップロード
    const imgInput = document.getElementById('i-image');
    imgInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (ev) => {
                state.image = ev.target.result;
                updateAndSave();
            }
            reader.readAsDataURL(file);
        }
    });

    // フィート選択
    document.querySelectorAll('.feat-select').forEach(sel => {
        sel.addEventListener('change', (e) => {
            const index = Number(e.target.dataset.index);
            state.feats[index] = e.target.value;
            updateAndSave();
        });
    });

    // メモ入力 (左にフォームがないので右側のプレビューパネルのテキストエリアに直接書き込む想定)
    const memoEl = document.getElementById('p-memo');
    if (memoEl) {
        memoEl.addEventListener('input', (e) => {
            state.memo = e.target.value;
            saveState(); // Here we just save, no need to re-render everything
        });
    }

    // リセットボタン
    const doReset = () => {
        if (confirm('全ての入力内容をリセットします。よろしいですか？')) {
            state = JSON.parse(JSON.stringify(defaultState));
            // ファイル入力のクリア
            document.getElementById('i-image').value = '';
            
            // 初期の値へ再設定
            recalculateStats();
            updateFeatOptions();
            updateAndSave();
        }
    };
    document.getElementById('btn-reset').addEventListener('click', doReset);
    const btnResetBottom = document.getElementById('btn-reset-bottom');
    if (btnResetBottom) btnResetBottom.addEventListener('click', doReset);

    // 出力ボタン
    document.getElementById('btn-export').addEventListener('click', exportImage);
    const btnExportBottom = document.getElementById('btn-export-bottom');
    if (btnExportBottom) btnExportBottom.addEventListener('click', exportImage);
}

// 画面全体を現在の state に基づいて描画更新する
function renderAll() {
    // テーマカラー適用 (CSS変数を更新)
    document.documentElement.style.setProperty('--main-color', state.theme);
    const themeRadio = document.querySelector(`input[name="theme"][value="${state.theme}"]`);
    if (themeRadio) themeRadio.checked = true;

    // プロフィール入力＆テキスト反映
    Object.keys(state.profile).forEach(key => {
        const el = document.getElementById(`i-${key}`);
        if (el && el.value !== state.profile[key]) el.value = state.profile[key];

        // プレビュー表示側
        const pEl = document.getElementById(`p-${key}`);
        if (pEl) {
            if (key === 'trope') {
                // キャラ付けは表示を日本語名に
                const tropeVal = state.profile[key];
                pEl.textContent = tropeVal ? tropeVal.split(' / ')[1] : '';
            } else {
                pEl.textContent = state.profile[key];
            }
        }

        // 追加部分のキャッチフレーズ
        if (key === 'catchphrase') {
            const bottomEl = document.getElementById('p-catchphrase-bottom');
            if (bottomEl) bottomEl.textContent = state.profile[key];
        }
    });

    // メモ反映
    const pMemo = document.getElementById('p-memo');
    if (pMemo && pMemo.value !== state.memo) {
        pMemo.value = state.memo || '';
    }

    // 画像反映
    const pImage = document.getElementById('p-image');
    if (state.image) {
        pImage.src = state.image;
    } else {
        pImage.src = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
    }

    // フィート反映
    const featsGroupEl = document.getElementById('p-feats');
    featsGroupEl.innerHTML = '';
    state.feats.forEach((featKey, i) => {
        const sel = document.querySelector(`.feat-select[data-index="${i}"]`);
        if (sel && sel.value !== featKey) sel.value = featKey;

        if (featKey && featsConfig[featKey]) {
            const featData = featsConfig[featKey];
            const isLightning = lightningFeats.includes(featKey);
            const lightningIcon = isLightning ? 
                `<svg class="feat-lightning-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="var(--main-color)"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>` : '';
            
            const featDiv = document.createElement('div');
            featDiv.className = 'feat-item';
            featDiv.innerHTML = `
                <div class="feat-name">${featData.name} ${lightningIcon}</div>
                <div class="feat-desc">${featData.desc}</div>
            `;
            featsGroupEl.appendChild(featDiv);
        } else {
            const featDiv = document.createElement('div');
            featDiv.className = 'feat-item';
            featDiv.style.opacity = "0.4";
            featDiv.style.borderLeftColor = "#ccc";
            featDiv.innerHTML = `<div class="feat-name" style="color: #999; margin: 0;">-- Empty Slot --</div>`;
            featsGroupEl.appendChild(featDiv);
        }
    });

    // 能力値・技能ダイアの表示更新とキャラ付けによる点滅処理
    const tropeName = state.profile.trope;
    let tropeAttrOptions = [];
    if (tropeName && tropesConfig[tropeName]) {
        tropeAttrOptions = tropesConfig[tropeName].attrOptions;
    }

    document.querySelectorAll('.stat-header').forEach(header => {
        const statNameEl = header.querySelector('.stat-name');
        const diamondsContainer = header.querySelector('.diamonds');
        const statId = diamondsContainer.dataset.id;
        const dots = diamondsContainer.querySelectorAll('.diamond-dot');
        const val = state.stats[statId] || 1;
        
        statNameEl.classList.remove('stat-name-clickable', 'blinking');
        statNameEl.dataset.stat = statId;
        
        // 未選択のキャラ付け能力値オプションを光らせる
        if (tropeAttrOptions.includes(statId)) {
            statNameEl.classList.add('stat-name-clickable');
            statNameEl.title = "クリックしてこの能力値を選択";
            
            if (state.profile.tropeAttr === '') {
                // まだどちらも選ばれていない場合は両方光らせる
                statNameEl.classList.add('blinking');
            } else if (state.profile.tropeAttr === statId) {
                // 選ばれた方は光らせないが、再度クリック（選択解除や変更）可能であることを示すためにclickableは残す
            }
        } else {
            statNameEl.removeAttribute('title');
        }

        dots.forEach((dot, index) => {
            const dotVal = index + 1;
            if (dotVal <= val) {
                dot.classList.add('filled');
            } else {
                dot.classList.remove('filled');
            }
        });
    });

    document.querySelectorAll('.skill-row').forEach(row => {
        const diamondsContainer = row.querySelector('.diamonds');
        if (!diamondsContainer) return;
        const skillId = diamondsContainer.dataset.id;
        const val = state.stats[skillId] || 1;
        const dots = diamondsContainer.querySelectorAll('.diamond-dot');
        
        dots.forEach((dot, index) => {
            const dotVal = index + 1;
            if (dotVal <= val) {
                dot.classList.add('filled');
            } else {
                dot.classList.remove('filled');
            }
        });
    });
}

// 状態保存＆画面描画
function updateAndSave() {
    saveState();
    renderAll();
}

// html2canvasによる画像生成
function exportImage() {
    const sheet = document.getElementById('sheet-preview');
    const exportBtn = document.getElementById('btn-export');
    const exportBtnBottom = document.getElementById('btn-export-bottom');

    // UIのフィードバック
    const originalText = "キャラクターシート生成";
    exportBtn.textContent = "画像生成中...";
    exportBtn.disabled = true;
    if (exportBtnBottom) {
        exportBtnBottom.textContent = "画像生成中...";
        exportBtnBottom.disabled = true;
    }

    // html2canvasがtextareaの文字列の折り返しを正常に処理できない問題の回避
    const memoTextarea = document.getElementById('p-memo');
    const memoDiv = document.createElement('div');
    memoDiv.className = memoTextarea.className;
    // スタイルを上書きして折り返し表示を強制
    memoDiv.style.whiteSpace = "pre-wrap";
    memoDiv.style.wordBreak = "break-word";
    memoDiv.style.overflow = "hidden";
    memoDiv.textContent = memoTextarea.value;
    memoTextarea.parentNode.insertBefore(memoDiv, memoTextarea);
    memoTextarea.style.display = 'none';

    // html2canvas実行 (高画質出力のためにscaleを調整)
    html2canvas(sheet, {
        scale: 2, // 解像度2倍で描画
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false
    }).then(canvas => {
        // メモ欄の復元
        memoTextarea.style.display = '';
        memoDiv.remove();

        const link = document.createElement('a');
        const charaName = state.profile.name ? state.profile.name.replace(/\s+/g, '_') : 'Character';
        link.download = `Outgunned_${charaName}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();

        exportBtn.textContent = originalText;
        exportBtn.disabled = false;
        if (exportBtnBottom) {
            exportBtnBottom.textContent = originalText;
            exportBtnBottom.disabled = false;
        }
    }).catch(err => {
        // エラー時も復元
        memoTextarea.style.display = '';
        memoDiv.remove();

        console.error("Export failed:", err);
        alert("画像の生成に失敗しました。");
        exportBtn.textContent = originalText;
        exportBtn.disabled = false;
        if (exportBtnBottom) {
            exportBtnBottom.textContent = originalText;
            exportBtnBottom.disabled = false;
        }
    });
}
