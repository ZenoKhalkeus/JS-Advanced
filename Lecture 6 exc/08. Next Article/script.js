function getArticleGenerator(articles) {

    let myArticles = Array.from(articles)
    let content = document.getElementById("content")
    return()=>{

        if(!myArticles.length){ //length = 0 -> false
            return
        }

        let currentArticle = myArticles.shift()
        content.innerHTML += `<article>${currentArticle}</article>`

    }
}
