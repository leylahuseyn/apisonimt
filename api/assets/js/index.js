const btn = document.querySelector('.btn')
btn.addEventListener('click', function(){
    fetch('https://6473467cd784bccb4a3c69c8.mockapi.io/list',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            image:document.querySelector('#image').value,
            name:document.querySelector('#name').value,
            text:document.querySelector('#text').value,
        })
        
    }).then(res=>{
        if(res.ok){
            console.log('true');
            document.querySelector('#image').value ='';
            document.querySelector('#name').value ='';
            document.querySelector('#text').value ='';
        }
        else{
            console.log('error');
        }
    }).catch(()=>console.log('error'))
})