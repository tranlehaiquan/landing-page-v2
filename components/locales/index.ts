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

    //FAQ
    FAQ_HEADING,
    FAQ_SUBHEADING,
    FAQ_QA_0_0_Q,
    FAQ_QA_0_0_A,
    FAQ_QA_0_1_Q,
    FAQ_QA_0_1_A,
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

    vi.set(Contents.HERO_MAIN_P2, 'Chơi tất cả các game cấu hình cao, đồ họa đẹp trên mọi thiết bị, chỉ với kết nối internet');
    en.set(Contents.HERO_MAIN_P2, 'Play all high-end games with beautiful graphics on any device, just with internet connection');
    id.set(Contents.HERO_MAIN_P2, 'Main semua game high-end dengan grafis indah di perangkat apapun, hanya dengan koneksi internet');

    vi.set(Contents.HERO_MAIN_P3, 'Sử dụng hoàn toàn trên trình duyệt');
    en.set(Contents.HERO_MAIN_P3, 'Works entirely in your browser');
    id.set(Contents.HERO_MAIN_P3, 'Berjalan sepenuhnya di browser Anda');

    vi.set(Contents.HERO_MAIN_BUTTON, 'Sử dụng ngay');
    en.set(Contents.HERO_MAIN_BUTTON, 'Get Started Now');
    id.set(Contents.HERO_MAIN_BUTTON, 'Mulai Sekarang');

    // Feature
    vi.set(Contents.FEATURE_TITLE, 'Tương lai của chơi game là chơi game trên "mây"');
    en.set(Contents.FEATURE_TITLE, 'The Future of Gaming is Cloud Gaming');
    id.set(Contents.FEATURE_TITLE, 'Masa Depan Gaming adalah Cloud Gaming');

    vi.set(Contents.FEATURE_DESC, 'Tại sao phải mua gaming PC trong khi bạn có thể chơi game...');
    en.set(Contents.FEATURE_DESC, 'Why buy a gaming PC when you can just play games...');
    id.set(Contents.FEATURE_DESC, 'Kenapa beli PC gaming kalau bisa langsung main game...');

    vi.set(Contents.FEATURE_1_TITLE, 'Mọi lúc, mọi nơi, mọi thiết bị');
    en.set(Contents.FEATURE_1_TITLE, 'Anytime, Anywhere, Any Device');
    id.set(Contents.FEATURE_1_TITLE, 'Kapan saja, Di mana saja, Di perangkat apa saja');

    vi.set(Contents.FEATURE_1_DESC, 'Từ từ đã, cái gì, chơi game AAA trên điện thoại và laptop á?\nThế bây giờ ngồi cafe, nằm trên giường cũng chơi được game AAA?');
    en.set(Contents.FEATURE_1_DESC, 'Wait, what? Playing AAA games on phone and laptop?\nSo now you can play AAA games even at cafe or on bed?');
    id.set(Contents.FEATURE_1_DESC, 'Tunggu, apa? Main game AAA di ponsel dan laptop?\nSekarang kamu bisa main di kafe atau di tempat tidur?');

    vi.set(Contents.FEATURE_2_TITLE, 'Không chờ đợi, bật là chơi, tối ưu từ A-Z');
    en.set(Contents.FEATURE_2_TITLE, 'No Waiting, Just Play, Fully Optimized');
    id.set(Contents.FEATURE_2_TITLE, 'Tanpa Menunggu, Langsung Main, Dioptimalkan Total');

    vi.set(Contents.FEATURE_2_DESC, 'Lại còn có game được tải sẵn luôn? Không cần phải đi mày mò cài Việt Hóa?\nXong rồi cũng không cần phải đi mày mò setting, tất cả đã được tối ưu sẵn?');
    en.set(Contents.FEATURE_2_DESC, 'Games are pre-installed? No need to look for localization?\nAnd no need to tweak settings? Everything is pre-optimized?');
    id.set(Contents.FEATURE_2_DESC, 'Game sudah terpasang? Tidak perlu cari lokalisasi?\nDan tidak perlu atur setting? Semuanya sudah optimal?');

    vi.set(Contents.FEATURE_LINK, 'Tìm hiểu sâu hơn về CloudPC');
    en.set(Contents.FEATURE_LINK, 'Learn more about CloudPC');
    id.set(Contents.FEATURE_LINK, 'Pelajari lebih lanjut tentang CloudPC');

    // CTA
    vi.set(Contents.CTA_TITLE, 'Bắt đầu sử dụng Thinkmay CloudPC ngay bây giờ');
    en.set(Contents.CTA_TITLE, 'Start using Thinkmay CloudPC now');
    id.set(Contents.CTA_TITLE, 'Mulai gunakan Thinkmay CloudPC sekarang');

    vi.set(Contents.CTA_DESC, 'Hoặc nhắn tin hỗ trợ để được trải nghiệm miễn phí');
    en.set(Contents.CTA_DESC, 'Or message support for a free trial');
    id.set(Contents.CTA_DESC, 'Atau kirim pesan ke support untuk uji coba gratis');

    vi.set(Contents.CTA_BUTTON, 'Sử dụng ngay');
    en.set(Contents.CTA_BUTTON, 'Get Started');
    id.set(Contents.CTA_BUTTON, 'Mulai Sekarang');

    // Social Proof
    vi.set(Contents.SOCIALPROOF_TITLE, 'Sản phẩm được tin dùng');
    en.set(Contents.SOCIALPROOF_TITLE, 'A Trusted Product');
    id.set(Contents.SOCIALPROOF_TITLE, 'Produk yang Dipercaya');

    vi.set(Contents.SOCIALPROOF_SUBTITLE, 'Thinkmay CloudPC đã có 60k++ người sử dụng');
    en.set(Contents.SOCIALPROOF_SUBTITLE, 'Thinkmay CloudPC has 60k++ users');
    id.set(Contents.SOCIALPROOF_SUBTITLE, 'Thinkmay CloudPC sudah digunakan oleh 60k++ pengguna');

    vi.set(Contents.SOCIALPROOF_LEGALITY, 'Xem hướng dẫn pháp lý');
    en.set(Contents.SOCIALPROOF_LEGALITY, 'Explore Legality Guide');
    id.set(Contents.SOCIALPROOF_LEGALITY, 'Jelajahi Panduan Legalitas');

    vi.set(Contents.SOCIALPROOF_TRUST, 'Thăm Trung tâm Tin cậy');
    en.set(Contents.SOCIALPROOF_TRUST, 'Visit the Trust Center');
    id.set(Contents.SOCIALPROOF_TRUST, 'Kunjungi Pusat Kepercayaan');

    vi.set(Contents.SOCIALPROOF_1_TITLE, 'Hạ tầng luôn sẵn sàng');
    en.set(Contents.SOCIALPROOF_1_TITLE, 'Infrastructure always ready');
    id.set(Contents.SOCIALPROOF_1_TITLE, 'Infrastruktur selalu siap');

    vi.set(Contents.SOCIALPROOF_1_DESC, 'Server ổn định, độ trễ đạt dưới 100ms, kết nối nhanh chóng');
    en.set(Contents.SOCIALPROOF_1_DESC, 'Stable servers, latency under 100ms, fast connections');
    id.set(Contents.SOCIALPROOF_1_DESC, 'Server stabil, latensi di bawah 100ms, koneksi cepat');

    vi.set(Contents.SOCIALPROOF_2_TITLE, '60K+ người dùng');
    en.set(Contents.SOCIALPROOF_2_TITLE, '60K+ Users');
    id.set(Contents.SOCIALPROOF_2_TITLE, '60K+ Pengguna');

    vi.set(Contents.SOCIALPROOF_2_DESC, 'Đã có hơn 60 ngàn người đăng kí dịch vụ');
    en.set(Contents.SOCIALPROOF_2_DESC, 'Over 60 thousand people have registered');
    id.set(Contents.SOCIALPROOF_2_DESC, 'Lebih dari 60 ribu orang telah mendaftar');

    vi.set(Contents.SOCIALPROOF_3_TITLE, 'Độ phủ rộng');
    en.set(Contents.SOCIALPROOF_3_TITLE, 'Wide coverage');
    id.set(Contents.SOCIALPROOF_3_TITLE, 'Cakupan luas');

    vi.set(Contents.SOCIALPROOF_3_DESC, 'Thinkmay CloudPC có hệ thống server ở cả miền bắc và miền nam');
    en.set(Contents.SOCIALPROOF_3_DESC, 'Thinkmay CloudPC has servers in both northern and southern regions');
    id.set(Contents.SOCIALPROOF_3_DESC, 'Thinkmay CloudPC memiliki server di wilayah utara dan selatan');

    vi.set(Contents.SOCIALPROOF_4_TITLE, 'Cam kết hoàn tiền');
    en.set(Contents.SOCIALPROOF_4_TITLE, 'Money-back guarantee');
    id.set(Contents.SOCIALPROOF_4_TITLE, 'Jaminan uang kembali');

    vi.set(Contents.SOCIALPROOF_4_DESC, 'Lên tới 5 ngày đầu tiên, nếu sản phẩm không đáp ứng được yêu cầu.');
    en.set(Contents.SOCIALPROOF_4_DESC, 'Up to the first 5 days, if the product does not meet expectations.');
    id.set(Contents.SOCIALPROOF_4_DESC, 'Hingga 5 hari pertama, jika produk tidak memenuhi harapan.');

    //TODO: FIX ERRORS Applications 
    vi.set(Contents.APPLICATIONS_TITLE, 'Những game được chơi nhiều trên Thinkmay');
    en.set(Contents.APPLICATIONS_TITLE, 'Popular Games on Thinkmay');
    id.set(Contents.APPLICATIONS_TITLE, 'Game Populer di Thinkmay');

    vi.set(Contents.APPLICATIONS_DESC, 'Thinkmay CloudPC sở hữu kho game đa dạng và phong phú,\nngoài ra bạn còn có thể tự tải những tựa game mà mình yêu thích, hoặc cài đặt thêm các bản mod, tùy biến');
    en.set(Contents.APPLICATIONS_DESC, 'Thinkmay CloudPC offers a diverse and rich game library,\nand you can also upload your favorite games or install mods and customizations');
    id.set(Contents.APPLICATIONS_DESC, 'Thinkmay CloudPC memiliki perpustakaan game yang beragam dan kaya,\ndan kamu juga bisa mengunggah game favoritmu atau memasang mod dan kustomisasi');

    vi.set(Contents.APPLICATIONS_TAG_NEW, 'Game mới');
    en.set(Contents.APPLICATIONS_TAG_NEW, 'New Game');
    id.set(Contents.APPLICATIONS_TAG_NEW, 'Game Baru');

    vi.set(Contents.APPLICATIONS_BUTTON_PLAY, 'Chơi ngay');
    en.set(Contents.APPLICATIONS_BUTTON_PLAY, 'Play Now');
    id.set(Contents.APPLICATIONS_BUTTON_PLAY, 'Main Sekarang');

    vi.set(Contents.APPLICATIONS_BUTTON_SUPPORT, 'Nhà phát hành');
    en.set(Contents.APPLICATIONS_BUTTON_SUPPORT, 'Publisher');
    id.set(Contents.APPLICATIONS_BUTTON_SUPPORT, 'Penerbit');
    vi.set(Contents.APPLICATIONS_DESC_1, 'Thinkmay CloudPC sở hữu kho game đa dạng và phong phú,');
    en.set(Contents.APPLICATIONS_DESC_1, 'Thinkmay CloudPC offers a diverse and rich game library,');
    id.set(Contents.APPLICATIONS_DESC_1, 'Thinkmay CloudPC memiliki perpustakaan game yang beragam dan kaya,');

    vi.set(Contents.APPLICATIONS_DESC_2, 'ngoài ra bạn còn có thể tự tải những tựa game mà mình yêu thích, hoặc cài đặt thêm các bản mod, tùy biến');
    en.set(Contents.APPLICATIONS_DESC_2, 'you can also upload your favorite games or install mods and customizations');
    id.set(Contents.APPLICATIONS_DESC_2, 'kamu juga bisa mengunggah game favoritmu atau memasang mod dan kustomisasi');


    // Footer
    vi.set(Contents.FOOTER_DESC, 'Thinkmay CloudPC giúp bạn chơi game trên mọi thiết bị mà không cần cài đặt');
    en.set(Contents.FOOTER_DESC, 'Thinkmay CloudPC helps you play games on any device without installation');
    id.set(Contents.FOOTER_DESC, 'Thinkmay CloudPC membantu Anda main game di semua perangkat tanpa instalasi');

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
    return t;
}
