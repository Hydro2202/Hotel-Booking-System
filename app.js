// ============================================
// HOTEL NI YUAN - MAIN APPLICATION
// ============================================

const APP_LANGUAGES = {
  en: {
    // Navigation
    home: 'Home',
    rooms: 'Rooms',
    amenities: 'Amenities',
    gallery: 'Gallery',
    testimonials: 'Testimonials',
    contact: 'Contact',
    bookNow: 'Book Now',
    login: 'Login',
    logout: 'Logout',
    logoutConfirm: 'Are you sure you want to logout?',
    myBookings: 'My Bookings',
    profile: 'Profile',
    backToHome: 'Back to Home',
    wishlist: 'Wishlist',
    
    // Hero Section
    welcomeTo: 'Welcome to',
    experienceLuxury: 'Experience Luxury Like Never Before',
    bookYourStay: 'Book Your Stay',
    viewRooms: 'View Rooms',
    
    // Sections
    featuredRooms: 'Featured Rooms',
    hotelHighlights: 'Hotel Highlights',
    aboutHotel: 'About the Hotel',
    ourRooms: 'Our Rooms',
    ourAmenities: 'Our Amenities',
    roomsSectionTitle: 'Our Luxurious Rooms',
    roomsSectionSubtitle: 'Choose from our exquisite collection of rooms and suites',
    amenitiesSectionTitle: 'World-Class Amenities',
    amenitiesSectionSubtitle: 'Everything you need for a perfect stay',
    gallerySectionTitle: 'Photo Gallery',
    gallerySectionSubtitle: 'Take a glimpse of our beautiful hotel',
    whatGuestsSay: 'What Our Guests Say',
    realExperiences: 'Real experiences from our valued guests',
    frequentlyAsked: 'Frequently Asked Questions',
    everythingYouNeed: 'Everything you need to know',
    nearbyAttractions: 'Nearby Attractions',
    exploreAround: 'Explore what\'s around us',
    
    // Highlights
    luxuryPoolTitle: 'Luxury Pool',
    luxuryPoolDescription: 'Relax by our stunning infinity pool',
    fineDiningTitle: 'Fine Dining',
    fineDiningDescription: 'Award-winning restaurants',
    spaWellnessTitle: 'Spa & Wellness',
    spaWellnessDescription: 'Rejuvenate your body and mind',
    service247Title: '24/7 Service',
    service247Description: 'Round-the-clock concierge',
    
    // About
    aboutStayUpTitle: 'About StayUp',
    aboutStayUpLead: 'Where Luxury Meets Tradition',
    aboutStayUpBody1: 'Nestled in the heart of the city, StayUp offers an unparalleled experience of luxury and comfort. Our elegant rooms, world-class amenities, and exceptional service create memories that last a lifetime.',
    aboutStayUpBody2: 'With over 20 years of excellence in hospitality, we combine traditional elegance with modern sophistication to provide our guests with an unforgettable stay.',
    aboutStayUpButton: 'Learn More',
    
    // Room Cards
    viewDetails: 'View Details',
    viewButton: 'View',
    compare: 'Compare',
    perNight: '/night',
    upTo: 'Up to',
    guests: 'guests',
    recentlyViewed: 'Recently Viewed',
    
    // Booking
    bookingForm: 'Booking Form',
    fullName: 'Full Name',
    email: 'Email',
    phone: 'Phone',
    roomType: 'Room Type',
    numberOfGuests: 'Number of Guests',
    checkIn: 'Check-in Date',
    checkOut: 'Check-out Date',
    specialRequests: 'Special Requests',
    discountCode: 'Discount Code (Optional)',
    enterCode: 'Enter code',
    apply: 'Apply',
    discountApplied: 'Discount applied!',
    discountSuccess: 'Discount code applied!',
    discountInvalid: 'Invalid discount code',
    priceSummary: 'Price Summary',
    roomRate: 'Room Rate',
    night: 'night',
    nights: 'nights',
    subtotal: 'Subtotal',
    taxesFees: 'Taxes & Fees',
    included: 'Included',
    total: 'Total',
    cancel: 'Cancel',
    confirmBooking: 'Confirm Booking',
    proceedToPayment: 'Proceed to Payment',
    viewSummary: 'View Summary',
    editBooking: 'Edit Booking',
    
    // Payment
    payment: 'Payment',
    selectPaymentMethod: 'Select Payment Method',
    cardholderName: 'Cardholder Name',
    cardNumber: 'Card Number',
    expiry: 'Expiry',
    cvv: 'CVV',
    payNow: 'Pay Now',
    cardDetailsInvalid: 'Please fill in all card details correctly',
    accountNumberRequired: 'Account number is required',
    accountNumberInvalid: 'Invalid account number. Please enter a valid mobile number (09XX XXX XXXX)',
    paypalEmailRequired: 'PayPal email is required',
    paypalEmailInvalid: 'Invalid PayPal email address',
    paymentDetailsInvalid: 'Please fill in all payment details correctly',
    enterAccountNumber: 'Enter your mobile number',
    enterPayPalEmail: 'Enter your PayPal email address',
    accountNumber: 'Account Number',
    paymentSuccessful: 'Payment Successful!',
    bookingConfirmed: 'Your booking has been confirmed.',
    redirectMessage: 'You will be redirected to {method} payment gateway to complete your transaction.',
    
    // Booking Summary
    bookingSummary: 'Booking Summary',
    room: 'Room',
    discount: 'Discount',
    totalPrice: 'Total Price',
    
    // Booking Confirmation
    bookingConfirmedTitle: 'Booking Confirmation',
    bookingConfirmedText: 'Booking Confirmed!',
    bookingReference: 'Your booking reference',
    bookingDetails: 'Booking Details',
    confirmationEmailSent: 'A confirmation email has been sent to',
    done: 'Done',
    
    // Room Details
    description: 'Description',
    size: 'Size',
    maxGuests: 'Max Guests',
    proceedToBooking: 'Proceed to Booking',
    close: 'Close',
    
    // Comparison
    compareRooms: 'Compare Rooms',
    feature: 'Feature',
    price: 'Price',
    action: 'Action',
    remove: 'Remove',
    compareLimit: 'You can only compare up to {max} rooms',
    compareDuplicate: 'Room already in comparison',
    compareMinimum: 'Please select at least 2 rooms to compare',
    
    // User
    register: 'Register',
    dontHaveAccount: 'Don\'t have an account?',
    alreadyHaveAccount: 'Already have an account?',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    fullNamePlaceholder: 'Enter your full name',
    emailPlaceholder: 'Enter your email',
    loginSuccessful: 'Login successful!',
    loginRequired: 'Login Required',
    pleaseLoginFirst: 'Please login first to book a room',
    loginToBookMessage: 'You need to be logged in to make a booking. Please login or create an account to continue.',
    loginNow: 'Login Now',
    createAccount: 'Create Account',
    registrationSuccessful: 'Registration successful!',
    invalidCredentials: 'Invalid email or password',
    passwordsNotMatch: 'Passwords do not match',
    emailExists: 'Email already registered',
    profileEmailExists: 'Email already exists. Please use a different email.',
    profileUpdateSuccess: 'Profile updated successfully!',
    profileFillRequired: 'Please fill in all required fields',
    passwordFieldsRequired: 'Please fill in all password fields',
    passwordMismatch: 'New passwords do not match',
    passwordShort: 'New password must be at least 6 characters',
    passwordIncorrect: 'Current password is incorrect',
    passwordChangeSuccess: 'Password changed successfully!',
    
    // Auth Screens
    loginTitle: 'Sign In',
    loginSubtitle: 'Sign in to continue your luxury experience',
    rememberMe: 'Remember Me',
    forgotPassword: 'Forgot Password?',
    loginButton: 'Sign In',
    loginSigningIn: 'Signing In...',
    registerPrompt: 'Don\'t have an account?',
    registerLink: 'Register',
    registerTitle: 'Create Your Account',
    registerSubtitle: 'Join our luxury community for personalized stays',
    registerFullName: 'Full Name',
    registerEmail: 'Email Address',
    registerPassword: 'Password',
    registerConfirmPassword: 'Confirm Password',
    registerButton: 'Create Account',
    registerCreating: 'Creating...',
    registerExistingPrompt: 'Already have an account?',
    registerSignIn: 'Sign In',
    guest: 'Guest',
    loginFormError: 'Please fill in all fields correctly',
    registerErrorName: 'Please enter your name',
    registerErrorEmail: 'Please enter your email',
    registerErrorEmailInvalid: 'Please enter a valid email address',
    registerErrorPasswordLength: 'Password must be at least 6 characters',
    registerErrorMismatch: 'Passwords do not match',
    loginSuccessHeading: 'Welcome back, {name}!',
    loginSuccessMessage: 'You have successfully logged in. Redirecting to homepage...',
    registerSuccessHeading: 'Welcome, {name}!',
    registerSuccessMessage: 'Your account has been created. Redirecting to the login page...',
    
    // Dashboard
    noBookings: 'No bookings yet. Start booking your stay!',
    confirmed: 'Confirmed',
    bookingReferenceLabel: 'Booking Reference',
    cancelBooking: 'Cancel',
    cancelBookingConfirm: 'Are you sure you want to cancel this booking?',
    bookingCancelled: 'Booking cancelled successfully',
    
    // Chat
    liveChatSupport: 'Live Chat Support',
    weAreHere: 'We\'re here to help',
    typeMessage: 'Type your message...',
    chatWelcome: 'Hello! Welcome to StayUp. How can I assist you today?',
    chatResponseFriendly: 'Thank you for your message! Our team will get back to you shortly.',
    chatResponseHelp: 'I can help you with room bookings, amenities, or any questions about our hotel.',
    chatResponseOffers: 'Would you like to know more about our special offers?',
    chatResponseDesk: 'Our front desk is available 24/7 to assist you.',
    
    // FAQ
    checkInOut: 'What are your check-in and check-out times?',
    checkInOutAnswer: 'Check-in is from 3:00 PM onwards, and check-out is until 12:00 PM. Early check-in and late check-out may be available upon request.',
    freeWifi: 'Do you offer free WiFi?',
    freeWifiAnswer: 'Yes, we provide complimentary high-speed WiFi throughout the hotel for all our guests.',
    parking: 'Is parking available?',
    parkingAnswer: 'Yes, we offer complimentary valet parking for all guests. Self-parking is also available.',
    swimmingPool: 'Do you have a swimming pool?',
    swimmingPoolAnswer: 'Yes, we have a luxurious outdoor infinity pool with poolside bar and cabanas available for our guests.',
    petsAllowed: 'Are pets allowed?',
    petsAllowedAnswer: 'We welcome pets in designated pet-friendly rooms. Please inform us in advance and additional charges may apply.',
    cancellationPolicy: 'What is your cancellation policy?',
    cancellationPolicyAnswer: 'Free cancellation is available up to 24 hours before check-in. After that, cancellation fees may apply based on the rate type selected.',
    
    // Contact
    getInTouch: 'Get in Touch',
    sendMessage: 'Send Message',
    name: 'Name',
    message: 'Message',
    thankYouMessage: 'Thank you for your message! We will get back to you soon.',
    contactNameRequired: 'Full name is required',
    contactEmailRequired: 'Email is required',
    contactEmailInvalid: 'Please enter a valid email address',
    contactMessageRequired: 'Message is required',
    fullNameRequired: 'Full name is required',
    emailRequired: 'Email is required',
    emailInvalid: 'Invalid email format',
    phoneRequired: 'Phone number is required',
    roomTypeRequired: 'Please select a room type',
    checkInRequired: 'Check-in date is required',
    checkOutRequired: 'Check-out date is required',
    checkOutAfterCheckIn: 'Check-out must be after check-in',
    pleaseFillRequiredFields: 'Please fill in all required fields before proceeding to payment.',
    contactSectionTitle: 'Contact Us',
    contactSectionSubtitle: 'We\'d love to hear from you',
    contactFullName: 'Full Name *',
    contactEmail: 'Email *',
    contactPhone: 'Phone',
    contactMessage: 'Message *',
    contactSendMessage: 'Send Message',
    contactInfoTitle: 'Get in Touch',
    contactAddress: 'Address',
    contactPhoneLabel: 'Phone',
    contactEmailLabel: 'Email',
    contactDeskLabel: 'Front Desk',
    contactDeskHours: '24/7 Available',
    
    // Filters / Sort
    sortBy: 'Sort by',
    mostPopular: 'Most Popular',
    priceLowHigh: 'Price: Low to High',
    priceHighLow: 'Price: High to Low',
    newestFirst: 'Newest First',
    filterPriceRange: 'Price Range',
    filterRoomType: 'Room Type',
    filterAllTypes: 'All Types',
    filterStandard: 'Standard',
    filterSuite: 'Suite',
    filterFamily: 'Family',
    filterMaxGuests: 'Max Guests',
    filterAnyGuests: 'Any',
    filterGuestsTwo: '2 Guests',
    filterGuestsFour: '4 Guests',
    filterClear: 'Clear Filters',
    filterMinPlaceholder: 'Min',
    filterMaxPlaceholder: 'Max',
    
    // Footer
    quickLinks: 'Quick Links',
    followUs: 'Follow Us',
    allRightsReserved: 'All rights reserved',
    footerDescription: 'Experience luxury like never before. Your perfect stay awaits.',
    servicesHeading: 'Services',
    servicesSpa: 'Spa & Wellness',
    servicesDining: 'Fine Dining',
    servicesEvents: 'Events',
    servicesConcierge: 'Concierge',
    newsletterHeading: 'Newsletter',
    newsletterText: 'Subscribe to get special offers and updates',
    newsletterPlaceholder: 'Your email',
    newsletterButton: 'Subscribe',
    newsletterThankYou: 'Thank you for subscribing!',
    newsletterThankYouMessage: 'You have been successfully subscribed to our newsletter. We will keep you updated with our latest offers and news.',
    
    // Floating Actions & Chat
    fabBookTitle: 'Book Now',
    fabChatTitle: 'Live Chat',
    fabContactTitle: 'Contact',
    chatIconTooltip: 'Open Chat',
    liveChatTitle: 'Live Chat',
    chatMinimize: 'Minimize',
    chatMaximize: 'Maximize',
    chatClose: 'Close',
    
    // General
    searchPlaceholder: 'Search rooms, amenities...',
    anySpecialRequests: 'Any special requests or requirements...',
    themeBlackGold: 'Black & Gold',
    themeEmerald: 'Emerald Luxury',
    themeRoyal: 'Royal White & Gold',
    togglePassword: 'Toggle password visibility'
  },
  ph: {
    // Navigation
    home: 'Tahanan',
    rooms: 'Mga Silid',
    amenities: 'Mga Kaginhawaan',
    gallery: 'Gallery',
    testimonials: 'Mga Testimonial',
    contact: 'Makipag-ugnayan',
    bookNow: 'Mag-book Ngayon',
    login: 'Mag-login',
    logout: 'Mag-logout',
    logoutConfirm: 'Sigurado ka bang gusto mong mag-logout?',
    myBookings: 'Aking Mga Booking',
    profile: 'Profile',
    wishlist: 'Nais',
    backToHome: 'Bumalik sa Home',
    
    // Hero Section
    welcomeTo: 'Maligayang pagdating sa',
    experienceLuxury: 'Makaranas ng Luho na Hindi Pa Nararanasan',
    bookYourStay: 'Mag-book ng Inyong Pananatili',
    viewRooms: 'Tingnan ang mga Silid',
    
    // Sections
    featuredRooms: 'Mga Featured na Silid',
    hotelHighlights: 'Mga Highlight ng Hotel',
    aboutHotel: 'Tungkol sa Hotel',
    ourRooms: 'Ang Aming Mga Silid',
    ourAmenities: 'Ang Aming Mga Kaginhawaan',
    roomsSectionTitle: 'Ang Aming Mararangyang Silid',
    roomsSectionSubtitle: 'Pumili mula sa aming piling koleksyon ng mga silid at suite',
    amenitiesSectionTitle: 'Mga Pandaigdigang Amenidad',
    amenitiesSectionSubtitle: 'Lahat ng kailangan ninyo para sa perpektong pananatili',
    gallerySectionTitle: 'Photo Gallery',
    gallerySectionSubtitle: 'Silipin ang aming napakagandang hotel',
    whatGuestsSay: 'Ano ang Sinasabi ng Aming mga Bisita',
    realExperiences: 'Tunay na karanasan mula sa aming mga minamahal na bisita',
    frequentlyAsked: 'Mga Madalas Itanong',
    everythingYouNeed: 'Lahat ng kailangan mong malaman',
    nearbyAttractions: 'Mga Kalapit na Atraksyon',
    exploreAround: 'Tuklasin kung ano ang nasa paligid namin',
    
    // Highlights
    luxuryPoolTitle: 'Marangyang Pool',
    luxuryPoolDescription: 'Magpahinga sa aming kahanga-hangang infinity pool',
    fineDiningTitle: 'Marangyang Kainan',
    fineDiningDescription: 'Mga parangal na restawran',
    spaWellnessTitle: 'Spa at Wellness',
    spaWellnessDescription: 'Pawiin ang katawan at isipan',
    service247Title: 'Serbisyo 24/7',
    service247Description: 'Concierge na bukás sa lahat ng oras',
    
    // About
    aboutStayUpTitle: 'Tungkol sa StayUp',
    aboutStayUpLead: 'Kung saan nagsasalubong ang Luho at Tradisyon',
    aboutStayUpBody1: 'Matatagpuan sa puso ng siyudad, nag-aalok ang StayUp ng walang kaparis na karanasan ng luho at kaginhawaan. Ang aming mga eleganteng silid, world-class amenities, at natatanging serbisyo ay lumilikha ng mga alaalang panghabang-buhay.',
    aboutStayUpBody2: 'Mahigit dalawang dekada na kaming nagbibigay ng pinakamahusay na hospitality gamit ang pagsasanib ng tradisyonal na karangyaan at modernong sopistikasyon para sa hindi malilimutang pananatili.',
    aboutStayUpButton: 'Alamin Pa',
    
    // Room Cards
    viewDetails: 'Tingnan ang Detalye',
    viewButton: 'Tingnan',
    compare: 'Ikumpara',
    perNight: '/gabi',
    upTo: 'Hanggang',
    guests: 'mga bisita',
    recentlyViewed: 'Kamakailang Tiningnan',
    
    // Booking
    bookingForm: 'Booking Form',
    fullName: 'Buong Pangalan',
    email: 'Email',
    phone: 'Telepono',
    roomType: 'Uri ng Silid',
    numberOfGuests: 'Bilang ng mga Bisita',
    checkIn: 'Petsa ng Check-in',
    checkOut: 'Petsa ng Check-out',
    specialRequests: 'Mga Espesyal na Kahilingan',
    discountCode: 'Discount Code (Opsyonal)',
    enterCode: 'Ilagay ang code',
    apply: 'Ilapat',
    discountApplied: 'Na-apply ang discount!',
    discountSuccess: 'Matagumpay na na-apply ang discount code!',
    discountInvalid: 'Di-wastong discount code',
    priceSummary: 'Buod ng Presyo',
    roomRate: 'Rate ng Silid',
    night: 'gabi',
    nights: 'gabi',
    subtotal: 'Subtotal',
    taxesFees: 'Mga Buwis at Bayad',
    included: 'Kasama',
    total: 'Kabuuan',
    cancel: 'Kanselahin',
    confirmBooking: 'Kumpirmahin ang Booking',
    proceedToPayment: 'Magpatuloy sa Pagbabayad',
    viewSummary: 'Tingnan ang Buod',
    editBooking: 'I-edit ang Booking',
    
    // Payment
    payment: 'Pagbabayad',
    selectPaymentMethod: 'Pumili ng Paraan ng Pagbabayad',
    cardholderName: 'Pangalan ng Cardholder',
    cardNumber: 'Numero ng Card',
    expiry: 'Expiry',
    cvv: 'CVV',
    payNow: 'Magbayad Ngayon',
    cardDetailsInvalid: 'Pakikompleto ang lahat ng detalye ng card',
    accountNumberRequired: 'Kinakailangan ang account number',
    accountNumberInvalid: 'Hindi wasto ang account number. Pakilagay ang wastong mobile number (09XX XXX XXXX)',
    paypalEmailRequired: 'Kinakailangan ang PayPal email',
    paypalEmailInvalid: 'Hindi wasto ang PayPal email address',
    paymentDetailsInvalid: 'Pakikompleto ang lahat ng detalye ng pagbabayad',
    enterAccountNumber: 'Ilagay ang inyong mobile number',
    enterPayPalEmail: 'Ilagay ang inyong PayPal email address',
    accountNumber: 'Account Number',
    paymentSuccessful: 'Matagumpay ang Pagbabayad!',
    bookingConfirmed: 'Nakumpirma na ang inyong booking.',
    redirectMessage: 'Makakapunta kayo sa {method} payment gateway upang makumpleto ang inyong transaksyon.',
    
    // Booking Summary
    bookingSummary: 'Buod ng Booking',
    room: 'Silid',
    discount: 'Discount',
    totalPrice: 'Kabuuang Presyo',
    
    // Booking Confirmation
    bookingConfirmedTitle: 'Kumpirmasyon ng Booking',
    bookingConfirmedText: 'Nakumpirma na ang Booking!',
    bookingReference: 'Ang inyong booking reference',
    bookingDetails: 'Mga Detalye ng Booking',
    confirmationEmailSent: 'Ang confirmation email ay ipinadala sa',
    done: 'Tapos',
    
    // Room Details
    description: 'Paglalarawan',
    size: 'Laki',
    maxGuests: 'Max na mga Bisita',
    proceedToBooking: 'Magpatuloy sa Booking',
    close: 'Isara',
    
    // Comparison
    compareRooms: 'Ikumpara ang mga Silid',
    feature: 'Feature',
    price: 'Presyo',
    action: 'Aksyon',
    remove: 'Tanggalin',
    compareLimit: 'Hanggang {max} silid lang ang maaaring ikumpara',
    compareDuplicate: 'Nasa listahan na ang silid',
    compareMinimum: 'Pumili ng hindi bababa sa 2 silid para ikumpara',
    
    // User
    register: 'Magrehistro',
    dontHaveAccount: 'Walang account?',
    alreadyHaveAccount: 'May account na?',
    password: 'Password',
    confirmPassword: 'Kumpirmahin ang Password',
    fullNamePlaceholder: 'Ilagay ang inyong buong pangalan',
    emailPlaceholder: 'Ilagay ang inyong email',
    loginSuccessful: 'Matagumpay ang login!',
    loginRequired: 'Kinakailangan ang Login',
    pleaseLoginFirst: 'Pakilagay muna ang login upang mag-book ng silid',
    loginToBookMessage: 'Kailangan mong mag-login upang makagawa ng booking. Pakilagay ang login o gumawa ng account upang magpatuloy.',
    loginNow: 'Mag-login Ngayon',
    createAccount: 'Gumawa ng Account',
    registrationSuccessful: 'Matagumpay ang pagrehistro!',
    invalidCredentials: 'Hindi wasto ang email o password',
    passwordsNotMatch: 'Hindi magkatugma ang mga password',
    emailExists: 'Nakarehistro na ang email',
    profileEmailExists: 'Nakarehistro na ang email. Gumamit ng ibang email.',
    profileUpdateSuccess: 'Matagumpay na na-update ang profile!',
    profileFillRequired: 'Pakisagutan ang lahat ng kinakailangang field',
    passwordFieldsRequired: 'Pakisagutan ang lahat ng password field',
    passwordMismatch: 'Hindi magkatugma ang bagong password',
    passwordShort: 'Dapat hindi bababa sa 6 na karakter ang bagong password',
    passwordIncorrect: 'Mali ang kasalukuyang password',
    passwordChangeSuccess: 'Matagumpay na napalitan ang password!',
    
    // Auth Screens
    loginTitle: 'Mag-sign In',
    loginSubtitle: 'Mag-sign in upang ipagpatuloy ang marangyang karanasan',
    rememberMe: 'Tandaan Ako',
    forgotPassword: 'Nakalimutan ang password?',
    loginButton: 'Mag-sign In',
    loginSigningIn: 'Nagla-log in...',
    registerPrompt: 'Wala ka pang account?',
    registerLink: 'Magparehistro',
    registerTitle: 'Gumawa ng Iyong Account',
    registerSubtitle: 'Sumali sa aming luxury community para sa personalisadong pananatili',
    registerFullName: 'Buong Pangalan',
    registerEmail: 'Email Address',
    registerPassword: 'Password',
    registerConfirmPassword: 'Kumpirmahin ang Password',
    registerButton: 'Lumikha ng Account',
    registerCreating: 'Lumilikha...',
    registerExistingPrompt: 'May account ka na?',
    registerSignIn: 'Mag-sign In',
    guest: 'Bisita',
    loginFormError: 'Pakisagutan nang tama ang lahat ng field',
    registerErrorName: 'Pakilagay ang iyong pangalan',
    registerErrorEmail: 'Pakilagay ang iyong email',
    registerErrorEmailInvalid: 'Pakilagay ang wastong email address',
    registerErrorPasswordLength: 'Dapat hindi bababa sa 6 na letra ang password',
    registerErrorMismatch: 'Hindi magkatugma ang mga password',
    loginSuccessHeading: 'Maligayang pagbabalik, {name}!',
    loginSuccessMessage: 'Matagumpay kang naka-login. Papa-redirect sa homepage...',
    registerSuccessHeading: 'Maligayang pagdating, {name}!',
    registerSuccessMessage: 'Nagawa na ang iyong account. Papa-redirect sa login page...',
    
    // Dashboard
    noBookings: 'Wala pang bookings. Magsimula na sa pag-book ng inyong pananatili!',
    confirmed: 'Nakumpirma',
    bookingReferenceLabel: 'Booking Reference',
    cancelBooking: 'Kanselahin',
    cancelBookingConfirm: 'Sigurado ba kayo na gusto ninyong kanselahin ang booking na ito?',
    bookingCancelled: 'Matagumpay na nakansela ang booking',
    
    // Chat
    liveChatSupport: 'Live Chat Support',
    weAreHere: 'Nandito kami para tumulong',
    typeMessage: 'I-type ang inyong mensahe...',
    chatWelcome: 'Kumusta! Maligayang pagdating sa StayUp. Paano kami makakatulong sa inyo ngayon?',
    chatResponseFriendly: 'Salamat sa inyong mensahe! Magpapadala kami ng tugon sa lalong madaling panahon.',
    chatResponseHelp: 'Maaari ko kayong tulungan sa booking, amenities, o anumang tanong tungkol sa hotel.',
    chatResponseOffers: 'Nais ba ninyong malaman ang aming mga espesyal na alok?',
    chatResponseDesk: 'Ang aming front desk ay bukás 24/7 para tumulong sa inyo.',
    
    // FAQ
    checkInOut: 'Ano ang inyong check-in at check-out times?',
    checkInOutAnswer: 'Ang check-in ay mula 3:00 PM pataas, at ang check-out ay hanggang 12:00 PM. Maaaring available ang early check-in at late check-out kapag hiniling.',
    freeWifi: 'Nag-aalok ba kayo ng libreng WiFi?',
    freeWifiAnswer: 'Oo, nagbibigay kami ng libreng high-speed WiFi sa buong hotel para sa lahat ng aming mga bisita.',
    parking: 'Available ba ang parking?',
    parkingAnswer: 'Oo, nag-aalok kami ng libreng valet parking para sa lahat ng mga bisita. Available din ang self-parking.',
    swimmingPool: 'Mayroon ba kayong swimming pool?',
    swimmingPoolAnswer: 'Oo, mayroon kaming luxurious outdoor infinity pool na may poolside bar at cabanas para sa aming mga bisita.',
    petsAllowed: 'Pinapayagan ba ang mga alaga?',
    petsAllowedAnswer: 'Tinatanggap namin ang mga alaga sa mga designated pet-friendly rooms. Pakisabi sa amin nang maaga at maaaring may karagdagang bayad.',
    cancellationPolicy: 'Ano ang inyong cancellation policy?',
    cancellationPolicyAnswer: 'Libreng cancellation ay available hanggang 24 oras bago ang check-in. Pagkatapos nito, maaaring may cancellation fees depende sa uri ng rate na napili.',
    
    // Contact
    getInTouch: 'Makipag-ugnayan',
    sendMessage: 'Magpadala ng Mensahe',
    name: 'Pangalan',
    message: 'Mensahe',
    thankYouMessage: 'Salamat sa inyong mensahe! Makikipag-ugnayan kami sa inyo sa lalong madaling panahon.',
    contactNameRequired: 'Kinakailangan ang buong pangalan',
    contactEmailRequired: 'Kinakailangan ang email',
    contactEmailInvalid: 'Pakilagay ang wastong email address',
    contactMessageRequired: 'Kinakailangan ang mensahe',
    fullNameRequired: 'Kinakailangan ang buong pangalan',
    emailRequired: 'Kinakailangan ang email',
    emailInvalid: 'Hindi wasto ang email format',
    phoneRequired: 'Kinakailangan ang numero ng telepono',
    roomTypeRequired: 'Pakipili ang uri ng silid',
    checkInRequired: 'Kinakailangan ang check-in date',
    checkOutRequired: 'Kinakailangan ang check-out date',
    checkOutAfterCheckIn: 'Ang check-out ay dapat na pagkatapos ng check-in',
    pleaseFillRequiredFields: 'Pakikompleto ang lahat ng kinakailangang field bago magpatuloy sa pagbabayad.',
    contactSectionTitle: 'Makipag-ugnayan sa Amin',
    contactSectionSubtitle: 'Ikinagagalak naming marinig kayo',
    contactFullName: 'Buong Pangalan *',
    contactEmail: 'Email *',
    contactPhone: 'Telepono',
    contactMessage: 'Mensahe *',
    contactSendMessage: 'Ipadala ang Mensahe',
    contactInfoTitle: 'Makipag-ugnayan',
    contactAddress: 'Address',
    contactPhoneLabel: 'Telepono',
    contactEmailLabel: 'Email',
    contactDeskLabel: 'Front Desk',
    contactDeskHours: 'Bukás 24/7',
    
    // Sort / Filters
    sortBy: 'Ayusin ayon sa',
    mostPopular: 'Pinakasikat',
    priceLowHigh: 'Presyo: Mababa hanggang Mataas',
    priceHighLow: 'Presyo: Mataas hanggang Mababa',
    newestFirst: 'Pinakabago Muna',
    filterPriceRange: 'Saklaw ng Presyo',
    filterRoomType: 'Uri ng Silid',
    filterAllTypes: 'Lahat ng Uri',
    filterStandard: 'Standard',
    filterSuite: 'Suite',
    filterFamily: 'Pamilya',
    filterMaxGuests: 'Pinakamaraming Bisita',
    filterAnyGuests: 'Anumang bilang',
    filterGuestsTwo: '2 Bisita',
    filterGuestsFour: '4 na Bisita',
    filterClear: 'I-clear ang Mga Filter',
    filterMinPlaceholder: 'Mababa',
    filterMaxPlaceholder: 'Mataas',
    
    // Footer
    quickLinks: 'Mabilis na Links',
    followUs: 'Sundan Kami',
    allRightsReserved: 'Lahat ng karapatan ay nakalaan',
    footerDescription: 'Danasin ang luho na hindi pa nararanasan. Naghihintay ang perpektong pananatili.',
    servicesHeading: 'Mga Serbisyo',
    servicesSpa: 'Spa at Wellness',
    servicesDining: 'Marangyang Kainan',
    servicesEvents: 'Mga Kaganapan',
    servicesConcierge: 'Concierge',
    newsletterHeading: 'Newsletter',
    newsletterText: 'Mag-subscribe para sa mga espesyal na alok at balita',
    newsletterPlaceholder: 'Iyong email',
    newsletterButton: 'Mag-subscribe',
    newsletterThankYou: 'Salamat sa pag-subscribe!',
    newsletterThankYouMessage: 'Matagumpay kang na-subscribe sa aming newsletter. Ipaaalam namin sa inyo ang aming pinakabagong alok at balita.',
    
    // Floating / Chat
    fabBookTitle: 'Mag-book Ngayon',
    fabChatTitle: 'Live Chat',
    fabContactTitle: 'Makipag-ugnayan',
    chatIconTooltip: 'Buksan ang Chat',
    liveChatTitle: 'Live Chat',
    chatMinimize: 'I-minimize',
    chatMaximize: 'I-maximize',
    chatClose: 'Isara',
    
    // General
    searchPlaceholder: 'Maghanap ng mga silid, kaginhawaan...',
    anySpecialRequests: 'Anumang espesyal na kahilingan o pangangailangan...',
    themeBlackGold: 'Black & Gold',
    themeEmerald: 'Emerald Luxury',
    themeRoyal: 'Royal White & Gold',
    togglePassword: 'Ipakita/itago ang password'
  },
  kr: {
    // Navigation
    home: '홈',
    rooms: '객실',
    amenities: '편의시설',
    gallery: '갤러리',
    testimonials: '후기',
    contact: '연락처',
    bookNow: '지금 예약',
    login: '로그인',
    logout: '로그아웃',
    logoutConfirm: '로그아웃하시겠습니까?',
    myBookings: '내 예약',
    profile: '프로필',
    backToHome: '홈으로 돌아가기',
    wishlist: '위시리스트',
    
    // Hero Section
    welcomeTo: '에 오신 것을 환영합니다',
    experienceLuxury: '전례 없는 럭셔리를 경험하세요',
    bookYourStay: '숙박 예약',
    viewRooms: '객실 보기',
    
    // Sections
    featuredRooms: '추천 객실',
    hotelHighlights: '호텔 하이라이트',
    aboutHotel: '호텔 소개',
    ourRooms: '우리 객실',
    ourAmenities: '우리 편의시설',
    roomsSectionTitle: '럭셔리 객실',
    roomsSectionSubtitle: '엄선된 객실과 스위트 중에서 선택하세요',
    amenitiesSectionTitle: '월드 클래스 편의시설',
    amenitiesSectionSubtitle: '완벽한 투숙을 위한 모든 것',
    gallerySectionTitle: '포토 갤러리',
    gallerySectionSubtitle: '아름다운 호텔을 미리 만나보세요',
    whatGuestsSay: '고객 후기',
    realExperiences: '소중한 고객들의 실제 경험',
    frequentlyAsked: '자주 묻는 질문',
    everythingYouNeed: '필요한 모든 정보',
    nearbyAttractions: '주변 명소',
    exploreAround: '주변을 탐험하세요',
    
    // Highlights
    luxuryPoolTitle: '럭셔리 풀',
    luxuryPoolDescription: '멋진 인피니티 풀에서 휴식하세요',
    fineDiningTitle: '파인 다이닝',
    fineDiningDescription: '수상 경력의 레스토랑',
    spaWellnessTitle: '스파 & 웰니스',
    spaWellnessDescription: '몸과 마음을 재충전하세요',
    service247Title: '24/7 서비스',
    service247Description: '연중무휴 컨시어지',
    
    // About
    aboutStayUpTitle: 'StayUp 소개',
    aboutStayUpLead: '럭셔리와 전통의 만남',
    aboutStayUpBody1: '도심 한가운데 위치한 StayUp은 비교할 수 없는 럭셔리와 편안함을 제공합니다. 우아한 객실과 세계적 수준의 편의시설, 탁월한 서비스가 잊지 못할 추억을 만들어 드립니다.',
    aboutStayUpBody2: '20년 이상의 호스피탈리티 경험으로 전통적인 우아함과 현대적인 세련미를 결합해 잊지 못할 경험을 선사합니다.',
    aboutStayUpButton: '자세히 보기',
    
    // Room Cards
    viewDetails: '상세 보기',
    viewButton: '보기',
    compare: '비교',
    perNight: '/박',
    upTo: '최대',
    guests: '명',
    recentlyViewed: '최근 본 객실',
    
    // Booking
    bookingForm: '예약 양식',
    fullName: '성명',
    email: '이메일',
    phone: '전화번호',
    roomType: '객실 유형',
    numberOfGuests: '인원 수',
    checkIn: '체크인 날짜',
    checkOut: '체크아웃 날짜',
    specialRequests: '특별 요청사항',
    discountCode: '할인 코드 (선택사항)',
    enterCode: '코드 입력',
    apply: '적용',
    discountApplied: '할인이 적용되었습니다!',
    discountSuccess: '할인 코드가 적용되었습니다!',
    discountInvalid: '유효하지 않은 할인 코드입니다',
    priceSummary: '요금 요약',
    roomRate: '객실 요금',
    night: '박',
    nights: '박',
    subtotal: '소계',
    taxesFees: '세금 및 수수료',
    included: '포함',
    total: '총액',
    cancel: '취소',
    confirmBooking: '예약 확인',
    proceedToPayment: '결제 진행',
    viewSummary: '요약 보기',
    editBooking: '예약 수정',
    
    // Payment
    payment: '결제',
    selectPaymentMethod: '결제 방법 선택',
    cardholderName: '카드 소유자 이름',
    cardNumber: '카드 번호',
    expiry: '만료일',
    cvv: 'CVV',
    payNow: '지금 결제',
    cardDetailsInvalid: '카드 정보를 모두 입력하세요',
    accountNumberRequired: '계좌번호가 필요합니다',
    accountNumberInvalid: '잘못된 계좌번호입니다. 유효한 휴대폰 번호를 입력하세요 (09XX XXX XXXX)',
    paypalEmailRequired: 'PayPal 이메일이 필요합니다',
    paypalEmailInvalid: '잘못된 PayPal 이메일 주소입니다',
    paymentDetailsInvalid: '결제 정보를 모두 입력하세요',
    enterAccountNumber: '휴대폰 번호를 입력하세요',
    enterPayPalEmail: 'PayPal 이메일 주소를 입력하세요',
    accountNumber: '계좌번호',
    paymentSuccessful: '결제 성공!',
    bookingConfirmed: '예약이 확인되었습니다.',
    redirectMessage: '{method} 결제 게이트웨이로 리디렉션됩니다.',
    
    // Booking Summary
    bookingSummary: '예약 요약',
    room: '객실',
    discount: '할인',
    totalPrice: '총 요금',
    
    // Booking Confirmation
    bookingConfirmedTitle: '예약 확인',
    bookingConfirmedText: '예약이 확인되었습니다!',
    bookingReference: '예약 참조 번호',
    bookingDetails: '예약 세부사항',
    confirmationEmailSent: '확인 이메일이 다음으로 전송되었습니다',
    done: '완료',
    
    // Room Details
    description: '설명',
    size: '크기',
    maxGuests: '최대 인원',
    proceedToBooking: '예약 진행',
    close: '닫기',
    
    // Comparison
    compareRooms: '객실 비교',
    feature: '기능',
    price: '가격',
    action: '작업',
    remove: '제거',
    compareLimit: '{max}개까지 비교할 수 있습니다',
    compareDuplicate: '이미 비교 목록에 있는 객실입니다',
    compareMinimum: '비교하려면 최소 2개의 객실을 선택하세요',
    
    // User
    register: '회원가입',
    dontHaveAccount: '계정이 없으신가요?',
    alreadyHaveAccount: '이미 계정이 있으신가요?',
    password: '비밀번호',
    confirmPassword: '비밀번호 확인',
    fullNamePlaceholder: '성명을 입력하세요',
    emailPlaceholder: '이메일을 입력하세요',
    loginSuccessful: '로그인 성공!',
    loginRequired: '로그인 필요',
    pleaseLoginFirst: '객실을 예약하려면 먼저 로그인하세요',
    loginToBookMessage: '예약을 하려면 로그인이 필요합니다. 계속하려면 로그인하거나 계정을 만드세요.',
    loginNow: '지금 로그인',
    createAccount: '계정 만들기',
    registrationSuccessful: '회원가입 성공!',
    invalidCredentials: '이메일 또는 비밀번호가 올바르지 않습니다',
    passwordsNotMatch: '비밀번호가 일치하지 않습니다',
    emailExists: '이미 등록된 이메일입니다',
    profileEmailExists: '이미 사용 중인 이메일입니다. 다른 이메일을 사용하세요.',
    profileUpdateSuccess: '프로필이 성공적으로 업데이트되었습니다!',
    profileFillRequired: '필수 항목을 모두 입력하세요',
    passwordFieldsRequired: '비밀번호 필드를 모두 입력하세요',
    passwordMismatch: '새 비밀번호가 일치하지 않습니다',
    passwordShort: '새 비밀번호는 최소 6자 이상이어야 합니다',
    passwordIncorrect: '현재 비밀번호가 일치하지 않습니다',
    passwordChangeSuccess: '비밀번호가 변경되었습니다!',
    
    // Auth Screens
    loginTitle: '로그인',
    loginSubtitle: '럭셔리 경험을 계속하려면 로그인하세요',
    rememberMe: '기억하기',
    forgotPassword: '비밀번호를 잊으셨나요?',
    loginButton: '로그인',
    loginSigningIn: '로그인 중...',
    registerPrompt: '계정이 없으신가요?',
    registerLink: '회원가입',
    registerTitle: '계정 만들기',
    registerSubtitle: '럭셔리 커뮤니티에 가입하세요',
    registerFullName: '성명',
    registerEmail: '이메일 주소',
    registerPassword: '비밀번호',
    registerConfirmPassword: '비밀번호 확인',
    registerButton: '계정 만들기',
    registerCreating: '생성 중...',
    registerExistingPrompt: '이미 계정이 있으신가요?',
    registerSignIn: '로그인',
    guest: '게스트',
    loginFormError: '모든 항목을 정확히 입력하세요',
    registerErrorName: '이름을 입력하세요',
    registerErrorEmail: '이메일을 입력하세요',
    registerErrorEmailInvalid: '유효한 이메일 주소를 입력하세요',
    registerErrorPasswordLength: '비밀번호는 최소 6자 이상이어야 합니다',
    registerErrorMismatch: '비밀번호가 일치하지 않습니다',
    loginSuccessHeading: '{name}님, 환영합니다!',
    loginSuccessMessage: '성공적으로 로그인되었습니다. 홈페이지로 이동합니다...',
    registerSuccessHeading: '{name}님, 환영합니다!',
    registerSuccessMessage: '계정이 생성되었습니다. 로그인 페이지로 이동합니다...',
    
    // Dashboard
    noBookings: '아직 예약이 없습니다. 지금 예약을 시작하세요!',
    confirmed: '확인됨',
    bookingReferenceLabel: '예약 참조',
    cancelBooking: '취소',
    cancelBookingConfirm: '이 예약을 취소하시겠습니까?',
    bookingCancelled: '예약이 성공적으로 취소되었습니다',
    
    // Chat
    liveChatSupport: '실시간 채팅 지원',
    weAreHere: '도와드리겠습니다',
    typeMessage: '메시지를 입력하세요...',
    chatWelcome: '안녕하세요! StayUp에 오신 것을 환영합니다. 무엇을 도와드릴까요?',
    chatResponseFriendly: '메시지를 보내주셔서 감사합니다! 곧 답변드리겠습니다.',
    chatResponseHelp: '객실 예약, 편의시설 또는 호텔 관련 문의를 도와드릴 수 있습니다.',
    chatResponseOffers: '특별 프로모션에 대해 더 알고 싶으신가요?',
    chatResponseDesk: '프런트 데스크는 24시간 내내 도움을 드립니다.',
    
    // FAQ
    checkInOut: '체크인 및 체크아웃 시간은 언제인가요?',
    checkInOutAnswer: '체크인은 오후 3시부터 가능하며, 체크아웃은 오후 12시까지입니다. 요청 시 조기 체크인 및 늦은 체크아웃이 가능할 수 있습니다.',
    freeWifi: '무료 WiFi를 제공하나요?',
    freeWifiAnswer: '네, 모든 고객을 위해 호텔 전역에 무료 고속 WiFi를 제공합니다.',
    parking: '주차가 가능한가요?',
    parkingAnswer: '네, 모든 고객을 위해 무료 발렛 주차를 제공합니다. 셀프 주차도 가능합니다.',
    swimmingPool: '수영장이 있나요?',
    swimmingPoolAnswer: '네, 고객을 위한 럭셔리 야외 인피니티 풀과 풀사이드 바 및 카바나가 있습니다.',
    petsAllowed: '반려동물이 허용되나요?',
    petsAllowedAnswer: '지정된 반려동물 친화적 객실에서 반려동물을 환영합니다. 사전에 알려주시면 추가 요금이 적용될 수 있습니다.',
    cancellationPolicy: '취소 정책은 무엇인가요?',
    cancellationPolicyAnswer: '체크인 24시간 전까지 무료 취소가 가능합니다. 그 이후에는 선택한 요금 유형에 따라 취소 수수료가 적용될 수 있습니다.',
    
    // Contact
    getInTouch: '연락하기',
    sendMessage: '메시지 보내기',
    name: '이름',
    message: '메시지',
    thankYouMessage: '메시지를 보내주셔서 감사합니다! 곧 연락드리겠습니다.',
    contactNameRequired: '성명을 입력하세요',
    contactEmailRequired: '이메일을 입력하세요',
    contactEmailInvalid: '유효한 이메일 주소를 입력하세요',
    contactMessageRequired: '메시지를 입력하세요',
    fullNameRequired: '성명을 입력하세요',
    emailRequired: '이메일을 입력하세요',
    emailInvalid: '잘못된 이메일 형식입니다',
    phoneRequired: '전화번호를 입력하세요',
    roomTypeRequired: '객실 유형을 선택하세요',
    checkInRequired: '체크인 날짜를 입력하세요',
    checkOutRequired: '체크아웃 날짜를 입력하세요',
    checkOutAfterCheckIn: '체크아웃은 체크인 이후여야 합니다',
    pleaseFillRequiredFields: '결제를 진행하기 전에 모든 필수 필드를 입력하세요.',
    contactSectionTitle: '문의하기',
    contactSectionSubtitle: '여러분의 목소리를 기다립니다',
    contactFullName: '성명 *',
    contactEmail: '이메일 *',
    contactPhone: '전화번호',
    contactMessage: '메시지 *',
    contactSendMessage: '메시지 보내기',
    contactInfoTitle: '연락처',
    contactAddress: '주소',
    contactPhoneLabel: '전화',
    contactEmailLabel: '이메일',
    contactDeskLabel: '프런트 데스크',
    contactDeskHours: '연중무휴 24시간',
    
    // Sort / Filters
    sortBy: '정렬 기준',
    mostPopular: '인기순',
    priceLowHigh: '가격: 낮은 순',
    priceHighLow: '가격: 높은 순',
    newestFirst: '최신순',
    filterPriceRange: '가격 범위',
    filterRoomType: '객실 유형',
    filterAllTypes: '전체',
    filterStandard: '스탠다드',
    filterSuite: '스위트',
    filterFamily: '패밀리',
    filterMaxGuests: '최대 인원',
    filterAnyGuests: '제한 없음',
    filterGuestsTwo: '2명',
    filterGuestsFour: '4명',
    filterClear: '필터 초기화',
    filterMinPlaceholder: '최소',
    filterMaxPlaceholder: '최대',
    
    // Footer
    quickLinks: '빠른 링크',
    followUs: '팔로우하기',
    allRightsReserved: '모든 권리 보유',
    footerDescription: '한 번도 경험하지 못한 럭셔리를 느껴보세요. 완벽한 여정이 기다립니다.',
    servicesHeading: '서비스',
    servicesSpa: '스파 & 웰니스',
    servicesDining: '파인 다이닝',
    servicesEvents: '이벤트',
    servicesConcierge: '컨시어지',
    newsletterHeading: '뉴스레터',
    newsletterText: '특별한 혜택과 소식을 받아보세요',
    newsletterPlaceholder: '이메일 주소',
    newsletterButton: '구독하기',
    newsletterThankYou: '구독해 주셔서 감사합니다!',
    newsletterThankYouMessage: '뉴스레터 구독이 성공적으로 완료되었습니다. 최신 혜택과 소식을 계속 업데이트해 드리겠습니다.',
    
    // Floating / Chat
    fabBookTitle: '지금 예약',
    fabChatTitle: '라이브 채팅',
    fabContactTitle: '연락하기',
    chatIconTooltip: '채팅 열기',
    liveChatTitle: '라이브 채팅',
    chatMinimize: '최소화',
    chatMaximize: '최대화',
    chatClose: '닫기',
    
    // General
    searchPlaceholder: '객실, 편의시설 검색...',
    anySpecialRequests: '특별 요청사항이나 요구사항...',
    themeBlackGold: '블랙 & 골드',
    themeEmerald: '에메랄드 럭셔리',
    themeRoyal: '로얄 화이트 & 골드',
    togglePassword: '비밀번호 보기/숨기기'
  }
};

