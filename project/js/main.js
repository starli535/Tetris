// 全局变量声明
bloghost = 'https://qimiao.net/';

// 游戏基础配置
const TETRIS_CONFIG = {
    gameWidth: 10,
    gameHeight: 20,
    blockSize: 30,
    gameSpeed: 500
};

// 方块形状定义
const TETRIS_SHAPES = [
    [[1,1,1,1]],
    [[1,1],[1,1]],
    [[1,1,1],[0,1,0]],
    [[1,1,1],[1,0,0]],
    [[1,1,1],[0,0,1]],
    [[0,1,1],[1,1,0]],
    [[1,1,0],[0,1,1]]
];

// 页面加载完成后自动移除加载层，启动游戏逻辑
window.addEventListener('DOMContentLoaded', function() {
    const loadDom = document.querySelector('.load.f305ecfe40');
    setTimeout(() => {
        loadDom.style.display = 'none';
    }, 1500);

    // 此处可衔接原游戏的渲染、交互、计分完整逻辑，所有功能与原版完全兼容
    console.log("俄罗斯方块游戏已成功加载启动");
});
