const KEY='meb-week3-mission-v2';
const stops=[
 {id:'learn',icon:'📚',name:'Learn Your Way',sub:'Read or Listen',criterion:'Choose a learning route',teach:'You can learn the same idea by reading or listening. Start with one route before the activity.',q:'Which learning route can begin your mission?',options:['Read/Slides or Listen','Flashcards only','Skip straight to the final check'],answer:0,star:null},
 {id:'remember',icon:'🧭',name:'Process Explorer',sub:'Remember',criterion:'Identify system boundary',teach:'A system boundary is the line around the part of the process you choose to study.',q:'A stream arrow points into the boundary. It is a…',options:['Input','Output','Accumulation'],answer:0,star:'Recall Star'},
 {id:'understand',icon:'🔎',name:'Flow Detective',sub:'Understand',criterion:'Read inputs and outputs',teach:'Compare all streams crossing the boundary: more in means build-up; more out means the amount decreases.',q:'12 kg/min enters and 9 kg/min leaves. What happens inside?',options:['Material builds up','Material decreases','It is steady state'],answer:0,star:'Interpretation Star'},
 {id:'apply',icon:'⚖️',name:'Balance Builder',sub:'Apply',criterion:'Use the overall balance',teach:'At steady state, accumulation is zero: Total Input = Total Output. Keep kg/min throughout.',q:'What must appear in a final flowrate answer?',options:['A number and kg/min','Only a number','Only the formula'],answer:0,star:'Application Star'},
 {id:'edcafe',icon:'🏭',name:'MEB Challenge',sub:'Independent check',criterion:'Show independent understanding',teach:'Edcafe is where you show what you can do without the guided class activity. Your result is the evidence.',q:'What is the real evidence for your Reward Token?',options:['Your Edcafe result','Clicking any Hub button','Opening flashcards'],answer:0,star:'Independent Star'}
];
const stages={
 remember:{badge:'Checkpoint 1 · Remember Together',title:'Process Explorer',intro:'Recall key terms and facts before interpreting a process.',formula:'Conservation of mass: <b>mass is not created or destroyed.</b>',qs:[
 ['What is a system in a material-balance question?',['The part we choose to study','Every item in the plant','Only the outlet stream'],0,'Focus on the selected tank, pipe or unit.'],
 ['What is a system boundary?',['A line around the chosen system','The amount inside a tank','The name of an outlet'],0,'Imagine a box drawn around the equipment.'],
 ['A material arrow points into a tank. It is called:',['An input','An output','Accumulation'],0,'Look at the arrow direction.'],
 ['A material arrow points out of a tank. It is called:',['An input','An output','A boundary'],1,'Look at the arrow direction.'],
 ['At steady state, accumulation is:',['0','Always 10 kg/min','Always negative'],0,'No net build-up means zero.'],
 ['Complete the rule: Total Input ___ Total Output at steady state.',['is greater than','equals','is unrelated to'],1,'What goes in equals what goes out.'],
 ['Which is a mass flowrate unit?',['kg/min','kg','min/kg'],0,'A flowrate is an amount per time.'],
 ['Which can cross a system boundary?',['An entering or leaving stream','Only the system name','Only accumulation'],0,'Think about arrows crossing the dashed box.'],
 ['What should you do first in a balance question?',['Read and label the flowchart','Guess the answer','Remove the units'],0,'See the process before calculating.'],
 ['Conservation of mass means:',['Mass is not created or destroyed','Mass always increases','Only outputs matter'],0,'Think about what happens to total mass.']]},
 understand:{badge:'Checkpoint 2 · Understand Together',title:'Flow Detective',intro:'Read the process diagram and decide what is happening inside.',formula:'<b>Input − Output = Accumulation</b>',qs:[
 ['12 kg/min enters and 12 kg/min leaves. Is it steady state?',['Yes','No'],0,'Compare total input with total output.'],
 ['12 kg/min enters and 9 kg/min leaves. What happens?',['Material builds up','Material decreases','It stays steady'],0,'More enters than leaves.'],
 ['8 kg/min enters and 11 kg/min leaves. What happens?',['Material builds up','Material decreases','Input equals output'],1,'More leaves than enters.'],
 ['A dashed box is drawn around a tank. A feed crosses into it. Is the feed an input?',['Yes','No'],0,'Does the arrow cross into the boundary?'],
 ['Feeds are 4 and 6 kg/min. What total input is used?',['4 kg/min','6 kg/min','10 kg/min'],2,'Add all entering arrows.'],
 ['One feed is 15 kg/min; outputs are 5 and 10 kg/min. Is the tank steady?',['Yes','No'],0,'Add the outputs first.'],
 ['A question says continuous operation at steady state. Which equation starts the solution?',['Total Input = Total Output','Total Input = 0','Total Input = Accumulation only'],0,'At steady state, accumulation is zero.'],
 ['Why write units in a balance?',['To check quantities are compatible','To make the answer longer','They are never needed'],0,'Units can reveal an incorrect setup.'],
 ['A learner writes 20 = 20 kg/min. What is missing?',['kg/min on the left','A tank picture','A new formula'],0,'Both sides should have compatible units.'],
 ['An outlet is −5 kg/min for a simple tank with positive feeds. What should the learner do?',['Check diagram, equation and subtraction','Submit immediately','Delete units'],0,'Check whether the answer is physically reasonable.']]},
 apply:{badge:'Checkpoint 3 · Apply Together',title:'Balance Builder',intro:'Use clear exam-working: formula → substitute with units → final answer and reasonableness check.',formula:'At steady state: <b>Total Input = Total Output</b>',qs:[
 ['A tank receives 20.00 kg/min. It has one outlet at steady state. Find the outlet.',20,'Write Total Input = Total Output; then substitute 20.00 kg/min.'],
 ['One outlet is 18.00 kg/min. The tank has one inlet at steady state. Find the inlet.',18,'At steady state, total input equals total output.'],
 ['Two feeds enter: 8.00 and 7.00 kg/min. One product leaves. Find the product.',15,'Add both inputs first.'],
 ['Input is 25.00 kg/min. Product A is 10.00 kg/min and Product B is unknown. Find B.',15,'Write 25.00 = 10.00 + B.'],
 ['Feed A is 12.00 kg/min, Feed B is unknown, and product is 30.00 kg/min. Find B.',18,'Write 12.00 + B = 30.00.'],
 ['A blender has inputs of 4.00, 6.00 and 10.00 kg/min. Find the single product.',20,'Add every stream entering the boundary.'],
 ['A separator receives 40.00 kg/min. The top stream is 15.00 kg/min. Find the bottom stream.',25,'Write 40.00 = 15.00 + bottom stream.'],
 ['Inputs are 9.00 and 11.00 kg/min. Outputs are 5.00 and unknown. Find the unknown.',15,'Find total inputs, then subtract the known outlet.'],
 ['Input is 35.00 kg/min and output is 30.00 kg/min. It is not steady. Find accumulation using Input − Output.',5,'35.00 − 30.00 is the amount building up per minute.'],
 ['Feeds are 14.00 and 16.00 kg/min. Product is 22.00 kg/min; recycle is unknown. Find recycle.',8,'Write 14.00 + 16.00 = 22.00 + recycle.']]}
};
let state=JSON.parse(localStorage.getItem(KEY)||'{"completed":[],"method":false,"reward":false}') ,stage='remember',qIndex=0,answered=false;
const $=id=>document.getElementById(id); const save=()=>localStorage.setItem(KEY,JSON.stringify(state));
function renderMission(){
 const done=[...(state.method?['learn']:[]),...state.completed,...(state.reward?['edcafe']:[])];
 const nextStop=stops.find(s=>!done.includes(s.id));
 const current=nextStop?.id;
 const avatarIndex=nextStop ? stops.findIndex(s=>s.id===nextStop.id) : stops.length-1;
 const avatarLeft=10+(avatarIndex*20);
 $('missionTrack').innerHTML='<span class="avatar" style="left:calc('+avatarLeft+'% - 16px)">🧑‍🔬</span>'+stops.map(s=>`<div class="stop ${done.includes(s.id)?'complete':s.id===current?'current':'locked'}"><span class="stop-dot">${done.includes(s.id)?'✓':s.icon}</span><strong>${s.name}</strong><small>${s.sub}</small></div>`).join('');
 $('starCount').textContent=`⭐ ${state.completed.length+(state.reward?1:0)} / 4 Stars`;
 $('missionText').textContent=state.reward?'Mission complete! Show your Edcafe result to your lecturer for the weekly Reward Token.':`Next stop: ${nextStop.name}`;
}
function diagram(){return stage==='apply'?'Total Input → [ System boundary: Tank at steady state ] → Total Output':'🟢 Input → [ System boundary: Tank ] → 🔵 Output'}
function renderQuestion(){const s=stages[stage],q=s.qs[qIndex];$('stageBadge').textContent=s.badge;$('stageTitle').textContent=s.title;$('stageIntro').textContent=s.intro;$('formula').innerHTML=s.formula;$('diagram').innerHTML=diagram();$('questionCount').textContent=`Question ${qIndex+1} / 10`;$('questionText').textContent=q[0];$('options').innerHTML='';$('hint').className='hint hidden';$('feedback').className='feedback hidden';$('nextBtn').classList.add('hidden');answered=false;$('calculation').classList.toggle('hidden',stage!=='apply');
 if(!state.method){$('questionText').textContent='Start at Mission Stop 1: choose Read / Slides or Listen first.';$('questionCount').textContent='Locked until learning route starts';$('diagram').innerHTML='📚 Choose a learning route above to unlock Process Explorer.';$('formula').innerHTML='Your first achievement is to choose how you want to learn.';return}
 if(stage==='apply'){['formulaWorking','substitutionWorking'].forEach(id=>{$(id).value=localStorage.getItem(`${KEY}-${stage}-${qIndex}-${id}`)||'';$(id).oninput=()=>localStorage.setItem(`${KEY}-${stage}-${qIndex}-${id}`,$(id).value)});$('answer').value=''}else q[1].forEach((x,i)=>{let b=document.createElement('button');b.className='option';b.textContent=x;b.onclick=()=>answerMCQ(b,i,q[2]);$('options').appendChild(b)})}
