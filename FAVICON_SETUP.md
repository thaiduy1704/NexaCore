# Hướng dẫn thiết lập Favicon cho Google Search

Để logo của bạn hiển thị trong kết quả tìm kiếm Google, bạn cần tạo các file favicon sau và đặt chúng vào thư mục `public/`:

## Các file cần tạo:

1. **favicon.ico** - File favicon chính (16x16, 32x32, 48x48 pixels)
2. **favicon-16x16.png** - Favicon 16x16 pixels
3. **favicon-32x32.png** - Favicon 32x32 pixels
4. **favicon-96x96.png** - Favicon 96x96 pixels
5. **favicon-192x192.png** - Favicon 192x192 pixels
6. **favicon-512x512.png** - Favicon 512x512 pixels
7. **apple-touch-icon.png** - Icon cho iOS (180x180 pixels)

## Cách tạo favicon:

### Cách 1: Sử dụng công cụ online (Khuyến nghị)

1. Truy cập: https://realfavicongenerator.net/ hoặc https://favicon.io/
2. Upload file `public/images/Logo.png` của bạn
3. Tải về tất cả các file favicon đã được tạo
4. Copy tất cả các file vào thư mục `public/`

### Cách 2: Sử dụng Photoshop/GIMP

1. Mở file `public/images/Logo.png` trong Photoshop hoặc GIMP
2. Tạo các file với kích thước tương ứng:
   - 16x16, 32x32, 96x96, 192x192, 512x512 pixels
   - 180x180 pixels cho apple-touch-icon.png
3. Export các file với tên tương ứng vào thư mục `public/`
4. Tạo file `favicon.ico` bằng cách sử dụng công cụ convert online hoặc ImageMagick

## Sau khi tạo xong:

1. Đảm bảo tất cả các file đã được đặt trong thư mục `public/`
2. Build lại dự án: `npm run build`
3. Deploy lại website
4. Sử dụng Google Search Console để yêu cầu Google index lại favicon:
   - Vào Google Search Console
   - Chọn URL Inspection
   - Nhập URL trang chủ của bạn
   - Click "Request Indexing"

## Lưu ý:

- Google có thể mất vài ngày đến vài tuần để cập nhật favicon mới
- Favicon phải có kích thước tối thiểu 16x16 pixels
- Nên sử dụng định dạng PNG hoặc ICO
- Đảm bảo favicon có độ tương phản tốt và dễ nhận biết ở kích thước nhỏ


