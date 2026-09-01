import {
  Project,
  Product,
  NewsArticle,
  Job,
  Solution,
  TeamMember,
} from "@/types";

export const solutions: Solution[] = [
  {
    id: "1",
    title: "Enterprise Resource Planning",
    description:
      "Streamline your business operations with integrated ERP solutions that enhance productivity and visibility.",
    icon: "DatabaseOutlined",
    link: "/solutions#erp",
  },
  {
    id: "2",
    title: "Customer Relationship Management",
    description:
      "Build stronger customer relationships with intelligent CRM systems that drive growth and satisfaction.",
    icon: "TeamOutlined",
    link: "/solutions#crm",
  },
  {
    id: "3",
    title: "AI & Machine Learning",
    description:
      "Leverage AI and machine learning to unlock insights, automate processes, and make data-driven decisions.",
    icon: "RobotOutlined",
    link: "/solutions#ai",
  },
  {
    id: "4",
    title: "Cloud Infrastructure",
    description:
      "Modernize your IT infrastructure with scalable, secure, and cost-effective cloud solutions.",
    icon: "CloudOutlined",
    link: "/solutions#cloud",
  },
  {
    id: "5",
    title: "Internet of Things",
    description:
      "Connect devices and systems to create intelligent ecosystems that drive operational efficiency.",
    icon: "ApiOutlined",
    link: "/solutions#iot",
  },
  {
    id: "6",
    title: "Cybersecurity Solutions",
    description:
      "Protect your digital assets with comprehensive security solutions and risk management strategies.",
    icon: "SafetyOutlined",
    link: "/solutions#security",
  },
];

