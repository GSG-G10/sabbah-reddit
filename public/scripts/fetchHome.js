const fetchAllPosts = (dataArr) => {
    for (let i =0; i< dataArr.length; i++) {
        createPost(dataArr[i])
    }
}

fetch('/posts').then(res => res.json()).then(data => {
    fetchAllPosts(data)
})