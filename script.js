angular.module('hotelApp', [])
  .controller('MainCtrl', ['$scope', '$timeout', function($scope, $timeout){
    const vm = this;
    vm.year = new Date().getFullYear();

    vm.profile = { avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80' };

    // 10 sample rooms (you can replace images/text later)
    vm.rooms = [
      { id:1, name: 'Hotel in Pasay', city: 'Pasay', price:3614, image:'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80', desc:'Comfortable stay close to the bay.', fav:false },
      { id:2, name: 'Apartment in Barangay 76', city: 'Pasay', price:3730, image:'https://images.unsplash.com/photo-1505691723518-34d40d7e7450?auto=format&fit=crop&w=1200&q=80', desc:'Cozy apartment for groups.', fav:true },
      { id:3, name: 'Condo in Tagaytay', city: 'Tagaytay', price:5327, image:'https://images.unsplash.com/photo-1501117716987-c8e9d3b2a6f6?auto=format&fit=crop&w=1200&q=80', desc:'Relax with a view of the lake.', fav:false },
      { id:4, name: 'Studio in Makati', city: 'Makati', price:4587, image:'https://images.unsplash.com/photo-1542345812-d98b5cd6cf98?auto=format&fit=crop&w=1200&q=80', desc:'Business-friendly studio in the city center.', fav:false },
      { id:5, name: 'Loft in Quezon City', city: 'Quezon City', price:2890, image:'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80', desc:'Affordable stylish loft.', fav:true },
      { id:6, name: 'Beach House in Batangas', city: 'Batangas', price:6490, image:'https://images.unsplash.com/photo-1505691723518-34d40d7e7450?auto=format&fit=crop&w=1200&q=80', desc:'Sunset views and ocean breeze.', fav:false },
      { id:7, name: 'Cabin in Baguio', city: 'Baguio', price:4120, image:'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80', desc:'Cozy cabin near pine forests.', fav:false },
      { id:8, name: 'Villa in Palawan', city: 'Palawan', price:11320, image:'https://images.unsplash.com/photo-1505691723518-34d40d7e7450?auto=format&fit=crop&w=1200&q=80', desc:'Private villa with snorkeling access.', fav:true },
      { id:9, name: 'Guesthouse in Iloilo', city: 'Iloilo', price:2410, image:'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80', desc:'Homey guesthouse with local flavor.', fav:false },
      { id:10, name: 'Penthouse in Ortigas', city: 'Pasig', price:7200, image:'https://images.unsplash.com/photo-1560347876-aeef00ee58a1?auto=format&fit=crop&w=1200&q=80', desc:'Top-floor penthouse with city view.', fav:false }
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
      vm.displayGuests = total + (total>1? ' guests':' guest');
    };
    vm.resetGuests = function(){ vm.guests = { adults:1, children:0, infants:0, pets:0 }; vm.updateGuestsText(); };
    vm.closeGuests = function(){ vm.showGuests = false; };

    // Suggestions
    vm.showSuggestions = false;
    vm.updateSuggestions = function(){ vm.showSuggestions = true; };
    vm.chooseSuggestion = function(s){ vm.search.where = s.title; vm.showSuggestions = false; vm.searchRooms(); };

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
      if(!vm.activeRange.checkin || (vm.activeRange.checkin && vm.activeRange.checkout)){
        vm.activeRange.checkin = d; vm.activeRange.checkout = null;
      } else if(vm.activeRange.checkin && !vm.activeRange.checkout){
        if(d <= vm.activeRange.checkin){ vm.activeRange.checkin = d; vm.activeRange.checkout = null; }
        else vm.activeRange.checkout = d;
      }
      vm.markSelection();
      vm.updateDisplayDates();
    };

    vm.markSelection = function(){
      // mark days across months
      vm.calendarMonths.forEach(cm => cm.days.forEach(day => {
        day.isSelected = (vm.activeRange.checkin && sameDay(day.date, vm.activeRange.checkin)) || (vm.activeRange.checkout && sameDay(day.date, vm.activeRange.checkout));
        day.inRange = false;
        if(vm.activeRange.checkin && vm.activeRange.checkout){
          if(day.date > vm.activeRange.checkin && day.date < vm.activeRange.checkout) day.inRange = true;
        }
      }));
    };

    function sameDay(a,b){ if(!a||!b) return false; return a.getFullYear()===b.getFullYear() && a.getMonth()===b.getMonth() && a.getDate()===b.getDate(); }

    vm.updateDisplayDates = function(){
      if(vm.activeRange.checkin) vm.displayCheckin = vm.formatDate(vm.activeRange.checkin);
      else vm.displayCheckin = '';
      if(vm.activeRange.checkout) vm.displayCheckout = vm.formatDate(vm.activeRange.checkout);
    };

    vm.clearDates = function(){ vm.activeRange = { checkin:null, checkout:null }; vm.displayCheckin = ''; vm.displayCheckout = ''; vm.markSelection(); };
    vm.closeCalendar = function(){ vm.showCalendar = false; };

    vm.formatDate = function(d){ if(!d) return ''; const opts = { month:'short', day:'numeric' }; return d.toLocaleDateString(undefined, opts); };

    // Simple search (filters by city/name) + updates pagination
    vm.search = { where:'', checkin:null, checkout:null, guests:1 };
    vm.searchRooms = function(){
      const q = (vm.search.where || vm.displayWhere || '').toLowerCase().trim();
      if(!q){ vm.filteredRooms = angular.copy(vm.rooms); vm.page = 1; vm.updatePagination(); return; }
      vm.filteredRooms = vm.rooms.filter(r => r.city.toLowerCase().includes(q) || r.name.toLowerCase().includes(q));
      vm.page = 1;
      vm.updatePagination();
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
    vm.openRoom = function(r){ alert('Open room: ' + r.name); };

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

    // init: compute pagination and favorites
    vm.updateGuestsText();
    vm.updatePagination();
    vm.updateGuestFavorites();

    // expose some fields on scope for debugging if needed
    $scope.vm = vm;
  }]);


  