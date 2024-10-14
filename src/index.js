import Upscaler from 'upscaler';

// 确保图像加载完毕后处理
const originalImage = document.getElementById('original-image');
originalImage.onload = async function() {
    // 创建 Upscaler 实例
    const upscaler = new Upscaler();
    
    // 使用 Upscaler 进行放大 (例如放大 2 倍)
    const upscaledImage = await upscaler.upscale(originalImage, { scale: 2 });

    // 获取 canvas 元素
    const canvas = document.getElementById('upscaled-image');
    const context = canvas.getContext('2d');

    // 设置 canvas 尺寸为放大后的图像尺寸
    canvas.width = upscaledImage.width;
    canvas.height = upscaledImage.height;

    // 在 canvas 上绘制放大后的图像
    context.putImageData(upscaledImage, 0, 0);
};

