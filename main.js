const generateMemeBtn = document.querySelector(".meme-generator .generate-meme-btn");
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");

const generateMeme = async () => {
    const url = 'https://meme-api.com/gimme/Meme';
    const options = {
        method: 'GET',
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        memeTitle.textContent = result.title;
        memeImage.src = result.url;
        memeAuthor.textContent = "Posted by " + result.author;

    } catch (error) {
        console.error(error);
    }
}

generateMemeBtn.addEventListener("click", generateMeme);

