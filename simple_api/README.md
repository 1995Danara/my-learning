API
Ресторан
GET /api/restaurants/ - все рестораны;
GET /api/restaurant/:restaurantId - ресторан по айдишки (/api/restaurant/d32n32d8huasj );
Блюда
GET /api/dishes?restaurantId=:restaurantId - получить блюда по айди ресторана (/api/dishes?restaurantId=d32n32d8huasj)
GET /api/dish/:dishId - блюдо по айдишки (/api/dish/djshfusdhfi29 )
Отзывы
GET /api/reviews?restaurantId=:restaurantId - получить отзывы по айди ресторана (/api/reviews?restaurantId=d32n32d8huasj)
POST /api/review/:restaurantId - создать отзыв по айди ресторана (/api/review/d32n32d8huasj, а в бади сам отзыв без айдишки)
PATCH /api/review/:reviewId - изменить отзыв по айди ресторана (/api/review/d32n32d8huasj, а в бади сам отзыв без айдишки)
Пользователи
GET /api/users/ - все пользователи;
