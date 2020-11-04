var iconNavibar = document.getElementById("icon-navibar");
iconNavibar.addEventListener("click",function(){
    var catalog = document.getElementsByClassName("catalog")[0];
    catalog.classList.toggle("displaymenu__catalog")
});
// get product sale
function getProducts() {

    return products = [
        {
            logoInterret: "https://cdn.mediamart.vn/ProductOption/11-icon.png?v=03221",
            imageUrl: "https://cdn.mediamart.vn/Product/thumb_may-giat-inverter-8-kg-electrolux-ewf8025eqwa-OJWc5x.png",
            productUrl: "https://mediamart.vn/may-giat/electrolux/may-giat-inverter-8-kg-electrolux-ewf8025eqwa.htm",
            title1: "ELECTROLUX",
            title2: "8KG",
            description: "Máy Giặt 8 Kg Electrolux EWF8025EQWA",
            price: 10990000,
            saleOff: 32,
            bonous: 0,
            priceUnit: "đ",
        },
        {
            logoInterret: "https://cdn.mediamart.vn/ProductOption/11-icon.png?v=03221",
            imageUrl: "https://cdn.mediamart.vn/Product/thumb_may-giat-electrolux-8kg-say-5kg-eww8025dgwa-F2PHIY.jpg",
            productUrl: "https://mediamart.vn/may-giat/electrolux/may-giat-electrolux-8kg-say-5kg-eww8025dgwa.htm",
            title1: "ELECTROLUX",
            title2: "",
            description: "Máy Giặt Electrolux 8Kg +Sấy 5Kg EWW8025DGWA",
            price: 9990000,
            saleOff: 29,
            bonous: 100000,
            priceUnit: "đ",
        },
        {
            logoInterret: "https://cdn.mediamart.vn/ProductOption/11-icon.png?v=03221",
            imageUrl: "https://cdn.mediamart.vn/Product/thumb_may-say-quan-ao-electrolux-edv705hqwa-7kg-4bbLK1.png",
            productUrl: "https://mediamart.vn/may-say-quan-ao/electrolux/may-say-quan-ao-electrolux-edv705hqwa-7kg.htm",
            title1: "ELECTROLUX",
            title2: "7 KG",
            description: "Máy Sấy Quần Áo 7Kg Electrolux EDV705HQWA",
            price: 8290000,
            saleOff: 32,
            bonous: 890000,
            priceUnit: "đ",
        },
        {
            logoInterret: "https://cdn.mediamart.vn/ProductOption/11-icon.png?v=03221",
            imageUrl: "https://cdn.mediamart.vn/Product/thumb_may-say-quan-ao-electrolux-edv705hqwa-7kg-4bbLK1.png",
            productUrl: "https://mediamart.vn/may-giat/panasonic/may-giat-90-kg-panasonic-naf90a4hrv.htm",
            title1: "PANASONIC",
            title2: "9KG",
            description: "Máy Giặt 9.0 KG Panasonic NA-F90A4HRV",
            price: 6890000,
            saleOff: 7,
            bonous: 1100000,
            priceUnit: "đ",
        },
        {
            logoInterret: "https://cdn.mediamart.vn/ProductOption/11-icon.png?v=03221",
            imageUrl: "https://cdn.mediamart.vn/Product/thumb_-v1pFX1.png",
            productUrl: "https://mediamart.vn/tivi/sony/smart-tivi-sony-49-inch-49x8500g-4k-ultra-hdr-android-tv.htm",
            title1: "SONY",
            title2: "Smart TV 4K 49\" Android",
            description: "Smart Tivi Sony 49 Inch 49X8500G, 4K Ultra HDR, Android",
            price: 14900000,
            saleOff: 26,
            bonous: 0,
            priceUnit: "đ",
        },
        {
            logoInterret: "https://cdn.mediamart.vn/ProductOption/11-icon.png?v=03221",
            imageUrl: "https://cdn.mediamart.vn/Product/thumb_-6HiUt4.png",
            productUrl: "https://mediamart.vn/tivi/sony/smart-tivi-sony-43-inch-43x8500g-4k-ultra-hdr-android-tv.htm",
            title1: "SONY",
            title2: "Smart TV 4K 43\" Android",
            description: "Smart Tivi Sony 43 Inch 43X8500G, 4K Ultra HDR, Android",
            price: 11990000,
            saleOff: 27,
            bonous: 0,
            priceUnit: "đ",
        },
        {
            logoInterret: "https://cdn.mediamart.vn/ProductOption/11-icon.png?v=03221",
            imageUrl: "https://cdn.mediamart.vn/Product/thumb_-v1pFX1.png",
            productUrl: "https://mediamart.vn/tivi/lg/smart-tivi-led-lg-55-inch-55um7400pta-4k-uhd-hdr.htm",
            title1: "LG",
            title2: "SMART TV 4K 55\"",
            description: "Smart Tivi LG 4K UHD 55 Inch 55UM7400PTA AI ThinQ",
            price: 11490000,
            saleOff: 41,
            bonous: 0,
            priceUnit: "đ",
        },
        {
            logoInterret: "https://cdn.mediamart.vn/ProductOption/11-icon.png?v=03221",
            imageUrl: "https://cdn.mediamart.vn/Product/thumb_smart-tivi-samsung-4k-43-inch-43tu7000-79fu6o.png",
            productUrl: "https://mediamart.vn/tivi/samsung/qled-tivi-samsung-43q65-2019-43-inch-4k-hdr-smart-tv.htm",
            title1: "SAMSUNG",
            title2: "QLED TV 43\"",
            description: "QLED TV 4K Samsung 43Q65R 43 Inch UHD Smart Tivi",
            price: 10990000,
            saleOff: 43,
            bonous: 0,
            priceUnit: "đ",
        },
        {
            logoInterret: "https://cdn.mediamart.vn/ProductOption/11-icon.png?v=03221",
            imageUrl: "https://cdn.mediamart.vn/Product/thumb_-Q219M1.png",
            productUrl: "https://mediamart.vn/tu-lanh/toshiba/tu-lanh-toshiba-253l-inverter-grb31vuukg.htm",
            title1: "TOSHIBA",
            title2: "INVERTER 253 LÍT",
            description: "Tủ Lạnh Toshiba 253L Inverter GR-B31VU(UKG)",
            price: 9600000,
            saleOff: 19,
            bonous: 0,
            priceUnit: "đ",
        },
        {
            logoInterret: "https://cdn.mediamart.vn/ProductOption/11-icon.png?v=03221",
            imageUrl: "https://cdn.mediamart.vn/Product/thumb_-VJ113I.png",
            productUrl: "https://mediamart.vn/tu-lanh/electrolux/tu-lanh-electrolux-etb2502ja-inverter-225l.htm",
            title1: "ELECTROLUX",
            title2: "Inverter 225 Lít",
            description: "Tủ Lạnh Electrolux ETB2502J-A Inverter 225L",
            price: 6490000,
            saleOff: 16,
            bonous: 0,
            priceUnit: "đ",
        },
        {
            logoInterret: "https://cdn.mediamart.vn/ProductOption/11-icon.png?v=03221",
            imageUrl: "https://cdn.mediamart.vn/Product/thumb_-1acEuA.png",
            productUrl: "https://mediamart.vn/tu-lanh/toshiba/tu-lanh-toshiba-253l-inverter-grb31vuukg.htm",
            title1: "TOSHIBA",
            title2: "INVERTER 253 LÍT",
            description: "Tủ Lạnh Toshiba 253L Inverter GR-B31VU(UKG)",
            price: 6590000,
            saleOff: 19,
            bonous: 0,
            priceUnit: "đ",
        },
        {
            logoInterret: "https://cdn.mediamart.vn/ProductOption/11-icon.png?v=03221",
            imageUrl: "https://cdn.mediamart.vn/Product/thumb_-7134mu.jpg",
            productUrl: "https://mediamart.vn/tu-lanh/hitachi/tu-lanh-hitachi-inverter-510l-fw650pgv8gbk.htm",
            title1: "HITACHI",
            title2: "510 LÍT",
            description: "Tủ Lạnh Hitachi Inverter 510L FW650PGV8(GBK)",
            price: 19900000,
            saleOff: 21,
            bonous:  1390000,
            priceUnit: "đ",
        },
        {
            logoInterret: "https://cdn.mediamart.vn/ProductOption/11-icon.png?v=03221",
            imageUrl: "https://cdn.mediamart.vn/Product/thumb_-x54rGh.png",
            productUrl: "https://mediamart.vn/noi-chien-khong-dau/coex/noi-chien-khong-dau-coex-afc3105.htm",
            title1: "COEX",
            title2: "3.8L",
            description: "Nồi Chiên Không Dầu 3.8L Coex AFC-3105",
            price: 1690000,
            saleOff: 35,
            bonous: 0,
            priceUnit: "đ",
        },
        {
            logoInterret: "https://cdn.mediamart.vn/ProductOption/11-icon.png?v=03221",
            imageUrl: "https://cdn.mediamart.vn/Product/thumb_-YPFzD1.jpg",
            productUrl: "https://mediamart.vn/may-xay-sinh-to/roler/may-xay-sinh-to-roler-rb4104.htm",
            title1: "ROLER",
            title2: "600W",
            description: "Máy Xay Sinh Tố ROLER RB-4104",
            price: 999000,
            saleOff: 38,
            bonous: 0,
            priceUnit: "đ",
        },
        {
            logoInterret: "https://cdn.mediamart.vn/ProductOption/11-icon.png?v=03221",
            imageUrl: "https://cdn.mediamart.vn/Product/thumb_-8B7iFv.png",
            productUrl: "https://mediamart.vn/may-hut-am/electrolux/hut-am-dien-tu-electrolux-edh16sdaw.htm",
            title1: "ELECTROLUX",
            title2: "16L/NGÀY",
            description: "Hút Ẩm Điện Tử Electrolux EDH16SDAW",
            price: 4390000,
            saleOff: 36,
            bonous: 0,
            priceUnit: "đ",
        },
        {
            logoInterret: "https://cdn.mediamart.vn/ProductOption/11-icon.png?v=03221",
            imageUrl: "https://cdn.mediamart.vn/Product/thumb_may-loc-nuoc-kangaroo-6-loi-kg103a-vo-vtu-IpJgW7.png",
            productUrl: "https://cdn.mediamart.vn/Product/thumb_may-loc-nuoc-kangaroo-6-loi-kg103a-vo-vtu-IpJgW7.png",
            title1: "KANGAROO",
            title2: "15L/H",
            description: "Máy Lọc Nước Kangaroo 6 Cấp KG103A VTU",
            price: 3890000,
            saleOff: 27,
            bonous: 0,
            priceUnit: "đ",
        }
    ];
};

