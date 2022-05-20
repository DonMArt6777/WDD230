const listInput = document.getElementById('favchap')
const list = document.querySelector('.list')

const button = document.getElementById('btn').addEventListener('click', ()=> {
  const item = listInput.value;
  listInput.value = '';
 

  const li = document.createElement('li');
  const listText = document.createElement('span')
  const btn2 = document.createElement('button');

  li.appendChild(listText);
  listText.textContent = item;

  li.appendChild(btn2);
  btn2.textContent = 'X';
  list.appendChild(li);

  btn2.addEventListener('click',()=> {
    list.removeChild(li);
  });
});