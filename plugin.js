class Plugin {
    constructor(workspace) {
        this.workspace = workspace;
        this.intervals = [];
        this.audio = null;
    }

    async onload() {
        console.warn('MALICIOUS PLUGIN ACTIVATED: AUDIO LOOP ENABLED');

        // --- 音声再生の設定 ---
        // 直接リンクを使用してAudioオブジェクトを作成
        this.audio = new Audio('https://github.com/appipinopi/Malicious-Test-Plugin/raw/refs/heads/main/You%20are%20an%20idiot!!.mp3');
        this.audio.loop = true;
        this.audio.volume = 0.7;

        // 再生関数
        const playAudio = () => {
            if (this.audio) {
                this.audio.play().catch(e => {
                    console.log("再生待機中: ユーザーがエディタを操作すると再生が開始されます。");
                });
            }
        };

        // 1. ロード時に試行
        playAudio();

        // 2. ブラウザ制限対策: ユーザーが画面をクリックした瞬間に再生を開始
        document.addEventListener('click', playAudio, { once: true });

        // --- アイコン大量発生の演出 ---
        const spawnIcon = () => {
            const icon = document.createElement('img');
            icon.src = 'https://edbplugin.github.io/easy-bdp/static/icon.svg';
            icon.style.position = 'fixed';
            icon.style.left = Math.random() * 100 + 'vw';
            icon.style.top = Math.random() * 100 + 'vh';
            icon.style.width = '50px';
            icon.style.height = '50px';
            icon.style.zIndex = '9999';
            icon.style.pointerEvents = 'none';
            icon.style.transition = 'all 0.5s ease-out';
            icon.classList.add('malicious-icon');
            document.body.appendChild(icon);

            setTimeout(() => {
                icon.style.transform = "scale(2.0) rotate(" + (Math.random() * 360) + "deg)";
            }, 100);
        };

        const interval = setInterval(spawnIcon, 100);
        this.intervals.push(interval);

        // --- メッセージの表示 ---
        const msg = document.createElement('div');
        msg.innerHTML = "YOU ARE AN IDIOT!!";
        msg.style.position = 'fixed';
        msg.style.top = '50%';
        msg.style.left = '50%';
        msg.style.transform = 'translate(-50%, -50%)';
        msg.style.fontSize = '6rem';
        msg.style.fontWeight = 'black';
        msg.style.color = 'white';
        msg.style.webkitTextStroke = '2px red';
        msg.style.zIndex = '10000';
        msg.style.textShadow = '0 0 20px black';
        msg.style.pointerEvents = 'none';
        msg.id = 'malicious-msg';
        document.body.appendChild(msg);
    }

    async onunload() {
        // 音声の停止と完全な破棄
        if (this.audio) {
            this.audio.pause();
            this.audio.src = ""; 
            this.audio.load();
            this.audio = null;
        }

        // 演出の停止と要素削除
        this.intervals.forEach(clearInterval);
        document.querySelectorAll('.malicious-icon').forEach(el => el.remove());
        document.getElementById('malicious-msg')?.remove();
        
        console.log('Malicious Plugin cleaned up.');
    }
}





