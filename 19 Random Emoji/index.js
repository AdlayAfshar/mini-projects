const btn = document.getElementById("btn");
const emojiNameE = document.getElementById("emoji-name");

const emoji = [];

async function getEmoji() {
  let responce = await fetch(
    "https://emoji-api.com/emojis?access_key=b04efaa6c30ab504fb2012e3d955f82e90535451"
  );
  data = await responce.json();

  for (let i = 0; i < 1500; i++) {
    emoji.push({
        emojiName: data[i].character,
        // emojiCode: data[i].unicodeName,
        emojiCode: data[i].unicodeName.split(" ").splice(1, 1),
    })
  }
}

getEmoji();

console.log(emoji);


btn.addEventListener("click", () => {
    const randomNum = Math.floor(Math.random() * emoji.length);
    btn.innerText = emoji[randomNum].emojiName;
    emojiNameE.innerText = emoji[randomNum].emojiCode;
});
