const users = ['Pedro', 'Jonathan', 'Joana'];

const memberDiv = document.querySelector('.memberDiv');
const addIcon = document.querySelector('.addIcon');

const userIcons = () => {
  users.reverse();
  users.map((curElem) => {
    memberDiv.insertAdjacentHTML('afterbegin', `
        <button class="btn"><span>${curElem}</span></button>
        `);
  })
};

addIcon.addEventListener('click', () => {
  let userName = prompt('Digite seu nome:');

  if (userName != null && !users.includes(userName)) {
    users.push(userName);
    console.log(users);
    memberDiv.insertAdjacentHTML('afterbegin', `
        <button class="btn"><span>${userName}</span></button>
        `);
  } else {
    alert('Perfil com este nome já existe');
  }
})


userIcons();

document.querySelectorAll('.btn').forEach(botao => {
  botao.addEventListener('click', () => {
    window.open("index.html", "_self");
  });
});

document.querySelector()