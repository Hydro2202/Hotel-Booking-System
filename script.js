// main
angular.module('hotelApp', [])
      .controller('MainCtrl', ['$scope', function($scope){
        var vm = this;
        vm.year = new Date().getFullYear();

        vm.rooms = [
          { title: 'Deluxe Room', short: 'A comfortable room with city view.', price: 3200, image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=60' },
          { title: 'Superior Room', short: 'Spacious room with king bed.', price: 4200, image: 'https://images.unsplash.com/photo-1501117716987-c8e2f6a6b2f3?auto=format&fit=crop&w=800&q=60' },
          { title: 'Suite', short: 'Luxury suite with living area.', price: 8500, image: 'https://images.unsplash.com/photo-1505691723518-36a5b9e1d4b0?auto=format&fit=crop&w=800&q=60' }
        ];

        vm.reservation = {};

        vm.openReservation = function(room){
          if(room) vm.reservation.room = room;
          var modal = new bootstrap.Modal(document.getElementById('reservationModal'));
          modal.show();
        };

        vm.submitReservation = function(form){
          if(form.$valid){
            console.log('Reservation submitted:', vm.reservation);
            // show toast
            var toastEl = document.getElementById('bookingToast');
            var toast = new bootstrap.Toast(toastEl);
            toast.show();
            // close modal
            var modalEl = document.getElementById('reservationModal');
            var modalInstance = bootstrap.Modal.getInstance(modalEl);
            if(modalInstance) modalInstance.hide();
            // reset form data after small delay
            setTimeout(function(){
              $scope.$apply(function(){ vm.reservation = {}; form.$setPristine(); form.$setUntouched(); });
            }, 600);
          }
        };

      }]);