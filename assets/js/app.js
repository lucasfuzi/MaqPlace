function showToast(message){const toast=document.getElementById('toast');if(!toast)return;toast.textContent=message;toast.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>toast.classList.remove('show'),3200)}
function openModal(id){document.getElementById(id)?.classList.add('open')}
function closeModal(id){document.getElementById(id)?.classList.remove('open')}
function filterRows(query,id){const table=document.getElementById(id);if(!table)return;query=query.toLowerCase();table.querySelectorAll('tbody tr').forEach(row=>row.style.display=row.innerText.toLowerCase().includes(query)?'':'none')}
document.addEventListener('click',e=>{if(e.target.classList.contains('modal-backdrop'))e.target.classList.remove('open')});
document.querySelectorAll('.toggle-password').forEach(btn=>btn.addEventListener('click',()=>{const input=btn.parentElement.querySelector('input');input.type=input.type==='password'?'text':'password';btn.textContent=input.type==='password'?'◉':'◌'}));
