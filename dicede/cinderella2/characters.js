//キャラクター情報

//仲間になるキャラ
//-1でランダム、0,1,2...で各キャラを選べる
//キャラと数字の対応はcharaフォルダ参照
//仲間になる順番は左から
var char_use = new Array(-1, -1, -1, -1, -1);

//キャラクター情報のセット
function Char_set() {

  chs = new Array();

  chs[0] = new Character(
    //名前
    "島村卯月",
    //hp
    "30",
    //召喚セリフ
    "えへへ、勇者役の卯月です！",
    "今日も笑顔でがんばります！",
    //戦闘
    "300003",
    //宝箱
    "300003",
    //ライブ
    "300003",
    //画像
    "chara/0.png",
    //アビリティカテゴリ
    "4",
    //アビリティ追加効果カテゴリ
    "",
    //アビリティエフェクト
    "10",
    //アビリティ追加効果エフェクト
    "",
    //アビリティ使用可能回数
    "2",
    //アビリティ説明
    "HPを小回復する",
    //アビリティ継続ターン
    "1",
    //アビリティ追加効果継続ターン
    "",
    //アビリティウェイト
    "0",
    //マイナス効果カテゴリ
    "",
    //マイナス効果エフェクト
    "",
    //マイナス効果継続ターン
    "",
    //id
    "1",
    //ニュージェネ
    "1",
    //開放キャラ
    "0",
    //戦闘時セリフ
    "卯月、がんばります♪");

  chs[1] = new Character(
    //名前
    "白坂小梅",
    //hp
    "25",
    //召喚セリフ
    "今日はね…あの子も一緒なの…",
    "あの子も…がんばるって…",
    //戦闘
    "440006",
    //宝箱
    "400003",
    //ライブ
    "",
    //画像
    "chara/1.png",
    //アビリティカテゴリ
    "1",
    //アビリティ追加効果カテゴリ
    "5",
    //アビリティエフェクト
    "10",
    //アビリティ追加効果エフェクト
    "14",
    //アビリティ使用可能回数
    "1",
    //アビリティ説明
    "相手に中ダメージを与え\nストックのダイス1個を4の目に変える",
    //アビリティ継続ターン
    "1",
    //アビリティ追加効果継続ターン
    "1",
    //アビリティウェイト
    "1",
    //マイナス効果カテゴリ
    "",
    //マイナス効果エフェクト
    "",
    //マイナス効果継続ターン
    "",
    //id
    "2",
    //ニュージェネ
    "0",
    //開放キャラ
    "0",
    //戦闘時セリフ
    "あの子が…遊びたいって…");

  chs[2] = new Character(
    //名前
    "諸星きらり",
    //hp
    "75",
    //召喚セリフ
    "きらりんぱわーでみんな",
    "ハピハピにするんだにぃ★",
    //戦闘
    "500002",
    //宝箱
    "",
    //ライブ
    "200002",
    //画像
    "chara/2.png",
    //アビリティカテゴリ
    "3",
    //アビリティ追加効果カテゴリ
    "",
    //アビリティエフェクト
    "100",
    //アビリティ追加効果エフェクト
    "",
    //アビリティ使用可能回数
    "1",
    //アビリティ説明
    "2ターンの間、受けるダメージを0にする",
    //アビリティ継続ターン
    "2",
    //アビリティ追加効果継続ターン
    "",
    //アビリティウェイト
    "2",
    //マイナス効果カテゴリ
    "",
    //マイナス効果エフェクト
    "",
    //マイナス効果継続ターン
    "",
    //id
    "3",
    //ニュージェネ
    "0",
    //開放キャラ
    "0",
    //戦闘時セリフ
    "きらりーん☆はんまー☆");

  chs[3] = new Character(
    //名前
    "アナスタシア",
    //hp
    "25",
    //召喚セリフ
    "ズヴィズダにマギヤ…魔法の力を",
    "もらって、輝きますね",
    //戦闘
    "200003",
    //宝箱
    "500002",
    //ライブ
    "250006",
    //画像
    "chara/3.png",
    //アビリティカテゴリ
    "4",
    //アビリティ追加効果カテゴリ
    "5",
    //アビリティエフェクト
    "10",
    //アビリティ追加効果エフェクト
    "12",
    //アビリティ使用可能回数
    "2",
    //アビリティ説明
    "HPを小回復して\nストックのダイス1個を2の目に変える",
    //アビリティ継続ターン
    "1",
    //アビリティ追加効果継続ターン
    "1",
    //アビリティウェイト
    "2",
    //マイナス効果カテゴリ
    "",
    //マイナス効果エフェクト
    "",
    //マイナス効果継続ターン
    "",
    //id
    "4",
    //ニュージェネ
    "0",
    //開放キャラ
    "0",
    //戦闘時セリフ
    "ダー、いきますよ？");

  chs[4] = new Character(
    //名前
    "南条光",
    //hp
    "60",
    //召喚セリフ
    "待たせたな！ヒーロー見参！",
    "悪はアタシが必ず断つっ！",
    //戦闘
    "555060",
    //宝箱
    "",
    //ライブ
    "500002",
    //画像
    "chara/4.png",
    //アビリティカテゴリ
    "2",
    //アビリティ追加効果カテゴリ
    "",
    //アビリティエフェクト
    "100",
    //アビリティ追加効果エフェクト
    "",
    //アビリティ使用可能回数
    "1",
    //アビリティ説明
    "1ターンの間、攻撃力を2倍にする",
    //アビリティ継続ターン
    "1",
    //アビリティ追加効果継続ターン
    "",
    //アビリティウェイト
    "1",
    //マイナス効果カテゴリ
    "",
    //マイナス効果エフェクト
    "",
    //マイナス効果継続ターン
    "",
    //id
    "5",
    //ニュージェネ
    "0",
    //開放キャラ
    "0",
    //戦闘時セリフ
    "いくぞ！正義の光だ！");

  chs[5] = new Character(
    //名前
    "本田未央",
    //hp
    "25",
    //召喚セリフ
    "キラリ、スーパースター！",
    "みんな未央ちゃんに釘づけだよ♪",
    //戦闘
    "",
    //宝箱
    "600002",
    //ライブ
    "333100",
    //画像
    "chara/5.png",
    //アビリティカテゴリ
    "1",
    //アビリティ追加効果カテゴリ
    "",
    //アビリティエフェクト
    "50",
    //アビリティ追加効果エフェクト
    "",
    //アビリティ使用可能回数
    "1",
    //アビリティ説明
    "相手に極大ダメージを与える",
    //アビリティ継続ターン
    "1",
    //アビリティ追加効果継続ターン
    "",
    //アビリティウェイト
    "5",
    //マイナス効果カテゴリ
    "",
    //マイナス効果エフェクト
    "",
    //マイナス効果継続ターン
    "",
    //id
    "6",
    //ニュージェネ
    "1",
    //開放キャラ
    "0",
    //戦闘時セリフ
    "えーい！トリプルスター☆");

  chs[6] = new Character(
    //名前
    "脇山珠美",
    //hp
    "45",
    //召喚セリフ
    "拙者、さすらいの剣豪タマミ！",
    "切り捨てごめん！",
    //戦闘
    "600003",
    //宝箱
    "200003",
    //ライブ
    "",
    //画像
    "chara/6.png",
    //アビリティカテゴリ
    "1",
    //アビリティ追加効果カテゴリ
    "",
    //アビリティエフェクト
    "10",
    //アビリティ追加効果エフェクト
    "",
    //アビリティ使用可能回数
    "2",
    //アビリティ説明
    "相手に中ダメージを与える",
    //アビリティ継続ターン
    "1",
    //アビリティ追加効果継続ターン
    "",
    //アビリティウェイト
    "2",
    //マイナス効果カテゴリ
    "",
    //マイナス効果エフェクト
    "",
    //マイナス効果継続ターン
    "",
    //id
    "7",
    //ニュージェネ
    "0",
    //開放キャラ
    "0",
    //戦闘時セリフ
    "面！胴！小手ぇーっ！");

  chs[7] = new Character(
    //名前
    "城ヶ崎莉嘉",
    //hp
    "45",
    //召喚セリフ
    "あたしにかかったらクマも",
    "カブトムシもみんな友達だよ☆",
    //戦闘
    "560005",
    //宝箱
    "",
    //ライブ
    "",
    //画像
    "chara/7.png",
    //アビリティカテゴリ
    "1",
    //アビリティ追加効果カテゴリ
    "",
    //アビリティエフェクト
    "30",
    //アビリティ追加効果エフェクト
    "",
    //アビリティ使用可能回数
    "1",
    //アビリティ説明
    "相手に特大ダメージを与える",
    //アビリティ継続ターン
    "1",
    //アビリティ追加効果継続ターン
    "",
    //アビリティウェイト
    "4",
    //マイナス効果カテゴリ
    "",
    //マイナス効果エフェクト
    "",
    //マイナス効果継続ターン
    "",
    //id
    "8",
    //ニュージェネ
    "0",
    //開放キャラ
    "0",
    //戦闘時セリフ
    "いけっ、クマあたーっく☆");

  chs[8] = new Character(
    //名前
    "安部菜々",
    //hp
    "17",
    //召喚セリフ
    "キャハっ！ウサミンパワー全開で",
    "みんなにメルヘン届けます☆",
    //戦闘
    "160007",
    //宝箱
    "340007",
    //ライブ
    "250007",
    //画像
    "chara/8.png",
    //アビリティカテゴリ
    "5",
    //アビリティ追加効果カテゴリ
    "",
    //アビリティエフェクト
    "26",
    //アビリティ追加効果エフェクト
    "",
    //アビリティ使用可能回数
    "2",
    //アビリティ説明
    "ストックのダイス2個を6の目に変える",
    //アビリティ継続ターン
    "1",
    //アビリティ追加効果継続ターン
    "",
    //アビリティウェイト
    "1",
    //マイナス効果カテゴリ
    "",
    //マイナス効果エフェクト
    "",
    //マイナス効果継続ターン
    "",
    //id
    "9",
    //ニュージェネ
    "0",
    //開放キャラ
    "0",
    //戦闘時セリフ
    "メルヘンチェーンジ♪");

  chs[9] = new Character(
    //名前
    "渋谷凛",
    //hp
    "25",
    //召喚セリフ
    "剣と魔法を使いこなすのか…",
    "わかった、やってみるよ",
    //戦闘
    "250006",
    //宝箱
    "",
    //ライブ
    "140006",
    //画像
    "chara/9.png",
    //アビリティカテゴリ
    "3",
    //アビリティ追加効果カテゴリ
    "",
    //アビリティエフェクト
    "50",
    //アビリティ追加効果エフェクト
    "",
    //アビリティ使用可能回数
    "2",
    //アビリティ説明
    "2ターンの間、受けるダメージを半減する",
    //アビリティ継続ターン
    "2",
    //アビリティ追加効果継続ターン
    "",
    //アビリティウェイト
    "0",
    //マイナス効果カテゴリ
    "",
    //マイナス効果エフェクト
    "",
    //マイナス効果継続ターン
    "",
    //id
    "10",
    //ニュージェネ
    "1",
    //開放キャラ
    "0",
    //戦闘時セリフ
    "蒼の剣を受けよ！");

  chs[10] = new Character(
    //名前
    "城ヶ崎美嘉",
    //hp
    "25",
    //召喚セリフ
    "アタシが喚ばれたからには",
    "みんなをアツーくしちゃうよ★",
    //戦闘
    "600002",
    //宝箱
    "400003",
    //ライブ
    "500003",
    //画像
    "chara/10.png",
    //アビリティカテゴリ
    "1",
    //アビリティ追加効果カテゴリ
    "",
    //アビリティエフェクト
    "5",
    //アビリティ追加効果エフェクト
    "",
    //アビリティ使用可能回数
    "2",
    //アビリティ説明
    "2ターンの間、相手に小ダメージを与える",
    //アビリティ継続ターン
    "2",
    //アビリティ追加効果継続ターン
    "",
    //アビリティウェイト
    "0",
    //マイナス効果カテゴリ
    "",
    //マイナス効果エフェクト
    "",
    //マイナス効果継続ターン
    "",
    //id
    "11",
    //ニュージェネ
    "0",
    //開放キャラ
    "0",
    //戦闘時セリフ
    "お仕置きしちゃうぞ★");

  chs[11] = new Character(
    //名前
    "橘ありす",
    //hp
    "30",
    //召喚セリフ
    "まったく、頼りないですよ",
    "完璧な仕事をしますから",
    //戦闘
    "100005",
    //宝箱
    "",
    //ライブ
    "150015",
    //画像
    "chara/11.png",
    //アビリティカテゴリ
    "4",
    //アビリティ追加効果カテゴリ
    "",
    //アビリティエフェクト
    "20",
    //アビリティ追加効果エフェクト
    "",
    //アビリティ使用可能回数
    "1",
    //アビリティ説明
    "3ターンの間、HPを中回復するが\n使用すると小ダメージを受ける",
    //アビリティ継続ターン
    "3",
    //アビリティ追加効果継続ターン
    "",
    //アビリティウェイト
    "3",
    //マイナス効果カテゴリ
    "1",
    //マイナス効果エフェクト
    "30",
    //マイナス効果継続ターン
    "1",
    //id
    "12",
    //ニュージェネ
    "0",
    //開放キャラ
    "0",
    //戦闘時セリフ
    "料理してあげます");

  chs[12] = new Character(
    //名前
    "上条春菜",
    //hp
    "20",
    //召喚セリフ
    "私のお眼鏡に叶った秘薬…",
    "みんなにも分けてあげましょう！",
    //戦闘
    "330008",
    //宝箱
    "330005",
    //ライブ
    "",
    //画像
    "chara/12.png",
    //アビリティカテゴリ
    "4",
    //アビリティ追加効果カテゴリ
    "",
    //アビリティエフェクト
    "10",
    //アビリティ追加効果エフェクト
    "",
    //アビリティ使用可能回数
    "1",
    //アビリティ説明
    "2ターンの間、HPを小回復する",
    //アビリティ継続ターン
    "2",
    //アビリティ追加効果継続ターン
    "",
    //アビリティウェイト
    "1",
    //マイナス効果カテゴリ
    "",
    //マイナス効果エフェクト
    "",
    //マイナス効果継続ターン
    "",
    //id
    "13",
    //ニュージェネ
    "0",
    //開放キャラ
    "0",
    //戦闘時セリフ
    "はい、眼鏡かけたくなーる");

  chs[13] = new Character(
    //名前
    "三好紗南",
    //hp
    "30",
    //召喚セリフ
    "あたしを仲間にしてくれたら",
    "きっといいことあるかもね！",
    //戦闘
    "130005",
    //宝箱
    "300004",
    //ライブ
    "",
    //画像
    "chara/13.png",
    //アビリティカテゴリ
    "5",
    //アビリティ追加効果カテゴリ
    "",
    //アビリティエフェクト
    "10",
    //アビリティ追加効果エフェクト
    "",
    //アビリティ使用可能回数
    "5",
    //アビリティ説明
    "ストックのダイス1個をランダムに変える",
    //アビリティ継続ターン
    "1",
    //アビリティ追加効果継続ターン
    "",
    //アビリティウェイト
    "0",
    //マイナス効果カテゴリ
    "",
    //マイナス効果エフェクト
    "",
    //マイナス効果継続ターン
    "",
    //id
    "14",
    //ニュージェネ
    "0",
    //開放キャラ
    "0",
    //戦闘時セリフ
    "ゲームは一日一時間？");

  chs[14] = new Character(
    //名前
    "ﾌﾚﾃﾞﾘｶ",
    //hp
    "25",
    //召喚セリフ
    "フンフンフフーン♪とりあえず",
    "踊ってたらどうにかなりそー☆",
    //戦闘
    "",
    //宝箱
    "350007",
    //ライブ
    "130010",
    //画像
    "chara/14.png",
    //アビリティカテゴリ
    "2",
    //アビリティ追加効果カテゴリ
    "3",
    //アビリティエフェクト
    "100",
    //アビリティ追加効果エフェクト
    "50",
    //アビリティ使用可能回数
    "2",
    //アビリティ説明
    "1ターンの間、攻撃力を2倍にして\n受けるダメージを半減する",
    //アビリティ継続ターン
    "1",
    //アビリティ追加効果継続ターン
    "1",
    //アビリティウェイト
    "2",
    //マイナス効果カテゴリ
    "",
    //マイナス効果エフェクト
    "",
    //マイナス効果継続ターン
    "",
    //id
    "15",
    //ニュージェネ
    "0",
    //開放キャラ
    "0",
    //戦闘時セリフ
    "ファンタジー☆マカロン");

  chs[15] = new Character(
    //名前
    "藤本里奈",
    //hp
    "40",
    //召喚セリフ
    "アタシ、こーみえて意外と",
    "力あるしー、押してこー☆",
    //戦闘
    "240004",
    //宝箱
    "460005",
    //ライブ
    "",
    //画像
    "chara/15.png",
    //アビリティカテゴリ
    "1",
    //アビリティ追加効果カテゴリ
    "",
    //アビリティエフェクト
    "15",
    //アビリティ追加効果エフェクト
    "",
    //アビリティ使用可能回数
    "1",
    //アビリティ説明
    "相手に大ダメージを与える",
    //アビリティ継続ターン
    "1",
    //アビリティ追加効果継続ターン
    "",
    //アビリティウェイト
    "0",
    //マイナス効果カテゴリ
    "",
    //マイナス効果エフェクト
    "",
    //マイナス効果継続ターン
    "",
    //id
    "16",
    //ニュージェネ
    "0",
    //開放キャラ
    "0",
    //戦闘時セリフ
    "ごっつんこー的なー？");

  chs[16] = new Character(
    //名前
    "早坂美玲",
    //hp
    "25",
    //召喚セリフ
    "うぅ…な、なんだよッ！",
    "じろじろ見るな！ひっかくぞッ！",
    //戦闘
    "460006",
    //宝箱
    "200003",
    //ライブ
    "",
    //画像
    "chara/16.png",
    //アビリティカテゴリ
    "1",
    //アビリティ追加効果カテゴリ
    "",
    //アビリティエフェクト
    "30",
    //アビリティ追加効果エフェクト
    "",
    //アビリティ使用可能回数
    "1",
    //アビリティ説明
    "相手に特大ダメージを与えるが\n使用すると中ダメージを受ける",
    //アビリティ継続ターン
    "1",
    //アビリティ追加効果継続ターン
    "",
    //アビリティウェイト
    "1",
    //マイナス効果カテゴリ
    "1",
    //マイナス効果エフェクト
    "40",
    //マイナス効果継続ターン
    "1",
    //id
    "17",
    //ニュージェネ
    "0",
    //開放キャラ
    "0",
    //戦闘時セリフ
    "が…がおーッ！");

  chs[17] = new Character(
    //名前
    "双葉杏",
    //hp
    "45",
    //召喚セリフ
    "別に杏じゃなくてもよくない？",
    "はぁ…飴玉用意しておいてよね",
    //戦闘
    "111150",
    //宝箱
    "111150",
    //ライブ
    "111150",
    //画像
    "chara/17.png",
    //アビリティカテゴリ
    "5",
    //アビリティ追加効果カテゴリ
    "",
    //アビリティエフェクト
    "30",
    //アビリティ追加効果エフェクト
    "",
    //アビリティ使用可能回数
    "2",
    //アビリティ説明
    "ストックの全ダイスをランダムに変える",
    //アビリティ継続ターン
    "1",
    //アビリティ追加効果継続ターン
    "",
    //アビリティウェイト
    "2",
    //マイナス効果カテゴリ
    "",
    //マイナス効果エフェクト
    "",
    //マイナス効果継続ターン
    "",
    //id
    "18",
    //ニュージェネ
    "0",
    //開放キャラ
    "0",
    //戦闘時セリフ
    "杏は遊ぶのが仕事だってー");

  chs[18] = new Character(
    //名前
    "小関麗奈",
    //hp
    "60",
    //召喚セリフ
    "レイナサマが素直にいうことを",
    "聞くとは思わないことねッ！",
    //戦闘
    "",
    //宝箱
    "500004",
    //ライブ
    "",
    //画像
    "chara/18.png",
    //アビリティカテゴリ
    "1",
    //アビリティ追加効果カテゴリ
    "5",
    //アビリティエフェクト
    "15",
    //アビリティ追加効果エフェクト
    "15",
    //アビリティ使用可能回数
    "2",
    //アビリティ説明
    "相手に大ダメージを与え\nストックのダイス1個を5の目に変える",
    //アビリティ継続ターン
    "1",
    //アビリティ追加効果継続ターン
    "1",
    //アビリティウェイト
    "0",
    //マイナス効果カテゴリ
    "",
    //マイナス効果エフェクト
    "",
    //マイナス効果継続ターン
    "",
    //id
    "19",
    //ニュージェネ
    "0",
    //開放キャラ
    "1",
    //戦闘時セリフ
    "イタズラは得意よッ！");

  chs[19] = new Character(
    //名前
    "輿水幸子",
    //hp
    "50",
    //召喚セリフ
    "悪魔になってもボクはカワイイ",
    "ですからね！問題なしですよ！",
    //戦闘
    "400002",
    //宝箱
    "",
    //ライブ
    "240008",
    //画像
    "chara/19.png",
    //アビリティカテゴリ
    "1",
    //アビリティ追加効果カテゴリ
    "",
    //アビリティエフェクト
    "30",
    //アビリティ追加効果エフェクト
    "",
    //アビリティ使用可能回数
    "1",
    //アビリティ説明
    "相手に特大ダメージを与えるが\n怒って相手の攻撃力がUPする",
    //アビリティ継続ターン
    "1",
    //アビリティ追加効果継続ターン
    "",
    //アビリティウェイト
    "0",
    //マイナス効果カテゴリ
    "2",
    //マイナス効果エフェクト
    "100",
    //マイナス効果継続ターン
    "1",
    //id
    "20",
    //ニュージェネ
    "0",
    //開放キャラ
    "1",
    //戦闘時セリフ
    "ボクがイチバンですから！");

  chs[20] = new Character(
    //名前
    "神崎蘭子",
    //hp
    "20",
    //召喚セリフ
    "我を呼ぶ聖なる祈りに応えん！",
    "純白の翼の天使は、今降臨する",
    //戦闘
    "660006",
    //宝箱
    "",
    //ライブ
    "320005",
    //画像
    "chara/20.png",
    //アビリティカテゴリ
    "3",
    //アビリティ追加効果カテゴリ
    "",
    //アビリティエフェクト
    "100",
    //アビリティ追加効果エフェクト
    "",
    //アビリティ使用可能回数
    "1",
    //アビリティ説明
    "1ターンの間、受けるダメージを0にする",
    //アビリティ継続ターン
    "1",
    //アビリティ追加効果継続ターン
    "",
    //アビリティウェイト
    "1",
    //マイナス効果カテゴリ
    "",
    //マイナス効果エフェクト
    "",
    //マイナス効果継続ターン
    "",
    //id
    "21",
    //ニュージェネ
    "0",
    //開放キャラ
    "1",
    //戦闘時セリフ
    "白き聖光の裁きを受けよ！");

  chs[21] = new Character(
    //名前
    "塩見周子",
    //hp
    "15",
    //召喚セリフ
    "コンコーンッ♪喚んだかなー？",
    "お供えは、美味しい油揚げねー",
    //戦闘
    "120012",
    //宝箱
    "120006",
    //ライブ
    "100003",
    //画像
    "chara/21.png",
    //アビリティカテゴリ
    "4",
    //アビリティ追加効果カテゴリ
    "5",
    //アビリティエフェクト
    "10",
    //アビリティ追加効果エフェクト
    "21",
    //アビリティ使用可能回数
    "2",
    //アビリティ説明
    "HPを小回復して\nストックのダイス2個を1の目に変える",
    //アビリティ継続ターン
    "1",
    //アビリティ追加効果継続ターン
    "1",
    //アビリティウェイト
    "1",
    //マイナス効果カテゴリ
    "",
    //マイナス効果エフェクト
    "",
    //マイナス効果継続ターン
    "",
    //id
    "22",
    //ニュージェネ
    "0",
    //開放キャラ
    "1",
    //戦闘時セリフ
    "みんな化かしてあげるー");

  chs[22] = new Character(
    //名前
    "浅利七海",
    //hp
    "38",
    //召喚セリフ
    "釣られちゃったみたいれす～",
    "生きの良さは、ぴちぴちれすよ～",
    //戦闘
    "200004",
    //宝箱
    "",
    //ライブ
    "600002",
    //画像
    "chara/22.png",
    //アビリティカテゴリ
    "3",
    //アビリティ追加効果カテゴリ
    "5",
    //アビリティエフェクト
    "50",
    //アビリティ追加効果エフェクト
    "12",
    //アビリティ使用可能回数
    "2",
    //アビリティ説明
    "2ターンの間、受けるダメージを半減して\nストックのダイス1個を2の目に変える",
    //アビリティ継続ターン
    "1",
    //アビリティ追加効果継続ターン
    "0",
    //アビリティウェイト
    "0",
    //マイナス効果カテゴリ
    "",
    //マイナス効果エフェクト
    "",
    //マイナス効果継続ターン
    "",
    //id
    "23",
    //ニュージェネ
    "1",
    //開放キャラ
    "0",
    //戦闘時セリフ
    "びしょびしょにするれす～");

  chs[23] = new Character(
    //名前
    "多田李衣菜",
    //hp
    "35",
    //召喚セリフ
    "私に任せておけば、どんな宝も",
    "手に入るぜ…どう？ロックだろ？",
    //戦闘
    "200002",
    //宝箱
    "600009",
    //ライブ
    "",
    //画像
    "chara/23.png",
    //アビリティカテゴリ
    "5",
    //アビリティ追加効果カテゴリ
    "",
    //アビリティエフェクト
    "16",
    //アビリティ追加効果エフェクト
    "",
    //アビリティ使用可能回数
    "3",
    //アビリティ説明
    "ストックのダイス1個を6の目に変える",
    //アビリティ継続ターン
    "1",
    //アビリティ追加効果継続ターン
    "",
    //アビリティウェイト
    "0",
    //マイナス効果カテゴリ
    "",
    //マイナス効果エフェクト
    "",
    //マイナス効果継続ターン
    "",
    //id
    "24",
    //ニュージェネ
    "0",
    //開放キャラ
    "0",
    //戦闘時セリフ
    "ロックにいくよっ");

  chs[24] = new Character(
    //名前
    "新田美波",
    //hp
    "35",
    //召喚セリフ
    "戦士を導くのが、私の務めです。",
    "さあ、共にいきましょう！",
    //戦闘
    "260005",
    //宝箱
    "",
    //ライブ
    "350003",
    //画像
    "chara/24.png",
    //アビリティカテゴリ
    "1",
    //アビリティ追加効果カテゴリ
    "3",
    //アビリティエフェクト
    "5",
    //アビリティ追加効果エフェクト
    "100",
    //アビリティ使用可能回数
    "1",
    //アビリティ説明
    "相手に小ダメージを与え\n1ターンの間、受けるダメージを0にする",
    //アビリティ継続ターン
    "1",
    //アビリティ追加効果継続ターン
    "1",
    //アビリティウェイト
    "1",
    //マイナス効果カテゴリ
    "",
    //マイナス効果エフェクト
    "",
    //マイナス効果継続ターン
    "",
    //id
    "25",
    //ニュージェネ
    "0",
    //開放キャラ
    "0",
    //戦闘時セリフ
    "みなみ、いきますっ！");

  chs[25] = new Character(
    //名前
    "ライラ",
    //hp
    "100",
    //召喚セリフ
    "ライラさんはミイラさんですよー",
    "お着替えは包帯でございますー",
    //戦闘
    "",
    //宝箱
    "",
    //ライブ
    "",
    //画像
    "chara/25.png",
    //アビリティカテゴリ
    "1",
    //アビリティ追加効果カテゴリ
    "4",
    //アビリティエフェクト
    "10",
    //アビリティ追加効果エフェクト
    "10",
    //アビリティ使用可能回数
    "3",
    //アビリティ説明
    "相手に中ダメージを与え\nHPを小回復する",
    //アビリティ継続ターン
    "1",
    //アビリティ追加効果継続ターン
    "1",
    //アビリティウェイト
    "1",
    //マイナス効果カテゴリ
    "",
    //マイナス効果エフェクト
    "",
    //マイナス効果継続ターン
    "",
    //id
    "26",
    //ニュージェネ
    "0",
    //開放キャラ
    "1",
    //戦闘時セリフ
    "まきまきでございますねー");

  chs[26] = new Character(
    //名前
    "前川みく",
    //hp
    "39",
    //召喚セリフ
    "にゃんにゃにゃー♪猫チャンの",
    "可愛さを見せつけてあげるにゃー",
    //戦闘
    "222039",
    //宝箱
    "220006",
    //ライブ
    "",
    //画像
    "chara/26.png",
    //アビリティカテゴリ
    "2",
    //アビリティ追加効果カテゴリ
    "",
    //アビリティエフェクト
    "200",
    //アビリティ追加効果エフェクト
    "",
    //アビリティ使用可能回数
    "1",
    //アビリティ説明
    "1ターンの間、攻撃力を3倍にする",
    //アビリティ継続ターン
    "1",
    //アビリティ追加効果継続ターン
    "",
    //アビリティウェイト
    "3",
    //マイナス効果カテゴリ
    "",
    //マイナス効果エフェクト
    "",
    //マイナス効果継続ターン
    "",
    //id
    "27",
    //ニュージェネ
    "0",
    //開放キャラ
    "1",
    //戦闘時セリフ
    "しっぽアピールにゃん♪");

  chs[27] = new Character(
    //名前
    "三村かな子",
    //hp
    "45",
    //召喚セリフ
    "どんなお菓子が必要なのかな？",
    "かばんの中から、見つけるよ♪",
    //戦闘
    "150004",
    //宝箱
    "",
    //ライブ
    "460003",
    //画像
    "chara/27.png",
    //アビリティカテゴリ
    "2",
    //アビリティ追加効果カテゴリ
    "4",
    //アビリティエフェクト
    "100",
    //アビリティ追加効果エフェクト
    "30",
    //アビリティ使用可能回数
    "1",
    //アビリティ説明
    "1ターンの間、攻撃力を2倍にして\nHPを大回復する",
    //アビリティ継続ターン
    "1",
    //アビリティ追加効果継続ターン
    "1",
    //アビリティウェイト
    "3",
    //マイナス効果カテゴリ
    "",
    //マイナス効果エフェクト
    "",
    //マイナス効果継続ターン
    "",
    //id
    "28",
    //ニュージェネ
    "0",
    //開放キャラ
    "0",
    //戦闘時セリフ
    "甘くて美味しいですよっ♪");

  chs[28] = new Character(
    //名前
    "緒方智絵里",
    //hp
    "35",
    //召喚セリフ
    "あの…お祈りに応えてきました…",
    "私でお役に立てると…嬉しいな♪",
    //戦闘
    "",
    //宝箱
    "",
    //ライブ
    "440008",
    //画像
    "chara/28.png",
    //アビリティカテゴリ
    "4",
    //アビリティ追加効果カテゴリ
    "",
    //アビリティエフェクト
    "100",
    //アビリティ追加効果エフェクト
    "",
    //アビリティ使用可能回数
    "1",
    //アビリティ説明
    "HPを全回復する",
    //アビリティ継続ターン
    "1",
    //アビリティ追加効果継続ターン
    "",
    //アビリティウェイト
    "4",
    //マイナス効果カテゴリ
    "",
    //マイナス効果エフェクト
    "",
    //マイナス効果継続ターン
    "",
    //id
    "29",
    //ニュージェネ
    "0",
    //開放キャラ
    "0",
    //戦闘時セリフ
    "ま、負けませんから…");

  chs[29] = new Character(
    //名前
    "櫻井桃華",
    //hp
    "15",
    //召喚セリフ
    "ふふっ、わたくしがそのハートを",
    "射抜いてさしあげますわ♪",
    //戦闘
    "500004",
    //宝箱
    "160003",
    //ライブ
    "600003",
    //画像
    "chara/29.png",
    //アビリティカテゴリ
    "1",
    //アビリティ追加効果カテゴリ
    "5",
    //アビリティエフェクト
    "5",
    //アビリティ追加効果エフェクト
    "10",
    //アビリティ使用可能回数
    "2",
    //アビリティ説明
    "相手に小ダメージを与え\nストックのダイス1個をランダムに変える",
    //アビリティ継続ターン
    "1",
    //アビリティ追加効果継続ターン
    "1",
    //アビリティウェイト
    "1",
    //マイナス効果カテゴリ
    "",
    //マイナス効果エフェクト
    "",
    //マイナス効果継続ターン
    "",
    //id
    "30",
    //ニュージェネ
    "0",
    //開放キャラ
    "0",
    //戦闘時セリフ
    "決して外しませんわ");

  chs[30] = new Character(
    //名前
    "一ノ瀬志希",
    //hp
    "50",
    //召喚セリフ
    "ふっふ～♪やっぱりいい匂いー",
    "嗅がせてくれたら手伝うよー♪",
    //戦闘
    "130004",
    //宝箱
    "560005",
    //ライブ
    "",
    //画像
    "chara/30.png",
    //アビリティカテゴリ
    "2",
    //アビリティ追加効果カテゴリ
    "3",
    //アビリティエフェクト
    "100",
    //アビリティ追加効果エフェクト
    "100",
    //アビリティ使用可能回数
    "1",
    //アビリティ説明
    "1ターンの間、攻撃力を2倍にして\n受けるダメージを0にする",
    //アビリティ継続ターン
    "1",
    //アビリティ追加効果継続ターン
    "1",
    //アビリティウェイト
    "1",
    //マイナス効果カテゴリ
    "",
    //マイナス効果エフェクト
    "",
    //マイナス効果継続ターン
    "",
    //id
    "31",
    //ニュージェネ
    "0",
    //開放キャラ
    "1",
    //戦闘時セリフ
    "ハスハスしてみよー");

  chs[31] = new Character(
    //名前
    "依田芳乃",
    //hp
    "25",
    //召喚セリフ
    "わたくしを探しているのは",
    "そなたでしてー？",
    //戦闘
    "350004",
    //宝箱
    "450004",
    //ライブ
    "400002",
    //画像
    "chara/31.png",
    //アビリティカテゴリ
    "4",
    //アビリティ追加効果カテゴリ
    "5",
    //アビリティエフェクト
    "20",
    //アビリティ追加効果エフェクト
    "15",
    //アビリティ使用可能回数
    "2",
    //アビリティ説明
    "HPを中回復して\nストックのダイス1個を5の目に変える",
    //アビリティ継続ターン
    "1",
    //アビリティ追加効果継続ターン
    "1",
    //アビリティウェイト
    "3",
    //マイナス効果カテゴリ
    "",
    //マイナス効果エフェクト
    "",
    //マイナス効果継続ターン
    "",
    //id
    "32",
    //ニュージェネ
    "0",
    //開放キャラ
    "1",
    //戦闘時セリフ
    "ぶおー、ぶおー");

  chs[32] = new Character(
    //名前
    "ナターリア",
    //hp
    "55",
    //召喚セリフ
    "ナターリアを喚んでくれたの",
    "聞こえたヨ！お助けするんだナ♪",
    //戦闘
    "400003",
    //宝箱
    "",
    //ライブ
    "360005",
    //画像
    "chara/32.png",
    //アビリティカテゴリ
    "3",
    //アビリティ追加効果カテゴリ
    "5",
    //アビリティエフェクト
    "50",
    //アビリティ追加効果エフェクト
    "14",
    //アビリティ使用可能回数
    "1",
    //アビリティ説明
    "3ターンの間、受けるダメージを半減して\nストックのダイス1個を4の目に変える",
    //アビリティ継続ターン
    "3",
    //アビリティ追加効果継続ターン
    "1",
    //アビリティウェイト
    "0",
    //マイナス効果カテゴリ
    "",
    //マイナス効果エフェクト
    "",
    //マイナス効果継続ターン
    "",
    //id
    "33",
    //ニュージェネ
    "0",
    //開放キャラ
    "1",
    //戦闘時セリフ
    "いい子になるんだナー♪");

  chs[33] = new Character(
    //名前
    "相葉夕美",
    //hp
    "75",
    //召喚セリフ
    "お花を好きになってくれるなら",
    "仲良くできるよねっ♪",
    //戦闘
    "",
    //宝箱
    "100003",
    //ライブ
    "200004",
    //画像
    "chara/33.png",
    //アビリティカテゴリ
    "4",
    //アビリティ追加効果カテゴリ
    "",
    //アビリティエフェクト
    "50",
    //アビリティ追加効果エフェクト
    "",
    //アビリティ使用可能回数
    "1",
    //アビリティ説明
    "HPを半分回復する",
    //アビリティ継続ターン
    "1",
    //アビリティ追加効果継続ターン
    "",
    //アビリティウェイト
    "3",
    //マイナス効果カテゴリ
    "",
    //マイナス効果エフェクト
    "",
    //マイナス効果継続ターン
    "",
    //id
    "34",
    //ニュージェネ
    "0",
    //開放キャラ
    "0",
    //戦闘時セリフ
    "お花でいっぱいにするよっ");

  chs[34] = new Character(
    //名前
    "赤城みりあ",
    //hp
    "30",
    //召喚セリフ
    "私のどうぶつさんの魔法で",
    "みんな仲良しに変えちゃうよー☆",
    //戦闘
    "450005",
    //宝箱
    "240006",
    //ライブ
    "",
    //画像
    "chara/34.png",
    //アビリティカテゴリ
    "1",
    //アビリティ追加効果カテゴリ
    "",
    //アビリティエフェクト
    "15",
    //アビリティ追加効果エフェクト
    "",
    //アビリティ使用可能回数
    "2",
    //アビリティ説明
    "相手に大ダメージを与える",
    //アビリティ継続ターン
    "1",
    //アビリティ追加効果継続ターン
    "",
    //アビリティウェイト
    "2",
    //マイナス効果カテゴリ
    "",
    //マイナス効果エフェクト
    "",
    //マイナス効果継続ターン
    "",
    //id
    "35",
    //ニュージェネ
    "0",
    //開放キャラ
    "0",
    //戦闘時セリフ
    "なでなでしたくなるんだよ");

  chs[35] = new Character(
    //名前
    "日野茜",
    //hp
    "15",
    //召喚セリフ
    "仲間のピンチならどこからでも",
    "走って駆けつけますっ！！",
    //戦闘
    "550007",
    //宝箱
    "",
    //ライブ
    "550002",
    //画像
    "chara/35.png",
    //アビリティカテゴリ
    "1",
    //アビリティ追加効果カテゴリ
    "",
    //アビリティエフェクト
    "30",
    //アビリティ追加効果エフェクト
    "",
    //アビリティ使用可能回数
    "1",
    //アビリティ説明
    "相手に特大ダメージを与えるが\n使用すると大ダメージを受ける",
    //アビリティ継続ターン
    "1",
    //アビリティ追加効果継続ターン
    "",
    //アビリティウェイト
    "0",
    //マイナス効果カテゴリ
    "1",
    //マイナス効果エフェクト
    "50",
    //マイナス効果継続ターン
    "1",
    //id
    "36",
    //ニュージェネ
    "0",
    //開放キャラ
    "0",
    //戦闘時セリフ
    "さぁ、燃えていくぞーっ！");

  chs[36] = new Character(
    //名前
    "川島瑞樹",
    //hp
    "30",
    //召喚セリフ
    "お・ま・た・せ！氷の魔法使い",
    "マジカル☆ミズキ、只今参上よ♪",
    //戦闘
    "130005",
    //宝箱
    "500002",
    //ライブ
    "260003",
    //画像
    "chara/36.png",
    //アビリティカテゴリ
    "3",
    //アビリティ追加効果カテゴリ
    "",
    //アビリティエフェクト
    "100",
    //アビリティ追加効果エフェクト
    "",
    //アビリティ使用可能回数
    "1",
    //アビリティ説明
    "2ターンの間、受けるダメージを0にする",
    //アビリティ継続ターン
    "2",
    //アビリティ追加効果継続ターン
    "",
    //アビリティウェイト
    "0",
    //マイナス効果カテゴリ
    "",
    //マイナス効果エフェクト
    "",
    //マイナス効果継続ターン
    "",
    //id
    "37",
    //ニュージェネ
    "0",
    //開放キャラ
    "0",
    //戦闘時セリフ
    "さぁ、いくわよ♪えーい☆");

  chs[37] = new Character(
    //名前
    "十時愛梨",
    //hp
    "30",
    //召喚セリフ
    "えへへっ、みんなと一緒に",
    "熱くなっちゃいますねっ♪",
    //戦闘
    "300004",
    //宝箱
    "",
    //ライブ
    "120009",
    //画像
    "chara/37.png",
    //アビリティカテゴリ
    "4",
    //アビリティ追加効果カテゴリ
    "",
    //アビリティエフェクト
    "30",
    //アビリティ追加効果エフェクト
    "",
    //アビリティ使用可能回数
    "2",
    //アビリティ説明
    "HPを大回復する",
    //アビリティ継続ターン
    "1",
    //アビリティ追加効果継続ターン
    "",
    //アビリティウェイト
    "2",
    //マイナス効果カテゴリ
    "",
    //マイナス効果エフェクト
    "",
    //マイナス効果継続ターン
    "",
    //id
    "38",
    //ニュージェネ
    "0",
    //開放キャラ
    "0",
    //戦闘時セリフ
    "あ、はいっ！出番ですね！");

  chs[38] = new Character(
    //名前
    "古賀小春",
    //hp
    "40",
    //召喚セリフ
    "ドラゴンのヒョウくんと一緒に",
    "小春と遊んでほしいです～",
    //戦闘
    "230007",
    //宝箱
    "150003",
    //ライブ
    "",
    //画像
    "chara/38.png",
    //アビリティカテゴリ
    "1",
    //アビリティ追加効果カテゴリ
    "4",
    //アビリティエフェクト
    "5",
    //アビリティ追加効果エフェクト
    "10",
    //アビリティ使用可能回数
    "2",
    //アビリティ説明
    "相手に小ダメージを与え\nHPを小回復する",
    //アビリティ継続ターン
    "1",
    //アビリティ追加効果継続ターン
    "1",
    //アビリティウェイト
    "0",
    //マイナス効果カテゴリ
    "",
    //マイナス効果エフェクト
    "",
    //マイナス効果継続ターン
    "",
    //id
    "39",
    //ニュージェネ
    "0",
    //開放キャラ
    "0",
    //戦闘時セリフ
    "ヒョウくんぺろぺろです～");

  //--------------------------------------------------------
  //キャラ追加はここから

  chs[39] = new Character(
    //名前
    "梅木音葉",
    //hp
    "20",
    //召喚セリフ
    "魔性の歌を…お望みですか？",
    "では…お聴かせレましよう…",
    //戦闘
    "100002",
    //宝箱
    "",
    //ライブ
    "100006",
    //画像
    "chara/39.png",
    //アビリティカテゴリ
    "4",
    //アビリティ追加効果カテゴリ
    "3",
    //アビリティエフェクト
    "10",
    //アビリティ追加効果エフェクト
    "50",
    //アビリティ使用可能回数
    "4",
    //アビリティ説明
    "HPを小回復して\n1ターンの間、受けるダメージを半減する",
    //アビリティ継続ターン
    "1",
    //アビリティ追加効果継続ターン
    "1",
    //アビリティウェイト
    "0",
    //マイナス効果カテゴリ
    "",
    //マイナス効果エフェクト
    "",
    //マイナス効果継続ターン
    "",
    //id
    "40",
    //ニュージェネ
    "0",
    //開放キャラ
    "0",
    //戦闘時セリフ
    "風に…この歌を乗せて…");

  chs[40] = new Character(
    //名前
    "クラリス",
    //hp
    "36",
    //召喚セリフ
    "この出会いに感謝します。",
    "貴方のお力になりましょう",
    //戦闘
    "110007",
    //宝箱
    "",
    //ライブ
    "220008",
    //画像
    "chara/40.png",
    //アビリティカテゴリ
    "2",
    //アビリティ追加効果カテゴリ
    "",
    //アビリティエフェクト
    "100",
    //アビリティ追加効果エフェクト
    "",
    //アビリティ使用可能回数
    "2",
    //アビリティ説明
    "1ターンの間、攻撃力を2倍にする",
    //アビリティ継続ターン
    "1",
    //アビリティ追加効果継続ターン
    "",
    //アビリティウェイト
    "1",
    //マイナス効果カテゴリ
    "",
    //マイナス効果エフェクト
    "",
    //マイナス効果継続ターン
    "",
    //id
    "41",
    //ニュージェネ
    "0",
    //開放キャラ
    "0",
    //戦闘時セリフ
    "せめて…祈りを捧げなさい");
  
    chs[41] = new Character(
    //名前
    "市原仁奈",
    //hp
    "50",
    //召喚セリフ
    "お呼びでごぜーますか?",
    "仁奈に任せてくだせー!",
    //戦闘
    "550003",
    //宝箱
    "200007",
    //ライブ
    "",
    //画像
    "chara/41.png",
    //アビリティカテゴリ
    "1",
    //アビリティ追加効果カテゴリ
    "",
    //アビリティエフェクト
    "5",
    //アビリティ追加効果エフェクト
    "",
    //アビリティ使用可能回数
    "1",
    //アビリティ説明
    "10ターンの間、相手に小ダメージを与える",
    //アビリティ継続ターン
    "10",
    //アビリティ追加効果継続ターン
    "",
    //アビリティウェイト
    "0",
    //マイナス効果カテゴリ
    "",
    //マイナス効果エフェクト
    "",
    //マイナス効果継続ターン
    "",
    //id
    "42",
    //ニュージェネ
    "0",
    //開放キャラ
    "0",
    //戦闘時セリフ
    "今だ!やりやがるです!");

  //ここまで
  //--------------------------------------------------------

  return chs;
}

