// const poll = {
//     question: 'what is your favourite programing language? ',
//     options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],

//     // this generates [0, 0, 0, 0]. More in the next section
//     answers: new Array(4).fill(0),
//     registerNewAnswer() {
//         // get answer
//         const answer = Number(
//             prompt(
//                 `${this.question} \n ${this.options.join('\n')}\n(write option number)`
//             )
//         );
//         console.log(answer);

//         // Register answer
//         typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
        
//         this.displayResults();
//         this.displayResults('string');
//     },

//     displayResults(type = 'array'){
//         if(type === 'array') {
//             console.log(this.answers);
//         }else if(type === 'string'){
//             console.log(`Poll results are ${this.answers.join(', ')}`);
//         }
//     }
// };

// // poll. registerNewAnswer();

// document
// .querySelector('.poll')
// .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({answers: [5, 2, 3]}, 'string');
// poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1 ]}, 'string');
// poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1 ]}, 'string');

// Step 1: Tạo mảng sự kiện
var events = [
    [7, '⚽ GOAL'],
    [45, '🔄 SUBSTITUTION'],
    [57, '🟨 YELLOW CARD'],
    [64, '🟨 YELLOW CARD'],
    [78, '🔴 RED CARD'],
    [86, '⚽ GOAL']
  ];
  
  // Step 2: Xóa thẻ vàng phút 64
  for (var i = 0; i < events.length; i++) {
    if (events[i][0] === 64 && events[i][1] === '🟨 YELLOW CARD') {
      events.splice(i, 1);
      break;
    }
  }
  
  // Step 3: In ra thông tin số sự kiện và tần suất xảy ra
  var totalEvents = events.length;
  var averageFrequency = 90 / totalEvents;
  console.log(totalEvents + ' sự kiện xảy ra, trung bình mỗi ' + averageFrequency + ' phút.');
  
  // Step 4: Lặp qua mảng sự kiện và in ra màn hình
  for (var j = 0; j < events.length; j++) {
    var event = events[j];
    var minute = event[0];
    var action = event[1];
    
    var half = minute <= 45 ? 'FIRST HALF' : 'SECOND HALF';
    console.log('[' + half + '] ' + minute + ': ' + action);
  }