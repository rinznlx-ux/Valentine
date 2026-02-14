let noClickCount = 0;

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const subtext = document.getElementById("subtext");
const subtext2 = document.getElementById("subtext2"); // new subtext

let yesWidth = 150;
let yesHeight = 50;

// YES button click -> go to another page
yesBtn.addEventListener("click", function() {
  window.location.href = "yes.html";
});

// NO button click -> grow/shrink and change text
noBtn.addEventListener("click", function() {
  noClickCount++;
  
  // hide initial subtext after first click
  if (noClickCount === 1) {
    subtext.style.display = "none";
  }
  
  // YES grows
  yesWidth += 80;
  yesHeight += 25;
  yesBtn.style.width = yesWidth + "px";
  yesBtn.style.height = yesHeight + "px";
  
  // NO shrinks
  let noScale = 1 - (noClickCount * 0.15);
  if (noScale < 0.3) noScale = 0.3;
  noBtn.style.transform = `scale(${noScale})`;
  
  // ===== CUSTOM CHANGES EACH CLICK =====
  if (noClickCount === 1) {
    yesBtn.innerText = "YES \n(Yes🙂🙂soluu)";
    yesBtn.style.backgroundColor = "#43a047";
    
    noBtn.innerText = "NO\n(😡😡edhuku no press panra?)";
  } else if (noClickCount === 2) {
    yesBtn.innerText = "YES solluu thangameyy\nplss plss pls😩😩";
    yesBtn.style.backgroundColor = "#2e7d32";
    yesBtn.style.borderRadius = "20px";
    
    noBtn.innerText = "Unaku koluppu dhana??";
    noBtn.style.backgroundColor = "#d32f2f";
  } else if (noClickCount === 3) {
    yesBtn.innerText = "Yes press panu plsss☹️";
    yesBtn.style.background = "linear-gradient(45deg, #4CAF50, #81C784)";
    yesBtn.style.borderRadius = "30px";
    
    noBtn.innerText = "Nalla yosichukoo!!!";
  } else if (noClickCount === 4) {
    yesBtn.innerText = "Pleasee babyy na pavom laaa\n☹️☹️☹️☹️";
    yesBtn.style.fontSize = "26px";
    
    noBtn.innerText = "Yes press panuuu😡!";
    noBtn.style.backgroundColor = "#b71c1c";
  } else if (noClickCount === 5) {
    yesBtn.innerText = "😈YESSS😈 \n(unaku indha vishiyathula option kudupen nu vera nenachiyoo?)";
    yesBtn.style.background = "#1b5e20";
    yesBtn.style.color = "white";
    
    noBtn.innerText = "Unaku NO nu la option ella madam";
  } else if (noClickCount === 6) {
    noBtn.style.display = "none";
    
    // Show new subtext after No disappears
    subtext2.style.display = "block";
    
    // Center the Yes button horizontally
    yesBtn.style.margin = "0 auto";
    yesBtn.style.display = "block";
  }
});