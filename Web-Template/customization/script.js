// 1. 初始化滑块位置 (例如 20% 处)
    let currentPosition = 20; 
    const slider = document.getElementById('sideSlider');
    
    // 设置最大和最小位置 (百分比)
    const minPos = 0;   // 最顶端
    const maxPos = 80;  // 最底端 (留出滑块自身高度，防止超出去)

    // 2. 监听鼠标滚轮事件
    window.addEventListener('wheel', (event) => {
        // event.deltaY > 0 代表向下滚动
        // event.deltaY < 0 代表向上滚动
        
        // 每次滚动改变 5% 的位置 (你可以调整这个数字来改变灵敏度)
        const step = 5;

        if (event.deltaY > 0) {
            // 下滑
            currentPosition += step;
        } else {
            // 上滑
            currentPosition -= step;
        }

        // 3. 限制范围 (Clamp)
        // 这里的逻辑是：如果算出的位置小于最小值，就等于最小值；如果大于最大值，就等于最大值
        if (currentPosition < minPos) currentPosition = minPos;
        if (currentPosition > maxPos) currentPosition = maxPos;

        // 4. 应用新位置
        slider.style.top = currentPosition + '%';
    });

    // 保留原本的卡片点击高亮逻辑 (去掉了滑块移动的部分)
   

  function selectCard(element) {
    // 1. 处理高亮选中状态 (点击谁，谁就高亮，这一步上下排都需要)
    const siblings = element.parentElement.children;
    for (let card of siblings) {
        card.classList.remove('active');
    }
    element.classList.add('active');

    // 2. --- 核心修改：只有当 data-img 存在时，才执行换图 ---
    const newImageSrc = element.getAttribute('data-img');
    const mainCan = document.querySelector('.main-can');

    // 只有当 (1)图片路径存在 且 (2)找不到不到main-can元素 时才执行
    if (newImageSrc && mainCan) {
        // 简单的淡入淡出效果
        mainCan.style.opacity = '0.6';
        setTimeout(() => {
            mainCan.src = newImageSrc;
            mainCan.style.opacity = '1';
        }, 150);
    }
    // 获取 data-color 属性
    const newColor = element.getAttribute('data-color');
    // 获取大背景容器
    const bgContainer = document.querySelector('.modal-container');

    // 如果 (1)颜色存在 且 (2)容器找到了
    if (newColor && bgContainer) {
        bgContainer.style.background = newColor;
    }// 如果没有 newImageSrc (比如点击了上排)，代码就会忽略上面这段，什么都不做
    
}