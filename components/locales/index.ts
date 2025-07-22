import { Pricing } from '../cache/pricing';
export type Languages = 'VI' | 'EN' | 'ID';
export type Translation = Map<Languages, Map<Contents, string>>;

export enum Contents {
    // Header section
    HOME_TITLE,
    PRICING_TITLE,
    FAQ_TITLE,
    LOGOUT,
    PLAYNOW,
    LOGIN,
    REFUND_POLICY,

    // Hero section
    HERO_H1,
    HERO_MAIN_P1,
    HERO_MAIN_P2,
    HERO_MAIN_P3,
    HERO_MAIN_BUTTON,

    // Feature Section
    FEATURE_TITLE,
    FEATURE_DESC,
    FEATURE_1_TITLE,
    FEATURE_1_DESC,
    FEATURE_2_TITLE,
    FEATURE_2_DESC,
    FEATURE_LINK,

    // Social Proof
    SOCIAL_TITLE,
    SOCIAL_DESC,
    SOCIAL_1_TITLE,
    SOCIAL_1_DESC,
    SOCIAL_2_TITLE,
    SOCIAL_2_DESC,
    SOCIAL_3_TITLE,
    SOCIAL_3_DESC,
    SOCIAL_4_TITLE,
    SOCIAL_4_DESC,
    SOCIAL_LINK_1,
    SOCIAL_LINK_2,
    SOCIALPROOF_TITLE,
    SOCIALPROOF_SUBTITLE,
    SOCIALPROOF_LEGALITY,
    SOCIALPROOF_TRUST,
    SOCIALPROOF_1_TITLE,
    SOCIALPROOF_1_DESC,
    SOCIALPROOF_2_TITLE,
    SOCIALPROOF_2_DESC,
    SOCIALPROOF_3_TITLE,
    SOCIALPROOF_3_DESC,
    SOCIALPROOF_4_TITLE,
    SOCIALPROOF_4_DESC,

    // CTA
    CTA_TITLE,
    CTA_DESC,
    CTA_BUTTON,

    //APP
    APPLICATIONS_TITLE,
    APPLICATIONS_DESC,
    APPLICATIONS_TAG_NEW,
    APPLICATIONS_BUTTON_PLAY,
    APPLICATIONS_BUTTON_SUPPORT,
    APPLICATIONS_DESC_1,
    APPLICATIONS_DESC_2,

    //FOOTER
    FOOTER_DESC,
    FOOTER_COMPANY,
    FOOTER_HELP,
    FOOTER_CONTACT,
    FOOTER_LEGAL,
    ALL_RIGHTS_RESERVED,

    // FAQ Section
    // Tiêu đề chính
    FAQ_TITLE_1,
    FAQ_DESC,

    // Nhóm 1: Giới thiệu dịch vụ
    FAQ_Q1,
    FAQ_A1,
    FAQ_Q2,
    FAQ_A2,
    FAQ_Q3,
    FAQ_A3,
    FAQ_Q4,
    FAQ_A4,

    // Nhóm 2: Thanh toán, chính sách
    FAQ_Q5,
    FAQ_A5,
    FAQ_Q6,
    FAQ_A6,
    FAQ_Q7,
    FAQ_A7,

    // Nhóm 3: Kỹ thuật & hỗ trợ
    FAQ_Q8,
    FAQ_A8,
    FAQ_Q9,
    FAQ_A9,
    FAQ_Q10,
    FAQ_A10,
    FAQ_Q11,
    FAQ_A11,

    // PRICING
    PRICING_NO_WAITING_LINE,
    PRICING_MULTIPLE_CLUSTER,
    PRICING_REFUND_DAY,
    PRICING_REFUND_TIME,
    PRICING_TIME_LIMIT,
    PRICING_TIME_UNLIMITED,
    PRICING_STORAGE_LIMIT,
    PRICING_STORAGE_LIMIT_NONE,
    PRICING_STORAGE_CREDIT,

    // Các phần tử tách riêng {value}
    DAY_SUFFIX,
    HOUR_PLAY_SUFFIX,
    HOUR_USAGE_SUFFIX,
    STORAGE_SUFFIX,
    STORAGE_CREDIT_SUFFIX,

    //REFUN
    REFUND_POLICY_1 = 'REFUN_POLICY',
    POLICY = 'POLICY',
    CONTACT_US = 'CONTACT_US',
    REFUND_DESCRIPTION = 'REFUND_DESCRIPTION',
    PACKAGE_499K = 'PACKAGE_499K',
    PACKAGE_299K = 'PACKAGE_299K',
    PACKAGE_199K = 'PACKAGE_199K',
    REQUEST_TIME = 'REQUEST_TIME',
    TOTAL_USAGE = 'TOTAL_USAGE',
    REFUND_PROCESS_TITLE = 'REFUND_PROCESS_TITLE',
    REFUND_STEP_1 = 'REFUND_STEP_1',
    REFUND_STEP_2 = 'REFUND_STEP_2',
    REFUND_STEP_3 = 'REFUND_STEP_3',
    REFUND_NOTE = 'REFUND'
}

