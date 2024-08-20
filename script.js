window.onload = function () {
    const url = new URL(window.location.href);
    const params = url.searchParams;
    const q = params.get('q');
    const n = params.get('n');
    if (q) {
        document.getElementById("phrase").value = q;
    }
    if(n && !isNaN(n)){
        document.getElementById("times").value = n;
    }
}

document.getElementById("start").onclick = function(){
    const phrase = document.getElementById("phrase").value;
    const times = document.getElementById("times").value;
    if (isNaN(times) || 0 >= times) {
        alert("入力された値が不正です。");
        return 1;
    }
    const output_id = document.getElementById("output_area");
    output_id.value = '';
    let now_txt;
    for (let index = 0; index < times; index++) {
        now_txt = output_id.value;
        now_txt = now_txt + phrase;
        output_id.value = now_txt;
    }
    return 0;
}

document.getElementById("clipboard_copy").onclick = function(){
    const copy_url_to = document.getElementById("output_area").value;
    navigator.clipboard.writeText(copy_url_to).then(function() {
        console.log('コピー成功\n'+copy_url_to);
        alert("クリップボードにコピーしました。");
    }).catch(function(err) {
        console.error('コピー失敗', err);
        alert("クリップボードへのコピーに失敗しました。\nこのブラウザーでは利用できない可能性があります。\n一般的なブラウザーを使用されている場合は、クリップボードへのアクセスが拒否されていないか確認してください。")
    });
}