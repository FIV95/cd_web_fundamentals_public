const userName = document.getElementsByClassName('Name')[0]
const edit = document.getElementById('setting')
const edit2 = document.getElementById('gearIcon')
const userdata = document.querySelector('.column2')
// const user1 = [document.querySelector('#toddImg'),document.getElementById('todd'),userdata.querySelector('.yesNoButton')];
const user1Image = document.getElementById('toddImg');
const user1Name = document.getElementById('todd');
const acceptDeclineButtons = document.querySelector('.acceptDeclineButtons')
const user1Yes = acceptDeclineButtons.querySelector('.yesNoButton');
const user1No = acceptDeclineButtons.querySelectorAll('.yesNoButton')[1]

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
