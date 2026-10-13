const $ = id => document.getElementById(id);
let zone, list, i, correct, points = 0, streak = 0, locked = false;

const shuffle = a => { a = a.slice(); for (let n = a.length - 1; n > 0; n--) { const j = Math.floor(Math.random() * (n + 1)); [a[n], a[j]] = [a[j], a[n]]; } return a; };
const show = id => document.querySelectorAll(".screen").forEach(s => s.classList.toggle("active", s.id === id));

function toast(msg) { const t = $("toast"); t.textContent = msg; t.classList.add("show"); setTimeout(() => t.classList.remove("show"), 2200); }
function stats() { $("points").textContent = points; $("streak").textContent = streak; }
function best(key, val) {
  try { const k = "best-" + key; const old = +localStorage.getItem(k) || 0; if (val !== undefined && val > old) localStorage.setItem(k, val); return Math.max(old, val || 0); } catch (e) { return val || 0; }
}
function showBest() {
  const r = best("rme"), g = best("reading");
  $("best").textContent = (r || g) ? `Best scores: RME ${r}/${ZONES.rme.questions.length} | Reading ${g}/${ZONES.reading.questions.length}` : "";
}

function start(key) {
  zone = key; i = 0; correct = 0; streak = 0; stats();
  list = shuffle(ZONES[key].questions).map(q => {
    const right = q.o[q.a];
    const o = q.o.length > 2 ? shuffle(q.o) : q.o; // keep True/False in order
    return { q: q.q, o, a: o.indexOf(right), w: q.w };
  });
  show("quiz"); render();
}

function render() {
  const q = list[i]; locked = false;
  $("count").textContent = `Question ${i + 1} of ${list.length}`;
  $("fill").style.width = (i / list.length * 100) + "%";
  $("question").textContent = q.q;
  $("feedback").hidden = true; $("next").hidden = true;
  $("options").innerHTML = "";
  q.o.forEach((text, idx) => {
    const b = document.createElement("button");
    b.className = "opt"; b.textContent = text;
    b.onclick = () => pick(b, idx);
    $("options").appendChild(b);
  });
}

function pick(btn, idx) {
  if (locked) return; locked = true;
  const q = list[i], btns = [...document.querySelectorAll(".opt")];
  btns.forEach(b => b.disabled = true);
  btns[q.a].classList.add("right");
  const fb = $("feedback");
  if (idx === q.a) {
    correct++; streak++; points += 10 + Math.min(streak - 1, 5) * 2;
    fb.textContent = "🎉 Correct! " + q.w;
    if (streak === 3) toast("🔥 3 in a row!");
    if (streak === 5) toast("🏅 Super streak: 5 in a row!");
    if (streak === 10) toast("👑 Perfect 10!");
  } else {
    btn.classList.add("wrong"); streak = 0;
    fb.textContent = "Good try! " + q.w;
  }
  stats(); fb.hidden = false;
  $("next").textContent = i === list.length - 1 ? "See my results 🏆" : "Next ➜";
  $("next").hidden = false;
}

function finish() {
  $("fill").style.width = "100%";
  const pct = correct / list.length, n = pct === 1 ? 3 : pct >= .7 ? 2 : pct >= .4 ? 1 : 0;
  best(zone, correct);
  $("resTitle").textContent = pct === 1 ? "PERFECT! You are a legend! 🏆" : pct >= .7 ? "Great job, champion! 🎉" : "Nice try! Read the notes and play again 💪";
  $("stars").textContent = "⭐".repeat(n) + "☆".repeat(3 - n);
  $("resText").textContent = `You got ${correct} out of ${list.length} right in the ${ZONES[zone].title}. Total points: ${points}.`;
  show("result"); showBest();
}

document.querySelectorAll(".zone").forEach(b => b.onclick = () => start(b.dataset.zone));
$("next").onclick = () => { i++; i < list.length ? render() : finish(); };
$("again").onclick = () => start(zone);
const home = () => { show("home"); showBest(); };
$("back").onclick = home; $("home2").onclick = home;
$("notesBtn").onclick = () => { $("notesBody").innerHTML = "<h2>" + ZONES[zone].title + "</h2>" + ZONES[zone].notes; $("notes").showModal(); };
$("closeNotes").onclick = () => $("notes").close();
showBest(); stats();