export const projects: Project[] = [
  {
    id: "1",
    slug: "retail-erp-implementation",
    title: "Triển khai ERP Bán Lẻ cho Chuỗi Siêu thị",
    client: "Tập đoàn Bán lẻ Quốc gia",
    industry: "Bán lẻ",
    description:
      "Triển khai hệ thống ERP Bán Lẻ toàn diện cho chuỗi siêu thị với hơn 200 điểm bán, tích hợp quản lý đa kênh và tối ưu hóa trải nghiệm khách hàng.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop",
    solution: "ERP Bán Lẻ, Cloud Infrastructure",
    result:
      "Đồng bộ hóa 100% dữ liệu đa kênh, giảm 35% chi phí tồn kho, tăng 50% hiệu quả quản lý khuyến mãi",
    date: "2024-03-15",
    content: `<p>Tập đoàn Bán lẻ Quốc gia là một trong những chuỗi siêu thị lớn nhất Việt Nam với hơn 200 điểm bán trên toàn quốc. Việc quản lý đa kênh và đồng bộ dữ liệu giữa các điểm bán là thách thức lớn mà họ phải đối mặt.</p>
    
    <h2>Thách Thức Ban Đầu</h2>
    <p>Trước khi triển khai ERP, Tập đoàn gặp nhiều khó khăn: dữ liệu tồn kho không đồng bộ giữa các điểm bán, chi phí tồn kho cao, và khó khăn trong quản lý khuyến mãi đa kênh. Hệ thống cũ không đáp ứng được nhu cầu phát triển với quy mô lớn.</p>
    
    <h2>Giải Pháp Triển Khai</h2>
    <p>NexaCore đã triển khai giải pháp ERP Bán Lẻ toàn diện, tích hợp tất cả các điểm bán, hệ thống online và kênh bán hàng trên mạng xã hội vào một nền tảng thống nhất. Hệ thống được triển khai theo từng giai đoạn để đảm bảo không gián đoạn hoạt động kinh doanh.</p>
    
    <h2>Tính Năng Nổi Bật</h2>
    <p>Hệ thống ERP Bán Lẻ của NexaCore tích hợp các tính năng tiên tiến như quản lý tồn kho thời gian thực, đồng bộ hóa dữ liệu đa kênh, và quản lý khách hàng 360 độ. Với công nghệ AI và Machine Learning, hệ thống có thể dự báo nhu cầu, tối ưu hóa giá cả và đề xuất các chiến lược khuyến mãi hiệu quả.</p>
    
    <h2>Kết Quả Ấn Tượng</h2>
    <p>Sau 6 tháng triển khai, Tập đoàn đã đạt được những kết quả ấn tượng: đồng bộ hóa 100% dữ liệu đa kênh, giảm 35% chi phí tồn kho, và tăng 50% hiệu quả quản lý khuyến mãi. Hệ thống giúp Tập đoàn tối ưu hóa hoạt động và nâng cao trải nghiệm khách hàng một cách đáng kể.</p>`,
  },
  {
    id: "2",
    slug: "manufacturing-erp-deployment",
    title: "Triển khai ERP Sản Xuất cho Nhà máy Dệt may",
    client: "Công ty Dệt may Hàng đầu",
    industry: "Sản xuất",
    description:
      "Triển khai hệ thống ERP Sản Xuất thông minh với tích hợp sâu từ lập kế hoạch đến kiểm soát chất lượng, quản lý sản lượng WIP/FG và hệ thống Barcode.",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=600&fit=crop",
    solution: "ERP Sản Xuất, Manufacturing",
    result:
      "Tối ưu 40% công suất sản xuất, giảm 30% lãng phí nguyên vật liệu, tăng 25% độ chính xác kiểm kê",
    date: "2024-02-20",
    content: `<p>Công ty Dệt may Hàng đầu là một trong những nhà sản xuất dệt may lớn nhất Việt Nam với quy trình sản xuất phức tạp từ spinning, knitting đến sewing. Việc quản lý và tối ưu hóa quy trình sản xuất là thách thức lớn.</p>
    
    <h2>Thách Thức Sản Xuất</h2>
    <p>Trước khi triển khai ERP, nhà máy gặp nhiều khó khăn: lãng phí nguyên vật liệu cao, công suất sản xuất chưa được tối ưu, và khó khăn trong kiểm soát chất lượng. Hệ thống cũ không đáp ứng được yêu cầu quản lý chi tiết theo từng công đoạn sản xuất.</p>
    
    <h2>Giải Pháp ERP Sản Xuất</h2>
    <p>NexaCore đã triển khai giải pháp ERP Sản Xuất với công nghệ IED Tool và Inspection Tool, giúp nhà máy tối ưu quy trình từ lập kế hoạch đến kiểm soát chất lượng. Hệ thống tích hợp sâu với các thiết bị trên sàn nhà máy và quản lý sản lượng WIP/FG chi tiết.</p>
    
    <h2>Công Nghệ IED Tool Và Inspection Tool</h2>
    <p>Hệ thống tích hợp công cụ IED (Industrial Engineering Data) giúp xây dựng và quản lý thư viện định mức thời gian chuẩn (SMV/SAM/SAH) chi tiết theo từng kiểu dáng. Công cụ Inspection Tool cho phép nhập liệu lỗi qua màn hình cảm ứng và tự động đánh giá chất lượng vải dựa trên số lượng lỗi.</p>
    
    <h2>Kết Quả Vượt Mong Đợi</h2>
    <p>Sau khi triển khai, nhà máy đã đạt được những kết quả ấn tượng: tối ưu 40% công suất sản xuất, giảm 30% lãng phí nguyên vật liệu, và tăng 25% độ chính xác kiểm kê. Hệ thống giúp nhà máy nâng cao năng lực cạnh tranh và đáp ứng các tiêu chuẩn quốc tế.</p>`,
  },
  {
    id: "3",
    slug: "budget-management-system",
    title: "Hệ thống Quản Lý Ngân Sách cho Tập đoàn",
    client: "Tập đoàn Đa ngành",
    industry: "Tài chính",
    description:
      "Triển khai giải pháp Quản Lý Ngân Sách toàn diện với kiểm soát chi tiêu theo thời gian thực và báo cáo phân tích độ lệch chi tiết.",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&h=600&fit=crop",
    solution: "Quản Lý Ngân Sách, Financial Management",
    result:
      "Giảm 45% tình trạng vượt chi, tăng 60% độ chính xác dự toán, cải thiện 50% tốc độ phê duyệt",
    date: "2024-01-10",
    content: `<p>Tập đoàn Đa ngành với nhiều công ty con và phòng ban khác nhau cần một hệ thống quản lý ngân sách tập trung và hiệu quả. Việc kiểm soát chi tiêu và phân bổ ngân sách là thách thức lớn.</p>
    
    <h2>Vấn Đề Quản Lý Ngân Sách</h2>
    <p>Trước khi triển khai, Tập đoàn gặp nhiều khó khăn: tình trạng vượt chi thường xuyên, độ chính xác dự toán thấp, và quy trình phê duyệt chậm. Hệ thống cũ không đáp ứng được yêu cầu quản lý tập trung cho nhiều đơn vị trực thuộc.</p>
    
    <h2>Giải Pháp Quản Lý Ngân Sách</h2>
    <p>NexaCore đã triển khai giải pháp Quản Lý Ngân Sách toàn diện, cho phép Tập đoàn kiểm soát chi tiêu theo thời gian thực và phân bổ ngân sách hiệu quả. Hệ thống tự động hóa quy trình phê duyệt và cảnh báo khi có nguy cơ vượt chi.</p>
    
    <h2>Kiểm Soát Chi Tiêu Theo Thời Gian Thực</h2>
    <p>Hệ thống tự động hóa quy trình phê duyệt, đối chiếu với ngân sách đã duyệt để ngăn chặn tình trạng vượt chi ngay từ đầu. Mọi giao dịch được theo dõi và cảnh báo ngay lập tức khi có nguy cơ vượt ngân sách.</p>
    
    <h2>Báo Cáo Và Phân Tích Độ Lệch</h2>
    <p>Giải pháp cung cấp báo cáo chuyên sâu so sánh ngân sách thực tế với dự toán, hỗ trợ ra quyết định đầu tư và phân bổ nguồn lực chính xác. Các dashboard trực quan giúp lãnh đạo nắm bắt tình hình tài chính nhanh chóng.</p>
    
    <h2>Kết Quả Thành Công</h2>
    <p>Sau khi triển khai, Tập đoàn đã đạt được những kết quả ấn tượng: giảm 45% tình trạng vượt chi, tăng 60% độ chính xác dự toán, và cải thiện 50% tốc độ phê duyệt. Hệ thống giúp Tập đoàn duy trì tính kỷ luật tài chính và tối ưu hiệu quả sử dụng nguồn lực.</p>`,
  },
  {
    id: "7",
    slug: "dms-distribution-system",
    title: "Triển khai DMS cho Công ty FMCG",
    client: "Công ty Hàng tiêu dùng",
    industry: "FMCG",
    description:
      "Triển khai Hệ thống Quản Lý Phân Phối (DMS) số hóa toàn diện quy trình bán hàng và quản lý kênh phân phối, tối ưu hóa hiệu quả hoạt động ngoài thị trường.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=600&fit=crop",
    solution: "DMS, Distribution Management",
    result:
      "Tăng 45% độ phủ thị trường, giảm 35% tồn kho chết, cải thiện 50% hiệu suất đội ngũ bán hàng",
    date: "2024-07-25",
    content: `<p>Công ty Hàng tiêu dùng là một trong những nhà sản xuất FMCG lớn nhất Việt Nam với mạng lưới phân phối rộng khắp. Việc quản lý kênh phân phối và đội ngũ bán hàng là thách thức lớn.</p>
    
    <h2>Thách Thức Quản Lý Phân Phối</h2>
    <p>Trước khi triển khai DMS, Công ty gặp nhiều khó khăn: độ phủ thị trường thấp, tồn kho chết cao, và khó khăn trong quản lý đội ngũ bán hàng. Hệ thống cũ không đáp ứng được yêu cầu quản lý thời gian thực với hàng nghìn điểm bán.</p>
    
    <h2>Triển Khai DMS</h2>
    <p>NexaCore đã triển khai hệ thống DMS toàn diện, giúp Công ty quản lý lực lượng bán hàng, theo dõi tồn kho kênh và tối ưu hóa hiệu quả hoạt động. Hệ thống được tích hợp với ứng dụng di động cho đội ngũ bán hàng.</p>
    
    <h2>Quản Lý Lực Lượng Bán Hàng</h2>
    <p>DMS giúp giám sát hoạt động, lộ trình bán hàng và hiệu suất đặt hàng của nhân viên thị trường (Sales Reps) qua ứng dụng di động. Hệ thống theo dõi vị trí GPS, thời gian thăm khách hàng và kết quả bán hàng, giúp tối ưu hóa hiệu quả làm việc.</p>
    
    <h2>Theo Dõi Tồn Kho Kênh</h2>
    <p>Hệ thống cập nhật tồn kho, tình trạng trưng bày, và đơn hàng tại điểm bán/NPP theo thời gian thực, giảm rủi ro thiếu hàng và tồn kho chết. Dữ liệu được đồng bộ tự động với hệ thống ERP trung tâm.</p>
    
    <h2>Kết Quả Vượt Trội</h2>
    <p>Sau khi triển khai, Công ty đã đạt được những kết quả vượt trội: tăng 45% độ phủ thị trường, giảm 35% tồn kho chết, và cải thiện 50% hiệu suất đội ngũ bán hàng. Hệ thống giúp Công ty tối ưu hóa quy trình phân phối và nâng cao hiệu quả kinh doanh.</p>`,
  },
  {
    id: "8",
    slug: "ecommerce-platform-deployment",
    title: "Triển khai Nền tảng E-commerce cho Thương hiệu Thời trang",
    client: "Thương hiệu Thời trang Quốc tế",
    industry: "Thời trang",
    description:
      "Triển khai nền tảng Thương mại Điện tử mạnh mẽ với tích hợp sâu ERP & CRM, hỗ trợ đa ngôn ngữ, đa tiền tệ và tối ưu hiệu suất.",
    image:
      "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=1200&h=600&fit=crop",
    solution: "E-commerce Platform, Digital Commerce",
    result:
      "Tăng 120% doanh thu online, giảm 40% thời gian xử lý đơn hàng, cải thiện 65% trải nghiệm người dùng",
    date: "2024-08-30",
    content: `<p>Thương hiệu Thời trang Quốc tế là một trong những thương hiệu thời trang nổi tiếng với sự hiện diện toàn cầu. Việc phát triển kênh bán hàng online là ưu tiên hàng đầu để mở rộng thị trường.</p>
    
    <h2>Nhu Cầu Phát Triển E-commerce</h2>
    <p>Trước khi triển khai nền tảng E-commerce, Thương hiệu gặp nhiều khó khăn: doanh thu online thấp, trải nghiệm người dùng chưa tốt, và khó khăn trong quản lý đơn hàng đa kênh. Hệ thống cũ không đáp ứng được yêu cầu phát triển.</p>
    
    <h2>Triển Khai Nền Tảng E-commerce</h2>
    <p>NexaCore đã triển khai nền tảng E-commerce mạnh mẽ, tích hợp sâu với ERP & CRM, hỗ trợ đa ngôn ngữ, đa tiền tệ và tối ưu hiệu suất. Hệ thống được tùy biến để phù hợp với mô hình kinh doanh của Thương hiệu.</p>
    
    <h2>Tích Hợp Sâu Với ERP & CRM</h2>
    <p>Đơn hàng, tồn kho, thông tin khách hàng được đồng bộ tự động, loại bỏ sai sót và đảm bảo dữ liệu bán hàng chính xác. Hệ thống tự động cập nhật tồn kho khi có đơn hàng mới và đồng bộ thông tin khách hàng với CRM.</p>
    
    <h2>Nền Tảng Tùy Biến Cao</h2>
    <p>Cho phép xây dựng giao diện và trải nghiệm người dùng độc đáo, đáp ứng các mô hình kinh doanh B2B/B2C phức tạp. Hệ thống hỗ trợ đa ngôn ngữ, đa tiền tệ, và tích hợp các công cụ Marketing (SEO, liên kết).</p>
    
    <h2>Kết Quả Ngoạn Mục</h2>
    <p>Sau khi triển khai, Thương hiệu đã đạt được những kết quả ngoạn mục: tăng 120% doanh thu online, giảm 40% thời gian xử lý đơn hàng, và cải thiện 65% trải nghiệm người dùng. Hệ thống giúp Thương hiệu mở rộng thị trường và tăng trưởng doanh thu online đáng kể.</p>`,
  },
  {
    id: "4",
    slug: "airbnb-like-booking-platform",
    title: "Nền Tảng Booking Lưu Trú & Trải Nghiệm",
    client: "Startup Du lịch & Lưu trú",
    industry: "Du lịch / Hospitality",
    description:
      "Xây dựng nền tảng booking tương tự Airbnb, hỗ trợ đăng tin phòng/nhà, đặt chỗ theo lịch, thanh toán online, quản lý host, đánh giá và vận hành đa thiết bị.",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&h=600&fit=crop",
    solution: "Booking Platform, Payment Integration, Cloud Infrastructure",
    result:
      "Tăng 3x tốc độ lên listing, giảm 40% lỗi overbooking, cải thiện 60% tỉ lệ hoàn tất đặt chỗ nhờ luồng UX tối ưu",
    date: "2024-09-10",
    content: `
    <section class="not-prose" style="font-family: ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; color:#0f172a;">
      <div style="border:1px solid rgba(148,163,184,.35); background:linear-gradient(135deg,#f8fafc 0%, #ffffff 45%, #eef2ff 100%); border-radius:24px; overflow:hidden; box-shadow:0 24px 70px -45px rgba(15,23,42,.55);">
        <div style="padding:28px 28px 16px 28px;">
          <div style="display:flex; gap:10px; flex-wrap:wrap; align-items:center; margin-bottom:14px;">
            <span style="font-size:12px; letter-spacing:.12em; text-transform:uppercase; font-weight:700; color:#475569; background:rgba(99,102,241,.10); border:1px solid rgba(99,102,241,.18); padding:6px 10px; border-radius:999px;">Case study</span>
            <span style="font-size:12px; letter-spacing:.12em; text-transform:uppercase; font-weight:700; color:#475569; background:rgba(15,23,42,.04); border:1px solid rgba(15,23,42,.08); padding:6px 10px; border-radius:999px;">Booking platform</span>
          </div>

          <h2 style="margin:0; font-size:28px; line-height:1.15; letter-spacing:-.02em;">Airbnb-like, nhưng “vận hành chắc” ngay từ ngày đầu</h2>
          <p style="margin:10px 0 0; font-size:16px; line-height:1.7; color:#334155;">
            Startup du lịch cần một nền tảng đặt chỗ <strong>tìm nhanh – đặt mượt – không overbooking</strong>.
            Điểm khó không nằm ở giao diện, mà ở khả năng giữ lịch chính xác khi lượng truy cập tăng đột biến.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:repeat(3, minmax(0,1fr)); gap:12px; padding:16px 28px 22px;">
          <div style="background:rgba(255,255,255,.92); border:1px solid rgba(148,163,184,.35); border-radius:18px; padding:16px; min-height:116px; display:flex; flex-direction:column; justify-content:space-between;">
            <div style="font-size:11px; letter-spacing:.14em; text-transform:uppercase; font-weight:800; color:#64748b;">Outcome</div>
            <div style="margin-top:8px; font-size:30px; font-weight:900; letter-spacing:-.02em;">3x</div>
            <div style="margin-top:2px; font-size:13px; color:#64748b;">tốc độ tạo listing</div>
          </div>
          <div style="background:rgba(255,255,255,.92); border:1px solid rgba(148,163,184,.35); border-radius:18px; padding:16px; min-height:116px; display:flex; flex-direction:column; justify-content:space-between;">
            <div style="font-size:11px; letter-spacing:.14em; text-transform:uppercase; font-weight:800; color:#64748b;">Reliability</div>
            <div style="margin-top:8px; font-size:30px; font-weight:900; letter-spacing:-.02em;">-40%</div>
            <div style="margin-top:2px; font-size:13px; color:#64748b;">lỗi trùng lịch/overbooking</div>
          </div>
          <div style="background:rgba(255,255,255,.92); border:1px solid rgba(148,163,184,.35); border-radius:18px; padding:16px; min-height:116px; display:flex; flex-direction:column; justify-content:space-between;">
            <div style="font-size:11px; letter-spacing:.14em; text-transform:uppercase; font-weight:800; color:#64748b;">Conversion</div>
            <div style="margin-top:8px; font-size:30px; font-weight:900; letter-spacing:-.02em;">+60%</div>
            <div style="margin-top:2px; font-size:13px; color:#64748b;">tỉ lệ hoàn tất đặt chỗ</div>
          </div>
        </div>

        <div style="display:grid; grid-template-columns:repeat(2, minmax(0,1fr)); gap:12px; padding:0 28px 28px;">
          <figure style="margin:0; border-radius:18px; overflow:hidden; border:1px solid rgba(2,6,23,.06); box-shadow:0 14px 40px -30px rgba(15,23,42,.6);">
            <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1600&h=1000&fit=crop" alt="Stay listing" style="width:100%; height:100%; object-fit:cover; display:block;" loading="lazy" />
          </figure>
          <figure style="margin:0; border-radius:18px; overflow:hidden; border:1px solid rgba(2,6,23,.06); box-shadow:0 14px 40px -30px rgba(15,23,42,.6);">
            <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600&h=1000&fit=crop" alt="Booking experience" style="width:100%; height:100%; object-fit:cover; display:block;" loading="lazy" />
          </figure>
        </div>
      </div>

      <div style="margin-top:18px; display:grid; grid-template-columns: 1.2fr .8fr; gap:16px; align-items:start;">
        <div style="background:#ffffff; border:1px solid rgba(148,163,184,.30); border-radius:20px; padding:18px 18px 14px; box-shadow:0 18px 55px -50px rgba(15,23,42,.55);">
          <h3 style="margin:0; font-size:18px; letter-spacing:-.01em;">Điểm “đắt” của bài toán</h3>
          <p style="margin:10px 0 0; color:#334155; line-height:1.75;">
            Nếu <strong>availability</strong> sai, mọi thứ sụp đổ: khách bị huỷ, host mất doanh thu, CS “chữa cháy”.
            Vì vậy, dự án tập trung vào 3 trụ cột: <strong>Availability</strong>, <strong>Pricing</strong>, <strong>Trust</strong>.
          </p>
        </div>

        <div style="display:grid; gap:10px;">
          <div style="background:#ffffff; border:1px solid rgba(148,163,184,.30); border-radius:18px; padding:14px 14px 12px;">
            <div style="font-weight:800;">Availability</div>
            <div style="margin-top:6px; color:#475569; line-height:1.65; font-size:13px;">Khóa lịch thời gian thực, giữ chỗ tạm, timeout rõ ràng.</div>
          </div>
          <div style="background:#ffffff; border:1px solid rgba(148,163,184,.30); border-radius:18px; padding:14px 14px 12px;">
            <div style="font-weight:800;">Pricing</div>
            <div style="margin-top:6px; color:#475569; line-height:1.65; font-size:13px;">Giá theo mùa/cuối tuần, phí, giảm giá, rule min-night.</div>
          </div>
          <div style="background:#ffffff; border:1px solid rgba(148,163,184,.30); border-radius:18px; padding:14px 14px 12px;">
            <div style="font-weight:800;">Trust</div>
            <div style="margin-top:6px; color:#475569; line-height:1.65; font-size:13px;">Review, messaging, report, kiểm soát rủi ro vận hành.</div>
          </div>
        </div>
      </div>

      <div style="margin-top:16px; background:linear-gradient(135deg, rgba(16,185,129,.10), rgba(255,255,255,.92)); border:1px solid rgba(16,185,129,.25); border-radius:20px; padding:16px 18px;">
        <div style="font-weight:900; letter-spacing:-.01em; color:#064e3b;">Điểm khác biệt</div>
        <div style="margin-top:8px; color:#0f172a; line-height:1.75;">
          “Không overbooking” là tiêu chuẩn vận hành, không phải tính năng. Chúng tôi thiết kế sẵn các tình huống lỗi (timeout, retry, cancel) ngay từ đầu và mọi thao tác nhạy cảm đều có audit log.
        </div>
      </div>

      <figure style="margin:16px 0 0; border-radius:24px; overflow:hidden; border:1px solid rgba(2,6,23,.06); box-shadow:0 22px 60px -50px rgba(15,23,42,.65);">
        <img src="https://images.unsplash.com/photo-1554774853-719586f82d77?w=1800&h=1000&fit=crop" alt="Host dashboard" style="width:100%; height:auto; display:block;" loading="lazy" />
      </figure>

      <div style="margin-top:14px; background:#ffffff; border:1px solid rgba(148,163,184,.30); border-radius:20px; padding:18px;">
        <h3 style="margin:0; font-size:18px; letter-spacing:-.01em;">Kết quả</h3>
        <p style="margin:10px 0 0; color:#334155; line-height:1.75;">
          Go-live ổn định ở mùa cao điểm: host lên listing nhanh hơn, khách hoàn tất đặt chỗ mượt hơn, đội vận hành giảm đáng kể sự cố nhờ availability “đúng ngay lần đầu”.
        </p>
      </div>
    </section>
    `,
  },
  {
    id: "5",
    slug: "cross-database-migration-tool",
    title: "Tool Migrate Database Đa Nguồn (Cross-DB Migration)",
    client: "Doanh nghiệp Fintech",
    industry: "Công nghệ / Dữ liệu",
    description:
      "Phát triển công cụ migrate dữ liệu từ database nguồn sang database đích (khác engine), hỗ trợ mapping schema, transform dữ liệu, chạy theo batch, rollback và theo dõi tiến trình.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop",
    solution: "Data Migration, ETL/ELT, Observability",
    result:
      "Rút ngắn 70% thời gian migration, giảm rủi ro downtime nhờ chạy incremental & kiểm tra đối soát tự động",
    date: "2024-10-05",
    content: `
    <section class="not-prose" style="font-family: ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; color:#0f172a;">
      <div style="border:1px solid rgba(148,163,184,.35); background:linear-gradient(135deg,#f8fafc 0%, #ffffff 45%, #ecfeff 100%); border-radius:24px; overflow:hidden; box-shadow:0 24px 70px -45px rgba(15,23,42,.55);">
        <div style="padding:28px 28px 16px 28px;">
          <div style="display:flex; gap:10px; flex-wrap:wrap; align-items:center; margin-bottom:14px;">
            <span style="font-size:12px; letter-spacing:.12em; text-transform:uppercase; font-weight:700; color:#475569; background:rgba(20,184,166,.10); border:1px solid rgba(20,184,166,.18); padding:6px 10px; border-radius:999px;">Case study</span>
            <span style="font-size:12px; letter-spacing:.12em; text-transform:uppercase; font-weight:700; color:#475569; background:rgba(15,23,42,.04); border:1px solid rgba(15,23,42,.08); padding:6px 10px; border-radius:999px;">Data migration</span>
          </div>

          <h2 style="margin:0; font-size:28px; line-height:1.15; letter-spacing:-.02em;">Tool migrate đa nguồn: nhanh hơn, nhưng quan trọng là “đúng”</h2>
          <p style="margin:10px 0 0; font-size:16px; line-height:1.7; color:#334155;">
            Với Fintech, migrate database là bài toán <strong>kiểm chứng</strong>: chạy liên tục, có thể resume, và phải chứng minh dữ liệu “đúng” sau mỗi giai đoạn.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:repeat(3, minmax(0,1fr)); gap:12px; padding:16px 28px 22px;">
          <div style="background:rgba(255,255,255,.92); border:1px solid rgba(148,163,184,.35); border-radius:18px; padding:16px; min-height:116px; display:flex; flex-direction:column; justify-content:space-between;">
            <div style="font-size:11px; letter-spacing:.14em; text-transform:uppercase; font-weight:800; color:#64748b;">Delivery</div>
            <div style="margin-top:8px; font-size:30px; font-weight:900; letter-spacing:-.02em;">-70%</div>
            <div style="margin-top:2px; font-size:13px; color:#64748b;">thời gian migration</div>
          </div>
          <div style="background:rgba(255,255,255,.92); border:1px solid rgba(148,163,184,.35); border-radius:18px; padding:16px; min-height:116px; display:flex; flex-direction:column; justify-content:space-between;">
            <div style="font-size:11px; letter-spacing:.14em; text-transform:uppercase; font-weight:800; color:#64748b;">Downtime</div>
            <div style="margin-top:8px; font-size:30px; font-weight:900; letter-spacing:-.02em;">Min</div>
            <div style="margin-top:2px; font-size:13px; color:#64748b;">incremental & resume</div>
          </div>
          <div style="background:rgba(255,255,255,.92); border:1px solid rgba(148,163,184,.35); border-radius:18px; padding:16px; min-height:116px; display:flex; flex-direction:column; justify-content:space-between;">
            <div style="font-size:11px; letter-spacing:.14em; text-transform:uppercase; font-weight:800; color:#64748b;">Confidence</div>
            <div style="margin-top:8px; font-size:30px; font-weight:900; letter-spacing:-.02em;">Verify</div>
            <div style="margin-top:2px; font-size:13px; color:#64748b;">row count + checksum</div>
          </div>
        </div>

        <div style="display:grid; grid-template-columns: 2fr 1fr; gap:12px; padding:0 28px 28px;">
          <figure style="margin:0; border-radius:18px; overflow:hidden; border:1px solid rgba(2,6,23,.06); box-shadow:0 14px 40px -30px rgba(15,23,42,.6);">
            <img src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1800&h=1000&fit=crop" alt="Migration pipeline" style="width:100%; height:100%; object-fit:cover; display:block;" loading="lazy" />
          </figure>
          <figure style="margin:0; border-radius:18px; overflow:hidden; border:1px solid rgba(2,6,23,.06); box-shadow:0 14px 40px -30px rgba(15,23,42,.6);">
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&h=1000&fit=crop" alt="Database systems" style="width:100%; height:100%; object-fit:cover; display:block;" loading="lazy" />
          </figure>
        </div>
      </div>

      <div style="margin-top:18px; display:grid; grid-template-columns: 1fr 1fr; gap:16px;">
        <div style="background:#ffffff; border:1px solid rgba(148,163,184,.30); border-radius:20px; padding:18px; box-shadow:0 18px 55px -50px rgba(15,23,42,.55);">
          <h3 style="margin:0; font-size:18px; letter-spacing:-.01em;">Vì sao script “one-off” không đủ?</h3>
          <p style="margin:10px 0 0; color:#334155; line-height:1.75;">
            Thường fail ở 3 điểm: <strong>không resume</strong>, <strong>không đo</strong>, và <strong>không chứng minh dữ liệu đúng</strong>.
            Với tài chính, đây là rủi ro không thể chấp nhận.
          </p>
        </div>
        <div style="background:#ffffff; border:1px solid rgba(148,163,184,.30); border-radius:20px; padding:18px;">
          <h3 style="margin:0; font-size:18px; letter-spacing:-.01em;">Nguyên tắc thiết kế</h3>
          <ul style="margin:10px 0 0; padding-left:18px; color:#334155; line-height:1.85;">
            <li><strong>Idempotent</strong>: chạy lại không tạo trùng.</li>
            <li><strong>Checkpoint</strong>: resume theo batch.</li>
            <li><strong>Verification</strong>: đối soát bắt buộc.</li>
            <li><strong>Observable</strong>: đo throughput/lỗi/progress.</li>
          </ul>
        </div>
      </div>

      <div style="margin-top:16px; background:#ffffff; border:1px solid rgba(148,163,184,.30); border-radius:20px; padding:18px;">
        <h3 style="margin:0; font-size:18px; letter-spacing:-.01em;">Pipeline 5 bước</h3>
        <div style="margin-top:12px; display:grid; grid-template-columns:repeat(5, minmax(0,1fr)); gap:10px;">
          <div style="border:1px solid rgba(148,163,184,.30); background:#f8fafc; border-radius:16px; padding:12px;">
            <div style="font-size:11px; letter-spacing:.14em; text-transform:uppercase; font-weight:800; color:#64748b;">Step 01</div>
            <div style="margin-top:6px; font-weight:900;">Discover</div>
            <div style="margin-top:4px; color:#475569; font-size:13px; line-height:1.6;">Khám phá schema</div>
          </div>
          <div style="border:1px solid rgba(148,163,184,.30); background:#f8fafc; border-radius:16px; padding:12px;">
            <div style="font-size:11px; letter-spacing:.14em; text-transform:uppercase; font-weight:800; color:#64748b;">Step 02</div>
            <div style="margin-top:6px; font-weight:900;">Map</div>
            <div style="margin-top:4px; color:#475569; font-size:13px; line-height:1.6;">Rule mapping/transform</div>
          </div>
          <div style="border:1px solid rgba(148,163,184,.30); background:#f8fafc; border-radius:16px; padding:12px;">
            <div style="font-size:11px; letter-spacing:.14em; text-transform:uppercase; font-weight:800; color:#64748b;">Step 03</div>
            <div style="margin-top:6px; font-weight:900;">Load</div>
            <div style="margin-top:4px; color:#475569; font-size:13px; line-height:1.6;">Batch + parallel có kiểm soát</div>
          </div>
          <div style="border:1px solid rgba(148,163,184,.30); background:#f8fafc; border-radius:16px; padding:12px;">
            <div style="font-size:11px; letter-spacing:.14em; text-transform:uppercase; font-weight:800; color:#64748b;">Step 04</div>
            <div style="margin-top:6px; font-weight:900;">Verify</div>
            <div style="margin-top:4px; color:#475569; font-size:13px; line-height:1.6;">Row count + checksum</div>
          </div>
          <div style="border:1px solid rgba(148,163,184,.30); background:#f8fafc; border-radius:16px; padding:12px;">
            <div style="font-size:11px; letter-spacing:.14em; text-transform:uppercase; font-weight:800; color:#64748b;">Step 05</div>
            <div style="margin-top:6px; font-weight:900;">Cutover</div>
            <div style="margin-top:4px; color:#475569; font-size:13px; line-height:1.6;">Incremental → switch traffic</div>
          </div>
        </div>
      </div>

      <figure style="margin:16px 0 0; border-radius:24px; overflow:hidden; border:1px solid rgba(2,6,23,.06); box-shadow:0 22px 60px -50px rgba(15,23,42,.65);">
        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1800&h=1000&fit=crop" alt="Observability dashboard" style="width:100%; height:auto; display:block;" loading="lazy" />
      </figure>

      <div style="margin-top:14px; background:#ffffff; border:1px solid rgba(148,163,184,.30); border-radius:20px; padding:18px;">
        <h3 style="margin:0; font-size:18px; letter-spacing:-.01em;">Kết quả</h3>
        <p style="margin:10px 0 0; color:#334155; line-height:1.75;">
          Rút ngắn đáng kể thời gian migration, giảm cửa sổ downtime nhờ incremental/resume, và quan trọng nhất: đội vận hành có thể <strong>tự tin chứng minh</strong> dữ liệu “đúng” bằng báo cáo đối soát sau mỗi giai đoạn.
        </p>
      </div>
    </section>
    `,
  },
  {
    id: "6",
    slug: "enterprise-ai-chatbox",
    title: "AI Chatbox Doanh Nghiệp (Customer Support & Sales Assistant)",
    client: "Doanh nghiệp B2C đa kênh",
    industry: "Dịch vụ / Thương mại",
    description:
      "Xây dựng AI chatbox cho doanh nghiệp: trả lời theo knowledge base nội bộ, hỗ trợ CSKH & bán hàng đa kênh, gợi ý phản hồi, routing về agent và theo dõi chất lượng.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop",
    solution: "AI Assistant, Knowledge Base, Omnichannel Integration",
    result:
      "Giảm 55% tải ticket lặp lại, tăng 35% tỉ lệ phản hồi trong 1 phút, cải thiện CSAT nhờ câu trả lời nhất quán",
    date: "2024-11-12",
    content: `
    <section class="not-prose" style="font-family: ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; color:#0f172a;">
      <div style="border:1px solid rgba(148,163,184,.35); background:linear-gradient(135deg,#f8fafc 0%, #ffffff 45%, #f0fdf4 100%); border-radius:24px; overflow:hidden; box-shadow:0 24px 70px -45px rgba(15,23,42,.55);">
        <div style="padding:28px 28px 16px 28px;">
          <div style="display:flex; gap:10px; flex-wrap:wrap; align-items:center; margin-bottom:14px;">
            <span style="font-size:12px; letter-spacing:.12em; text-transform:uppercase; font-weight:700; color:#475569; background:rgba(34,197,94,.10); border:1px solid rgba(34,197,94,.18); padding:6px 10px; border-radius:999px;">Case study</span>
            <span style="font-size:12px; letter-spacing:.12em; text-transform:uppercase; font-weight:700; color:#475569; background:rgba(15,23,42,.04); border:1px solid rgba(15,23,42,.08); padding:6px 10px; border-radius:999px;">AI chatbox</span>
            <span style="font-size:12px; letter-spacing:.12em; text-transform:uppercase; font-weight:700; color:#475569; background:rgba(15,23,42,.04); border:1px solid rgba(15,23,42,.08); padding:6px 10px; border-radius:999px;">Omnichannel</span>
          </div>

          <h2 style="margin:0; font-size:28px; line-height:1.15; letter-spacing:-.02em;">Chatbox AI cho doanh nghiệp: trả lời nhanh, đúng và “đồng giọng” trên mọi kênh</h2>
          <p style="margin:10px 0 0; font-size:16px; line-height:1.7; color:#334155;">
            Doanh nghiệp xử lý hàng nghìn tin nhắn/ngày (website, fanpage, Zalo, email). Vấn đề không chỉ là <strong>trả lời nhanh</strong>,
            mà còn là <strong>trả lời đúng theo chính sách</strong> và <strong>đúng theo sản phẩm hiện hành</strong>.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:repeat(3, minmax(0,1fr)); gap:12px; padding:16px 28px 22px;">
          <div style="background:rgba(255,255,255,.92); border:1px solid rgba(148,163,184,.35); border-radius:18px; padding:16px; min-height:116px; display:flex; flex-direction:column; justify-content:space-between;">
            <div style="font-size:11px; letter-spacing:.14em; text-transform:uppercase; font-weight:800; color:#64748b;">Deflection</div>
            <div style="margin-top:8px; font-size:30px; font-weight:900; letter-spacing:-.02em;">-55%</div>
            <div style="margin-top:2px; font-size:13px; color:#64748b;">ticket lặp lại</div>
          </div>
          <div style="background:rgba(255,255,255,.92); border:1px solid rgba(148,163,184,.35); border-radius:18px; padding:16px; min-height:116px; display:flex; flex-direction:column; justify-content:space-between;">
            <div style="font-size:11px; letter-spacing:.14em; text-transform:uppercase; font-weight:800; color:#64748b;">Speed</div>
            <div style="margin-top:8px; font-size:30px; font-weight:900; letter-spacing:-.02em;">+35%</div>
            <div style="margin-top:2px; font-size:13px; color:#64748b;">phản hồi &lt; 1 phút</div>
          </div>
          <div style="background:rgba(255,255,255,.92); border:1px solid rgba(148,163,184,.35); border-radius:18px; padding:16px; min-height:116px; display:flex; flex-direction:column; justify-content:space-between;">
            <div style="font-size:11px; letter-spacing:.14em; text-transform:uppercase; font-weight:800; color:#64748b;">Quality</div>
            <div style="margin-top:8px; font-size:30px; font-weight:900; letter-spacing:-.02em;">↑ CSAT</div>
            <div style="margin-top:2px; font-size:13px; color:#64748b;">nhờ câu trả lời nhất quán</div>
          </div>
        </div>

        <div style="display:grid; grid-template-columns: 1.3fr .7fr; gap:12px; padding:0 28px 28px;">
          <figure style="margin:0; border-radius:18px; overflow:hidden; border:1px solid rgba(2,6,23,.06); box-shadow:0 14px 40px -30px rgba(15,23,42,.6);">
            <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=1800&h=1000&fit=crop" alt="Customer support" style="width:100%; height:100%; object-fit:cover; display:block;" loading="lazy" />
          </figure>
          <figure style="margin:0; border-radius:18px; overflow:hidden; border:1px solid rgba(2,6,23,.06); box-shadow:0 14px 40px -30px rgba(15,23,42,.6);">
            <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&h=1000&fit=crop" alt="Sales conversation" style="width:100%; height:100%; object-fit:cover; display:block;" loading="lazy" />
          </figure>
        </div>
      </div>

      <div style="margin-top:18px; display:grid; grid-template-columns: 1fr 1fr; gap:16px;">
        <div style="background:#ffffff; border:1px solid rgba(148,163,184,.30); border-radius:20px; padding:18px; box-shadow:0 18px 55px -50px rgba(15,23,42,.55);">
          <h3 style="margin:0; font-size:18px; letter-spacing:-.01em;">Bài toán cần giải</h3>
          <ul style="margin:10px 0 0; padding-left:18px; color:#334155; line-height:1.85;">
            <li>Tin nhắn đổ về đa kênh, peak giờ cao điểm.</li>
            <li>Nhân sự trả lời không đồng đều, dễ sai chính sách/giá.</li>
            <li>FAQ lặp lại khiến agent mất thời gian.</li>
            <li>Cần chuyển giao mượt sang người thật khi tình huống phức tạp.</li>
          </ul>
        </div>
        <div style="background:#ffffff; border:1px solid rgba(148,163,184,.30); border-radius:20px; padding:18px;">
          <h3 style="margin:0; font-size:18px; letter-spacing:-.01em;">Giải pháp triển khai</h3>
          <p style="margin:10px 0 0; color:#334155; line-height:1.75;">
            AI chatbox được kết nối với knowledge base nội bộ (chính sách, sản phẩm, quy trình), có cơ chế trích dẫn nguồn, phân loại intent
            và routing đến đúng team. Câu trả lời được chuẩn hoá theo “tone of voice” thương hiệu.
          </p>
        </div>
      </div>

      <div style="margin-top:16px; background:linear-gradient(135deg, rgba(34,197,94,.10), rgba(255,255,255,.92)); border:1px solid rgba(34,197,94,.22); border-radius:20px; padding:16px 18px;">
        <div style="font-weight:900; letter-spacing:-.01em; color:#14532d;">Điểm khác biệt</div>
        <div style="margin-top:8px; color:#0f172a; line-height:1.75;">
          Chatbox không chỉ “trả lời cho có”, mà có <strong>guardrails</strong> theo chính sách, cơ chế <strong>handoff</strong> sang agent,
          và dashboard để kiểm soát chất lượng (tỉ lệ đúng, tỉ lệ chuyển agent, chủ đề hay lỗi).
        </div>
      </div>

      <figure style="margin:16px 0 0; border-radius:24px; overflow:hidden; border:1px solid rgba(2,6,23,.06); box-shadow:0 22px 60px -50px rgba(15,23,42,.65);">
        <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1800&h=1000&fit=crop" alt="Analytics dashboard" style="width:100%; height:auto; display:block;" loading="lazy" />
      </figure>
    </section>
    `,
  },
  {
    id: "9",
    slug: "nail-booking-marketplace",
    title: "Phần Mềm Booking Nail",
    client: "Chuỗi Nail & Beauty Partners",
    industry: "Làm đẹp / Marketplace",
    description:
      "Xây dựng nền tảng booking nail theo mô hình marketplace: tìm salon/artist, đặt lịch theo khung giờ, thanh toán/voucher, đánh giá, chat và quản trị vận hành.",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&h=600&fit=crop",
    solution: "Marketplace Booking, Payments, Promotions, Operations Dashboard",
    result:
      "Tăng 2.4x số booking/tháng, giảm 45% no-show nhờ đặt cọc & nhắc lịch tự động, cải thiện tỉ lệ quay lại",
    date: "2024-12-03",
    content: `
    <section class="not-prose" style="font-family: ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; color:#0f172a;">
      <div style="border:1px solid rgba(148,163,184,.35); background:linear-gradient(135deg,#fff1f2 0%, #ffffff 45%, #fdf2f8 100%); border-radius:24px; overflow:hidden; box-shadow:0 24px 70px -45px rgba(15,23,42,.55);">
        <div style="padding:28px 28px 16px 28px;">
          <div style="display:flex; gap:10px; flex-wrap:wrap; align-items:center; margin-bottom:14px;">
            <span style="font-size:12px; letter-spacing:.12em; text-transform:uppercase; font-weight:700; color:#475569; background:rgba(236,72,153,.10); border:1px solid rgba(236,72,153,.18); padding:6px 10px; border-radius:999px;">Case study</span>
            <span style="font-size:12px; letter-spacing:.12em; text-transform:uppercase; font-weight:700; color:#475569; background:rgba(15,23,42,.04); border:1px solid rgba(15,23,42,.08); padding:6px 10px; border-radius:999px;">Beauty booking</span>
            <span style="font-size:12px; letter-spacing:.12em; text-transform:uppercase; font-weight:700; color:#475569; background:rgba(15,23,42,.04); border:1px solid rgba(15,23,42,.08); padding:6px 10px; border-radius:999px;">Marketplace</span>
          </div>

          <h2 style="margin:0; font-size:28px; line-height:1.15; letter-spacing:-.02em;">Booking nail kiểu “Shopee”: tìm nhanh, deal rõ, đặt lịch chuẩn</h2>
          <p style="margin:10px 0 0; font-size:16px; line-height:1.7; color:#334155;">
            Người dùng muốn đặt nail nhanh như đặt đồ: xem giá minh bạch, chọn slot rảnh, áp voucher, và nhận nhắc lịch.
            Phía salon cần công cụ quản trị lịch, nhân sự, dịch vụ, khuyến mãi và xử lý no-show.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:repeat(3, minmax(0,1fr)); gap:12px; padding:16px 28px 22px;">
          <div style="background:rgba(255,255,255,.92); border:1px solid rgba(148,163,184,.35); border-radius:18px; padding:16px; min-height:116px; display:flex; flex-direction:column; justify-content:space-between;">
            <div style="font-size:11px; letter-spacing:.14em; text-transform:uppercase; font-weight:800; color:#64748b;">Growth</div>
            <div style="margin-top:8px; font-size:30px; font-weight:900; letter-spacing:-.02em;">2.4x</div>
            <div style="margin-top:2px; font-size:13px; color:#64748b;">booking/tháng</div>
          </div>
          <div style="background:rgba(255,255,255,.92); border:1px solid rgba(148,163,184,.35); border-radius:18px; padding:16px; min-height:116px; display:flex; flex-direction:column; justify-content:space-between;">
            <div style="font-size:11px; letter-spacing:.14em; text-transform:uppercase; font-weight:800; color:#64748b;">No-show</div>
            <div style="margin-top:8px; font-size:30px; font-weight:900; letter-spacing:-.02em;">-45%</div>
            <div style="margin-top:2px; font-size:13px; color:#64748b;">nhờ đặt cọc + nhắc lịch</div>
          </div>
          <div style="background:rgba(255,255,255,.92); border:1px solid rgba(148,163,184,.35); border-radius:18px; padding:16px; min-height:116px; display:flex; flex-direction:column; justify-content:space-between;">
            <div style="font-size:11px; letter-spacing:.14em; text-transform:uppercase; font-weight:800; color:#64748b;">Retention</div>
            <div style="margin-top:8px; font-size:30px; font-weight:900; letter-spacing:-.02em;">↑</div>
            <div style="margin-top:2px; font-size:13px; color:#64748b;">tỉ lệ quay lại</div>
          </div>
        </div>

        <div style="display:grid; grid-template-columns:repeat(2, minmax(0,1fr)); gap:12px; padding:0 28px 28px;">
          <figure style="margin:0; border-radius:18px; overflow:hidden; border:1px solid rgba(2,6,23,.06); box-shadow:0 14px 40px -30px rgba(15,23,42,.6);">
            <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1600&h=1000&fit=crop" alt="Beauty salon" style="width:100%; height:100%; object-fit:cover; display:block;" loading="lazy" />
          </figure>
          <figure style="margin:0; border-radius:18px; overflow:hidden; border:1px solid rgba(2,6,23,.06); box-shadow:0 14px 40px -30px rgba(15,23,42,.6);">
            <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1600&h=1000&fit=crop" alt="Mobile booking" style="width:100%; height:100%; object-fit:cover; display:block;" loading="lazy" />
          </figure>
        </div>
      </div>

      <div style="margin-top:18px; display:grid; grid-template-columns: 1fr 1fr; gap:16px;">
        <div style="background:#ffffff; border:1px solid rgba(148,163,184,.30); border-radius:20px; padding:18px; box-shadow:0 18px 55px -50px rgba(15,23,42,.55);">
          <h3 style="margin:0; font-size:18px; letter-spacing:-.01em;">Luồng “mua như Shopee”</h3>
          <ol style="margin:10px 0 0; padding-left:18px; color:#334155; line-height:1.85;">
            <li>Khám phá salon/artist theo vị trí, rating, giá, dịch vụ.</li>
            <li>Xem deal/combos, voucher, lịch rảnh theo khung giờ.</li>
            <li>Đặt lịch + đặt cọc/thanh toán, nhận xác nhận tức thì.</li>
            <li>Nhắc lịch tự động, check-in, đánh giá sau dịch vụ.</li>
          </ol>
        </div>
        <div style="background:#ffffff; border:1px solid rgba(148,163,184,.30); border-radius:20px; padding:18px;">
          <h3 style="margin:0; font-size:18px; letter-spacing:-.01em;">Công cụ vận hành cho salon</h3>
          <ul style="margin:10px 0 0; padding-left:18px; color:#334155; line-height:1.85;">
            <li>Quản lý lịch theo staff/ghế, phân ca và công suất.</li>
            <li>Danh mục dịch vụ, addon, giá theo giờ cao điểm.</li>
            <li>Khuyến mãi/voucher, affiliate, quy tắc đặt cọc.</li>
            <li>Dashboard doanh thu, no-show, tỉ lệ quay lại.</li>
          </ul>
        </div>
      </div>

      <div style="margin-top:16px; background:linear-gradient(135deg, rgba(236,72,153,.10), rgba(255,255,255,.92)); border:1px solid rgba(236,72,153,.20); border-radius:20px; padding:16px 18px;">
        <div style="font-weight:900; letter-spacing:-.01em; color:#831843;">Điểm khác biệt</div>
        <div style="margin-top:8px; color:#0f172a; line-height:1.75;">
          Hệ thống “cứng” ở phần slot booking: giữ chỗ theo thời gian thực, giới hạn năng lực theo staff/ghế,
          và cơ chế đặt cọc + nhắc lịch để giảm no-show mà không làm khó người dùng.
        </div>
      </div>

      <figure style="margin:16px 0 0; border-radius:24px; overflow:hidden; border:1px solid rgba(2,6,23,.06); box-shadow:0 22px 60px -50px rgba(15,23,42,.65);">
        <img src="https://images.unsplash.com/photo-1519222970733-f546218fa6d7?w=1800&h=1000&fit=crop" alt="Team collaboration" style="width:100%; height:auto; display:block;" loading="lazy" />
      </figure>
    </section>
    `,
  },
  {
    id: "10",
    slug: "barcode-scanning-software",
    title: "Phần Mềm Quét Barcode (Kho vận & Bán hàng)",
    client: "Doanh nghiệp Retail & Logistics",
    industry: "Bán lẻ / Logistics",
    description:
      "Phát triển phần mềm quét barcode trên mobile/handheld: nhập-xuất kho, kiểm kê, truy xuất lô-hạn, đồng bộ ERP và làm việc offline.",
    image:
      "https://images.unsplash.com/photo-1586528116493-da8b1b3d7a9b?auto=format&fit=crop&w=1200&h=600&q=80",
    solution: "Barcode Scanning, Inventory Management, Offline Sync",
    result:
      "Giảm 65% thời gian kiểm kê, tăng độ chính xác lên 99.5%, rút ngắn quy trình nhập/xuất nhờ scan-first workflow",
    date: "2025-01-18",
    content: `
    <section class="not-prose" style="font-family: ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; color:#0f172a;">
      <div style="border:1px solid rgba(148,163,184,.35); background:linear-gradient(135deg,#f8fafc 0%, #ffffff 45%, #eff6ff 100%); border-radius:24px; overflow:hidden; box-shadow:0 24px 70px -45px rgba(15,23,42,.55);">
        <div style="padding:28px 28px 16px 28px;">
          <div style="display:flex; gap:10px; flex-wrap:wrap; align-items:center; margin-bottom:14px;">
            <span style="font-size:12px; letter-spacing:.12em; text-transform:uppercase; font-weight:700; color:#475569; background:rgba(59,130,246,.10); border:1px solid rgba(59,130,246,.18); padding:6px 10px; border-radius:999px;">Case study</span>
            <span style="font-size:12px; letter-spacing:.12em; text-transform:uppercase; font-weight:700; color:#475569; background:rgba(15,23,42,.04); border:1px solid rgba(15,23,42,.08); padding:6px 10px; border-radius:999px;">Barcode</span>
            <span style="font-size:12px; letter-spacing:.12em; text-transform:uppercase; font-weight:700; color:#475569; background:rgba(15,23,42,.04); border:1px solid rgba(15,23,42,.08); padding:6px 10px; border-radius:999px;">Warehouse</span>
          </div>

          <h2 style="margin:0; font-size:28px; line-height:1.15; letter-spacing:-.02em;">Scan-first workflow: quét trước, nhập liệu sau</h2>
          <p style="margin:10px 0 0; font-size:16px; line-height:1.7; color:#334155;">
            Ở kho vận/bán lẻ, “nhập tay” là nguồn gốc của sai lệch: nhầm SKU, nhầm lô, thiếu serial.
            Dự án tập trung vào một trải nghiệm duy nhất: <strong>đưa camera/thiết bị quét lên tuyến đầu</strong>, để mọi thao tác đều bắt đầu bằng scan.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:repeat(3, minmax(0,1fr)); gap:12px; padding:16px 28px 22px;">
          <div style="background:rgba(255,255,255,.92); border:1px solid rgba(148,163,184,.35); border-radius:18px; padding:16px; min-height:116px; display:flex; flex-direction:column; justify-content:space-between;">
            <div style="font-size:11px; letter-spacing:.14em; text-transform:uppercase; font-weight:800; color:#64748b;">Inventory</div>
            <div style="margin-top:8px; font-size:30px; font-weight:900; letter-spacing:-.02em;">-65%</div>
            <div style="margin-top:2px; font-size:13px; color:#64748b;">thời gian kiểm kê</div>
          </div>
          <div style="background:rgba(255,255,255,.92); border:1px solid rgba(148,163,184,.35); border-radius:18px; padding:16px; min-height:116px; display:flex; flex-direction:column; justify-content:space-between;">
            <div style="font-size:11px; letter-spacing:.14em; text-transform:uppercase; font-weight:800; color:#64748b;">Accuracy</div>
            <div style="margin-top:8px; font-size:30px; font-weight:900; letter-spacing:-.02em;">99.5%</div>
            <div style="margin-top:2px; font-size:13px; color:#64748b;">độ chính xác</div>
          </div>
          <div style="background:rgba(255,255,255,.92); border:1px solid rgba(148,163,184,.35); border-radius:18px; padding:16px; min-height:116px; display:flex; flex-direction:column; justify-content:space-between;">
            <div style="font-size:11px; letter-spacing:.14em; text-transform:uppercase; font-weight:800; color:#64748b;">Ops</div>
            <div style="margin-top:8px; font-size:30px; font-weight:900; letter-spacing:-.02em;">Faster</div>
            <div style="margin-top:2px; font-size:13px; color:#64748b;">nhập/xuất theo lệnh</div>
          </div>
        </div>

        <div style="display:grid; grid-template-columns:repeat(2, minmax(0,1fr)); gap:12px; padding:0 28px 28px;">
          <figure style="margin:0; border-radius:18px; overflow:hidden; border:1px solid rgba(2,6,23,.06); box-shadow:0 14px 40px -30px rgba(15,23,42,.6);">
            <img src="https://images.unsplash.com/photo-1586528116493-da8b1b3d7a9b?auto=format&fit=crop&w=1800&h=1000&q=80" alt="Warehouse barcode scanning" style="width:100%; height:100%; object-fit:cover; display:block;" loading="lazy" />
          </figure>
          <figure style="margin:0; border-radius:18px; overflow:hidden; border:1px solid rgba(2,6,23,.06); box-shadow:0 14px 40px -30px rgba(15,23,42,.6);">
            <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1800&h=1000&q=80" alt="Handheld barcode scanning" style="width:100%; height:100%; object-fit:cover; display:block;" loading="lazy" />
          </figure>
        </div>
      </div>

      <div style="margin-top:18px; display:grid; grid-template-columns: 1fr 1fr; gap:16px;">
        <div style="background:#ffffff; border:1px solid rgba(148,163,184,.30); border-radius:20px; padding:18px; box-shadow:0 18px 55px -50px rgba(15,23,42,.55);">
          <h3 style="margin:0; font-size:18px; letter-spacing:-.01em;">Tính năng chính</h3>
          <ul style="margin:10px 0 0; padding-left:18px; color:#334155; line-height:1.85;">
            <li>Nhập kho/Xuất kho theo phiếu: scan SKU → nhập số lượng → xác nhận.</li>
            <li>Kiểm kê nhanh: quét liên tục, gom nhóm theo vị trí/kệ.</li>
            <li>Truy xuất lô/hạn/serial: cảnh báo hết hạn, sai lô.</li>
            <li>In nhãn & tạo barcode nội bộ khi cần.</li>
          </ul>
        </div>
        <div style="background:#ffffff; border:1px solid rgba(148,163,184,.30); border-radius:20px; padding:18px;">
          <h3 style="margin:0; font-size:18px; letter-spacing:-.01em;">Offline & Đồng bộ</h3>
          <p style="margin:10px 0 0; color:#334155; line-height:1.75;">
            Ứng dụng hỗ trợ làm việc offline trong kho (mất Wi-Fi/3G), lưu queue thao tác và đồng bộ khi có mạng.
            Có cơ chế chống xung đột, log theo phiên làm việc, và đối soát số liệu sau đồng bộ.
          </p>
        </div>
      </div>

      <div style="margin-top:16px; background:linear-gradient(135deg, rgba(59,130,246,.10), rgba(255,255,255,.92)); border:1px solid rgba(59,130,246,.20); border-radius:20px; padding:16px 18px;">
        <div style="font-weight:900; letter-spacing:-.01em; color:#1e3a8a;">Điểm khác biệt</div>
        <div style="margin-top:8px; color:#0f172a; line-height:1.75;">
          Thiết kế UX “một tay”: thao tác lớn, ít chạm, hỗ trợ scan liên tục và phản hồi tức thì (âm thanh/rung).
          Mục tiêu là <strong>giảm nhập liệu</strong> và <strong>giảm sai sót</strong> ngay tại điểm phát sinh.
        </div>
      </div>
    </section>
    `,
  },
  {
    id: "11",
    slug: "customer-loyalty-platform",
    title: "Nền Tảng Tích Điểm & Chăm Sóc Khách Hàng (Customer Loyalty)",
    client: "Chuỗi bán lẻ đa chi nhánh",
    industry: "Bán lẻ",
    description:
      "Xây dựng hệ thống loyalty: tích điểm/đổi quà, phân hạng thành viên, voucher/campaign, đồng bộ POS/online và dashboard phân tích hành vi mua sắm.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&h=600&q=80",
    solution: "Customer Loyalty, Omnichannel, CRM Lite, Promotions",
    result:
      "Tăng 28% tỉ lệ mua lại, tăng 22% giá trị đơn hàng trung bình (AOV), giảm chi phí khuyến mãi nhờ cá nhân hoá",
    date: "2025-02-10",
    content: `
    <section class="not-prose" style="font-family: ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; color:#0f172a;">
      <div style="border:1px solid rgba(148,163,184,.35); background:linear-gradient(135deg,#f8fafc 0%, #ffffff 45%, #fff7ed 100%); border-radius:24px; overflow:hidden; box-shadow:0 24px 70px -45px rgba(15,23,42,.55);">
        <div style="padding:28px 28px 16px 28px;">
          <div style="display:flex; gap:10px; flex-wrap:wrap; align-items:center; margin-bottom:14px;">
            <span style="font-size:12px; letter-spacing:.12em; text-transform:uppercase; font-weight:700; color:#475569; background:rgba(245,158,11,.10); border:1px solid rgba(245,158,11,.18); padding:6px 10px; border-radius:999px;">Case study</span>
            <span style="font-size:12px; letter-spacing:.12em; text-transform:uppercase; font-weight:700; color:#475569; background:rgba(15,23,42,.04); border:1px solid rgba(15,23,42,.08); padding:6px 10px; border-radius:999px;">Loyalty</span>
            <span style="font-size:12px; letter-spacing:.12em; text-transform:uppercase; font-weight:700; color:#475569; background:rgba(15,23,42,.04); border:1px solid rgba(15,23,42,.08); padding:6px 10px; border-radius:999px;">Omnichannel</span>
          </div>

          <h2 style="margin:0; font-size:28px; line-height:1.15; letter-spacing:-.02em;">Tích điểm không chỉ để “tặng quà” — mà để tăng mua lại</h2>
          <p style="margin:10px 0 0; font-size:16px; line-height:1.7; color:#334155;">
            Chuỗi bán lẻ có dữ liệu khách hàng rải rác ở POS, online, và các chiến dịch rời rạc. Mục tiêu là tạo một loyalty “có não”:
            <strong>tích điểm đúng</strong>, <strong>voucher đúng người</strong>, và <strong>đo được hiệu quả</strong>.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:repeat(3, minmax(0,1fr)); gap:12px; padding:16px 28px 22px;">
          <div style="background:rgba(255,255,255,.92); border:1px solid rgba(148,163,184,.35); border-radius:18px; padding:16px; min-height:116px; display:flex; flex-direction:column; justify-content:space-between;">
            <div style="font-size:11px; letter-spacing:.14em; text-transform:uppercase; font-weight:800; color:#64748b;">Retention</div>
            <div style="margin-top:8px; font-size:30px; font-weight:900; letter-spacing:-.02em;">+28%</div>
            <div style="margin-top:2px; font-size:13px; color:#64748b;">tỉ lệ mua lại</div>
          </div>
          <div style="background:rgba(255,255,255,.92); border:1px solid rgba(148,163,184,.35); border-radius:18px; padding:16px; min-height:116px; display:flex; flex-direction:column; justify-content:space-between;">
            <div style="font-size:11px; letter-spacing:.14em; text-transform:uppercase; font-weight:800; color:#64748b;">AOV</div>
            <div style="margin-top:8px; font-size:30px; font-weight:900; letter-spacing:-.02em;">+22%</div>
            <div style="margin-top:2px; font-size:13px; color:#64748b;">giá trị đơn hàng</div>
          </div>
          <div style="background:rgba(255,255,255,.92); border:1px solid rgba(148,163,184,.35); border-radius:18px; padding:16px; min-height:116px; display:flex; flex-direction:column; justify-content:space-between;">
            <div style="font-size:11px; letter-spacing:.14em; text-transform:uppercase; font-weight:800; color:#64748b;">Promo</div>
            <div style="margin-top:8px; font-size:30px; font-weight:900; letter-spacing:-.02em;">↓</div>
            <div style="margin-top:2px; font-size:13px; color:#64748b;">chi phí khuyến mãi</div>
          </div>
        </div>

        <div style="display:grid; grid-template-columns:repeat(2, minmax(0,1fr)); gap:12px; padding:0 28px 28px;">
          <figure style="margin:0; border-radius:18px; overflow:hidden; border:1px solid rgba(2,6,23,.06); box-shadow:0 14px 40px -30px rgba(15,23,42,.6);">
            <img src="https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1800&h=1000&q=80" alt="Retail checkout" style="width:100%; height:100%; object-fit:cover; display:block;" loading="lazy" />
          </figure>
          <figure style="margin:0; border-radius:18px; overflow:hidden; border:1px solid rgba(2,6,23,.06); box-shadow:0 14px 40px -30px rgba(15,23,42,.6);">
            <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1800&h=1000&q=80" alt="Rewards in mobile app" style="width:100%; height:100%; object-fit:cover; display:block;" loading="lazy" />
          </figure>
        </div>
      </div>

      <div style="margin-top:18px; display:grid; grid-template-columns: 1fr 1fr; gap:16px;">
        <div style="background:#ffffff; border:1px solid rgba(148,163,184,.30); border-radius:20px; padding:18px; box-shadow:0 18px 55px -50px rgba(15,23,42,.55);">
          <h3 style="margin:0; font-size:18px; letter-spacing:-.01em;">Tính năng chính</h3>
          <ul style="margin:10px 0 0; padding-left:18px; color:#334155; line-height:1.85;">
            <li>Tích điểm/đổi điểm theo rule (sản phẩm, danh mục, khung giờ, hạng thành viên).</li>
            <li>Membership tier: Silver/Gold/Platinum, ưu đãi theo cấp.</li>
            <li>Voucher & campaign: phát hành, giới hạn ngân sách, A/B theo nhóm khách.</li>
            <li>Ví điểm & lịch sử giao dịch: minh bạch, đối soát dễ.</li>
          </ul>
        </div>
        <div style="background:#ffffff; border:1px solid rgba(148,163,184,.30); border-radius:20px; padding:18px;">
          <h3 style="margin:0; font-size:18px; letter-spacing:-.01em;">Đo lường hiệu quả</h3>
          <p style="margin:10px 0 0; color:#334155; line-height:1.75;">
            Dashboard theo dõi cohort mua lại, uplift từ voucher, CLV theo hạng thành viên và hiệu quả chiến dịch theo kênh.
            Mục tiêu là “chi đúng chỗ” thay vì phát voucher đại trà.
          </p>
        </div>
      </div>

      <div style="margin-top:16px; background:linear-gradient(135deg, rgba(245,158,11,.10), rgba(255,255,255,.92)); border:1px solid rgba(245,158,11,.20); border-radius:20px; padding:16px 18px;">
        <div style="font-weight:900; letter-spacing:-.01em; color:#78350f;">Điểm khác biệt</div>
        <div style="margin-top:8px; color:#0f172a; line-height:1.75;">
          Đồng bộ POS/online theo “customer identity” để tránh trùng khách. Rule engine cho phép marketing tự cấu hình tích điểm/voucher,
          giảm phụ thuộc IT mà vẫn kiểm soát được ngân sách và gian lận.
        </div>
      </div>
    </section>
    `,
  },
  {
    id: "12",
    slug: "data-warehouse-inbound-outbound",
    title: "Data Warehouse Inbound/Outbound (Chuẩn hoá & Phân tích dữ liệu)",
    client: "Doanh nghiệp sản xuất & phân phối",
    industry: "Công nghệ / Dữ liệu",
    description:
      "Xây dựng data warehouse phục vụ inbound/outbound: chuẩn hoá dữ liệu nhập/xuất, tồn kho, vận chuyển; mô hình hoá fact/dimension, dashboard KPI và đối soát số liệu.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=600&q=80",
    solution: "Data Warehouse, ETL/ELT, Data Modeling, BI Dashboards",
    result:
      "Rút ngắn 80% thời gian tổng hợp báo cáo, thống nhất “single source of truth” cho inbound/outbound, tăng tốc ra quyết định vận hành",
    date: "2025-03-05",
    content: `
    <section class="not-prose" style="font-family: ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; color:#0f172a;">
      <div style="border:1px solid rgba(148,163,184,.35); background:linear-gradient(135deg,#f8fafc 0%, #ffffff 45%, #ecfeff 100%); border-radius:24px; overflow:hidden; box-shadow:0 24px 70px -45px rgba(15,23,42,.55);">
        <div style="padding:28px 28px 16px 28px;">
          <div style="display:flex; gap:10px; flex-wrap:wrap; align-items:center; margin-bottom:14px;">
            <span style="font-size:12px; letter-spacing:.12em; text-transform:uppercase; font-weight:700; color:#475569; background:rgba(20,184,166,.10); border:1px solid rgba(20,184,166,.18); padding:6px 10px; border-radius:999px;">Case study</span>
            <span style="font-size:12px; letter-spacing:.12em; text-transform:uppercase; font-weight:700; color:#475569; background:rgba(15,23,42,.04); border:1px solid rgba(15,23,42,.08); padding:6px 10px; border-radius:999px;">Data warehouse</span>
            <span style="font-size:12px; letter-spacing:.12em; text-transform:uppercase; font-weight:700; color:#475569; background:rgba(15,23,42,.04); border:1px solid rgba(15,23,42,.08); padding:6px 10px; border-radius:999px;">Inbound/Outbound</span>
          </div>

          <h2 style="margin:0; font-size:28px; line-height:1.15; letter-spacing:-.02em;">Một nguồn dữ liệu chuẩn cho inbound & outbound</h2>
          <p style="margin:10px 0 0; font-size:16px; line-height:1.7; color:#334155;">
            Dữ liệu inbound/outbound nằm rải rác ở ERP, WMS, TMS và file excel theo từng bộ phận.
            Kết quả là báo cáo chậm, số liệu “không khớp”, và khó tối ưu vận hành. Dự án xây dựng <strong>single source of truth</strong>
            cho chuỗi vận hành nhập–xuất–tồn–giao.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:repeat(3, minmax(0,1fr)); gap:12px; padding:16px 28px 22px;">
          <div style="background:rgba(255,255,255,.92); border:1px solid rgba(148,163,184,.35); border-radius:18px; padding:16px; min-height:116px; display:flex; flex-direction:column; justify-content:space-between;">
            <div style="font-size:11px; letter-spacing:.14em; text-transform:uppercase; font-weight:800; color:#64748b;">Reporting</div>
            <div style="margin-top:8px; font-size:30px; font-weight:900; letter-spacing:-.02em;">-80%</div>
            <div style="margin-top:2px; font-size:13px; color:#64748b;">thời gian tổng hợp</div>
          </div>
          <div style="background:rgba(255,255,255,.92); border:1px solid rgba(148,163,184,.35); border-radius:18px; padding:16px; min-height:116px; display:flex; flex-direction:column; justify-content:space-between;">
            <div style="font-size:11px; letter-spacing:.14em; text-transform:uppercase; font-weight:800; color:#64748b;">Consistency</div>
            <div style="margin-top:8px; font-size:30px; font-weight:900; letter-spacing:-.02em;">1</div>
            <div style="margin-top:2px; font-size:13px; color:#64748b;">nguồn dữ liệu chuẩn</div>
          </div>
          <div style="background:rgba(255,255,255,.92); border:1px solid rgba(148,163,184,.35); border-radius:18px; padding:16px; min-height:116px; display:flex; flex-direction:column; justify-content:space-between;">
            <div style="font-size:11px; letter-spacing:.14em; text-transform:uppercase; font-weight:800; color:#64748b;">Decision</div>
            <div style="margin-top:8px; font-size:30px; font-weight:900; letter-spacing:-.02em;">Faster</div>
            <div style="margin-top:2px; font-size:13px; color:#64748b;">ra quyết định vận hành</div>
          </div>
        </div>

        <div style="display:grid; grid-template-columns: 2fr 1fr; gap:12px; padding:0 28px 28px;">
          <figure style="margin:0; border-radius:18px; overflow:hidden; border:1px solid rgba(2,6,23,.06); box-shadow:0 14px 40px -30px rgba(15,23,42,.6);">
            <img src="https://images.unsplash.com/photo-1586528116493-da8b1b3d7a9b?auto=format&fit=crop&w=1800&h=1000&q=80" alt="Warehouse operations" style="width:100%; height:100%; object-fit:cover; display:block;" loading="lazy" />
          </figure>
          <figure style="margin:0; border-radius:18px; overflow:hidden; border:1px solid rgba(2,6,23,.06); box-shadow:0 14px 40px -30px rgba(15,23,42,.6);">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&h=1000&q=80" alt="Analytics dashboard" style="width:100%; height:100%; object-fit:cover; display:block;" loading="lazy" />
          </figure>
        </div>
      </div>

      <div style="margin-top:18px; display:grid; grid-template-columns: 1fr 1fr; gap:16px;">
        <div style="background:#ffffff; border:1px solid rgba(148,163,184,.30); border-radius:20px; padding:18px; box-shadow:0 18px 55px -50px rgba(15,23,42,.55);">
          <h3 style="margin:0; font-size:18px; letter-spacing:-.01em;">Inbound/Outbound model</h3>
          <ul style="margin:10px 0 0; padding-left:18px; color:#334155; line-height:1.85;">
            <li>Inbound: PO/ASN, GRN, put-away, QC, lead time theo nhà cung cấp.</li>
            <li>Outbound: SO, pick/pack/ship, OTIF, rate lỗi, SLA theo tuyến.</li>
            <li>Inventory: tồn kho theo vị trí, tuổi hàng, lô/hạn, vòng quay.</li>
            <li>Transport: cost theo chuyến, carrier performance, delay reason.</li>
          </ul>
        </div>
        <div style="background:#ffffff; border:1px solid rgba(148,163,184,.30); border-radius:20px; padding:18px;">
          <h3 style="margin:0; font-size:18px; letter-spacing:-.01em;">ETL/ELT & Đối soát</h3>
          <p style="margin:10px 0 0; color:#334155; line-height:1.75;">
            Pipeline ingest dữ liệu theo batch, làm sạch và chuẩn hoá master data (SKU, location, supplier, customer).
            Có kiểm tra chất lượng dữ liệu (missing, duplicate, outlier) và đối soát theo chứng từ để đảm bảo số liệu khớp với hệ thống nguồn.
          </p>
        </div>
      </div>

      <div style="margin-top:16px; background:linear-gradient(135deg, rgba(20,184,166,.10), rgba(255,255,255,.92)); border:1px solid rgba(20,184,166,.20); border-radius:20px; padding:16px 18px;">
        <div style="font-weight:900; letter-spacing:-.01em; color:#134e4a;">Điểm khác biệt</div>
        <div style="margin-top:8px; color:#0f172a; line-height:1.75;">
          Dashboard KPI được gắn trực tiếp với định nghĩa chỉ số (metric definition) để toàn tổ chức dùng chung một “ngôn ngữ dữ liệu”.
          Khi số liệu thay đổi, có thể truy ngược về chứng từ và nguồn phát sinh.
        </div>
      </div>
    </section>
    `,
  },
];

