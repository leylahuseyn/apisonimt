// let url = 'https://6473467cd784bccb4a3c69c8.mockapi.io/list/'+window.location.search.substring(1);
// if(window.location.search.substring(1) == ''){
//     window.location.href = "list.html"
// }
// fetch(url)
// .then(res=>{
//     if(res.ok){
//         return res.json();
//     }
//     else{
//         window.location.href = "list.html"
//     }
// }).then(data=>{
//     document.querySelector('#image').value=data.image;
//     document.querySelector('#name').value=data.name;
//     document.querySelector('#text').value=data.text;
// })

// .catch(err=>console.log('error'))

// const btn = document.querySelector('button')
// btn.addEventListener('click', function(){
//     fetch(url,{
//         method:'PUT',
//         headers:{
//             'Content-Type':'application/json'
//         },
//         body:JSON.stringify({
//             image:document.querySelector('#image').value,
//             name:document.querySelector('#name').value,
//             text:document.querySelector('#text').value,
//         })
        
//     }).then(res=>{
//         if(res.ok){
//             window.location.href = "list.html"
//         }
//         else{
//             console.log('error');
//         }
//     }).catch(()=>console.log('error'))
// })


// let url = 'https://6473467cd784bccb4a3c69c8.mockapi.io/list/' + window.location.search.substring(1);
// if (window.location.search.substring(1) == '') {
//     window.location.href = "list.html"
// }
// fetch(url)
// .then(res=>{
//     if (res.ok) {
//         return res.json();
//     }
//     else{
//         window.location.href = "list.html"
//     }  
// })
// .then(data => {
//     document.querySelector('#image').value = data.image;
//     document.querySelector('#name').value = data.name;
//     document.querySelector('#text').value = data.text;
// })
// .catch(err=>console.log(err))

// const btn = document.querySelector('button');
// btn.addEventListener('click', function(){
//     fetch(url, {
//         method : 'PUT',
//         headers : {
//             'Content-Type' : 'application/json'
//         },
//         body: JSON.stringify({
//             image : document.querySelector('#image').value,
//             name: document.querySelector('#name').value,
//             text: document.querySelector('#text').value
//         })
//     })
//     .then(res=>{
//         if (res.ok) {
//             window.location.href = "list.html"
//         }
//         else{
//             errorAlert('Bir xəta baş verdi!')
//         }
//     })
//     .catch(()=>errorAlert('Bir xəta baş verdi!'))
// })


let url = 'https://6473467cd784bccb4a3c69c8.mockapi.io/list/'+window.location.search.substring(1);
if(window.location.search.substring(1) == ''){
    window.location.href = "list.html";
}
fetch(url)
.then(res=>{
    if(res.ok){
        return res.json();
    }
    else{
        window.location.href = "list.html";
    }
}).then(data=>{
    document.querySelector('#image').value = data.image;
    document.querySelector('#name').value = data.name;
    document.querySelector('#text').value = data.text;
}).catch(err=>console.log(error))



const btn = document.querySelector('button')
btn.addEventListener('click', function(){
    fetch(url,{
        method:'PUT',
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
            window.location.href = "list.html";
        }
        else{
            console.log('error');
        }
    }).catch(()=>console.log('error'));
})