import Upscaler from 'upscaler';

const upscaler = new Upscaler();
const imageInput = document.getElementById('imageInput');
const canvas = document.getElementById('upscaledCanvas');
const ctx = canvas.getContext('2d');

imageInput.addEventListener('change', async (event) => {
  const file = event.target.files[0];
  const img = new Image();
  img.src = URL.createObjectURL(file);

  img.onload = async () => {
    canvas.width = img.width * 2; // 输出2倍的分辨率
    canvas.height = img.height * 2;
    
    const result = await upscaler.upscale(img);
    
    ctx.drawImage(result, 0, 0, canvas.width, canvas.height);
  };
});

