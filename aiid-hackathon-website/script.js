// 添加点击事件监听器
document.addEventListener('DOMContentLoaded', function() {
    // 获取 Zixuan Gui 的信息框
    const guiBox = document.getElementById('gui-box');
    
    // 为 Zixuan Gui 的信息框添加点击事件，跳转到 Music Life 页面
    if (guiBox) {
        guiBox.addEventListener('click', function() {
            window.open('Music Life.html', '_blank');
        });
    }
    
    // 获取 Grace Duong 的信息框
    const duongBox = document.getElementById('duong-box');
    
    // 为 Grace Duong 的信息框添加点击事件，跳转到 BUTDA 页面
    if (duongBox) {
        duongBox.addEventListener('click', function() {
            window.open('BUTDA.html', '_blank');
        });
    }
    
    // 获取 Chileen Zhao 的信息框
    const zhaoBox = document.getElementById('zhao-box');
    
    // 为 Chileen Zhao 的信息框添加点击事件，跳转到外部链接
    if (zhaoBox) {
        zhaoBox.addEventListener('click', function() {
            window.open('https://a0p9190mqcb1-deploy.space.z.ai/', '_blank');
        });
    }
    
    // 获取 Yongqi Yan 的信息框
    const yanBox = document.getElementById('yan-box');
    
    // 为 Yongqi Yan 的信息框添加点击事件，跳转到外部链接
    if (yanBox) {
        yanBox.addEventListener('click', function() {
            window.open('https://z01939hhccj0-deploy.space.z.ai/', '_blank');
        });
    }
    
    // 获取其他信息框（排除 gui-box、duong-box、zhao-box 和 yan-box）
    const otherBoxes = document.querySelectorAll('.info-box:not(#gui-box):not(#duong-box):not(#zhao-box):not(#yan-box)');
    
    // 为其他信息框添加点击事件
    otherBoxes.forEach(box => {
        box.addEventListener('click', function() {
            // 跳转到项目页面
            window.open('project.html', '_blank');
        });
    });
});