export const products: Product[] = [
  {
    id: "1",
    slug: "retail-erp",
    title: "ERP Bán Lẻ (Retail ERP)",
    description:
      "Giải pháp ERP chuyên biệt, giúp doanh nghiệp bán lẻ quản lý hiệu quả hoạt động đa kênh và tối ưu hóa trải nghiệm khách hàng.",
    image: "/images/products/product-1.jpg",
    category: "Hệ Thống Hoạch Định Nguồn Lực Doanh Nghiệp (ERP)",
    features: [
      "Quản lý Đa Kênh (Omnichannel)",
      "Tối ưu Tồn kho & Cung ứng",
      "Quản lý Khuyến mãi & Khách hàng",
    ],
    benefits: [
      "Đồng bộ hóa dữ liệu tồn kho, giá cả và đơn hàng trên mọi điểm bán (cửa hàng, online, mạng xã hội).",
      "Dự báo nhu cầu chính xác, quản lý kho chi tiết theo vị trí, lô, hạn sử dụng, giảm thiểu chi phí lưu kho và rủi ro hết hàng.",
      "Tích hợp CRM mini, thiết lập và theo dõi hiệu quả các chương trình khuyến mãi phức tạp, tăng cường giữ chân và giá trị trọn đời của khách hàng (CLV).",
    ],
  },
  {
    id: "2",
    slug: "manufacturing-erp",
    title: "ERP Sản Xuất (Manufacturing ERP)",
    description:
      "Hệ thống điều hành sản xuất thông minh, tích hợp sâu từ lập kế hoạch đến kiểm soát chất lượng thực tế trên sàn nhà máy.",
    image: "/images/products/product-2.jpg",
    category: "Hệ Thống Hoạch Định Nguồn Lực Doanh Nghiệp (ERP)",
    features: [
      "Lập Kế hoạch Sản xuất Nâng cao (Planning)",
      "Phát triển Kỹ thuật Công nghiệp (IED Tool)",
      "Kiểm soát Chất lượng (Inspection Tool)",
      "Ghi nhận Sản lượng WIP/FG (Output Record)",
      "Hệ thống Barcode",
    ],
    benefits: [
      "Công cụ lập lịch trình tổng thể (MPS), phân bổ đơn hàng, đồng bộ nguyên vật liệu. Tự động tích hợp kế hoạch giữa các bộ phận (Spinning, Knitting, Sewing), đảm bảo tối ưu công suất và đáp ứng lộ trình quan trọng (Critical Path).",
      "Xây dựng và lưu trữ thư viện Định mức Thời gian Chuẩn (SMV/SAM/SAH) chi tiết theo từng kiểu dáng. Tích hợp trực tiếp với hệ thống Tính giá thành, Lương/Thưởng, đảm bảo tính toán chi phí sản xuất chính xác.",
      "Nhập liệu lỗi (Defect Entry) qua màn hình cảm ứng. Tự động đánh giá chất lượng vải (Fabric Gradation) dựa trên số lượng lỗi, hỗ trợ chọn cuộn vải phù hợp cho kế hoạch cắt (Marker & Cutting Plan) hiệu quả nhất.",
      "Ghi nhận sản lượng theo thời gian thực (Real-time) qua thiết bị cảm ứng, tự động đồng bộ hóa các chứng từ xuất/nhập kho (GRN Output/Pick List) với ERP, loại bỏ nhập liệu thủ công và giảm chi phí quản lý dữ liệu.",
      "Mã hóa thông tin sản phẩm bằng mã vạch, giúp truy xuất và theo dõi tồn kho Bán thành phẩm (WIP) hoặc Thành phẩm (FG) nhanh chóng, nâng cao độ chính xác kiểm kê và giảm thiểu sai sót.",
    ],
  },
  {
    id: "3",
    slug: "budget-management",
    title: "Quản Lý Ngân Sách (Budget Management)",
    description:
      "Giải pháp kiểm soát tài chính chủ động, giúp doanh nghiệp duy trì tính kỷ luật và hiệu quả trong mọi hoạt động chi tiêu.",
    image: "/images/products/product-3.jpg",
    category: "Các Giải Pháp Chuyên Sâu",
    features: [
      "Lập & Phân bổ Ngân sách",
      "Kiểm soát Chi tiêu theo thời gian thực",
      "Báo cáo & Phân tích Độ lệch",
    ],
    benefits: [
      "Hỗ trợ xây dựng ngân sách tổng thể, chi tiết theo phòng ban, dự án, hoặc trung tâm chi phí.",
      "Tự động hóa quy trình phê duyệt, đối chiếu với ngân sách đã duyệt để ngăn chặn tình trạng vượt chi ngay từ đầu.",
      "Cung cấp báo cáo chuyên sâu so sánh ngân sách thực tế với dự toán, hỗ trợ ra quyết định đầu tư và phân bổ nguồn lực chính xác.",
    ],
  },
  {
    id: "4",
    slug: "crm",
    title: "Quản Lý Quan Hệ Khách Hàng (CRM)",
    description:
      "Hệ thống giúp xây dựng cái nhìn 360 độ về khách hàng, tối ưu hóa quy trình bán hàng và nâng cao chất lượng dịch vụ.",
    image: "/images/products/product-4.jpg",
    category: "Các Giải Pháp Chuyên Sâu",
    features: [
      "Quản lý Trọn vẹn Hành trình Khách hàng",
      "Tự động hóa Quy trình Bán hàng",
      "Nâng cao Dịch vụ Khách hàng",
    ],
    benefits: [
      "Theo dõi mọi tương tác từ Marketing, Sales đến Service.",
      "Chuẩn hóa và tự động hóa các bước trong quy trình bán hàng, giúp đội ngũ Sales tập trung vào chốt giao dịch.",
      "Quản lý, phân loại và ưu tiên giải quyết các yêu cầu/khiếu nại (ticket), đảm bảo tốc độ phản hồi nhanh chóng và chất lượng dịch vụ đồng nhất.",
    ],
  },
  {
    id: "5",
    slug: "data-warehouse",
    title: "Data Warehouse (Kho Dữ Liệu)",
    description:
      "Nền tảng tập trung dữ liệu chiến lược, biến thông tin thô thành tri thức kinh doanh sâu sắc.",
    image: "/images/products/product-5.jpg",
    category: "Hạ Tầng Dữ Liệu & Lưu Trữ",
    features: [
      "Tích hợp Dữ liệu Đa nguồn",
      "Hỗ trợ Ra quyết định Chiến lược",
      "Hiệu suất Phân tích Cao",
    ],
    benefits: [
      "Thu thập, làm sạch và hợp nhất dữ liệu từ ERP, CRM, và các hệ thống khác vào một kho tập trung, duy nhất.",
      "Cung cấp nền tảng dữ liệu sạch, có cấu trúc để phục vụ các công cụ Business Intelligence (BI) và phân tích dự báo.",
      "Tối ưu hóa cho các truy vấn phức tạp và báo cáo lớn, đảm bảo tốc độ phân tích nhanh chóng.",
    ],
  },
  {
    id: "6",
    slug: "cloud-storage-private",
    title: "Cloud Storage Private (Lưu Trữ Đám Mây Riêng)",
    description:
      "Giải pháp lưu trữ đám mây độc lập, đặt ưu tiên hàng đầu vào bảo mật và khả năng kiểm soát dữ liệu.",
    image: "/images/products/product-6.jpg",
    category: "Hạ Tầng Dữ Liệu & Lưu Trữ",
    features: [
      "Bảo mật Tối đa & Kiểm soát Hoàn toàn",
      "Khả năng Mở rộng Linh hoạt",
      "Đảm bảo Tính sẵn sàng & Dự phòng",
    ],
    benefits: [
      "Cung cấp môi trường lưu trữ độc lập, đảm bảo tuân thủ các quy định bảo mật dữ liệu nghiêm ngặt.",
      "Dễ dàng mở rộng dung lượng và tài nguyên theo nhu cầu tăng trưởng mà không cần đầu tư lớn vào phần cứng vật lý.",
      "Dữ liệu được sao lưu và dự phòng tại nhiều khu vực, đảm bảo hoạt động liên tục (Business Continuity).",
    ],
  },
  {
    id: "7",
    slug: "dms-distribution-management",
    title: "Hệ Thống Quản Lý Phân Phối (DMS - Distribution Management System)",
    description:
      "Giải pháp số hóa toàn diện quy trình bán hàng và quản lý kênh phân phối, tối ưu hóa hiệu quả hoạt động ngoài thị trường cho ngành hàng tiêu dùng/sản xuất.",
    image: "/images/products/product-7.jpg",
    category: "Hạ Tầng Dữ Liệu & Lưu Trữ",
    features: [
      "Quản lý Lực lượng Bán hàng (Field Force Mgmt)",
      "Quản lý Kênh Phân phối & Tuyến bán hàng",
      "Theo dõi Tồn kho Kênh (Secondary Sales)",
    ],
    benefits: [
      "Giám sát hoạt động, lộ trình bán hàng và hiệu suất đặt hàng của nhân viên thị trường (Sales Reps) qua ứng dụng di động.",
      "Theo dõi độ phủ thị trường, đánh giá hiệu suất của từng Nhà phân phối (NPP) và tối ưu hóa tuyến thăm khách hàng.",
      "Cập nhật tồn kho, tình trạng trưng bày, và đơn hàng tại điểm bán/NPP theo thời gian thực, giảm rủi ro thiếu hàng và tồn kho chết.",
    ],
  },
  {
    id: "8",
    slug: "ecommerce-platform",
    title: "Giải Pháp Thương Mại Điện Tử (E-commerce Platform)",
    description:
      "Nền tảng thương mại điện tử mạnh mẽ, được thiết kế để tích hợp liền mạch với hệ thống lõi của doanh nghiệp.",
    image: "/images/products/product-8.jpg",
    category: "Hạ Tầng Dữ Liệu & Lưu Trữ",
    features: [
      "Tích hợp Sâu với ERP & CRM",
      "Nền tảng Tùy biến Cao",
      "Tối ưu Hiệu suất & Tăng trưởng",
    ],
    benefits: [
      "Đơn hàng, tồn kho, thông tin khách hàng được đồng bộ tự động, loại bỏ sai sót và đảm bảo dữ liệu bán hàng chính xác.",
      "Cho phép xây dựng giao diện và trải nghiệm người dùng độc đáo, đáp ứng các mô hình kinh doanh B2B/B2C phức tạp.",
      "Hỗ trợ đa ngôn ngữ, đa tiền tệ, tích hợp các công cụ Marketing (SEO, liên kết), giúp doanh nghiệp mở rộng thị trường và tăng trưởng doanh thu online.",
    ],
  },
  {
    id: "9",
    slug: "outsourcing-software-development",
    title: "Dịch Vụ Outsourcing Phát Triển Phần Mềm",
    description:
      "Cung cấp nhân sự IT chuyên nghiệp để phát triển phần mềm cho doanh nghiệp, giúp bạn tập trung vào hoạt động kinh doanh cốt lõi.",
    image: "/images/products/product-9.jpg",
    category: "Dịch Vụ Outsourcing",
    features: [
      "Đội Ngũ Nhân Sự Chuyên Nghiệp",
      "Linh Hoạt Theo Nhu Cầu",
      "Quy Trình Phát Triển Chuẩn",
      "Bảo Mật & Bảo Mật Thông Tin",
    ],
    benefits: [
      "Cung cấp đội ngũ lập trình viên, kỹ sư phần mềm giàu kinh nghiệm với đa dạng kỹ năng (Front-end, Back-end, Full-stack, Mobile, DevOps) để tham gia vào các dự án phát triển phần mềm của doanh nghiệp.",
      "Linh hoạt trong việc điều chỉnh quy mô nhân sự theo từng giai đoạn dự án, từ phát triển ban đầu đến bảo trì và nâng cấp, giúp tối ưu chi phí và hiệu quả.",
      "Áp dụng các quy trình phát triển phần mềm chuyên nghiệp (Agile, Scrum, DevOps), đảm bảo chất lượng code, tiến độ dự án và khả năng mở rộng trong tương lai.",
      "Đảm bảo bảo mật thông tin và dữ liệu của doanh nghiệp thông qua các thỏa thuận NDA, quy trình làm việc an toàn và tuân thủ các tiêu chuẩn bảo mật quốc tế.",
    ],
  },
  {
    id: "10",
    slug: "it-hardware",
    title: "Dịch Vụ IT Hardware",
    description:
      "Cung cấp và quản lý phần cứng IT toàn diện cho doanh nghiệp, đảm bảo hạ tầng công nghệ ổn định và hiệu quả.",
    image: "/images/products/product-10.jpg",
    category: "Dịch Vụ IT",
    features: [
      "Tư Vấn & Thiết Kế Hạ Tầng",
      "Cung Cấp Thiết Bị Chất Lượng",
      "Lắp Đặt & Cấu Hình",
      "Bảo Hành & Bảo Trì",
    ],
    benefits: [
      "Tư vấn và thiết kế hạ tầng phần cứng phù hợp với nhu cầu và ngân sách của doanh nghiệp, đảm bảo tính mở rộng và hiệu quả đầu tư.",
      "Cung cấp các thiết bị phần cứng chất lượng cao từ các nhà sản xuất uy tín (servers, workstations, storage, networking equipment) với giá cả cạnh tranh.",
      "Thực hiện lắp đặt và cấu hình chuyên nghiệp, đảm bảo hệ thống hoạt động ổn định ngay từ đầu và tối ưu hiệu suất.",
      "Cung cấp dịch vụ bảo hành, bảo trì định kỳ và hỗ trợ kỹ thuật 24/7, giúp doanh nghiệp duy trì hoạt động liên tục và giảm thiểu downtime.",
    ],
  },
  {
    id: "11",
    slug: "it-network",
    title: "Dịch Vụ IT Network",
    description:
      "Thiết kế, triển khai và quản lý hệ thống mạng doanh nghiệp, đảm bảo kết nối ổn định, bảo mật và hiệu suất cao.",
    image: "/images/products/product-11.jpg",
    category: "Dịch Vụ IT",
    features: [
      "Thiết Kế Mạng Doanh Nghiệp",
      "Triển Khai Hạ Tầng Mạng",
      "Quản Lý & Giám Sát",
      "Tối Ưu Hiệu Suất",
    ],
    benefits: [
      "Thiết kế kiến trúc mạng phù hợp với quy mô và yêu cầu của doanh nghiệp, bao gồm LAN, WAN, WiFi, và các giải pháp kết nối từ xa.",
      "Triển khai và cấu hình các thiết bị mạng (routers, switches, firewalls, access points) theo tiêu chuẩn công nghiệp, đảm bảo tính ổn định và bảo mật.",
      "Thiết lập hệ thống giám sát và quản lý mạng tập trung, theo dõi hiệu suất, phát hiện sự cố sớm và hỗ trợ khắc phục nhanh chóng.",
      "Tối ưu hóa băng thông, QoS (Quality of Service), và các cấu hình mạng để đảm bảo hiệu suất tối đa cho các ứng dụng quan trọng của doanh nghiệp.",
    ],
  },
  {
    id: "12",
    slug: "it-helpdesk",
    title: "Dịch Vụ IT Helpdesk",
    description:
      "Dịch vụ hỗ trợ kỹ thuật IT chuyên nghiệp, giải quyết nhanh chóng các vấn đề kỹ thuật và đảm bảo người dùng có thể làm việc hiệu quả.",
    image: "/images/products/product-12.jpg",
    category: "Dịch Vụ IT",
    features: [
      "Hỗ Trợ Kỹ Thuật 24/7",
      "Quản Lý Ticket Hệ Thống",
      "Hỗ Trợ Đa Kênh",
      "Báo Cáo & Phân Tích",
    ],
    benefits: [
      "Cung cấp dịch vụ hỗ trợ kỹ thuật 24/7 qua nhiều kênh (điện thoại, email, chat, remote desktop), đảm bảo phản hồi nhanh chóng và giải quyết vấn đề kịp thời.",
      "Quản lý và theo dõi các yêu cầu hỗ trợ thông qua hệ thống ticket chuyên nghiệp, đảm bảo không bỏ sót và theo dõi tiến độ giải quyết.",
      "Hỗ trợ đa dạng các vấn đề từ phần cứng, phần mềm, mạng, email, đến các ứng dụng doanh nghiệp, giúp người dùng tập trung vào công việc chính.",
      "Cung cấp báo cáo định kỳ về tình trạng hỗ trợ, thời gian phản hồi, tỷ lệ giải quyết và phân tích xu hướng để cải thiện dịch vụ liên tục.",
    ],
  },
  {
    id: "13",
    slug: "cyber-security",
    title: "Dịch Vụ Cyber Security",
    description:
      "Tư vấn, thiết kế, triển khai và vận hành giải pháp bảo mật hệ thống mạng toàn diện, bảo vệ doanh nghiệp khỏi các mối đe dọa an ninh mạng.",
    image: "/images/products/product-13.jpg",
    category: "Dịch Vụ IT",
    features: [
      "Tư Vấn Bảo Mật",
      "Thiết Kế Giải Pháp",
      "Triển Khai Hệ Thống",
      "Vận Hành & Giám Sát",
    ],
    benefits: [
      "Đánh giá và tư vấn về tình trạng bảo mật hiện tại của doanh nghiệp, xác định các lỗ hổng và rủi ro, đề xuất giải pháp bảo mật phù hợp.",
      "Thiết kế kiến trúc bảo mật toàn diện bao gồm firewall, IDS/IPS, endpoint protection, email security, và các giải pháp bảo mật khác theo nhu cầu.",
      "Triển khai và cấu hình các giải pháp bảo mật chuyên nghiệp, đảm bảo tích hợp liền mạch với hạ tầng hiện có và không ảnh hưởng đến hoạt động kinh doanh.",
      "Vận hành và giám sát hệ thống bảo mật 24/7, phát hiện và ứng phó với các mối đe dọa, cập nhật bảo mật định kỳ và đảm bảo tuân thủ các tiêu chuẩn bảo mật.",
    ],
  },
  {
    id: "14",
    slug: "devops-cloud",
    title: "Dịch Vụ DevOps & Cloud",
    description:
      "Tư vấn, thiết kế, triển khai và vận hành giải pháp cloud hiện đại, giúp doanh nghiệp tận dụng sức mạnh của điện toán đám mây và DevOps.",
    image: "/images/products/product-14.jpg",
    category: "Dịch Vụ IT",
    features: [
      "Tư Vấn Cloud Strategy",
      "Thiết Kế Kiến Trúc Cloud",
      "Triển Khai & Migration",
      "Vận Hành & Tối Ưu",
    ],
    benefits: [
      "Tư vấn chiến lược chuyển đổi cloud phù hợp với doanh nghiệp, lựa chọn mô hình cloud (Public, Private, Hybrid) và nhà cung cấp phù hợp (AWS, Azure, GCP).",
      "Thiết kế kiến trúc cloud tối ưu, đảm bảo tính khả dụng, khả năng mở rộng, bảo mật và hiệu quả chi phí, phù hợp với các yêu cầu cụ thể của doanh nghiệp.",
      "Thực hiện migration ứng dụng và dữ liệu lên cloud một cách an toàn, thiết lập CI/CD pipeline, containerization (Docker, Kubernetes) và các công cụ DevOps.",
      "Vận hành và tối ưu hóa môi trường cloud liên tục, giám sát hiệu suất, quản lý chi phí, đảm bảo bảo mật và cập nhật các dịch vụ cloud mới nhất để tối đa hóa giá trị đầu tư.",
    ],
  },
];

