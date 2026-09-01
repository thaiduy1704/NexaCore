import sharp from 'sharp';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import toIco from 'to-ico';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const logoPath = join(__dirname, '../public/images/Logo.png');
const outputDir = join(__dirname, '../public');

// Đảm bảo thư mục output tồn tại
if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

// Các kích thước favicon cần tạo
const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-96x96.png', size: 96 },
  { name: 'favicon-192x192.png', size: 192 },
  { name: 'favicon-512x512.png', size: 512 },
  { name: 'apple-touch-icon.png', size: 180 },
];

async function generateFavicons() {
  try {
    // Kiểm tra file logo có tồn tại không
    if (!existsSync(logoPath)) {
      console.error(`❌ Không tìm thấy file logo tại: ${logoPath}`);
      process.exit(1);
    }

    console.log('🔄 Đang tạo các file favicon từ logo...\n');

    // Tạo các file favicon với các kích thước khác nhau
    for (const { name, size } of sizes) {
      const outputPath = join(outputDir, name);
      
      await sharp(logoPath)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .png()
        .toFile(outputPath);
      
      console.log(`✅ Đã tạo: ${name} (${size}x${size})`);
    }

    // Tạo favicon.ico đúng chuẩn từ các file PNG đã tạo
    console.log(`\n🔄 Đang tạo favicon.ico đúng chuẩn...`);
    
    const favicon16Path = join(outputDir, 'favicon-16x16.png');
    const favicon32Path = join(outputDir, 'favicon-32x32.png');
    const faviconIcoPath = join(outputDir, 'favicon.ico');
    
    // Đọc các file PNG và tạo ICO với nhiều kích thước
    const buffers = [
      readFileSync(favicon16Path),
      readFileSync(favicon32Path),
    ];
    
    const icoBuffer = await toIco(buffers);
    writeFileSync(faviconIcoPath, icoBuffer);
    
    console.log(`✅ Đã tạo: favicon.ico (đúng chuẩn ICO với 16x16 và 32x32)`);
    console.log(`\n✅ Đã tạo tất cả các file favicon thành công!`);
    console.log(`\n📁 Các file đã được lưu tại: ${outputDir}`);
    
  } catch (error) {
    console.error('❌ Lỗi khi tạo favicon:', error);
    process.exit(1);
  }
}

generateFavicons();

