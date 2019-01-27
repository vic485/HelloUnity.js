// あてんしょん！この歌＜コード＞はUnityちゃんバージョン4.6以上で歌ってね
var moji: UnityEngine.UI.Text; // Are you ready....?

//　この世界＜ゲーム＞に生まれた時それがAwake!
function Awake() {
    var canvas = gameObject.AddComponent(UnityEngine.Canvas); // GUI＜じーゆーあい＞にはこれがないとね!
    canvas.renderMode = RenderMode.Overlay; // 画面に大きく描いちゃうよ!
    moji = gameObject.AddComponent(UnityEngine.UI.Text); // 画面に文字を書いちゃうよ!
    var secret = Resources.GetBuiltinResource(typeof (Font), "Arial.ttf"); // 隠しコマンド!ひみつだよ!
    moji.font = secret; // 文字にフオントを設定だ!
}

// この世界＜ゲーム＞が始まるときそれがStart!
function Start() {
    moji.fontSize = 128; // フオントは大きく設定だ!
    moji.alighnment = TextAnchor.MiddleCenter; // 文字はでっかく中央に!
    moji.text = "Hello, Unity!!"; // これで準備は万全だ!
}

// この世界＜ゲーム＞が躍動するときそれがUpdate!
function Update() {
    var v = Mathf.Sin(Time.time); // うごきの秘密は三角関数!
    moji.transform.rotation = Quaternion.Euler(0, 0, v * 360); // 画面のまんなかグルグル回るよ!
    var go = (1 + v); // 秘密の値でスケールだ!
    moji.transform.localScale = Vector3(go, go, go); // さあ、実行してみよう!
}