const app = angular.module('hotelApp', []);

app.factory('LanguageService', ['$rootScope', function($rootScope) {
  const languages = APP_LANGUAGES;
  let currentLanguage = localStorage.getItem('language') || 'en';

  function setLangAttribute() {
    document.documentElement.setAttribute('lang', currentLanguage);
  }
  setLangAttribute();

  function translate(key) {
    if (!key) return '';
    return (languages[currentLanguage] && languages[currentLanguage][key]) || languages.en[key] || key;
  }

  function translateWithReplacements(key, replacements) {
    let text = translate(key);
    if (replacements) {
      Object.keys(replacements).forEach(function(placeholder) {
        text = text.replace('{' + placeholder + '}', replacements[placeholder]);
      });
    }
    return text;
  }

  return {
    getLanguages: function() { return languages; },
    getCurrentLanguage: function() { return currentLanguage; },
    setLanguage: function(lang) {
      if (!languages[lang]) {
        lang = 'en';
      }
      currentLanguage = lang;
      localStorage.setItem('language', lang);
      setLangAttribute();
      $rootScope.$broadcast('languageChanged', lang);
    },
    t: translate,
    tReplace: translateWithReplacements
  };
}]);

app.controller('MainCtrl', ['$scope', '$timeout', 'LanguageService', function($scope, $timeout, LanguageService) {
    const vm = this;
    vm.year = new Date().getFullYear();
    vm.currentPage = 'home';

    // ============================================
    // USER PROFILE
    // ============================================
    vm.profile = {
      name: localStorage.getItem('userName') || 'Guest',
      email: localStorage.getItem('userEmail') || '',
      avatar: localStorage.getItem('userAvatar') || null
    };

    vm.logout = function() {
      if (confirm(vm.t('logoutConfirm'))) {
        localStorage.removeItem('userName');
        localStorage.removeItem('userAvatar');
        localStorage.removeItem('userEmail');
        vm.profile.name = 'Guest';
        vm.profile.email = '';
        // Redirect to login page
        window.location.href = 'login.html';
      }
    };
    
    // ============================================
    // PROFILE MODAL
    // ============================================
    vm.showProfileModal = false;
    vm.profileForm = {
      name: '',
      email: '',
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    };
    
    vm.openProfile = function() {
      // Allow profile access even for guests (they can still view but need to login to edit)
      if (vm.profile.name === 'Guest' || !vm.profile.email) {
        // Show login modal instead of redirecting
        vm.openLogin();
        return;
      }
      
      // Load current profile data
      vm.profileForm.name = vm.profile.name;
      vm.profileForm.email = vm.profile.email;
      vm.profileForm.currentPassword = '';
      vm.profileForm.newPassword = '';
      vm.profileForm.confirmPassword = '';
      
      // Load avatar from localStorage
      vm.profile.avatar = localStorage.getItem('userAvatar') || null;
      
      // Load user bookings
      vm.userBookings = JSON.parse(localStorage.getItem('bookings') || '[]').filter(function(b) {
        return b.email === vm.profile.email;
      });
      
      // Update profile stats to ensure counts are fresh
      vm.updateProfileStats();
      
      vm.showProfileModal = true;
      document.body.classList.add('modal-open');
    };
    
    vm.refreshBookings = function() {
      vm.userBookings = JSON.parse(localStorage.getItem('bookings') || '[]').filter(function(b) {
        return b.email === vm.profile.email;
      });
      // Also update wishlist count
      vm.updateProfileStats();
    };

    // Update profile stats (bookings and wishlist counts)
    vm.updateProfileStats = function() {
      // Refresh wishlist count
      vm.wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
      
      // Refresh bookings count
      var userEmail = vm.profile.email || localStorage.getItem('userEmail');
      vm.userBookings = JSON.parse(localStorage.getItem('bookings') || '[]').filter(function(b) {
        return b.email === userEmail;
      });
    };
    
    vm.closeProfile = function() {
      vm.showProfileModal = false;
      document.body.classList.remove('modal-open');
      // Reset form
      vm.profileForm.currentPassword = '';
      vm.profileForm.newPassword = '';
      vm.profileForm.confirmPassword = '';
    };

    // ============================================
    // AVATAR UPLOAD
    // ============================================
    vm.changeAvatar = function() {
      const fileInput = document.getElementById('avatar-upload');
      if (fileInput) {
        fileInput.click();
      }
    };

    vm.handleAvatarUpload = function(event) {
      const file = event.target.files[0];
      if (!file) {
        return;
      }

      // Validate file type
      if (!file.type.match('image.*')) {
        alert('Please select an image file.');
        event.target.value = '';
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB.');
        event.target.value = '';
        return;
      }

      // Read file as base64
      const reader = new FileReader();
      reader.onload = function(e) {
        const base64Image = e.target.result;
        
        // Save to localStorage
        localStorage.setItem('userAvatar', base64Image);
        
        // Update profile within Angular context
        $scope.$apply(function() {
          vm.profile.avatar = base64Image;
        });
        
        // Show success notification
        if (vm.showNotification) {
          vm.showNotification('Profile picture updated successfully!', 'success');
        }
      };
      
      reader.onerror = function() {
        alert('Error reading the image file. Please try again.');
        event.target.value = '';
      };
      
      reader.readAsDataURL(file);
    };
    
    vm.updateProfile = function($event) {
      if ($event) {
        $event.preventDefault();
      }
      
      // Update name and email
      if (vm.profileForm.name && vm.profileForm.email) {
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(vm.profileForm.email)) {
          alert(vm.t('contactEmailInvalid'));
          return;
        }
        
        // Store old email before update
        const oldEmail = vm.profile.email;
        
        // Update users array first to check for duplicate email
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const userIndex = users.findIndex(function(u) {
          return u.email === oldEmail;
        });
        
        if (userIndex > -1) {
          // Check if new email already exists (and it's not the current user)
          const emailExists = users.some(function(u, index) {
            return u.email === vm.profileForm.email && index !== userIndex;
          });
          
          if (emailExists) {
            alert(vm.t('profileEmailExists'));
            // Revert email in form
            vm.profileForm.email = oldEmail;
            return;
          }
          
          // Update user in array
          users[userIndex].name = vm.profileForm.name;
          users[userIndex].email = vm.profileForm.email;
          localStorage.setItem('users', JSON.stringify(users));
          
          // Update bookings with new email if email changed
          if (oldEmail !== vm.profileForm.email) {
            const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
            bookings.forEach(function(booking) {
              if (booking.email === oldEmail) {
                booking.email = vm.profileForm.email;
              }
            });
            localStorage.setItem('bookings', JSON.stringify(bookings));
          }
        }
        
        // Update localStorage
        localStorage.setItem('userName', vm.profileForm.name);
        localStorage.setItem('userEmail', vm.profileForm.email);
        
        // Update profile
        vm.profile.name = vm.profileForm.name;
        vm.profile.email = vm.profileForm.email;
        
        alert(vm.t('profileUpdateSuccess'));
        vm.closeProfile();
      } else {
        alert(vm.t('profileFillRequired'));
      }
    };
    
    vm.changePassword = function($event) {
      if ($event) {
        $event.preventDefault();
      }
      
      if (!vm.profileForm.currentPassword || !vm.profileForm.newPassword || !vm.profileForm.confirmPassword) {
        alert(vm.t('passwordFieldsRequired'));
        return;
      }
      
      if (vm.profileForm.newPassword !== vm.profileForm.confirmPassword) {
        alert(vm.t('passwordMismatch'));
        return;
      }
      
      if (vm.profileForm.newPassword.length < 6) {
        alert(vm.t('passwordShort'));
        return;
      }
      
      // Verify current password
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find(function(u) {
        return u.email === vm.profile.email;
      });
      
      if (!user || user.password !== vm.profileForm.currentPassword) {
        alert(vm.t('passwordIncorrect'));
        return;
      }
      
      // Update password
      user.password = vm.profileForm.newPassword;
      localStorage.setItem('users', JSON.stringify(users));
      
      alert(vm.t('passwordChangeSuccess'));
      vm.profileForm.currentPassword = '';
      vm.profileForm.newPassword = '';
      vm.profileForm.confirmPassword = '';
    };

    // ============================================
    // ROOMS DATA
    // ============================================
    vm.rooms = [
      {
        id: 1,
        name: 'Deluxe Suite',
        type: 'Suite',
        price: 8500,
        image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop',
        images: [
          'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop'
        ],
        description: 'Spacious suite with elegant furnishings, premium amenities, and stunning city views.',
        amenities: ['WiFi', 'TV', 'AC', 'Mini Bar', 'Balcony'],
        maxGuests: 2,
        size: '45 sqm'
      },
      {
        id: 2,
        name: 'Executive Room',
        type: 'Standard',
        price: 6500,
        image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop',
        images: [
          'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop'
        ],
        description: 'Comfortable executive room perfect for business travelers with modern amenities.',
        amenities: ['WiFi', 'TV', 'AC', 'Work Desk'],
        maxGuests: 2,
        size: '35 sqm'
      },
      {
        id: 3,
        name: 'Presidential Suite',
        type: 'Suite',
        price: 15000,
        image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop',
        images: [
          'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop'
        ],
        description: 'Luxurious presidential suite with premium furnishings, private balcony, and exclusive services.',
        amenities: ['WiFi', 'TV', 'AC', 'Mini Bar', 'Balcony', 'Jacuzzi', 'Butler Service'],
        maxGuests: 4,
        size: '80 sqm',
        fav: true
      },
      {
        id: 4,
        name: 'Family Room',
        type: 'Family',
        price: 9500,
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop',
        images: [
          'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop'
        ],
        description: 'Spacious family room with multiple beds, perfect for families with children.',
        amenities: ['WiFi', 'TV', 'AC', 'Extra Beds', 'Play Area'],
        maxGuests: 4,
        size: '50 sqm'
      },
      {
        id: 5,
        name: 'Ocean View Room',
        type: 'Standard',
        price: 7500,
        image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop',
        images: [
          'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop'
        ],
        description: 'Beautiful room with panoramic ocean views, perfect for a relaxing getaway.',
        amenities: ['WiFi', 'TV', 'AC', 'Ocean View', 'Balcony'],
        maxGuests: 2,
        size: '40 sqm'
      },
      {
        id: 6,
        name: 'Garden Suite',
        type: 'Suite',
        price: 8800,
        image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop',
        images: [
          'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop'
        ],
        description: 'Tranquil suite overlooking our beautiful gardens, offering peace and serenity.',
        amenities: ['WiFi', 'TV', 'AC', 'Garden View', 'Balcony', 'Private Terrace'],
        maxGuests: 2,
        size: '48 sqm',
        fav: true
      },
      {
        id: 7,
        name: 'Penthouse Suite',
        type: 'Luxury',
        price: 18000,
        image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop',
        images: [
          'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop'
        ],
        description: 'Ultra-luxurious penthouse with panoramic views, private elevator access, and exclusive amenities.',
        amenities: ['WiFi', 'TV', 'AC', 'Mini Bar', 'Balcony', 'Jacuzzi', 'Butler Service', 'Private Elevator', 'Wine Cellar'],
        maxGuests: 6,
        size: '120 sqm',
        fav: true
      },
      {
        id: 8,
        name: 'Business Class Room',
        type: 'Business',
        price: 7200,
        image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop',
        images: [
          'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop'
        ],
        description: 'Designed for business travelers with ergonomic workspace, high-speed internet, and meeting facilities.',
        amenities: ['WiFi', 'TV', 'AC', 'Work Desk', 'Printer', 'Meeting Table', 'Express Check-in'],
        maxGuests: 2,
        size: '38 sqm'
      },
      {
        id: 9,
        name: 'Honeymoon Suite',
        type: 'Romantic',
        price: 12000,
        image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&h=600&fit=crop',
        images: [
          'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop'
        ],
        description: 'Romantic suite perfect for couples with rose petals, champagne, and stunning sunset views.',
        amenities: ['WiFi', 'TV', 'AC', 'Mini Bar', 'Balcony', 'Jacuzzi', 'Romantic Decor', 'Champagne Service'],
        maxGuests: 2,
        size: '55 sqm',
        fav: true
      },
      {
        id: 10,
        name: 'Standard Room',
        type: 'Standard',
        price: 4500,
        image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop',
        images: [
          'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop'
        ],
        description: 'Comfortable and affordable standard room with all essential amenities for a pleasant stay.',
        amenities: ['WiFi', 'TV', 'AC', 'Mini Fridge'],
        maxGuests: 2,
        size: '28 sqm'
      },
      {
        id: 11,
        name: 'Poolside Villa',
        type: 'Villa',
        price: 14000,
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
        images: [
          'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop'
        ],
        description: 'Private villa with direct pool access, outdoor terrace, and tropical garden views.',
        amenities: ['WiFi', 'TV', 'AC', 'Mini Bar', 'Private Pool Access', 'Outdoor Terrace', 'Garden View', 'Kitchenette'],
        maxGuests: 4,
        size: '65 sqm',
        fav: true
      },
      {
        id: 12,
        name: 'Studio Apartment',
        type: 'Apartment',
        price: 6800,
        image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
        images: [
          'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop'
        ],
        description: 'Fully equipped studio apartment with kitchenette, perfect for extended stays.',
        amenities: ['WiFi', 'TV', 'AC', 'Kitchenette', 'Dining Area', 'Work Desk'],
        maxGuests: 2,
        size: '42 sqm'
      },
      {
        id: 13,
        name: 'Accessible Room',
        type: 'Accessible',
        price: 5500,
        image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop',
        images: [
          'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop'
        ],
        description: 'Wheelchair accessible room with wide doorways, roll-in shower, and accessible amenities.',
        amenities: ['WiFi', 'TV', 'AC', 'Accessible Bathroom', 'Wheelchair Access', 'Emergency Call Button'],
        maxGuests: 2,
        size: '35 sqm'
      },
      {
        id: 14,
        name: 'Junior Suite',
        type: 'Suite',
        price: 7800,
        image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop',
        images: [
          'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop'
        ],
        description: 'Spacious junior suite with separate living area and premium amenities.',
        amenities: ['WiFi', 'TV', 'AC', 'Mini Bar', 'Living Area', 'Sofa', 'Balcony'],
        maxGuests: 3,
        size: '50 sqm'
      },
      {
        id: 15,
        name: 'City View Room',
        type: 'Standard',
        price: 6200,
        image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop',
        images: [
          'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop'
        ],
        description: 'Modern room with stunning city skyline views, perfect for urban explorers.',
        amenities: ['WiFi', 'TV', 'AC', 'City View', 'Balcony', 'Work Desk'],
        maxGuests: 2,
        size: '32 sqm'
      }
    ];

    // ============================================
    // FILTERS
    // ============================================
    vm.filters = {
      priceRange: { min: 0, max: 20000 },
      roomType: '',
      maxGuests: null,
      availability: true
    };

    vm.filteredRooms = angular.copy(vm.rooms);

    vm.applyFilters = function() {
      vm.filteredRooms = vm.rooms.filter(function(room) {
        const priceMatch = room.price >= vm.filters.priceRange.min && room.price <= vm.filters.priceRange.max;
        const typeMatch = !vm.filters.roomType || room.type === vm.filters.roomType;
        const guestsMatch = !vm.filters.maxGuests || room.maxGuests >= vm.filters.maxGuests;
        return priceMatch && typeMatch && guestsMatch;
      });
    };

    vm.clearFilters = function() {
      vm.filters = {
        priceRange: { min: 0, max: 20000 },
        roomType: '',
        maxGuests: null,
        availability: true
      };
      vm.filteredRooms = angular.copy(vm.rooms);
    };

    // ============================================
    // MODALS
    // ============================================
    vm.showBookingModal = false;
    vm.showRoomDetailsModal = false;
    vm.showGalleryModal = false;
    vm.selectedRoom = null;
    vm.selectedImage = null;

    vm.openBookingModal = function(room) {
      // Check if user is logged in
      const userName = localStorage.getItem('userName');
      const userEmail = localStorage.getItem('userEmail');
      
      if (!userName || !userEmail || userName === 'Guest') {
        // User is not logged in - show login prompt
        vm.showLoginPromptModal = true;
        vm.pendingBookingRoom = room; // Store room for after login
        document.body.classList.add('modal-open');
        return;
      }
      
      // User is logged in - proceed with booking
      if (room) vm.selectedRoom = angular.copy(room);
      vm.showBookingModal = true;
      document.body.classList.add('modal-open');
      const today = new Date().toISOString().split('T')[0];
      vm.bookingForm = {
        fullName: userName,
        email: userEmail,
        phone: '',
        roomType: room ? room.name : '',
        guests: 1,
        checkIn: today,
        checkOut: '',
        specialRequests: ''
      };
      vm.minCheckInDate = today;
      vm.calculatePrice();
      $timeout(function() {
        const checkInInput = document.querySelector('input[ng-model="vm.bookingForm.checkIn"]');
        const checkOutInput = document.querySelector('input[ng-model="vm.bookingForm.checkOut"]');
        if (checkInInput) checkInInput.setAttribute('min', today);
        if (checkOutInput) checkOutInput.setAttribute('min', today);
      }, 100);
    };

    vm.closeBookingModal = function() {
      vm.showBookingModal = false;
      vm.bookingForm = {};
      vm.selectedRoom = null;
      document.body.classList.remove('modal-open');
    };

    vm.openRoomDetails = function(room) {
      vm.selectedRoom = angular.copy(room);
      vm.showRoomDetailsModal = true;
      document.body.classList.add('modal-open');
      $timeout(function() {
        // Initialize carousel after modal opens
        const carousel = document.querySelector('#roomCarousel');
        if (carousel) {
          const bsCarousel = new bootstrap.Carousel(carousel);
        }
      }, 300);
    };

    vm.closeRoomDetails = function() {
      vm.showRoomDetailsModal = false;
      vm.selectedRoom = null;
      document.body.classList.remove('modal-open');
    };

    vm.openGallery = function(image) {
      vm.selectedImage = image;
      vm.showGalleryModal = true;
      document.body.classList.add('modal-open');
    };

    vm.closeGallery = function() {
      vm.showGalleryModal = false;
      vm.selectedImage = null;
      document.body.classList.remove('modal-open');
    };

    // ============================================
    // BOOKING FORM
    // ============================================
    vm.bookingForm = {
      fullName: '',
      email: '',
      phone: '',
      roomType: '',
      guests: 1,
      checkIn: '',
      checkOut: '',
      specialRequests: ''
    };

    vm.formErrors = {};

    vm.validateForm = function() {
      vm.formErrors = {};
      let isValid = true;

      if (!vm.bookingForm.fullName || !vm.bookingForm.fullName.trim()) {
        vm.formErrors.fullName = vm.t('fullNameRequired') || 'Full name is required';
        isValid = false;
      }

      if (!vm.bookingForm.email || !vm.bookingForm.email.trim()) {
        vm.formErrors.email = vm.t('emailRequired') || 'Email is required';
        isValid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(vm.bookingForm.email.trim())) {
        vm.formErrors.email = vm.t('emailInvalid') || 'Invalid email format';
        isValid = false;
      }

      if (!vm.bookingForm.phone || !vm.bookingForm.phone.trim()) {
        vm.formErrors.phone = vm.t('phoneRequired') || 'Phone number is required';
        isValid = false;
      }

      if (!vm.bookingForm.roomType) {
        vm.formErrors.roomType = vm.t('roomTypeRequired') || 'Please select a room type';
        isValid = false;
      }

      if (!vm.bookingForm.checkIn) {
        vm.formErrors.checkIn = vm.t('checkInRequired') || 'Check-in date is required';
        isValid = false;
      }

      if (!vm.bookingForm.checkOut) {
        vm.formErrors.checkOut = vm.t('checkOutRequired') || 'Check-out date is required';
        isValid = false;
      }

      if (vm.bookingForm.checkIn && vm.bookingForm.checkOut) {
        const checkIn = new Date(vm.bookingForm.checkIn);
        const checkOut = new Date(vm.bookingForm.checkOut);
        if (checkOut <= checkIn) {
          vm.formErrors.checkOut = vm.t('checkOutAfterCheckIn') || 'Check-out must be after check-in';
          isValid = false;
        }
      }

      return isValid;
    };

    vm.calculatePrice = function() {
      // Find selected room by name if not directly set
      if (!vm.selectedRoom && vm.bookingForm.roomType) {
        vm.selectedRoom = vm.rooms.find(function(r) {
          return r.name === vm.bookingForm.roomType;
        });
      }
      
      if (!vm.selectedRoom || !vm.bookingForm.checkIn || !vm.bookingForm.checkOut) {
        vm.totalNights = 0;
        vm.totalPrice = 0;
        return;
      }

      const checkIn = new Date(vm.bookingForm.checkIn);
      const checkOut = new Date(vm.bookingForm.checkOut);
      const diffTime = Math.abs(checkOut - checkIn);
      vm.totalNights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      vm.totalPrice = vm.selectedRoom.price * vm.totalNights;
      
      // Update min date for check-out
      if (vm.bookingForm.checkIn) {
        const nextDay = new Date(checkIn);
        nextDay.setDate(nextDay.getDate() + 1);
        vm.minCheckOutDate = nextDay.toISOString().split('T')[0];
        $timeout(function() {
          const checkOutInput = document.querySelector('input[ng-model="vm.bookingForm.checkOut"]');
          if (checkOutInput) checkOutInput.setAttribute('min', vm.minCheckOutDate);
        }, 100);
      }
    };

    vm.submitBooking = function() {
      // Generate booking reference
      const bookingRef = 'HNY' + Date.now().toString().slice(-8);

      const bookingData = {
        reference: bookingRef,
        ...vm.bookingForm,
        room: vm.selectedRoom,
        totalNights: vm.totalNights,
        totalPrice: vm.totalPrice,
        bookingDate: new Date().toISOString(),
        email: vm.bookingForm.email || localStorage.getItem('userEmail')
      };

      // Save to localStorage (in real app, send to server)
      let bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
      bookings.push(bookingData);
      localStorage.setItem('bookings', JSON.stringify(bookings));

      // Update profile stats to refresh booking count
      vm.updateProfileStats();

      // Close modals
      vm.closeBookingModal();
      vm.showPaymentModal = false;
      
      // Show email confirmation preview
      vm.showEmailConfirmation = true;
      vm.bookingReference = bookingRef;
    };

    vm.showEmailConfirmation = false;
    vm.bookingReference = '';
    vm.closeEmailConfirmation = function() {
      vm.showEmailConfirmation = false;
    };

    // ============================================
    // AMENITIES
    // ============================================
    vm.amenities = [
      {
        icon: 'fa-swimming-pool',
        title: 'Swimming Pool',
        description: 'Luxurious outdoor pool with poolside bar and cabanas'
      },
      {
        icon: 'fa-dumbbell',
        title: 'Fitness Center',
        description: 'State-of-the-art gym with modern equipment'
      },
      {
        icon: 'fa-utensils',
        title: 'Fine Dining',
        description: 'Award-winning restaurant serving international cuisine'
      },
      {
        icon: 'fa-wifi',
        title: 'Free WiFi',
        description: 'High-speed internet throughout the hotel'
      },
      {
        icon: 'fa-car',
        title: 'Parking',
        description: 'Complimentary valet parking service'
      },
      {
        icon: 'fa-concierge-bell',
        title: '24/7 Front Desk',
        description: 'Round-the-clock concierge service'
      }
    ];

    // ============================================
    // GALLERY
    // ============================================
    vm.galleryImages = [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop'
    ];

    // ============================================
    // TESTIMONIALS
    // ============================================
    vm.testimonials = [
      {
        name: 'Mharon Vergara',
        location: 'Philippines',
        rating: 5,
        text: 'Absolutely stunning hotel! The service was impeccable and the rooms were luxurious. Will definitely return!'
      },
      {
        name: 'Raiden Villapando',
        location: 'Philippines',
        rating: 5,
        text: 'Best hotel experience I\'ve ever had. The attention to detail and personalized service exceeded all expectations.'
      },
      {
        name: 'Yuan Philip Cortez',
        location: 'Philippines',
        rating: 5,
        text: 'The Presidential Suite was breathtaking. Every moment of our stay was perfect. Highly recommended!'
      },
      {
        name: 'Ma allaine Jumeras',
        location: 'Philippines',
        rating: 5,
        text: 'Outstanding facilities and exceptional staff. The pool and spa areas are world-class.'
      },
      {
        name: 'alria Sianoya',
        location: 'Philippines',
        rating: 5,
        text: 'Amazing experience! The hotel exceeded all my expectations. The staff was friendly and professional.'
      },
      {
        name: 'Parking ni Gubat',
        location: 'Philippines',
        rating: 5,
        text: 'Perfect stay! The rooms are spacious and beautifully designed. The amenities are top-notch!'
      }
    ];

    vm.currentTestimonial = 0;

    vm.nextTestimonial = function() {
      vm.currentTestimonial = (vm.currentTestimonial + 1) % vm.testimonials.length;
    };

    vm.prevTestimonial = function() {
      vm.currentTestimonial = (vm.currentTestimonial - 1 + vm.testimonials.length) % vm.testimonials.length;
    };

    // Auto-rotate testimonials
    setInterval(function() {
      if (vm.currentPage === 'home') {
        $scope.$apply(function() {
          vm.nextTestimonial();
        });
      }
    }, 5000);

    // ============================================
    // NAVIGATION
    // ============================================
    vm.navigateTo = function(section) {
      vm.currentPage = section;
      if (section === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    // ============================================
    // SMOOTH SCROLL
    // ============================================
    vm.scrollToSection = function(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    // ============================================
    // BACK TO TOP
    // ============================================
    vm.showBackToTop = false;

    window.addEventListener('scroll', function() {
      vm.showBackToTop = window.scrollY > 300;
      $scope.$apply();
    });

    vm.scrollToTop = function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // ============================================
    // NAVBAR SCROLL EFFECT
    // ============================================
    window.addEventListener('scroll', function() {
      const navbar = document.querySelector('.navbar-luxury');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    });

    // ============================================
    // CONTACT FORM
    // ============================================
    vm.contactForm = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };

    vm.contactErrors = {};

    vm.validateContactForm = function() {
      vm.contactErrors = {};
      let isValid = true;

      if (!vm.contactForm.name) {
        vm.contactErrors.name = vm.t('contactNameRequired');
        isValid = false;
      }

      if (!vm.contactForm.email) {
        vm.contactErrors.email = vm.t('contactEmailRequired');
        isValid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(vm.contactForm.email)) {
        vm.contactErrors.email = vm.t('contactEmailInvalid');
        isValid = false;
      }

      if (!vm.contactForm.message) {
        vm.contactErrors.message = vm.t('contactMessageRequired');
        isValid = false;
      }

      return isValid;
    };

    vm.submitContact = function() {
      if (!vm.validateContactForm()) {
        return;
      }

      alert(vm.t('thankYouMessage'));
      vm.contactForm = { name: '', email: '', phone: '', message: '' };
    };

    // ============================================
    // NEWSLETTER SUBSCRIPTION
    // ============================================
    vm.newsletterEmail = '';
    vm.showNewsletterThankYou = false;

    vm.subscribeNewsletter = function() {
      if (!vm.newsletterEmail || !vm.newsletterEmail.trim()) {
        return;
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(vm.newsletterEmail.trim())) {
        return;
      }

      // Save subscription (in real app, send to server)
      let subscriptions = JSON.parse(localStorage.getItem('newsletterSubscriptions') || '[]');
      const email = vm.newsletterEmail.trim().toLowerCase();
      
      // Check if already subscribed
      if (subscriptions.indexOf(email) === -1) {
        subscriptions.push(email);
        localStorage.setItem('newsletterSubscriptions', JSON.stringify(subscriptions));
      }

      // Show thank you modal
      vm.showNewsletterThankYou = true;
      document.body.classList.add('modal-open');

      // Clear email input
      vm.newsletterEmail = '';

      // Auto close modal after 3 seconds
      $timeout(function() {
        vm.showNewsletterThankYou = false;
        document.body.classList.remove('modal-open');
      }, 3000);
    };

    vm.closeNewsletterThankYou = function() {
      vm.showNewsletterThankYou = false;
      document.body.classList.remove('modal-open');
    };

    // ============================================
    // LOADING SCREEN
    // ============================================
    vm.showLoading = true;
    window.addEventListener('load', function() {
      $timeout(function() {
        vm.showLoading = false;
        $scope.$apply();
      }, 1500);
    });

    // ============================================
    // DARK MODE
    // ============================================
    vm.darkMode = localStorage.getItem('darkMode') === 'true';
    if (vm.darkMode) {
      document.body.classList.add('dark-mode');
    }

    vm.toggleDarkMode = function() {
      vm.darkMode = !vm.darkMode;
      localStorage.setItem('darkMode', vm.darkMode);
      if (vm.darkMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    };

    // ============================================
    // LANGUAGE SUPPORT
    // ============================================
    vm.languages = LanguageService.getLanguages();
    vm.currentLanguage = LanguageService.getCurrentLanguage();
    vm.showLanguageDropdown = false;
    
    vm.setLanguage = function(lang) {
      LanguageService.setLanguage(lang);
    };

    $scope.$on('languageChanged', function(_, lang) {
      $scope.$applyAsync(function() {
        vm.currentLanguage = lang;
      });
    });

    vm.t = function(key) {
      return LanguageService.t(key);
    };
    
    vm.tReplace = function(key, replacements) {
      return LanguageService.tReplace(key, replacements);
    };

    // ============================================
    // SEARCH WITH AUTO-SUGGESTIONS
    // ============================================
    vm.searchQuery = '';
    vm.showSuggestions = false;
    vm.searchSuggestions = [];

    vm.updateSearch = function() {
      if (!vm.searchQuery || vm.searchQuery.length < 2) {
        vm.showSuggestions = false;
        return;
      }

      const query = vm.searchQuery.toLowerCase();
      vm.searchSuggestions = [];
      
      // Search rooms
      vm.rooms.forEach(function(room) {
        if (room.name.toLowerCase().includes(query) || 
            room.description.toLowerCase().includes(query) ||
            room.type.toLowerCase().includes(query)) {
          vm.searchSuggestions.push({
            type: 'room',
            text: room.name,
            room: room
          });
        }
      });

      // Search amenities
      vm.amenities.forEach(function(amenity) {
        if (amenity.title.toLowerCase().includes(query)) {
          vm.searchSuggestions.push({
            type: 'amenity',
            text: amenity.title
          });
        }
      });

      vm.showSuggestions = vm.searchSuggestions.length > 0;
    };

    vm.selectSuggestion = function(suggestion) {
      vm.searchQuery = suggestion.text;
      vm.showSuggestions = false;
      if (suggestion.type === 'room' && suggestion.room) {
        vm.openRoomDetails(suggestion.room);
      } else {
        vm.scrollToSection('amenities');
      }
    };

    // ============================================
    // SORT OPTIONS
    // ============================================
    vm.sortBy = 'popular';
    vm.sortOptions = [
      { value: 'popular', label: 'Most Popular' },
      { value: 'price-low', label: 'Price: Low to High' },
      { value: 'price-high', label: 'Price: High to Low' },
      { value: 'newest', label: 'Newest First' }
    ];

    vm.applySort = function() {
      if (!vm.filteredRooms || vm.filteredRooms.length === 0) {
        vm.filteredRooms = angular.copy(vm.rooms);
      }
      const rooms = angular.copy(vm.filteredRooms);
      switch(vm.sortBy) {
        case 'price-low':
          rooms.sort(function(a, b) { return a.price - b.price; });
          break;
        case 'price-high':
          rooms.sort(function(a, b) { return b.price - a.price; });
          break;
        case 'newest':
          rooms.sort(function(a, b) { return b.id - a.id; });
          break;
        default:
          // Popular - sort by favorites first
          rooms.sort(function(a, b) {
            if (a.fav && !b.fav) return -1;
            if (!a.fav && b.fav) return 1;
            return 0;
          });
      }
      vm.filteredRooms = rooms;
    };
    
    // Initialize filteredRooms
    vm.filteredRooms = angular.copy(vm.rooms);

    // ============================================
    // WISHLIST
    // ============================================
    vm.wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');

    vm.toggleWishlist = function(room) {
      const index = vm.wishlist.findIndex(function(r) { return r.id === room.id; });
      if (index > -1) {
        // Remove from wishlist
        vm.wishlist.splice(index, 1);
        room.inWishlist = false;
        vm.showNotification(vm.t('removedFromWishlist') || 'Room removed from wishlist', 'info');
      } else {
        // Add to wishlist
        vm.wishlist.push(room);
        room.inWishlist = true;
        vm.showNotification(vm.t('addedToWishlist') || 'Room added to wishlist!', 'success');
      }
      localStorage.setItem('wishlist', JSON.stringify(vm.wishlist));
      
      // Update all rooms' wishlist status
      vm.rooms.forEach(function(r) {
        r.inWishlist = vm.isInWishlist(r);
      });
      
      // Update profile stats to refresh wishlist count
      vm.updateProfileStats();
    };

    vm.isInWishlist = function(room) {
      return vm.wishlist.some(function(r) { return r.id === room.id; });
    };

    // Initialize wishlist status
    vm.rooms.forEach(function(room) {
      room.inWishlist = vm.isInWishlist(room);
    });

    vm.showWishlist = false;

    vm.openWishlist = function() {
      // Refresh wishlist from localStorage
      vm.wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
      
      // Update room wishlist status
      vm.rooms.forEach(function(room) {
        room.inWishlist = vm.isInWishlist(room);
      });
      
      // Update profile stats to ensure counts are fresh
      vm.updateProfileStats();
      
      // Show notification if wishlist is empty
      if (!vm.wishlist || vm.wishlist.length === 0) {
        vm.showNotification(vm.t('noWishlistItems') || 'You haven\'t added any rooms to your wishlist yet. Click the heart icon on any room to add it!', 'info');
        // Still open the modal to show the empty state
      }
      
      vm.showWishlist = true;
    };

    vm.closeWishlist = function() {
      vm.showWishlist = false;
    };

    // ============================================
    // RECENTLY VIEWED
    // ============================================
    vm.recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');

    vm.addToRecentlyViewed = function(room) {
      const index = vm.recentlyViewed.findIndex(function(r) { return r.id === room.id; });
      if (index > -1) {
        vm.recentlyViewed.splice(index, 1);
      }
      vm.recentlyViewed.unshift(room);
      if (vm.recentlyViewed.length > 5) {
        vm.recentlyViewed.pop();
      }
      localStorage.setItem('recentlyViewed', JSON.stringify(vm.recentlyViewed));
    };

    // Update openRoomDetails to track views
    const originalOpenRoomDetails = vm.openRoomDetails;
    vm.openRoomDetails = function(room) {
      vm.addToRecentlyViewed(room);
      originalOpenRoomDetails(room);
    };

    // ============================================
    // FEATURED ROOMS CAROUSEL
    // ============================================
    vm.featuredRooms = [];
    vm.currentFeaturedIndex = 0;
    
    // Initialize featured rooms after rooms are loaded
    $timeout(function() {
      vm.featuredRooms = vm.rooms.filter(function(r) { return r.fav; }).slice(0, 3);
      if (vm.featuredRooms.length === 0) {
        vm.featuredRooms = vm.rooms.slice(0, 3);
      }
    }, 100);

    vm.nextFeatured = function() {
      vm.currentFeaturedIndex = (vm.currentFeaturedIndex + 1) % vm.featuredRooms.length;
    };

    vm.prevFeatured = function() {
      vm.currentFeaturedIndex = (vm.currentFeaturedIndex - 1 + vm.featuredRooms.length) % vm.featuredRooms.length;
    };

    // Auto-rotate featured rooms
    setInterval(function() {
      if (vm.currentPage === 'home') {
        $scope.$apply(function() {
          vm.nextFeatured();
        });
      }
    }, 5000);

    // ============================================
    // ROOM AVAILABILITY CHECKER
    // ============================================
    vm.checkAvailability = function(room, checkIn, checkOut) {
      if (!checkIn || !checkOut) return true;
      
      // Simulate availability check
      const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
      const checkInDate = new Date(checkIn);
      const checkOutDate = new Date(checkOut);
      
      return !bookings.some(function(booking) {
        if (booking.room.id !== room.id) return false;
        const bookingCheckIn = new Date(booking.checkIn);
        const bookingCheckOut = new Date(booking.checkOut);
        return (checkInDate >= bookingCheckIn && checkInDate < bookingCheckOut) ||
               (checkOutDate > bookingCheckIn && checkOutDate <= bookingCheckOut) ||
               (checkInDate <= bookingCheckIn && checkOutDate >= bookingCheckOut);
      });
    };

    // ============================================
    // DYNAMIC PRICING
    // ============================================
    vm.getDynamicPrice = function(room, checkIn, checkOut) {
      if (!checkIn || !checkOut) return room.price;
      
      const checkInDate = new Date(checkIn);
      const day = checkInDate.getDay();
      const month = checkInDate.getMonth();
      
      let multiplier = 1;
      
      // Weekend pricing (Friday, Saturday)
      if (day === 5 || day === 6) {
        multiplier = 1.2;
      }
      
      // Peak season (December, January, June, July)
      if (month === 11 || month === 0 || month === 5 || month === 6) {
        multiplier *= 1.3;
      }
      
      return Math.round(room.price * multiplier);
    };

    vm.discountCode = '';
    vm.discountApplied = false;
    vm.discountAmount = 0;

    vm.applyDiscount = function() {
      const codes = {
        'WELCOME10': 0.1,
        'SUMMER20': 0.2,
        'LUXURY15': 0.15
      };
      
      const code = vm.discountCode.toUpperCase();
      if (codes[code]) {
        vm.discountApplied = true;
        vm.discountAmount = codes[code];
        alert(vm.t('discountSuccess'));
      } else {
        vm.discountApplied = false;
        vm.discountAmount = 0;
        alert(vm.t('discountInvalid'));
      }
      vm.calculatePrice();
    };

    // Update calculatePrice to include dynamic pricing and discount
    const originalCalculatePrice = vm.calculatePrice;
    vm.calculatePrice = function() {
      if (!vm.selectedRoom || !vm.bookingForm.checkIn || !vm.bookingForm.checkOut) {
        vm.totalNights = 0;
        vm.totalPrice = 0;
        return;
      }

      const checkIn = new Date(vm.bookingForm.checkIn);
      const checkOut = new Date(vm.bookingForm.checkOut);
      const diffTime = Math.abs(checkOut - checkIn);
      vm.totalNights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      const basePrice = vm.getDynamicPrice(vm.selectedRoom, vm.bookingForm.checkIn, vm.bookingForm.checkOut);
      vm.totalPrice = basePrice * vm.totalNights;
      
      if (vm.discountApplied && vm.discountAmount > 0) {
        vm.totalPrice = Math.round(vm.totalPrice * (1 - vm.discountAmount));
      }
    };

    // ============================================
    // ROOM COMPARISON
    // ============================================
    vm.compareRooms = [];
    vm.maxCompare = 2;

    vm.addToCompare = function(room) {
      if (vm.compareRooms.length >= vm.maxCompare) {
        alert(vm.tReplace('compareLimit', { max: vm.maxCompare }));
        return;
      }
      if (vm.compareRooms.find(function(r) { return r.id === room.id; })) {
        alert(vm.t('compareDuplicate'));
        return;
      }
      vm.compareRooms.push(room);
    };

    vm.removeFromCompare = function(room) {
      const index = vm.compareRooms.findIndex(function(r) { return r.id === room.id; });
      if (index > -1) {
        vm.compareRooms.splice(index, 1);
      }
    };

    vm.showComparison = false;
    vm.openComparison = function() {
      if (vm.compareRooms.length < 2) {
        alert(vm.t('compareMinimum'));
        return;
      }
      vm.showComparison = true;
    };

    // ============================================
    // AI ROOM SUGGESTIONS
    // ============================================
    vm.getAISuggestions = function(guests, budget, dates) {
      let suggestions = angular.copy(vm.rooms);
      
      // Filter by max guests
      if (guests) {
        suggestions = suggestions.filter(function(r) {
          return r.maxGuests >= guests;
        });
      }
      
      // Filter by budget
      if (budget) {
        const nightlyBudget = budget / (dates ? 3 : 1); // Assume 3 nights if no dates
        suggestions = suggestions.filter(function(r) {
          return r.price <= nightlyBudget;
        });
      }
      
      // Sort by best match (price closest to budget, enough space)
      suggestions.sort(function(a, b) {
        const aScore = Math.abs(a.price - (budget / 3));
        const bScore = Math.abs(b.price - (budget / 3));
        return aScore - bScore;
      });
      
      return suggestions.slice(0, 3);
    };

    // ============================================
    // LIVE CHAT
    // ============================================
    vm.showChat = false;
    vm.chatMinimized = false;
    const chatResponseKeys = ['chatResponseFriendly', 'chatResponseHelp', 'chatResponseOffers', 'chatResponseDesk'];
    vm.chatMessages = [
      { type: 'bot', text: vm.t('chatWelcome') }
    ];
    vm.chatInput = '';

    vm.toggleChat = function() {
      vm.showChat = !vm.showChat;
      if (!vm.showChat) {
        vm.chatMinimized = false;
      }
    };

    vm.minimizeChat = function() {
      vm.chatMinimized = true;
    };

    vm.restoreChat = function() {
      vm.chatMinimized = false;
    };

    vm.sendChatMessage = function() {
      if (!vm.chatInput.trim()) return;
      
      vm.chatMessages.push({ type: 'user', text: vm.chatInput });
      vm.chatInput = '';
      
      // Simulate bot response
      $timeout(function() {
        const randomKey = chatResponseKeys[Math.floor(Math.random() * chatResponseKeys.length)];
        vm.chatMessages.push({ type: 'bot', text: vm.t(randomKey) });
        $scope.$apply();
      }, 1000);
    };

    // ============================================
    // FAQ
    // ============================================
    vm.faqs = [
      {
        questionKey: 'checkInOut',
        answerKey: 'checkInOutAnswer'
      },
      {
        questionKey: 'freeWifi',
        answerKey: 'freeWifiAnswer'
      },
      {
        questionKey: 'parking',
        answerKey: 'parkingAnswer'
      },
      {
        questionKey: 'swimmingPool',
        answerKey: 'swimmingPoolAnswer'
      },
      {
        questionKey: 'petsAllowed',
        answerKey: 'petsAllowedAnswer'
      },
      {
        questionKey: 'cancellationPolicy',
        answerKey: 'cancellationPolicyAnswer'
      }
    ];

    vm.toggleFAQ = function(index) {
      vm.faqs[index].active = !vm.faqs[index].active;
    };

    // ============================================
    // BOOKING SUMMARY
    // ============================================
    vm.showBookingSummary = false;

    vm.proceedToPayment = function() {
      // Validate all required fields before proceeding
      if (!vm.validateForm()) {
        // Show alert message
        alert(vm.t('pleaseFillRequiredFields') || 'Please fill in all required fields before proceeding to payment.');
        
        // Scroll to first error
        $timeout(function() {
          const firstError = document.querySelector('.is-invalid');
          if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            firstError.focus();
          }
        }, 100);
        return;
      }
      
      // If validation passes, proceed to payment modal
      vm.showPaymentModal = true;
    };

    vm.showSummary = function() {
      if (!vm.validateForm()) {
        return;
      }
      vm.showBookingSummary = true;
    };

    vm.hideSummary = function() {
      vm.showBookingSummary = false;
    };

    // ============================================
    // PAYMENT SYSTEM
    // ============================================
    vm.showPaymentModal = false;
    vm.selectedPaymentMethod = '';
    vm.paymentMethods = ['Card', 'GCash', 'Maya', 'PayPal'];
    vm.paymentForm = {
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      cardName: '',
      accountNumber: '',
      paypalEmail: ''
    };
    
    vm.paymentErrors = {};

    vm.selectPaymentMethod = function(method) {
      vm.selectedPaymentMethod = method;
      // Clear payment errors when switching methods
      vm.paymentErrors = {};
    };
    
    vm.formatAccountNumber = function() {
      if (vm.paymentForm.accountNumber) {
        // Remove all non-digits
        let numbers = vm.paymentForm.accountNumber.replace(/\D/g, '');
        // Format as 09XX XXX XXXX
        if (numbers.length > 0) {
          if (numbers.length <= 4) {
            vm.paymentForm.accountNumber = numbers;
          } else if (numbers.length <= 7) {
            vm.paymentForm.accountNumber = numbers.substring(0, 4) + ' ' + numbers.substring(4);
          } else {
            vm.paymentForm.accountNumber = numbers.substring(0, 4) + ' ' + numbers.substring(4, 7) + ' ' + numbers.substring(7, 11);
          }
        }
      }
    };

    vm.validateCard = function() {
      if (!vm.paymentForm.cardNumber || vm.paymentForm.cardNumber.length < 16) {
        return false;
      }
      if (!vm.paymentForm.expiryDate || !/^\d{2}\/\d{2}$/.test(vm.paymentForm.expiryDate)) {
        return false;
      }
      if (!vm.paymentForm.cvv || vm.paymentForm.cvv.length < 3) {
        return false;
      }
      return true;
    };

    vm.validatePaymentDetails = function() {
      vm.paymentErrors = {};
      let isValid = true;
      
      if (vm.selectedPaymentMethod === 'Card') {
        if (!vm.validateCard()) {
          vm.paymentErrors.card = vm.t('cardDetailsInvalid');
          isValid = false;
        }
      } else if (vm.selectedPaymentMethod === 'GCash' || vm.selectedPaymentMethod === 'Maya') {
        if (!vm.paymentForm.accountNumber || vm.paymentForm.accountNumber.trim() === '') {
          vm.paymentErrors.accountNumber = vm.t('accountNumberRequired');
          isValid = false;
        } else {
          // Remove spaces and validate
          const cleanNumber = vm.paymentForm.accountNumber.replace(/\s/g, '');
          if (!/^09\d{9}$/.test(cleanNumber)) {
            vm.paymentErrors.accountNumber = vm.t('accountNumberInvalid');
            isValid = false;
          }
        }
      } else if (vm.selectedPaymentMethod === 'PayPal') {
        if (!vm.paymentForm.paypalEmail || vm.paymentForm.paypalEmail.trim() === '') {
          vm.paymentErrors.paypalEmail = vm.t('paypalEmailRequired');
          isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(vm.paymentForm.paypalEmail.trim())) {
          vm.paymentErrors.paypalEmail = vm.t('paypalEmailInvalid');
          isValid = false;
        }
      }
      
      return isValid;
    };

    vm.processPayment = function() {
      if (!vm.validatePaymentDetails()) {
        // Show error message
        let errorMessage = '';
        if (vm.paymentErrors.card) {
          errorMessage = vm.paymentErrors.card;
        } else if (vm.paymentErrors.accountNumber) {
          errorMessage = vm.paymentErrors.accountNumber;
        } else if (vm.paymentErrors.paypalEmail) {
          errorMessage = vm.paymentErrors.paypalEmail;
        }
        
        if (errorMessage) {
          alert(errorMessage);
        } else {
          alert(vm.t('paymentDetailsInvalid'));
        }
        return;
      }
      
      // Show payment success
      vm.showPaymentSuccess = true;
      $timeout(function() {
        vm.submitBooking();
        vm.showPaymentSuccess = false;
      }, 2000);
    };

    // ============================================
    // FLOATING ACTION BUTTON
    // ============================================
    vm.showFABMenu = false;

    vm.toggleFABMenu = function() {
      vm.showFABMenu = !vm.showFABMenu;
    };

    vm.closeFABMenu = function() {
      vm.showFABMenu = false;
    };

    // ============================================
    // NOTIFICATION SYSTEM
    // ============================================
    vm.notification = {
      show: false,
      message: '',
      type: 'info' // info, success, warning, error
    };

    vm.showNotification = function(message, type) {
      vm.notification.message = message;
      vm.notification.type = type || 'info';
      vm.notification.show = true;
      
      // Auto-hide after 5 seconds
      $timeout(function() {
        vm.notification.show = false;
      }, 5000);
    };

    vm.hideNotification = function() {
      vm.notification.show = false;
    };

    // ============================================
    // SCROLL ANIMATIONS
    // ============================================
    vm.initScrollAnimations = function() {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, observerOptions);

      document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .zoom-in').forEach(function(el) {
        observer.observe(el);
      });
    };

    // ============================================
    // USER REGISTRATION/LOGIN
    // ============================================
    vm.showLoginModal = false;
    vm.showRegisterModal = false;
    vm.loginForm = { email: '', password: '' };
    vm.registerForm = { name: '', email: '', password: '', confirmPassword: '' };

    vm.showLoginPromptModal = false;
    vm.pendingBookingRoom = null;

    vm.openLogin = function() {
      vm.showLoginModal = true;
    };

    vm.closeLogin = function() {
      vm.showLoginModal = false;
    };
    
    vm.closeLoginPrompt = function() {
      vm.showLoginPromptModal = false;
      vm.pendingBookingRoom = null;
      document.body.classList.remove('modal-open');
    };
    
    vm.goToLoginPage = function() {
      vm.closeLoginPrompt();
      window.location.href = 'login.html';
    };

    vm.goToRegisterPage = function() {
      vm.closeLoginPrompt();
      window.location.href = 'register.html';
    };

    vm.openRegister = function() {
      vm.showRegisterModal = true;
      vm.showLoginModal = false;
    };

    vm.closeRegister = function() {
      vm.showRegisterModal = false;
    };

    vm.submitLogin = function() {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find(function(u) {
        return u.email === vm.loginForm.email && u.password === vm.loginForm.password;
      });
      
      if (user) {
        vm.profile.name = user.name;
        vm.profile.email = user.email;
        localStorage.setItem('userName', user.name);
        localStorage.setItem('userEmail', user.email);
        vm.showLoginModal = false;
        vm.showLoginPromptModal = false;
        document.body.classList.remove('modal-open');
        
        // If there was a pending booking, open booking modal after login
        if (vm.pendingBookingRoom) {
          $timeout(function() {
            vm.openBookingModal(vm.pendingBookingRoom);
            vm.pendingBookingRoom = null;
          }, 300);
        }
        
        alert(vm.t('loginSuccessful'));
      } else {
        alert(vm.t('invalidCredentials'));
      }
    };

    vm.submitRegister = function() {
      if (vm.registerForm.password !== vm.registerForm.confirmPassword) {
        alert(vm.t('passwordsNotMatch'));
        return;
      }
      
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      if (users.find(function(u) { return u.email === vm.registerForm.email; })) {
        alert(vm.t('emailExists'));
        return;
      }
      
      const newUser = {
        name: vm.registerForm.name,
        email: vm.registerForm.email,
        password: vm.registerForm.password
      };
      
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      
      vm.profile.name = newUser.name;
      vm.profile.email = newUser.email;
      localStorage.setItem('userName', newUser.name);
      localStorage.setItem('userEmail', newUser.email);
      
      vm.showRegisterModal = false;
      alert(vm.t('registrationSuccessful'));
    };
    
    // ============================================
    // USER DASHBOARD
    // ============================================
    vm.showDashboard = false;
    vm.userBookings = JSON.parse(localStorage.getItem('bookings') || '[]').filter(function(b) {
      return b.email === localStorage.getItem('userEmail');
    });

    vm.openDashboard = function() {
      // Allow dashboard access - show bookings if logged in, otherwise show login
      if (vm.profile.name === 'Guest' || !vm.profile.email) {
        vm.openLogin();
        return;
      }
      vm.userBookings = JSON.parse(localStorage.getItem('bookings') || '[]').filter(function(b) {
        return b.email === (vm.profile.email || localStorage.getItem('userEmail'));
      });
      vm.showDashboard = true;
      document.body.classList.add('modal-open');
    };

    vm.closeDashboard = function() {
      vm.showDashboard = false;
      document.body.classList.remove('modal-open');
    };

    vm.cancelBooking = function(booking) {
      if (confirm(vm.t('cancelBookingConfirm') || 'Are you sure you want to cancel this booking?')) {
        const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
        const index = bookings.findIndex(function(b) { return b.reference === booking.reference; });
        if (index > -1) {
          bookings.splice(index, 1);
          localStorage.setItem('bookings', JSON.stringify(bookings));
          // Refresh bookings list using refreshBookings function
          if (vm.refreshBookings) {
            vm.refreshBookings();
          } else {
            // Fallback if refreshBookings doesn't exist
            vm.userBookings = bookings.filter(function(b) {
              return b.email === (vm.profile.email || localStorage.getItem('userEmail'));
            });
          }
          // Update profile stats to refresh booking count
          vm.updateProfileStats();
          alert(vm.t('bookingCancelled') || 'Booking cancelled successfully');
        }
      }
    };

    // ============================================
    // LIQUID BLOB MOUSE INTERACTION
    // ============================================
    // Throttle for water ripples
    vm.lastRippleTime = 0;
    vm.rippleThrottle = 200; // milliseconds between ripples

    vm.onHeroMouseMove = function(event) {
      const heroSection = event.currentTarget;
      const rect = heroSection.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      
      // Update CSS variable for water distortion effect
      heroSection.style.setProperty('--mouse-x', x + '%');
      heroSection.style.setProperty('--mouse-y', y + '%');
      
      // Create water ripple on mouse move (throttled)
      const now = Date.now();
      if (now - vm.lastRippleTime > vm.rippleThrottle) {
        vm.createWaterRipple(event);
        vm.lastRippleTime = now;
      }
      
      // Update blob positions based on mouse
      const blob1 = document.querySelector('.blob-1');
      const blob2 = document.querySelector('.blob-2');
      const blob3 = document.querySelector('.blob-3');
      
      if (blob1) {
        const offsetX1 = (x - 10) * 0.3;
        const offsetY1 = (y - 20) * 0.3;
        blob1.style.transform = `translate(${offsetX1}px, ${offsetY1}px) scale(1.1)`;
        blob1.style.transition = 'transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)';
      }
      
      if (blob2) {
        const offsetX2 = (x - 85) * 0.4;
        const offsetY2 = (y - 60) * 0.4;
        blob2.style.transform = `translate(${offsetX2}px, ${offsetY2}px) scale(1.15)`;
        blob2.style.transition = 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)';
      }
      
      if (blob3) {
        const offsetX3 = (x - 50) * 0.25;
        const offsetY3 = (y - 80) * 0.25;
        blob3.style.transform = `translate(${offsetX3}px, ${offsetY3}px) scale(1.05)`;
        blob3.style.transition = 'transform 0.35s cubic-bezier(0.23, 1, 0.32, 1)';
      }
    };

    vm.createWaterRipple = function(event) {
      const heroSection = event.currentTarget || document.querySelector('.hero-section');
      if (!heroSection) return;
      
      const rect = heroSection.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      
      const rippleContainer = heroSection.querySelector('.water-ripple-container');
      if (!rippleContainer) return;
      
      // Create ripple element
      const ripple = document.createElement('div');
      ripple.className = 'water-ripple';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      
      // Randomize size for more natural effect
      const size = 50 + Math.random() * 100;
      ripple.style.width = size + 'px';
      ripple.style.height = size + 'px';
      
      rippleContainer.appendChild(ripple);
      
      // Remove ripple after animation
      setTimeout(function() {
        if (ripple.parentNode) {
          ripple.parentNode.removeChild(ripple);
        }
      }, 1500);
    };

    vm.onHeroMouseLeave = function() {
      const heroSection = document.querySelector('.hero-section');
      
      // Reset CSS variables
      if (heroSection) {
        heroSection.style.setProperty('--mouse-x', '50%');
        heroSection.style.setProperty('--mouse-y', '50%');
      }
      
      // Reset blobs to original position
      const blob1 = document.querySelector('.blob-1');
      const blob2 = document.querySelector('.blob-2');
      const blob3 = document.querySelector('.blob-3');
      
      if (blob1) {
        blob1.style.transform = '';
        blob1.style.transition = 'transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
      }
      
      if (blob2) {
        blob2.style.transform = '';
        blob2.style.transition = 'transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
      }
      
      if (blob3) {
        blob3.style.transform = '';
        blob3.style.transition = 'transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
      }
    };

    // ============================================
    // INITIALIZATION
    // ============================================
    vm.init = function() {
      // Load profile if user is logged in (optional - allow guest access)
      const savedName = localStorage.getItem('userName');
      const savedEmail = localStorage.getItem('userEmail');
      
      if (savedName && savedEmail && savedName !== 'Guest') {
        // User is logged in - load profile
        vm.profile.name = savedName;
        vm.profile.email = savedEmail;
        vm.profile.avatar = localStorage.getItem('userAvatar') || null;
      } else {
        // Guest access - allow viewing without login
        vm.profile.name = 'Guest';
        vm.profile.email = '';
        vm.profile.avatar = null;
      }
      
      // Initialize profile stats (bookings and wishlist counts)
      vm.updateProfileStats();
      
      // Initialize scroll animations
      $timeout(function() {
        vm.initScrollAnimations();
      }, 500);
    };

    vm.init();

    $scope.vm = vm;
  }]);

