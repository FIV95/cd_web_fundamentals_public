const userName = document.getElementsByClassName('Name')[0]
const edit = document.getElementById('setting')
const edit2 = document.getElementById('gearIcon')
const userdata = document.querySelector('.connnectionRequsts')
// const user1 = [document.querySelector('#toddImg'),document.getElementById('todd'),userdata.querySelector('.yesNoButton')];
const user1Image = document.getElementById('toddImg');
const user1Name = document.getElementById('todd');
const acceptDeclineButtons = document.querySelector('.acceptDeclineButtons')
const user2Image = document.getElementById('philImg');
const User2Name = document.getElementById('phil');

let editProfile = () => {
      console.log(userName.innerText);
      userName.innerText = 'Aris';
}

edit.addEventListener('click', editProfile);
edit2.addEventListener('click', editProfile);

userdata.addEventListener('click', function (event) {
      const target = event.target
      if (target.classList.contains('yesNoButton')) {
            const user = target.getAttribute('data-user');
            if (user === 'user1') {
                  const acceptDeclineButtons = target.closest('.acceptDeclineButtons');
                  if (acceptDeclineButtons) {
                        acceptDeclineButtons.remove()
                  }
            } if (user === 'user2'){
                  const acceptDeclineButtons = target.closest('.acceptDeclineButtons');
                  if (acceptDeclineButtons) {
                        acceptDeclineButtons.remove()
                  }
            }
      }
});

const acceptDecline = document.querySelectorAll('.acceptDeclineButtons');

acceptDecline.forEach(acceptDecline => {
      acceptDecline.addEventListener('click', removeUser);
})

function removeUser() {
      user1Name.remove();
      user1Image.remove();
      user1Yes.remove();
}