//構造体的な
function Character(name, hp, tx1, tx2, sk1, sk2, sk3, img, abl_ctg, abl_ctg_ex,
  abl_eff, abl_eff_ex, abl_lim, abl_nm, abl_turn, abl_turn_ex, abl_wait,
  dmr_ctg, dmr_eff, dmr_turn, id, opg, opl, vo1) {

  this.name = name;
  this.hp = hp;
  this.tx1 = tx1;
  this.tx2 = tx2;
  this.sk1 = sk1;
  this.sk2 = sk2;
  this.sk3 = sk3;
  this.img = img;
  this.abl_ctg = abl_ctg;
  this.abl_ctg_ex = abl_ctg_ex;
  this.abl_eff = abl_eff;
  this.abl_eff_ex = abl_eff_ex;
  this.abl_lim = abl_lim;
  this.abl_nm = abl_nm;
  this.abl_turn = abl_turn;
  this.abl_turn_ex = abl_turn_ex;
  this.abl_wait = abl_wait;
  this.dmr_ctg = dmr_ctg;
  this.dmr_eff = dmr_eff;
  this.dmr_turn = dmr_turn;
  this.abl_turn_ex = abl_turn_ex;
  this.abl_wait = abl_wait;
  this.dmr_ctg = dmr_ctg;
  this.dmr_eff = dmr_eff;
  this.dmr_turn = dmr_turn;
  this.id = id;
  this.opg = opg;
  this.opl = opl;
  this.vo1 = vo1;
}

//用意されたキャラから5人を選ぶ(数字のみ)
function Char_rand(len) {
  var arr = new Array(len);
  var nums = new Array(5);
  var rnd = 0;

  for (var i = 0; i < arr.length; i++) {
    arr[i] = 0;
  }

  for (var i = 0; i < 5; i++) {
    if (char_use[i] != -1) {
      arr[char_use[i]] = 1;
    }
  }

  for (var i = 0; i < 5; i++) {
    if (char_use[i] === -1) {
      do {
        rnd = Math.floor(Math.random() * len);
      } while (arr[rnd] != 0);
      nums[i] = rnd;
      arr[rnd] = 1;
    } else {
      nums[i] = char_use[i];
    }
  }

  return nums;
}