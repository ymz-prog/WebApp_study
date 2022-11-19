const answersList = document.querySelectorAll('ol.answers li');

answersList.forEach(li => li.addEventListener('click', checkClickedAnswer));

// 正しい答え
const correctAnswers = {
    1: 'B',
    2: 'A',
    3: 'A',
    4: 'C',
};


function checkClickedAnswer(event) {
    const clickedAnswerElement = event.currentTarget;
    // console.log(clickedAnswerElement.dataset.answer);

    // 選択した答え（A,B,C,D）
    const selectedAnswer = clickedAnswerElement.dataset.answer;

    const questionId = clickedAnswerElement.closest('ol.answers').dataset.id;
    // 正しい答え（A,B、C,D）
    const correctAnswer = correctAnswers[questionId];
    // メッセージを入れる変数を用意
    let message;

    // カラーコードを入れる変数
    let answerColorCode;

    // 間違えた時

    if (selectedAnswer === correctAnswer) {
        // 正解の時
        message = '正解！';
        answerColorCode = '';
    } else {
        // 間違えた時
        message = '不正解！';
        answerColorCode = 'darkgoldenrod';
    }

    alert(message);
    // 色を変更
    document.querySelector('span#correct-answer').style.color = answerColorCode;
    // 答え全体を表示
    document.querySelector('div#section-correct-answer').style.display = 'block';

}