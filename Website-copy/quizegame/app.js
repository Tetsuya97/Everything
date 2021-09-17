const quiz = [
  {
    qustion: 'ゲーム市場、最も売れたゲーム機はどれ？',
    answers: ['スーパーファミコン', 'プレイステーション２', 'ニンテンドースイッチ', 'ニンテンドーＤＳ'],
    correct: 'ニンテンドーＤＳ',
  }, {
    qustion: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
    answers: ['MOTHER2', 'スーパーマリオブラザーズ３', 'スーパードンキーコング', '星のカービィー'],
    correct: 'MOTHER2',
  }, {
    qustion: 'ファイナルファンタジーⅣの主人公の名前は？',
    answers: ['フリオニール', 'クラウド', 'ティーダ', 'セシル'],
    correct: 'セシル',
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

//定数の文字列をHTMLに反映させる

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

const setupQuiz = () => {
  document.getElementById('js_question').textContent = quiz[quizIndex].qustion;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex]
    buttonIndex++;
  }
}

setupQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }

  quizIndex++;

  if (quizIndex < quizLength) {
    setupQuiz();
  } else {
    window.alert('終了！あなたの正解数は' + score + '/' + quizIndex + 'です！');
  }
};

//ボタンをクリックしたら正誤判定

let handlerIndex = 0;

while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