function genProductsHtml(products) {
    var content = ""
    for (var i = 0; i < products.length; i++){
        content = content + genItemProductHtml(products[i]);
    }
    return content;
}

function genItemProductHtml(product) {
    return `
    <div class="product__sale col-12 col-md-6 col-lg-3">
        <div style="width:100%; height:250px">
            <img style="display: block; width: 25%; margin: 15px;" src="${product.logoInterret}" alt="">
            <a href="${product.productUrl}"><img id="image__product-sale" style="display: block; height:75%; width:100%; margin: 0 auto;object-fit:contain; transition: transform .2s;" src="${product.imageUrl}" alt=""></a>
        </div>
        <div style="width:100%; height:180px">
            <p style="margin-left: 5%;"><b style="color: #0072bc;font-size: larger;">${product.title1} </b> ${product.title2}</p>
            <a style="color: black;" href="${product.productUrl}"><p style="margin-left: 5%;">${product.description}</p></a>
            <p style="color: #e3007b;margin-left: 5%; font-size: x-large;">${(formatMoney(product.price * (100 - product.saleOff) / 100)) + product.priceUnit}</p>
            <p style="text-decoration-line: line-through;margin-left: 5%;">${formatMoney(product.price) + product.priceUnit}</p>
            ${product.bonous != 0 ? `<p style="color: red;margin-left: 5%; margin-bottom: 5%;">Quà trị giá : <b>${formatMoney(product.bonous) + product.priceUnit}</b></p>` : ``}
            <span class="logo__sale">-${product.saleOff}%</span>
        </div>
    </div> 
    `;
}

