window.onload = function () {
  // 获取路径导航的页面元素
  // 获取数据
  // 由于数据需要动态产生，响应的dom元素也是动态产生的，需要创建dom元素
  let path = document.querySelector('#content .path_nav ul li')
  console.log(path);
  for (let i = 0; i < goodData.path.length; i++) {
    if (i == goodData.path.length - 1) {
      let aNode = document.createElement('a')
      aNode.href = goodData.path[i].url
      aNode.innerText = goodData.path[i].title
      path.appendChild(aNode)
    } else {
      let aNode = document.createElement('a')
      aNode.href = goodData.path[i].url
      aNode.innerText = goodData.path[i].title
      console.log(aNode)
      path.appendChild(aNode)
      let iii = document.createElement('i')
      iii.innerText = '/'
      path.appendChild(iii)
    }
  }
}