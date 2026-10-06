function openTab(evt, tabName) {
        var i, tabContent, tabBtns;

        // 1. 隐藏所有 tab-content
        tabContent = document.getElementsByClassName("tab-content");
        for (i = 0; i < tabContent.length; i++) {
            tabContent[i].style.display = "none";
            tabContent[i].classList.remove("active");
        }

        // 2. 移除所有按钮的 active 状态
        tabBtns = document.getElementsByClassName("tab-btn");
        for (i = 0; i < tabBtns.length; i++) {
            tabBtns[i].className = tabBtns[i].className.replace(" active", "");
        }

        // 3. 显示当前选中的 Tab 内容，并添加 active 类
        document.getElementById(tabName).style.display = "flex";
        document.getElementById(tabName).classList.add("active");
        
        // 4. 给点击的按钮添加 active 类
        evt.currentTarget.className += " active";
    }