function formatMoney(n) {
    return n.toLocaleString();
};
// get smartphone product
function getSmartphone() {
    return smartphones = [
        {
            logoInterret: "https://cdn.mediamart.vn/ProductOption/11-icon.png?v=03221",
            imageUrl: "https://cdn.mediamart.vn/Product/thumb_-5y0IeT.jpg",
            productUrl: "https://mediamart.vn/smartphones/apple/apple-iphone-11-pro-max-64g-gold.htm",
            title1: "APPLE",
            title2: "6.5",
            description: "Apple iphone 11 Pro Max 64G Gold",
            price: 33990000,
            saleOff: 23,
            bonous: 0,
            priceUnit: "đ",
        },
        {
            logoInterret: "https://cdn.mediamart.vn/ProductOption/11-icon.png?v=03221",
            imageUrl: "https://cdn.mediamart.vn/Product/thumb_dtdd-samsung-galaxy-a51-128g-sma515-blue-On5nR3.png",
            productUrl: "https://mediamart.vn/smartphones/samsung/dtdd-samsung-galaxy-a51-128g-sma515-blue.htm",
            title1: "SAM SUNG",
            title2: "6.5",
            description: "Điện thoại Samsung Galaxy A51 128G SM-A515 Blue",
            price: 8490000,
            saleOff: 15,
            bonous: 30000,
            priceUnit: "đ",
        },
        {
            logoInterret: "https://cdn.mediamart.vn/ProductOption/11-icon.png?v=03221",
            imageUrl: "https://cdn.mediamart.vn/Product/thumb_dien-thoai-oppo-cph2043reno3-den-0547ov.png",
            productUrl: "https://mediamart.vn/smartphones/oppo/dien-thoai-oppo-cph2043reno3-den.htm",
            title1: "OPPO",
            title2: "6.4",
            description: "Điện thoại Oppo CPH2043-Reno3 Đen",
            price: 9190000,
            saleOff: 13,
            bonous: 0,
            priceUnit: "đ",
        },
        {
            logoInterret: "https://cdn.mediamart.vn/ProductOption/11-icon.png?v=03221",
            imageUrl: "https://cdn.mediamart.vn/Product/thumb_-N5IUcB.png",
            productUrl: "https://mediamart.vn/smartphones/vivo/dien-thoai-di-dong-vivo-1916u10-4-64gb-den.htm",
            title1: "VIVO",
            title2: "6.35",
            description: "Điện Thoại VIVO 1916-U10 (4+64GB) (Đen)",
            price: 4290000,
            saleOff: 19,
            bonous: 500000,
            priceUnit: "đ",
        },
        {
            logoInterret: "https://cdn.mediamart.vn/ProductOption/11-icon.png?v=03221",
            imageUrl: "https://cdn.mediamart.vn/Product/thumb_-42DBv1.jpg",
            productUrl: "https://mediamart.vn/smartphones/vivo/dien-thoai-di-dong-vivo-1916u10-4-64gb-den.htm",
            title1: "VIVO",
            title2: "6.35",
            description: "Apple Iphone 11 64G Black",
            price: 21990000,
            saleOff: 21,
            bonous: 0,
            priceUnit: "đ",
        },
        {
            logoInterret: "https://cdn.mediamart.vn/ProductOption/11-icon.png?v=03221",
            imageUrl: "https://cdn.mediamart.vn/Product/thumb_dien-thoai-samsung-galaxy-a50s-64g-sma507f-Uh9jI4.png",
            productUrl: "https://mediamart.vn/smartphones/samsung/dien-thoai-samsung-galaxy-a50s.htm",
            title1: "SAMSUNG",
            title2: "6.35",
            description: "Điện thoại Samsung Galaxy A50s 64G SM-A507F Green",
            price: 7990000,
            saleOff: 22,
            bonous: 0,
            priceUnit: "đ",
        },
        {
            logoInterret: "https://cdn.mediamart.vn/ProductOption/11-icon.png?v=03221",
            imageUrl: "https://cdn.mediamart.vn/Product/thumb_dien-thoai-oppo-reno-2f-K1j33m.png",
            productUrl: "https://mediamart.vn/smartphones/oppo/dien-thoai-oppo-reno-2f.htm",
            title1: "OPPO",
            title2: "6.53",
            description: "Điện thoại Oppo Reno 2F Blue",
            price: 7990000,
            saleOff: 22,
            bonous: 0,
            priceUnit: "đ",
        },
        {
            logoInterret: "https://cdn.mediamart.vn/ProductOption/11-icon.png?v=03221",
            imageUrl: "https://cdn.mediamart.vn/Product/thumb_-6F6nAh.png",
            productUrl: "https://mediamart.vn/smartphones/samsung/dien-thoai-samsung-galaxy-s10-plus-dm.htm",
            title1: "SAM SUNG",
            title2: "6.4",
            description: "Điện thoại Samsung Galaxy S10 Plus (DM)",
            price: 23490000,
            saleOff: 3,
            bonous: 1000000,
            priceUnit: "đ",
        },
    ];
};