export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    slug: "nexacore-giai-phap-erp-ban-le-hieu-qua",
    title: "NexaCore Ra Mắt Giải Pháp ERP Bán Lẻ Hiệu Quả Cho Doanh Nghiệp",
    excerpt:
      "Giải pháp ERP Bán Lẻ mới của NexaCore giúp doanh nghiệp quản lý đa kênh hiệu quả, tối ưu hóa tồn kho và nâng cao trải nghiệm khách hàng.",
    content: `<p>NexaCore tự hào giới thiệu giải pháp ERP Bán Lẻ (Retail ERP) mới nhất, được thiết kế đặc biệt để đáp ứng nhu cầu quản lý phức tạp của các doanh nghiệp bán lẻ hiện đại. Giải pháp này mang lại khả năng quản lý đa kênh toàn diện, từ cửa hàng truyền thống đến thương mại điện tử và các kênh bán hàng trên mạng xã hội.</p>
    
    <h2>Tính Năng Nổi Bật</h2>
    <p>Hệ thống ERP Bán Lẻ của NexaCore tích hợp các tính năng tiên tiến như quản lý tồn kho thời gian thực, đồng bộ hóa dữ liệu đa kênh, và quản lý khách hàng 360 độ. Với công nghệ AI và Machine Learning, hệ thống có thể dự báo nhu cầu, tối ưu hóa giá cả và đề xuất các chiến lược khuyến mãi hiệu quả.</p>
    
    <h2>Lợi Ích Cho Doanh Nghiệp</h2>
    <p>Doanh nghiệp sử dụng giải pháp này đã ghi nhận những cải thiện đáng kể: giảm 35% chi phí tồn kho, tăng 50% hiệu quả quản lý khuyến mãi, và cải thiện 40% trải nghiệm khách hàng. Hệ thống giúp tự động hóa các quy trình từ đặt hàng đến giao hàng, giảm thiểu sai sót và tăng tốc độ xử lý đơn hàng.</p>
    
    <h2>Tương Lai Của Bán Lẻ</h2>
    <p>Với xu hướng số hóa ngày càng tăng, giải pháp ERP Bán Lẻ của NexaCore sẽ là nền tảng vững chắc giúp doanh nghiệp phát triển bền vững và cạnh tranh hiệu quả trong thị trường hiện đại.</p>`,
    image:
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=1200&h=600&fit=crop",
    date: "2025-09-15",
    author: "NexaCore Team",
    category: "Product News",
  },
  {
    id: "2",
    slug: "erp-san-xuat-thong-minh-cho-nganh-det-may",
    title: "ERP Sản Xuất Thông Minh: Giải Pháp Toàn Diện Cho Ngành Dệt May",
    excerpt:
      "Hệ thống ERP Sản Xuất với công nghệ IED Tool và Inspection Tool giúp nhà máy dệt may tối ưu quy trình sản xuất và kiểm soát chất lượng.",
    content: `<p>Ngành dệt may Việt Nam đang đối mặt với nhiều thách thức trong quản lý sản xuất phức tạp, từ lập kế hoạch sản xuất đến kiểm soát chất lượng. Giải pháp ERP Sản Xuất thông minh của NexaCore được phát triển đặc biệt để giải quyết những vấn đề này.</p>
    
    <h2>Công Nghệ IED Tool Và Inspection Tool</h2>
    <p>Hệ thống tích hợp công cụ IED (Industrial Engineering Data) giúp xây dựng và quản lý thư viện định mức thời gian chuẩn (SMV/SAM/SAH) chi tiết theo từng kiểu dáng. Công cụ Inspection Tool cho phép nhập liệu lỗi qua màn hình cảm ứng và tự động đánh giá chất lượng vải dựa trên số lượng lỗi.</p>
    
    <h2>Kết Quả Thực Tế</h2>
    <p>Các nhà máy dệt may đã triển khai giải pháp này ghi nhận những cải thiện ấn tượng: tối ưu 40% công suất sản xuất, giảm 30% lãng phí nguyên vật liệu, và tăng 25% độ chính xác kiểm kê. Hệ thống giúp tự động hóa quy trình từ lập kế hoạch đến kiểm soát chất lượng.</p>
    
    <h2>Tương Lai Ngành Dệt May</h2>
    <p>Với sự hỗ trợ của công nghệ ERP thông minh, các nhà máy dệt may có thể nâng cao năng lực cạnh tranh, đáp ứng các tiêu chuẩn quốc tế và phát triển bền vững trong thị trường toàn cầu.</p>`,
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=600&fit=crop",
    date: "2025-08-22",
    author: "NexaCore Team",
    category: "Technology",
  },
  {
    id: "3",
    slug: "quan-ly-ngan-sach-chuyen-nghiep",
    title:
      "Quản Lý Ngân Sách Chuyên Nghiệp: Chìa Khóa Thành Công Cho Doanh Nghiệp",
    excerpt:
      "Giải pháp Quản Lý Ngân Sách giúp doanh nghiệp kiểm soát chi tiêu theo thời gian thực, ngăn chặn vượt chi và tối ưu phân bổ nguồn lực.",
    content: `<p>Quản lý ngân sách hiệu quả là yếu tố then chốt quyết định thành công của mọi doanh nghiệp. Giải pháp Quản Lý Ngân Sách của NexaCore cung cấp công cụ toàn diện để doanh nghiệp kiểm soát tài chính một cách chủ động và chính xác.</p>
    
    <h2>Kiểm Soát Chi Tiêu Theo Thời Gian Thực</h2>
    <p>Hệ thống tự động hóa quy trình phê duyệt, đối chiếu với ngân sách đã duyệt để ngăn chặn tình trạng vượt chi ngay từ đầu. Mọi giao dịch được theo dõi và cảnh báo ngay lập tức khi có nguy cơ vượt ngân sách.</p>
    
    <h2>Báo Cáo Và Phân Tích Độ Lệch</h2>
    <p>Giải pháp cung cấp báo cáo chuyên sâu so sánh ngân sách thực tế với dự toán, hỗ trợ ra quyết định đầu tư và phân bổ nguồn lực chính xác. Các dashboard trực quan giúp lãnh đạo nắm bắt tình hình tài chính nhanh chóng.</p>
    
    <h2>Kết Quả Thực Tế</h2>
    <p>Doanh nghiệp sử dụng giải pháp này đã giảm 45% tình trạng vượt chi, tăng 60% độ chính xác dự toán, và cải thiện 50% tốc độ phê duyệt. Hệ thống giúp doanh nghiệp duy trì tính kỷ luật tài chính và tối ưu hiệu quả sử dụng nguồn lực.</p>`,
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop",
    date: "2025-07-10",
    author: "NexaCore Team",
    category: "Product News",
  },
  {
    id: "4",
    slug: "crm-360-do-giai-phap-quan-ly-khach-hang",
    title: "CRM 360 Độ: Giải Pháp Quản Lý Khách Hàng Toàn Diện",
    excerpt:
      "Hệ thống CRM mới của NexaCore cung cấp cái nhìn 360 độ về khách hàng, tự động hóa quy trình bán hàng và nâng cao chất lượng dịch vụ.",
    content: `<p>Trong thời đại số hóa, việc hiểu rõ khách hàng là yếu tố quyết định thành công. Hệ thống CRM 360 độ của NexaCore cung cấp cái nhìn toàn diện về mọi tương tác với khách hàng, từ marketing đến bán hàng và dịch vụ.</p>
    
    <h2>Cái Nhìn 360 Độ Về Khách Hàng</h2>
    <p>Hệ thống tích hợp dữ liệu từ mọi điểm tiếp xúc với khách hàng, tạo ra hồ sơ khách hàng đầy đủ và chi tiết. Từ lịch sử mua hàng, tương tác trên mạng xã hội, đến các yêu cầu hỗ trợ, tất cả đều được ghi nhận và phân tích.</p>
    
    <h2>Tự Động Hóa Quy Trình Bán Hàng</h2>
    <p>CRM 360 độ tự động hóa các bước trong quy trình bán hàng, từ lead generation đến chốt giao dịch. Hệ thống gợi ý các hành động tiếp theo dựa trên hành vi và sở thích của khách hàng, giúp đội ngũ sales tập trung vào chốt giao dịch.</p>
    
    <h2>Nâng Cao Chất Lượng Dịch Vụ</h2>
    <p>Hệ thống quản lý, phân loại và ưu tiên giải quyết các yêu cầu/khiếu nại (ticket), đảm bảo tốc độ phản hồi nhanh chóng và chất lượng dịch vụ đồng nhất. Mọi tương tác với khách hàng đều được theo dõi và đánh giá.</p>`,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    date: "2025-06-25",
    author: "NexaCore Team",
    category: "Product News",
  },
  {
    id: "5",
    slug: "data-warehouse-xu-huong-2024",
    title: "Data Warehouse: Xu Hướng Chuyển Đổi Số 2024",
    excerpt:
      "Kho dữ liệu tập trung đang trở thành nền tảng quan trọng cho các doanh nghiệp muốn tận dụng sức mạnh của Business Intelligence và phân tích dữ liệu.",
    content: `<p>Trong kỷ nguyên số, dữ liệu đã trở thành tài sản quý giá nhất của doanh nghiệp. Data Warehouse (Kho dữ liệu) đang trở thành nền tảng chiến lược giúp doanh nghiệp biến dữ liệu thô thành tri thức kinh doanh sâu sắc.</p>
    
    <h2>Tầm Quan Trọng Của Data Warehouse</h2>
    <p>Data Warehouse tập trung hóa dữ liệu từ nhiều nguồn khác nhau (ERP, CRM, hệ thống bán hàng, v.v.) vào một kho duy nhất, được tổ chức và làm sạch để phục vụ phân tích. Điều này giúp doanh nghiệp có cái nhìn toàn diện về hoạt động kinh doanh.</p>
    
    <h2>Business Intelligence Và Phân Tích Dữ Liệu</h2>
    <p>Với Data Warehouse, doanh nghiệp có thể triển khai các công cụ Business Intelligence (BI) để phân tích xu hướng, dự báo tương lai và ra quyết định dựa trên dữ liệu. Hệ thống tối ưu hóa cho các truy vấn phức tạp và báo cáo lớn, đảm bảo tốc độ phân tích nhanh chóng.</p>
    
    <h2>Xu Hướng 2024</h2>
    <p>Năm 2024 chứng kiến sự phát triển mạnh mẽ của Data Warehouse với tích hợp AI và Machine Learning, cho phép phân tích dự báo chính xác hơn và tự động hóa quy trình ra quyết định. Doanh nghiệp đầu tư vào Data Warehouse sẽ có lợi thế cạnh tranh đáng kể.</p>`,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
    date: "2025-05-18",
    author: "NexaCore Team",
    category: "Technology",
  },
  {
    id: "6",
    slug: "cloud-storage-private-bao-mat-toi-da",
    title: "Cloud Storage Private: Bảo Mật Tối Đa Cho Dữ Liệu Nhạy Cảm",
    excerpt:
      "Giải pháp lưu trữ đám mây riêng của NexaCore đảm bảo bảo mật tối đa, tuân thủ các quy định nghiêm ngặt và đảm bảo tính sẵn sàng cao.",
    content: `<p>Với sự gia tăng của các mối đe dọa bảo mật và yêu cầu tuân thủ quy định ngày càng nghiêm ngặt, Cloud Storage Private đang trở thành lựa chọn hàng đầu cho các tổ chức xử lý dữ liệu nhạy cảm.</p>
    
    <h2>Bảo Mật Tối Đa</h2>
    <p>Cloud Storage Private của NexaCore cung cấp môi trường lưu trữ độc lập, đảm bảo tuân thủ các quy định bảo mật dữ liệu nghiêm ngặt như GDPR, PCI-DSS. Dữ liệu được mã hóa end-to-end và chỉ có thể truy cập bởi các bên được ủy quyền.</p>
    
    <h2>Khả Năng Mở Rộng Linh Hoạt</h2>
    <p>Giải pháp cho phép doanh nghiệp dễ dàng mở rộng dung lượng và tài nguyên theo nhu cầu tăng trưởng mà không cần đầu tư lớn vào phần cứng vật lý. Hệ thống tự động điều chỉnh để đáp ứng nhu cầu thực tế.</p>
    
    <h2>Đảm Bảo Tính Sẵn Sàng</h2>
    <p>Dữ liệu được sao lưu và dự phòng tại nhiều khu vực, đảm bảo hoạt động liên tục (Business Continuity) với uptime 99.99%. Hệ thống tự động phát hiện và khắc phục sự cố, đảm bảo dữ liệu luôn sẵn sàng khi cần.</p>`,
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop",
    date: "2025-04-12",
    author: "NexaCore Team",
    category: "Technology",
  },
  {
    id: "7",
    slug: "dms-so-hoa-kenh-phan-phoi",
    title: "DMS: Số Hóa Toàn Diện Kênh Phân Phối",
    excerpt:
      "Hệ thống Quản Lý Phân Phối (DMS) giúp doanh nghiệp FMCG quản lý lực lượng bán hàng, theo dõi tồn kho kênh và tối ưu hóa hiệu quả hoạt động.",
    content: `<p>Ngành hàng tiêu dùng nhanh (FMCG) đang đối mặt với thách thức quản lý kênh phân phối phức tạp với hàng nghìn điểm bán và đội ngũ bán hàng lớn. Hệ thống DMS (Distribution Management System) của NexaCore giải quyết những thách thức này một cách toàn diện.</p>
    
    <h2>Quản Lý Lực Lượng Bán Hàng</h2>
    <p>DMS giúp giám sát hoạt động, lộ trình bán hàng và hiệu suất đặt hàng của nhân viên thị trường (Sales Reps) qua ứng dụng di động. Hệ thống theo dõi vị trí GPS, thời gian thăm khách hàng và kết quả bán hàng, giúp tối ưu hóa hiệu quả làm việc.</p>
    
    <h2>Theo Dõi Tồn Kho Kênh</h2>
    <p>Hệ thống cập nhật tồn kho, tình trạng trưng bày, và đơn hàng tại điểm bán/NPP theo thời gian thực, giảm rủi ro thiếu hàng và tồn kho chết. Dữ liệu được đồng bộ tự động với hệ thống ERP trung tâm.</p>
    
    <h2>Kết Quả Thực Tế</h2>
    <p>Doanh nghiệp FMCG sử dụng DMS đã ghi nhận những cải thiện đáng kể: tăng 45% độ phủ thị trường, giảm 35% tồn kho chết, và cải thiện 50% hiệu suất đội ngũ bán hàng. Hệ thống giúp tối ưu hóa quy trình từ đặt hàng đến giao hàng.</p>`,
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=600&fit=crop",
    date: "2024-03-28",
    author: "NexaCore Team",
    category: "Product News",
  },
  {
    id: "8",
    slug: "ecommerce-platform-tang-truong-doanh-thu",
    title: "Nền Tảng E-commerce: Tăng Trưởng Doanh Thu Online",
    excerpt:
      "Giải pháp Thương Mại Điện Tử tích hợp sâu với ERP & CRM, hỗ trợ đa ngôn ngữ, đa tiền tệ và tối ưu hiệu suất cho doanh nghiệp.",
    content: `<p>Thương mại điện tử đang trở thành kênh bán hàng quan trọng nhất trong thời đại số. Nền tảng E-commerce của NexaCore được thiết kế để tích hợp liền mạch với hệ thống lõi của doanh nghiệp, tạo ra trải nghiệm mua sắm tuyệt vời cho khách hàng.</p>
    
    <h2>Tích Hợp Sâu Với ERP & CRM</h2>
    <p>Đơn hàng, tồn kho, thông tin khách hàng được đồng bộ tự động, loại bỏ sai sót và đảm bảo dữ liệu bán hàng chính xác. Hệ thống tự động cập nhật tồn kho khi có đơn hàng mới và đồng bộ thông tin khách hàng với CRM.</p>
    
    <h2>Nền Tảng Tùy Biến Cao</h2>
    <p>Cho phép xây dựng giao diện và trải nghiệm người dùng độc đáo, đáp ứng các mô hình kinh doanh B2B/B2C phức tạp. Hệ thống hỗ trợ đa ngôn ngữ, đa tiền tệ, và tích hợp các công cụ Marketing (SEO, liên kết).</p>
    
    <h2>Tăng Trưởng Doanh Thu</h2>
    <p>Doanh nghiệp sử dụng nền tảng này đã ghi nhận tăng trưởng doanh thu online đáng kể, với khả năng mở rộng thị trường và tiếp cận khách hàng toàn cầu. Hệ thống tối ưu hiệu suất và tốc độ tải trang, cải thiện trải nghiệm người dùng.</p>`,
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop",
    date: "2024-02-15",
    author: "NexaCore Team",
    category: "Product News",
  },
  {
    id: "9",
    slug: "thanh-cong-trien-khai-erp-chuoi-sieu-thi",
    title: "Thành Công Triển Khai ERP Cho Chuỗi Siêu Thị Hàng Đầu",
    excerpt:
      "Dự án triển khai ERP Bán Lẻ cho Tập đoàn Bán lẻ Quốc gia đạt được kết quả ấn tượng: đồng bộ hóa 100% dữ liệu đa kênh và giảm 35% chi phí tồn kho.",
    content: `<p>Tập đoàn Bán lẻ Quốc gia là một trong những chuỗi siêu thị lớn nhất Việt Nam với hơn 200 điểm bán trên toàn quốc. Việc quản lý đa kênh và đồng bộ dữ liệu giữa các điểm bán là thách thức lớn mà họ phải đối mặt.</p>
    
    <h2>Thách Thức Ban Đầu</h2>
    <p>Trước khi triển khai ERP, Tập đoàn gặp nhiều khó khăn: dữ liệu tồn kho không đồng bộ giữa các điểm bán, chi phí tồn kho cao, và khó khăn trong quản lý khuyến mãi đa kênh. Hệ thống cũ không đáp ứng được nhu cầu phát triển.</p>
    
    <h2>Giải Pháp Triển Khai</h2>
    <p>NexaCore đã triển khai giải pháp ERP Bán Lẻ toàn diện, tích hợp tất cả các điểm bán, hệ thống online và kênh bán hàng trên mạng xã hội vào một nền tảng thống nhất. Hệ thống được triển khai theo từng giai đoạn để đảm bảo không gián đoạn hoạt động kinh doanh.</p>
    
    <h2>Kết Quả Ấn Tượng</h2>
    <p>Sau 6 tháng triển khai, Tập đoàn đã đạt được những kết quả ấn tượng: đồng bộ hóa 100% dữ liệu đa kênh, giảm 35% chi phí tồn kho, và tăng 50% hiệu quả quản lý khuyến mãi. Hệ thống giúp Tập đoàn tối ưu hóa hoạt động và nâng cao trải nghiệm khách hàng.</p>`,
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop",
    date: "2024-03-20",
    author: "NexaCore Team",
    category: "Case Study",
  },
  {
    id: "10",
    slug: "erp-san-xuat-nha-may-det-may",
    title: "ERP Sản Xuất Giúp Nhà Máy Dệt May Tối Ưu Hiệu Quả",
    excerpt:
      "Công ty Dệt may Hàng đầu đã thành công triển khai ERP Sản Xuất, tối ưu 40% công suất sản xuất và giảm 30% lãng phí nguyên vật liệu.",
    content: `<p>Công ty Dệt may Hàng đầu là một trong những nhà sản xuất dệt may lớn nhất Việt Nam với quy trình sản xuất phức tạp từ spinning, knitting đến sewing. Việc quản lý và tối ưu hóa quy trình sản xuất là thách thức lớn.</p>
    
    <h2>Thách Thức Sản Xuất</h2>
    <p>Trước khi triển khai ERP, nhà máy gặp nhiều khó khăn: lãng phí nguyên vật liệu cao, công suất sản xuất chưa được tối ưu, và khó khăn trong kiểm soát chất lượng. Hệ thống cũ không đáp ứng được yêu cầu quản lý chi tiết.</p>
    
    <h2>Giải Pháp ERP Sản Xuất</h2>
    <p>NexaCore đã triển khai giải pháp ERP Sản Xuất với công nghệ IED Tool và Inspection Tool, giúp nhà máy tối ưu quy trình từ lập kế hoạch đến kiểm soát chất lượng. Hệ thống tích hợp sâu với các thiết bị trên sàn nhà máy.</p>
    
    <h2>Kết Quả Vượt Mong Đợi</h2>
    <p>Sau khi triển khai, nhà máy đã đạt được những kết quả ấn tượng: tối ưu 40% công suất sản xuất, giảm 30% lãng phí nguyên vật liệu, và tăng 25% độ chính xác kiểm kê. Hệ thống giúp nhà máy nâng cao năng lực cạnh tranh và đáp ứng các tiêu chuẩn quốc tế.</p>`,
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=600&fit=crop",
    date: "2024-02-25",
    author: "NexaCore Team",
    category: "Case Study",
  },
  {
    id: "11",
    slug: "quan-ly-ngan-sach-tap-doan",
    title: "Quản Lý Ngân Sách: Giải Pháp Cho Tập Đoàn Đa Ngành",
    excerpt:
      "Hệ thống Quản Lý Ngân Sách giúp Tập đoàn Đa ngành giảm 45% tình trạng vượt chi và tăng 60% độ chính xác dự toán.",
    content: `<p>Tập đoàn Đa ngành với nhiều công ty con và phòng ban khác nhau cần một hệ thống quản lý ngân sách tập trung và hiệu quả. Việc kiểm soát chi tiêu và phân bổ ngân sách là thách thức lớn.</p>
    
    <h2>Vấn Đề Quản Lý Ngân Sách</h2>
    <p>Trước khi triển khai, Tập đoàn gặp nhiều khó khăn: tình trạng vượt chi thường xuyên, độ chính xác dự toán thấp, và quy trình phê duyệt chậm. Hệ thống cũ không đáp ứng được yêu cầu quản lý tập trung.</p>
    
    <h2>Giải Pháp Quản Lý Ngân Sách</h2>
    <p>NexaCore đã triển khai giải pháp Quản Lý Ngân Sách toàn diện, cho phép Tập đoàn kiểm soát chi tiêu theo thời gian thực và phân bổ ngân sách hiệu quả. Hệ thống tự động hóa quy trình phê duyệt và cảnh báo khi có nguy cơ vượt chi.</p>
    
    <h2>Kết Quả Thành Công</h2>
    <p>Sau khi triển khai, Tập đoàn đã đạt được những kết quả ấn tượng: giảm 45% tình trạng vượt chi, tăng 60% độ chính xác dự toán, và cải thiện 50% tốc độ phê duyệt. Hệ thống giúp Tập đoàn duy trì tính kỷ luật tài chính và tối ưu hiệu quả sử dụng nguồn lực.</p>`,
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&h=600&fit=crop",
    date: "2024-01-15",
    author: "NexaCore Team",
    category: "Case Study",
  },
  {
    id: "12",
    slug: "chuyen-doi-so-ngan-hang",
    title: "Chuyển Đổi Số Ngân Hàng: Xây Dựng Data Warehouse Thành Công",
    excerpt:
      "Ngân hàng Thương mại đã xây dựng thành công nền tảng Data Warehouse, tăng 70% tốc độ phân tích dữ liệu và cải thiện 80% độ chính xác dự báo.",
    content: `<p>Ngân hàng Thương mại là một trong những ngân hàng lớn nhất Việt Nam với khối lượng dữ liệu khổng lồ từ nhiều hệ thống khác nhau. Việc phân tích và ra quyết định dựa trên dữ liệu là thách thức lớn.</p>
    
    <h2>Thách Thức Phân Tích Dữ Liệu</h2>
    <p>Trước khi xây dựng Data Warehouse, Ngân hàng gặp nhiều khó khăn: dữ liệu phân tán ở nhiều hệ thống, tốc độ phân tích chậm, và độ chính xác dự báo thấp. Việc ra quyết định dựa trên dữ liệu không hiệu quả.</p>
    
    <h2>Xây Dựng Data Warehouse</h2>
    <p>NexaCore đã xây dựng nền tảng Data Warehouse tập trung, tích hợp dữ liệu từ tất cả các hệ thống của Ngân hàng. Hệ thống được tối ưu hóa cho các truy vấn phức tạp và phân tích dữ liệu lớn.</p>
    
    <h2>Kết Quả Ấn Tượng</h2>
    <p>Sau khi triển khai, Ngân hàng đã đạt được những kết quả ấn tượng: tăng 70% tốc độ phân tích dữ liệu, cải thiện 80% độ chính xác dự báo, và nâng cao khả năng ra quyết định dựa trên dữ liệu. Hệ thống giúp Ngân hàng nâng cao chất lượng dịch vụ và tối ưu hóa hoạt động kinh doanh.</p>`,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
    date: "2024-05-20",
    author: "NexaCore Team",
    category: "Case Study",
  },
  {
    id: "13",
    slug: "cloud-storage-chinh-phu",
    title: "Cloud Storage Private: Giải Pháp Cho Tổ Chức Chính Phủ",
    excerpt:
      "Cơ quan Chính phủ đã triển khai thành công Cloud Storage Private, đạt 99.99% uptime và tuân thủ 100% các quy định bảo mật dữ liệu.",
    content: `<p>Cơ quan Chính phủ xử lý một lượng lớn dữ liệu nhạy cảm và cần một giải pháp lưu trữ đảm bảo bảo mật tối đa và tuân thủ các quy định nghiêm ngặt. Cloud Storage Private là lựa chọn phù hợp.</p>
    
    <h2>Yêu Cầu Bảo Mật Nghiêm Ngặt</h2>
    <p>Cơ quan Chính phủ có yêu cầu bảo mật rất cao và cần tuân thủ các quy định về bảo vệ dữ liệu. Giải pháp lưu trữ phải đảm bảo tính bảo mật, tính sẵn sàng và khả năng kiểm soát hoàn toàn.</p>
    
    <h2>Triển Khai Cloud Storage Private</h2>
    <p>NexaCore đã triển khai giải pháp Cloud Storage Private với môi trường lưu trữ độc lập, đảm bảo tuân thủ các quy định bảo mật dữ liệu. Hệ thống được mã hóa end-to-end và chỉ có thể truy cập bởi các bên được ủy quyền.</p>
    
    <h2>Kết Quả Xuất Sắc</h2>
    <p>Sau khi triển khai, Cơ quan đã đạt được những kết quả xuất sắc: đạt 99.99% uptime, tuân thủ 100% các quy định bảo mật dữ liệu, và giảm 60% chi phí lưu trữ. Hệ thống giúp Cơ quan đảm bảo tính sẵn sàng và bảo mật của dữ liệu quan trọng.</p>`,
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop",
    date: "2024-06-25",
    author: "NexaCore Team",
    category: "Case Study",
  },
  {
    id: "14",
    slug: "dms-fmcg-hieu-qua",
    title: "DMS Giúp Công Ty FMCG Tăng 45% Độ Phủ Thị Trường",
    excerpt:
      "Công ty Hàng tiêu dùng đã triển khai thành công DMS, tăng 45% độ phủ thị trường và giảm 35% tồn kho chết.",
    content: `<p>Công ty Hàng tiêu dùng là một trong những nhà sản xuất FMCG lớn nhất Việt Nam với mạng lưới phân phối rộng khắp. Việc quản lý kênh phân phối và đội ngũ bán hàng là thách thức lớn.</p>
    
    <h2>Thách Thức Quản Lý Phân Phối</h2>
    <p>Trước khi triển khai DMS, Công ty gặp nhiều khó khăn: độ phủ thị trường thấp, tồn kho chết cao, và khó khăn trong quản lý đội ngũ bán hàng. Hệ thống cũ không đáp ứng được yêu cầu quản lý thời gian thực.</p>
    
    <h2>Triển Khai DMS</h2>
    <p>NexaCore đã triển khai hệ thống DMS toàn diện, giúp Công ty quản lý lực lượng bán hàng, theo dõi tồn kho kênh và tối ưu hóa hiệu quả hoạt động. Hệ thống được tích hợp với ứng dụng di động cho đội ngũ bán hàng.</p>
    
    <h2>Kết Quả Vượt Trội</h2>
    <p>Sau khi triển khai, Công ty đã đạt được những kết quả vượt trội: tăng 45% độ phủ thị trường, giảm 35% tồn kho chết, và cải thiện 50% hiệu suất đội ngũ bán hàng. Hệ thống giúp Công ty tối ưu hóa quy trình phân phối và nâng cao hiệu quả kinh doanh.</p>`,
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=600&fit=crop",
    date: "2024-07-30",
    author: "NexaCore Team",
    category: "Case Study",
  },
  {
    id: "15",
    slug: "ecommerce-thoi-trang-tang-truong",
    title: "E-commerce Platform: Thương Hiệu Thời Trang Tăng 120% Doanh Thu",
    excerpt:
      "Thương hiệu Thời trang Quốc tế đã triển khai nền tảng E-commerce, tăng 120% doanh thu online và cải thiện 65% trải nghiệm người dùng.",
    content: `<p>Thương hiệu Thời trang Quốc tế là một trong những thương hiệu thời trang nổi tiếng với sự hiện diện toàn cầu. Việc phát triển kênh bán hàng online là ưu tiên hàng đầu để mở rộng thị trường.</p>
    
    <h2>Nhu Cầu Phát Triển E-commerce</h2>
    <p>Trước khi triển khai nền tảng E-commerce, Thương hiệu gặp nhiều khó khăn: doanh thu online thấp, trải nghiệm người dùng chưa tốt, và khó khăn trong quản lý đơn hàng đa kênh. Hệ thống cũ không đáp ứng được yêu cầu phát triển.</p>
    
    <h2>Triển Khai Nền Tảng E-commerce</h2>
    <p>NexaCore đã triển khai nền tảng E-commerce mạnh mẽ, tích hợp sâu với ERP & CRM, hỗ trợ đa ngôn ngữ, đa tiền tệ và tối ưu hiệu suất. Hệ thống được tùy biến để phù hợp với mô hình kinh doanh của Thương hiệu.</p>
    
    <h2>Kết Quả Ngoạn Mục</h2>
    <p>Sau khi triển khai, Thương hiệu đã đạt được những kết quả ngoạn mục: tăng 120% doanh thu online, giảm 40% thời gian xử lý đơn hàng, và cải thiện 65% trải nghiệm người dùng. Hệ thống giúp Thương hiệu mở rộng thị trường và tăng trưởng doanh thu online đáng kể.</p>`,
    image:
      "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=1200&h=600&fit=crop",
    date: "2024-08-15",
    author: "NexaCore Team",
    category: "Case Study",
  },
  {
    id: "16",
    slug: "xu-huong-cong-nghe-2024",
    title: "Xu Hướng Công Nghệ 2024: Chuyển Đổi Số Toàn Diện",
    excerpt:
      "Các xu hướng công nghệ nổi bật trong năm 2024 bao gồm ERP thông minh, Cloud Storage, Data Warehouse và các giải pháp số hóa toàn diện.",
    content: `<p>Năm 2024 chứng kiến sự phát triển mạnh mẽ của các công nghệ chuyển đổi số, với nhiều xu hướng mới định hình tương lai của doanh nghiệp. Các giải pháp ERP thông minh, Cloud Storage, và Data Warehouse đang trở thành nền tảng quan trọng.</p>
    
    <h2>ERP Thông Minh Với AI</h2>
    <p>ERP thông minh với tích hợp AI và Machine Learning đang trở thành xu hướng chính. Hệ thống có thể tự động hóa quy trình, dự báo xu hướng và tối ưu hóa hiệu quả kinh doanh. Các doanh nghiệp đầu tư vào ERP thông minh sẽ có lợi thế cạnh tranh đáng kể.</p>
    
    <h2>Cloud Storage Và Data Warehouse</h2>
    <p>Cloud Storage và Data Warehouse đang trở thành nền tảng chiến lược cho các doanh nghiệp muốn tận dụng sức mạnh của dữ liệu. Các giải pháp này giúp doanh nghiệp lưu trữ, phân tích và ra quyết định dựa trên dữ liệu một cách hiệu quả.</p>
    
    <h2>Tương Lai Chuyển Đổi Số</h2>
    <p>Với sự phát triển của các công nghệ mới, chuyển đổi số sẽ tiếp tục là ưu tiên hàng đầu của doanh nghiệp. Các giải pháp số hóa toàn diện sẽ giúp doanh nghiệp nâng cao năng lực cạnh tranh và phát triển bền vững trong thị trường hiện đại.</p>`,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop",
    date: "2024-09-01",
    author: "NexaCore Team",
    category: "Technology",
  },
  {
    id: "17",
    slug: "nexacore-hop-tac-doi-tac-moi",
    title: "NexaCore Hợp Tác Với Đối Tác Chiến Lược Mới",
    excerpt:
      "NexaCore công bố hợp tác với các đối tác công nghệ hàng đầu để mở rộng dịch vụ và nâng cao chất lượng giải pháp cho khách hàng.",
    content: `<p>NexaCore tự hào công bố hợp tác chiến lược với các đối tác công nghệ hàng đầu trong ngành, mở ra một chương mới trong hành trình phát triển và đổi mới của công ty.</p>
    
    <h2>Đối Tác Chiến Lược</h2>
    <p>Thông qua các hợp tác này, NexaCore sẽ mở rộng phạm vi dịch vụ và nâng cao chất lượng giải pháp cho khách hàng. Các đối tác sẽ cung cấp công nghệ tiên tiến và chuyên môn sâu để hỗ trợ NexaCore phát triển các giải pháp tốt nhất.</p>
    
    <h2>Lợi Ích Cho Khách Hàng</h2>
    <p>Khách hàng của NexaCore sẽ được hưởng lợi từ các giải pháp được cải thiện, công nghệ mới nhất và dịch vụ tốt hơn. Hợp tác này sẽ giúp NexaCore đáp ứng tốt hơn nhu cầu của khách hàng và mang lại giá trị lớn hơn.</p>
    
    <h2>Tương Lai Phát Triển</h2>
    <p>Với các hợp tác chiến lược này, NexaCore sẽ tiếp tục dẫn đầu trong đổi mới công nghệ và cung cấp các giải pháp tốt nhất cho khách hàng. Công ty cam kết đầu tư vào phát triển và đổi mới để mang lại giá trị lâu dài.</p>`,
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop",
    date: "2024-08-10",
    author: "NexaCore Team",
    category: "Company News",
  },
  {
    id: "18",
    slug: "giai-phap-erp-tuong-lai",
    title: "Giải Pháp ERP Tương Lai: Tích Hợp AI Và Machine Learning",
    excerpt:
      "Tương lai của ERP sẽ tích hợp sâu với AI và Machine Learning để tự động hóa quy trình, dự báo xu hướng và tối ưu hóa hiệu quả kinh doanh.",
    content: `<p>Tương lai của ERP đang được định hình bởi sự tích hợp sâu với AI và Machine Learning. Các giải pháp ERP thông minh sẽ tự động hóa quy trình, dự báo xu hướng và tối ưu hóa hiệu quả kinh doanh một cách chưa từng có.</p>
    
    <h2>Tích Hợp AI Và Machine Learning</h2>
    <p>ERP với AI và Machine Learning có thể tự động hóa các quy trình phức tạp, từ lập kế hoạch sản xuất đến quản lý tồn kho. Hệ thống có thể học từ dữ liệu lịch sử và đưa ra các đề xuất thông minh để tối ưu hóa hoạt động.</p>
    
    <h2>Dự Báo Và Tối Ưu Hóa</h2>
    <p>Với khả năng phân tích dữ liệu lớn, ERP thông minh có thể dự báo xu hướng thị trường, nhu cầu khách hàng và các rủi ro tiềm ẩn. Hệ thống tự động tối ưu hóa các quy trình để đạt hiệu quả cao nhất.</p>
    
    <h2>Tương Lai Của Doanh Nghiệp</h2>
    <p>Các doanh nghiệp đầu tư vào ERP thông minh sẽ có lợi thế cạnh tranh đáng kể trong thị trường hiện đại. Hệ thống sẽ giúp doanh nghiệp phản ứng nhanh với thay đổi, tối ưu hóa hoạt động và phát triển bền vững.</p>`,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
    date: "2024-07-05",
    author: "NexaCore Team",
    category: "Technology",
  },
];

