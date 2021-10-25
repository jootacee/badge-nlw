const linksSocialMedia = {
  github: 'jootacee',
  youtube: 'channel/UCqFpFMffm7TaKIKPkrLBGaw',
  twitter: 'jczrOz',
  facebook: 'profile.php?id=100009660789537',
  instagram: 'itsjuliocezzar'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userAvatar.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGithubProfileInfos()