function genSmartphone(product) {
    return `
    <div class="product__sale col-12 col-md-6 col-lg-3" style="display: inline-block;">
        <div style="width:100%; height:250px">
            <img style="display: block; width: 25%; margin: 15px;" src="${product.logoInterret}" alt="">
            <a href="${product.productUrl}"><img id="image__product-sale" style="display: block; height:75%; width:100%; margin: 0 auto;object-fit:contain; transition: transform .2s;" src="${product.imageUrl}" alt=""></a>
        </div>
        <div style="width:100%; height:180px">
            <p style="margin-left: 5%;"><b style="color: #0072bc;font-size: larger;">${product.title1} </b> ${product.title2}</p>
            <a style="color: black;" href="${product.productUrl}"><p style="margin-left: 5%;">${product.description}</p></a>
            <p style="color: #e3007b;margin-left: 5%; font-size: x-large;">${(formatMoney(product.price * (100 - product.saleOff) / 100)) + product.priceUnit}</p>
            <p style="text-decoration-line: line-through;margin-left: 5%;">${formatMoney(product.price) + product.priceUnit}</p>
            ${product.bonous != 0 ? `<p style="color: red;margin-left: 5%; margin-bottom: 5%;">Quà trị giá : <b>${formatMoney(product.bonous) + product.priceUnit}</b></p>` : ``}
            <span class="logo__sale">-${product.saleOff}%</span>
        </div>
    </div> 
    `;
}