export const jobs: Job[] = [
  {
    id: "1",
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote / Viet Nam",
    type: "Full-time",
    description:
      "Chúng tôi đang tìm kiếm một Senior Full Stack Developer giàu kinh nghiệm để tham gia vào đội ngũ kỹ thuật và xây dựng các giải pháp công nghệ tiên tiến. Bạn sẽ làm việc với các công nghệ hiện đại nhất và có cơ hội phát triển sự nghiệp trong môi trường năng động, sáng tạo.",
    requirements: [
      "5+ năm kinh nghiệm phát triển full-stack",
      "Thành thạo React, Node.js, và TypeScript",
      "Kinh nghiệm với các nền tảng cloud (AWS/Azure/GCP)",
      "Kỹ năng giải quyết vấn đề mạnh mẽ",
      "Kỹ năng giao tiếp xuất sắc",
      "Kinh nghiệm với database (PostgreSQL, MongoDB)",
      "Hiểu biết về CI/CD và DevOps practices",
    ],
    responsibilities: [
      "Thiết kế và phát triển các ứng dụng web có khả năng mở rộng",
      "Hợp tác với các đội ngũ đa chức năng",
      "Viết code sạch, dễ bảo trì",
      "Tham gia code review và thảo luận kiến trúc",
      "Mentor các developer junior",
      "Tối ưu hóa hiệu suất ứng dụng",
      "Nghiên cứu và áp dụng các công nghệ mới",
    ],
    salary: "25,000,000 - 40,000,000 VNĐ/tháng",
    experienceLevel: "Senior (5+ years)",
    skills: [
      "React",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "MongoDB",
      "AWS",
      "Docker",
      "Git",
      "RESTful API",
      "GraphQL",
    ],
    benefits: [
      "Lương cạnh tranh và review định kỳ",
      "Bảo hiểm đầy đủ (BHXH, BHYT, BHTN)",
      "Làm việc remote linh hoạt",
      "Đào tạo và phát triển kỹ năng",
      "Môi trường làm việc trẻ trung, năng động",
      "Thưởng theo dự án và hiệu suất",
    ],
    postedDate: "2025-01-01",
    applicationDeadline: "2025-03-15",
  },
  {
    id: "2",
    title: "AI/ML Engineer",
    department: "AI Research",
    location: "Hybrid / Viet Nam",
    type: "Full-time",
    description:
      "Tham gia đội ngũ nghiên cứu AI của chúng tôi để phát triển các giải pháp machine learning sáng tạo cho khách hàng doanh nghiệp. Bạn sẽ làm việc với các dự án AI/ML tiên tiến và có cơ hội nghiên cứu, phát triển các thuật toán mới.",
    requirements: [
      "Thạc sĩ hoặc Tiến sĩ về Khoa học Máy tính hoặc lĩnh vực liên quan",
      "3+ năm kinh nghiệm trong machine learning",
      "Nền tảng vững chắc về Python, TensorFlow/PyTorch",
      "Kinh nghiệm với NLP và computer vision",
      "Có nghiên cứu đã công bố là một lợi thế",
      "Hiểu biết về MLOps và deployment models",
      "Kỹ năng toán học và thống kê mạnh",
    ],
    responsibilities: [
      "Phát triển và triển khai các mô hình ML",
      "Nghiên cứu các thuật toán và kỹ thuật AI mới",
      "Hợp tác với các đội ngũ sản phẩm",
      "Tối ưu hóa hiệu suất mô hình",
      "Trình bày kết quả cho các bên liên quan",
      "Xây dựng pipeline ML từ đầu đến cuối",
      "Giám sát và cải thiện mô hình trong production",
    ],
    salary: "30,000,000 - 50,000,000 VNĐ/tháng",
    experienceLevel: "Mid to Senior (3+ years)",
    skills: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "NLP",
      "Computer Vision",
      "MLOps",
      "Docker",
      "Kubernetes",
      "Data Science",
    ],
    benefits: [
      "Lương cao và thưởng theo dự án",
      "Bảo hiểm đầy đủ và chăm sóc sức khỏe",
      "Làm việc hybrid linh hoạt",
      "Ngân sách cho nghiên cứu và học tập",
      "Tham gia các hội nghị AI/ML",
      "Cơ hội công bố nghiên cứu",
    ],
    postedDate: "2025-01-01",
    applicationDeadline: "2025-03-15",
  },
  {
    id: "3",
    title: "Product Manager",
    department: "Product",
    location: "Hybrid / Viet Nam",
    type: "Full-time",
    description:
      "Dẫn dắt chiến lược và thực thi sản phẩm cho các giải pháp phần mềm doanh nghiệp của chúng tôi. Bạn sẽ làm việc với các đội ngũ đa chức năng để định hình tương lai của sản phẩm và đảm bảo thành công trên thị trường.",
    requirements: [
      "5+ năm kinh nghiệm quản lý sản phẩm",
      "Kinh nghiệm với sản phẩm phần mềm doanh nghiệp",
      "Tư duy phân tích và chiến lược mạnh mẽ",
      "Kỹ năng quản lý stakeholder xuất sắc",
      "Nền tảng kỹ thuật được ưu tiên",
      "Kinh nghiệm với Agile/Scrum",
      "Kỹ năng giao tiếp và thuyết trình tốt",
    ],
    responsibilities: [
      "Định nghĩa tầm nhìn và lộ trình sản phẩm",
      "Thu thập và ưu tiên hóa yêu cầu sản phẩm",
      "Làm việc với các đội ngũ engineering và design",
      "Phân tích xu hướng thị trường và đối thủ cạnh tranh",
      "Thúc đẩy ra mắt sản phẩm và tăng trưởng",
      "Quản lý backlog và sprint planning",
      "Theo dõi metrics và KPIs của sản phẩm",
    ],
    salary: "35,000,000 - 55,000,000 VNĐ/tháng",
    experienceLevel: "Senior (5+ years)",
    skills: [
      "Product Strategy",
      "Agile/Scrum",
      "User Research",
      "Data Analysis",
      "Stakeholder Management",
      "Roadmap Planning",
      "A/B Testing",
      "Product Metrics",
      "Jira",
      "Figma",
    ],
    benefits: [
      "Lương cao và thưởng theo hiệu suất",
      "Bảo hiểm đầy đủ và quỹ phúc lợi",
      "Làm việc hybrid linh hoạt",
      "Đào tạo và phát triển chuyên môn",
      "Tham gia các sự kiện và hội nghị",
      "Cơ hội thăng tiến nhanh",
    ],
    postedDate: "2025-01-01",
    applicationDeadline: "2025-03-15",
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Hắc Ngọc Chung",
    position: "General Director",
    image: "/images/Trung.png",
    bio: "",
  },
  {
    id: "2",
    name: "Ngô Thị Thùy Trang",
    position: "Chief Accountant and BA Team Lead",
    image: "/images/Trang.jpeg",
    bio: "",
  },
  {
    id: "3",
    name: "Nguyễn Trần Thái Duy",
    position: "Lead Front-End",
    image: "/images/Duy.jpg",
    bio: "",
  },
  {
    id: "4",
    name: "Nguyễn Đặng Bình Minh",
    position: "Lead Back-End",
    image: "/images/Minh.jpg",
    bio: "",
  },
  {
    id: "5",
    name: "Trần Đăng Khoa",
    position: "Full-Stack Developer",
    image: "/images/Khoa.png",
    bio: "",
  },
];
