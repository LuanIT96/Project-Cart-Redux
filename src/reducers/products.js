var initialState = [
    {
        id : 1,
        name : 'Iphone 8 plus',
        image : 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        rating : 4,
        description : 'Được sản xuất bởi Apple',
        price : 600,
        inventory : 10
    },
    {
        id : 2,
        name : 'Iphone 7 Plus',
        image : 'https://stcv4.hnammobile.com//uploads/products/colors/5/apple-iphone-7-plus-128gb-9882456279-jpg.jpg',
        rating : 3,
        description : 'Được sản xuất bởi Apple',
        price : 300,
        inventory : 15
    },
    {
        id : 3,
        name : 'Iphone 6s',
        image : 'https://cdn.tgdd.vn/Products/Images/42/71306/iphone-6s-5-300x300.jpg',
        rating : 4,
        description : 'Được sản xuất bởi Apple',
        price : 400,
        inventory : 20
    },
    {
        id : 4,
        name : 'Iphone X',
        image : 'https://images.fpt.shop/unsafe/fit-in/465x465/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2017/12/8/636483223586180190_3.jpg',
        rating : 5,
        description : 'Được sản xuất bởi Apple',
        price : 700,
        inventory : 30
    },
    {
        id : 5,
        name : 'Iphone XS Max',
        image : 'https://cdn.tgdd.vn/Products/Images/42/190321/iphone-xs-max-gold-600x600.jpg',
        rating : 4,
        description : 'Được sản xuất bởi Apple',
        price : 900,
        inventory : 14
    },
    {
        id : 6,
        name : 'Iphone 11 Pro Max',
        image : 'https://cdn.fptshop.com.vn/Uploads/Originals/2019/9/11/637037687763926758_11-pro-max-xanh.png',
        rating : 5,
        description : 'Được sản xuất bởi Apple',
        price : 1200,
        inventory : 25
    }
]

var products  =  (state = initialState, action) => {
    switch (action.type) {
        default : return [...state];
    }
}

export default products;