function genSmartphonesHtml(smartphones) {
    var content = ""
    for (var i = 0; i < smartphones.length; i++){
        content = content + genSmartphone(smartphones[i]);
    }
    return content;
}

// get laptp product

function getLaptops() {
    return laptops = [
        {
            logoInterret: "https://cdn.mediamart.vn/ProductOption/11-icon.png?v=03221",
            imageUrl: "https://cdn.mediamart.vn/Product/thumb_laptop-hp-15sfq1107tu-193q3pa-bac-win10-Slf7br.png",
            productUrl: "https://mediamart.vn/laptop/hp/laptop-hp-15sfq1107tu-193q3pa-bac-win10.htm",
            title1: "H3",
            title2: "CORE I3 || SSD 256GB",
            description: "Laptop HP 15s-fq1107TU 193Q3PA",
            price: 12290000,
            saleOff: 15,
            bonous: 1300000,
            priceUnit: "đ",
        },
        {
            logoInterret: "https://cdn.mediamart.vn/ProductOption/11-icon.png?v=03221",
            imageUrl: "https://cdn.mediamart.vn/Product/thumb_laptop-hp-15sfq1107tu-193q3pa-bac-win10-Slf7br.png",
            productUrl: "https://mediamart.vn/laptop/hp/laptop-hp-15sfq1107tu-193q3pa-bac-win10.htm",
            title1: "H3",
            title2: "CORE I3 || SSD 256GB",
            description: "Laptop HP 15s-fq1107TU 193Q3PA",
            price: 12290000,
            saleOff: 15,
            bonous: 1300000,
            priceUnit: "đ",
        },
        {
            logoInterret: "https://cdn.mediamart.vn/ProductOption/11-icon.png?v=03221",
            imageUrl: "https://cdn.mediamart.vn/Product/thumb_-dxuzGV.png",
            productUrl: "https://mediamart.vn/laptop/lenovo/laptop-lenovo-ideapad-s14515api-81ut00f1vn-den-win10.htm",
            title1: "LENOVO",
            title2: "RYREN 5 || SSD 512GB",
            description: "Laptop Lenovo IdeaPad S145-15API 81UT00F1VN",
            price: 13640000,
            saleOff: 15,
            bonous: 1640000,
            priceUnit: "đ",
        },
        {
            logoInterret: "https://cdn.mediamart.vn/ProductOption/11-icon.png?v=03221",
            imageUrl: "https://cdn.mediamart.vn/Product/thumb_-Me7qsu.png",
            productUrl: "https://mediamart.vn/laptop/dell/laptop-dell-inspiron-3593-70205744-win10-i51035g1-bac.htm",
            title1: "DELL",
            title2: "CORE I5 || SSD 256GB",
            description: "Laptop Dell Inspiron 3593 (70205744)",
            price: 18490000,
            saleOff: 14,
            bonous: 1450000,
            priceUnit: "đ",
        },
        {
            logoInterret: "https://cdn.mediamart.vn/ProductOption/11-icon.png?v=03221",
            imageUrl: "https://cdn.mediamart.vn/Product/thumb_-5D78I9.png",
            productUrl: "https://mediamart.vn/laptop/asus/laptop-asus-a412faek155t-bac-win-10.htm",
            title1: "ASUS",
            title2: "CORE I3 || FULL HD",
            description: "Laptop ASUS A412FA-EK155T",
            price: 13290000,
            saleOff: 26,
            bonous: 950000,
            priceUnit: "đ",
        },
        {
            logoInterret: "https://cdn.mediamart.vn/ProductOption/11-icon.png?v=03221",
            imageUrl: "https://cdn.mediamart.vn/Product/thumb_-5D78I9.png",
            productUrl: "https://mediamart.vn/laptop/asus/laptop-asus-a412faek155t-bac-win-10.htm",
            title1: "ASUS",
            title2: "CORE I3 || FULL HD",
            description: "Laptop ASUS A412FA-EK155T",
            price: 13290000,
            saleOff: 26,
            bonous: 950000,
            priceUnit: "đ",
        },
        {
            logoInterret: "https://cdn.mediamart.vn/ProductOption/11-icon.png?v=03221",
            imageUrl: "https://cdn.mediamart.vn/Product/thumb_-5D78I9.png",
            productUrl: "https://mediamart.vn/laptop/asus/laptop-asus-a412faek155t-bac-win-10.htm",
            title1: "ASUS",
            title2: "CORE I3 || FULL HD",
            description: "Laptop ASUS A412FA-EK155T",
            price: 13290000,
            saleOff: 26,
            bonous: 950000,
            priceUnit: "đ",
        },
        {
            logoInterret: "https://cdn.mediamart.vn/ProductOption/11-icon.png?v=03221",
            imageUrl: "https://cdn.mediamart.vn/Product/thumb_-5D78I9.png",
            productUrl: "https://mediamart.vn/laptop/asus/laptop-asus-a412faek155t-bac-win-10.htm",
            title1: "ASUS",
            title2: "CORE I3 || FULL HD",
            description: "Laptop ASUS A412FA-EK155T",
            price: 13290000,
            saleOff: 26,
            bonous: 950000,
            priceUnit: "đ",
        },
    ];
};
function genLaptop(product) {
    return `
    <div class="product__sale col-12 col-md-6 col-lg-3" style="display: inline-block;">
        <div style="width:100%; height:250px">
            <img style="display: block; width: 25%; margin: 15px;" src="${product.logoInterret}" alt="">
            <a href="${product.productUrl}"><img id="image__product-sale" style="display: block; height:75%; width:100%; margin: 0 auto;object-fit:contain; transition: transform .2s;" src="${product.imageUrl}" alt=""></a>
        </div>
        <div style="width:100%; height:180px">
            <p style="margin-left: 5%;"><b style="color: #0072bc;font-size: larger;">${product.title1} </b> ${product.title2}</p>
            <a style="color: black;" href="${product.productUrl}"><p style="margin-left: 5%;">${product.description}</p></a>
            <p style="color: #e3007b;margin-left: 5%; font-size: x-large;">${(formatMoney(product.price * (100 - product.saleOff) / 100)) + product.priceUnit}</p>
            <p style="text-decoration-line: line-through;margin-left: 5%;">${formatMoney(product.price) + product.priceUnit}</p>
            ${product.bonous != 0 ? `<p style="color: red;margin-left: 5%; margin-bottom: 5%;">Quà trị giá : <b>${formatMoney(product.bonous) + product.priceUnit}</b></p>` : ``}
            <span class="logo__sale">-${product.saleOff}%</span>
        </div>
    </div> 
    `;
};
function genLaptopsHtml(laptops) {
    var content = ""
    for (var i = 0; i < laptops.length; i++){
        content = content + genLaptop(laptops[i]);
    }
    return content;
};

