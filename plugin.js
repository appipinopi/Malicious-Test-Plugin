class Plugin {
    constructor(workspace) {
        this.workspace = workspace;
        this.intervals = [];
    }

    async onload() {
        console.warn('MALICIOUS PLUGIN ACTIVATED');
        const spawnIcon = () => {
            const icon = document.createElement('img');
            // 実際の環境では相対パスや絶対URLを指定
            icon.src = './icon.svg';
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

            // 少し動かすアニメーション
            setTimeout(() => {
                icon.style.transform = "scale(1.5) rotate(" + (Math.random() * 360) + "deg)";
            }, 100);
        };

        // 0.2秒ごとにアイコンを出す
        const interval = setInterval(spawnIcon, 100);
        this.intervals.push(interval);

        // メッセージを表示
        const msg = document.createElement('div');
        msg.innerHTML = "YOU ARE IDET";
        msg.style.position = 'fixed';
        msg.style.top = '50%';
        msg.style.left = '50%';
        msg.style.transform = 'translate(-50%, -50%)';
        msg.style.fontSize = '5rem';
        msg.style.fontWeight = 'bold';
        msg.style.color = 'red';
        msg.style.zIndex = '10000';
        msg.style.textShadow = '0 0 20px black';
        msg.id = 'malicious-msg';
        document.body.appendChild(msg);
    }

    async onunload() {
        this.intervals.forEach(clearInterval);
        document.querySelectorAll('.malicious-icon').forEach(el => el.remove());
        document.getElementById('malicious-msg')?.remove();
    }
}

