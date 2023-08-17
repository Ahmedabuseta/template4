const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
// const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
// const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
// const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
// const appendAlert = (message, type) => {
//   const wrapper = document.createElement('div')
//   wrapper.innerHTML = [
//     `<div class="alert alert-${type} alert-dismissible" role="alert">`,
//     `   <div>${message}</div>`,
//     '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
//     '</div>'
//   ].join('')

//   alertPlaceholder.append(wrapper)
// }

// const alertTrigger = document.getElementById('liveAlertBtn')
// if (alertTrigger) {
//   alertTrigger.addEventListener('click', () => {
//     appendAlert('Nice, you triggered this alert message!', 'success')
//   })
// }
// 
// copied alert 
let copyBtn = document.querySelectorAll('.copy-btn');
copyBtn.forEach(function(item){
  item.addEventListener('click',function(){
    alert('copied')
  })
})

let btn = document.querySelectorAll('.colapse-btn');

  btn.forEach(function(item){
  item.addEventListener('click', function() {
    let angle = item.querySelector('.fa-angle-down');
    if (angle.style.transform === 'rotate(180deg)') {
      angle.style.transform = 'rotate(0)';
    } else {
      angle.style.transform = 'rotate(180deg)';
    }
  });
});