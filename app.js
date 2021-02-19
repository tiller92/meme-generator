let url = document.querySelector('input')
let topText = document.getElementById('topText')
let bottomText = document.getElementById('bottomText')
const formSumbit = document.querySelector('form')
const memeList = document.querySelector('.memeList')



formSumbit.addEventListener('submit', function(event) {
    event.preventDefault()

    let memeList = document.createElement('div')
    memeList.classList.add('memeList')
        // this is the image
    let image = document.createElement('img')
    image.setAttribute('src', url.value)
    image.classList.add('image')

    // try to remove
    removeBtn = document.createElement('div')
    removeBtn.innerHTML = '&#10807'
    removeBtn.classList.add('removeBtn')
    removeBtn.addEventListener('click', function() {
        memeList.remove()
    })


    // this is the div for top text
    let imageDiv = document.createElement('div')
    imageDiv.classList.add('memeListTop')
    imageDiv.textContent = topText.value
        //bottom text
    let imageDivBottom = document.createElement('div')
    imageDivBottom.classList.add('memeListBottom')
    imageDivBottom.textContent = bottomText.value
    formSumbit.appendChild(memeList)
    memeList.appendChild(imageDiv)
    memeList.append(imageDivBottom)
    memeList.append(image)
    memeList.appendChild(removeBtn)

    url.value = ''
    topText.value = ''
    bottomText.value = ''

})











