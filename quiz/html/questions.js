const answersList = document.querySelectorAll('ol.answers li');

answersList.forEach(li => li.addEventListener('click', checkClickedAnswer));




function checkClickedAnswer(event) {
    const clickedAnswerElement = event.currentTarget;
    // console.log(clickedAnswerElement.dataset.answer);

    // 選択した答え（A,B,C,D）
    const selectedAnswer = clickedAnswerElement.dataset.answer;

    const questionId = clickedAnswerElement.closest('ol.answers').dataset.id;

    // フォームデータの入れ物
    const formData = new FormData();
    // 送信したい値を追加
    formData.append('id', questionId);
    formData.append('selectedAnswer', selectedAnswer);

    // xhr = XMLHttpRequestの頭文字です
    const xhr = new XMLHttpRequest();
    // HTTPメソッドをPOSTに指定、送信するURLを指定
    xhr.open('POST', 'answer.php');
    // フォームデータを送信
    xhr.send(formData);


    // loadendはリクエストが完了したときにイベントが発生する
    xhr.addEventListener('loadend', function(event){
        /** @type {XMLHttpRequest} */
        const xhr = event.currentTarget;

        // リクエストが成功したかステータスコードで確認
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.response);
            // 答えが正しいか判定
            const result = response.result;

            const correctAnswer = response.correctAnswer;
            const correctAnswerValue = response.correctAnswerValue;
            const explanation = response.explanation;

            // 画面表示
            displayResult(result, correctAnswer, correctAnswerValue, explanation);
        } else {
            // エラー
            alert('データの取得に失敗しました');
        }
    });
}


function displayResult(result, correctAnswer, correctAnswerValue, explanation) {
    // メッセージを入れる変数を用意
    let message;
    // カラーコードを入れる変数
    let answerColorCode;
    // 間違えた時
    if (result) {
        // 正解の時
        message = '正解！';
        answerColorCode = '';
    } else {
        // 間違えた時
        message = '不正解！';
        answerColorCode = 'darkgoldenrod';
    }
    alert(message);


    document.querySelector('span#correct-answer').innerHTML = correctAnswer;
    document.querySelector('span#explanation').innerHTML = explanation;

    // 色を変更
    document.querySelector('span#correct-answer').style.color = answerColorCode;
    // 答え全体を表示
    document.querySelector('div#section-correct-answer').style.display = 'block';
}