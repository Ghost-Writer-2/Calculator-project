var calculator_module = (() => {
  const num_array = Array.from(document.querySelectorAll('.number'));
  const equal_btn = document.querySelector('.equal');
  const clear_btn = document.querySelector('.clear');
  const delete_btn = document.querySelector('.delete');
  const percent_btn = document.querySelector('.percent');
  const displayText = document.querySelector('.display-text');
  var word = '';
  
  // Number DOM
  num_array.forEach(element => {
    element.addEventListener('click', () => {
      word += element.id;
      displayText.innerHTML = `<p>${word}</p>`;
    })

    // document.body.addEventListener('keydown', (e) => {
    //   if (e.key != element.id)  return;
    //   word += e.key;
    //   displayText.innerHTML = `<p>${word}</p>`
    // })
  });

  // Eval button
  equal_btn.addEventListener('click', () => {
   var result = eval(word) || '0';
   word = result;
   displayText.innerHTML = `<p>${result}</p>`;
  })

  // Backspace button
  delete_btn.addEventListener('click', del)

  // Clear button
  clear_btn.addEventListener('click', () => {
    word = '';
    displayText.innerHTML = `<p>${word}</p>`;
  })

  // Percent operator
  percent_btn.addEventListener('click', () => {
    result = parseFloat(word) / 100;
    displayText.innerHTML = `<p>${result}</p>`
    word = result;
  })

  function del() {
    word.length < 0 || (word = word.replace(word[word.length - 1], ''));
    displayText.innerHTML = `<p>${word}</p>`;
  }

})()