// get acessories product
function getAcessories (){
    return acessories = [
        {
            imageUrl: "https://cdn.mediamart.vn/Product/thumb_apple-tai-nghe-airpods-2-hop-sac-day-mv7n2vna-56p3vJ.jpg",
            productUrl: "https://mediamart.vn/tai-nghe/apple-airpod/apple-tai-nghe-airpods-2-hop-sac-day-mv7n2vna.htm",
            title1: "APPLE - AIRPOD",
            title2: "",
            description: "Apple Tai nghe Airpods 2 kèm hộp sạc dây - MV7N2VN/A",
            price: 5290000,
            saleOff: 36,
            bonous: 50000,
            priceUnit: "đ",
        },
        {
            imageUrl: "https://cdn.mediamart.vn/Product/thumb_-85B166.jpg",
            productUrl: "https://mediamart.vn/chuot/rapoo/chuot-quang-khong-day-rapoo-3510-plus-mau-xam.htm",
            title1: "RAPOO",
            title2: "",
            description: "Chuột quang không dây Rapoo 3510 - Plus màu xám",
            price: 590000,
            saleOff: 50,
            bonous: 99000,
            priceUnit: "đ",
        },
        {
            imageUrl: "https://cdn.mediamart.vn/Product/thumb_tai-nghe-bluetooth-plantronic-ml15-1XfBSK.jpg",
            productUrl: "https://mediamart.vn/tai-nghe/plantronics/tai-nghe-bluetooth-plantronic-ml15.htm",
            title1: "PLANTRONIC S",
            title2: "",
            description: "Tai Nghe Bluetooth Plantronic ML15 (Một tai nghe)",
            price: 670000,
            saleOff: 22,
            bonous: 50000,
            priceUnit: "đ",
        },
        {
            imageUrl: "https://cdn.mediamart.vn/Product/thumb_tai-nghe-chup-dau-co-mic-rapoo-h100-giac-35-swjwby.jpg",
            productUrl: "https://mediamart.vn/tai-nghe/rapoo/tai-nghe-chup-dau-co-mic-rapoo-h100-giac-35.htm",
            title1: "RAPOO",
            title2: "",
            description: "Tai nghe chụp đầu Rapoo H100 Giắc 3.5 (Có Micro)",
            price: 250000,
            saleOff: 22,
            bonous: 50000,
            priceUnit: "đ",
        },
        {
            imageUrl: "https://cdn.mediamart.vn/Product/thumb_loa-bluetooth-rapoo-a100-wK8P62.png",
            productUrl: "https://mediamart.vn/loabluetooth/rapoo/loa-bluetooth-rapoo-a100.htm",
            title1: "RAPOO",
            title2: "",
            description: "Loa Bluetooth Rapoo A100",
            price: 550000,
            saleOff: 10,
            bonous: 50000,
            priceUnit: "đ",
        },
        {
            imageUrl: "https://cdn.mediamart.vn/Product/thumb_-2O910h.png",
            productUrl: "https://mediamart.vn/loabluetooth/microlab/loa-bluetooth-soundbar-microlab-ms212.htm",
            title1: "MICROLAP",
            title2: "100W",
            description: "Loa Bluetooth soundbar Microlab MS212",
            price: 599000,
            saleOff: 34,
            bonous: 50000,
            priceUnit: "đ",
        },
        {
            imageUrl: "https://cdn.mediamart.vn/Product/thumb_-84UzQ0.png",
            productUrl: "https://mediamart.vn/hdd-gan-ngoai/seagate/hdd-seagate-nexpansion-portable-drive-1tb-stea1000400.htm",
            title1: "SEAGATE",
            title2: "1TB",
            description: "HDD Seagate Expansion Portable Drive 1TB  (STEA1000400)  2.5'' 3.0",
            price: 1990000,
            saleOff: 30,
            bonous: 520000,
            priceUnit: "đ",
        },
        {
            imageUrl: "https://cdn.mediamart.vn/Product/thumb_30253_20103_hdd-seagate-backup-plus-slim-portable-drive-1tb.jpg",
            productUrl: "https://mediamart.vn/hdd-gan-ngoai/seagate/hdd-seagate-backup-plus-slim-portable-drive-1tb.htm",
            title1: "SEAGATE",
            title2: "1TB",
            description: "HDD Seagate Expansion Portable Drive 1TB  (STEA1000400)  2.5'' 3.0",
            price: 2190000,
            saleOff: 30,
            bonous: 520000,
            priceUnit: "đ",
        },
    ];
};
function genAcessories(product) {
    return `
    <div class="product__sale col-12 col-md-6 col-lg-3" style="display: inline-block;">
        <div style="width:100%; height:250px">
            <img style="display: block; width: 25%; margin: 15px;" src="${product.logoInterret}" alt="">
            <a href="${product.productUrl}"><img id="image__product-sale" style="display: block; height:75%; width:100%; margin: 0 auto;object-fit:contain; transition: transform .2s;" src="${product.imageUrl}" alt=""></a>
        </div>
        <div style="width:100%; height:180px">
            <p style="margin-left: 5%;"><b style="color: #0072bc;font-size: larger;">${product.title1} </b> ${product.title2}</p>
            <a style="color: black;" href="${product.productUrl}"><p style="margin-left: 5%;">${product.description}</p></a>
            <p style="color: #e3007b;margin-left: 5%; font-size: x-large;">${(formatMoney(product.price * (100 - product.saleOff) / 100)) + product.priceUnit}</p>
            <p style="text-decoration-line: line-through;margin-left: 5%;">${formatMoney(product.price) + product.priceUnit}</p>
            ${product.bonous != 0 ? `<p style="color: red;margin-left: 5%; margin-bottom: 5%;">Quà trị giá : <b>${formatMoney(product.bonous) + product.priceUnit}</b></p>` : ``}
            <span class="logo__sale">-${product.saleOff}%</span>
        </div>
    </div> 
    `;
};
function genAcessoriesHtml(acessories) {
    var content = ""
    for (var i = 0; i < acessories.length; i++){
        content = content + genLaptop(acessories[i]);
    }
    return content;
};



$(document).ready( function () {
    $('.catalog__product-sale').append(genProductsHtml(getProducts()));
    $('.catalog__product-smartphone').append(genSmartphonesHtml(getSmartphone()));
    $('.catalog__product-laptop').append(genLaptopsHtml(getLaptops()));
    $('.catalog__accessories').append(genAcessoriesHtml(getAcessories()));
});