function getdatas(){
    fetch('https://6473467cd784bccb4a3c69c8.mockapi.io/list')
    .then(res => res.json())
    .then(data => {
        const tbody = document.querySelector('tbody')
        tbody.innerHTML = ''
        data.forEach(el => {
            tbody.innerHTML += `
                    <tr>
                        <td>${el.id}</td>
                        <td><img src="${el.image}"></td>
                        <td>${el.name}</td>
                        <td>${el.text}</td>
                        <td><a href="edit.html?${el.id}" class="btn btn-success">Edit</a></td>
                        <td><button class="btn btn-danger">delete</button></td>
                    </tr>
        `
        });
    }).catch(err=>console.log('error'))
}
getdatas();

    document.addEventListener('click',function(e){
        const deletebtn = e.target.closest('.btn-danger')
        if(deletebtn){
            const fname = deletebtn.parentElement.parentElement.children[2].innerHTML
            Swal.fire({
                title: fname,
                text: "silinsin mi?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'beli!',
                cancelButtonText: 'xeyr!'
              }).then((result) => {
                if (result.isConfirmed) {
                    fetch('https://6473467cd784bccb4a3c69c8.mockapi.io/list/'+deletebtn.parentElement.parentElement.children[0].innerHTML,{
                        method:'DELETE'
                    }).then(res=>{
                        if(res.ok){
                            console.log('elave olundu');
                         Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                  getdatas();
                }
                else{
                    console.log('elave olunmadi');
                    Swal.fire(
               'Deleted!',
               'Your file has been deleted.',
               'error'
             )
                }
                    }).catch(err=>{
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'error'
                          )
                    })
                 
                }
              })
        }
    })