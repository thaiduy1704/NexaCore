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
    title: "Artificial Intelligence & ML",
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
    image: "/images/projects/project-1.jpg",
    solution: "ERP Bán Lẻ, Cloud Infrastructure",
    result:
      "Đồng bộ hóa 100% dữ liệu đa kênh, giảm 35% chi phí tồn kho, tăng 50% hiệu quả quản lý khuyến mãi",
    date: "2024-03-15",
  },
  {
    id: "2",
    slug: "manufacturing-erp-deployment",
    title: "Triển khai ERP Sản Xuất cho Nhà máy Dệt may",
    client: "Công ty Dệt may Hàng đầu",
    industry: "Sản xuất",
    description:
      "Triển khai hệ thống ERP Sản Xuất thông minh với tích hợp sâu từ lập kế hoạch đến kiểm soát chất lượng, quản lý sản lượng WIP/FG và hệ thống Barcode.",
    image: "/images/projects/project-2.jpg",
    solution: "ERP Sản Xuất, Manufacturing",
    result:
      "Tối ưu 40% công suất sản xuất, giảm 30% lãng phí nguyên vật liệu, tăng 25% độ chính xác kiểm kê",
    date: "2024-02-20",
  },
  {
    id: "3",
    slug: "budget-management-system",
    title: "Hệ thống Quản Lý Ngân Sách cho Tập đoàn",
    client: "Tập đoàn Đa ngành",
    industry: "Tài chính",
    description:
      "Triển khai giải pháp Quản Lý Ngân Sách toàn diện với kiểm soát chi tiêu theo thời gian thực và báo cáo phân tích độ lệch chi tiết.",
    image: "/images/projects/project-3.jpg",
    solution: "Quản Lý Ngân Sách, Financial Management",
    result:
      "Giảm 45% tình trạng vượt chi, tăng 60% độ chính xác dự toán, cải thiện 50% tốc độ phê duyệt",
    date: "2024-01-10",
  },

  {
    id: "6",
    slug: "private-cloud-storage",
    title: "Triển khai Cloud Storage Private cho Tổ chức Chính phủ",
    client: "Cơ quan Chính phủ",
    industry: "Chính phủ",
    description:
      "Triển khai giải pháp Cloud Storage Private với bảo mật tối đa, khả năng mở rộng linh hoạt và đảm bảo tính sẵn sàng cao cho dữ liệu nhạy cảm.",
    image: "/images/projects/project-6.jpg",
    solution: "Cloud Storage Private, Infrastructure",
    result:
      "Đạt 99.99% uptime, giảm 60% chi phí lưu trữ, tuân thủ 100% các quy định bảo mật dữ liệu",
    date: "2024-06-18",
  },
  {
    id: "7",
    slug: "dms-distribution-system",
    title: "Triển khai DMS cho Công ty FMCG",
    client: "Công ty Hàng tiêu dùng",
    industry: "FMCG",
    description:
      "Triển khai Hệ thống Quản Lý Phân Phối (DMS) số hóa toàn diện quy trình bán hàng và quản lý kênh phân phối, tối ưu hóa hiệu quả hoạt động ngoài thị trường.",
    image: "/images/projects/project-7.jpg",
    solution: "DMS, Distribution Management",
    result:
      "Tăng 45% độ phủ thị trường, giảm 35% tồn kho chết, cải thiện 50% hiệu suất đội ngũ bán hàng",
    date: "2024-07-25",
  },
  {
    id: "8",
    slug: "ecommerce-platform-deployment",
    title: "Triển khai Nền tảng E-commerce cho Thương hiệu Thời trang",
    client: "Thương hiệu Thời trang Quốc tế",
    industry: "Thời trang",
    description:
      "Triển khai nền tảng Thương mại Điện tử mạnh mẽ với tích hợp sâu ERP & CRM, hỗ trợ đa ngôn ngữ, đa tiền tệ và tối ưu hiệu suất.",
    image: "/images/projects/project-8.jpg",
    solution: "E-commerce Platform, Digital Commerce",
    result:
      "Tăng 120% doanh thu online, giảm 40% thời gian xử lý đơn hàng, cải thiện 65% trải nghiệm người dùng",
    date: "2024-08-30",
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
];

