const slider = document.getElementById('imageSlider');
    const track = document.getElementById('galleryTrack');
    const wrapper = document.querySelector('.gallery-wrapper');

    // 初始化滑动条样式
    updateSliderStyle(slider.value);

    // 监听滑动条拖拽事件
    slider.addEventListener('input', (e) => {
        const val = e.target.value;
        
        // 1. 更新滑动条的颜色填充 (左侧橙色，右侧白色)
        updateSliderStyle(val);

        // 2. 计算并移动上方的图片轨道
        // 最大可滑动距离 = 轨道总宽度 - 可视区域宽度
        const maxScroll = track.scrollWidth - wrapper.clientWidth;
        
        // 如果图片总宽小于等于容器宽，则不需要滑动
        if (maxScroll > 0) {
            const scrollAmount = (val / 100) * maxScroll;
            track.style.transform = `translateX(-${scrollAmount}px)`;
        }
    });

    function updateSliderStyle(value) {
        // 使用 CSS 线性渐变来实现双色进度条
        slider.style.background = `linear-gradient(to right, #deb887 0%, #deb887 ${value}%, #ffffff ${value}%, #ffffff 100%)`;
    }