function openModal() {
            document.getElementById("myModal").style.display = "block";
        }
        function closeModal() {
            document.getElementById("myModal").style.display = "none";
}
        
function openOrder() {
   document.getElementById("order_form").style.display = "block";
        }
        function closeOrder() {
            document.getElementById("order_form").style.display = "none";
} 


function openPrice() {
            document.getElementById("myPrice").style.display = "block";
        }
        function closePrice() {
            document.getElementById("myPrice").style.display = "none";
        }
            
        function openSertificates() {
            document.getElementById("mySertificates").style.display = "block";
        }
        function closeSertificates() {
            document.getElementById("mySertificates").style.display = "none";
        }
            


        // core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// init Swiper:
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  ...
});