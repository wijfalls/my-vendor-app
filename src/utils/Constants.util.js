import { Dimensions } from 'react-native';
import * as Yup from 'yup';

export const vh = Dimensions.get('window').height * 0.01;
export const vw = Dimensions.get('window').width * 0.01;
export const ButtonHeight = vh * 5.9;
export const FontSize = vh * 1.51;

export const formValidations = {
    name: Yup.string()
        .matches(/^[A-Za-z\s]+$/, 'Name can only contain letters')
        .required('Name is required'),
    fullName: Yup.string()
        .matches(/^[A-Za-z\s]+$/, 'Full name can only contain letters')
        .required('Full name is required'),
    firstName: Yup.string()
        .matches(/^[A-Za-z\s]+$/, 'First name can only contain letters')
        .required('First name is required'),
    lastName: Yup.string()
        .matches(/^[A-Za-z\s]+$/, 'Last name can only contain letters')
        .required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    otp: Yup.string()
        .matches(/^\d+$/, 'OTP must contain only digits')
        .min(6, 'OTP must be 6 digits long')
        .max(6, 'OTP must be 6 digits long')
        .required('OTP is required'),
    countryCode: Yup.string().required('Country Code is required'),
    address: Yup.string().required('Address is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    zipCode: Yup.string().required('Zip Code is required'),
    country: Yup.string().required('Country is required'),
    role: Yup.string().required('Role is required'),
    phone: Yup.string()
        .matches(/^\d+$/, 'Phone number must contain only digits')
        .required('Phone number is required'),
    oldPassword: Yup.string()
        .min(6, 'Old Password must be at least 6 characters')
        .required('Old Password is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Subject is required'),
    relation: Yup.string().required('Relation is required'),
    summary: Yup.string().required('Summary is required'),
    about: Yup.string().required('About Us is required'),
    date: Yup.string().required('Date Us is required'),
    time: Yup.string().required('Time Us is required'),
};

export const formInitialValues = {
    name: 'Casey Hunter',
    fullName: 'Casey Hunter',
    firstName: '',
    lastName: '',
    email: 'casey.hunter@gmail.com',
    otp: '',
    countryCode: '🇺🇸 +1',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    address: 'abc road',
    phone: '825285258',
    password: 'password',
    oldPassword: '',
    confirmPassword: 'password',
    role: '',
    subject: '',
    message: '',
    relation: 'Father',
    summary: 'summary',
    about: 'about',
    date: '',
};

export const formNames = {
    name: 'name',
    fullName: 'fullName',
    firstName: 'firstName',
    lastName: 'lastName',
    phone: 'phone',
    address: 'address',
    city: 'city',
    state: 'state',
    zipCode: 'zipCode',
    country: 'country',
    role: 'role',
    email: 'email',
    otp: 'otp',
    password: 'password',
    newPassword: 'newPassword',
    oldPassword: 'oldPassword',
    confirmPassword: 'confirmPassword',
    subject: 'subject',
    message: 'message',
    summary: 'summary',
    relation: 'relation',
    about: 'about',
};

export const categories = [
    {
        title: 'Toys',
        image: { uri: 'https://cdn-icons-png.flaticon.com/128/3918/3918214.png' },
    },
    {
        title: 'Entertainment',
        image: { uri: 'https://cdn-icons-png.flaticon.com/128/2451/2451949.png' },
    },
    {
        title: 'Appliance',
        image: {
            uri: 'https://cdn-icons-png.flaticon.com/128/10991/10991410.png',
        },
    },
];

export const upcomingBookings = [
    {
        title: 'Job name',
        image: {
            uri: 'https://www.bodyglove.com/cdn/shop/products/Lifestyle1_1000x.jpg?v=1658455018',
        },
        date: '12-10-2023',
        time: '10:30 AM',
    },
    {
        title: 'Job name',
        image: {
            uri: 'https://assets.newatlas.com/dims4/default/61084c5/2147483647/strip/true/crop/1080x720+0+0/resize/720x480!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F5e%2Fac%2F915329314d7dbb9dc5e6cdff2f78%2F399565841-122112731240090086-6648603302275701821-n.jpeg',
        },
        date: '12-11-2024',
        time: '12:30 AM',
    },
    {
        title: 'Job name',
        image: {
            uri: 'https://thewildprovides.com/wp-content/uploads/2023/01/spinning-rod-1500.jpg',
        },
        date: '10-12-2024',
        time: '04:30 PM',
    },
];

export const notificationsConstantsArray = [
    {
        title: 'Transaction Successful',
        subTitle: 'Rental charges successfully Paid.',
        image: {
            uri: 'https://cdn-icons-png.flaticon.com/128/6047/6047365.png',
        },
        createdAt: new Date(),
    },
    {
        title: 'Paddle Board Rented',
        subTitle: 'Congratulations! Your Item Abc has been booked!',
        image: {
            uri: 'https://cdn-icons-png.flaticon.com/128/1403/1403559.png',
        },
        createdAt: new Date('2023-10-15'),
    },
    {
        title: 'Transaction Successful',
        subTitle: 'Rental charges successfully Paid.',
        image: {
            uri: 'https://cdn-icons-png.flaticon.com/128/6047/6047365.png',
        },
        createdAt: new Date(),
    },
];

export const searchLocation = [
    {
        place: 'Place Abc',
        address: 'abc street 123 road...',
    },
    {
        place: 'Place Abc',
        address: 'abc street 123 road...',
    },
    {
        place: 'Place Abc',
        address: 'abc street 123 road...',
    },
    {
        place: 'Place Abc',
        address: 'abc street 123 road...',
    },
    {
        place: 'Place Abc',
        address: 'abc street 123 road...',
    },
];
export const category = [
    {
        title: 'Drill',
        image: {
            uri: 'https://www.bodyglove.com/cdn/shop/products/Lifestyle1_1000x.jpg?v=1658455018',
        },
        description: 'Lorem Ipsum is simply dummy text of the printing.',
    },
    {
        title: 'Lawn Mower',
        image: {
            uri: 'https://www.bodyglove.com/cdn/shop/products/Lifestyle1_1000x.jpg?v=1658455018',
        },
        description: 'Lorem Ipsum is simply dummy text of the printing.',
    },
    {
        title: 'Paint Sprayer',
        image: {
            uri: 'https://www.bodyglove.com/cdn/shop/products/Lifestyle1_1000x.jpg?v=1658455018',
        },
        description: 'Lorem Ipsum is simply dummy text of the printing.',
    },
];

export const itemDetail = {
    status: 'Not Booked',
    images: [
        {
            uri: 'https://www.bodyglove.com/cdn/shop/products/Lifestyle1_1000x.jpg?v=1658455018',
        },
    ],
    rating: 5,
    title: 'Airless Paint Sprayer ',
    description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s',
    price: '235',
    paymentDetails: {
        rate: '12/Day',
        deposit: '120',
        commission: '4',
    },
};

function getRandomDate(startDate, endDate) {
    return new Date(
        startDate.getTime() +
        Math.random() * (endDate.getTime() - startDate.getTime()),
    );
}

// Function to generate real-looking notifications
function generateNotifications(count) {
    const notifications = [];
    const titles = [
        'Transaction Successful',
        'Paddle Board Rented',
        'Delivery Confirmation',
    ];
    const subtitles = [
        'Rental charges successfully Paid.',
        'Congratulations! Your Item Abc has been booked!',
        'Your delivery has been confirmed.',
    ];
    const images = [
        'https://cdn-icons-png.flaticon.com/128/6047/6047365.png',
        'https://cdn-icons-png.flaticon.com/128/1403/1403559.png',
        'https://cdn-icons-png.flaticon.com/128/411/411768.png',
    ];

    for (let i = 0; i < count; i++) {
        const notIndex = Math.floor(Math.random() * titles.length);
        const title = titles[notIndex];
        const subTitle = subtitles[notIndex];
        const image = { uri: images[notIndex] };
        const createdAt = getRandomDate(new Date(2020, 0, 1), new Date());

        notifications.push({ title, subTitle, image, createdAt });
    }

    // Sort notifications based on createdAt in descending order
    notifications.sort((a, b) => b.createdAt - a.createdAt);

    return notifications;
}

export const transactionHistory = [
    {
        image: 'https://assets.newatlas.com/dims4/default/61084c5/2147483647/strip/true/crop/1080x720+0+0/resize/720x480!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F5e%2Fac%2F915329314d7dbb9dc5e6cdff2f78%2F399565841-122112731240090086-6648603302275701821-n.jpeg',
        name: '“James Anderson”',
        title: 'Paint Sprayer',
        bookingDate: '12/12/12',
        price: '12/Day',
        paymentDetails: {
            rate: '12/Day',
            deposit: '120',
            commission: '4',
            earning: '40',
        },
    },
];

// Generating 15 notifications
export const notificationsConstants = generateNotifications(15);

// Function to generate booking requests
function generateBookingRequests(count) {
    const bookingRequests = [];
    const statuses = ['Hired', 'Completed'];
    const items = [
        {
            name: 'Paint Spray',
            image: {
                uri: 'https://images.thdstatic.com/productImages/6f3baf64-87f7-4db9-b2f4-71b7247c100b/svn/graco-airless-paint-sprayers-18f027-e1_600.jpg',
            },
            business: {
                name: 'James Anderson',
            },
        },
        {
            name: 'Drill Machine',
            image: {
                uri: 'https://img.etimg.com/thumb/width-1200,height-900,imgsize-45390,resizemode-75,msid-100801629/top-trending-products/home-improvement/best-makita-drill-machine-in-india-to-use-on-your-walls.jpg',
            },
            business: {
                name: 'James Anderson',
            },
        },
        {
            name: 'Lawn Mower',
            image: {
                uri: 'https://hips.hearstapps.com/hmg-prod/images/mower-1568302588.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*',
            },
            business: {
                name: 'James Anderson',
            },
        },
        // Add more items with their respective images
    ];

    const addresses = [
        '123 Main St, CityA',
        '456 Elm St, CityB',
        '789 Oak St, CityC',
    ];
    const minPrice = 10; // Minimum price per day
    const maxPrice = 50; // Maximum price per day

    for (let i = 0; i < count; i++) {
        const item = items[Math.floor(Math.random() * items.length)];
        const status = statuses[Math.floor(Math.random() * statuses.length)];
        const address = addresses[Math.floor(Math.random() * addresses.length)];
        const startDate = getRandomDate(new Date(2023, 0, 1), new Date());
        const endDate = getRandomDate(startDate, new Date());
        const price = (
            Math.random() * (maxPrice - minPrice) +
            minPrice
        ).toFixed(2);

        bookingRequests.push({
            item,
            status,
            address,
            startDate,
            endDate,
            price,
        });
    }

    return bookingRequests;
}

// Generating 15 booking requests
export const bookingRequestsData = generateBookingRequests(15);

export const communityForumData = [
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFAOG3VKANL5teBcGnCdFHrFZQrj50Lzv-TA&usqp=CAU',
        name: 'James Anderson',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed lorem lipsum dolor sit amit dummy text.',
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFAOG3VKANL5teBcGnCdFHrFZQrj50Lzv-TA&usqp=CAU',
        name: 'James Anderson',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed lorem lipsum dolor sit amit dummy text.',
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFAOG3VKANL5teBcGnCdFHrFZQrj50Lzv-TA&usqp=CAU',
        name: 'James Anderson',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed lorem lipsum dolor sit amit dummy text.',
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFAOG3VKANL5teBcGnCdFHrFZQrj50Lzv-TA&usqp=CAU',
        name: 'James Anderson',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed lorem lipsum dolor sit amit dummy text.',
    },
];
export const showsData = [
    {
        image: 'https://img.aplaceformom.com/image/web-lighthouse/prod/nursing-home-checklist.jpg?t=default',
        name: 'James Anderson',
        description: 'Old home ',
        date: new Date(),
        city: 'New York',
        location: 'Abc road',
        status: 'Pending',
    },
    {
        image: 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/health/wp-content/uploads/2022/04/assisted-living.jpg',
        name: 'Jimmy Broad',
        description: 'Old home ',
        date: new Date(),
        city: 'New York',
        location: 'Abc road',
        status: 'Pending',
    },
    {
        image: 'https://www.ffcinc.org/hubfs/FF%205-25-21-34-Exposure-brighten-1.jpeg',
        name: 'John Glen',
        description: 'Old home ',

        date: new Date(),
        city: 'New York',
        location: 'Abc road',
        status: 'Pending',
    },
];
export const followersData = [
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvg7ZHUPXbNrkU0RXNOEqzBU-QDqUFnh1P4A&s',
        name: 'James Anderson',
        relation: 'Father',
        message: 'James anderson want ask about the facility',
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSzY5ZmgHByWB7wqz8FW_jvnDtAdM76EuhhA&s',
        name: 'Jimmy Broad',
        relation: 'Father',
        message: 'James anderson want ask about the facility',
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRawmkfyznEYpVqV3fK4zn_SuHUWloCNo6HMA&s',
        name: 'John Glen',
        relation: 'Father',
        message: 'James anderson want ask about the facility',
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQijNihNlVUV4vX7job4mOEVIZyZJ9MJYGodg&s',
        name: 'John Glen',
        relation: 'Father',
        message: 'James anderson want ask about the facility',
    },
];
export const subscriptions = [
    {
        name: 'james anderson',
        image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFAOG3VKANL5teBcGnCdFHrFZQrj50Lzv-TA&usqp=CAU',
        status: 'Active',
        bookingDate: '12/12/12',
        recurringDate: '12/12/12',
        total: '120'
    },
    {
        name: 'james anderson',
        image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFAOG3VKANL5teBcGnCdFHrFZQrj50Lzv-TA&usqp=CAU',
        status: 'Active',
        bookingDate: '12/12/12',
        recurringDate: '12/12/12',
        total: '120'

    },
    {
        name: 'james anderson',
        image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFAOG3VKANL5teBcGnCdFHrFZQrj50Lzv-TA&usqp=CAU',
        status: 'Active',
        bookingDate: '12/12/12',
        recurringDate: '12/12/12',
        total: '120'

    },
];

export const logs = [
    {
        duration: 'month',
        createdAt: new Date(),
        expiry: new Date('22-12-2024'),
        amount: 120,
        plan: 'Monthly'
    },
    {
        duration: 'year',
        createdAt: new Date(),
        expiry: new Date('22-12-2024'),
        amount: 120,
        plan: 'Yearly'
    },

]