export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    slug: "nexacore-giai-phap-erp-ban-le-hieu-qua",
    title: "NexaCore Ra Mắt Giải Pháp ERP Bán Lẻ Hiệu Quả Cho Doanh Nghiệp",
    excerpt:
      "Giải pháp ERP Bán Lẻ mới của NexaCore giúp doanh nghiệp quản lý đa kênh hiệu quả, tối ưu hóa tồn kho và nâng cao trải nghiệm khách hàng.",
    content: "Full article content goes here...",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
    date: "2024-09-15",
    author: "NexaCore Team",
    category: "Product News",
  },
  {
    id: "2",
    slug: "erp-san-xuat-thong-minh-cho-nganh-det-may",
    title: "ERP Sản Xuất Thông Minh: Giải Pháp Toàn Diện Cho Ngành Dệt May",
    excerpt:
      "Hệ thống ERP Sản Xuất với công nghệ IED Tool và Inspection Tool giúp nhà máy dệt may tối ưu quy trình sản xuất và kiểm soát chất lượng.",
    content: "Full article content goes here...",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=600&fit=crop",
    date: "2024-08-22",
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
    content: "Full article content goes here...",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop",
    date: "2024-07-10",
    author: "NexaCore Team",
    category: "Product News",
  },
  {
    id: "4",
    slug: "crm-360-do-giai-phap-quan-ly-khach-hang",
    title: "CRM 360 Độ: Giải Pháp Quản Lý Khách Hàng Toàn Diện",
    excerpt:
      "Hệ thống CRM mới của NexaCore cung cấp cái nhìn 360 độ về khách hàng, tự động hóa quy trình bán hàng và nâng cao chất lượng dịch vụ.",
    content: "Full article content goes here...",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    date: "2024-06-25",
    author: "NexaCore Team",
    category: "Product News",
  },
  {
    id: "5",
    slug: "data-warehouse-xu-huong-2024",
    title: "Data Warehouse: Xu Hướng Chuyển Đổi Số 2024",
    excerpt:
      "Kho dữ liệu tập trung đang trở thành nền tảng quan trọng cho các doanh nghiệp muốn tận dụng sức mạnh của Business Intelligence và phân tích dữ liệu.",
    content: "Full article content goes here...",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
    date: "2024-05-18",
    author: "NexaCore Team",
    category: "Technology",
  },
  {
    id: "6",
    slug: "cloud-storage-private-bao-mat-toi-da",
    title: "Cloud Storage Private: Bảo Mật Tối Đa Cho Dữ Liệu Nhạy Cảm",
    excerpt:
      "Giải pháp lưu trữ đám mây riêng của NexaCore đảm bảo bảo mật tối đa, tuân thủ các quy định nghiêm ngặt và đảm bảo tính sẵn sàng cao.",
    content: "Full article content goes here...",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop",
    date: "2024-04-12",
    author: "NexaCore Team",
    category: "Technology",
  },
  {
    id: "7",
    slug: "dms-so-hoa-kenh-phan-phoi",
    title: "DMS: Số Hóa Toàn Diện Kênh Phân Phối",
    excerpt:
      "Hệ thống Quản Lý Phân Phối (DMS) giúp doanh nghiệp FMCG quản lý lực lượng bán hàng, theo dõi tồn kho kênh và tối ưu hóa hiệu quả hoạt động.",
    content: "Full article content goes here...",
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
    content: "Full article content goes here...",
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
    content: "Full article content goes here...",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
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
    content: "Full article content goes here...",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=600&fit=crop",
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
    content: "Full article content goes here...",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop",
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
    content: "Full article content goes here...",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
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
    content: "Full article content goes here...",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop",
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
    content: "Full article content goes here...",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=600&fit=crop",
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
    content: "Full article content goes here...",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop",
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
    content: "Full article content goes here...",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=600&fit=crop",
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
    content: "Full article content goes here...",
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
    content: "Full article content goes here...",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=600&fit=crop",
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
    location: "Remote / New York",
    type: "Full-time",
    description:
      "We're looking for an experienced Full Stack Developer to join our engineering team and build cutting-edge solutions.",
    requirements: [
      "5+ years of experience in full-stack development",
      "Proficiency in React, Node.js, and TypeScript",
      "Experience with cloud platforms (AWS/Azure/GCP)",
      "Strong problem-solving skills",
      "Excellent communication skills",
    ],
    responsibilities: [
      "Design and develop scalable web applications",
      "Collaborate with cross-functional teams",
      "Write clean, maintainable code",
      "Participate in code reviews and architecture discussions",
      "Mentor junior developers",
    ],
  },
  {
    id: "2",
    title: "AI/ML Engineer",
    department: "AI Research",
    location: "San Francisco / Hybrid",
    type: "Full-time",
    description:
      "Join our AI research team to develop innovative machine learning solutions for enterprise clients.",
    requirements: [
      "Master's or PhD in Computer Science or related field",
      "3+ years of experience in machine learning",
      "Strong background in Python, TensorFlow/PyTorch",
      "Experience with NLP and computer vision",
      "Published research is a plus",
    ],
    responsibilities: [
      "Develop and deploy ML models",
      "Research new AI algorithms and techniques",
      "Collaborate with product teams",
      "Optimize model performance",
      "Present findings to stakeholders",
    ],
  },
  {
    id: "3",
    title: "Product Manager",
    department: "Product",
    location: "London / Hybrid",
    type: "Full-time",
    description:
      "Lead product strategy and execution for our enterprise software solutions.",
    requirements: [
      "5+ years of product management experience",
      "Experience with enterprise software products",
      "Strong analytical and strategic thinking",
      "Excellent stakeholder management skills",
      "Technical background preferred",
    ],
    responsibilities: [
      "Define product vision and roadmap",
      "Gather and prioritize product requirements",
      "Work with engineering and design teams",
      "Analyze market trends and competition",
      "Drive product launches and growth",
    ],
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
