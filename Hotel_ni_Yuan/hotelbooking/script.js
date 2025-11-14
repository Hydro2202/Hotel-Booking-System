angular.module('hotelApp', [])
  .controller('MainCtrl', ['$scope', '$timeout', function($scope, $timeout){
    const vm = this;
    vm.year = new Date().getFullYear();

    // User profile - can be set from login
    vm.profile = { 
      name: localStorage.getItem('userName') || 'Guest',
      avatar: localStorage.getItem('userAvatar') || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop'
    };
    
    // Update profile from login
    vm.updateProfile = function(name, avatar){
      if(name) vm.profile.name = name;
      if(avatar) vm.profile.avatar = avatar;
      localStorage.setItem('userName', name || 'Guest');
      localStorage.setItem('userAvatar', avatar || vm.profile.avatar);
    };

    // Logout function
    vm.logout = function(){
      localStorage.removeItem('userName');
      localStorage.removeItem('userAvatar');
      vm.profile.name = 'Guest';
      vm.profile.avatar = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop';
      alert('Logged out successfully');
    };

    // 10 sample rooms with working image URLs
    vm.rooms = [
      { id:1, name: 'Hotel in Pasay', city: 'Pasay', price:3614, image:'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop', desc:'Comfortable stay close to the bay.', fav:false },
      { id:2, name: 'Apartment in Barangay 76', city: 'Pasay', price:3730, image:'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop', desc:'Cozy apartment for groups.', fav:true },
      { id:3, name: 'Condo in Tagaytay', city: 'Tagaytay', price:5327, image:'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop', desc:'Relax with a view of the lake.', fav:false },
      { id:4, name: 'Studio in Makati', city: 'Makati', price:4587, image:'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop', desc:'Business-friendly studio in the city center.', fav:false },
      { id:5, name: 'Loft in Quezon City', city: 'Quezon City', price:2890, image:'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=800&h=600&fit=crop', desc:'Affordable stylish loft.', fav:true },
      { id:6, name: 'Beach House in Batangas', city: 'Batangas', price:6490, image:'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop', desc:'Sunset views and ocean breeze.', fav:false },
      { id:7, name: 'Cabin in Baguio', city: 'Baguio', price:4120, image:'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop', desc:'Cozy cabin near pine forests.', fav:false },
      { id:8, name: 'Villa in Palawan', city: 'Palawan', price:11320, image:'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop', desc:'Private villa with snorkeling access.', fav:true },
      { id:9, name: 'Guesthouse in Iloilo', city: 'Iloilo', price:2410, image:'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&h=600&fit=crop', desc:'Homey guesthouse with local flavor.', fav:false },
      { id:10, name: 'Penthouse in Ortigas', city: 'Pasig', price:7200, image:'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop', desc:'Top-floor penthouse with city view.', fav:false }
    ];

    // recent / suggested (unchanged)
    vm.recentSearches = [
      { title: 'BGC', subtitle: 'Dec 8 - 9 · 3 guests' },
      { title: 'Makati', subtitle: 'Dec 8 - 9 · 2 guests' },
      { title: 'Pasay City', subtitle: 'Nov 5 - 8 · 2 guests' }
    ];

    vm.suggestedDestinations = [
      { title: 'Nearby', subtitle: "Find what's around you" },
      { title: 'Tagaytay, Philippines', subtitle: 'Popular getaway' },
      { title: 'Manila, Philippines', subtitle: 'City stays' }
    ];


    // Scroll functions for Popular stays
    vm.scrollLeft = function () {
      document.getElementById('popularScroll').scrollBy({ left: -300, behavior: 'smooth' });
    };

    vm.scrollRight = function () {
      document.getElementById('popularScroll').scrollBy({ left: 300, behavior: 'smooth' });
    };

    // Scroll functions for Guest Favorites
    vm.scrollLeftFav = function () {
      document.getElementById('favoriteScroll').scrollBy({ left: -300, behavior: 'smooth' });
    };

    vm.scrollRightFav = function () {
      document.getElementById('favoriteScroll').scrollBy({ left: 300, behavior: 'smooth' });
    };



    // pagination and filtered lists
    vm.filteredRooms = angular.copy(vm.rooms);
    vm.page = 1;
    vm.pageSize = 5;
    vm.totalPages = Math.ceil(vm.filteredRooms.length / vm.pageSize);
    vm.pagedRooms = [];

    // Guests
    vm.guests = { adults:1, children:0, infants:0, pets:0 };
    vm.displayGuests = '1 guest';
    vm.showGuests = false;
    vm.toggleGuests = function(){ vm.showGuests = !vm.showGuests; };
    vm.changeGuests = function(type, delta){
      vm.guests[type] = Math.max(0, vm.guests[type] + delta);
      if(vm.guests.adults < 1) vm.guests.adults = 1;
      vm.updateGuestsText();
    };
    vm.updateGuestsText = function(){
      const total = vm.guests.adults + vm.guests.children;
      let text = total + (total>1? ' guests':' guest');
      if(vm.guests.infants > 0) text += ', ' + vm.guests.infants + (vm.guests.infants>1? ' infants':' infant');
      if(vm.guests.pets > 0) text += ', ' + vm.guests.pets + (vm.guests.pets>1? ' pets':' pet');
      vm.displayGuests = text;
      vm.search.guests = total;
    };
    vm.resetGuests = function(){ vm.guests = { adults:1, children:0, infants:0, pets:0 }; vm.updateGuestsText(); };
    vm.closeGuests = function(){ 
      vm.showGuests = false; 
      vm.updateGuestsText();
    };

    // Suggestions
    vm.showSuggestions = false;
    vm.updateSuggestions = function(){ vm.showSuggestions = true; };
    vm.chooseSuggestion = function(s){ 
      vm.search.where = s.title; 
      vm.showSuggestions = false; 
      if(vm.searchRooms) vm.searchRooms(); 
    };

    // Calendar logic (unchanged)
    vm.showCalendar = false;
    vm.calendarBase = new Date();
    vm.calendarMonths = [];
    vm.calendarViewOffset = 0; // how many months ahead
    vm.activeRange = { checkin:null, checkout:null };
    vm.displayCheckin = '';
    vm.displayCheckout = '';

    function startOfMonth(d){ return new Date(d.getFullYear(), d.getMonth(), 1); }
    function endOfMonth(d){ return new Date(d.getFullYear(), d.getMonth()+1, 0); }

    vm.buildCalendar = function(){
      vm.calendarMonths = [];
      const m1 = new Date(vm.calendarBase.getFullYear(), vm.calendarBase.getMonth() + vm.calendarViewOffset, 1);
      const m2 = new Date(vm.calendarBase.getFullYear(), vm.calendarBase.getMonth() + vm.calendarViewOffset +1, 1);
      [m1,m2].forEach(m => {
        const monthTitle = m.toLocaleString('default', { month: 'long', year: 'numeric' });
        const firstDay = new Date(m.getFullYear(), m.getMonth(), 1);
        const startWeekday = firstDay.getDay();
        const daysInMonth = new Date(m.getFullYear(), m.getMonth()+1, 0).getDate();
        const days = [];
        // pad previous month days
        for(let i=0;i<startWeekday;i++){ days.push({ inMonth:false, date:new Date(m.getFullYear(), m.getMonth(), i - startWeekday + 1), isSelected:false, inRange:false }); }
        for(let d=1; d<=daysInMonth; d++){
          const dateObj = new Date(m.getFullYear(), m.getMonth(), d);
          days.push({ inMonth:true, date:dateObj, isSelected:false, inRange:false });
        }
        vm.calendarMonths.push({ title: monthTitle, days: days });
      });
      vm.markSelection();
    };

    vm.openCalendar = function(mode){ vm.calendarMode = mode; vm.showCalendar = true; vm.buildCalendar(); };
    vm.prevMonth = function(){ vm.calendarViewOffset--; vm.buildCalendar(); };
    vm.nextMonth = function(){ vm.calendarViewOffset++; vm.buildCalendar(); };

    vm.selectDate = function(day){
      if(!day.inMonth) return;
      const d = day.date;
      const today = new Date();
      today.setHours(0,0,0,0);
      if(d < today) return; // Prevent selecting past dates
      
      if(!vm.activeRange.checkin || (vm.activeRange.checkin && vm.activeRange.checkout)){
        vm.activeRange.checkin = d; 
        vm.activeRange.checkout = null;
      } else if(vm.activeRange.checkin && !vm.activeRange.checkout){
        if(d <= vm.activeRange.checkin){ 
          vm.activeRange.checkin = d; 
          vm.activeRange.checkout = null; 
        } else {
          vm.activeRange.checkout = d;
        }
      }
      vm.markSelection();
      vm.updateDisplayDates();
    };

    vm.markSelection = function(){
      const today = new Date();
      today.setHours(0,0,0,0);
      // mark days across months
      vm.calendarMonths.forEach(cm => cm.days.forEach(day => {
        day.isSelected = (vm.activeRange.checkin && sameDay(day.date, vm.activeRange.checkin)) || (vm.activeRange.checkout && sameDay(day.date, vm.activeRange.checkout));
        day.inRange = false;
        day.disabled = day.date < today; // Disable past dates
        if(vm.activeRange.checkin && vm.activeRange.checkout){
          if(day.date > vm.activeRange.checkin && day.date < vm.activeRange.checkout) day.inRange = true;
        }
      }));
    };

    function sameDay(a,b){ if(!a||!b) return false; return a.getFullYear()===b.getFullYear() && a.getMonth()===b.getMonth() && a.getDate()===b.getDate(); }

    vm.updateDisplayDates = function(){
      if(vm.activeRange.checkin) {
        vm.displayCheckin = vm.formatDate(vm.activeRange.checkin);
        vm.search.checkin = vm.activeRange.checkin;
      } else {
        vm.displayCheckin = '';
        vm.search.checkin = null;
      }
      if(vm.activeRange.checkout) {
        vm.displayCheckout = vm.formatDate(vm.activeRange.checkout);
        vm.search.checkout = vm.activeRange.checkout;
      } else {
        vm.displayCheckout = '';
        vm.search.checkout = null;
      }
    };

    vm.clearDates = function(){ 
      vm.activeRange = { checkin:null, checkout:null }; 
      vm.displayCheckin = ''; 
      vm.displayCheckout = ''; 
      vm.search.checkin = null;
      vm.search.checkout = null;
      vm.markSelection(); 
    };
    vm.closeCalendar = function(){ 
      vm.showCalendar = false; 
      vm.updateDisplayDates();
    };

    vm.formatDate = function(d){ if(!d) return ''; const opts = { month:'short', day:'numeric' }; return d.toLocaleDateString(undefined, opts); };

    // Simple search (filters by city/name) + updates pagination
    vm.search = { where:'', checkin:null, checkout:null, guests:1 };
    vm.searchRooms = function(){
      const q = (vm.search.where || '').toLowerCase().trim();
      if(!q){ 
        vm.filteredRooms = angular.copy(vm.rooms); 
        vm.page = 1; 
        vm.updatePagination(); 
        return; 
      }
      vm.filteredRooms = vm.rooms.filter(r => 
        r.city.toLowerCase().includes(q) || 
        r.name.toLowerCase().includes(q) ||
        (r.desc && r.desc.toLowerCase().includes(q))
      );
      vm.page = 1;
      vm.updatePagination();
      // Close suggestions after search
      vm.showSuggestions = false;
    };

    // Pagination helpers
    vm.updatePagination = function(){
      vm.totalPages = Math.max(1, Math.ceil(vm.filteredRooms.length / vm.pageSize));
      if(vm.page > vm.totalPages) vm.page = vm.totalPages;
      const start = (vm.page - 1) * vm.pageSize;
      vm.pagedRooms = vm.filteredRooms.slice(start, start + vm.pageSize);
    };

    vm.nextPage = function(){
      if(vm.page < vm.totalPages){ vm.page++; vm.updatePagination(); }
    };
    vm.prevPage = function(){
      if(vm.page > 1){ vm.page--; vm.updatePagination(); }
    };

    vm.toggleFav = function(room){
      room.fav = !room.fav;
      vm.updateGuestFavorites();
    };
    
    // Detail page functionality
    vm.showDetailPage = false;
    vm.selectedRoom = null;
    vm.openRoom = function(r, event){ 
      if(!r) return;
      if(event) event.stopPropagation();
      console.log('Opening room:', r.name);
      vm.selectedRoom = angular.copy(r); // Make a copy to avoid reference issues
      vm.showDetailPage = true;
      // Scroll to top
      $timeout(function(){
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    };
    vm.closeDetailPage = function(e){
      if(e) e.preventDefault();
      vm.showDetailPage = false;
      vm.selectedRoom = null;
      $timeout(function(){
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    };

    // Reserve/Booking functionality
    vm.reserveRoom = function(){
      if(!vm.selectedRoom) return;
      
      // Check if dates are selected
      if(!vm.displayCheckin || !vm.displayCheckout){
        alert('Please select check-in and check-out dates');
        return;
      }

      // Calculate total price
      const checkIn = new Date(vm.activeRange.checkin);
      const checkOut = new Date(vm.activeRange.checkout);
      const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
      const rateType = document.querySelector('input[name="rateType"]:checked')?.id;
      const basePrice = vm.selectedRoom.price * nights;
      const totalPrice = rateType === 'refundable' ? basePrice * 1.1 : basePrice;

      // Show confirmation
      const message = `Booking Confirmation\n\n` +
        `Room: ${vm.selectedRoom.name}\n` +
        `Location: ${vm.selectedRoom.city}\n` +
        `Check-in: ${vm.displayCheckin}\n` +
        `Check-out: ${vm.displayCheckout}\n` +
        `Guests: ${vm.displayGuests}\n` +
        `Nights: ${nights}\n` +
        `Rate Type: ${rateType === 'refundable' ? 'Refundable' : 'Non-refundable'}\n` +
        `Total Price: ₱${totalPrice.toLocaleString()}\n\n` +
        `Your reservation has been confirmed!`;

      if(confirm(message)){
        alert('Booking successful! You will receive a confirmation email shortly.');
        // In a real app, you would send this data to a server
        console.log('Booking data:', {
          room: vm.selectedRoom,
          checkIn: vm.displayCheckin,
          checkOut: vm.displayCheckout,
          guests: vm.guests,
          totalPrice: totalPrice,
          rateType: rateType
        });
      }
    };

    // Guest favorites (compute 4 most-favored or fallback to cheapest)
    vm.guestFavorites = [];
    vm.updateGuestFavorites = function(){
      const favs = vm.rooms.filter(r => r.fav);
      if(favs.length >= 1){
        vm.guestFavorites = favs.slice(0,4);
      } else {
        // fallback: cheapest 4
        vm.guestFavorites = vm.rooms.slice().sort((a,b)=>a.price-b.price).slice(0,4);
      }
    };

    // helper to close popups when clicking outside
    document.addEventListener('click', function(e){ $timeout(function(){
      if(!e.target.closest('.where-suggestions') && !e.target.closest('input[ng-model="vm.search.where"]')) vm.showSuggestions = false;
      if(!e.target.closest('.guests-popup') && !e.target.closest('input[ng-model="vm.displayGuests"]')) vm.showGuests = false;
      if(!e.target.closest('.calendar-popup') && !e.target.closest('input[ng-model="vm.displayCheckin"]') && !e.target.closest('input[ng-model="vm.displayCheckout"]')) vm.showCalendar = false;
    }, 10); });

    // --- Scroll shrink behavior for search card ---
    (function setupScrollShrink(){
      const searchCard = document.querySelector('.search-card');
      let lastScroll = window.scrollY || 0;
      let ticking = false;
      const SHRINK_THRESHOLD = 80; // px scrolled before shrink
      function onScroll(){
        if(!searchCard) return;
        const cur = window.scrollY || 0;
        // add pinned when near top
        if(cur > 8) searchCard.classList.add('pinned'); else searchCard.classList.remove('pinned');

        if(cur > SHRINK_THRESHOLD && cur > lastScroll){
          // scrolling down past threshold -> shrink
          searchCard.classList.add('shrunk');
        } else if(cur < lastScroll){
          // scrolling up -> remove shrink if near top or going up
          if(cur < SHRINK_THRESHOLD + 20) searchCard.classList.remove('shrunk');
          else searchCard.classList.remove('shrunk');
        }
        lastScroll = cur;
        ticking = false;
      }
      window.addEventListener('scroll', function(){
        if(!ticking){ requestAnimationFrame(onScroll); ticking = true; }
      });
    })();

    // Amenities data
    vm.amenities = [
      { icon: 'fa-solid fa-wifi', name: 'WiFi' },
      { icon: 'fa-solid fa-tv', name: 'TV' },
      { icon: 'fa-solid fa-snowflake', name: 'Air conditioning' },
      { icon: 'fa-solid fa-utensils', name: 'Kitchen' },
      { icon: 'fa-solid fa-car', name: 'Free parking' },
      { icon: 'fa-solid fa-water', name: 'Pool' },
      { icon: 'fa-solid fa-dumbbell', name: 'Gym' },
      { icon: 'fa-solid fa-hot-tub', name: 'Hot tub' },
      { icon: 'fa-solid fa-fire', name: 'Fireplace' },
      { icon: 'fa-solid fa-wind', name: 'Washer' },
      { icon: 'fa-solid fa-shield-halved', name: 'Security system' },
      { icon: 'fa-solid fa-paw', name: 'Pet friendly' }
    ];

    // Reviews data
    vm.reviews = [
      { 
        name: 'Sarah Johnson', 
        date: 'December 2024',
        text: 'Amazing stay! The place was exactly as described and the host was very responsive. Would definitely come back!',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80'
      },
      { 
        name: 'Michael Chen', 
        date: 'November 2024',
        text: 'Great location and beautiful views. The room was clean and comfortable. Highly recommend!',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80'
      },
      { 
        name: 'Emily Rodriguez', 
        date: 'November 2024',
        text: 'Perfect for a weekend getaway. The amenities were excellent and the check-in process was smooth.',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80'
      },
      { 
        name: 'David Kim', 
        date: 'October 2024',
        text: 'Loved the place! Very peaceful and relaxing. The host provided great recommendations for local spots.',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80'
      }
    ];

    // Load profile from localStorage on init
    function loadProfile() {
      const savedName = localStorage.getItem('userName');
      const savedAvatar = localStorage.getItem('userAvatar');
      if(savedName) vm.profile.name = savedName;
      if(savedAvatar) vm.profile.avatar = savedAvatar;
    }
    loadProfile();

    // init: compute pagination and favorites
    vm.updateGuestsText();
    vm.updatePagination();
    vm.updateGuestFavorites();
    // Initialize calendar view
    vm.buildCalendar();

    // expose some fields on scope for debugging if needed
    $scope.vm = vm;
  }]);


  