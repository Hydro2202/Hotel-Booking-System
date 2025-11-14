// ============================================
// HOTEL NI YUAN - MAIN APPLICATION
// ============================================

angular.module('hotelApp', [])
  .controller('MainCtrl', ['$scope', '$timeout', function($scope, $timeout) {
    const vm = this;
    vm.year = new Date().getFullYear();
    vm.currentPage = 'home';

    // ============================================
    // USER PROFILE
    // ============================================
    vm.profile = {
      name: localStorage.getItem('userName') || 'Guest',
      email: localStorage.getItem('userEmail') || ''
    };

    vm.logout = function() {
      if (confirm('Are you sure you want to logout?')) {
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
      
      // Load user bookings
      vm.userBookings = JSON.parse(localStorage.getItem('bookings') || '[]').filter(function(b) {
        return b.email === vm.profile.email;
      });
      
      vm.showProfileModal = true;
      document.body.classList.add('modal-open');
    };
    
    vm.refreshBookings = function() {
      vm.userBookings = JSON.parse(localStorage.getItem('bookings') || '[]').filter(function(b) {
        return b.email === vm.profile.email;
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
    
    vm.updateProfile = function($event) {
      if ($event) {
        $event.preventDefault();
      }
      
      // Update name and email
      if (vm.profileForm.name && vm.profileForm.email) {
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(vm.profileForm.email)) {
          alert('Please enter a valid email address');
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
            alert('Email already exists. Please use a different email.');
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
        
        alert('Profile updated successfully!');
        vm.closeProfile();
      } else {
        alert('Please fill in all required fields');
      }
    };
    
    vm.changePassword = function($event) {
      if ($event) {
        $event.preventDefault();
      }
      
      if (!vm.profileForm.currentPassword || !vm.profileForm.newPassword || !vm.profileForm.confirmPassword) {
        alert('Please fill in all password fields');
        return;
      }
      
      if (vm.profileForm.newPassword !== vm.profileForm.confirmPassword) {
        alert('New passwords do not match');
        return;
      }
      
      if (vm.profileForm.newPassword.length < 6) {
        alert('New password must be at least 6 characters');
        return;
      }
      
      // Verify current password
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find(function(u) {
        return u.email === vm.profile.email;
      });
      
      if (!user || user.password !== vm.profileForm.currentPassword) {
        alert('Current password is incorrect');
        return;
      }
      
      // Update password
      user.password = vm.profileForm.newPassword;
      localStorage.setItem('users', JSON.stringify(users));
      
      alert('Password changed successfully!');
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
      if (room) vm.selectedRoom = angular.copy(room);
      vm.showBookingModal = true;
      document.body.classList.add('modal-open');
      const today = new Date().toISOString().split('T')[0];
      vm.bookingForm = {
        fullName: '',
        email: '',
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

      if (!vm.bookingForm.fullName) {
        vm.formErrors.fullName = 'Full name is required';
        isValid = false;
      }

      if (!vm.bookingForm.email) {
        vm.formErrors.email = 'Email is required';
        isValid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(vm.bookingForm.email)) {
        vm.formErrors.email = 'Invalid email format';
        isValid = false;
      }

      if (!vm.bookingForm.phone) {
        vm.formErrors.phone = 'Phone number is required';
        isValid = false;
      }

      if (!vm.bookingForm.roomType) {
        vm.formErrors.roomType = 'Please select a room';
        isValid = false;
      }

      if (!vm.bookingForm.checkIn) {
        vm.formErrors.checkIn = 'Check-in date is required';
        isValid = false;
      }

      if (!vm.bookingForm.checkOut) {
        vm.formErrors.checkOut = 'Check-out date is required';
        isValid = false;
      }

      if (vm.bookingForm.checkIn && vm.bookingForm.checkOut) {
        const checkIn = new Date(vm.bookingForm.checkIn);
        const checkOut = new Date(vm.bookingForm.checkOut);
        if (checkOut <= checkIn) {
          vm.formErrors.checkOut = 'Check-out must be after check-in';
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
        vm.contactErrors.name = 'Name is required';
        isValid = false;
      }

      if (!vm.contactForm.email) {
        vm.contactErrors.email = 'Email is required';
        isValid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(vm.contactForm.email)) {
        vm.contactErrors.email = 'Invalid email format';
        isValid = false;
      }

      if (!vm.contactForm.message) {
        vm.contactErrors.message = 'Message is required';
        isValid = false;
      }

      return isValid;
    };

    vm.submitContact = function() {
      if (!vm.validateContactForm()) {
        return;
      }

      alert('Thank you for your message! We will get back to you soon.');
      vm.contactForm = { name: '', email: '', phone: '', message: '' };
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
    vm.currentLanguage = localStorage.getItem('language') || 'en';
    vm.languages = {
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
        myBookings: 'My Bookings',
        profile: 'Profile',
        
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
        whatGuestsSay: 'What Our Guests Say',
        realExperiences: 'Real experiences from our valued guests',
        frequentlyAsked: 'Frequently Asked Questions',
        everythingYouNeed: 'Everything you need to know',
        nearbyAttractions: 'Nearby Attractions',
        exploreAround: 'Explore what\'s around us',
        
        // Room Cards
        viewDetails: 'View Details',
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
        priceSummary: 'Price Summary',
        roomRate: 'Room Rate',
        nights: 'nights',
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
        
        // User
        register: 'Register',
        dontHaveAccount: 'Don\'t have an account?',
        alreadyHaveAccount: 'Already have an account?',
        password: 'Password',
        confirmPassword: 'Confirm Password',
        fullNamePlaceholder: 'Enter your full name',
        emailPlaceholder: 'Enter your email',
        loginSuccessful: 'Login successful!',
        registrationSuccessful: 'Registration successful!',
        invalidCredentials: 'Invalid email or password',
        passwordsNotMatch: 'Passwords do not match',
        emailExists: 'Email already registered',
        
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
        
        // Sort
        sortBy: 'Sort by',
        mostPopular: 'Most Popular',
        priceLowHigh: 'Price: Low to High',
        priceHighLow: 'Price: High to Low',
        newestFirst: 'Newest First',
        
        // Footer
        quickLinks: 'Quick Links',
        followUs: 'Follow Us',
        allRightsReserved: 'All rights reserved',
        
        // General
        searchPlaceholder: 'Search rooms, amenities...',
        anySpecialRequests: 'Any special requests or requirements...'
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
        myBookings: 'Aking Mga Booking',
        profile: 'Profile',
        
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
        whatGuestsSay: 'Ano ang Sinasabi ng Aming mga Bisita',
        realExperiences: 'Tunay na karanasan mula sa aming mga minamahal na bisita',
        frequentlyAsked: 'Mga Madalas Itanong',
        everythingYouNeed: 'Lahat ng kailangan mong malaman',
        nearbyAttractions: 'Mga Kalapit na Atraksyon',
        exploreAround: 'Tuklasin kung ano ang nasa paligid namin',
        
        // Room Cards
        viewDetails: 'Tingnan ang Detalye',
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
        priceSummary: 'Buod ng Presyo',
        roomRate: 'Rate ng Silid',
        nights: 'gabi',
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
        
        // User
        register: 'Magrehistro',
        dontHaveAccount: 'Walang account?',
        alreadyHaveAccount: 'May account na?',
        password: 'Password',
        confirmPassword: 'Kumpirmahin ang Password',
        fullNamePlaceholder: 'Ilagay ang inyong buong pangalan',
        emailPlaceholder: 'Ilagay ang inyong email',
        loginSuccessful: 'Matagumpay ang login!',
        registrationSuccessful: 'Matagumpay ang pagrehistro!',
        invalidCredentials: 'Hindi wasto ang email o password',
        passwordsNotMatch: 'Hindi magkatugma ang mga password',
        emailExists: 'Nakarehistro na ang email',
        
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
        
        // Sort
        sortBy: 'Ayusin ayon sa',
        mostPopular: 'Pinakasikat',
        priceLowHigh: 'Presyo: Mababa hanggang Mataas',
        priceHighLow: 'Presyo: Mataas hanggang Mababa',
        newestFirst: 'Pinakabago Muna',
        
        // Footer
        quickLinks: 'Mabilis na Links',
        followUs: 'Sundan Kami',
        allRightsReserved: 'Lahat ng karapatan ay nakalaan',
        
        // General
        searchPlaceholder: 'Maghanap ng mga silid, kaginhawaan...',
        anySpecialRequests: 'Anumang espesyal na kahilingan o pangangailangan...'
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
        myBookings: '내 예약',
        profile: '프로필',
        
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
        whatGuestsSay: '고객 후기',
        realExperiences: '소중한 고객들의 실제 경험',
        frequentlyAsked: '자주 묻는 질문',
        everythingYouNeed: '필요한 모든 정보',
        nearbyAttractions: '주변 명소',
        exploreAround: '주변을 탐험하세요',
        
        // Room Cards
        viewDetails: '상세 보기',
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
        priceSummary: '요금 요약',
        roomRate: '객실 요금',
        nights: '박',
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
        
        // User
        register: '회원가입',
        dontHaveAccount: '계정이 없으신가요?',
        alreadyHaveAccount: '이미 계정이 있으신가요?',
        password: '비밀번호',
        confirmPassword: '비밀번호 확인',
        fullNamePlaceholder: '성명을 입력하세요',
        emailPlaceholder: '이메일을 입력하세요',
        loginSuccessful: '로그인 성공!',
        registrationSuccessful: '회원가입 성공!',
        invalidCredentials: '이메일 또는 비밀번호가 올바르지 않습니다',
        passwordsNotMatch: '비밀번호가 일치하지 않습니다',
        emailExists: '이미 등록된 이메일입니다',
        
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
        
        // Sort
        sortBy: '정렬 기준',
        mostPopular: '인기순',
        priceLowHigh: '가격: 낮은 순',
        priceHighLow: '가격: 높은 순',
        newestFirst: '최신순',
        
        // Footer
        quickLinks: '빠른 링크',
        followUs: '팔로우하기',
        allRightsReserved: '모든 권리 보유',
        
        // General
        searchPlaceholder: '객실, 편의시설 검색...',
        anySpecialRequests: '특별 요청사항이나 요구사항...'
      }
    };

    vm.showLanguageDropdown = false;
    
    vm.setLanguage = function(lang) {
      vm.currentLanguage = lang;
      localStorage.setItem('language', lang);
      vm.showLanguageDropdown = false;
    };

    vm.t = function(key) {
      if (!key) return '';
      const translation = vm.languages[vm.currentLanguage] && vm.languages[vm.currentLanguage][key];
      return translation || vm.languages['en'][key] || key;
    };
    
    // Helper function to replace placeholders in translations
    vm.tReplace = function(key, replacements) {
      let text = vm.t(key);
      if (replacements) {
        Object.keys(replacements).forEach(function(placeholder) {
          text = text.replace('{' + placeholder + '}', replacements[placeholder]);
        });
      }
      return text;
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
        vm.wishlist.splice(index, 1);
        room.inWishlist = false;
      } else {
        vm.wishlist.push(room);
        room.inWishlist = true;
      }
      localStorage.setItem('wishlist', JSON.stringify(vm.wishlist));
    };

    vm.isInWishlist = function(room) {
      return vm.wishlist.some(function(r) { return r.id === room.id; });
    };

    // Initialize wishlist status
    vm.rooms.forEach(function(room) {
      room.inWishlist = vm.isInWishlist(room);
    });

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
        alert('Discount code applied!');
      } else {
        vm.discountApplied = false;
        vm.discountAmount = 0;
        alert('Invalid discount code');
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
        alert('You can only compare up to ' + vm.maxCompare + ' rooms');
        return;
      }
      if (vm.compareRooms.find(function(r) { return r.id === room.id; })) {
        alert('Room already in comparison');
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
        alert('Please select at least 2 rooms to compare');
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
    vm.chatMessages = [
      { type: 'bot', text: 'Hello! Welcome to Hotel Ni Yuan. How can I assist you today?' }
    ];
    vm.chatInput = '';

    vm.toggleChat = function() {
      vm.showChat = !vm.showChat;
    };

    vm.sendChatMessage = function() {
      if (!vm.chatInput.trim()) return;
      
      vm.chatMessages.push({ type: 'user', text: vm.chatInput });
      vm.chatInput = '';
      
      // Simulate bot response
      $timeout(function() {
        const responses = [
          'Thank you for your message! Our team will get back to you shortly.',
          'I can help you with room bookings, amenities, or any questions about our hotel.',
          'Would you like to know more about our special offers?',
          'Our front desk is available 24/7 to assist you.'
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        vm.chatMessages.push({ type: 'bot', text: randomResponse });
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
      cardName: ''
    };

    vm.selectPaymentMethod = function(method) {
      vm.selectedPaymentMethod = method;
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

    vm.processPayment = function() {
      if (vm.selectedPaymentMethod === 'Card' && !vm.validateCard()) {
        alert('Please fill in all card details correctly');
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

    vm.openLogin = function() {
      vm.showLoginModal = true;
    };

    vm.closeLogin = function() {
      vm.showLoginModal = false;
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
          alert(vm.t('bookingCancelled') || 'Booking cancelled successfully');
        }
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
      } else {
        // Guest access - allow viewing without login
        vm.profile.name = 'Guest';
        vm.profile.email = '';
      }
      
      // Initialize scroll animations
      $timeout(function() {
        vm.initScrollAnimations();
      }, 500);
    };

    vm.init();

    $scope.vm = vm;
  }]);

