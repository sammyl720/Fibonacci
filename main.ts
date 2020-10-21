const form:HTMLFormElement = document.getElementsByTagName('form')[0]
const inputButton:HTMLInputElement = document.getElementsByTagName('input')[0]
const outputDiv: HTMLDivElement = document.querySelector('div.output-result')


form.addEventListener('submit', e => {
  e.preventDefault()
  calculateFib(Number(inputButton.value))
  inputButton.value = ''
})

const calculateFib = (inputNumber: number): void => {
  let a = 0;
  let b = 1;

  const results: number[] = [];

  let count:number = 0;
  while(count < inputNumber ) {
    results.push(a)
    results.push(b)
    a = a + b;
    b = a + b;
    count+=2;
  }
  let output = ''
  for (let i = 0; i < results.length; i++) {
    const element = results[i];
    output += `<li class="list-item">
        <strong>Step ${i + 1}</strong> ${results[i]}
      </li>
    `
  }

  outputDiv.innerHTML = `
    <ul class="output-list">
      ${output}
    </ul>
  `
}

