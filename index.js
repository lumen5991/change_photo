const change__img = document.querySelectorAll('.change__img');
if(change__img){
    change__img.forEach((picture)=>{
        picture.addEventListener("click",(e)=>{
            e.preventDefault()
            let parent__img = picture.closest('.box__one__image')
            let parent__image = parent__img.querySelector("img")
            let parent__imageSrc = parent__image.src
            let parent__principale = document.getElementById('principale')
            let parent__principaleSrc = parent__principale.src
            parent__image.src = parent__principaleSrc
            parent__principale.src = parent__imageSrc

        })
    }

    )
}