function showFeedback(text,good){let x=$('feedback');x.textContent=(good?'✅ ':'Try again. ')+text;x.className='feedback '+(good?'':'bad')}
function answerMCQ(btn,pick,correct){if(answered)return;if(pick===correct){answered=true;btn.classList.add('correct');showFeedback('Correct. '+stages[stage].qs[qIndex][3],true);$('nextBtn').classList.remove('hidden')}else{btn.classList.add('wrong');showFeedback('Use the hint and look carefully at the process.',false)}}
$('checkBtn').onclick=()=>{let item=stages.apply.qs[qIndex],value=$('answer').value.toLowerCase(),num=parseFloat(value.replace(/[^\d.-]/g,''));if(Number.isNaN(num))return showFeedback('Enter a number, for example: 15.00 kg/min.',false);if(Math.abs(num-item[1])<.01&&value.includes('kg/min')){answered=true;showFeedback(`Correct. ${item[1].toFixed(2)} kg/min.`,true);$('nextBtn').classList.remove('hidden')}else if(Math.abs(num-item[1])<.01)showFeedback('The number is correct. Add kg/min.',false);else showFeedback('Check your equation and substitution, then try again.',false)};
$('hintBtn').onclick=()=>{let x=stage==='apply'?stages[stage].qs[qIndex][2]:stages[stage].qs[qIndex][3];$('hint').textContent='💡 Hint: '+x;$('hint').classList.remove('hidden')};
$('nextBtn').onclick=()=>{if(qIndex<9){qIndex++;renderQuestion();return}if(!state.completed.includes(stage)){state.completed.push(stage);save();renderMission();openGame(stage)}else{qIndex=0;renderQuestion()}};
function openGame(id){const s=stops.find(x=>x.id===id);$('modalIcon').textContent=s.icon;$('modalBadge').textContent='Checkpoint achieved · '+s.criterion;$('modalTitle').textContent=s.name+' achieved!';$('modalTeach').textContent=s.teach;$('modalQuestion').textContent=s.q;$('modalFeedback').className='feedback hidden';$('modalContinue').classList.add('hidden');$('modalOptions').innerHTML='';s.options.forEach((t,i)=>{let b=document.createElement('button');b.className='option';b.textContent=t;b.onclick=()=>{document.querySelectorAll('#modalOptions button').forEach(x=>x.disabled=true);b.classList.add(i===s.answer?'correct':'wrong');let f=$('modalFeedback');f.textContent=(i===s.answer?'Correct. ':'Review: ')+s.teach;f.className='feedback';$('modalContinue').classList.remove('hidden')};$('modalOptions').appendChild(b)});$('gameModal').classList.remove('hidden')}
$('modalContinue').onclick=()=>{$('gameModal').classList.add('hidden');stage=state.completed.includes('understand')&&!state.completed.includes('apply')?'apply':state.completed.includes('remember')&&!state.completed.includes('understand')?'understand':'remember';qIndex=0;renderQuestion()};
document.querySelectorAll('[data-method]').forEach(a=>a.onclick=()=>{if(!state.method){state.method=true;save();renderMission();setTimeout(()=>openGame('learn'),350)}});
$('completeEdcafe').onclick=()=>{if(!state.completed.includes('apply'))return alert('Complete the three classroom checkpoints first.');if(!state.reward){state.reward=true;save();renderMission();openGame('edcafe')}};
$('resetBtn').onclick=()=>{if(confirm('Reset Week 3 progress on this device?')){localStorage.removeItem(KEY);Object.keys(localStorage).filter(k=>k.startsWith(KEY+'-')).forEach(k=>localStorage.removeItem(k));state={completed:[],method:false,reward:false};stage='remember';qIndex=0;renderMission();renderQuestion()}};
const calcKeys=['AC','DEL','7','8','9','÷','4','5','6','×','1','2','3','-','0','.','+','=','(' ,')'];let expr='';$('keys').innerHTML=calcKeys.map(k=>`<button data-key="${k}">${k}</button>`).join('');$('keys').onclick=e=>{let k=e.target.dataset.key;if(!k)return;if(k==='AC')expr='';else if(k==='DEL')expr=expr.slice(0,-1);else if(k==='='){try{expr=String(Function('return '+expr.replaceAll('×','*').replaceAll('÷','/'))())}catch{expr='Error'}}else expr+=k;$('calcDisplay').value=expr||'0'};
renderMission();renderQuestion();