export function language(): Translation {
    const t: Translation = new Map<Languages, Map<Contents, string>>();
    const vi = new Map<Contents, string>();
    const en = new Map<Contents, string>();
    const id = new Map<Contents, string>();
    t.set('VI', vi);
    t.set('EN', en);
    t.set('ID', id);

    // Header
    vi.set(Contents.HOME_TITLE, 'Trang chủ');
    en.set(Contents.HOME_TITLE, 'Home');
    id.set(Contents.HOME_TITLE, 'Beranda');

    vi.set(Contents.PRICING_TITLE, 'Mức giá');
    en.set(Contents.PRICING_TITLE, 'Pricing');
    id.set(Contents.PRICING_TITLE, 'Harga');

    vi.set(Contents.FAQ_TITLE, 'Câu hỏi thường gặp');
    en.set(Contents.FAQ_TITLE, 'FAQ');
    id.set(Contents.FAQ_TITLE, 'FAQ');

    vi.set(Contents.LOGOUT, 'Đăng xuất');
    en.set(Contents.LOGOUT, 'Logout');
    id.set(Contents.LOGOUT, 'Keluar');

    vi.set(Contents.PLAYNOW, 'Chơi ngay');
    en.set(Contents.PLAYNOW, 'Play Now');
    id.set(Contents.PLAYNOW, 'Main Sekarang');

    vi.set(Contents.LOGIN, 'Đăng nhập');
    en.set(Contents.LOGIN, 'Login');
    id.set(Contents.LOGIN, 'Masuk');

    // Hero
    vi.set(Contents.HERO_H1, 'Thinkmay CloudPC - chơi game trên mây');
    en.set(Contents.HERO_H1, 'Thinkmay CloudPC - Play Games on Cloud');
    id.set(Contents.HERO_H1, 'Thinkmay CloudPC - Main Game di Cloud');

    vi.set(Contents.HERO_MAIN_P1, 'Cấu hình RTX 3060Ti, 16GB RAM');
    en.set(Contents.HERO_MAIN_P1, 'RTX 3060Ti, 16GB RAM Configuration');
    id.set(Contents.HERO_MAIN_P1, 'Konfigurasi RTX 3060Ti, 16GB RAM');

    vi.set(
        Contents.HERO_MAIN_P2,
        'Chơi tất cả các game cấu hình cao, đồ họa đẹp trên mọi thiết bị, chỉ với kết nối internet'
    );
    en.set(
        Contents.HERO_MAIN_P2,
        'Play all high-end games with beautiful graphics on any device, just with internet connection'
    );
    id.set(
        Contents.HERO_MAIN_P2,
        'Main semua game high-end dengan grafis indah di perangkat apapun, hanya dengan koneksi internet'
    );

    vi.set(Contents.HERO_MAIN_P3, 'Sử dụng hoàn toàn trên trình duyệt');
    en.set(Contents.HERO_MAIN_P3, 'Works entirely in your browser');
    id.set(Contents.HERO_MAIN_P3, 'Berjalan sepenuhnya di browser Anda');

    vi.set(Contents.HERO_MAIN_BUTTON, 'Sử dụng ngay');
    en.set(Contents.HERO_MAIN_BUTTON, 'Get Started Now');
    id.set(Contents.HERO_MAIN_BUTTON, 'Mulai Sekarang');

    // Feature
    vi.set(
        Contents.FEATURE_TITLE,
        'Tương lai của chơi game là chơi game trên "mây"'
    );
    en.set(Contents.FEATURE_TITLE, 'The Future of Gaming is Cloud Gaming');
    id.set(Contents.FEATURE_TITLE, 'Masa Depan Gaming adalah Cloud Gaming');

    vi.set(
        Contents.FEATURE_DESC,
        'Tại sao phải mua gaming PC trong khi bạn có thể chơi game...'
    );
    en.set(
        Contents.FEATURE_DESC,
        'Why buy a gaming PC when you can just play games...'
    );
    id.set(
        Contents.FEATURE_DESC,
        'Kenapa beli PC gaming kalau bisa langsung main game...'
    );

    vi.set(Contents.FEATURE_1_TITLE, 'Mọi lúc, mọi nơi, mọi thiết bị');
    en.set(Contents.FEATURE_1_TITLE, 'Anytime, Anywhere, Any Device');
    id.set(
        Contents.FEATURE_1_TITLE,
        'Kapan saja, Di mana saja, Di perangkat apa saja'
    );

    vi.set(
        Contents.FEATURE_1_DESC,
        'Từ từ đã, cái gì, chơi game AAA trên điện thoại và laptop á?\nThế bây giờ ngồi cafe, nằm trên giường cũng chơi được game AAA?'
    );
    en.set(
        Contents.FEATURE_1_DESC,
        'Wait, what? Playing AAA games on phone and laptop?\nSo now you can play AAA games even at cafe or on bed?'
    );
    id.set(
        Contents.FEATURE_1_DESC,
        'Tunggu, apa? Main game AAA di ponsel dan laptop?\nSekarang kamu bisa main di kafe atau di tempat tidur?'
    );

    vi.set(
        Contents.FEATURE_2_TITLE,
        'Không chờ đợi, bật là chơi, tối ưu từ A-Z'
    );
    en.set(Contents.FEATURE_2_TITLE, 'No Waiting, Just Play, Fully Optimized');
    id.set(
        Contents.FEATURE_2_TITLE,
        'Tanpa Menunggu, Langsung Main, Dioptimalkan Total'
    );

    vi.set(
        Contents.FEATURE_2_DESC,
        'Lại còn có game được tải sẵn luôn? Không cần phải đi mày mò cài Việt Hóa?\nXong rồi cũng không cần phải đi mày mò setting, tất cả đã được tối ưu sẵn?'
    );
    en.set(
        Contents.FEATURE_2_DESC,
        'Games are pre-installed? No need to look for localization?\nAnd no need to tweak settings? Everything is pre-optimized?'
    );
    id.set(
        Contents.FEATURE_2_DESC,
        'Game sudah terpasang? Tidak perlu cari lokalisasi?\nDan tidak perlu atur setting? Semuanya sudah optimal?'
    );

    vi.set(Contents.FEATURE_LINK, 'Tìm hiểu sâu hơn về CloudPC');
    en.set(Contents.FEATURE_LINK, 'Learn more about CloudPC');
    id.set(Contents.FEATURE_LINK, 'Pelajari lebih lanjut tentang CloudPC');

    // CTA
    vi.set(Contents.CTA_TITLE, 'Bắt đầu sử dụng Thinkmay CloudPC ngay bây giờ');
    en.set(Contents.CTA_TITLE, 'Start using Thinkmay CloudPC now');
    id.set(Contents.CTA_TITLE, 'Mulai gunakan Thinkmay CloudPC sekarang');

    vi.set(
        Contents.CTA_DESC,
        'Hoặc nhắn tin hỗ trợ để được trải nghiệm miễn phí'
    );
    en.set(Contents.CTA_DESC, 'Or message support for a free trial');
    id.set(
        Contents.CTA_DESC,
        'Atau kirim pesan ke support untuk uji coba gratis'
    );

    vi.set(Contents.CTA_BUTTON, 'Sử dụng ngay');
    en.set(Contents.CTA_BUTTON, 'Get Started');
    id.set(Contents.CTA_BUTTON, 'Mulai Sekarang');

    // Social Proof
    vi.set(Contents.SOCIALPROOF_TITLE, 'Sản phẩm được tin dùng');
    en.set(Contents.SOCIALPROOF_TITLE, 'A Trusted Product');
    id.set(Contents.SOCIALPROOF_TITLE, 'Produk yang Dipercaya');

    vi.set(
        Contents.SOCIALPROOF_SUBTITLE,
        'Thinkmay CloudPC đã có 60k++ người sử dụng'
    );
    en.set(Contents.SOCIALPROOF_SUBTITLE, 'Thinkmay CloudPC has 60k++ users');
    id.set(
        Contents.SOCIALPROOF_SUBTITLE,
        'Thinkmay CloudPC sudah digunakan oleh 60k++ pengguna'
    );

    vi.set(Contents.SOCIALPROOF_LEGALITY, 'Xem hướng dẫn pháp lý');
    en.set(Contents.SOCIALPROOF_LEGALITY, 'Explore Legality Guide');
    id.set(Contents.SOCIALPROOF_LEGALITY, 'Jelajahi Panduan Legalitas');

    vi.set(Contents.SOCIALPROOF_TRUST, 'Thăm Trung tâm Tin cậy');
    en.set(Contents.SOCIALPROOF_TRUST, 'Visit the Trust Center');
    id.set(Contents.SOCIALPROOF_TRUST, 'Kunjungi Pusat Kepercayaan');

    vi.set(Contents.SOCIALPROOF_1_TITLE, 'Hạ tầng luôn sẵn sàng');
    en.set(Contents.SOCIALPROOF_1_TITLE, 'Infrastructure always ready');
    id.set(Contents.SOCIALPROOF_1_TITLE, 'Infrastruktur selalu siap');

    vi.set(
        Contents.SOCIALPROOF_1_DESC,
        'Server ổn định, độ trễ đạt dưới 100ms, kết nối nhanh chóng'
    );
    en.set(
        Contents.SOCIALPROOF_1_DESC,
        'Stable servers, latency under 100ms, fast connections'
    );
    id.set(
        Contents.SOCIALPROOF_1_DESC,
        'Server stabil, latensi di bawah 100ms, koneksi cepat'
    );

    vi.set(Contents.SOCIALPROOF_2_TITLE, '60K+ người dùng');
    en.set(Contents.SOCIALPROOF_2_TITLE, '60K+ Users');
    id.set(Contents.SOCIALPROOF_2_TITLE, '60K+ Pengguna');

    vi.set(
        Contents.SOCIALPROOF_2_DESC,
        'Đã có hơn 60 ngàn người đăng kí dịch vụ'
    );
    en.set(
        Contents.SOCIALPROOF_2_DESC,
        'Over 60 thousand people have registered'
    );
    id.set(
        Contents.SOCIALPROOF_2_DESC,
        'Lebih dari 60 ribu orang telah mendaftar'
    );

    vi.set(Contents.SOCIALPROOF_3_TITLE, 'Độ phủ rộng');
    en.set(Contents.SOCIALPROOF_3_TITLE, 'Wide coverage');
    id.set(Contents.SOCIALPROOF_3_TITLE, 'Cakupan luas');

    vi.set(
        Contents.SOCIALPROOF_3_DESC,
        'Thinkmay CloudPC có hệ thống server ở cả miền bắc và miền nam'
    );
    en.set(
        Contents.SOCIALPROOF_3_DESC,
        'Thinkmay CloudPC has servers in both northern and southern regions'
    );
    id.set(
        Contents.SOCIALPROOF_3_DESC,
        'Thinkmay CloudPC memiliki server di wilayah utara dan selatan'
    );

    vi.set(Contents.SOCIALPROOF_4_TITLE, 'Cam kết hoàn tiền');
    en.set(Contents.SOCIALPROOF_4_TITLE, 'Money-back guarantee');
    id.set(Contents.SOCIALPROOF_4_TITLE, 'Jaminan uang kembali');

    vi.set(
        Contents.SOCIALPROOF_4_DESC,
        'Lên tới 5 ngày đầu tiên, nếu sản phẩm không đáp ứng được yêu cầu.'
    );
    en.set(
        Contents.SOCIALPROOF_4_DESC,
        'Up to the first 5 days, if the product does not meet expectations.'
    );
    id.set(
        Contents.SOCIALPROOF_4_DESC,
        'Hingga 5 hari pertama, jika produk tidak memenuhi harapan.'
    );

    //TODO: FIX ERRORS Applications
    vi.set(
        Contents.APPLICATIONS_TITLE,
        'Những game được chơi nhiều trên Thinkmay'
    );
    en.set(Contents.APPLICATIONS_TITLE, 'Popular Games on Thinkmay');
    id.set(Contents.APPLICATIONS_TITLE, 'Game Populer di Thinkmay');

    vi.set(
        Contents.APPLICATIONS_DESC,
        'Thinkmay CloudPC sở hữu kho game đa dạng và phong phú,\nngoài ra bạn còn có thể tự tải những tựa game mà mình yêu thích, hoặc cài đặt thêm các bản mod, tùy biến'
    );
    en.set(
        Contents.APPLICATIONS_DESC,
        'Thinkmay CloudPC offers a diverse and rich game library,\nand you can also upload your favorite games or install mods and customizations'
    );
    id.set(
        Contents.APPLICATIONS_DESC,
        'Thinkmay CloudPC memiliki perpustakaan game yang beragam dan kaya,\ndan kamu juga bisa mengunggah game favoritmu atau memasang mod dan kustomisasi'
    );

    vi.set(Contents.APPLICATIONS_TAG_NEW, 'Game mới');
    en.set(Contents.APPLICATIONS_TAG_NEW, 'New Game');
    id.set(Contents.APPLICATIONS_TAG_NEW, 'Game Baru');

    vi.set(Contents.APPLICATIONS_BUTTON_PLAY, 'Chơi ngay');
    en.set(Contents.APPLICATIONS_BUTTON_PLAY, 'Play Now');
    id.set(Contents.APPLICATIONS_BUTTON_PLAY, 'Main Sekarang');

    vi.set(Contents.APPLICATIONS_BUTTON_SUPPORT, 'Nhà phát hành');
    en.set(Contents.APPLICATIONS_BUTTON_SUPPORT, 'Publisher');
    id.set(Contents.APPLICATIONS_BUTTON_SUPPORT, 'Penerbit');
    vi.set(
        Contents.APPLICATIONS_DESC_1,
        'Thinkmay CloudPC sở hữu kho game đa dạng và phong phú,'
    );
    en.set(
        Contents.APPLICATIONS_DESC_1,
        'Thinkmay CloudPC offers a diverse and rich game library,'
    );
    id.set(
        Contents.APPLICATIONS_DESC_1,
        'Thinkmay CloudPC memiliki perpustakaan game yang beragam dan kaya,'
    );

    vi.set(
        Contents.APPLICATIONS_DESC_2,
        'ngoài ra bạn còn có thể tự tải những tựa game mà mình yêu thích, hoặc cài đặt thêm các bản mod, tùy biến'
    );
    en.set(
        Contents.APPLICATIONS_DESC_2,
        'you can also upload your favorite games or install mods and customizations'
    );
    id.set(
        Contents.APPLICATIONS_DESC_2,
        'kamu juga bisa mengunggah game favoritmu atau memasang mod dan kustomisasi'
    );

    // Footer
    vi.set(
        Contents.FOOTER_DESC,
        'Thinkmay CloudPC giúp bạn chơi game trên mọi thiết bị mà không cần cài đặt'
    );
    en.set(
        Contents.FOOTER_DESC,
        'Thinkmay CloudPC helps you play games on any device without installation'
    );
    id.set(
        Contents.FOOTER_DESC,
        'Thinkmay CloudPC membantu Anda main game di semua perangkat tanpa instalasi'
    );

    vi.set(Contents.FOOTER_COMPANY, 'Công ty');
    en.set(Contents.FOOTER_COMPANY, 'Company');
    id.set(Contents.FOOTER_COMPANY, 'Perusahaan');

    vi.set(Contents.FOOTER_HELP, 'Trung tâm trợ giúp');
    en.set(Contents.FOOTER_HELP, 'Help Center');
    id.set(Contents.FOOTER_HELP, 'Pusat Bantuan');

    vi.set(Contents.FOOTER_CONTACT, 'Liên hệ');
    en.set(Contents.FOOTER_CONTACT, 'Contact Us');
    id.set(Contents.FOOTER_CONTACT, 'Hubungi Kami');

    vi.set(Contents.FOOTER_LEGAL, 'Pháp lý');
    en.set(Contents.FOOTER_LEGAL, 'Legal');
    id.set(Contents.FOOTER_LEGAL, 'Legalitas');

    vi.set(Contents.ALL_RIGHTS_RESERVED, 'Đã đăng ký bản quyền.');
    en.set(Contents.ALL_RIGHTS_RESERVED, 'All Rights Reserved.');
    id.set(Contents.ALL_RIGHTS_RESERVED, 'Seluruh Hak Dilindungi.');

    // FAQ
    // Tiêu đề chính
    vi.set(Contents.FAQ_TITLE_1, 'Những câu hỏi thường gặp');
    en.set(Contents.FAQ_TITLE_1, 'Frequently Asked Questions');
    id.set(Contents.FAQ_TITLE_1, 'Pertanyaan yang Sering Diajukan');

    vi.set(
        Contents.FAQ_DESC,
        'Bạn có thể nhắn tin trong phần hỗ trợ người dùng nếu bạn có những câu hỏi khác'
    );
    en.set(
        Contents.FAQ_DESC,
        'You can message our customer support if you have other questions'
    );
    id.set(
        Contents.FAQ_DESC,
        'Kamu dapat menghubungi dukungan pengguna jika memiliki pertanyaan lain'
    );

    // Group 1: Giới thiệu
    vi.set(Contents.FAQ_Q1, 'Thinkmay Cloud PC là gì?');
    vi.set(
        Contents.FAQ_A1,
        'Thinkmay Cloud PC là một dịch vụ máy tính cá nhân ảo được cung cấp qua đám mây...'
    );
    en.set(Contents.FAQ_Q1, 'What is Thinkmay Cloud PC?');
    en.set(
        Contents.FAQ_A1,
        'Thinkmay Cloud PC is a virtual personal computer service provided via the cloud...'
    );
    id.set(Contents.FAQ_Q1, 'Apa itu Thinkmay Cloud PC?');
    id.set(
        Contents.FAQ_A1,
        'Thinkmay Cloud PC adalah layanan komputer pribadi virtual yang disediakan melalui cloud...'
    );

    vi.set(
        Contents.FAQ_Q2,
        'Tôi có thể cài đặt các phần mềm trên Thinkmay Cloud PC không?'
    );
    vi.set(
        Contents.FAQ_A2,
        'Có, bạn hoàn toàn có thể cài đặt và sử dụng các phần mềm trên Thinkmay Cloud PC giống như máy tính thông thường...'
    );
    en.set(Contents.FAQ_Q2, 'Can I install software on Thinkmay Cloud PC?');
    en.set(
        Contents.FAQ_A2,
        'Yes, you can install and use software on Thinkmay Cloud PC just like a regular computer...'
    );
    id.set(
        Contents.FAQ_Q2,
        'Bisakah saya menginstal perangkat lunak di Thinkmay Cloud PC?'
    );
    id.set(
        Contents.FAQ_A2,
        'Ya, kamu bisa menginstal dan menggunakan perangkat lunak di Thinkmay Cloud PC seperti komputer biasa...'
    );

    vi.set(
        Contents.FAQ_Q3,
        'Các thiết bị nào thì dùng được Cloud PC? Tôi có cần đầu tư thiết bị gì không?'
    );
    vi.set(
        Contents.FAQ_A3,
        'Mọi thiết bị thông minh với kết nối Internet đều có thể sử dụng Cloud PC...'
    );
    en.set(
        Contents.FAQ_Q3,
        'Which devices can use Cloud PC? Do I need special hardware?'
    );
    en.set(
        Contents.FAQ_A3,
        'Any smart device with an internet connection can use Cloud PC...'
    );
    id.set(
        Contents.FAQ_Q3,
        'Perangkat apa saja yang dapat menggunakan Cloud PC? Apakah saya perlu perangkat khusus?'
    );
    id.set(
        Contents.FAQ_A3,
        'Semua perangkat pintar dengan koneksi internet dapat menggunakan Cloud PC...'
    );

    vi.set(Contents.FAQ_Q4, 'Trên Thinkmay có thể chơi những game nào?');
    vi.set(
        Contents.FAQ_A4,
        'Hầu hết các game đều chơi được trên Thinkmay, trừ một số game online như LOL, PUBG, Valorant...'
    );
    en.set(Contents.FAQ_Q4, 'Which games can be played on Thinkmay?');
    en.set(
        Contents.FAQ_A4,
        'Most games are playable on Thinkmay, except for some online games like LOL, PUBG, Valorant...'
    );
    id.set(Contents.FAQ_Q4, 'Game apa saja yang bisa dimainkan di Thinkmay?');
    id.set(
        Contents.FAQ_A4,
        'Sebagian besar game bisa dimainkan di Thinkmay, kecuali beberapa game online seperti LOL, PUBG, Valorant...'
    );

    // Group 2: Thanh toán, chính sách
    vi.set(Contents.FAQ_Q5, 'Có được chơi thử không? Chơi thử như thế nào?');
    vi.set(
        Contents.FAQ_A5,
        'Bạn có thể truy cập website và liên hệ hỗ trợ để yêu cầu chơi thử hoặc đăng ký demo...'
    );
    en.set(Contents.FAQ_Q5, 'Can I try it first? How?');
    en.set(
        Contents.FAQ_A5,
        'You can visit the website and contact support to request a trial or demo...'
    );
    id.set(
        Contents.FAQ_Q5,
        'Bisakah saya mencoba terlebih dahulu? Bagaimana caranya?'
    );
    id.set(
        Contents.FAQ_A5,
        'Kamu bisa mengunjungi situs web dan menghubungi dukungan untuk meminta demo atau uji coba...'
    );

    vi.set(
        Contents.FAQ_Q6,
        'Mất bao lâu sau khi thanh toán thì tôi có thể sử dụng Thinkmay CloudPC?'
    );
    vi.set(
        Contents.FAQ_A6,
        'Hệ thống xác nhận tự động, thông thường chỉ mất 3–5 phút sau khi thanh toán thành công...'
    );
    en.set(
        Contents.FAQ_Q6,
        'How long after payment can I use Thinkmay CloudPC?'
    );
    en.set(
        Contents.FAQ_A6,
        'The system confirms automatically, usually within 3–5 minutes after successful payment...'
    );
    id.set(
        Contents.FAQ_Q6,
        'Berapa lama setelah pembayaran saya bisa menggunakan Thinkmay CloudPC?'
    );
    id.set(
        Contents.FAQ_A6,
        'Sistem akan mengonfirmasi secara otomatis, biasanya dalam waktu 3–5 menit setelah pembayaran...'
    );

    vi.set(
        Contents.FAQ_Q7,
        'Chính sách hoàn tiền của Thinkmay nếu người dùng gặp lỗi là gì?'
    );
    vi.set(
        Contents.FAQ_A7,
        'Thinkmay hỗ trợ hoàn tiền tối đa 80%, trong vòng 5 ngày và 3 giờ chơi đầu tiên nếu lỗi từ phía Thinkmay...'
    );
    en.set(
        Contents.FAQ_Q7,
        'What is Thinkmay’s refund policy if there are errors?'
    );
    en.set(
        Contents.FAQ_A7,
        'Thinkmay offers up to 80% refund within 5 days and 3 hours of usage if the error is from Thinkmay...'
    );
    id.set(
        Contents.FAQ_Q7,
        'Apa kebijakan pengembalian dana Thinkmay jika terjadi kesalahan?'
    );
    id.set(
        Contents.FAQ_A7,
        'Thinkmay menawarkan pengembalian dana hingga 80% dalam 5 hari dan 3 jam pertama jika kesalahan berasal dari Thinkmay...'
    );

    // Group 3: Hỗ trợ kỹ thuật
    vi.set(Contents.FAQ_Q8, 'Tôi phải làm gì nếu gặp lỗi và bị giật/lag?');
    vi.set(
        Contents.FAQ_A8,
        'Kiểm tra lại kết nối mạng. Nếu được, hãy dùng cáp Ethernet thay vì Wi-Fi để giảm độ trễ...'
    );
    en.set(Contents.FAQ_Q8, 'What should I do if I experience lag or errors?');
    en.set(
        Contents.FAQ_A8,
        'Check your internet connection. Use Ethernet instead of Wi-Fi for lower latency...'
    );
    id.set(
        Contents.FAQ_Q8,
        'Apa yang harus saya lakukan jika mengalami lag atau error?'
    );
    id.set(
        Contents.FAQ_A8,
        'Periksa koneksi internetmu. Gunakan kabel Ethernet jika memungkinkan untuk mengurangi lag...'
    );

    vi.set(Contents.FAQ_Q9, 'Làm sao để tối ưu đường truyền mạng?');
    vi.set(
        Contents.FAQ_A9,
        'Hãy chọn máy chủ gần vị trí của bạn nhất để giảm độ trễ và tăng hiệu suất...'
    );
    en.set(Contents.FAQ_Q9, 'How to optimize network performance?');
    en.set(
        Contents.FAQ_A9,
        'Choose the server closest to your location to reduce latency...'
    );
    id.set(Contents.FAQ_Q9, 'Bagaimana cara mengoptimalkan koneksi jaringan?');
    id.set(
        Contents.FAQ_A9,
        'Pilih server yang paling dekat dengan lokasi kamu untuk mengurangi latency...'
    );

    vi.set(Contents.FAQ_Q10, 'Làm sao để tối ưu fps trong game?');
    vi.set(
        Contents.FAQ_A10,
        'Hãy giảm cấu hình đồ họa và tắt các hiệu ứng không cần thiết trong game...'
    );
    en.set(Contents.FAQ_Q10, 'How to optimize FPS in games?');
    en.set(
        Contents.FAQ_A10,
        'Lower graphics settings and disable unnecessary effects in the game...'
    );
    id.set(Contents.FAQ_Q10, 'Bagaimana cara mengoptimalkan FPS dalam game?');
    id.set(
        Contents.FAQ_A10,
        'Turunkan pengaturan grafis dan matikan efek yang tidak perlu dalam game...'
    );

    vi.set(
        Contents.FAQ_Q11,
        'Làm sao nếu tất cả các cách trên đều không giải quyết được vấn đề?'
    );
    vi.set(
        Contents.FAQ_A11,
        'Cuối cùng, hãy liên hệ bộ phận hỗ trợ của Thinkmay để được kiểm tra lại hệ thống...'
    );
    en.set(Contents.FAQ_Q11, 'What if none of the above methods work?');
    en.set(
        Contents.FAQ_A11,
        'Finally, contact Thinkmay’s support team to check the system...'
    );
    id.set(
        Contents.FAQ_Q11,
        'Bagaimana jika semua cara di atas tidak berhasil?'
    );
    id.set(
        Contents.FAQ_A11,
        'Terakhir, hubungi dukungan Thinkmay untuk memeriksa kembali sistem...'
    );

    // vi.ts
    vi.set(Contents.PRICING_NO_WAITING_LINE, 'Không có hàng chờ');
    vi.set(Contents.PRICING_MULTIPLE_CLUSTER, 'Luôn luôn có server backup');
    vi.set(Contents.PRICING_TIME_UNLIMITED, 'Giới hạn giờ chơi');
    vi.set(Contents.PRICING_STORAGE_LIMIT_NONE, 'Giới hạn dung lượng tối đa');

    vi.set(Contents.PRICING_REFUND_DAY, 'Hoàn tiền trong');
    vi.set(Contents.DAY_SUFFIX, 'ngày đầu');

    vi.set(Contents.PRICING_REFUND_TIME, 'Hoàn tiền trong');
    vi.set(Contents.HOUR_PLAY_SUFFIX, 'h chơi đầu');

    vi.set(Contents.PRICING_TIME_LIMIT, 'Tối đa');
    vi.set(Contents.HOUR_USAGE_SUFFIX, 'h chơi');

    vi.set(Contents.PRICING_STORAGE_LIMIT, 'Giới hạn tối đa');
    vi.set(Contents.STORAGE_SUFFIX, 'GB dung lượng');
    vi.set(Contents.STORAGE_CREDIT_SUFFIX, 'credit dung lượng');

    // en.ts
    en.set(Contents.PRICING_NO_WAITING_LINE, 'No waiting line');
    en.set(Contents.PRICING_MULTIPLE_CLUSTER, 'Always has backup server');
    en.set(Contents.PRICING_TIME_UNLIMITED, 'Limited play time');
    en.set(Contents.PRICING_STORAGE_LIMIT_NONE, 'Storage limit');

    en.set(Contents.PRICING_REFUND_DAY, 'Refund within first');
    en.set(Contents.DAY_SUFFIX, 'days');

    en.set(Contents.PRICING_REFUND_TIME, 'Refund within first');
    en.set(Contents.HOUR_PLAY_SUFFIX, 'h of play');

    en.set(Contents.PRICING_TIME_LIMIT, 'Up to');
    en.set(Contents.HOUR_USAGE_SUFFIX, 'h of usage');

    en.set(Contents.PRICING_STORAGE_LIMIT, 'Up to');
    en.set(Contents.STORAGE_SUFFIX, 'GB storage');
    en.set(Contents.STORAGE_CREDIT_SUFFIX, 'storage credit');

    // id.ts
    id.set(Contents.PRICING_NO_WAITING_LINE, 'Tanpa antrean');
    id.set(
        Contents.PRICING_MULTIPLE_CLUSTER,
        'Selalu tersedia server cadangan'
    );

    // Tách giá trị động ra
    id.set(Contents.PRICING_REFUND_DAY, 'Pengembalian dalam');
    id.set(Contents.PRICING_REFUND_TIME, 'Pengembalian dalam');
    id.set(Contents.PRICING_TIME_LIMIT, 'Maksimal');
    id.set(Contents.PRICING_STORAGE_LIMIT, 'Maksimal');
    id.set(Contents.PRICING_STORAGE_CREDIT, '');

    id.set(Contents.PRICING_TIME_UNLIMITED, 'Batas waktu bermain');
    id.set(Contents.PRICING_STORAGE_LIMIT_NONE, 'Batas penyimpanan maksimum');

    // Suffix phần đơn vị
    id.set(Contents.DAY_SUFFIX, 'hari pertama');
    id.set(Contents.HOUR_PLAY_SUFFIX, 'jam pertama bermain');
    id.set(Contents.HOUR_USAGE_SUFFIX, 'jam penggunaan');
    id.set(Contents.STORAGE_SUFFIX, 'penyimpanan');
    id.set(Contents.STORAGE_CREDIT_SUFFIX, 'kredit penyimpanan');

    vi.set(Contents.REFUND_POLICY, 'Chính sách hoàn tiền');
    en.set(Contents.REFUND_POLICY, 'Refund');
    id.set(Contents.REFUND_POLICY, 'Refund');

    vi.set(Contents.REFUND_POLICY, 'Chính sách hoàn tiền');
    en.set(Contents.REFUND_POLICY, 'Refund Policy');
    id.set(Contents.REFUND_POLICY, 'Kebijakan Pengembalian Dana');

    vi.set(Contents.POLICY, 'Chính sách');
    en.set(Contents.POLICY, 'Policy');
    id.set(Contents.POLICY, 'Kebijakan');

    vi.set(Contents.CONTACT_US, 'Cần hỗ trợ? Liên hệ chúng tôi');
    en.set(Contents.CONTACT_US, 'Need help? Contact us');
    id.set(Contents.CONTACT_US, 'Butuh bantuan? Hubungi kami');

    vi.set(
        Contents.REFUND_DESCRIPTION,
        'Thinkmay cam kết mang đến trải nghiệm dịch vụ CloudPC tốt nhất. Trong trường hợp bạn cảm thấy không hài lòng vì bất kỳ lý do nào, chúng tôi sẵn sàng hỗ trợ và hoàn lại 80% tiền theo các điều kiện sau:'
    );
    en.set(
        Contents.REFUND_DESCRIPTION,
        'Thinkmay is committed to providing the best CloudPC service experience. If you are dissatisfied for any reason, we are ready to support and refund 80% under the following conditions:'
    );
    id.set(
        Contents.REFUND_DESCRIPTION,
        'Thinkmay berkomitmen untuk memberikan pengalaman layanan CloudPC terbaik. Jika Anda tidak puas karena alasan apa pun, kami siap mendukung dan mengembalikan 80% sesuai dengan ketentuan berikut:'
    );

    vi.set(Contents.PACKAGE_499K, 'Gói 499K');
    en.set(Contents.PACKAGE_499K, '499K Package');
    id.set(Contents.PACKAGE_499K, 'Paket 499K');

    vi.set(Contents.PACKAGE_299K, 'Gói 299K');
    en.set(Contents.PACKAGE_299K, '299K Package');
    id.set(Contents.PACKAGE_299K, 'Paket 299K');

    vi.set(Contents.PACKAGE_199K, 'Gói 199K');
    en.set(Contents.PACKAGE_199K, '199K Package');
    id.set(Contents.PACKAGE_199K, 'Paket 199K');

    vi.set(
        Contents.REQUEST_TIME,
        'Thời gian yêu cầu: Trong vòng {x} ngày kể từ khi được cấp máy.'
    );
    en.set(
        Contents.REQUEST_TIME,
        'Request time: Within {x} days from activation.'
    );
    id.set(
        Contents.REQUEST_TIME,
        'Waktu permintaan: Dalam {x} hari sejak aktivasi.'
    );

    vi.set(Contents.TOTAL_USAGE, 'Tổng thời gian sử dụng: dưới {y} giờ.');
    en.set(Contents.TOTAL_USAGE, 'Total usage time: under {y} hours.');
    id.set(
        Contents.TOTAL_USAGE,
        'Total waktu penggunaan: kurang dari {y} jam.'
    );

    vi.set(Contents.REFUND_PROCESS_TITLE, 'Quy trình yêu cầu hoàn tiền:');
    en.set(Contents.REFUND_PROCESS_TITLE, 'Refund Request Process:');
    id.set(
        Contents.REFUND_PROCESS_TITLE,
        'Proses Permintaan Pengembalian Dana:'
    );

    vi.set(Contents.REFUND_STEP_1, 'Liên hệ qua Fanpage chính thức.');
    en.set(Contents.REFUND_STEP_1, 'Contact us via official Fanpage.');
    id.set(Contents.REFUND_STEP_1, 'Hubungi melalui Fanpage resmi.');

    vi.set(
        Contents.REFUND_STEP_2,
        'Cung cấp thông tin tài khoản và lý do yêu cầu hoàn tiền.'
    );
    en.set(
        Contents.REFUND_STEP_2,
        'Provide account details and refund reason.'
    );
    id.set(
        Contents.REFUND_STEP_2,
        'Berikan informasi akun dan alasan permintaan refund.'
    );

    vi.set(
        Contents.REFUND_STEP_3,
        'Yêu cầu sẽ được xử lý trong vòng 2 ngày làm việc.'
    );
    en.set(
        Contents.REFUND_STEP_3,
        'The request will be processed within 2 business days.'
    );
    id.set(
        Contents.REFUND_STEP_3,
        'Permintaan akan diproses dalam 2 hari kerja.'
    );

    vi.set(
        Contents.REFUND_NOTE,
        'Lưu ý: Chính sách không áp dụng cho các trường hợp vi phạm điều khoản sử dụng dịch vụ hoặc cố ý gây lỗi. Vui lòng trải nghiệm dịch vụ miễn phí trước khi đưa ra quyết định mua!'
    );
    en.set(
        Contents.REFUND_NOTE,
        'Note: The policy does not apply to violations of service terms or intentional faults. Please try the free service before making a purchase!'
    );
    id.set(
        Contents.REFUND_NOTE,
        'Catatan: Kebijakan ini tidak berlaku untuk pelanggaran syarat layanan atau kesalahan yang disengaja. Silakan coba layanan gratis sebelum membeli!'
    );
    return t;
}
